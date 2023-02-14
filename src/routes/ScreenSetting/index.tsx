import { useNavigate } from 'react-router-dom';
import { Box, Container, Button, Stack } from "@mui/material";
import { KeyboardArrowLeft } from '@mui/icons-material';

import Colors from './Colors';
import UIUX from './UIUX';

const ScreenSetting = () => {
    return (
        <Box>
            <Container maxWidth="sm" sx={{ mt: 7.5, mb: 6 }}>
                <Button
                    href="/#/"
                    size="large"
                    color="inherit"
                    startIcon={<KeyboardArrowLeft />}
                    sx={{ mb: 5, p: 0 }}
                >
                    화면 설정
                </Button>
                <Stack spacing={5}>
                    <Colors />
                    <UIUX />
                </Stack>
            </Container>
        </Box>
    );
}

export default ScreenSetting;
