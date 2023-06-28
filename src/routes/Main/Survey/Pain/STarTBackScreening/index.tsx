import { useForm } from 'react-hook-form';

import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';

import { Typography, Grid } from '@mui/material';
import MuiDialog from 'components/MuiDialog';

import {
  SurveyDialogProps,
  TSTarTBackScreeningDefaultValues,
} from '../../type';

import CommonPatientInfo from '../../components/CommonPatientInfo';
import STarTContents from './STarTContents';

import { updateSTarT } from 'apis/survey';

const STarTBackScreening = (
  props: SurveyDialogProps<TSTarTBackScreeningDefaultValues>
) => {
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

  const onSubmit = (data: TSTarTBackScreeningDefaultValues) => {
    const { patient_id } = patientInfo;
    const { contents } = data;

    const contentsValues = Object.values(contents);
    if (contentsValues.includes('')) return onRequired('REQUIRED.BED.SCORE');

    const request = {
      user_id,
      patient_id,
      contents: JSON.stringify(contents),
    };

    updateSTarT(request)
      .then(({ data: { rc } }) => {
        if (rc !== 1) return onResultCode(rc);
        onUpdateIsSave(true);
        onSuccess('STarT Back Screening 저장에 성공하였습니다.');
      })
      .catch(e => onFail('STarT Back Screening 저장에 실패하였습니다.', e));
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
          STarT(Subgroups for Targeted Treatment) Back Screening{' '}
          <Typography
            sx={{
              marginTop: '3px',
              marginBottom: '10px',
              fontWeight: '400',
              fontSize: '16px',
            }}
          >
            Thinking about the last 2 weeks please answer the following
            questions.
          </Typography>
          테스트중입니다.
        </Typography>
        <CommonPatientInfo patientInfo={patientInfo} nurseName={nurseName} />
        <STarTContents {...formProps} />
      </Grid>
    </MuiDialog.SurveyForm>
  );
};

export default STarTBackScreening;
