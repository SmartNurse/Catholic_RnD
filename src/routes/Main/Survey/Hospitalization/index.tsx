import { Grid } from '@mui/material';
import { useSnackbar } from 'notistack';
import { useForm } from 'react-hook-form';

import {
  THospitalizationSurveyDefaultValues,
  SurveyDialogProps,
} from '../../type';
import SaveDialog from '../../../../components/SaveDialog/SaveDialog';
import { findKeyValueToStr } from '../../../../utils/convert';
import { createHospitalization } from '../../../../apis/survey';
import useSurvey from '../../../../store/slices/useSurvey';

import PatientInfo from './PatientInfo';
import DefaultInfo from './DefaultInfo';
import DiseaseHistory from './DiseaseHistory';
import BodyStatus from './BodyStatus';
import Habit from './Habit';
import FunctionalEvaluation from './FunctionalEvaluation';
import SocialHistory from './SocialHistory';
import EconomyHistory from './EconomyHistory';
import Education from './Education';
import OutHospitalPlan from './OutHospitalPlan';

const Hospitalization = (
  props: SurveyDialogProps<THospitalizationSurveyDefaultValues>
) => {
  const {
    title,
    isOpen,
    defaultValues,
    user_id,
    nurseName,
    patientInfo,
    onClose,
  } = props;

  const { enqueueSnackbar } = useSnackbar();
  const { onUpdateIsSave } = useSurvey();

  const { handleSubmit, register, getValues, setValue } = useForm({
    defaultValues,
  });
  const formProps = { getValues, setValue, register };

  const onSubmit = (data: THospitalizationSurveyDefaultValues) => {
    const {
      body_status,
      disease_history,
      habit,
      functional_evaluation,
      social_history,
      economy_history,
      education,
      out_hospital_plan,
      default_info,
    } = data;

    const request = {
      user_id,
      patient_id: patientInfo.patient_id,
      hospitalization_survey: {
        patient_name: patientInfo.name,
        age: patientInfo.age,
        gender: patientInfo.gender,
        department: patientInfo.department,
        user_name: nurseName,
        main_doctor: patientInfo.main_doctor,
        offer: data.offer,
        contacts: data.contacts,
        disease_history: findKeyValueToStr(disease_history),
        body_status: findKeyValueToStr(body_status),
        habit: findKeyValueToStr(habit),
        functional_evaluation: findKeyValueToStr(functional_evaluation),
        economy_history: findKeyValueToStr(economy_history),
        education: findKeyValueToStr(education),
        out_hospital_plan: findKeyValueToStr(out_hospital_plan),
        default_info: findKeyValueToStr(default_info),
        social_history: findKeyValueToStr(social_history),
      },
    };

    createHospitalization(request)
      .then(() => {
        onUpdateIsSave(true);
        enqueueSnackbar('입원기록지 저장에 성공하였습니다.', {
          variant: 'success',
        });
      })
      .catch(e =>
        enqueueSnackbar(`'입원기록지 저장에 실패하였습니다.\n오류: ${e}`, {
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
        <PatientInfo
          nurseName={nurseName}
          patientInfo={patientInfo}
          {...formProps}
        />
        <DefaultInfo {...formProps} />
        <DiseaseHistory {...formProps} />
        <BodyStatus {...formProps} />
        <Habit {...formProps} gender={patientInfo.gender} />
        <FunctionalEvaluation {...formProps} />
        <SocialHistory {...formProps} />
        <EconomyHistory {...formProps} />
        <Education {...formProps} />
        <OutHospitalPlan {...formProps} />
      </Grid>
    </SaveDialog>
  );
};

export default Hospitalization;
