import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import { updateBedScore } from 'apis/survey';
import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';
import MuiDialog from 'components/MuiDialog';
import {
  TBedScoreDefaultValues,
  SurveyDialogProps,
} from 'routes/Main/Survey/type';

import PatientInfo from './PatientInfo';
import BedScoreContents from './BedScoreContents';

const BedScore = (props: SurveyDialogProps<TBedScoreDefaultValues>) => {
  const { title, isOpen, defaultValues, user_id, patientInfo, onClose } = props;

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
        onSuccess('욕창위험도 평가도구 저장에 성공하였습니다.');
      })
      .catch(e => onFail('욕창위험도 평가도구 저장에 실패하였습니다.', e));
  };

  return (
    <MuiDialog.SurveyForm
      title={title}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit(onSubmit)}
      update_at={defaultValues.update_at}
    >
      <Grid
        container
        wrap="wrap"
        rowSpacing={5}
        columnSpacing={3}
        sx={{ py: 5, px: 1 }}
      >
        <PatientInfo register={register} {...patientInfo} />
        <BedScoreContents
          watch={watch}
          getValues={getValues}
          setValue={setValue}
        />
      </Grid>
    </MuiDialog.SurveyForm>
  );
};

export default BedScore;
