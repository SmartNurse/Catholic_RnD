import { useForm } from 'react-hook-form';

import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';

import { Typography, Box } from '@mui/material';
import MuiDialog from 'components/MuiDialog';

import { SurveyDialogProps, TMedicalRecordDefaultValues } from '../../type';
import { updateMedicalRecords } from 'apis/survey';

import CommonPatientInfo from '../../components/CommonPatientInfo';
import PatientInfo from './PatientInfo';
import GuardianInfo from './GuardianInfo';
import Signature from './Signature';
import RecordInfo from './RecordInfo';

const Suppressor = (props: SurveyDialogProps<TMedicalRecordDefaultValues>) => {
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
  const { handleSubmit, watch, getValues, setValue, register } = useForm({
    defaultValues,
  });

  const onSubmit = (data: TMedicalRecordDefaultValues) => {
    const {
      pt_name,
      pt_ssn,
      pt_addr,
      pt_contact,

      applier_name,
      applier_relp,
      applier_bday,
      applier_contact,
      applier_addr,

      scope_center,
      scope_period_from,
      scope_period_to,
      scope_reason,
      scope_detail,

      date,
      name,
      sig,
    } = data;

    const request = {
      user_id,
      patient_id: patientInfo.patient_id,
      chart_confirmation: {
        pt_name,
        pt_ssn,
        pt_addr,
        pt_contact,

        applier_name,
        applier_relp,
        applier_bday,
        applier_contact,
        applier_addr,

        scope_center,
        scope_period_from,
        scope_period_to,
        scope_reason,
        scope_detail,

        date,
        name,
        sig,
      },
    };

    // console.log(request);

    updateMedicalRecords(request)
      .then(({ data: { rc } }) => {
        if (rc !== 1) return onResultCode(rc);

        onUpdateIsSave(true);
        onSuccess('억제대 동의서 저장에 성공하였습니다.');
      })
      .catch(e => {
        onFail('억제대 동의서 저장에 실패하였습니다.', e);
        // console.log(e);
      });
  };

  const formProps = {
    disabled,
    watch,
    getValues,
    setValue,
    onSuccess,
    onRequired,
    register,
  };

  return (
    <MuiDialog.SurveyForm
      title={title}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={disabled ? undefined : handleSubmit(onSubmit)}
      update_at={defaultValues?.update_at}
    >
      <Typography
        sx={{
          margin: '40px auto 40px auto',
          fontWeight: '700',
          fontSize: '16px',
          textAlign: 'center',
        }}
      >
        신체 억제대 사용동의서
        <br />- 테스트 중입니다. -
      </Typography>
      <CommonPatientInfo patientInfo={patientInfo} nurseName={nurseName} />
      <Box sx={{ marginTop: '48px' }}>
        <PatientInfo {...formProps} />
        <GuardianInfo {...formProps} />
        <RecordInfo {...formProps} />
        <Signature {...formProps} />
      </Box>
    </MuiDialog.SurveyForm>
  );
};

export default Suppressor;
