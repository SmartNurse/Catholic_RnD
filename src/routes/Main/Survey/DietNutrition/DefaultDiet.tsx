import { Grid, Box } from "@mui/material";

import Form from "components/Form";
import { IFormRegister, IFormValues } from "routes/Main/type";

import SectionTitle from "../components/SectionTitle";

interface Props extends IFormRegister, IFormValues {
    disabled?: boolean;
    dietList: string[];
    setDietList: (dietList: string[]) => void;
}

const checks = [
    {
        label: "NPO",
        key: "default_diet.checked1",
    },
    {
        label: "SOW",
        key: "default_diet.checked2",
    },
    {
        label: "AQ",
        key: "default_diet.checked3",
    },
    {
        label :"LD",
        key: "default_diet.checked4",
    },
    {
        label: "SD",
        key: "default_diet.checked5",
    },
    {
        label: "SBD",
        key: "default_diet.checked6",
    },
    {
        label: "RD",
        key: "default_diet.checked7",
    },
    {
        label: "TD",
        key: "default_diet.checked8",
    },
    {
        label: "치료식",
        key: "default_diet.checked9",
    },
    {
        label: "소아",
        key: "default_diet.checked10",
    },
];

const DefaultDiet = (props: Props) => {
    const { disabled, register, getValues, setValue, dietList, setDietList } = props;

    return (
        <>
            <SectionTitle title="기본 식사" />
            <Box sx={{ width: "90%", margin: "48px auto 0px auto" }}>
                <Grid container xs={12}>
                    {checks.map((v, i) => 
                        <Grid item xs={2.4}>
                            <Form.MuiCheckbox
                                label={v.label}
                                disabled={disabled}
                                defaultValue={Boolean(getValues(v.key)) ? [v.label] : []}
                                onChange={(_, checked) => {
                                    setValue(v.key, checked);
                                    if (checked) setDietList([...dietList, v.label]);
                                    else setDietList([...dietList.filter((value) => value !== v.label)]);
                                }}
                            />
                        </Grid>              
                    )}
                </Grid>
            </Box>
        </>
    );
}

export default DefaultDiet;