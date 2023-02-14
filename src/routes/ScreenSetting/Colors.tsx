import { Button, Stack, Typography } from '@mui/material';
import { setLocalStorage } from 'utils/storage';
import useNotification from 'hooks/useNotification';

const Colors = () => {
    const { onSuccess } = useNotification();

    const buttons = [
        { param: "GREEN", text: "Standard Version Color", color: "#13AD74" },
        { param: "BLUE", text: "Free Version Color", color: "#2264A8" },
        { param: "RED", text: "Pro+ Version Color", color: "#AD4751" },
        { param: "PURPLE", text: "Global Version Color", color: "#6A3A87" },
        { param: "BLACK", text: "Night Duty Color", color: "#333333" },
    ];

    return (
        <Stack spacing={5}>
            <Typography fontWeight="700" fontSize="14px" lineHeight="17.53px">화면 색상 변경</Typography>
            {buttons.map(({ param, text, color }) => (
                <Stack key={param} spacing={1}>
                    <Typography>{param}</Typography>
                    <Button
                        size="large"
                        variant="contained"
                        sx={{
                            ':hover': {
                                color: `${color}`,
                                backgroundColor: "white",
                                border: `1px solid ${color}`
                            },
                            height: "36px",
                            boxShadow: "0px 8px 8px 0px #0000001F",
                            color: "white",
                            backgroundColor: `${color}`,
                        }}
                        onClick={() => {
                            setLocalStorage("theme_color", param);
                            onSuccess(`화면 색상이 ${param}으로 변경되었습니다`);
                            setTimeout(() => {
                                window.location.replace("/");
                            }, 1000);
                        }}
                    >
                        {text}
                    </Button>
                </Stack>            
            ))}
        </Stack>
    );
}

export default Colors;
