import { useForm } from "react-hook-form";

import useSurvey from "store/survey/useSurvey";
import useNotification from 'hooks/useNotification';

import { Typography, Box } from "@mui/material";
import MuiDialog from "components/MuiDialog";

import { SurveyDialogProps, TFallConfirmDefaultValues } from "../../type";
import { updateFallConfirm } from "apis/survey";

import CommonPatientInfo from "../../components/CommonPatientInfo";
import CautionList from "./CautionList";
import EducationList from "./EducationList";
import Signature from "./Signature";

const FallPrevention = (props: SurveyDialogProps<TFallConfirmDefaultValues>) => {
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

    const onSubmit = (data: TFallConfirmDefaultValues) => {
        const { fall_education, signature, date, personnel_signature } = data;

        const request = {
          user_id,
          patient_id: patientInfo.patient_id,
          fall_confirm: {
            fall_education: JSON.stringify(fall_education),
            signature,
            date,
            personnel_signature,
          }
        }

        console.log(request);
  
        updateFallConfirm(request)
        .then(({ data: { rc } }) => {
          if (rc !== 1) return onResultCode(rc);
  
          onUpdateIsSave(true);
          onSuccess('낙상 예방교육 확인서 저장에 성공하였습니다.');
        })
        .catch(e => {
            onFail('낙상 예방교육 확인서 저장에 실패하였습니다.', e);
            console.log(e);
        });
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
                낙상 예방교육 확인서
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