import { Typography, Box } from "@mui/material";

import Form from "components/Form";
import { IFormRegister, IFormValues } from "routes/Main/type";

import SectionTitle from "../components/SectionTitle";

interface Props extends IFormRegister, IFormValues {
    disabled?: boolean;
}

const checks = [
    { label: "조식", key: "select_meal.checked1" },
    { label: "중식", key: "select_meal.checked2" },
    { label: "석식", key: "select_meal.checked3" },
];

const DietSelection = (props: Props) => {
    const { disabled, register, getValues, setValue } = props;

    return (
        <>
            <SectionTitle title="식사 선택" />            
            <Box sx={{ width: "90%", margin: "48px auto 0px auto", display: "flex", justifyContent: "space-between"}}>
                <Box sx={{ width: "30%", display: "flex", justifyContent: "space-between" }}>
                {checks.map((v, i) =>
                    <Form.MuiCheckbox
                        label={v.label}
                        disabled={disabled}
                        defaultValue={Boolean(getValues(v.key)) ? [v.label] : []}
                        onChange={(_, checked) => {
                            setValue(v.key, checked);
                        }}
                    />
                )}
                </Box>
                <Box sx={{ width: "30%", display: "flex", alignItems: "center" }}>
                    <Typography sx={{ fontWeight: "400", fontSize: "14px", lineHeight: "24px", paddingRight: "48px" }}>
                        1일 합계 칼로리: 
                    </Typography>
                    <Form.MuiTextField
                        placeholder="직접 입력"
                        {...register("select_meal.calorie")}
                        sx={{ width: "100px" }}
                        required={false}
                    />
                    <Typography sx={{ fontWeight: "400", fontSize: "14px", lineHeight: "24px", paddingLeft: "12px" }}>
                        KCAL/day
                    </Typography>
                </Box>
            </Box> 
        </>
    );
}

export default DietSelection;