import { useForm } from "react-hook-form";

import useSurvey from "store/survey/useSurvey";
import useNotification from 'hooks/useNotification';

import { Typography} from '@mui/material';
import MuiDialog from "components/MuiDialog";
import NrsContents from "./NrsContents";

import { SurveyDialogProps, TNRSDefaultValues } from "../../type";

const NRS = (props: SurveyDialogProps<TNRSDefaultValues>) => {
    const {
        title,
        isOpen,
        disabled,
        defaultValues,
        onClose
    } = props;

    const { onUpdateIsSave } = useSurvey();
    const { onSuccess, onFail, onResultCode, onRequired } = useNotification();
    const { handleSubmit, watch, getValues, setValue } = useForm({
        defaultValues,
    });

    const onSubmit = (data: TNRSDefaultValues) => {
        /* API 완성되면 작업할 부분 */
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
            onSubmit={undefined}
            update_at={defaultValues?.update_at}
        >
            <Typography fontSize={16} fontWeight="bold" align="center" sx={{ marginTop: "12px", marginBottom: "40px" }}>NRS (테스트 중)<br/> PAIN SCORE 0-10 NUMERICAL RATING</Typography>
            <NrsContents {...formProps} />
        </MuiDialog.SurveyForm>
    );
}

export default NRS;