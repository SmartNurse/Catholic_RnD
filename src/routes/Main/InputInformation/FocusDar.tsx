import { Stack, TextField } from '@mui/material';

import Form from 'components/Form';

import { IFormRegister } from '../type';

interface Props extends IFormRegister {
  disabled?: boolean;
}

function FocusDar({ register, disabled }: Props) {
  return (
    <Stack spacing={2}>
      <Form.Item label="포커스 Focus">
        <TextField
          fullWidth
          multiline
          minRows={2}
          size="small"
          variant="outlined"
          disabled={disabled}
          {...register('focus')}
        />
      </Form.Item>

      <Form.Item label="데이터 Data">
        <TextField
          fullWidth
          multiline
          minRows={4}
          size="small"
          variant="outlined"
          disabled={disabled}
          {...register('data')}
        />
      </Form.Item>

      <Form.Item label="활동 Action">
        <TextField
          fullWidth
          multiline
          minRows={3}
          size="small"
          variant="outlined"
          disabled={disabled}
          {...register('action')}
        />
      </Form.Item>

      <Form.Item label="반응 Response">
        <TextField
          fullWidth
          multiline
          minRows={5}
          size="small"
          variant="outlined"
          disabled={disabled}
          {...register('response')}
        />
      </Form.Item>
    </Stack>
  );
}

export default FocusDar;
