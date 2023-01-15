import { useForm } from "react-hook-form";

import useSurvey from "store/survey/useSurvey";
import useNotification from 'hooks/useNotification';

import { Typography } from "@mui/material";
import MuiDialog from "components/MuiDialog";

import CommonPatientInfo from "../../components/CommonPatientInfo";
import FlaccContents from "./FlaccContents";

import { SurveyDialogProps, TFLACCDefaultValues } from "../../type";

const FLACC = (props: SurveyDialogProps<TFLACCDefaultValues>) => {
    const {
        title,
        isOpen,
        disabled,
        defaultValues,
        user_id,
        patientInfo,
        nurseName,
        onClose
    } = props;

    const { onUpdateIsSave } = useSurvey();
    const { onSuccess, onFail, onResultCode, onRequired } = useNotification();
    const { handleSubmit, watch, getValues, setValue } = useForm({
        defaultValues,
    });

    const onSubmit = (data: TFLACCDefaultValues) => {
        /* API 완성되면 작업할 부분 */
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
                FLACC Scale
                <br />
                - 해당 메뉴 저장은 스탠다드 버전에서 가능합니다 -
            </Typography>
            <CommonPatientInfo patientInfo={patientInfo} nurseName={nurseName} />
            <FlaccContents {...formProps} />
        </MuiDialog.SurveyForm>
    );
}

export default FLACC;