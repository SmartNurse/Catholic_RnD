import { useState } from "react";
import { useForm } from "react-hook-form";

import useSurvey from "store/survey/useSurvey";
import useNotification from 'hooks/useNotification';

import { Typography, Grid } from "@mui/material";
import MuiDialog from "components/MuiDialog";

import { SurveyDialogProps, TAnesthesiaDefaultValues } from "../../type";

import CommonPatientInfo from "../../components/CommonPatientInfo";
import OperationInfo from "./OperationInfo";
import PrescriptionRecords from "./PrescriptionRecords";
import PatientStatus from "./PatientStatus";

const Anesthesia = (props: SurveyDialogProps<TAnesthesiaDefaultValues>) => {
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

    const onSubmit = (data: TAnesthesiaDefaultValues) => {
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

    const [operationTime, setOperationTime] = useState<string | null>(null);

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
                    마취 기록지 <br/> - 해당 메뉴 저장은 스탠다드 버전에서 가능합니다 -
                </Typography>
                <CommonPatientInfo patientInfo={patientInfo} nurseName={nurseName} />
                <OperationInfo {...formProps} time={operationTime} setTime={setOperationTime} />
                <PrescriptionRecords {...formProps} />
                <PatientStatus {...formProps} />
            </Grid>
        </MuiDialog.SurveyForm>
    );
}

export default Anesthesia;