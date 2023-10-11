import { Grid, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

import { updateKOOS } from 'apis/survey';
import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';
import MuiDialog from 'components/MuiDialog';
import { TKOOSDefaultValues, SurveyDialogProps } from 'routes/Main/Survey/type';

import CommonPatientInfo from '../../components/CommonPatientInfo';
import KOOSContents from './KOOSContents';
import KOOSContents2 from './KOOSContents2';
import KOOSContents3 from './KOOSContents3';
import KOOSContents4 from './KOOSContents4';

const KOOS = (props: SurveyDialogProps<TKOOSDefaultValues>) => {
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

  const { handleSubmit, watch, register, getValues, setValue } = useForm({
    defaultValues,
  });

  const onSubmit = (data: TKOOSDefaultValues) => {
    const { patient_id } = patientInfo;
    const {
      spt01,
      spt02,
      spt03,
      spt04,
      spt05,

      stf01,
      stf02,

      pain01,
      pain02,
      pain03,
      pain04,
      pain05,
      pain06,
      pain07,
      pain08,
      pain09,

      daily01,
      daily02,
      daily03,
      daily04,
      daily05,
      daily06,
      daily07,
      daily08,
      daily09,
      daily10,
      daily11,
      daily12,
      daily13,
      daily14,
      daily15,
      daily16,
      daily17,

      actv01,
      actv02,
      actv03,
      actv04,
      actv05,

      qol01,
      qol02,
      qol03,
      qol04,
    } = data;

    const request = {
      user_id,
      patient_id,
      contents: data,
    };
    // console.log('뭐지;', data);

    updateKOOS(request)
      .then(({ data: { rc } }) => {
        if (rc !== 1) return onResultCode(rc);

        onUpdateIsSave(true);
        onSuccess('KOOS 저장에 성공하였습니다.');
      })
      .catch(e => onFail('KOOS 저장에 실패하였습니다.', e));
  };

  const formProps = {
    disabled,
    watch,
    register,
    getValues,
    setValue,
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
          Knee injury and Osteoarthritis Outcome Score (KOOS)
        </Typography>
        <CommonPatientInfo patientInfo={patientInfo} nurseName={nurseName} />
        {/* 증상 - 경직성 */}
        <KOOSContents {...formProps} />
        {/* 통증 */}
        <KOOSContents2 {...formProps} />
        {/* 일상 생활 기능 */}
        <KOOSContents3 {...formProps} />
        {/* 운동 - 삶의질 */}
        <KOOSContents4 {...formProps} />
      </Grid>
    </MuiDialog.SurveyForm>
  );
};

export default KOOS;
