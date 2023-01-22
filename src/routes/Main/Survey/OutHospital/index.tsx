import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import { findKeyValueToStr } from 'utils/convert';
import { createOutHospital } from 'apis/survey';
import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';
import MuiDialog from 'components/MuiDialog';
import {
  TOutHospitalDefaultValues,
  SurveyDialogProps,
} from 'routes/Main/Survey/type';

import PatientInfo from './PatientInfo';
import DefaultInfo from './DefaultInfo';
import Medicines from './Medicines';
import OutPatients from './OutPatients';
import Education from './Education';
import CheckReservations from './CheckReservations';

const OutHospital = (props: SurveyDialogProps<TOutHospitalDefaultValues>) => {
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

  const { handleSubmit, register, getValues, setValue } = useForm({
    defaultValues,
  });

  const onSubmit = (data: TOutHospitalDefaultValues) => {
    const { default_info } = data;

    const request = {
      user_id,
      patient_id: patientInfo.patient_id,
      out_hospital_survey: {
        patient_name: patientInfo.name,
        patient_id: patientInfo.patient_id,
        date: data.date,
        default_info: findKeyValueToStr(default_info),
        out_hospital_medicines: data.out_hospital_medicines,
        out_patients: data.out_patients,
        check_reservations: data.check_reservations,
        education: data.education,
      },
    };
    createOutHospital(request)
      .then(({ data: { rc } }) => {
        if (rc !== 1) return onResultCode(rc);

        onUpdateIsSave(true);
        onSuccess('퇴원기록지 저장에 성공하였습니다.');
      })
      .catch(e => onFail('퇴원기록지 저장에 실패하였습니다.', e));
  };

  const formProps = { disabled, register, getValues, setValue };

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
        <PatientInfo {...formProps} patientInfo={patientInfo} nurseName={nurseName} />
        <DefaultInfo {...formProps} />
        <Medicines {...formProps} />
        <OutPatients {...formProps} />
        <CheckReservations {...formProps} />
        <Education {...formProps} />
      </Grid>
    </MuiDialog.SurveyForm>
  );
};

export default OutHospital;
