import { Button, ButtonGroup, Stack, TextField } from '@mui/material';
import FormItem from '../../../components/FormItem';

function NarrativeRecordContainer() {
  return (
    <Stack spacing={2} minHeight="100%">
      <FormItem title="서술 기록 Narrative Notes">
        <TextField
          fullWidth
          multiline
          rows={20}
          size="small"
          variant="outlined"
        />
      </FormItem>

      <ButtonGroup size="small" color="info">
        <Button variant="text" color="inherit">
          취소
        </Button>
        <Button variant="text">저장</Button>
      </ButtonGroup>
    </Stack>
  );
}

export default NarrativeRecordContainer;
