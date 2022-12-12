import { Grid, Box } from "@mui/material";

import Form from "components/Form";
import { IFormRegister, IFormValues } from "routes/Main/type";

import SectionTitle from "../../components/SectionTitle";

interface Props extends IFormRegister, IFormValues {
    disabled?: boolean;
}

const checks = [
    {
        label: "침상 난간을 항상 올려주십시오.",
        key: "education_list.checked1",
    },
    {
        label: "환자에게 필요한 물건은 가까이 두며 물건을 잡으려다 균형을 잃지 않도록 합니다.",
        key: "education_list.checked2",
    },
    {
        label: "침상주변을 정리정돈하여 낙상위험 발생요인(물기, 전선, 기구 등)을 제거합니다.",
        key: "education_list.checked3",
    },
    {
        label : "환자 옆에는 보호자가 같이 계셔서 혼자 있지 않도록 합니다.",
        key: "education_list.checked4",
    },
    {
        label: "수면 중 깨어서 화장실을 갈 때는 반드시 보호자의 도움을 받아 침상에서 내려오도록 합니다.",
        key: "education_list.checked5",
    },
    {
        label: "어지러움 증상이 있을 경우 침상에서 갑자기 일어나지 않습니다.",
        key: "education_list.checked6",
    },
    {
        label: "도움이 필요한 경우 호출기를 이용하여 반드시 도움을 요청하시기 바랍니다.",
        key: "education_list.checked7",
    },
    {
        label: "도보나 휠체어로 이동시 문턱 등 바닥의 높낮이가 다를 수 있으므로 주의하셔야 합니다.",
        key: "education_list.checked8",
    },
];

const EducationList
 = (props: Props) => {
    const { disabled, register, getValues, setValue } = props;

    return (
        <>
            <SectionTitle title="낙상 예방교육" />
            <Box sx={{ width: "98%", margin: "48px auto 24px auto" }}>
                <Grid container xs={12}>
                    {checks.map((v, i) => 
                        <Grid item xs={12}>
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

export default EducationList;