import { Stack, TextField } from '@mui/material';
import FormItem from '../../../components/FormItem';
import { FormProps } from '../type';

function Soapie({ register }: FormProps) {
  return (
    <Stack spacing={2}>
      <FormItem title="주관적 증상 Subjective Data">
        <TextField
          required
          fullWidth
          multiline
          rows={2}
          size="small"
          variant="outlined"
          {...register('subjective')}
        />
      </FormItem>

      <FormItem title="객관적 정보 Objective Data">
        <TextField
          required
          fullWidth
          multiline
          rows={2}
          size="small"
          variant="outlined"
          {...register('objective')}
        />
      </FormItem>

      <FormItem title="사정 Assessment">
        <TextField
          required
          fullWidth
          multiline
          rows={2}
          size="small"
          variant="outlined"
          {...register('assessment')}
        />
      </FormItem>

      <FormItem title="계획 Planning">
        <TextField
          required
          fullWidth
          multiline
          rows={2}
          size="small"
          variant="outlined"
          {...register('planning')}
        />
      </FormItem>

      <FormItem title="중재 Interventions">
        <TextField
          required
          fullWidth
          multiline
          rows={2}
          size="small"
          variant="outlined"
          {...register('interventions')}
        />
      </FormItem>

      <FormItem title="평가 Evaluation">
        <TextField
          required
          fullWidth
          multiline
          rows={2}
          size="small"
          variant="outlined"
          {...register('evaluation')}
        />
      </FormItem>
    </Stack>
  );
}

export default Soapie;
