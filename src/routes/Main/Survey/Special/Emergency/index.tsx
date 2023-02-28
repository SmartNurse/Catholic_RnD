
import { useEffect, useState } from "react";

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

import PatientInfo from "./PatientInfo";
import TextAreaSection from "../../components/TextAreaSection";
import RowContainer from '../../components/RowContainer';
import RowContent from '../../components/RowContent';
import Form from 'components/Form';

const Emergency = (props: SurveyDialogProps<TEmergencyDefaultValues>) => {
    const {
        title,
        isOpen,
        disabled,
        defaultValues,
        user_id,
        patientInfo,
        onClose,
    } = props;

    const { onUpdateIsSave } = useSurvey();
    const { onSuccess, onFail, onResultCode, onRequired } = useNotification();

    const { handleSubmit, register, getValues, setValue, watch } = useForm({
    defaultValues,
    });

    const onSubmit = (data: TEmergencyDefaultValues) => {
        const {
            accident_type, registration_number, address, classification, accident_location, accident_date, accident_time, arrival_date, arrival_time,
            reasons, primary_first_aid, instructions, observations, affiliated_organization, qualification_license, name, phone_number, medical_history
        } = data;

        const request = {
            user_id,
            patient_id: patientInfo.patient_id,
            emergency_survey: {
                emergency_information: { accident_type, registration_number, address, classification, accident_location, accident_date, accident_time, arrival_date, arrival_time },
                emergency_contents: { reasons, primary_first_aid, instructions, observations, affiliated_organization, qualification_license, name, phone_number, medical_history },
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
                응급 기록지
            </Typography>
            <PatientInfo {...formProps} patientInfo={patientInfo} />
            <TextAreaSection {...formProps} title="환자 발생 사유" registerId="reasons" required={false} />
            <TextAreaSection {...formProps} title="주요 응급 처치" registerId="primary_first_aid" required={false} />
            <TextAreaSection {...formProps} title="의사 지시 내용" registerId="insturctions" required={false} />
            <TextAreaSection {...formProps} title="응급처치 의료종사자 소견" registerId="observations" required={false} />
            <RowContainer xs={12}>
                <RowContent title="소속기관명" titleRatio={1} childrenRatio={2}>
                    <Form.MuiTextField {...register("affiliated_organization")} required={false} disabled={disabled}/>
                </RowContent>
                <RowContent title="자격면허종류" titleRatio={1} childrenRatio={2}>
                    <Form.MuiTextField {...register("qualification_license")} required={false} disabled={disabled} />
                </RowContent>
                <RowContent title="성명" titleRatio={1} childrenRatio={2}>
                    <Form.MuiTextField {...register("name")} required={false} disabled={disabled} />
                </RowContent>
                <RowContent title="전화번호" titleRatio={1} childrenRatio={2}>
                    <Form.MuiTextField {...register("phone_number")} required={false} disabled={disabled} />
                </RowContent>
            </RowContainer>
            <TextAreaSection {...formProps} title="환자 인수 병원 기록" registerId="medical_history" required={false}/>
        </Grid>
      </MuiDialog.SurveyForm>  
    );
}

export default Emergency;