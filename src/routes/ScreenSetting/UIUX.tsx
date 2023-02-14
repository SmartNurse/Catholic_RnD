import { Button, Stack, Typography } from '@mui/material';

import { ReactComponent as Bestcare } from "assets/emr1.svg";
import Nu from "assets/emr2.svg";

const UIUX = () => {
  return (
    <Stack spacing={5}>
        <Stack spacing={1}>
            <Bestcare />
            <Typography>서울대병원, 길병원, 충북대병원, 제주대병원, 이화의료원, 근로복지공단, 국립대병원계, 동산병원 등</Typography>
        </Stack>
        <Stack spacing={1}>
            <img src={Nu} style={{ width: "73px", height: "34px" }} />
            <Typography>가톨릭의료원 계열, 경희의료 중앙대의료원, 양지병원 등</Typography>
        </Stack>
        <Stack spacing={1}>
            <Typography>u-Severance 3.0</Typography>
            <Typography>연세의료원</Typography>
        </Stack>
        <Stack spacing={1}>
            <Typography>삼성SDS 다윈</Typography>
            <Typography>삼성서울병원</Typography>
        </Stack>
        <Stack spacing={1}>
            <Typography>AMIS 3.0</Typography>
            <Typography>서울아산병원</Typography>
        </Stack>
        <Stack spacing={1}>
            <Typography>RefoMAX</Typography>
            <Typography>한림대의료원</Typography>
        </Stack>
    </Stack>
  );
}

export default UIUX;
