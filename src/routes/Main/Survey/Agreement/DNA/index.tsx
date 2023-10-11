import { useForm } from 'react-hook-form';

import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';

import { Typography, Box } from '@mui/material';
import MuiDialog from 'components/MuiDialog';

import { SurveyDialogProps, TDNADefaultValues } from '../../type';
import { updateDNA } from 'apis/survey';

import Signature from './Signature';
import PatientInfo from './PatientInfo';
import GuardianInfo from './GuardianInfo';
import DNAAgency from './DNAAgency';
import InspectionItems from './InspectionItems';
import CautionList from './CautionList';

const FallPrevention = (props: SurveyDialogProps<TDNADefaultValues>) => {
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

  const onSubmit = (data: TDNADefaultValues) => {
    const {
      test_object_name,
      test_object_ssn,
      test_object_addr,
      test_object_contact,

      legal_representative_name,
      legal_representative_ssn,
      legal_representative_addr,
      legal_representative_contact,

      lab_name,
      lab_contact,

      pt_purpose,
      pt_test,

      date,

      testee_name,
      testee_sig,

      representative_name,
      representative_sig,

      consultant_name,
      consultant_sig,
    } = data;

    const request = {
      user_id,
      patient_id: patientInfo.patient_id,
      gene_test_confirmation: {
        test_object_name,
        test_object_ssn,
        test_object_addr,
        test_object_contact,

        legal_representative_name,
        legal_representative_ssn,
        legal_representative_addr,
        legal_representative_contact,

        lab_name,
        lab_contact,

        pt_purpose,
        pt_test,

        date,

        testee_name,
        testee_sig,

        representative_name,
        representative_sig,

        consultant_name,
        consultant_sig,
      },
    };

    // console.log(request);

    updateDNA(request)
      .then(({ data: { rc } }) => {
        if (rc !== 1) return onResultCode(rc);

        onUpdateIsSave(true);
        onSuccess('유전자검사 동의서 저장에 성공하였습니다.');
      })
      .catch(e => {
        onFail('유전자검사 동의서 저장에 실패하였습니다.', e);
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
        유전자검사 동의서
      </Typography>
      {/* <CommonPatientInfo patientInfo={patientInfo} nurseName={nurseName} /> */}
      <Box sx={{ marginTop: '48px' }}>
        <PatientInfo {...formProps} />
        <GuardianInfo {...formProps} />
        <DNAAgency {...formProps} />
        <InspectionItems {...formProps} />
        <Signature {...formProps} />
        <CautionList {...formProps} />
      </Box>
    </MuiDialog.SurveyForm>
  );
};

export default FallPrevention;
