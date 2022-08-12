import { Stack, TextField } from '@mui/material';
import FormItem from '../../../components/FormItem';

function NarrativeRecordContainer() {
  return (
    <Stack spacing={2}>
      <FormItem title="서술 기록 Narrative Notes">
        <TextField
          fullWidth
          multiline
          rows={20}
          size="small"
          variant="outlined"
        />
      </FormItem>
    </Stack>
  );
}

export default NarrativeRecordContainer;
