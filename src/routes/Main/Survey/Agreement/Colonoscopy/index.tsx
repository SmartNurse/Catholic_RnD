import { useForm } from 'react-hook-form';

import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';

import { Typography, Box } from '@mui/material';
import MuiDialog from 'components/MuiDialog';

import { SurveyDialogProps, TColonoscopyDefaultValues } from '../../type';
import { updateColonoscopy } from 'apis/survey';

import CommonPatientInfo from '../../components/CommonPatientInfo';
import ResultPurpose from './ResultPurpose';
import CautionList from './CautionList';
import Signature from './Signature';
import Complications from './Complications';
import MethodandProcess from './MethodandProcess';
import SpecialCaution from './SpecialCaution';

const Colonoscopy = (props: SurveyDialogProps<TColonoscopyDefaultValues>) => {
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

  const onSubmit = (data: TColonoscopyDefaultValues) => {
    const {
      agree_check_01,
      agree_check_02,
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
      colono_scopy_confirmation: {
        agree_check_01,
        agree_check_02,
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

    // console.log('리퀘스트', request);

    updateColonoscopy(request)
      .then(({ data: { rc } }) => {
        if (rc !== 1) return onResultCode(rc);

        onUpdateIsSave(true);
        onSuccess('대장내시경 동의서 저장에 성공하였습니다.');
      })
      .catch(e => {
        onFail('대장내시경 동의서 저장에 실패하였습니다.', e);
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
        대장내시경 및 용종 절제술 설명서 / 동의서
      </Typography>
      <CommonPatientInfo patientInfo={patientInfo} nurseName={nurseName} />
      <Box sx={{ marginTop: '48px' }}>
        <ResultPurpose {...formProps} />
        <CautionList {...formProps} />
        <Complications {...formProps} />
        <MethodandProcess {...formProps} />
        <SpecialCaution {...formProps} />
        <Signature {...formProps} />
      </Box>
    </MuiDialog.SurveyForm>
  );
};

export default Colonoscopy;
