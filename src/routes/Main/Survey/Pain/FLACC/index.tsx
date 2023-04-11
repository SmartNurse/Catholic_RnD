import { useForm } from "react-hook-form";

import useSurvey from "store/survey/useSurvey";
import useNotification from 'hooks/useNotification';

import { Typography } from "@mui/material";
import MuiDialog from "components/MuiDialog";

import CommonPatientInfo from "../../components/CommonPatientInfo";
import FlaccContents from "./FlaccContents";

import { SurveyDialogProps, TFLACCDefaultValues } from "../../type";
import { IFLACC } from "apis/survey/type";
import { updateFLACC } from "apis/survey";

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
        const { flacc_survey } = data;

        const request = {
          user_id,
          patient_id: patientInfo.patient_id,
          flacc_survey: flacc_survey?.map(
            ({ time, sum }: IFLACC) => ({ time, sum })
          )
        }
  
        updateFLACC(request)
        .then(({ data: { rc } }) => {
          if (rc !== 1) return onResultCode(rc);
  
          onUpdateIsSave(true);
          onSuccess('FLACC Scale 저장에 성공하였습니다.');
        })
        .catch(e => onFail('FLACC Scale 저장에 실패하였습니다.', e));
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
            <Typography sx={{ margin: "40px auto 40px auto", fontWeight: "700", fontSize: "16px", textAlign: "center" }}>
                FLACC Scale
            </Typography>
            <CommonPatientInfo patientInfo={patientInfo} nurseName={nurseName} />
            <FlaccContents {...formProps} />
        </MuiDialog.SurveyForm>
    );
}

export default FLACC;