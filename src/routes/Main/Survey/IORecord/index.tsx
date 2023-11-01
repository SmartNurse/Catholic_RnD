import { Grid, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

import {
  SurveyDialogProps,
  THospitalizationDefaultValues,
} from 'routes/Main/Survey/type';
import MuiDialog from 'components/MuiDialog';
import { findKeyValueToStr } from 'utils/convert';
import { createHospitalization } from 'apis/survey';
import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';

import CommonPatientInfo from '../components/CommonPatientInfo';

import SocialHistory from './SocialHistory';

const IORecord = (props: SurveyDialogProps<THospitalizationDefaultValues>) => {
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

  const { handleSubmit, register, getValues, setValue, watch, control } =
    useForm({
      defaultValues,
    });

  const onSubmit = (data: THospitalizationDefaultValues) => {
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

    // console.log('data', data);
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

        contact1: data.contact1,
        contact2: data.contact2,
        contact3: data.contact3,

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
      .then(({ data: { rc } }) => {
        if (rc !== 1) return onResultCode(rc);

        onUpdateIsSave(true);
        onSuccess('섭취 및 배설량 기록지 저장에 성공하였습니다.');
      })
      .catch(e => onFail('섭취 및 배설량 기록지 저장에 실패하였습니다.', e));
  };

  const formProps = {
    disabled,
    watch,
    register,
    getValues,
    setValue,
    onSuccess,
    onRequired,
    control,
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
        columnSpacing={2}
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
          섭취 및 배설량 기록지
          <br />- 테스트중 입니다. -
        </Typography>
        <CommonPatientInfo nurseName={nurseName} patientInfo={patientInfo} />
        <SocialHistory {...formProps} />
      </Grid>
    </MuiDialog.SurveyForm>
  );
};

export default IORecord;
