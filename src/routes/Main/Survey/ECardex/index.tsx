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
import PatientInfo from './PatientInfo';
import Remark from './Remark';
import Dosage from './Dosage';
import Lab from './Lab';
import ImageTest from './ImageTest';

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
    };

    const formProps = { disabled, watch, register, getValues, setValue, onSuccess, onRequired };

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
            <Typography sx={{ margin: "40px auto 0px auto", fontWeight: "700", fontSize: "16px", textAlign: "center" }}>e-Cardex (Kardex) <br/> - Test 중 입니다 -</Typography>
            <PatientInfo patientInfo={patientInfo} nurseName={nurseName} />
            <TextareaSection {...formProps} title="기타 인계사항" registerId="etc.text" />
            <Remark {...formProps} />
            <Dosage {...formProps} />
            <Lab {...formProps} />
            <ImageTest {...formProps} />
            <TextareaSection {...formProps} title="간호문제" registerId="problem" />
            <TextareaSection {...formProps} title="간호 계획 및 지시" registerId="plan" />
            <TextareaSection {...formProps} title="평가" registerId="evaluation" />
        </Grid>
      </MuiDialog.SurveyForm>  
    );
}

export default ECardex;