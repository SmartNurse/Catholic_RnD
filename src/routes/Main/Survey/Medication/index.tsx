import { format } from 'date-fns';
import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import { IMedication } from 'apis/survey/type';
import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';
import MuiDialog from 'components/MuiDialog';
import {
  TMedicationSurveyDefaultValues,
  SurveyDialogProps,
} from 'routes/Main/type';

import PatientInfo from './PatientInfo';
import Medications from './Medications';
import { updateMedication } from 'apis/survey';

const Medication = (
  props: SurveyDialogProps<TMedicationSurveyDefaultValues>
) => {
  const { title, isOpen, defaultValues, user_id, patientInfo, onClose } = props;

  const { onUpdateIsSave } = useSurvey();
  const { onSuccess, onFail, onResultCode } = useNotification();

  const { handleSubmit, watch, getValues, setValue } = useForm({
    defaultValues,
  });

  const onSubmit = (data: TMedicationSurveyDefaultValues) => {
    const { patient_medications } = data;

    const request = {
      user_id,
      patient_id: patientInfo.patient_id,
      patientMedicationList: patient_medications.map(
        ({
          pt_medication_uuid,
          medication_time,
          medication_do,
        }: IMedication) => ({
          medication_do,
          pt_medication_uuid,
          medication_time: medication_time
            ? format(new Date(medication_time), 'hh:mm a')
            : null,
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
    <MuiDialog.SaveForm
      title={title}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit(onSubmit)}
      update_at={defaultValues.update_at}
    >
      <Grid
        container
        wrap="wrap"
        rowSpacing={5}
        columnSpacing={3}
        sx={{ py: 5, px: 1 }}
      >
        <PatientInfo patientInfo={patientInfo} />
        <Medications watch={watch} getValues={getValues} setValue={setValue} />
      </Grid>
    </MuiDialog.SaveForm>
  );
};

export default Medication;
