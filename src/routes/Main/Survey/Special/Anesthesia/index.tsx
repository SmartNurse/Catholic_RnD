import { useState } from "react";
import { useForm } from "react-hook-form";

import useSurvey from "store/survey/useSurvey";
import useNotification from 'hooks/useNotification';

import { Typography, Grid } from "@mui/material";
import MuiDialog from "components/MuiDialog";

import { SurveyDialogProps, TAnesthesiaDefaultValues } from "../../type";
import { updateAnestheia } from "apis/survey";

import PatientStaffInfo from "./PatientStaffInfo";
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
        const { operation_information, prescription_record, patient_status_record, patient_status_list_record } = data;
        
        const request = {
            user_id,
            patient_id: patientInfo.patient_id,
            anesthetic_survey: {
                operation_information: {
                    ...operation_information,
                    position: operation_information.position === "etc" ? operation_information.position_etc : operation_information.position,
                    prophylactic_method: operation_information.prophylactic_method === "etc" ? operation_information.prophylactic_method_etc : operation_information.prophylactic_method,
                },
                prescription_record,
                patient_status_record,
                patient_status_list_record,    
            }
        }
  
        updateAnestheia(request)
        .then(({ data: { rc } }) => {
            if (rc !== 1) return onResultCode(rc);
  
            onUpdateIsSave(true);
            onSuccess('마취 기록지 저장에 성공하였습니다.');
        })
        .catch(e => onFail('마취 기록지 저장에 실패하였습니다.', e));
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
                <Typography sx={{ margin: "40px auto 0px auto", fontWeight: "700", fontSize: "16px", textAlign: "center" }}>
                    마취 기록지
                </Typography>
                <PatientStaffInfo {...formProps} patientInfo={patientInfo} nurseName={nurseName} />
                <OperationInfo {...formProps} />
                <PrescriptionRecords {...formProps} />
                <PatientStatus {...formProps} />
            </Grid>
        </MuiDialog.SurveyForm>
    );
}

export default Anesthesia;