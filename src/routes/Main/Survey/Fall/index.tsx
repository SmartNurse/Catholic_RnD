import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import { updateFall } from 'apis/survey';
import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';
import MuiDialog from 'components/MuiDialog';
import { TFallDefaultValues, SurveyDialogProps } from 'routes/Main/Survey/type';

import PatientInfo from './PatientInfo';
import FallContents from './FallContents';

const Fall = (props: SurveyDialogProps<TFallDefaultValues>) => {
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
  const { onSuccess, onFail, onResultCode, onRequired } = useNotification();

  const { handleSubmit, watch, register, getValues, setValue } = useForm({
    defaultValues,
  });

  const onSubmit = (data: TFallDefaultValues) => {
    const { patient_id } = patientInfo;
    const { contents, date } = data;

    const contentsValues = Object.values(contents);
    if (contentsValues.includes('')) return onRequired('REQUIRED.FALL');

    const request = {
      user_id,
      patient_id,
      date,
      contents: JSON.stringify(contents),
    };

    updateFall(request)
      .then(({ data: { rc } }) => {
        if (rc !== 1) return onResultCode(rc);
        onUpdateIsSave(true);
        onSuccess('낙상위험도 평가도구 저장에 성공하였습니다.');
      })
      .catch(e => onFail('낙상위험도 평가도구 저장에 실패하였습니다.', e));
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
        <PatientInfo {...formProps} {...patientInfo} />
        <FallContents {...formProps} />
      </Grid>
    </MuiDialog.SurveyForm>
  );
};

export default Fall;
