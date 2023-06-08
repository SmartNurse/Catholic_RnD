import { useForm } from 'react-hook-form';

import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';

import { Typography, Box } from '@mui/material';
import MuiDialog from 'components/MuiDialog';

import { SurveyDialogProps, TUpperEndoscopyDefaultValues } from '../../type';
import { updateUpperEndoscopy } from 'apis/survey';

import CommonPatientInfo from '../../components/CommonPatientInfo';
import InspectionPurpose from './InspectionPurpose';
import MethodandProcess from './MethodandProcess';
import Signature from './Signature';
import CautionList from './CautionList';
import Complications from './Complications';
import SpecialCaution from './SpecialCaution';

const UpperEndoscopy = (
  props: SurveyDialogProps<TUpperEndoscopyDefaultValues>
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
  const { handleSubmit, watch, getValues, setValue, register } = useForm({
    defaultValues,
  });

  const onSubmit = (data: TUpperEndoscopyDefaultValues) => {
    const {
      agree_check,
      patient_bday,
      patient_contact,
      patient_name,
      patient_sig,
      companion_bday,
      companion_contact,
      companion_name,
      companion_sig,
      dr_name,
      dr_sig,
    } = data;

    const request = {
      user_id,
      patient_id: patientInfo.patient_id,
      upper_endo_scopy_confirmation: {
        agree_check,
        patient_bday,
        patient_contact,
        patient_name,
        patient_sig,
        companion_bday,
        companion_contact,
        companion_name,
        companion_sig,
        dr_name,
        dr_sig,
      },
    };

    console.log(request);

    updateUpperEndoscopy(request)
      .then(({ data: { rc } }) => {
        if (rc !== 1) return onResultCode(rc);

        onUpdateIsSave(true);
        onSuccess('상부내시경 동의서 저장에 성공하였습니다.');
      })
      .catch(e => {
        onFail('상부내시경 동의서 저장에 실패하였습니다.', e);
        console.log(e);
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
        상부위장관내시경(식도, 위, 십이지장) 설명서 / 동의서
        <br /> - 테스트 중 입니다. -
      </Typography>
      <CommonPatientInfo patientInfo={patientInfo} nurseName={nurseName} />
      <Box sx={{ marginTop: '48px' }}>
        <InspectionPurpose {...formProps} />
        <MethodandProcess {...formProps} />
        <CautionList {...formProps} />
        <Complications {...formProps} />
        <SpecialCaution {...formProps} />
        <Signature {...formProps} />
      </Box>
    </MuiDialog.SurveyForm>
  );
};

export default UpperEndoscopy;
