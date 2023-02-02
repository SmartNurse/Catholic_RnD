import { useForm } from "react-hook-form";

import useSurvey from "store/survey/useSurvey";
import useNotification from 'hooks/useNotification';

import { Typography, Grid } from "@mui/material";
import MuiDialog from "components/MuiDialog";

import { SurveyDialogProps, TBAIDefaultValues } from "../../type";

import CommonPatientInfo from "../../components/CommonPatientInfo";
import BAIContents from "./BAIContents";

import { updateBAI } from "apis/survey";

const BAI = (props: SurveyDialogProps<TBAIDefaultValues>) => {
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

    const onSubmit = (data: TBAIDefaultValues) => {
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
                <Typography sx={{ margin: "40px auto 0px auto", fontWeight: "700", fontSize: "20px", textAlign: "center" }}>
                    벡 불안척도 (Beck Anxiety Inventory; BAI)
                    <Typography sx={{ marginTop: "15px", fontWeight: "400", fontSize: "16px" }}>
                        다음의 21문항을 읽으시고 당신의 현재 상태에 해당하는 것을 0~3점
                        <br/>
                        으로 표시해 주십시오. (오늘을 포함하여 지난 한 주간의 경험).
                    </Typography>
                </Typography>
                <CommonPatientInfo patientInfo={patientInfo} nurseName={nurseName} />
                <BAIContents {...formProps} />
            </Grid>
        </MuiDialog.SurveyForm>
    );
}

export default BAI;