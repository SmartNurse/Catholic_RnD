
import { useState } from "react";

import { Grid, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

import MuiDialog from 'components/MuiDialog';
import {
    SurveyDialogProps,
    TEmergencyDefaultValues,
    } from 'routes/Main/Survey/type';
import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';

import { updateEmergency } from "apis/survey";

import CommonPatientInfo from '../../components/CommonPatientInfo';
import EmergencyRecord from "./EmergencyRecord";
import NewInfo from "./NewInfo";
import PatientStatus from "./PatientStatus";
import EmergencyResult from "./EmergencyResult";
import CheckDisease from "./CheckDisease";

const Emergency = (props: SurveyDialogProps<TEmergencyDefaultValues>) => {
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
    const [operationTime, setOperationTime] = useState<string | null>(null);
    const { onSuccess, onFail, onResultCode, onRequired } = useNotification();

    const { handleSubmit, register, getValues, setValue, watch } = useForm({
    defaultValues,
    });

    const onSubmit = (data: TEmergencyDefaultValues) => {
        const {
            name, accident_date, accident_time, arrival_time, visitMethod, visitReason,
            symptom, etc_symptom, damage,
            intentional, disease, antibiotics, GCS, MOTOR, PUPIL, NRS, PQRST, KTAS, Diagnostic,history,
            reasons, primary_first_aid, instructions, observations, affiliated_organization, qualification_license,  medical_history
        } = data;

        const request = {
            user_id,
            patient_id: patientInfo.patient_id,
            emergency_survey: {
                emergency_information: { visitReason, accident_date, accident_time, arrival_time, visitMethod },
                emergency_paicientInfo: { symptom, etc_symptom, damage, intentional, disease,  history,  antibiotics, GCS,
                    MOTOR, PUPIL, NRS, PQRST,KTAS, Diagnostic},
                emergency_contents: { reasons, primary_first_aid, instructions, observations, affiliated_organization, qualification_license, name, medical_history },
            }
        }

        updateEmergency(request)
        .then(({ data: { rc } }) => {
        if (rc !== 1) return onResultCode(rc);

        onUpdateIsSave(true);
        onSuccess('응급 기록지 저장에 성공하였습니다.');
        })
        .catch(e => onFail('응급 기록지 저장에 실패하였습니다.', e));
    };

    const formProps = { disabled, watch, register, getValues, setValue, onSuccess, onRequired };

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
                    응급 기록지 <br/> - 현재 테스트 중입니다. -
                </Typography>
                <CommonPatientInfo patientInfo={patientInfo} nurseName={nurseName}  />
                <EmergencyRecord {...formProps} />
                <NewInfo {...formProps} time={operationTime} setTime={setOperationTime} />
                <PatientStatus {...formProps} />
                <EmergencyResult {...formProps}/>
                <CheckDisease {...formProps} />
            </Grid>
        </MuiDialog.SurveyForm>  
    );
}

export default Emergency;