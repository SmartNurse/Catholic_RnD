import { useState } from "react";
import { Box, TextField } from "@mui/material";

import Form from "components/Form";
import { IFormRegister, IFormValues, IFormWatch } from "routes/Main/type";

import SectionTitle from "../components/SectionTitle";

interface Props extends IFormRegister, IFormValues, IFormWatch {
    disabled?: boolean;
    dietList: string[];
    setDietList: (dietList: string[]) => void;
}

const checks = [
    { label: "적은밥", key: "specifics.checked1" },
    { label: "진밥", key: "specifics.checked2" },
    { label: "된밥", key: "specifics.checked3" },
    { label: "잡곡밥", key: "specifics.checked4" },
    { label: "흰 죽", key: "specifics.checked5" },
    { label: "쌀 미음", key: "specifics.checked6" },
    { label: "찬 죽", key: "specifics.checked7" },
    { label: "찬 미음", key: "specifics.checked8" },
    { label: "국 추가", key: "specifics.checked9" },
    { label: "국만 맵지 않게", key: "specifics.checked10" },
    { label: "맵지 않게", key: "specifics.checked11" },
    { label: "모든 생선 제외", key: "specifics.checked12" },
    { label: "등푸른 생선 제외", key: "specifics.checked13" },
    { label: "해물 제외", key: "specifics.checked14" },
    { label: "계란 제외", key: "specifics.checked15" },
    { label: "모든 고기 제외", key: "specifics.checked16" },
    { label: "돼지 고기 제외", key: "specifics.checked17" },
    { label: "닭 고기 제외", key: "specifics.checked18" },
    { label: "항상 배추 김치", key: "specifics.checked19" },
    { label: "물김치", key: "specifics.checked20" },
    { label: "김치 많이", key: "specifics.checked21" },
    { label: "물김치 많이", key: "specifics.checked22" },
    { label: "반찬 많이", key: "specifics.checked23" },
    { label: "간장 추가", key: "specifics.checked24" },
    { label: "고추장 추가", key: "specifics.checked25" },
    { label: "고춧가루 추가", key: "specifics.checked26" },
    { label: "소금 추가", key: "specifics.checked27" },
    { label: "설탕 추가", key: "specifics.checked28" },
    { label: "미역국", key: "specifics.checked29" },
    { label: "두유", key: "specifics.checked30" },
    { label: "요구르트", key: "specifics.checked31" },
    { label: "모든 유제품 제외", key: "specifics.checked32" },
    { label: "간식 제외", key: "specifics.checked33" },
    { label: "치아보조 (갈아서)", key: "specifics.checked34" },
    { label: "치아보조 (다져서)", key: "specifics.checked35" },
    { label: "서양식", key: "specifics.checked36" },
    { label: "이슬람 할랄식", key: "specifics.checked37" },
    { label: "비건식", key: "specifics.checked38" },
    { label: "기타 (직접 기재)", key: "specifics.checked39" },
];

const Special = (props: Props) => {
    const { disabled, register, getValues, setValue, dietList, setDietList, watch } = props;

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

                                if (v.label === "기타 (직접 기재)") {
                                    if (!checked) setValue("specifics.placeholder", "");
                                }
                                else {
                                    if (checked) setDietList([...dietList, v.label]);
                                    else setDietList([...dietList.filter((value) => value !== v.label)]);    
                                }
                            }}
                        />
                    )}
                    <TextField
                        {...register("specifics.placeholder")}
                        multiline={true}
                        rows={6}
                        disabled={!watch("specifics.checked39") ? true : false}
                    />
                </Box>
            </Box>
        </>
    );
}

export default Special;