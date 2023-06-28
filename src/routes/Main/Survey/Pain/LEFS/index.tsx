import { Grid, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

import { updateBedScore } from 'apis/survey';
import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';
import MuiDialog from 'components/MuiDialog';
import {
  TBedScoreDefaultValues,
  SurveyDialogProps,
} from 'routes/Main/Survey/type';

import CommonPatientInfo from '../../components/CommonPatientInfo';
import LEFSContents from './LEFSContents';

const LEFS = (props: SurveyDialogProps<TBedScoreDefaultValues>) => {
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

  const onSubmit = (data: TBedScoreDefaultValues) => {
    const { patient_id } = patientInfo;
    const { contents, date } = data;

    const contentsValues = Object.values(contents);
    if (contentsValues.includes('')) return onRequired('REQUIRED.BED.SCORE');

    const request = {
      user_id,
      patient_id,
      date,
      contents: JSON.stringify(contents),
    };

    updateBedScore(request)
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
