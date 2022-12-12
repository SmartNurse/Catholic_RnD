import { useForm } from "react-hook-form";

import useSurvey from "store/survey/useSurvey";
import useNotification from 'hooks/useNotification';

import { Typography, Box } from "@mui/material";
import MuiDialog from "components/MuiDialog";

import { SurveyDialogProps, TFallPreventionDefaultValues } from "../../type";

import CommonPatientInfo from "../../components/CommonPatientInfo";
import CautionList from "./CautionList";
import EducationList from "./EducationList";
import Signature from "./Signature";

const FallPrevention = (props: SurveyDialogProps<TFallPreventionDefaultValues>) => {
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
    const { handleSubmit, watch, getValues, setValue, register } = useForm({
        defaultValues,
    });

    const onSubmit = (data: TFallPreventionDefaultValues) => {
    }

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
            <Typography fontSize={16} fontWeight="bold" align="center" sx={{ marginTop: "12px", marginBottom: "40px" }}>
                낙상 예방교육 확인서
                <br/>
                - Test 중 입니다 -
            </Typography>
            <CommonPatientInfo patientInfo={patientInfo} nurseName={nurseName} />
            <Box sx={{ marginTop: "48px" }}>
                <CautionList {...formProps} />
                <EducationList {...formProps} />
                <Signature {...formProps} />
            </Box>
        </MuiDialog.SurveyForm>
    );
}

export default FallPrevention;