import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';

import { SurveyDialogProps, TDietListDefaultValues } from '../type';
import MuiDialog from 'components/MuiDialog';

import PatientInfo from './PatientInfo';
import DietResultBox from './DietResultBox';
import DietSelection from './DietSelection';
import DefaultDiet from './DefaultDiet';
import Treatment from './Treatment';
import Controlled from './Controlled';
import Special from './Special';

import { Grid, Typography } from '@mui/material';

import { updateDietList } from 'apis/survey';

const DietList = (props: SurveyDialogProps<TDietListDefaultValues>) => {
  const {
    title,
    isOpen,
    disabled,
    defaultValues,
    user_id,
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
    const { classification, string_break_fast, string_lunch, string_dinner } =
      data;

    const request = {
      user_id,
      patient_id,
      dietary_survey: {
        birth: JSON.stringify(dietList),
        classification,
        string_break_fast: JSON.stringify(string_break_fast),
        string_lunch: JSON.stringify(string_lunch),
        string_dinner: JSON.stringify(string_dinner),
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
          <br />
          테스트용
        </Typography>

        <PatientInfo {...formProps} {...patientInfo} />
        {/* <DietResultBox {...formProps} dietList={dietList} /> */}
        <DietSelection
          {...formProps}
          dietList={dietList}
          setDietList={setDietList}
        />
        {/* <DefaultDiet
          {...formProps}
          dietList={getDiet()}
          setDietList={setDiet}
        />
        <Treatment
          {...formProps}
          dietList={dietList}
          setDietList={setDietList}
        />
        <Controlled
          {...formProps}
          dietList={dietList}
          setDietList={setDietList}
        />
        <Special {...formProps} dietList={dietList} setDietList={setDietList} /> */}
      </Grid>
    </MuiDialog.SurveyForm>
  );
};

export default DietList;
