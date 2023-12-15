import { Grid, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

import MuiDialog from 'components/MuiDialog';
import {
  SurveyDialogProps,
  TECardexDefaultValues,
} from 'routes/Main/Survey/type';
import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';

import TextareaSection from '../components/TextAreaSection';
import CommonPatientInfo from '../components/CommonPatientInfo';
import Remark from './Remark';
import Dosage from './Dosage';
import Lab from './Lab';
import ImageTest from './ImageTest';

import { updateECardex } from 'apis/survey';
import {
  IECardexRemark,
  IECardexDosage,
  IECardexLab,
  IECardexImagingTest,
} from 'apis/survey/type';

const ECardex = (props: SurveyDialogProps<TECardexDefaultValues>) => {
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

  const { handleSubmit, register, getValues, setValue, watch } = useForm({
    defaultValues,
  });

  const onSubmit = (data: TECardexDefaultValues) => {
    const {
      history,
      diet,
      cheif_complain,
      intubation_device,
      infection_info,
      medical_record,
      main_checkup,
      handover,
    } = data;

    const request = {
      user_id,
      patient_id: patientInfo.patient_id,
      catholic_ecardex_survey: {
        history,
        diet,
        cheif_complain,
        intubation_device,
        infection_info,
        medical_record,
        main_checkup,
        handover,
      },
    };

    updateECardex(request)
      .then(({ data: { rc } }) => {
        if (rc !== 1) return onResultCode(rc);

        onUpdateIsSave(true);
        onSuccess('e-Cardex 저장에 성공하였습니다.');
      })
      .catch(e => onFail('e-Cardex 저장에 실패하였습니다.', e));
  };

  const formProps = {
    disabled,
    watch,
    register,
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
      <Grid
        container
        wrap="wrap"
        rowSpacing={5}
        columnSpacing={3}
        sx={{ py: 5, px: 1 }}
      >
        <Typography
          sx={{
            margin: '40px auto 0px auto',
            fontWeight: '700',
            fontSize: '16px',
            textAlign: 'center',
          }}
        >
          e-Cardex (Kardex)
        </Typography>
        <CommonPatientInfo patientInfo={patientInfo} nurseName={nurseName} />
        <TextareaSection
          {...formProps}
          title="과거력"
          registerId="history"
          required={false}
        />
        <TextareaSection
          {...formProps}
          title="Diet"
          registerId="diet"
          required={false}
        />
        <TextareaSection
          {...formProps}
          title="주호소"
          registerId="cheif_complain"
          required={false}
        />
        <TextareaSection
          {...formProps}
          title="삽관기구"
          registerId="intubation_device"
          required={false}
        />
        <TextareaSection
          {...formProps}
          title="감염정보"
          registerId="infection_info"
          required={false}
        />
        <TextareaSection
          {...formProps}
          title="투약기록"
          registerId="medical_record"
          required={false}
        />
        <TextareaSection
          {...formProps}
          title="주요 검사"
          registerId="main_checkup"
          required={false}
        />
        <TextareaSection
          {...formProps}
          title="인수인계"
          registerId="handover"
          required={false}
        />
      </Grid>
    </MuiDialog.SurveyForm>
  );
};

export default ECardex;
