import { Box, Typography } from "@mui/material";

import Form from "components/Form";
import { IFormRegister, IFormValues } from "routes/Main/type";

import SectionTitle from "../components/SectionTitle";

interface Props extends IFormRegister, IFormValues {
    disabled?: boolean;
    dietList: string[];
    setDietList: (dietList: string[]) => void;
}

const stomachChecks = [
    { label: "위 절제 밥", key: "treatment.stomach.checked1" },
    { label: "위 절제 죽", key: "treatment.stomach.checked2" },
    { label: "저 섬유 밥", key: "treatment.stomach.checked3" },
    { label: "저 섬유 죽", key: "treatment.stomach.checked4" },
    { label: "저 잔사 밥", key: "treatment.stomach.checked5" },
    { label: "위 절제 미음", key: "treatment.stomach.checked6" },
    { label: "저 잔사 미음", key: "treatment.stomach.checked7" },
    { label: "비만 수술 후 식사 (맑은 유동식)", key: "treatment.stomach.checked8" },
    { label: "비만 수술 후 식사 (일반 유동식)", key: "treatment.stomach.checked9" },
];

const kidneyChecks = [
    { label: "신부전 밥", key: "treatment.kidney.checked1" },
    { label: "신부전 죽", key: "treatment.kidney.checked2" },
    { label: "신증후군 밥", key: "treatment.kidney.checked3" },
    { label: "신증후군 죽", key: "treatment.kidney.checked4" },
    { label: "당뇨신증 밥", key: "treatment.kidney.checked5" },
    { label: "당뇨신증 죽", key: "treatment.kidney.checked6" },
    { label: "혈액투석식 밥", key: "treatment.kidney.checked7" },
    { label: "혈액투석식 죽", key: "treatment.kidney.checked8" },
    { label: "복막투석식 밥", key: "treatment.kidney.checked9" },
    { label: "복막투석식 죽", key: "treatment.kidney.checked10" },
    { label: "신장이식 후 밥", key: "treatment.kidney.checked11" },
    { label: "신장이식 후 죽", key: "treatment.kidney.checked12" },
    { label: "신부전 당뇨 밥", key: "treatment.kidney.checked13" },
    { label: "신부전 당뇨 죽", key: "treatment.kidney.checked14" },
];

const liverChecks = [
    { label: "중단백 간질환 밥", key: "treatment.liver.checked1" },
    { label: "중단백 간질환 죽", key: "treatment.liver.checked2" },
    { label: "저단백 간질환 밥", key: "treatment.liver.checked3" },
    { label: "저단백 간질환 죽", key: "treatment.liver.checked4" },
    { label: "중단백 간질환당뇨 밥", key: "treatment.liver.checked5" },
    { label: "중단백 간질환당뇨 죽", key: "treatment.liver.checked6" },
    { label: "저단백 간질환당뇨 밥", key: "treatment.liver.checked7" },
    { label: "저단백 간질환당뇨 죽", key: "treatment.liver.checked8" },
    { label: "고단백 고열량 간질환 밥", key: "treatment.liver.checked9" },
    { label: "고단백 고열량 간질환 죽", key: "treatment.liver.checked10" },
    { label: "고단백 고열량 간질환 당뇨 밥", key: "treatment.liver.checked11" },
    { label: "고단백 고열량 간질환 당뇨 죽", key: "treatment.liver.checked12" },
];

const Treatment = (props: Props) => {
    const { disabled, register, getValues, setValue, dietList, setDietList } = props;

    return (
        <>
            <SectionTitle title="치료식" />
            <Box sx={{ width: "90%", margin: "48px auto 0px auto", display: "flex", justifyContent: "space-between" }}>
                <Box sx={{ width: "30%" }}>
                    <Typography
                        sx={{ fontWeight: "500", fontSize: "16px", lineHeight: "24px", marginBottom: "8px", marginLeft: "24px" }}
                    >
                        장 질환 식사
                    </Typography>
                    <Box
                        sx={{ height: "500px", display: "flex", flexDirection: "column", borderTop: "1px solid #00000080", borderBottom: "1px solid #00000080", paddingTop: "8px" }}
                    >
                        {stomachChecks.map((v, i) => 
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
                        )}
                    </Box>
                </Box>
                <Box sx={{ width: "30%" }}>
                    <Typography
                        sx={{ fontWeight: "500", fontSize: "16px", lineHeight: "24px", marginBottom: "8px", marginLeft: "24px" }}
                    >
                        신장 질환 식사
                    </Typography>
                    <Box 
                        sx={{ width: "100%", height: "500px", display: "flex", borderTop: "1px solid #00000080", borderBottom: "1px solid #00000080", paddingTop: "8px" }}
                    >
                        <Box
                            sx={{ display: "flex", flexDirection: "column", marginRight: "48px" }}
                        >
                            {kidneyChecks.slice(0, 10).map((v, i) => 
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
                            )}
                        </Box>
                        <Box
                            sx={{ display: "flex", flexDirection: "column" }}
                        >
                            {kidneyChecks.slice(10, 14).map((v, i) => 
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
                            )}
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ width: "30%" }}>
                    <Typography
                        sx={{ fontWeight: "500", fontSize: "16px", lineHeight: "24px", marginBottom: "8px", marginLeft: "24px" }}
                    >
                        간 질환 식사
                    </Typography>
                    <Box
                        sx={{ height: "500px", display: "flex", flexDirection: "column", borderTop: "1px solid #00000080", borderBottom: "1px solid #00000080", paddingTop: "8px" }}
                    >
                        {liverChecks.map((v, i) => 
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
                        )}
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Treatment;