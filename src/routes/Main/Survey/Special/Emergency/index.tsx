
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
                응급 기록지 <br/> - 해당 메뉴 저장은 스탠다드 버전에서 가능합니다 -
            </Typography>
            <PatientInfo {...formProps} patientInfo={patientInfo} />
            <TextAreaSection {...formProps} title="환자 발생 사유" registerId="accident_reason"/>
            <TextAreaSection {...formProps} title="주요 응급 처치" registerId="primary_handling"/>
            <TextAreaSection {...formProps} title="의사 지시 내용" registerId="doctor_instruction"/>
            <TextAreaSection {...formProps} title="응급처치 의료종사자 소견" registerId="handler.opinion"/>
            <RowContainer xs={12}>
                <RowContent title="소속기관명" titleRatio={1} childrenRatio={2}>
                    <Form.MuiTextField {...register("handler.organization")} />
                </RowContent>
                <RowContent title="자격면허종류" titleRatio={1} childrenRatio={2}>
                    <Form.MuiTextField {...register("handler.certificate")} />
                </RowContent>
                <RowContent title="성명" titleRatio={1} childrenRatio={2}>
                    <Form.MuiTextField {...register("handler.name")} />
                </RowContent>
                <RowContent title="전화번호" titleRatio={1} childrenRatio={2}>
                    <Form.MuiTextField {...register("handler.phone")} />
                </RowContent>
            </RowContainer>
            <TextAreaSection {...formProps} title="환자 인수 병원 기록" registerId="hospital_record"/>
        </Grid>
      </MuiDialog.SurveyForm>  
    );
}

export default Emergency;