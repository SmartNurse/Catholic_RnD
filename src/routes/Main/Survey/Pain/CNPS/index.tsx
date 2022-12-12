import { useForm } from "react-hook-form";

import useSurvey from "store/survey/useSurvey";
import useNotification from 'hooks/useNotification';

import { Typography } from "@mui/material";
import MuiDialog from "components/MuiDialog";

import { SurveyDialogProps, TCNPSDefaultValues } from "../../type";

import CommonPatientInfo from "../../components/CommonPatientInfo";
import CNPSContents from "./CNPSContents";

const CNPS = (props: SurveyDialogProps<TCNPSDefaultValues>) => {
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
    const { handleSubmit, watch, getValues, setValue } = useForm({
        defaultValues,
    });

    const onSubmit = (data: TCNPSDefaultValues) => {
    }

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
            <Typography fontSize={16} fontWeight="bold" align="center" sx={{ marginTop: "12px", marginBottom: "40px" }}>
                CNPS
                <br/>
                (Criical care Nonverbal Pain Scale)
                <br/>
                - Test 중 입니다 -
            </Typography>
            <CommonPatientInfo patientInfo={patientInfo} nurseName={nurseName} />
            <CNPSContents {...formProps} />
        </MuiDialog.SurveyForm>
    );
}

export default CNPS;