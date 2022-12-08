
import { useState } from "react";

import { Grid, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

import MuiDialog from 'components/MuiDialog';
import {
    SurveyDialogProps,
    TDialysisDefaultValues,
  } from 'routes/Main/Survey/type';
import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';

import PatientInfo from "./PatientInfo";
import DialysisInfo from "./DialysisInfo";
import WeightInfo from "./WeightInfo";
import DialysisDB from "./DialysisDB";
import TextAreaSection from "../../components/TextAreaSection";

const Transfusion = (props: SurveyDialogProps<TDialysisDefaultValues>) => {
    const {
        title,
        isOpen,
        disabled,
        defaultValues,
        user_id,
        patientInfo,
        onClose,
    } = props;

    const [dialysisTime, setDialysisTime] = useState<string | null>(null);
    const [dbTime, setDbTime] = useState<(string | null)[]>([null, null, null, null]);

    const { onUpdateIsSave } = useSurvey();
    const { onSuccess, onFail, onResultCode, onRequired } = useNotification();

    const { handleSubmit, register, getValues, setValue, watch } = useForm({
    defaultValues,
    });

    const onSubmit = (data: TDialysisDefaultValues) => {
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
            <Typography sx={{ margin: "40px auto 0px auto", fontWeight: "700", fontSize: "16px", textAlign: "center" }}>
                투석 기록지 <br/> - Test 중 입니다 -
            </Typography>
            <PatientInfo {...formProps} patientInfo={patientInfo} />
            <DialysisInfo {...formProps} dialysisTime={dialysisTime} setDialysisTime={setDialysisTime} />
            <WeightInfo {...formProps} />
            <DialysisDB {...formProps} dbTime={dbTime} setDbTime={setDbTime} />
            <TextAreaSection {...formProps} title="투약 및 처치 / 특이사항" registerId="etc" />
        </Grid>
      </MuiDialog.SurveyForm>  
    );
}

export default Transfusion;