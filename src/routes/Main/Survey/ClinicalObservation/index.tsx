import { Grid, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

import { updateClinicObservation } from 'apis/survey';
import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';
import MuiDialog from 'components/MuiDialog';
import {
  TClinicalObservationDefaultValues,
  SurveyDialogProps,
} from 'routes/Main/Survey/type';

import CommonPatientInfo from '../components/CommonPatientInfo';
import VitalSignGraph from './VitalSignGraph';
import VitalSign from './VitalSign';
import IOCheck from './IOCheck';

const ClinicalObservation = (
  props: SurveyDialogProps<TClinicalObservationDefaultValues>
) => {
  const {
    title,
    isOpen,
    disabled,
    defaultValues,
    user_id,
    patientInfo,
    nurseName,
    onClose,
  } = props;

  const { onUpdateIsSave } = useSurvey();
  const { onSuccess, onFail, onResultCode, onRequired } = useNotification();

  const { handleSubmit, watch, getValues, setValue } = useForm({
    defaultValues,
  });

  const onSubmit = (data: TClinicalObservationDefaultValues) => {
    const { vital_sign, io_check, survey_uuid } = data;

    const request = {
      user_id,
      survey_uuid,
      patient_id: patientInfo.patient_id,
      vital_sign: vital_sign ? JSON.stringify(vital_sign) : '',
      io_check: io_check ? JSON.stringify(io_check) : '',
    };

    console.log(vital_sign);

    updateClinicObservation(request)
      .then(({ data: { rc } }) => {
        if (rc !== 1) return onResultCode(rc);

        onUpdateIsSave(true);
        onSuccess('임상관찰 기록지 저장에 성공하였습니다.');
      })
      .catch(e => onFail('임상관찰 기록지 저장에 실패하였습니다.', e));
  };

  const formProps = {
    disabled,
    watch,
    getValues,
    setValue,
    onSuccess,
    onRequired,
  };

  return (
    <MuiDialog.SurveyForm
      title={title}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={disabled ? undefined : handleSubmit(onSubmit)}
      update_at={defaultValues?.update_at}
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
          임상관찰 기록지
        </Typography>
        <CommonPatientInfo patientInfo={patientInfo} nurseName={nurseName} />
        <VitalSignGraph {...formProps} />
        <VitalSign {...formProps} />
        <IOCheck {...formProps} />
      </Grid>
    </MuiDialog.SurveyForm>
  );
};

export default ClinicalObservation;
