import { useEffect, useState } from 'react';

import { Grid, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

import MuiDialog from 'components/MuiDialog';
import {
  SurveyDialogProps,
  TIntubationDefaultValues,
} from 'routes/Main/Survey/type';
import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';

import { updateIntubation } from 'apis/survey';

import CommonPatientInfo from '../../components/CommonPatientInfo';
import IntubationPICC from './IntubationPICC';
import IntubationPCA from './IntubationPCA';
import FoleyCatheter from './FoleyCatheter';
import Ltube from './Ltube';
import JPbag from './JPbag';
import Etube from './Etube';
import IntubationCline from './IntubationCline';
import IntubationAline from './IntubationAline';
import IntubationAVF from './IntubationAVF';
import IntubationHDcatheter from './IntubationHDcatheter';

const Intubation = (props: SurveyDialogProps<TIntubationDefaultValues>) => {
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

  const onSubmit = (data: TIntubationDefaultValues) => {
    const {
      picc_and_more1,
      picc_and_more2,
      picc_and_more3,
      picc_and_more4,
      picc_and_more5,
      pca,
      ltube,
      jpbag,
      foley,
      etube,
    } = data;

    const request = {
      user_id,
      patient_id: patientInfo.patient_id,
      catholic_line_info_survey: {
        picc_and_more1,
        picc_and_more2,
        picc_and_more3,
        picc_and_more4,
        picc_and_more5,
        pca,
        ltube,
        jpbag,
        foley,
        etube,
      },
    };

    console.log(request);
    updateIntubation(request)
      .then(({ data: { rc } }) => {
        if (rc !== 1) return onResultCode(rc);

        onUpdateIsSave(true);
        onSuccess('삽관 기록지 저장에 성공하였습니다.');
      })
      .catch(e => onFail('삽관 기록지 저장에 실패하였습니다.', e));
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
        </Typography>
        <CommonPatientInfo patientInfo={patientInfo} nurseName={nurseName} />
        <IntubationPICC {...formProps} />
        <IntubationCline {...formProps} />
        <IntubationAline {...formProps} />
        <IntubationAVF {...formProps} />
        <IntubationHDcatheter {...formProps} />

        <IntubationPCA {...formProps} />
        <Ltube {...formProps} />
        <JPbag {...formProps} />
        <FoleyCatheter {...formProps} />
        <Etube {...formProps} />
      </Grid>
    </MuiDialog.SurveyForm>
  );
};

export default Intubation;
