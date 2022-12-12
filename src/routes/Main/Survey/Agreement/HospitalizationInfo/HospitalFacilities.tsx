import { Grid, Box } from "@mui/material";

import Form from "components/Form";
import { IFormRegister, IFormValues } from "routes/Main/type";

import SectionTitle from "../../components/SectionTitle";

interface Props extends IFormRegister, IFormValues {
    disabled?: boolean;
}

const checks = [
    {
        label: "휴게실",
        key: "hospital_facilities.checked1",
    },
    {
        label: "배선실",
        key: "hospital_facilities.checked2",
    },
    {
        label: "샤워실",
        key: "hospital_facilities.checked3",
    },
    {
        label :"은행",
        key: "hospital_facilities.checked4",
    },
    {
        label: "식당/편의점",
        key: "hospital_facilities.checked5",
    },
    {
        label: "환자 및 보호자 식사",
        key: "hospital_facilities.checked6",
    },
    {
        label: "보호자 면회 및 시간",
        key: "hospital_facilities.checked7",
    },
    {
        label: "낙상 방지",
        key: "hospital_facilities.checked8",
    },
    {
        label: "귀중품 관리 및 도난 방지",
        key: "hospital_facilities.checked9",
    },
    {
        label: "원내 금연",
        key: "hospital_facilities.checked10",
    },
    {
        label: "가스, 전열기구 사용금지",
        key: "hospital_facilities.checked11",
    },
    {
        label: "화재, 비상시 대피방법",
        key: "hospital_facilities.checked12",
    },
    {
        label: "감염성폐기물 분리수거",
        key: "hospital_facilities.checked13",
    },
    {
        label: "진단서 발급",
        key: "hospital_facilities.checked14",
    },
    {
        label: "회진 시간",
        key: "hospital_facilities.checked15",
    },
    {
        label: "입원생활 안내문 제공",
        key: "hospital_facilities.checked16",
    },
];

const HospitalFacilities  = (props: Props) => {
    const { disabled, register, getValues, setValue } = props;

    return (
        <>
            <SectionTitle title="병원 시설 안내" />
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

export default HospitalFacilities;