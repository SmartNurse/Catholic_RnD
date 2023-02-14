import { useForm } from 'react-hook-form';
import { useCallback, useEffect, useState } from 'react';
import { TabContext, TabList } from '@mui/lab';
import { format } from 'date-fns';
import { MobileTimePicker } from '@mui/x-date-pickers';
import { AccessTime } from '@mui/icons-material';
import { Box, Button, ButtonGroup, Tab, Typography, useTheme } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

import { INames } from 'apis/main/type';
import {
  getNandaDomain,
  createNursingRecord,
  updateNursingRecord,
} from 'apis/main';
import useUser from 'store/user/useUser';
import useStudent from 'store/student/useStudent';
import usePatient from 'store/patient/usePatient';
import MuiTextField from 'components/Form/MuiTextField';
import { requiredSelect } from 'components/Form/requiredItems';
import useNotification from 'hooks/useNotification';
import { findKeyValue } from 'utils/convert';

import { RECORD_TYPE } from '../Survey/type';
import { initialNursingRecord } from '../Survey/initialStates';

import Nanda from './Nanda';
import Soapie from './Soapie';
import Remarks from './Remarks';
import FocusDar from './FocusDar';
import NarrativeRecord from './NarrativeRecord';
import { StyledTabPanel } from '../style';

interface Props {
  coachRef: any;
}

