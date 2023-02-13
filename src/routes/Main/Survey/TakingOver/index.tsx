import { Grid, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

import MuiDialog from 'components/MuiDialog';
import {
    SurveyDialogProps,
    TTakingOverDefaultValues,
  } from 'routes/Main/Survey/type';
import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';

import CommonPatientInfo from '../components/CommonPatientInfo';
import TextareaSection from '../components/TextAreaSection';

import { updateTakingOver } from 'apis/survey';

const TakingOver = (props: SurveyDialogProps<TTakingOverDefaultValues>) => {
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

    const onSubmit = (data: TTakingOverDefaultValues) => {
      const { loc, vital_sign, current_condition, rbfi, reasons, intervention, other } = data;

      const request = {
        user_id,
        patient_id: patientInfo.patient_id,
        take_over_survey: {...data}
      };

      updateTakingOver(request)
      .then(({ data: { rc } }) => {
        if (rc !== 1) return onResultCode(rc);

        onUpdateIsSave(true);
        onSuccess('간호 인수인계 저장에 성공하였습니다.');
      })
      .catch(e => onFail('간호 인수인계 저장에 실패하였습니다.', e));
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
                간호 인수인계
            </Typography>
            <CommonPatientInfo patientInfo={patientInfo} nurseName={nurseName} />
            <TextareaSection {...formProps} title="의식 상태(현재 상태)" registerId="loc" />
            <TextareaSection {...formProps} title="활력 징후(특이 사항)" registerId="vital_sign" />
            <TextareaSection {...formProps} title="현재 상태(수술 후 경과일,치료,현재 통증 상태, 현재 가지고 있는 catheter,약물,치료식이 등)" registerId="current_condition" />
            <TextareaSection {...formProps} title="억제대 적용 유무 / 욕창상태 / 낙상 위험 여부 / 격리 유무" registerId="rbfi" />
            <TextareaSection {...formProps} title="입원 동기 / 과거력 / 동반 질환 / 알레르기" registerId="reasons" />
            <TextareaSection {...formProps} title="간호 중재(시행해야 할 검사,처치,타과 의뢰 등)" registerId="intervention" />
            <TextareaSection {...formProps} title="기타 인계사항" registerId="other" />
        </Grid>
      </MuiDialog.SurveyForm>  
    );
}

export default TakingOver;