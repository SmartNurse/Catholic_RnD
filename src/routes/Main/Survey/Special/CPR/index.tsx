import { useForm } from 'react-hook-form';

import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';

import { Typography } from '@mui/material';
import MuiDialog from 'components/MuiDialog';

import { SurveyDialogProps, TCPRDefaultValues } from '../../type';

import CPRContents from './CPRContents';

import { updateCNPS, updateCPR } from 'apis/survey';
import PatientStaffInfo from './PatientStaffInfo';

const CPR = (props: SurveyDialogProps<TCPRDefaultValues>) => {
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

  const onSubmit = (data: TCPRDefaultValues) => {
    const {
      update_at,
      find_date,
      find_time,
      terminate_reason,
      clinical_observation,
      treatment,
      intubation,
      medication,
      test,
    } = data;

    const request = {
      user_id,
      patient_id: patientInfo.patient_id,
      catholic_cpr_survey: {
        update_at,
        find_date,
        find_time,
        terminate_reason,
        clinical_observation,
        treatment,
        intubation,
        medication,
        test,
      },
    };
    updateCPR(request)
      .then(({ data: { rc } }) => {
        if (rc !== 1) return onResultCode(rc);
        onUpdateIsSave(true);
        onSuccess('CPR 기록지 저장에 성공하였습니다.');
      })
      .catch(e => onFail('CPR 기록지 저장에 실패하였습니다.', e));
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
        심폐소생술(CPR,cardio-pulmonary resuscitation) 기록지
      </Typography>
      <PatientStaffInfo
        {...formProps}
        patientInfo={patientInfo}
        nurseName={nurseName}
      />

      <CPRContents {...formProps} timeStart={0} />
      <CPRContents {...formProps} timeStart={11} />
    </MuiDialog.SurveyForm>
  );
};

export default CPR;
