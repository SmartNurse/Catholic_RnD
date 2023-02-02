import { useForm } from "react-hook-form";

import useSurvey from "store/survey/useSurvey";
import useNotification from 'hooks/useNotification';

import { Typography, Grid } from "@mui/material";
import MuiDialog from "components/MuiDialog";

import { SurveyDialogProps, TBDIDefaultValues } from "../../type";

import CommonPatientInfo from "../../components/CommonPatientInfo";
import BDIContents from "./BDIContents";

import { updateBDI } from "apis/survey";

const BDI = (props: SurveyDialogProps<TBDIDefaultValues>) => {
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

    const onSubmit = (data: TBDIDefaultValues) => {
        const { patient_id } = patientInfo;
        const { content, sum } = data;
        
        if (content.length < 21) return onRequired('REQUIRED.BAI');
        
        const request = {
            user_id,
            patient_id,
            bdi_survey: { content, sum }
        };
    
        updateBDI(request)
        .then(({ data: { rc } }) => {
            if (rc !== 1) return onResultCode(rc);
            onUpdateIsSave(true);
            onSuccess('BDI 저장에 성공하였습니다.');
          })
        .catch(e => onFail('BDI 저장에 실패하였습니다.', e));
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
                    벡 우울척도 (Beck Depression Inventory; BDI)
                    <Typography sx={{ marginTop: "15px", fontWeight: "400", fontSize: "16px" }}>
                        지난 2주 동안의 당신의 기분과 상태를 생각해 보시고, 이를 가장 잘
                        <br/>
                        설명하는 문장의 번호에 표시해 주십시오.
                    </Typography>
                </Typography>
                <CommonPatientInfo patientInfo={patientInfo} nurseName={nurseName} />
                <BDIContents {...formProps} />
            </Grid>
        </MuiDialog.SurveyForm>
    );
}

export default BDI;