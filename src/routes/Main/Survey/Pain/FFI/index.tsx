import { useForm } from 'react-hook-form';

import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';

import { Typography } from '@mui/material';
import MuiDialog from 'components/MuiDialog';

import CommonPatientInfo from '../../components/CommonPatientInfo';
import FFIContents from './FFIContents';

import { SurveyDialogProps, TNRSDefaultValues } from '../../type';
import { INRS } from 'apis/survey/type';
import { updateNRS } from 'apis/survey';

const FFI = (props: SurveyDialogProps<TNRSDefaultValues>) => {
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
  const { handleSubmit, watch, getValues, setValue } = useForm({
    defaultValues,
  });

  const onSubmit = (data: TNRSDefaultValues) => {
    const { nrs_survey } = data;

    const request = {
      user_id,
      patient_id: patientInfo.patient_id,
      nrs_survey: nrs_survey?.map(({ time, pain_score }: INRS) => ({
        time,
        pain_score,
      })),
    };
    console.log(request);
    updateNRS(request)
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
        <br />
        테스트중입니다.
      </Typography>
      <CommonPatientInfo patientInfo={patientInfo} nurseName={nurseName} />
      <FFIContents {...formProps} />
    </MuiDialog.SurveyForm>
  );
};

export default FFI;
