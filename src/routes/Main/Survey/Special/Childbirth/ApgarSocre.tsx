import { Fragment, useState } from "react";
import { Box, Grid, RadioGroup, Radio, Typography, FormHelperText } from "@mui/material";
import { StyledFormControlLabel } from "routes/Main/style";
import GridItem from "../../components/GridItem";
import SectionTitle from "../../components/SectionTitle";
import Form from 'components/Form';
import RowContainer from "../../components/RowContainer";
import RowContent from "../../components/RowContent";

import { Ti18nId } from 'hooks/useI18n';
import { IFormValues, IFormWatch, IFormRegister } from 'routes/Main/type';

interface Props extends IFormValues, IFormWatch, IFormRegister {
    disabled?: boolean;
    onRequired: (id: Ti18nId) => void;
    onSuccess: (message: string) => void;
}

const radioGroups = [
    { 
        text: "피부색 (Appearance)",
        name: "appearance",
        labels: ["전체적으로 창백함", "사지가 창백하고 몸통은 분홍색", "전신이 분홍색 청색증 없음"],
    },
    { 
        text: "맥박 (Pulse)",
        name: "pulse",
        labels: ["없음", "100 미만", "100 이상"],
    },{ 
        text: "반사 및 과민성 (Grimace)",
        name: "grimace",
        labels: ["자극에 대한 반응이 없음", "자극을 주면 약하게 울거나 찡그림", "자극을 주면 움츠리거나 울음"],
    },
    { 
        text: "근 긴장도 (Activity)",
        name: "activity",
        labels: ["없음", "약간 굽힘", "펴는 힘에 대항하는 굽히는 팔과 다리"],
    },
    { 
        text: "호흡 (Respiration)",
        name: "respiration",
        labels: ["없음", "약하고 불규칙이며 헐떡임", "강한 호흡과 울음"],
    },
];

const ApgarScore = (props: Props) => {
    const { disabled, getValues, setValue, register } = props;

    const [errors, setErrors] = useState({
        one_min: false,
        five_min: false,
    });

    return (
        <>
            <SectionTitle title="APGAR 점수" />
            <Box sx={{ width: "90%", margin: "48px auto 12px auto" }}>
                <Grid container spacing={1}>
                <GridItem bgColor="#0000001F" text=""/>
                    <GridItem bgColor="#0000001F" text="0"/>
                    <GridItem bgColor="#0000001F" text="1"/>
                    <GridItem bgColor="#0000001F" text="2"/>

                    {radioGroups.map(({ text, name, labels }) => (
                        <Fragment key={name}>
                            <GridItem bgColor="#0000001F" text={text}/>
                            <RadioGroup
                                row sx={{ width: "75%", display: "flex", justifyContent: "space-around" }}
                                defaultValue={getValues(`apgar.${name}`)}
                                onChange={(e) => setValue(`apgar.${name}`, e.target.value)}
                            >
                                <StyledFormControlLabel value={1} label={labels[0]} control={<Radio />} />
                                <StyledFormControlLabel value={2} label={labels[1]} control={<Radio />} />
                                <StyledFormControlLabel value={3} label={labels[2]} control={<Radio />} />
                            </RadioGroup>                        
                        </Fragment>
                    ))}
                </Grid>
            </Box>
            <Box sx={{ width: "90%", margin: "0px auto", display: "flex", justifyContent: "flex-end"}}>
                <Box sx={{ width: "40%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Typography fontSize="14px">1분</Typography>
                    <Box>
                        <Form.MuiTextField
                            placeholder="0~10점까지 입력가능"
                            required={false}
                            error={errors.one_min}
                            {...register("newborn_condition.apgar_score1m", {
                                onChange: (e) => {
                                    if (e.target.value < 0 || e.target.value > 10) setErrors({...errors, one_min: true});
                                    else setErrors({...errors, one_min: false});
                                }
                            })}
                        />
                        {errors.one_min ? <FormHelperText error={true}>Apgar 점수는 1 이상 10 이하입니다</FormHelperText> : null}
                    </Box>
                    <Typography fontSize="14px">5분</Typography>
                    <Box>
                        <Form.MuiTextField
                            placeholder="0~10점까지 입력가능"
                            required={false}
                            error={errors.five_min}
                            {...register("newborn_condition.apgar_score5m", {
                                onChange: (e) => {
                                    if (e.target.value < 0 || e.target.value > 10) setErrors({...errors, five_min: true});
                                    else setErrors({...errors, five_min: false});
                                }
                            })}
                        />
                        {errors.five_min ? <FormHelperText error={true}>Apgar 점수는 1 이상 10 이하입니다</FormHelperText> : null}
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default ApgarScore;