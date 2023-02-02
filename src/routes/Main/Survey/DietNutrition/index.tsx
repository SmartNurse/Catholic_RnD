import { useEffect, useState } from "react";
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

import { updateDietNutrition } from "apis/survey";

const DietNutrition = (props: SurveyDialogProps<TDietNutritionDefaultValues>) => {
    const { title, isOpen, disabled, defaultValues, user_id, patientInfo, onClose } = props;

    const { onUpdateIsSave } = useSurvey();
    const { onSuccess, onFail, onResultCode } = useNotification();
  
    const { handleSubmit, register, getValues, setValue, watch } = useForm({
      defaultValues,
    });

    const [dietList, setDietList] = useState<string[]>([]);

    const formProps = { disabled, register, getValues, setValue, watch };

    const onSubmit = (data: TDietNutritionDefaultValues) => {
        const { patient_id } = patientInfo;
        const { classification, select_meal, basic_meal, therapuetic_diet, controlled_diet, specifics } = data;
        
        const request = {
            user_id,
            patient_id,
            dietary_survey: {
                birth: JSON.stringify(dietList),
                classification,
                select_meal: JSON.stringify(select_meal),
                basic_meal: JSON.stringify(basic_meal),
                therapuetic_diet: {
                    intestinal: JSON.stringify(therapuetic_diet.intestinal),
                    kidney: JSON.stringify(therapuetic_diet.kidney),
                    liver: JSON.stringify(therapuetic_diet.liver),
                },
                controlled_diet: JSON.stringify(controlled_diet),
                specifics: JSON.stringify(specifics),
            }
        };
    
        updateDietNutrition(request)
          .then(({ data: { rc } }) => {
            if (rc !== 1) return onResultCode(rc);
            onUpdateIsSave(true);
            onSuccess('식이/영양 기록지 저장에 성공하였습니다.');
          })
          .catch(e => onFail('식이/영양 기록지 저장에 실패하였습니다.', e));
    };

    useEffect(() => {
        if (getValues("birth")) setDietList(JSON.parse(getValues("birth")));
    }, []);

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
                sx={{ py: 5, px: 10 }}
            >
                <Typography sx={{ margin: "12px auto", fontWeight: "700", fontSize: "16px", textAlign: "center" }}>
                    식이/영양 기록지
                </Typography>
                <PatientInfo {...formProps} {...patientInfo} />
                <DietResultBox {...formProps} dietList={dietList} />
                <DietSelection {...formProps} />
                <DefaultDiet {...formProps} dietList={dietList} setDietList={setDietList} />
                <Treatment {...formProps} dietList={dietList} setDietList={setDietList} />
                <Controlled {...formProps} dietList={dietList} setDietList={setDietList} />
                <Special {...formProps} dietList={dietList} setDietList={setDietList} />
            </Grid>
        </MuiDialog.SurveyForm>
    );
};

export default DietNutrition;