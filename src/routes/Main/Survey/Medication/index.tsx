import { Grid, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

import { IMedication } from 'apis/survey/type';
import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';
import MuiDialog from 'components/MuiDialog';
import {
  TMedicationDefaultValues,
  SurveyDialogProps,
} from 'routes/Main/Survey/type';

import CommonPatientInfo from '../components/CommonPatientInfo';
import Medications from './Medications';
import { updateMedication } from 'apis/survey';

const Medication = (props: SurveyDialogProps<TMedicationDefaultValues>) => {
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
  const { onSuccess, onFail, onResultCode } = useNotification();

  const { handleSubmit, watch, getValues, setValue } = useForm({
    defaultValues,
  });

  const onSubmit = (data: TMedicationDefaultValues) => {
    const { medication_surveys } = data;

    const request = {
      user_id,
      patient_id: patientInfo.patient_id,
      infos: medication_surveys.map(
        ({
          survey_uuid,
          pt_medication_uuid,
          medication_time,
          medication_do,
        }: IMedication) => ({
          survey_uuid,
          pt_medication_uuid,
          medication_time,
          medication_do,
        })
      ),
    };

    updateMedication(request)
      .then(({ data: { rc } }) => {
        if (rc !== 1) return onResultCode(rc);

        onUpdateIsSave(true);
        onSuccess('투약기록지 저장에 성공하였습니다.');
      })
      .catch(e => onFail('투약기록지 저장에 실패하였습니다.', e));
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
          투약 기록지
        </Typography>
        <CommonPatientInfo patientInfo={patientInfo} nurseName={nurseName} />
        <Medications
          watch={watch}
          disabled={disabled}
          getValues={getValues}
          setValue={setValue}
        />
      </Grid>
    </MuiDialog.SurveyForm>
  );
};

export default Medication;
