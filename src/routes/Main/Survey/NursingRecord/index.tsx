import { useState } from 'react';
import { useForm } from 'react-hook-form';

import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';

import { Typography, Grid, TableCell } from '@mui/material';
import MuiDialog from 'components/MuiDialog';

import { SurveyDialogProps, TNursingProcessDefaultValues } from '../type';

import CommonPatientInfo from '../components/CommonPatientInfo';
import RecordComponents from './RecordComponents';

import { updateNursingProcess } from 'apis/survey';
import { INursingProcess } from 'apis/survey/type';

const NursingRecord = (
  props: SurveyDialogProps<TNursingProcessDefaultValues>
) => {
  const {
    title,
    isOpen,
    disabled,
    defaultValues,
    user_id,
    nurseName,
    patientInfo,
    onClose,
  } = props;

  const { onUpdateIsSave } = useSurvey();
  const { onSuccess, onFail, onResultCode, onRequired } = useNotification();
  const { handleSubmit, watch, register, getValues, setValue } = useForm({
    defaultValues,
  });
  const [yesDelet, setYesDelet] = useState(false);

  const onSubmit = (data: TNursingProcessDefaultValues) => {
    const { nursing_process_narrative_note_survey } = data;

    const request = {
      user_id,
      patient_id: patientInfo.patient_id,
      nursing_process_narrative_note_survey:
        nursing_process_narrative_note_survey?.map(
          ({
            subjective,
            objective,
            diagnosis,
            goal,
            plan,
            reason,
            perform,
            evaluation,
          }: INursingProcess) => ({
            subjective,
            objective,
            diagnosis,
            goal,
            plan,
            reason,
            perform,
            evaluation,
          })
        ),
    };

    console.log('request', request);

    updateNursingProcess(request)
      .then(({ data: { rc } }) => {
        if (rc !== 1) return onResultCode(rc);
        if (yesDelet === true) {
          onUpdateIsSave(true);
        } else {
          onUpdateIsSave(true);
          onSuccess('간호과정 서술기록 저장에 성공하였습니다.');
        }
      })
      .catch(e => onFail('간호과정 서술기록 저장에 실패하였습니다.', e));
  };

  const formProps = {
    disabled,
    watch,
    register,
    getValues,
    setValue,
    onSuccess,
    onRequired,
  };

  return (
    <MuiDialog.SurveyFormRecheckSave
      title={title}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={disabled ? undefined : handleSubmit(onSubmit)}
      update_at={defaultValues?.update_at}
      yesDelet={yesDelet}
      setYesDelet={setYesDelet}
    >
      <Grid
        container
        wrap="wrap"
        rowSpacing={5}
        columnSpacing={3}
        sx={{ py: 5, px: 1 }}
      >
        <Typography
          sx={{
            margin: '40px auto 0px auto',
            fontWeight: '700',
            fontSize: '16px',
            textAlign: 'center',
          }}
        >
          간호과정 서술기록
          <br />- 테스트 중입니다. -
        </Typography>
        <CommonPatientInfo patientInfo={patientInfo} nurseName={nurseName} />
        <RecordComponents {...formProps} />
      </Grid>
    </MuiDialog.SurveyFormRecheckSave>
  );
};

export default NursingRecord;
