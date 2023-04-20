import { Grid, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

import { updatePediatric_GCS } from 'apis/survey';
import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';
import MuiDialog from 'components/MuiDialog';
import {
  TPediaTric_GCSDefaultValues,
  SurveyDialogProps,
} from 'routes/Main/Survey/type';

import CommonPatientInfo from '../components/CommonPatientInfo';
import Pediatric_GCSContents from './Pediatric_GCSContents';

const Pediatric_GCS = (
  props: SurveyDialogProps<TPediaTric_GCSDefaultValues>
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

  const { handleSubmit, watch, register, getValues, setValue } = useForm({
    defaultValues,
  });

  const onSubmit = (data: TPediaTric_GCSDefaultValues) => {
    const { patient_id } = patientInfo;
    const { eye_opening, verbal_response, motor_response } = data;

    const request = {
      user_id,
      patient_id: patientInfo.patient_id,
      pediatric_gcs_survey: { ...data },
    };

    updatePediatric_GCS(request)
      .then(({ data: { rc } }) => {
        if (rc !== 1) return onResultCode(rc);
        onUpdateIsSave(true);
        onSuccess('Pediatric GCS 저장에 성공하였습니다.');
      })
      .catch(e => onFail('Pediatric GCS 저장에 실패하였습니다.', e));
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
          Pediatric GCS (Glasgow Coma Scale) <br /> - 현재 테스트 중입니다. -
        </Typography>
        <CommonPatientInfo patientInfo={patientInfo} nurseName={nurseName} />
        <Pediatric_GCSContents {...formProps} />
      </Grid>
    </MuiDialog.SurveyForm>
  );
};

export default Pediatric_GCS;
