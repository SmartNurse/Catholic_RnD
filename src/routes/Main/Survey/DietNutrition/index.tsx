import { useState } from "react";
import { useForm } from "react-hook-form";

import useSurvey from "store/survey/useSurvey";
import useNotification from "hooks/useNotification";

import { SurveyDialogProps, TDietNutritionDefaultValues } from "../type";
import MuiDialog from "components/MuiDialog";

import PatientInfo from "./PatientInfo";
import DietResultBox from "./DietResultBox";
import DietSelection from "./DietSelection";
import DefaultDiet from "./DefaultDiet";
import Treatment from "./Treatment";
import Controlled from "./Controlled";
import Special from "./Special";

import { Grid, Typography } from "@mui/material";

const DietNutrition = (props: SurveyDialogProps<TDietNutritionDefaultValues>) => {
    const { title, isOpen, disabled, defaultValues, user_id, patientInfo, onClose } = props;

    const { onUpdateIsSave } = useSurvey();
    const { onSuccess, onFail, onResultCode } = useNotification();
  
    const { handleSubmit, register, getValues, setValue } = useForm({
      defaultValues,
    });

    const [selected, setSelected] = useState<boolean[]>([false, false, false]);
    const [calorie, setCalorie] = useState<string>("");
    const [dietList, setDietList] = useState<string[]>([]);
    const [etc, setEtc] = useState<string>("");

    const formProps = { disabled, register, getValues, setValue };

    return (
        <MuiDialog.SurveyForm
            title={title}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={undefined /* 저장 기능 업데이트 되면 수정할 부분 */}
            update_at={defaultValues?.update_at}
        >
            <Grid
                container
                wrap="wrap"
                rowSpacing={5}
                columnSpacing={3}
                sx={{ py: 5, px: 10 }}
            >
                <Typography sx={{ margin: "12px auto", fontWeight: "700", fontSize: "16px", textAlign: "center" }}>
                    식이/영양 기록지
                    <br />
                    - TEST 중입니다 -
                </Typography>
                <PatientInfo {...formProps} {...patientInfo} />
                <DietResultBox selected={selected} calorie={calorie} dietList={dietList} etc={etc} />
                <DietSelection {...formProps} selected={selected} setSelected={setSelected} setCalorie={setCalorie} />
                <DefaultDiet {...formProps} dietList={dietList} setDietList={setDietList} />
                <Treatment {...formProps} dietList={dietList} setDietList={setDietList} />
                <Controlled {...formProps} dietList={dietList} setDietList={setDietList} />
                <Special {...formProps} dietList={dietList} setDietList={setDietList} etc={etc} setEtc={setEtc} />
            </Grid>
        </MuiDialog.SurveyForm>
    );
};

export default DietNutrition;