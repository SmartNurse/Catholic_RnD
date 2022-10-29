import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import { updateClinicObservation } from 'apis/survey';
import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';
import MuiDialog from 'components/MuiDialog';
import {
  TClinicalObservationDefaultValues,
  SurveyDialogProps,
} from 'routes/Main/Survey/type';

import PatientInfo from './PatientInfo';
import VitalSign from './VitalSign';
import IOCheck from './IOCheck';

const ClinicalObservation = (
  props: SurveyDialogProps<TClinicalObservationDefaultValues>
) => {
  const { title, isOpen, defaultValues, user_id, patientInfo, onClose } = props;

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

    updateClinicObservation(request)
      .then(({ data: { rc } }) => {
        if (rc !== 1) return onResultCode(rc);

        onUpdateIsSave(true);
        onSuccess('임상관찰 기록지 저장에 성공하였습니다.');
      })
      .catch(e => onFail('임상관찰 기록지 저장에 실패하였습니다.', e));
  };

  return (
    <MuiDialog.SurveyForm
      title={title}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit(onSubmit)}
      update_at={defaultValues?.update_at}
    >
      <Grid
        container
        wrap="wrap"
        rowSpacing={5}
        columnSpacing={3}
        sx={{ py: 5, px: 1 }}
      >
        <PatientInfo {...patientInfo} />
        <VitalSign
          watch={watch}
          getValues={getValues}
          setValue={setValue}
          onSuccess={onSuccess}
          onRequired={onRequired}
        />
        <IOCheck
          watch={watch}
          getValues={getValues}
          setValue={setValue}
          onSuccess={onSuccess}
          onRequired={onRequired}
        />
      </Grid>
    </MuiDialog.SurveyForm>
  );
};

export default ClinicalObservation;
