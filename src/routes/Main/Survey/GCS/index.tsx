import { Grid, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

import { updateGCS } from 'apis/survey';
import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';
import MuiDialog from 'components/MuiDialog';
import { TGCSDefaultValues, SurveyDialogProps } from 'routes/Main/Survey/type';

import CommonPatientInfo from '../components/CommonPatientInfo';
import GCSContents from './GCSContents';

const GCS = (props: SurveyDialogProps<TGCSDefaultValues>) => {
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

  const { handleSubmit, watch, register, getValues, setValue } = useForm({
    defaultValues,
  });

  const onSubmit = (data: TGCSDefaultValues) => {
    const { patient_id } = patientInfo;
    const { eye_opening, verbal_response, motor_response } = data;

    const request = {
      user_id,
      patient_id: patientInfo.patient_id,
      gcs_survey: { ...data },
    };

    updateGCS(request)
      .then(({ data: { rc } }) => {
        if (rc !== 1) return onResultCode(rc);
        onUpdateIsSave(true);
        onSuccess('GCS 저장에 성공하였습니다.');
      })
      .catch(e => onFail('GCS 저장에 실패하였습니다.', e));
  };

  const formProps = {
    disabled,
    watch,
    register,
    getValues,
    setValue,
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
          GCS (Glasgow Coma Scale)
        </Typography>
        <CommonPatientInfo patientInfo={patientInfo} nurseName={nurseName} />
        <GCSContents {...formProps} />
      </Grid>
    </MuiDialog.SurveyForm>
  );
};

export default GCS;
