import { Stack, TextField } from '@mui/material';
import Form from '../../../components/Form';
import { FormProps } from '../type';

function FocusDar({ register }: FormProps) {
  return (
    <Stack spacing={2}>
      <Form.Item label="포커스 Focus">
        <TextField
          required
          fullWidth
          multiline
          rows={2}
          size="small"
          variant="outlined"
          {...register('focus')}
        />
      </Form.Item>

      <Form.Item label="데이터 Data">
        <TextField
          required
          fullWidth
          multiline
          rows={4}
          size="small"
          variant="outlined"
          {...register('data')}
        />
      </Form.Item>

      <Form.Item label="활동 Action">
        <TextField
          required
          fullWidth
          multiline
          rows={3}
          size="small"
          variant="outlined"
          {...register('action')}
        />
      </Form.Item>

      <Form.Item label="반응 Response">
        <TextField
          required
          fullWidth
          multiline
          rows={5}
          size="small"
          variant="outlined"
          {...register('response')}
        />
      </Form.Item>
    </Stack>
  );
}

export default FocusDar;
