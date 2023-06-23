import { Grid, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

import { updateFall } from 'apis/survey';
import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';
import MuiDialog from 'components/MuiDialog';
import { TFallDefaultValues, SurveyDialogProps } from 'routes/Main/Survey/type';

import CommonPatientInfo from '../components/CommonPatientInfo';
import Calculator1 from './Calculator1';
import Calculator2 from './Calculator2';
import Calculator3 from './Calculator3';
import CautionList from './CautionList';
import Counselor from './Counselor';

const DrugCalculatior = (props: SurveyDialogProps<TFallDefaultValues>) => {
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
        onSuccess('낙상위험 평가도구 I 저장에 성공하였습니다.');
      })
      .catch(e => onFail('낙상위험 평가도구 I 저장에 실패하였습니다.', e));
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
          약물계산기
          <br />
          테스트중입니다
        </Typography>
        <Calculator1 {...formProps} />
        <Calculator2 {...formProps} />
        <Calculator3 {...formProps} />
        <CautionList {...formProps} />
        <Counselor {...formProps} />
      </Grid>
    </MuiDialog.SurveyForm>
  );
};

export default DrugCalculatior;
