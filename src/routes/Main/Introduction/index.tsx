import { useState } from "react";

import useStudent from "store/student/useStudent";
import { setCookie } from "utils/cookie";

import { Dialog, Typography, Button, FormControlLabel, Checkbox, Stack, Grid, useTheme } from "@mui/material";

import { ReactComponent as Number01 } from "assets/icon-number-01.svg";
import { ReactComponent as Number02 } from "assets/icon-number-02.svg";
import { ReactComponent as Number03 } from "assets/icon-number-03.svg";
import { ReactComponent as Number04 } from "assets/icon-number-04.svg";
import { ReactComponent as Number05 } from "assets/icon-number-05.svg";

export interface SimpleDialogProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    setShow: (show: boolean) => void;
}

function Introduction(props: SimpleDialogProps) {
    const { palette } = useTheme();
    const { open, setOpen, setShow } = props;
    const { student_name } = useStudent();

    const contents = [
        { title: "Platform", desc1: "SMARTNURSE ENR은 간호대학생과 신규 간호사 선생님들을 위해", desc2: "만들어진 실습용 전자간호기록시스템입니다." },
        { title: "Our Solution", desc1: "그래서 저희 간호정보스타트업 ‘디메인’은 어려움을 겪고 있는 간호사", desc2: "선생님들에게 도움을  드리고자 ’스마트 ENR’을 제작하게 되었습니다." },
        { title: "Background", desc1: "현재 100%의 종합병원에서 EMR(전자의무기록)을 사용하고 있으며,", desc2: "간호사는 간호기록을 하기 위해 근무시간의 35%를 소요한다고 합니다." },
        { title: "Usability", desc1: "‘스마트널스 ENR’은 클라우드형 전자간호기록시스템으로 별도의 설치 없이 PC, Mac,", desc2: "i-Pad, 스마트폰 등 인터넷이 연결된 환경이라면 언제 어디서나 이용 가능합니다" },
        { title: "Current Problem", desc1: "신규간호사 선생님 대부분이 간호기록에 어려움을 호소하고 있습니다.", desc2: "", },
    ];

    const icons = [<Number01 />, <Number04 />, <Number02 />, <Number05 />, <Number03 />];

    /* 다시 보지 않기 체크박스 관련 */
    const [check, setCheck] = useState(false);
    /*************************/
      
    return (
      <Dialog
        sx={{
            "& .MuiDialog-container": {
                "& .MuiPaper-root": {
                    width: "100%",
                    maxWidth: "75%",
                    padding: "50px 100px",
                }
            }
        }}
        onClose={() => setOpen(false)}
        open={open}
    >
        <Stack direction="row">
            <Typography sx={{ color: `${palette.primary.main}`, fontWeight: "700", fontSize: "64px", lineHeight: "80px"}}>{student_name}</Typography>
            <Typography sx={{ fontWeight: "700", fontSize: "64px", lineHeight: "80px" }}>님, 환영합니다</Typography>
        </Stack>
        <Typography sx={{ fontWeight: "700", fontSize: "64px", lineHeight: "80px" }}>SMARTNURSE ENR 입니다.</Typography>
        <Typography sx={{ color: `${palette.primary.main}`, fontWeight: "700", fontSize: "30px", lineHeight: "50px" }}>그럼, 간호기록 연습하러 가보까요?</Typography>
        <Button
            sx={{ width: "187px", height: "48px", color: "white", backgroundColor: `${palette.primary.main}`, marginTop: "15px" }}
            variant="contained"
            onClick={() => {
                setShow(true);
                setOpen(false);
            }}
        >
            ENR 알아보기
        </Button>
        <Grid container columnSpacing={10} rowSpacing={5} marginTop="62px" marginBottom="45px">
            {contents.map(({ title, desc1, desc2 }, idx) => (
                <Grid item xs={6}>
                    <Stack direction="row" spacing={2} alignItems="center" marginBottom="20px">
                        {icons[idx]}
                        <Typography
                            sx={{
                                color: `${palette.primary.main}`,
                                fontWeight: "700",
                                fontSize: "40px",
                                lineHeight: "50px",
                            }}
                        >
                            {title}
                        </Typography>
                    </Stack>
                    <Typography>
                        {desc1}<br/>{desc2}
                    </Typography>
                </Grid>
            ))}
        </Grid>
        <Stack direction="row" spacing={2}>
            <Button
                sx={{ width: "187px", height: "48px", color: `${palette.primary.main}`}}
                variant="outlined"
                onClick={() => {
                    if (check) setCookie("no_intro", "true", 30);
                    setShow(false);
                    setOpen(false);
                }}
            >
                닫기
            </Button>
            <FormControlLabel control={<Checkbox value={check} onChange={(e) => setCheck(e.target.checked)} />} label="다시 보지 않기" />
        </Stack>
      </Dialog>
    );
  }

  export default Introduction;