import MuiDialog from "components/MuiDialog";
import { Box, Typography, Grid } from "@mui/material";
import { SurveyDialogProps, TFLACCDefaultValues } from "../../type";
import GridItem from "../../components/GridItem";
import GridItems from "../../components/GridItems";

const FLACC = (props: SurveyDialogProps<TFLACCDefaultValues>) => {
    const {
        title,
        isOpen,
        disabled,
        defaultValues,
        user_id,
        patientInfo,
        onClose
    } = props;

    return (
        <MuiDialog.SurveyForm
            title={title}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={undefined}
            update_at={defaultValues?.update_at}
        >
            <Typography fontSize={16} fontWeight="bold" align="center" sx={{ marginTop: "12px", marginBottom: "40px" }}>FLACC Scale (테스트 중)</Typography>
            <Box sx={{ width: "850px", margin: "0 auto" }}>
                <Grid container spacing={1}>

                    <GridItem bgColor="#0000001F" text=""/>
                    <GridItem bgColor="#0000001F" text="0"/>
                    <GridItem bgColor="#0000001F" text="1"/>
                    <GridItem bgColor="#0000001F" text="2"/>
                    
                    <GridItem bgColor="#0000001F" text="얼굴 (face)"/>
                    <GridItems id="face" first="특별한 표정 없음 또는 미소" second="때때로 찡그린 얼굴 또는 찌푸림, 물러남, 무관시함" third="자주 지속되는 찌푸림, 꽉 다문 턱, 아래턱 떨림" />

                    <GridItem bgColor="#0000001F" text="다리 (legs)"/>
                    <GridItems id="legs" first="정상적 자세 또는 이완됨" second="불안함, 침착하지 못함, 긴장" third="발을 치거나 다리를 들어 올림" />

                    <GridItem bgColor="#0000001F" text="활동 (activity)"/>
                    <GridItems id="activity" first="조용히 눕기, 정상적인 자세, 쉽게 움직임" second="몸부림침, 몸을 앞뒤로 뒤척거림 긴장" third="아치형으로 됨,굳음 또는 경련" />

                    <GridItem bgColor="#0000001F" text="울음 (cry)"/>
                    <GridItems id="cry" first="울음 없음 (깨거나 잠)" second="신음소리 또는 끙끙거리는 소리, 때때로 불평함" third="꾸준한 울음, 비명 또는 흐느낌, 잦은 불평" />

                    <GridItem bgColor="#0000001F" text="진정 (consolability)"/>
                    <GridItems id="consolability" first="만족, 이완 됨" second="때때로 접촉, 안김, 말 걸기, 안심 됨" third="진정되거나 안위가 어려움" />
                </Grid>
            </Box>
        </MuiDialog.SurveyForm>
    );
}

export default FLACC;