import { useForm } from "react-hook-form";

import useSurvey from "store/survey/useSurvey";
import useNotification from 'hooks/useNotification';

import { Typography, Box } from "@mui/material";
import MuiDialog from "components/MuiDialog";

import { SurveyDialogProps, THospitalConfirmDefaultValues } from "../../type";
import { updateHospitalConfirm } from "apis/survey";

import CommonPatientInfo from "../../components/CommonPatientInfo";
import InitialEducation from "./InitialEducation";
import RoomFacilities from "./RoomFacilities";
import HospitalFacilities from "./HospitalFacilities";
import Signature from "./Signature";

const HospitalizationInfo = (props: SurveyDialogProps<THospitalConfirmDefaultValues>) => {
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

    const onSubmit = (data: THospitalConfirmDefaultValues) => {
        const { nursing_care, facilities_in, facilities, name, relationship, signature, date, personnel_signature } = data;

        const request = {
          user_id,
          patient_id: patientInfo.patient_id,
          hospital_confirm: {
            nursing_care: JSON.stringify(nursing_care),
            facilities_in: JSON.stringify(facilities_in),
            facilities: JSON.stringify(facilities),
            name,
            relationship,
            signature,
            date,
            personnel_signature,
          }
        }
  
        updateHospitalConfirm(request)
        .then(({ data: { rc } }) => {
          if (rc !== 1) return onResultCode(rc);
  
          onUpdateIsSave(true);
          onSuccess('입원 안내 확인서 저장에 성공하였습니다.');
        })
        .catch(e => onFail('입원 안내 확인서 저장에 실패하였습니다.', e));

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
            <Typography sx={{ margin: "40px auto 40px auto", fontWeight: "700", fontSize: "16px", textAlign: "center" }}>
                입원 안내 확인서
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