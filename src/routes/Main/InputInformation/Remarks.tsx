import { Stack, TextField } from '@mui/material';

import Form from 'components/Form';

import { IFormRegister } from '../type';

interface Props extends IFormRegister {
  disabled?: boolean;
}

function Remarks({ register, disabled }: Props) {
  return (
    <Stack spacing={2}>
      <Form.Item label="간호사정 (Assessment)">
        <TextField
          required
          fullWidth
          multiline
          minRows={2}
          size="small"
          variant="outlined"
          disabled={disabled}
          {...register('assessment')}
        />
      </Form.Item>
      <Form.Item label="간호진단 (Diagnosis)">
        <div style={{height:'auto', display:"flex"}}>
          <TextField
            sx={{height:'60px', width:"360px"}}
            required
            multiline
            minRows={1}
            maxRows={2}
            size="small"
            variant="outlined"
            disabled={disabled}
            {...register('diagnosisRelate')}
          />
          <div style={{height:'30px', marginTop:'5px', marginLeft: 45}}>
            <label>와/과 관련된</label>
          </div>
        </div>
        <TextField
          required
          fullWidth
          multiline
          minRows={1}
          size="small"
          variant="outlined"
          disabled={disabled}
          {...register('diagnosis')}
        />
      </Form.Item>
      <Form.Item label="간호목표 (Goal)">
        <TextField
          required
          fullWidth
          multiline
          minRows={2}
          size="small"
          variant="outlined"
          disabled={disabled}
          {...register('goal')}
        />
      </Form.Item>
      <Form.Item label="간호계획 (Plan)">
        <TextField
          required
          fullWidth
          multiline
          minRows={2}
          size="small"
          variant="outlined"
          disabled={disabled}
          {...register('plan')}
        />
      </Form.Item>
      <Form.Item label="간호수행/중재/이론적 근거 (Interventions)">
        <TextField
          required
          fullWidth
          multiline
          minRows={2}
          size="small"
          variant="outlined"
          disabled={disabled}
          {...register('interventions')}
        />
      </Form.Item>
      <Form.Item label="간호평가 (Evaluation)">
        <TextField
          required
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

export default Remarks;
