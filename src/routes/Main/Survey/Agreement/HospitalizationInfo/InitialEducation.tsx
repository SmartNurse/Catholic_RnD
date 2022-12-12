import { Grid, Box } from "@mui/material";

import Form from "components/Form";
import { IFormRegister, IFormValues } from "routes/Main/type";

import SectionTitle from "../../components/SectionTitle";

interface Props extends IFormRegister, IFormValues {
    disabled?: boolean;
}

const checks = [
    {
        label: "입원 시 준비물품",
        key: "initial_education.checked1",
    },
];

const InitialEducation = (props: Props) => {
    const { disabled, register, getValues, setValue } = props;

    return (
        <>
            <SectionTitle title="입원 시 간호 및 교육 내용" />
            <Box sx={{ width: "98%", margin: "48px auto 24px auto" }}>
                <Grid container xs={12}>
                    {checks.map((v, i) => 
                        <Grid item xs={3}>
                            <Form.MuiCheckbox
                                label={v.label}
                                disabled={disabled}
                                defaultValue={Boolean(getValues(v.key)) ? [v.label] : []}
                                onChange={(_, checked) => {
                                    setValue(v.key, checked);
                                }}
                            />
                        </Grid>              
                    )}
                </Grid>
            </Box>
        </>
    );
}

export default InitialEducation;