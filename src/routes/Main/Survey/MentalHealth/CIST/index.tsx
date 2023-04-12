import { useForm } from "react-hook-form";

import useSurvey from "store/survey/useSurvey";
import useNotification from 'hooks/useNotification';

import { Typography, Grid } from "@mui/material";
import MuiDialog from "components/MuiDialog";

import { SurveyDialogProps, TCISTDefaultValues } from "../../type";

import CommonPatientInfo from "../../components/CommonPatientInfo";
import CISTContents from "./CISTContents";

import { updateBAI } from "apis/survey";

const CIST = (props: SurveyDialogProps<TCISTDefaultValues>) => {
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

    const onSubmit = (data: TCISTDefaultValues) => {
        const { patient_id } = patientInfo;
        const { content, sum } = data;
        
        if (content.length < 21) return onRequired('REQUIRED.BAI');
        
        const request = {
            user_id,
            patient_id,
            bai_survey: { content, sum }
        };
    
        updateBAI(request)
        .then(({ data: { rc } }) => {
            if (rc !== 1) return onResultCode(rc);
            onUpdateIsSave(true);
            onSuccess('BAI 저장에 성공하였습니다.');
        })
        .catch(e => onFail('BAI 저장에 실패하였습니다.', e));
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
                <Typography sx={{ margin: "40px auto 0px auto", fontWeight: "700", fontSize: "16px", textAlign: "center" }}>
                    인지선별겸사(CIST, Cognitive Impairment Screening Test)
                        <br/>
                    - 테스트 중입니다 -
                </Typography>
                <CommonPatientInfo patientInfo={patientInfo} nurseName={nurseName} />
                <CISTContents {...formProps} />
            </Grid>
        </MuiDialog.SurveyForm>
    );
}

export default CIST;