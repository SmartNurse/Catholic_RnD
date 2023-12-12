import { Grid, Typography, Box, useTheme } from '@mui/material';
import { useForm } from 'react-hook-form';

import { updateKPCS_ICU } from 'apis/survey';
import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';
import MuiDialog from 'components/MuiDialog';
import {
  TKPCS_ICUDefaultValues,
  SurveyDialogProps,
} from 'routes/Main/Survey/type';

import CommonPatientInfo from '../../components/CommonPatientInfo';
import KPCSICUContents from './KPCSICUContents';
import KPCSICUContents2 from './KPCSICUContents2';
import KPCSICUContents3 from './KPCSICUContents3';
import KPCSICUContents4 from './KPCSICUContents4';
import KPCSICUContents401 from './KPCSICUContents4_1';
import KPCSICUContents5 from './KPCSICUContents5';

import { useState } from 'react';

const KPCS_ICU = (props: SurveyDialogProps<TKPCS_ICUDefaultValues>) => {
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

  const [sum1, setSum1] = useState(0);
  const [sum2, setSum2] = useState(0);

  const [sum3, setSum3] = useState(0);
  const [sum4, setSum4] = useState(0);

  // input 창 30, 33번
  const [tubeFeed, setTubeFeed] = useState(
    getValues('no30_1') ? getValues('no33_1') * 2 : 0
  );
  const [infant, setInfant] = useState(
    getValues('no33_1') ? getValues('no33_1') * 2 : 0
  );

  const [sum5, setSum5] = useState(0);
  // input 창 34, 40, 41 번
  const [ivRoute, setIvRoute] = useState(
    getValues('no34_1') ? getValues('no34_1') * 2 : 0
  );
  const [blood, setBlood] = useState(
    getValues('no40_1') ? getValues('no40_1') * 2 : 0
  );
  const [bloodUnit, setBloodUnit] = useState(
    getValues('no41_1') ? getValues('no41_1') * 2 : 0
  );

  const [sum6, setSum6] = useState(0);
  const [nasogastric, setNasogastric] = useState(
    getValues('no43_1') ? getValues('no43_1') * 2 : 0
  );
  const [ekgRecord, setEkgRecord] = useState(
    getValues('no45_1') ? getValues('no45_1') * 2 : 0
  );
  const [dressing, setDressing] = useState(
    getValues('no47_1') ? getValues('no47_1') : 0
  );
  const [emergency, setEmergency] = useState(
    getValues('no48_1') ? getValues('no48_1') * 2 : 0
  );
  const [testBodyOdor, setTestBodyOdor] = useState(
    getValues('no49_1') ? getValues('no49_1') : 0
  );
  const [tubeNursing, setTubeNursing] = useState(
    getValues('no50_1') ? getValues('no50_1') : 0
  );
  const [drainageTube, setDrainageTube] = useState(
    getValues('no51_1') ? getValues('no51_1') : 0
  );

  const [sum7_1, setSum7_1] = useState(0);
  // 58, 61, 62 input
  const [tracheotomy, setTracheotomy] = useState(
    getValues('no58_1') ? getValues('no58_1') * 4 : 0
  );
  const [etc30, setEtc30] = useState(
    getValues('no61_1') ? getValues('no61_1') * 4 : 0
  );
  const [filter, setFilter] = useState(
    getValues('no62_1') ? getValues('no62_1') * 8 : 0
  );

  const [sum7, setSum7] = useState(0);
  const [treatment, setTreatment] = useState(
    getValues('no77_1') ? getValues('no77_1') * 4 : 0
  );
  const [sum8, setSum8] = useState(0);

  const [sum9, setSum9] = useState(0);

  const onSubmit = (data: TKPCS_ICUDefaultValues) => {
    const { patient_id } = patientInfo;
    const {} = data;

    const request = {
      user_id,
      patient_id: patientInfo.patient_id,
      kpcs_icu_survey: { ...data },
    };

    updateKPCS_ICU(request)
      .then(({ data: { rc } }) => {
        if (rc !== 1) return onResultCode(rc);
        onUpdateIsSave(true);
        onSuccess('KPCS-ICU 저장에 성공하였습니다.');
      })
      .catch(e => onFail('KPCS-ICU 저장에 실패하였습니다.', e));
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
          한국형 환자분류도구 - 중환자실(KPCS-ICU)
        </Typography>
        <CommonPatientInfo patientInfo={patientInfo} nurseName={nurseName} />
        {/* 1 -  17 */}
        <KPCSICUContents
          {...formProps}
          sum1={sum1}
          setSum1={setSum1}
          sum2={sum2}
          setSum2={setSum2}
        />
        {/* 18 -  32 */}
        <KPCSICUContents2
          {...formProps}
          sum3={sum3}
          setSum3={setSum3}
          sum4={sum4}
          setSum4={setSum4}
          tubeFeed={tubeFeed}
          setTubeFeed={setTubeFeed}
          infant={infant}
          setInfant={setInfant}
        />
        {/* 33 -  54 */}
        <KPCSICUContents3
          {...formProps}
          sum5={sum5}
          setSum5={setSum5}
          sum6={sum6}
          setSum6={setSum6}
          ivRoute={ivRoute}
          setIvRoute={setIvRoute}
          blood={blood}
          setBlood={setBlood}
          bloodUnit={bloodUnit}
          setBloodUnit={setBloodUnit}
          nasogastric={nasogastric}
          setNasogastric={setNasogastric}
          ekgRecord={ekgRecord}
          setEkgRecord={setEkgRecord}
          dressing={dressing}
          setDressing={setDressing}
          emergency={emergency}
          setEmergency={setEmergency}
          testBodyOdor={testBodyOdor}
          setTestBodyOdor={setTestBodyOdor}
          tubeNursing={tubeNursing}
          setTubeNursing={setTubeNursing}
          drainageTube={drainageTube}
          setDrainageTube={setDrainageTube}
        />
        {/* 54 -  68 */}
        <KPCSICUContents401
          {...formProps}
          sum7_1={sum7_1}
          setSum7_1={setSum7_1}
          tracheotomy={tracheotomy}
          setTracheotomy={setTracheotomy}
          etc30={etc30}
          setEtc30={setEtc30}
          filter={filter}
          setFilter={setFilter}
        />
        {/* 69 -  80 */}
        <KPCSICUContents4
          {...formProps}
          sum7={sum7}
          setSum7={setSum7}
          sum8={sum8}
          setSum8={setSum8}
          treatment={treatment}
          setTreatment={setTreatment}
        />
        {/* 81 -  82 */}
        <KPCSICUContents5 {...formProps} sum9={sum9} setSum9={setSum9} />
        {/* <KPCSICUContents6 {...formProps} sum11={sum11} setSum11={setSum11} /> */}
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
              sum4 +
              tubeFeed +
              infant +
              sum5 +
              ivRoute +
              blood +
              bloodUnit +
              sum6 +
              nasogastric +
              ekgRecord +
              dressing +
              emergency +
              testBodyOdor +
              tubeNursing +
              drainageTube +
              sum7_1 +
              tracheotomy +
              etc30 +
              filter +
              sum7 +
              treatment +
              sum8 +
              sum9}{' '}
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

export default KPCS_ICU;
