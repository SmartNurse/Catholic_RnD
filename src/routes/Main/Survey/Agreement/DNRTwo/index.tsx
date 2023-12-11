import { useForm } from 'react-hook-form';

import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';

import { Typography, Box } from '@mui/material';
import MuiDialog from 'components/MuiDialog';

import { SurveyDialogProps, TMedicalRecordDefaultValues } from '../../type';
import { updateMedicalRecords } from 'apis/survey';

import CommonPatientInfo from '../../components/CommonPatientInfo';
import CVCone from './CVCone';
import CVCtwo from './CVCtwo';
import Signature from './Signature';

const DNRTwo = (props: SurveyDialogProps<TMedicalRecordDefaultValues>) => {
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
        onSuccess(
          '연명의료중단등결정에 대한 친권자 및 환자 가족 의사 확인서 저장에 성공하였습니다.'
        );
      })
      .catch(e => {
        onFail(
          '연명의료중단등결정에 대한 친권자 및 환자 가족 의사 확인서 저장에 실패하였습니다.',
          e
        );
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
        연명의료중단등결정에 대한 친권자 및 환자 가족 의사 확인서
      </Typography>
      <CommonPatientInfo patientInfo={patientInfo} nurseName={nurseName} />
      <Box sx={{ marginTop: '48px' }}>
        <CVCone {...formProps} />
        <CVCtwo {...formProps} />
        <Signature {...formProps} />
      </Box>
    </MuiDialog.SurveyForm>
  );
};

export default DNRTwo;
