import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import { findKeyValueToStr } from 'utils/convert';
import { createOutHospital } from 'apis/survey';
import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';
import MuiDialog from 'components/MuiDialog';
import {
  TOutHospitalSurveyDefaultValues,
  SurveyDialogProps,
} from 'routes/Main/type';

import PatientInfo from './PatientInfo';
import DefaultInfo from './DefaultInfo';
import Medicines from './Medicines';
import OutPatients from './OutPatients';
import Education from './Education';
import CheckReservations from './CheckReservations';

const OutHospital = (
  props: SurveyDialogProps<TOutHospitalSurveyDefaultValues>
) => {
  const { title, isOpen, defaultValues, user_id, patientInfo, onClose } = props;

  const { onUpdateIsSave } = useSurvey();
  const { onSuccess, onFail, onResultCode } = useNotification();

  const { handleSubmit, register, getValues, setValue } = useForm({
    defaultValues,
  });

  const onSubmit = (data: TOutHospitalSurveyDefaultValues) => {
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
  console.log(defaultValues);

  return (
    <MuiDialog.SurveyForm
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
        <PatientInfo register={register} {...patientInfo} />
        <DefaultInfo
          register={register}
          setValue={setValue}
          getValues={getValues}
        />
        <Medicines register={register} />
        <OutPatients register={register} />
        <CheckReservations register={register} />
        <Education register={register} />
      </Grid>
    </MuiDialog.SurveyForm>
  );
};

export default OutHospital;
