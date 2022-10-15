import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';
import MuiDialog from 'components/MuiDialog';
import {
  TNeedsDefaultValues,
  SurveyDialogProps,
} from 'routes/Main/Survey/type';

import PatientInfo from './PatientInfo';
// import FallContents from './FallContents';

const Needs = (props: SurveyDialogProps<TNeedsDefaultValues>) => {
  const { title, isOpen, defaultValues, user_id, patientInfo, onClose } = props;

  const { onUpdateIsSave } = useSurvey();
  const { onSuccess, onFail, onResultCode, onRequired } = useNotification();

  const { handleSubmit, watch, register, getValues, setValue } = useForm({
    defaultValues,
  });

  const onSubmit = (data: TNeedsDefaultValues) => {
    const { patient_id } = patientInfo;

    // if (contentsValues.includes('')) return onRequired('REQUIRED.NEEDS');

    // updateNeeds(request)
    //   .then(({ data: { rc } }) => {
    //     if (rc !== 1) return onResultCode(rc);
    //     onUpdateIsSave(true);
    //     onSuccess('낙상위험도 평가도구 저장에 성공하였습니다.');
    //   })
    //   .catch(e => onFail('낙상위험도 평가도구 저장에 실패하였습니다.', e));
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
        {/* <NeedsContents watch={watch} getValues={getValues} setValue={setValue} /> */}
      </Grid>
    </MuiDialog.SurveyForm>
  );
};

export default Needs;
