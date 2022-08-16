import { Grid } from '@mui/material';
import { useSnackbar } from 'notistack';
import { useForm } from 'react-hook-form';

import { TOutHospitalSurveyDefaultValues, SurveyDialogProps } from '../../type';
import SaveDialog from '../../../../components/SaveDialog/SaveDialog';
import { findKeyValueToStr } from '../../../../utils/convert';
import { createOutHospital } from '../../../../apis/survey';
import useSurvey from '../../../../store/slices/useSurvey';

import PatientInfo from './PatientInfo';
import DefaultInfo from './DefaultInfo';
import Medicines from './Medicines';
import OutPatients from './OutPatients';
import Education from './Education';

const OutHospital = (
  props: SurveyDialogProps<TOutHospitalSurveyDefaultValues>
) => {
  const { title, isOpen, defaultValues, user_id, patientInfo, onClose } = props;

  const { enqueueSnackbar } = useSnackbar();
  const { onUpdateIsSave } = useSurvey();

  const { handleSubmit, register, getValues, setValue } = useForm({
    defaultValues,
  });
  const formProps = { getValues, setValue, register };

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
      .then(() => {
        onUpdateIsSave(true);
        enqueueSnackbar('퇴원기록지 저장에 성공하였습니다.', {
          variant: 'success',
        });
      })
      .catch(e =>
        enqueueSnackbar(`'퇴원기록지 저장에 실패하였습니다.\n오류: ${e}`, {
          variant: 'error',
        })
      );
  };

  return (
    <SaveDialog
      title={title}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Grid
        container
        wrap="wrap"
        rowSpacing={5}
        columnSpacing={3}
        sx={{ py: 5, px: 1 }}
      >
        <PatientInfo patientInfo={patientInfo} {...formProps} />
        <DefaultInfo {...formProps} />
        <Medicines {...formProps} />
        <OutPatients {...formProps} />
        <Education {...formProps} />
      </Grid>
    </SaveDialog>
  );
};

export default OutHospital;
