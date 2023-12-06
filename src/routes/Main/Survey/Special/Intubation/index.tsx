import { useEffect, useState } from 'react';

import { Grid, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

import MuiDialog from 'components/MuiDialog';
import {
  SurveyDialogProps,
  TDialysisDefaultValues,
} from 'routes/Main/Survey/type';
import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';

import { updateDialysis } from 'apis/survey';

import CommonPatientInfo from '../../components/CommonPatientInfo';
import IntubationC from './IntubationC';
import IntubationA from './IntubationA';
import FoleyCatheter from './FoleyCatheter';
import AVF from './AVF';
import HDCatheter from './HDCatheter';

const Intubation = (props: SurveyDialogProps<TDialysisDefaultValues>) => {
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

  const { handleSubmit, register, getValues, setValue, watch } = useForm({
    defaultValues,
  });

  const onSubmit = (data: TDialysisDefaultValues) => {
    const {
      date,
      time,
      visiting_route,
      visiting_route_etc,
      dialysis_machine,
      dialyzer,
      dialysate,
      vascular_access,
      vascular_access_etc,
      starting_nurse,
      ending_nurse,
      pre_previous_weight,
      pre_today_weight,
      pre_weight_change,
      post_previous_weight,
      post_today_weight,
      post_weight_change,
      dialysis_db,
      additional_information,
    } = data;

    const request = {
      user_id,
      patient_id: patientInfo.patient_id,
      hemodialysis_survey: {
        dialysis_information: {
          date,
          time,
          visiting_route:
            visiting_route === '0' ? visiting_route_etc : visiting_route,
          dialysis_machine,
          dialyzer,
          dialysate,
          vascular_access:
            vascular_access === '0' ? vascular_access_etc : vascular_access,
          starting_nurse,
          ending_nurse,
        },
        weight_information: {
          pre_previous_weight,
          pre_today_weight,
          pre_weight_change,
          post_previous_weight,
          post_today_weight,
          post_weight_change,
        },
        dialysis_db,
        additional_information,
      },
    };

    // console.log(request);
    // updateDialysis(request)
    //   .then(({ data: { rc } }) => {
    //     if (rc !== 1) return onResultCode(rc);

    //     onUpdateIsSave(true);
    //     onSuccess('삽관 기록지 저장에 성공하였습니다.');
    //   })
    //   .catch(e => onFail('삽관 기록지 저장에 실패하였습니다.', e));
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
          삽관 기록지
          <br /> - 테스트중 입니다. -
        </Typography>
        <CommonPatientInfo patientInfo={patientInfo} nurseName={nurseName} />
        <IntubationC {...formProps} />
        <IntubationA {...formProps} />
        <FoleyCatheter {...formProps} />
        <AVF {...formProps} />
        <HDCatheter {...formProps} />
      </Grid>
    </MuiDialog.SurveyForm>
  );
};

export default Intubation;
