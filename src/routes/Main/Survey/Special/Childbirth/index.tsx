import { useState } from "react";
import { useForm } from "react-hook-form";

import useSurvey from "store/survey/useSurvey";
import useNotification from 'hooks/useNotification';

import { Typography, Grid } from "@mui/material";
import MuiDialog from "components/MuiDialog";

import { SurveyDialogProps, TChildbirthDefaultValues } from "../../type";

import CommonPatientInfo from "../../components/CommonPatientInfo";
import ChildbirthInfo from "./ChildbirthInfo";
import BabyStatus from "./BabyStatus";
import PlacentaRemoval from "./PlacentaRemoval";
import MotherStatus from "./MotherStatus";
import NursingRecords from "./NursingRecords";

const Childbirth = (props: SurveyDialogProps<TChildbirthDefaultValues>) => {
    const {
        title,
        isOpen,
        disabled,
        defaultValues,
        user_id,
        nurseName,
        patientInfo,
        onClose
    } = props;

    const { onUpdateIsSave } = useSurvey();
    const { onSuccess, onFail, onResultCode, onRequired } = useNotification();
    const { handleSubmit, watch, register, getValues, setValue } = useForm({
        defaultValues,
    });

    const onSubmit = (data: TChildbirthDefaultValues) => {
    }

    const formProps = {
        disabled,
        watch,
        register,
        getValues,
        setValue,
        onSuccess,
        onRequired,
    };

    const [childbirthTime, setChildbirthTime] = useState<string | null>(null);
    const [placentaTime, setPlacentaTime] = useState<string | null>(null);
    const [dialysisTime, setDialysisTime] = useState<string | null>(null);

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
                <Typography sx={{ margin: "40px auto 0px auto", fontWeight: "700", fontSize: "20px", textAlign: "center" }}>
                    분만 기록지 <br/> - Test 중 입니다 -
                </Typography>
                <CommonPatientInfo patientInfo={patientInfo} nurseName={nurseName} />
                <ChildbirthInfo {...formProps} time={childbirthTime} setTime={setChildbirthTime} />
                <BabyStatus {...formProps} />
                <PlacentaRemoval {...formProps} time={placentaTime} setTime={setPlacentaTime} />
                <MotherStatus {...formProps} />
                <NursingRecords {...formProps} />
            </Grid>
        </MuiDialog.SurveyForm>
    );
}

export default Childbirth;