import MuiDialog from "components/MuiDialog";
import { Box, Typography, Grid } from "@mui/material";
import { SurveyDialogProps, TFLACCDefaultValues } from "../../type";

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
            <Box sx={{ flexGrow: 1 }}>
                <Grid container columnSpacing={2} sx={{ width: "850px", margin: "0px auto" }}>
                    <Grid item xs={3} sx={{ height: "90px", backgroundColor: "#0000001F", display: "flex", alignItems: "center", justifyContent: "center" }}>

                    </Grid>
                    <Grid item xs={3} sx={{ height: "90px", backgroundColor: "#0000001F", display: "flex", alignItems: "center", justifyContent: "center"  }}>
                        0
                    </Grid>
                    <Grid item xs={3} sx={{ height: "90px", backgroundColor: "#0000001F", display: "flex", alignItems: "center", justifyContent: "center"  }}>
                        1
                    </Grid> 
                    <Grid item xs={3} sx={{ height: "90px", backgroundColor: "#0000001F", display: "flex", alignItems: "center", justifyContent: "center"  }}>
                        2
                    </Grid>
                    
                    <Grid item xs={3} sx={{ height: "90px", backgroundColor: "#0000001F", display: "flex", alignItems: "center", justifyContent: "center"  }}>
                        얼굴 (face)
                    </Grid>
                    <Grid item xs={3}>
                        특별한 표정 없음 또는 미소
                    </Grid>
                    <Grid item xs={3}>
                        때때로 찡그린 얼굴 또는 찌푸림, 물러남, 무관시함
                    </Grid> 
                    <Grid item xs={3}>
                        자주 지속되는 찌푸림, 꽉 다문 턱, 아래턱 떨림
                    </Grid>

                    <Grid item xs={3} sx={{ height: "90px", backgroundColor: "#0000001F", display: "flex", alignItems: "center", justifyContent: "center"  }}>
                        다리 (legs)
                    </Grid>
                    <Grid item xs={3}>
                        정상적 자세 또는 이완됨
                    </Grid>
                    <Grid item xs={3}>
                        불안함, 침착하지 못함, 긴장
                    </Grid> 
                    <Grid item xs={3}>
                        발을 치거나 다리를 들어 올림
                    </Grid>

                    <Grid item xs={3} sx={{ height: "90px", backgroundColor: "#0000001F", display: "flex", alignItems: "center", justifyContent: "center"  }}>
                        활동 (activity)
                    </Grid>
                    <Grid item xs={3}>
                        조용히 눕기, 정상적인 자세, 쉽게 움직임
                    </Grid>
                    <Grid item xs={3}>
                        몸부림침, 몸을 앞뒤로 뒤척거림 긴장
                    </Grid> 
                    <Grid item xs={3}>
                        아치형으로 됨,굳음 또는 경련
                    </Grid>                

                    <Grid item xs={3} sx={{ height: "90px", backgroundColor: "#0000001F", display: "flex", alignItems: "center", justifyContent: "center"  }}>
                        울음 (cry)
                    </Grid>
                    <Grid item xs={3}>
                        울음 없음 (깨거나 잠)
                    </Grid>
                    <Grid item xs={3}>
                        신음소리 또는 끙끙거리는 소리, 때때로 불평함
                    </Grid> 
                    <Grid item xs={3}>
                        꾸준한 울음, 비명 또는 흐느낌, 잦은 불평
                    </Grid>

                    <Grid item xs={3} sx={{ height: "90px", backgroundColor: "#0000001F", display: "flex", alignItems: "center", justifyContent: "center"  }}>
                        진정 (consolability)
                    </Grid>
                    <Grid item xs={3}>
                        만족, 이완 됨
                    </Grid>
                    <Grid item xs={3}>
                        때때로 접촉, 안김, 말 걸기, 안심 됨
                    </Grid> 
                    <Grid item xs={3}>
                        진정되거나 안위가 어려움
                    </Grid>
                </Grid>
            </Box>
        </MuiDialog.SurveyForm>
    );
}

export default FLACC;