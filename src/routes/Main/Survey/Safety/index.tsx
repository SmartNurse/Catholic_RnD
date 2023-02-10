import { useEffect } from 'react';

import { Grid, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

import MuiDialog from 'components/MuiDialog';
import {
    SurveyDialogProps,
    TSafetyDefaultValues,
  } from 'routes/Main/Survey/type';
import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';

import CommonPatientInfo from '../components/CommonPatientInfo';
import TextareaSection from '../components/TextAreaSection';
import ConsequencesDetails from './ConsequencesDetails';
import EventClassification from './EventClassification';
import FallingType from './FallingType';
import MedicationType from './MedicationType';
import OtherType from './OtherType';
import AccidentResult from './AccidentResult';

import { updateSafety } from 'apis/survey';

const Safety = (props: SurveyDialogProps<TSafetyDefaultValues>) => {
    const {
        title,
        isOpen,
        disabled,
        defaultValues,
        user_id,
        nurseName,
        patientInfo,
        onClose,
    } = props;

    const { onUpdateIsSave } = useSurvey();
    const { onSuccess, onFail, onResultCode, onRequired } = useNotification();

    const { handleSubmit, register, getValues, setValue, watch } = useForm({
    defaultValues,
    });

    const onSubmit = (data: TSafetyDefaultValues) => {
        const { accident_consequences_details, event_classification, falling_type, medication_type, other_type, other_type_etc, accident_detail, accident_handling, accident_result } = data;
        
        const request = {
            user_id,
            patient_id: patientInfo.patient_id,
            safety_survey: {
                accident_consequences_details: {
                    ...accident_consequences_details,
                    discovery_place: accident_consequences_details.discovery_place == "0" ? accident_consequences_details.discovery_place_etc : accident_consequences_details.discovery_place,
                    accident_classification: accident_consequences_details.accident_classification == "0" ? accident_consequences_details.accident_classification_etc : accident_consequences_details.accident_classification,
                },
                event_classification,
                falling_type: {
                    ...falling_type,
                    place_falling_accident: falling_type.place_falling_accident === "0" ? falling_type.place_falling_accident_etc : falling_type.place_falling_accident,
                    patient_risk_factors: JSON.stringify(falling_type.patient_risk_factors),
                    risk_factor: falling_type.risk_factor == "0" ? falling_type.risk_factor_etc : falling_type.risk_factor,
                },
                medication_type: {
                    ...medication_type,
                    prescription_error: medication_type.prescription_error == "0" ? medication_type.prescription_error_etc : medication_type.prescription_error,
                    drug_preparation_error: medication_type.drug_preparation_error == "0" ? medication_type.drug_preparation_error_etc : medication_type.drug_preparation_error,
                },
                other_type: other_type == "0" ? other_type_etc : other_type,
                accident_detail,
                accident_handling,
                accident_result,
            }
        };
        
        updateSafety(request)
        .then(({ data: { rc } }) => {
            if (rc !== 1) return onResultCode(rc);

            onUpdateIsSave(true);
            onSuccess('환자안전사고보고서 저장에 성공하였습니다.');
        })
        .catch(e => onFail('환자안전사고보고서 저장에 실패하였습니다.', e));
    };

    const formProps = { disabled, watch, register, getValues, setValue, onSuccess, onRequired };

    useEffect(() => {
        if (getValues("accident_consequences_details.discovery_place") !== undefined && isNaN(Number(getValues("accident_consequences_details.discovery_place")))) {
            setValue("accident_consequences_details.discovery_place_etc", getValues("accident_consequences_details.discovery_place"));
            setValue("accident_consequences_details.discovery_place", "0");
        }

        if (getValues("accident_consequences_details.accident_classification") !== undefined && isNaN(Number(getValues("accident_consequences_details.accident_classification")))) {
            setValue("accident_consequences_details.accident_classification_etc", getValues("accident_consequences_details.accident_classification"));
            setValue("accident_consequences_details.accident_classification", "0");
        }

        if (getValues("falling_type.place_falling_accident") !== undefined && isNaN(Number(getValues("falling_type.place_falling_accident")))) {
            setValue("falling_type.place_falling_accident_etc", getValues("falling_type.place_falling_accident"));
            setValue("falling_type.place_falling_accident", "0");
        }

        if (getValues("falling_type.risk_factor") !== undefined && isNaN(Number(getValues("falling_type.risk_factor")))) {
            setValue("falling_type.risk_factor_etc", getValues("falling_type.risk_factor"));
            setValue("falling_type.risk_factor", "0");
        }

        if (getValues("medication_type.prescription_error") !== undefined && isNaN(Number(getValues("medication_type.prescription_error")))) {
            setValue("medication_type.prescription_error_etc", getValues("medication_type.prescription_error"));
            setValue("medication_type.prescription_error", "0");
        }

        if (getValues("medication_type.drug_preparation_error") !== undefined && isNaN(Number(getValues("medication_type.drug_preparation_error")))) {
            setValue("medication_type.drug_preparation_error_etc", getValues("medication_type.drug_preparation_error"));
            setValue("medication_type.drug_preparation_error", "0");
        }

        if (getValues("other_type") !== undefined && isNaN(Number(getValues("other_type")))) {
            setValue("other_type_etc", getValues("other_type"));
            setValue("other_type", "0");
        }
    }, []);    

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
                환자안전사고보고서
            </Typography>
            <CommonPatientInfo patientInfo={patientInfo} nurseName={nurseName} />
            <ConsequencesDetails {...formProps} />
            <EventClassification {...formProps} />
            <FallingType {...formProps} />
            <MedicationType {...formProps} />
            <OtherType {...formProps} />
            <TextareaSection {...formProps} title="사고 내용" registerId="accident_detail" />
            <TextareaSection {...formProps} title="사고 처리 및 조치 사항" registerId="accident_handling" />
            <AccidentResult {...formProps} />
        </Grid>
      </MuiDialog.SurveyForm>  
    );
}

export default Safety;