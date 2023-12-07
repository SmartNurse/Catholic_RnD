import { Grid, Typography, Box, useTheme } from '@mui/material';
import { useForm } from 'react-hook-form';

import { updateKPCS } from 'apis/survey';
import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';
import MuiDialog from 'components/MuiDialog';
import { TKPCSDefaultValues, SurveyDialogProps } from 'routes/Main/Survey/type';

import CommonPatientInfo from '../../components/CommonPatientInfo';
import KPCSContents from './KPCSContents';
import KPCSContents2 from './KPCSContents2';
import KPCSContents3 from './KPCSContents3';
import KPCSContents4 from './KPCSContents4';
import KPCSContents401 from './KPCSContents4_1';
import KPCSContents5 from './KPCSContents5';
import KPCSContents6 from './KPCSContents6';

import { useState } from 'react';

const KPCS = (props: SurveyDialogProps<TKPCSDefaultValues>) => {
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
  const { palette } = useTheme();

  const { onUpdateIsSave } = useSurvey();
  const { onSuccess, onFail, onResultCode, onRequired } = useNotification();

  const { handleSubmit, watch, register, getValues, setValue } = useForm({
    defaultValues,
  });

  // test
  const [sum1, setSum1] = useState(0);
  const [sum2, setSum2] = useState(0);

  const [sum3, setSum3] = useState(0);
  const [sum4, setSum4] = useState(0);

  const [sum5, setSum5] = useState(0);
  const [sum6, setSum6] = useState(0);

  // input 창
  const [urin, setUrin] = useState(
    getValues('no22_1') ? getValues('no22_1') : 0
  );
  const [poo, setPoo] = useState(getValues('no23_1') ? getValues('no23_1') : 0);

  const [sum7, setSum7] = useState(0);
  const [sum8, setSum8] = useState(0);

  const [sum7_1, setSum7_1] = useState(0);

  // 수혈 input
  const [trancfusion, setTransfusion] = useState(
    getValues('no32_1') ? Math.floor(getValues('no32_1') / 3) : 0
  );

  const [sum9, setSum9] = useState(0);
  const [sum10, setSum10] = useState(0);

  // CPR input
  const [cpr, setCpr] = useState(
    getValues('no47_1') ? getValues('no47_1') * 6 : 0
  );

  const [sum11, setSum11] = useState(0);

  const onSubmit = (data: TKPCSDefaultValues) => {
    const { patient_id } = patientInfo;
    const {} = data;

    const request = {
      user_id,
      patient_id: patientInfo.patient_id,
      kpcs_survey: { ...data },
    };

    updateKPCS(request)
      .then(({ data: { rc } }) => {
        if (rc !== 1) return onResultCode(rc);
        onUpdateIsSave(true);
        onSuccess('KPCS 저장에 성공하였습니다.');
      })
      .catch(e => onFail('KPCS 저장에 실패하였습니다.', e));
  };

  const formProps = {
    disabled,
    watch,
    register,
    getValues,
    setValue,
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
          한국형 환자분류도구 (KPCS)
        </Typography>
        <CommonPatientInfo patientInfo={patientInfo} nurseName={nurseName} />
        <KPCSContents
          {...formProps}
          sum1={sum1}
          setSum1={setSum1}
          sum2={sum2}
          setSum2={setSum2}
        />
        <KPCSContents2
          {...formProps}
          sum3={sum3}
          setSum3={setSum3}
          sum4={sum4}
          setSum4={setSum4}
        />
        <KPCSContents3
          {...formProps}
          sum5={sum5}
          setSum5={setSum5}
          sum6={sum6}
          setSum6={setSum6}
          urin={urin}
          setUrin={setUrin}
          poo={poo}
          setPoo={setPoo}
        />
        <KPCSContents4
          {...formProps}
          sum7={sum7}
          setSum7={setSum7}
          sum8={sum8}
          setSum8={setSum8}
        />
        <KPCSContents401
          {...formProps}
          sum7_1={sum7_1}
          setSum7_1={setSum7_1}
          trancfusion={trancfusion}
          setTransfusion={setTransfusion}
        />

        <KPCSContents5
          {...formProps}
          sum9={sum9}
          setSum9={setSum9}
          sum10={sum10}
          setSum10={setSum10}
          cpr={cpr}
          setCpr={setCpr}
        />
        <KPCSContents6 {...formProps} sum11={sum11} setSum11={setSum11} />
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'flex-end'}
          sx={{ marginTop: '20px', width: '98%' }}
        >
          <Typography
            gutterBottom
            minWidth={115}
            fontWeight={700}
            fontSize={20}
            variant="subtitle1"
          >
            합계 :{' '}
            {sum1 +
              sum2 +
              sum3 +
              urin +
              poo +
              sum4 +
              sum5 +
              sum6 +
              sum7 +
              sum7_1 +
              trancfusion +
              sum8 +
              sum9 +
              sum10 +
              cpr +
              sum11}{' '}
            점
          </Typography>
          <Typography
            minWidth={80}
            variant="caption"
            sx={{ color: `${palette.primary.main}` }}
          >
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5}>
                I군 :
              </Box>
              0-10점
            </Typography>
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5}>
                II군:
              </Box>
              11-20점
            </Typography>
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5}>
                III군:
              </Box>
              21-30점
            </Typography>
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5}>
                IV군:
              </Box>
              31점 이상
            </Typography>
          </Typography>
        </Box>
      </Grid>
    </MuiDialog.SurveyForm>
  );
};

export default KPCS;
