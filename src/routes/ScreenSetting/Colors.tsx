import { Button, Stack, Typography } from '@mui/material';
import { setLocalStorage } from 'utils/storage';
import useNotification from 'hooks/useNotification';

const Colors = () => {
  const { onSuccess } = useNotification();

  const buttons = [
    { param: 'BLUE', text: 'BLUE', color: '#2264A8' },

    { param: 'GREEN', text: 'ORIGIN', color: '#0C2E86' },
    { param: 'RED', text: 'RED', color: '#AD4751' },
    { param: 'PURPLE', text: 'PURPLE', color: '#6A3A87' },
    { param: 'BLACK', text: 'BLACK', color: '#333333' },
  ];

  return (
    <>
      <Typography fontWeight="700" fontSize="14px" lineHeight="17.53px">
        화면 색상 변경
      </Typography>
      <Stack spacing={5} direction="row">
        {buttons.map(({ param, text, color }) => (
          <Stack key={param} spacing={1}>
            <Button
              size="large"
              variant="contained"
              sx={{
                width: '100px',
                ':hover': {
                  color: `${color}`,
                  backgroundColor: 'white',
                  border: `1px solid ${color}`,
                },
                height: '100px',
                boxShadow: '0px 8px 8px 0px #0000001F',
                color: 'white',
                backgroundColor: `${color}`,
              }}
              onClick={() => {
                setLocalStorage('theme_color', param);
                onSuccess(`화면 색상이 ${param}으로 변경되었습니다`);
                setTimeout(() => {
                  window.location.replace('/');
                }, 1000);
              }}
            >
              {text}
            </Button>
          </Stack>
        ))}
      </Stack>
    </>
  );
};

export default Colors;
