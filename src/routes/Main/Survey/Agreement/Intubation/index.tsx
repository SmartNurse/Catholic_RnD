import { useForm } from 'react-hook-form';

import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';

import { Typography, Box } from '@mui/material';
import MuiDialog from 'components/MuiDialog';

import { SurveyDialogProps, TTransfusionAgreeDefaultValues } from '../../type';
import { updateTransfusionAgree } from 'apis/survey';

import CommonPatientInfo from '../../components/CommonPatientInfo';
import ResultPurpose from './ResultPurpose';
import CautionList from './CautionList';
import Signature from './Signature';
import Complications from './Complications';
import MethodandProcess from './MethodandProcess';

const IntubationAgreement = (
  props: SurveyDialogProps<TTransfusionAgreeDefaultValues>
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

  const onSubmit = (data: TTransfusionAgreeDefaultValues) => {
    const {
      pt_bday,
      pt_contact,
      pt_name,
      pt_sig,

      representative_bday,
      representative_contact,
      representative_name,
      representative_sig,

      dr_name,
      dr_sig,
    } = data;

    const request = {
      user_id,
      patient_id: patientInfo.patient_id,
      transfusion_confirmation: {
        pt_bday,
        pt_contact,
        pt_name,
        pt_sig,

        representative_bday,
        representative_contact,
        representative_name,
        representative_sig,

        dr_name,
        dr_sig,
      },
    };

    // console.log('리퀘스트', request);

    updateTransfusionAgree(request)
      .then(({ data: { rc } }) => {
        if (rc !== 1) return onResultCode(rc);

        onUpdateIsSave(true);
        onSuccess('기관내 삽관 동의서 저장에 성공하였습니다.');
      })
      .catch(e => {
        onFail('기관내 삽관 동의서 저장에 실패하였습니다.', e);
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
        기관내 삽관 동의서
      </Typography>
      <CommonPatientInfo patientInfo={patientInfo} nurseName={nurseName} />
      <Box sx={{ marginTop: '48px' }}>
        <ResultPurpose {...formProps} />
        <CautionList {...formProps} />
        <Complications {...formProps} />
        <MethodandProcess {...formProps} />
        <Signature {...formProps} />
      </Box>
    </MuiDialog.SurveyForm>
  );
};

export default IntubationAgreement;
