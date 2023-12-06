import { useForm } from 'react-hook-form';

import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';

import { Typography, Box } from '@mui/material';
import MuiDialog from 'components/MuiDialog';

import { SurveyDialogProps, TSuppressorDefaultValues } from '../../type';
import { updateSuppressor } from 'apis/survey';

import CommonPatientInfo from '../../components/CommonPatientInfo';
import PatientInfo from './PatientInfo';
import GuardianInfo from './GuardianInfo';
import Signature from './Signature';
import RecordInfo from './RecordInfo';

const Suppressor = (props: SurveyDialogProps<TSuppressorDefaultValues>) => {
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

  const onSubmit = (data: TSuppressorDefaultValues) => {
    const {
      no2_1,
      no2_2,
      no2_3,
      no2_4,
      no2_5,
      no2_dr_name,
      no2_dr_sign,
      no3_check_01,
      no3_check_02,
      no3_check_03,
      no3_check_04,

      no3_input_box,
      date,
      relationship,
      name,
      sign,
      dr_name,
      dr_sign,
      ns_name,
      ns_sign,
    } = data;

    const request = {
      user_id,
      patient_id: patientInfo.patient_id,
      restraints_confirmation: {
        no2_1,
        no2_2,
        no2_3,
        no2_4,
        no2_5,
        no2_dr_name,
        no2_dr_sign,
        no3_check_01,
        no3_check_02,
        no3_check_03,
        no3_check_04,
        no3_input_box,
        date,
        relationship,
        name,
        sign,
        dr_name,
        dr_sign,
        ns_name,
        ns_sign,
      },
    };

    // console.log(request);

    updateSuppressor(request)
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
