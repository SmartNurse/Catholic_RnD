import { useForm } from "react-hook-form";

import useSurvey from "store/survey/useSurvey";
import useNotification from 'hooks/useNotification';

import { Typography } from "@mui/material";
import MuiDialog from "components/MuiDialog";

import { SurveyDialogProps, TMMSEDefaultValues } from "../../type";

import CommonPatientInfo from "../../components/CommonPatientInfo";
import MMSEContents from "./MMSEContents";

import { updateMMSE } from "apis/survey";

const MMSE = (props: SurveyDialogProps<TMMSEDefaultValues>) => {
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

    const onSubmit = (data: TMMSEDefaultValues) => {
        const { score, sum } = data;

        const request = {
          user_id,
          patient_id: patientInfo.patient_id,
          score,
          sum,
        };
        
        updateMMSE(request)
        .then(({ data: { rc } }) => {
          if (rc !== 1) return onResultCode(rc);
  
          onUpdateIsSave(true);
          onSuccess('MMSE 저장에 성공하였습니다.');
        })
        .catch(e => onFail('MMSE 저장에 실패하였습니다.', e));
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
                인지기능검사 (Mini-Mental State Examination; MMSE-K)
            </Typography>
            <CommonPatientInfo patientInfo={patientInfo} nurseName={nurseName} />
            <MMSEContents {...formProps} />
        </MuiDialog.SurveyForm>
    );
}

export default MMSE;