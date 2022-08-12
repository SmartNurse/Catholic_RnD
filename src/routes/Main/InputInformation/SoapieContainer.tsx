import { Stack, TextField } from '@mui/material';
import FormItem from '../../../components/FormItem';

function SoapieContainer() {
  return (
    <Stack spacing={2}>
      <FormItem title="주관적 증상 Subjective Data">
        <TextField
          fullWidth
          multiline
          rows={2}
          size="small"
          variant="outlined"
        />
      </FormItem>

      <FormItem title="객관적 정보 Objective Data">
        <TextField
          fullWidth
          multiline
          rows={2}
          size="small"
          variant="outlined"
        />
      </FormItem>

      <FormItem title="사정 Assessment">
        <TextField
          fullWidth
          multiline
          rows={2}
          size="small"
          variant="outlined"
        />
      </FormItem>

      <FormItem title="계획 Planning">
        <TextField
          fullWidth
          multiline
          rows={2}
          size="small"
          variant="outlined"
        />
      </FormItem>

      <FormItem title="중재 Interventions">
        <TextField
          fullWidth
          multiline
          rows={2}
          size="small"
          variant="outlined"
        />
      </FormItem>

      <FormItem title="평가 Evaluation">
        <TextField
          fullWidth
          multiline
          rows={2}
          size="small"
          variant="outlined"
        />
      </FormItem>
    </Stack>
  );
}

export default SoapieContainer;
