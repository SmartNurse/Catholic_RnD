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
import BodyStatus from './BodyStatus';
import Reason from './Reason';
import DiseaseStatus from './DiseaseStatus';
import { updateNeeds } from 'apis/survey';

const Needs = (props: SurveyDialogProps<TNeedsDefaultValues>) => {
  const { title, isOpen, defaultValues, user_id, patientInfo, onClose } = props;

  const { onUpdateIsSave } = useSurvey();
  const { onSuccess, onFail, onResultCode, onRequired } = useNotification();

  const { handleSubmit, watch, register, getValues, setValue } = useForm({
    defaultValues,
  });

  const onSubmit = (data: TNeedsDefaultValues) => {
    const { patient_id } = patientInfo;
    const { body_status, disease_status, reason1, reason2, date } = data;

    const bodyStatusValues = Object.values(body_status);
    if (bodyStatusValues.includes('')) {
      return onRequired('REQUIRED.NEEDS.BODY.STATUS');
    }

    const request = {
      user_id,
      patient_id,
      date,
      reason1,
      reason2,
      body_status: JSON.stringify(body_status),
      disease_status: JSON.stringify(disease_status),
    };

    updateNeeds(request)
      .then(({ data: { rc } }) => {
        if (rc !== 1) return onResultCode(rc);
        onUpdateIsSave(true);
        onSuccess('욕구평가기록지 저장에 성공하였습니다.');
      })
      .catch(e => onFail('욕구평가기록지 저장에 실패하였습니다.', e));
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
        <BodyStatus watch={watch} getValues={getValues} setValue={setValue} />
        <Reason register={register} registerKey="reason1" />
        <DiseaseStatus
          watch={watch}
          register={register}
          getValues={getValues}
          setValue={setValue}
        />
        <Reason register={register} registerKey="reason2" />
      </Grid>
    </MuiDialog.SurveyForm>
  );
};

export default Needs;
