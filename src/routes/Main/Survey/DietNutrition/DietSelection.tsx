import { Typography, Box } from "@mui/material";

import Form from "components/Form";
import { IFormRegister, IFormValues } from "routes/Main/type";

import SectionTitle from "../components/SectionTitle";

interface Props extends IFormRegister, IFormValues {
    disabled?: boolean;
    selected: boolean[];
    setSelected: (selected: boolean[]) => void;
    setCalorie: (calorie: string) => void;
}

const checks = [
    { label: "조식", key: "diet_time.checked1" },
    { label: "중식", key: "diet_time.checked2" },
    { label: "석식", key: "diet_time.checked3" },
];

const DietSelection = (props: Props) => {
    const { disabled, register, getValues, setValue, selected, setSelected, setCalorie } = props;

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
                            
                            let newSelected = [...selected];
                            newSelected[i] = checked;
                            setSelected([...newSelected]);
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
                        onChange={e => {
                            setValue("calorie", e.target.value);
                            setCalorie(e.target.value);
                        }}
                        sx={{ width: "100px" }}
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