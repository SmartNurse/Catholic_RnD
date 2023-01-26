import { useState } from "react";
import { useForm } from "react-hook-form";

import useSurvey from "store/survey/useSurvey";
import useNotification from 'hooks/useNotification';

import { Typography, Grid } from "@mui/material";
import MuiDialog from "components/MuiDialog";

import { SurveyDialogProps, TChildbirthDefaultValues } from "../../type";
import { updateChildbirth } from "apis/survey";

import CommonPatientInfo from "../../components/CommonPatientInfo";
import ChildbirthInfo from "./ChildbirthInfo";
import BabyStatus from "./BabyStatus";
import PlacentaRemoval from "./PlacentaRemoval";
import MotherStatus from "./MotherStatus";
import NursingRecords from "./NursingRecords";

const Childbirth = (props: SurveyDialogProps<TChildbirthDefaultValues>) => {
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

    const onSubmit = (data: TChildbirthDefaultValues) => {
        const { child_birth_information, newborn_condition, placenta_removal, maternal_condition, nursing_records } = data;

        const request = {
            user_id,
            patient_id: patientInfo.patient_id,
            delivery_survey: {
                child_birth_information,
                newborn_condition: {
                    ...newborn_condition,
                    gender: Number(newborn_condition.gender),
                    oxygen_intake: Number(newborn_condition.oxygen_intake),
                    first_urine: Number(newborn_condition.first_urine),
                    placenta_discharge: Number(newborn_condition.placenta_discharge),
                    fetal_staining: Number(newborn_condition.fetal_staining),
                    nuchal_cord: Number(newborn_condition.nuchal_cord),
                    resuscitation: Number(newborn_condition.resuscitation),
                },
                placenta_removal,
                maternal_condition,
                nursing_records
            }
        }
        console.log(request);
        updateChildbirth(request)
        .then(({ data: { rc } }) => {
            if (rc !== 1) return onResultCode(rc);
  
            onUpdateIsSave(true);
            onSuccess('분만 기록지 저장에 성공하였습니다.');
        })
        .catch(e => onFail('분만 기록지 저장에 실패하였습니다.', e));
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
                    분만 기록지
                </Typography>
                <CommonPatientInfo patientInfo={patientInfo} nurseName={nurseName} />
                <ChildbirthInfo {...formProps} />
                <BabyStatus {...formProps} />
                <PlacentaRemoval {...formProps} />
                <MotherStatus {...formProps} />
                <NursingRecords {...formProps} />
            </Grid>
        </MuiDialog.SurveyForm>
    );
}

export default Childbirth;