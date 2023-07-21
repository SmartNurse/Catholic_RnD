import { Stack, TextField } from '@mui/material';

import Form from 'components/Form';

import { IFormRegister } from '../type';

interface Props extends IFormRegister {
  disabled?: boolean;
}

function Soapie({ register, disabled }: Props) {
  return (
    <Stack spacing={2}>
      <Form.Item label="주관적 증상 Subjective Data">
        <TextField
          fullWidth
          multiline
          minRows={2}
          size="small"
          variant="outlined"
          disabled={disabled}
          {...register('subjective')}
        />
      </Form.Item>

      <Form.Item label="객관적 정보 Objective Data">
        <TextField
          fullWidth
          multiline
          minRows={2}
          size="small"
          variant="outlined"
          disabled={disabled}
          {...register('objective')}
        />
      </Form.Item>

      <Form.Item label="사정 Assessment">
        <TextField
          fullWidth
          multiline
          minRows={2}
          size="small"
          variant="outlined"
          disabled={disabled}
          {...register('assessment')}
        />
      </Form.Item>

      <Form.Item label="계획 Planning">
        <TextField
          fullWidth
          multiline
          minRows={2}
          size="small"
          variant="outlined"
          disabled={disabled}
          {...register('planning')}
        />
      </Form.Item>

      <Form.Item label="중재 Interventions">
        <TextField
          fullWidth
          multiline
          minRows={2}
          size="small"
          variant="outlined"
          disabled={disabled}
          {...register('interventions')}
        />
      </Form.Item>

      <Form.Item label="평가 Evaluation">
        <TextField
          fullWidth
          multiline
          minRows={2}
          size="small"
          variant="outlined"
          disabled={disabled}
          {...register('evaluation')}
        />
      </Form.Item>
    </Stack>
  );
}

export default Soapie;
