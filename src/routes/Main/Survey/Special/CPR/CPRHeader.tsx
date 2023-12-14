import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import { Box, Stack, Typography } from '@mui/material';
import Form from 'components/Form';
import { MobileTimePicker } from '@mui/x-date-pickers';
import { AccessTime } from '@mui/icons-material';
import { IFormRegister, IFormValues } from 'routes/Main/type';
import { TCPRDefaultValues } from '../../type';

interface Props extends IFormRegister, IFormValues {
  disabled?: boolean;
  cprRecord: TCPRDefaultValues;
  setCprRecord: Dispatch<SetStateAction<TCPRDefaultValues>>;
}

const CPRHeader = (props: Props) => {
  const { disabled, register, getValues, setValue, cprRecord, setCprRecord } =
    props;
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
            // FIXME: 값 안바뀜
            // value={cprRecord.find_date}
            value={getValues('find_date')}
            {...register('find_date')}
            onChange={e =>
              setCprRecord(prev => ({
                ...prev,
                find_date: e.target.value,
              }))
            }
          />
          <MobileTimePicker
            value={getValues('find_time')}
            onChange={value =>
              setCprRecord(prev => ({
                ...prev,
                find_time: value as string,
              }))
            }
            renderInput={params => (
              <Form.MuiTextField
                {...params}
                required={false}
                placeholder="00:00 pm"
                InputProps={{ endAdornment: <AccessTime /> }}
                {...register('find_time')}
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
            value={getValues('terminate_reason')}
            // sx={{ marginRight: '20px' }}
            // FIXME: onchange??
            {...register('terminate_reason')}
          />
        </Stack>
      </Box>
    </>
  );
};

export default CPRHeader;
