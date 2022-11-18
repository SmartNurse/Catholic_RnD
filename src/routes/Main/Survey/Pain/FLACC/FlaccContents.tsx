import { useState } from "react";
import { Box, Grid, Typography, RadioGroup, Radio } from "@mui/material";
import { StyledFormControlLabel } from "routes/Main/style";
import GridItem from "../../components/GridItem";

import { Ti18nId } from 'hooks/useI18n';
import { IFormValues, IFormWatch } from 'routes/Main/type';
import { IFLACC } from "apis/survey/type";
// import { formatStringToDate } from "utils/formatting";

interface Props extends IFormValues, IFormWatch {
    disabled?: boolean;
    onRequired: (id: Ti18nId) => void;
    onSuccess: (message: string) => void;
}

const FlaccContents = (props: Props) => {
    const { disabled, watch, setValue, onRequired, onSuccess } = props;
    const flaccList: IFLACC[] = watch('flacc');

    const [sumValue, setSumValue] = useState(0);
    const [isChecked, setIsChecked] = useState([-1, -1, -1, -1, -1]);
    
    const onChange = (e: React.ChangeEvent<HTMLInputElement>, v: string) => {
        const index = Number(e.target.name);
        const value = Number(e.target.value);

        console.log(value);

        if (isChecked[index] === -1) setSumValue(sumValue + value);
        else setSumValue(sumValue - isChecked[index] + value);

        const newIsChecked = [...isChecked];
        newIsChecked[index] = value;
        setIsChecked(newIsChecked);
    }

    return (
        <>
            <Box sx={{ width: "850px", margin: "0 auto" }}>
                <Grid container spacing={1}>
                <GridItem bgColor="#0000001F" text=""/>
                    <GridItem bgColor="#0000001F" text="0"/>
                    <GridItem bgColor="#0000001F" text="1"/>
                    <GridItem bgColor="#0000001F" text="2"/>

                    <GridItem bgColor="#0000001F" text="얼굴 (face)"/>
                    <RadioGroup name={"0"} row sx={{ width: "75%", display: "flex", justifyContent: "space-around" }} onChange={onChange}>
                        <StyledFormControlLabel value={0} label={"특별한 표정 없음 또는 미소"} control={<Radio />} />
                        <StyledFormControlLabel value={1} label={"때때로 찡그린 얼굴 또는 찌푸림, 물러남, 무관시함"} control={<Radio />} />
                        <StyledFormControlLabel value={2} label={"자주 지속되는 찌푸림, 꽉 다문 턱, 아래턱 떨림"} control={<Radio />} />
                    </RadioGroup>

                    <GridItem bgColor="#0000001F" text="다리 (legs)"/>
                    <RadioGroup name={"1"} row sx={{ width: "75%", display: "flex", justifyContent: "space-around" }} onChange={onChange}>
                        <StyledFormControlLabel value={0} label={"정상적 자세 또는 이완됨"} control={<Radio />} />
                        <StyledFormControlLabel value={1} label={"불안함, 침착하지 못함, 긴장"} control={<Radio />} />
                        <StyledFormControlLabel value={2} label={"발을 치거나 다리를 들어 올림"} control={<Radio />} />
                    </RadioGroup>


                    <GridItem bgColor="#0000001F" text="활동 (acitivity))"/>
                    <RadioGroup name={"2"} row sx={{ width: "75%", display: "flex", justifyContent: "space-around" }} onChange={onChange}>
                        <StyledFormControlLabel value={0} label={"조용히 눕기, 정상적인 자세, 쉽게 움직임"} control={<Radio />} />
                        <StyledFormControlLabel value={1} label={"몸부림침, 몸을 앞뒤로 뒤척거림 긴장"} control={<Radio />} />
                        <StyledFormControlLabel value={2} label={"아치형으로 됨,굳음 또는 경련"} control={<Radio />} />
                    </RadioGroup>

                    <GridItem bgColor="#0000001F" text="울음 (cry)"/>
                    <RadioGroup name={"3"} row sx={{ width: "75%", display: "flex", justifyContent: "space-around" }} onChange={onChange}>
                        <StyledFormControlLabel value={0} label={"울음 없음 (깨거나 잠)"} control={<Radio />} />
                        <StyledFormControlLabel value={1} label={"신음소리 또는 끙끙거리는 소리, 때때로 불평함"} control={<Radio />} />
                        <StyledFormControlLabel value={2} label={"꾸준한 울음, 비명 또는 흐느낌, 잦은 불평"} control={<Radio />} />
                    </RadioGroup>


                    <GridItem bgColor="#0000001F" text="진정 (consolability)"/>
                    <RadioGroup name={"4"} row sx={{ width: "75%", display: "flex", justifyContent: "space-around" }} onChange={onChange}>
                        <StyledFormControlLabel value={0} label={"만족, 이완 됨"} control={<Radio />} />
                        <StyledFormControlLabel value={1} label={"때때로 접촉, 안김, 말 걸기, 안심 됨"} control={<Radio />} />
                        <StyledFormControlLabel value={2} label={"진정되거나 안위가 어려움"} control={<Radio />} />
                    </RadioGroup>
                </Grid>
                <Grid item xs={12}>
                    <Box display={'flex'} flexDirection={'column'} alignItems={'flex-end'} sx={{ marginTop: "20px" }}>
                        <Typography
                            gutterBottom
                            minWidth={115}
                            fontWeight={700}
                            variant="subtitle1"
                        >
                            합계: {sumValue}점
                        </Typography>
                        <Typography minWidth={115} color="#2264A8" variant="caption">
                            <Typography variant="inherit">
                            <Box component={'strong'} mr={0.5}>
                                0점:
                            </Box>
                            통증없음
                            </Typography>
                            <Typography variant="inherit">
                            <Box component={'strong'} mr={0.5}>
                                1~3점:
                            </Box>
                            약간 불편함
                            </Typography>
                            <Typography variant="inherit">
                            <Box component={'strong'} mr={0.5}>
                                4~6점:
                            </Box>
                            중간정도 불편함
                            </Typography>
                            <Typography variant="inherit">
                            <Box component={'strong'} mr={0.5}>
                                7~10점:
                            </Box>
                            매우 불편하고 아픈상태
                            </Typography>
                        </Typography>
                    </Box>
                </Grid>
            </Box>
        </>
    );
}

export default FlaccContents;