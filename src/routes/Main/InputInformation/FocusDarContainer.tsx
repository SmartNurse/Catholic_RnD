import { Stack, TextField } from '@mui/material';
import FormItem from '../../../components/FormItem';

function FocusDarContainer() {
  return (
    <Stack spacing={2}>
      <FormItem title="포커스 Focus">
        <TextField
          fullWidth
          multiline
          rows={2}
          size="small"
          variant="outlined"
        />
      </FormItem>

      <FormItem title="데이터 Data">
        <TextField
          fullWidth
          multiline
          rows={4}
          size="small"
          variant="outlined"
        />
      </FormItem>

      <FormItem title="활동 Action">
        <TextField
          fullWidth
          multiline
          rows={3}
          size="small"
          variant="outlined"
        />
      </FormItem>

      <FormItem title="반응 Response">
        <TextField
          fullWidth
          multiline
          rows={5}
          size="small"
          variant="outlined"
        />
      </FormItem>
    </Stack>
  );
}

export default FocusDarContainer;
