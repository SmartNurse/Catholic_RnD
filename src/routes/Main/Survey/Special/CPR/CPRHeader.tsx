import { useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import { Box, Stack, Typography } from '@mui/material';
import Form from 'components/Form';
import { MobileTimePicker } from '@mui/x-date-pickers';
import { AccessTime } from '@mui/icons-material';
import { IFormRegister } from 'routes/Main/type';

interface Props extends IFormRegister {
  disabled?: boolean;
}

const CPRHeader = (props: Props) => {
  const { disabled, register } = props;
  const [checkTime, setCheckTime] = useState(null);
  return (
    <>
      <SectionTitle title="CPR 기록지" mt={3} />
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        sx={{ padding: '50px 0 30px 30px' }}
      >
        <Stack direction="row">
          <Typography
            sx={{
              whiteSpace: 'nowrap',
              lineHeight: '38px',
              marginRight: '50px',
              fontSize: '14px',
            }}
          >
            심정지 발견
          </Typography>
          <Form.MuiTextField
            type="date"
            disabled={disabled}
            sx={{ marginRight: '20px' }}
            {...register('zz')}
          />
          <MobileTimePicker
            value={checkTime}
            onChange={setCheckTime}
            renderInput={params => (
              <Form.MuiTextField
                {...params}
                required={false}
                placeholder="00:00 pm"
                InputProps={{ endAdornment: <AccessTime /> }}
              />
            )}
          />
        </Stack>
        <Stack direction="row" marginRight="20px">
          <Typography
            sx={{
              whiteSpace: 'nowrap',
              lineHeight: '38px',
              marginRight: '50px',
              fontSize: '14px',
            }}
          >
            소생술 종료사유
          </Typography>
          <Form.MuiTextField
            disabled={disabled}
            // sx={{ marginRight: '20px' }}
            {...register('zz')}
          />
        </Stack>
      </Box>
    </>
  );
};

export default CPRHeader;
