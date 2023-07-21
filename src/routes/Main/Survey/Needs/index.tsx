import { Grid, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';
import MuiDialog from 'components/MuiDialog';
import {
  TNeedsDefaultValues,
  SurveyDialogProps,
} from 'routes/Main/Survey/type';

import CommonPatientInfo from '../components/CommonPatientInfo';
import BodyStatus from './BodyStatus';
import Reason from './Reason';
import DiseaseStatus from './DiseaseStatus';
import { updateNeeds } from 'apis/survey';

const Needs = (props: SurveyDialogProps<TNeedsDefaultValues>) => {
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

  const onSubmit = (data: TNeedsDefaultValues) => {
    const { patient_id } = patientInfo;
    const { body_status, disease_status, reason1, reason2, date } = data;

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
          욕구평가 기록지
        </Typography>
        <CommonPatientInfo patientInfo={patientInfo} nurseName={nurseName} />
        <BodyStatus {...formProps} />
        <Reason {...formProps} registerKey="reason1" />
        <DiseaseStatus {...formProps} />
        <Reason {...formProps} registerKey="reason2" />
      </Grid>
    </MuiDialog.SurveyForm>
  );
};

export default Needs;
