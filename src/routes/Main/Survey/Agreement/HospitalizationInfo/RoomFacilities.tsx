import { Grid, Box } from "@mui/material";

import Form from "components/Form";
import { IFormRegister, IFormValues } from "routes/Main/type";

import SectionTitle from "../../components/SectionTitle";

interface Props extends IFormRegister, IFormValues {
    disabled?: boolean;
}

const checks = [
    {
        label: "침대",
        key: "facilities_in.checked1",
    },
    {
        label: "침상식탁",
        key: "facilities_in.checked2",
    },
    {
        label: "침상 등",
        key: "facilities_in.checked3",
    },
    {
        label :"전화",
        key: "facilities_in.checked4",
    },
    {
        label: "TV",
        key: "facilities_in.checked5",
    },
    {
        label: "응급시 호출방법",
        key: "facilities_in.checked6",
    },
    {
        label: "간호사 호출기",
        key: "facilities_in.checked7",
    },
    {
        label: "화장실 비상벨",
        key: "facilities_in.checked8",
    },
];

const RoomFacilities = (props: Props) => {
    const { disabled, register, getValues, setValue } = props;

    return (
        <>
            <SectionTitle title="병원 내 시설 안내" />
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

export default RoomFacilities;