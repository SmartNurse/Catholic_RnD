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
        label: "저칼륨밥",
        key: "controlled.checked1",
    },
    {
        label: "저칼륨죽",
        key: "controlled.checked2",
    },
    {
        label: "저칼슘밥",
        key: "controlled.checked3",
    },
    {
        label: "저칼슘죽",
        key: "controlled.checked4",
    },
    {
        label: "저칼슘미음",
        key: "controlled.checked5",
    },
    {
        label: "",
        key: "",
    },
    {
        label: "저퓨린밥",
        key: "controlled.checked6",
    },
    {
        label: "저퓨린죽",
        key: "controlled.checked7",
    },
    {
        label: "인제한밥",
        key: "controlled.checked8",
    },
    {
        label: "인제한죽",
        key: "controlled.checked9",
    },
    {
        label: "구리제한밥",
        key: "controlled.checked10",
    },
    {
        label: "구리제한죽",
        key: "controlled.checked11",
    },
];

const Controlled = (props: Props) => {
    const { disabled, register, getValues, setValue, dietList, setDietList } = props;

    return (
        <>
            <SectionTitle title="성분조절식" />
            <Box sx={{ width: "90%", margin: "48px auto 0px auto" }}>
                <Grid container xs={12}>
                    {checks.map((v, i) => 
                        <Grid item xs={2}>
                            {v.label !== "" &&
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
                            }
                        </Grid>              
                    )}
                </Grid>
            </Box>
        </>
    );
}

export default Controlled;