import { Stack, TextField } from '@mui/material';

import Form from 'components/Form';

import { IFormRegister } from '../type';

interface Props extends IFormRegister {
  disabled?: boolean;
}

function Remarks({ register, disabled }: Props) {
  return (
    <Stack spacing={2}>
      <Form.Item label="특기사항기록 CBE - 추후 시스템 업데이트 예정">
        <TextField
          required
          fullWidth
          size="small"
          variant="outlined"
          helperText="*CBE = Charting By Exception"
          disabled={disabled}
          {...register('cbe')}
        />
      </Form.Item>
    </Stack>
  );
}

export default Remarks;
