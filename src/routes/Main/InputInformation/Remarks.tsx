import { Stack, TextField } from '@mui/material';
import Form from '../../../components/Form';
import { FormProps } from '../type';

function Remarks({ register }: FormProps) {
  return (
    <Stack spacing={2}>
      <Form.Item label="특기사항기록 CBE - 추후 시스템 업데이트 예정">
        <TextField
          required
          fullWidth
          size="small"
          variant="outlined"
          helperText="*CBE = Charting By Exception"
          {...register('cbe')}
        />
      </Form.Item>
    </Stack>
  );
}

export default Remarks;
