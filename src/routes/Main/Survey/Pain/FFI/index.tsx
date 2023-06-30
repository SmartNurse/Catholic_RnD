import { useForm } from 'react-hook-form';

import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';

import { Typography } from '@mui/material';
import MuiDialog from 'components/MuiDialog';

import CommonPatientInfo from '../../components/CommonPatientInfo';
import FFIContents from './FFIContents';

import { SurveyDialogProps, TFFIDefaultValues } from '../../type';
import { INRS } from 'apis/survey/type';
import { updateFFI } from 'apis/survey';

const FFI = (props: SurveyDialogProps<TFFIDefaultValues>) => {
  const {
    title,
    isOpen,
    disabled,
    defaultValues,
    patientInfo,
    nurseName,
    user_id,
    onClose,
  } = props;

  const { onUpdateIsSave } = useSurvey();
  const { onSuccess, onFail, onResultCode, onRequired } = useNotification();
  const { handleSubmit, watch, getValues, setValue, register } = useForm({
    defaultValues,
  });

  const onSubmit = (data: TFFIDefaultValues) => {
    const {
      ffi01,
      ffi02,
      ffi03,
      ffi04,
      ffi05,
      ffi06,
      ffi07,
      ffi08,

      ffi09,
      ffi10,
      ffi11,
      ffi12,
      ffi13,
      ffi14,
      ffi15,
      ffi16,
      ffi17,
      ffi18,

      ffi19,
      ffi20,
      ffi21,
      ffi22,
      ffi23,
    } = data;

    const request = {
      user_id,
      patient_id: patientInfo.patient_id,
      ffi_survey: { ...data },
    };

    updateFFI(request)
      .then(({ data: { rc } }) => {
        if (rc !== 1) return onResultCode(rc);

        onUpdateIsSave(true);
        onSuccess('FFI 저장에 성공하였습니다.');
      })
      .catch(e => onFail('FFI 저장에 실패하였습니다.', e));
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
        발, 발목 관절 기능 척도 평가(Foot function index , FFI)
      </Typography>
      <CommonPatientInfo patientInfo={patientInfo} nurseName={nurseName} />
      <FFIContents {...formProps} />
    </MuiDialog.SurveyForm>
  );
};

export default FFI;
