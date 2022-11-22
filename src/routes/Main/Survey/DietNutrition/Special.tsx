import { Box, TextField } from "@mui/material";

import Form from "components/Form";
import { IFormRegister, IFormValues } from "routes/Main/type";

import SectionTitle from "../components/SectionTitle";

interface Props extends IFormRegister, IFormValues {
    disabled?: boolean;
    dietList: string[];
    setDietList: (dietList: string[]) => void;
    setEtc: (etc: string) => void;
}

const checks = [
    { label: "적은밥", key: "default_diet.checked1" },
    { label: "진밥", key: "default_diet.checked2" },
    { label: "된밥", key: "default_diet.checked3" },
    { label: "잡곡밥", key: "default_diet.checked4" },
    { label: "흰 죽", key: "default_diet.checked5" },
    { label: "쌀 미음", key: "default_diet.checked6" },
    { label: "찬 죽", key: "default_diet.checked7" },
    { label: "찬 미음", key: "default_diet.checked8" },
    { label: "국 추가", key: "default_diet.checked9" },
    { label: "국만 맵지 않게", key: "default_diet.checked10" },
    { label: "맵지 않게", key: "default_diet.checked11" },
    { label: "모든 생선 제외", key: "default_diet.checked12" },
    { label: "등푸른 생선 제외", key: "default_diet.checked13" },
    { label: "해물 제외", key: "default_diet.checked14" },
    { label: "계란 제외", key: "default_diet.checked15" },
    { label: "모든 고기 제외", key: "default_diet.checked16" },
    { label: "돼지 고기 제외", key: "default_diet.checked17" },
    { label: "닭 고기 제외", key: "default_diet.checked18" },
    { label: "항상 배추 김치", key: "default_diet.checked19" },
    { label: "물김치", key: "default_diet.checked20" },
    { label: "김치 많이", key: "default_diet.checked21" },
    { label: "물김치 많이", key: "default_diet.checked22" },
    { label: "반찬 많이", key: "default_diet.checked23" },
    { label: "간장 추가", key: "default_diet.checked24" },
    { label: "고추장 추가", key: "default_diet.checked25" },
    { label: "고춧가루 추가", key: "default_diet.checked26" },
    { label: "소금 추가", key: "default_diet.checked27" },
    { label: "설탕 추가", key: "default_diet.checked28" },
    { label: "미역국", key: "default_diet.checked29" },
    { label: "두유", key: "default_diet.checked30" },
    { label: "요구르트", key: "default_diet.checked31" },
    { label: "모든 유제품 제외", key: "default_diet.checked32" },
    { label: "간식 제외", key: "default_diet.checked33" },
    { label: "치아보조 (갈아서)", key: "default_diet.checked34" },
    { label: "치아보조 (다져서)", key: "default_diet.checked35" },
    { label: "서양식", key: "default_diet.checked36" },
    { label: "이슬람 할랄식", key: "default_diet.checked37" },
    { label: "비건식", key: "default_diet.checked38" },
    { label: "기타 (직접 기재)", key: "default_diet.checked39" },
];

const Special = (props: Props) => {
    const { disabled, register, getValues, setValue, dietList, setDietList, setEtc } = props;

    return (
        <>
            <SectionTitle title="특이사항 선택 목록" />
            <Box sx={{ width: "90%", margin: "48px auto 0px auto", display: "flex" }}>
                <Box sx={{ width: "25%", display: "flex", flexDirection: "column" }}>
                    {checks.slice(0, 11).map((v, i) => 
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
                <Box sx={{ width: "25%", display: "flex", flexDirection: "column" }}>
                    {checks.slice(11, 22).map((v, i) => 
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
                <Box sx={{ width: "25%", display: "flex", flexDirection: "column" }}>
                    {checks.slice(22, 33).map((v, i) => 
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
                <Box sx={{ width: "25%", display: "flex", flexDirection: "column" }}>
                    {checks.slice(33, 39).map((v, i) => 
                        <Form.MuiCheckbox
                            label={v.label}
                            disabled={disabled}
                            defaultValue={Boolean(getValues(v.key)) ? [v.label] : []}
                            onChange={(_, checked) => {
                                setValue(v.key, checked);

                                if (v.label !== "기타 (직접 기재)") {
                                    if (checked) setDietList([...dietList, v.label]);
                                    else setDietList([...dietList.filter((value) => value !== v.label)]);    
                                }
                            }}
                        />
                    )}
                    <TextField
                        multiline={true}
                        rows={6}
                        onChange={(e) => setEtc(e.target.value)}
                    />
                </Box>
            </Box>
        </>
    );
}

export default Special;