import { useForm } from "react-hook-form";

import useSurvey from "store/survey/useSurvey";
import useNotification from 'hooks/useNotification';

import { Typography} from '@mui/material';
import MuiDialog from "components/MuiDialog";

import CommonPatientInfo from "../../components/CommonPatientInfo";
import NrsContents from "./NrsContents";

import { SurveyDialogProps, TNRSDefaultValues } from "../../type";
import { INRS } from "apis/survey/type";
import { updateNRS } from "apis/survey";

const NRS = (props: SurveyDialogProps<TNRSDefaultValues>) => {
    const {
        title,
        isOpen,
        disabled,
        defaultValues,
        patientInfo,
        nurseName,
        user_id,
        onClose
    } = props;

    const { onUpdateIsSave } = useSurvey();
    const { onSuccess, onFail, onResultCode, onRequired } = useNotification();
    const { handleSubmit, watch, getValues, setValue } = useForm({
        defaultValues,
    });

    const onSubmit = (data: TNRSDefaultValues) => {
        const { nrs_survey } = data;

        const request = {
          user_id,
          patient_id: patientInfo.patient_id,
          nrs_survey: nrs_survey?.map(
            ({ time, pain_score }: INRS) => ({ time, pain_score })
          )
        }
  
        updateNRS(request)
        .then(({ data: { rc } }) => {
          if (rc !== 1) return onResultCode(rc);
  
          onUpdateIsSave(true);
          onSuccess('NRS 저장에 성공하였습니다.');
        })
        .catch(e => onFail('NRS 저장에 실패하였습니다.', e));
    }

    const formProps = {
        disabled,
        watch,
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
            <Typography fontSize={16} fontWeight="bold" align="center" sx={{ marginTop: "12px", marginBottom: "40px" }}>
                NRS
                <br/>
                PAIN SCORE 0-10 NUMERICAL RATING
                <br/>
                - TEST 중입니다 -
            </Typography>
            <CommonPatientInfo patientInfo={patientInfo} nurseName={nurseName} />
            <NrsContents {...formProps} />
        </MuiDialog.SurveyForm>
    );
}

export default NRS;