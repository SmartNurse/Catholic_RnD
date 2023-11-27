import { useForm } from 'react-hook-form';

import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';

import { Typography, Grid } from '@mui/material';
import MuiDialog from 'components/MuiDialog';

import { SurveyDialogProps, TMentalNursingDefaultValues } from '../type';

import CommonPatientInfo from '../components/CommonPatientInfo';
import RecordComponents from './RecordComponents';

import { updateMentalNursing } from 'apis/survey';
import { IMentalNursingRecord } from 'apis/survey/type';

const NursingRecord = (
  props: SurveyDialogProps<TMentalNursingDefaultValues>
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

  const onSubmit = (data: TMentalNursingDefaultValues) => {
    const { mental_survey } = data;

    const request = {
      user_id,
      patient_id: patientInfo.patient_id,
      mental_survey: mental_survey?.map(
        ({
          date,
          time,
          patient_activity,
          student_activity,
          student_rationale,
          evaluation,
          mental_nursing,
        }: IMentalNursingRecord) => ({
          date,
          time,
          patient_activity,
          student_activity,
          student_rationale,
          evaluation,
          mental_nursing,
        })
      ),
    };

    updateMentalNursing(request)
      .then(({ data: { rc } }) => {
        if (rc !== 1) return onResultCode(rc);

        onUpdateIsSave(true);
        onSuccess('정신간호 기록지 저장에 성공하였습니다.');
      })
      .catch(e => onFail('정신간호 기록지 저장에 실패하였습니다.', e));
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
          정신간호 기록지
        </Typography>
        <CommonPatientInfo patientInfo={patientInfo} nurseName={nurseName} />
        <RecordComponents {...formProps} />
      </Grid>
    </MuiDialog.SurveyForm>
  );
};

export default NursingRecord;
