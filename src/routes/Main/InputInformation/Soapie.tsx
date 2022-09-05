import { Stack, TextField } from '@mui/material';

import Form from 'components/Form';

import { IFormRegister } from '../type';

function Soapie({ register }: IFormRegister) {
  return (
    <Stack spacing={2}>
      <Form.Item label="주관적 증상 Subjective Data">
        <TextField
          required
          fullWidth
          multiline
          rows={2}
          size="small"
          variant="outlined"
          {...register('subjective')}
        />
      </Form.Item>

      <Form.Item label="객관적 정보 Objective Data">
        <TextField
          required
          fullWidth
          multiline
          rows={2}
          size="small"
          variant="outlined"
          {...register('objective')}
        />
      </Form.Item>

      <Form.Item label="사정 Assessment">
        <TextField
          required
          fullWidth
          multiline
          rows={2}
          size="small"
          variant="outlined"
          {...register('assessment')}
        />
      </Form.Item>

      <Form.Item label="계획 Planning">
        <TextField
          required
          fullWidth
          multiline
          rows={2}
          size="small"
          variant="outlined"
          {...register('planning')}
        />
      </Form.Item>

      <Form.Item label="중재 Interventions">
        <TextField
          required
          fullWidth
          multiline
          rows={2}
          size="small"
          variant="outlined"
          {...register('interventions')}
        />
      </Form.Item>

      <Form.Item label="평가 Evaluation">
        <TextField
          required
          fullWidth
          multiline
          rows={2}
          size="small"
          variant="outlined"
          {...register('evaluation')}
        />
      </Form.Item>
    </Stack>
  );
}

export default Soapie;
