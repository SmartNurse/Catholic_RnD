import { Grid, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

import { updateLEFS } from 'apis/survey';
import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';
import MuiDialog from 'components/MuiDialog';
import { TLEFSDefaultValues, SurveyDialogProps } from 'routes/Main/Survey/type';

import CommonPatientInfo from '../../components/CommonPatientInfo';
import LEFSContents from './LEFSContents';

const LEFS = (props: SurveyDialogProps<TLEFSDefaultValues>) => {
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

  const onSubmit = (data: TLEFSDefaultValues) => {
    const { patient_id } = patientInfo;
    const {
      lefs01,
      lefs02,
      lefs03,
      lefs04,
      lefs05,
      lefs06,
      lefs07,
      lefs08,
      lefs09,
      lefs10,
      lefs11,
      lefs12,
      lefs13,
      lefs14,
      lefs15,
      lefs16,
      lefs17,
      lefs18,
      lefs19,
      lefs20,
    } = data;

    const request = {
      user_id,
      patient_id,
      contents: { ...data },
    };

    if (data.lefs01 === undefined) return onRequired('REQUIRED.FALL');
    if (data.lefs02 === undefined) return onRequired('REQUIRED.FALL');
    if (data.lefs03 === undefined) return onRequired('REQUIRED.FALL');
    if (data.lefs04 === undefined) return onRequired('REQUIRED.FALL');
    if (data.lefs05 === undefined) return onRequired('REQUIRED.FALL');
    if (data.lefs06 === undefined) return onRequired('REQUIRED.FALL');
    if (data.lefs07 === undefined) return onRequired('REQUIRED.FALL');
    if (data.lefs08 === undefined) return onRequired('REQUIRED.FALL');
    if (data.lefs09 === undefined) return onRequired('REQUIRED.FALL');
    if (data.lefs10 === undefined) return onRequired('REQUIRED.FALL');
    if (data.lefs11 === undefined) return onRequired('REQUIRED.FALL');
    if (data.lefs12 === undefined) return onRequired('REQUIRED.FALL');
    if (data.lefs13 === undefined) return onRequired('REQUIRED.FALL');
    if (data.lefs14 === undefined) return onRequired('REQUIRED.FALL');
    if (data.lefs15 === undefined) return onRequired('REQUIRED.FALL');
    if (data.lefs16 === undefined) return onRequired('REQUIRED.FALL');
    if (data.lefs17 === undefined) return onRequired('REQUIRED.FALL');
    if (data.lefs18 === undefined) return onRequired('REQUIRED.FALL');
    if (data.lefs19 === undefined) return onRequired('REQUIRED.FALL');
    if (data.lefs20 === undefined) return onRequired('REQUIRED.FALL');

    updateLEFS(request)
      .then(({ data: { rc } }) => {
        if (rc !== 1) return onResultCode(rc);
        onUpdateIsSave(true);
        onSuccess('LEFS 저장에 성공하였습니다.');
      })
      .catch(e => onFail('LEFS 저장에 실패하였습니다.', e));
  };

  const formProps = { disabled, watch, register, getValues, setValue };

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
          Lower Extremity Functional Scale (LEFS)
          <br />
          테스트중입니다.
        </Typography>
        <CommonPatientInfo patientInfo={patientInfo} nurseName={nurseName} />
        <LEFSContents {...formProps} />
      </Grid>
    </MuiDialog.SurveyForm>
  );
};

export default LEFS;
