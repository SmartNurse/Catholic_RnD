import { useSnackbar } from 'notistack';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { TabContext, TabList } from '@mui/lab';
import { Box, Button, ButtonGroup, Tab, Typography } from '@mui/material';

import Nanda from './Nanda';
import Soapie from './Soapie';
import FocusDar from './FocusDar';
import NarrativeRecord from './NarrativeRecord';
import Remarks from './Remarks';
import { StyledTabPanel } from '../style';
import { RECORD_TYPE } from '../type';
import { getNandaDomain, createNursingRecord } from '../../../apis/main';
import { initialNursingRecord } from '../initialStates';
import { INames } from '../../../apis/main/type';

interface Props {
  user_id: number;
  patient_id: number;
  onUpdateNursingRecord: (value: boolean) => void;
}

const NursingRecords = ({
  user_id,
  patient_id,
  onUpdateNursingRecord,
}: Props) => {
  const { enqueueSnackbar } = useSnackbar();
  const { register, watch, setValue, handleSubmit, reset } = useForm({
    defaultValues: { recordType: RECORD_TYPE.NANDA } as any,
  });

  const currentTab = watch('recordType');

  // GetNandaDomains
  const [domainNames, setDomainNames] = useState<INames[]>([]);
  useEffect(() => {
    getNandaDomain().then(({ data }) => {
      setDomainNames(data.names);
      setValue('domain', data.names[0].kor);
    });
  }, [setValue]);

  // Submit
  const onSubmit = (data: any) => {
    let content = {};
    const { recordType } = data;

    // combine request content
    const findContent = (keys: string[]) =>
      keys.reduce(
        (prev, next) => (data[next] ? { ...prev, [next]: data[next] } : prev),
        {}
      );

    // update content
    switch (recordType) {
      case RECORD_TYPE.NANDA: {
        const { nanda } = initialNursingRecord;
        content = findContent(Object.keys(nanda));
        break;
      }
      case RECORD_TYPE.SOAPIE: {
        const { soapie } = initialNursingRecord;
        content = findContent(Object.keys(soapie));
        break;
      }
      case RECORD_TYPE.FOCUS_DAR: {
        const { focusDar } = initialNursingRecord;
        content = findContent(Object.keys(focusDar));
        break;
      }
      case RECORD_TYPE.NARRATIVE_RECORD: {
        const { narrativeRecord } = initialNursingRecord;
        content = findContent(Object.keys(narrativeRecord));
        break;
      }
      case RECORD_TYPE.REMARKS: {
        const { remarks } = initialNursingRecord;
        content = findContent(Object.keys(remarks));
        break;
      }
    }

    createNursingRecord({
      userId: user_id,
      patientId: patient_id!,
      recordType: Number(recordType),
      content: JSON.stringify(content),
    })
      .then(() => {
        reset();
        onUpdateNursingRecord(true);
        const message = '간호기록을 저장하였습니다.';
        enqueueSnackbar(message, { variant: 'success' });
      })
      .catch(e => {
        const message = `간호기록 저장 실패하였습니다.\n오류: ${e}`;
        enqueueSnackbar(message, { variant: 'error' });
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{ mt: 2.5, mb: 1.5 }}
      >
        <Typography variant="subtitle2" fontSize={13}>
          간호 기록 작성
        </Typography>
        {/* TODO Time Picker */}
      </Box>
      <TabContext value={currentTab}>
        <TabList
          variant="fullWidth"
          onChange={(_, value) => setValue('recordType', value)}
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
            domainNames={domainNames}
          />
        </StyledTabPanel>
        <StyledTabPanel value={RECORD_TYPE.SOAPIE}>
          <Soapie register={register} />
        </StyledTabPanel>
        <StyledTabPanel value={RECORD_TYPE.FOCUS_DAR}>
          <FocusDar register={register} />
        </StyledTabPanel>
        <StyledTabPanel value={RECORD_TYPE.NARRATIVE_RECORD}>
          <NarrativeRecord register={register} />
        </StyledTabPanel>
        <StyledTabPanel value={RECORD_TYPE.REMARKS}>
          <Remarks register={register} />
        </StyledTabPanel>

        <ButtonGroup
          size="small"
          color="info"
          sx={{ display: 'flex', justifyContent: 'flex-end' }}
        >
          <Button variant="text" color="inherit" onClick={() => reset()}>
            취소
          </Button>
          <Button variant="text" type="submit">
            저장
          </Button>
        </ButtonGroup>
      </TabContext>
    </form>
  );
};

export default NursingRecords;
