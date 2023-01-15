import { useForm } from "react-hook-form";

import useSurvey from "store/survey/useSurvey";
import useNotification from 'hooks/useNotification';

import { Typography, Box } from "@mui/material";
import MuiDialog from "components/MuiDialog";

import { SurveyDialogProps, THospitalizationInfoDefaultValues } from "../../type";

import CommonPatientInfo from "../../components/CommonPatientInfo";
import InitialEducation from "./InitialEducation";
import RoomFacilities from "./RoomFacilities";
import HospitalFacilities from "./HospitalFacilities";
import Signature from "./Signature";

const HospitalizationInfo = (props: SurveyDialogProps<THospitalizationInfoDefaultValues>) => {
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

    const onSubmit = (data: THospitalizationInfoDefaultValues) => {
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
                입원 안내 확인서
                <br/>
                - 해당 메뉴 저장은 스탠다드 버전에서 가능합니다 -
            </Typography>
            <CommonPatientInfo patientInfo={patientInfo} nurseName={nurseName} />
            <Box sx={{ marginTop: "48px" }}>
                <InitialEducation {...formProps} />
                <RoomFacilities {...formProps} />
                <HospitalFacilities {...formProps} />
                <Signature {...formProps} />
            </Box>
        </MuiDialog.SurveyForm>
    );
}

export default HospitalizationInfo;