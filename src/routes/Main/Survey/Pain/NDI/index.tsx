import { useForm } from 'react-hook-form';

import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';

import { Typography, Grid } from '@mui/material';
import MuiDialog from 'components/MuiDialog';

import { SurveyDialogProps, TNDIDefaultValues } from '../../type';

import CommonPatientInfo from '../../components/CommonPatientInfo';
import NDIContents from './NDIContents';

import { updateNDI } from 'apis/survey';

const NDI = (props: SurveyDialogProps<TNDIDefaultValues>) => {
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
  const { handleSubmit, watch, register, getValues, setValue } = useForm({
    defaultValues,
  });

  const onSubmit = (data: TNDIDefaultValues) => {
    const { patient_id } = patientInfo;
    const {
      ndi01,
      ndi02,
      ndi03,
      ndi04,
      ndi05,
      ndi06,
      ndi07,
      ndi08,
      ndi09,
      ndi10,
    } = data;

    const request = {
      user_id,
      patient_id,
      contents: { ...data },
    };

    updateNDI(request)
      .then(({ data: { rc } }) => {
        if (rc !== 1) return onResultCode(rc);
        onUpdateIsSave(true);
        onSuccess('NDI 저장에 성공하였습니다.');
      })
      .catch(e => onFail('NDI 저장에 실패하였습니다.', e));
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
          목기능 불능 지수(Neck Disability Index,NDI)
        </Typography>
        <CommonPatientInfo patientInfo={patientInfo} nurseName={nurseName} />
        <NDIContents {...formProps} />
      </Grid>
    </MuiDialog.SurveyForm>
  );
};

export default NDI;
