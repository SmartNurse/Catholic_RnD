import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';

import { SurveyDialogProps, TDietListDefaultValues } from '../type';
import MuiDialog from 'components/MuiDialog';
import { findKeyValueToStr } from 'utils/convert';

import PatientInfo from './PatientInfo';
import DietSelection1 from './DietSelection1';
import DietSelection2 from './DietSelection2';
import DietSelection3 from './DietSelection3';

import CommonPatientInfo from '../components/CommonPatientInfo';

import { Grid, Typography } from '@mui/material';

import { updateDietList } from 'apis/survey';

const DietList = (props: SurveyDialogProps<TDietListDefaultValues>) => {
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
  const { onSuccess, onFail, onResultCode } = useNotification();

  const { handleSubmit, register, getValues, setValue, watch } = useForm({
    defaultValues,
  });

  // 식이 리스트 state
  const [dietList, setDietList] = useState<string[]>([]);

  const formProps = { disabled, register, getValues, setValue, watch };

  const onSubmit = (data: TDietListDefaultValues) => {
    const { patient_id } = patientInfo;
    const { break_fast, lunch, dinner } = data;

    const request = {
      user_id,
      patient_id,
      dietary_survey: {
        break_fast: findKeyValueToStr(break_fast),
        lunch: findKeyValueToStr(lunch),
        dinner: findKeyValueToStr(dinner),
      },
    };
    console.log('데이터', request);
    updateDietList(request)
      .then(({ data: { rc } }) => {
        if (rc !== 1) return onResultCode(rc);
        onUpdateIsSave(true);
        onSuccess('식이/영양 기록지 저장에 성공하였습니다.');
      })
      .catch(e => onFail('식이/영양 기록지 저장에 실패하였습니다.', e));
  };

  //   useEffect(() => {
  //     if (getValues('birth')) setDietList(JSON.parse(getValues('birth')));
  //   }, []);

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
        sx={{ py: 5, px: 10 }}
      >
        <Typography
          sx={{
            margin: '40px auto 0px auto',
            fontWeight: '700',
            fontSize: '16px',
            textAlign: 'center',
          }}
        >
          식이/영양 기록지
        </Typography>
        <CommonPatientInfo patientInfo={patientInfo} nurseName={nurseName} />

        <DietSelection1
          {...formProps}
          dietList={dietList}
          setDietList={setDietList}
        />
        <DietSelection2
          {...formProps}
          dietList={dietList}
          setDietList={setDietList}
        />
        <DietSelection3
          {...formProps}
          dietList={dietList}
          setDietList={setDietList}
        />
      </Grid>
    </MuiDialog.SurveyForm>
  );
};

export default DietList;