const NursingRecords = ({ coachRef }: Props) => {
  const { palette } = useTheme();
  const { isStudent } = useUser();
  const { student_uuid: user_id } = useStudent();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { nursingRecord, patientInfo, onClearNursingRecord } = usePatient();
  const { onSuccess, onFail, onRequired } = useNotification();
  const { register, watch, setValue, handleSubmit, reset } = useForm();

  const [recordType, setRecordType] = useState<string>(RECORD_TYPE.NANDA);
  const [recordTime, setRecordTime] = useState<Date | null>(new Date());

  const [domainNames, setDomainNames] = useState<INames[]>([]);
  useEffect(() => {
    if (domainNames.length !== 0) return;
    getNandaDomain().then(({ data }) => setDomainNames(data.names));
  }, [domainNames]);

  const onRestNursingRecord = useCallback(() => {
    setRecordTime(new Date());
    setRecordType(RECORD_TYPE.NANDA);
    reset(initialNursingRecord.nanda);
    onClearNursingRecord();
  }, [reset, onClearNursingRecord]);

  useEffect(() => {
    if (!nursingRecord) return onRestNursingRecord();

    const { record_time, record_type, content } = nursingRecord;
    reset(JSON.parse(content));
    setRecordType(`${record_type}`);
    setRecordTime(new Date(record_time));
  }, [nursingRecord, reset, onRestNursingRecord]);

  const onSubmit = (data: any) => {
    // 간호기록 시간 입력 체크
    if (!recordTime) return onRequired('REQUIRED.RECORD.TIME');

    let contentKeys: string[] = [];

    // update content
    switch (recordType) {
      case RECORD_TYPE.NANDA: {
        contentKeys = Object.keys(initialNursingRecord.nanda);
        break;
      }
      case RECORD_TYPE.SOAPIE: {
        contentKeys = Object.keys(initialNursingRecord.soapie);
        break;
      }
      case RECORD_TYPE.FOCUS_DAR: {
        contentKeys = Object.keys(initialNursingRecord.focusDar);
        break;
      }
      case RECORD_TYPE.NARRATIVE_RECORD: {
        contentKeys = Object.keys(initialNursingRecord.narrativeRecord);
        break;
      }
      case RECORD_TYPE.REMARKS: {
        contentKeys = Object.keys(initialNursingRecord.remarks);
        break;
      }
    }

    const content = findKeyValue(data, contentKeys);

    // nanda 필수값 체크
    if (recordType === RECORD_TYPE.NANDA) {
      if (!requiredSelect(content?.domain)) {
        return onRequired('REQUIRED.DOMAIN');
      }
      if (!requiredSelect(content?.class)) {
        return onRequired('REQUIRED.CLASS');
      }
      if (!requiredSelect(content?.diagnosis)) {
        return onRequired('REQUIRED.DIAGNOSIS');
      }
    }

    const request = {
      recordType: Number(recordType),
      recordTime: format(recordTime, 'yyyy-MM-dd HH:mm'),
      content: JSON.stringify(content),
    };

    // 간호기록 수정
    if (nursingRecord) {
      return updateNursingRecord({ ...nursingRecord, ...request })
        .then(() => {
          onRestNursingRecord();
          navigate(`${pathname}?isUpdateNursingRecord=true`);
          onSuccess('간호기록을 수정하였습니다.');
        })
        .catch(e => onFail('간호기록 수정 실패하였습니다.', e));
    }

    // 간호기록 생성
    createNursingRecord({
      userId: user_id,
      patientId: patientInfo!.patient_id,
      ...request,
    })
      .then(() => {
        onRestNursingRecord();
        navigate(`${pathname}?isUpdateNursingRecord=true`);
        onSuccess('간호기록을 저장하였습니다.');
      })
      .catch(e => onFail('간호기록 저장 실패하였습니다.', e));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mt: 2.5, mb: 1.5 }}
      >
        <Typography variant="subtitle2" fontSize={13}>
          간호 기록 작성
        </Typography>
        <MobileTimePicker
          value={recordTime}
          onChange={setRecordTime}
          disabled={!isStudent}
          renderInput={params => (
            <MuiTextField
              {...params}
              fullWidth={false}
              sx={{ width: 130 }}
              InputProps={{ endAdornment: <AccessTime /> }}
            />
          )}
        />
      </Box>
      <TabContext value={recordType}>
        <TabList
          variant="fullWidth"
          onChange={(_, value) => setRecordType(value)}
          ref={coachRef}
        >
          <Tab label="NANDA" value={RECORD_TYPE.NANDA} />
          <Tab label="SOAPIE" value={RECORD_TYPE.SOAPIE} />
          <Tab label="Focus DAR" value={RECORD_TYPE.FOCUS_DAR} />
          <Tab label="서술기록" value={RECORD_TYPE.NARRATIVE_RECORD} />
          <Tab label="특기사항" value={RECORD_TYPE.REMARKS} />
        </TabList>
        <StyledTabPanel value={RECORD_TYPE.NANDA}>
          <Nanda
            watch={watch}
            setValue={setValue}
            register={register}
            disabled={!isStudent}
            domainNames={domainNames}
          />
        </StyledTabPanel>
        <StyledTabPanel value={RECORD_TYPE.SOAPIE}>
          <Soapie register={register} disabled={!isStudent} />
        </StyledTabPanel>
        <StyledTabPanel value={RECORD_TYPE.FOCUS_DAR}>
          <FocusDar register={register} disabled={!isStudent} />
        </StyledTabPanel>
        <StyledTabPanel value={RECORD_TYPE.NARRATIVE_RECORD}>
          <NarrativeRecord register={register} disabled={!isStudent} />
        </StyledTabPanel>
        <StyledTabPanel value={RECORD_TYPE.REMARKS}>
          <Remarks register={register} disabled={!isStudent} />
        </StyledTabPanel>

        <ButtonGroup
          size="small"
          color="info"
          sx={{ display: 'flex', justifyContent: 'flex-end' }}
        >
          <Button
            sx={{ color: `${palette.mode === "dark" ? "lightgrey" : palette.text.primary}` }}
            variant="text"
            color="inherit"
            disabled={!isStudent}
            onClick={onRestNursingRecord}
          >
            취소
          </Button>
          <Button
            sx={{ color: `${palette.mode === "dark" ? "white" : palette.primary.main}` }}
            variant="text"
            type="submit"
            disabled={!patientInfo || !isStudent}
          >
            저장
          </Button>
        </ButtonGroup>
      </TabContext>
    </form>
  );
};

export default NursingRecords;
