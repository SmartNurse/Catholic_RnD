import { Button, ButtonGroup, Stack, TextField } from '@mui/material';
import FormItem from '../../../components/FormItem';

function FocusDarContainer() {
  return (
    <Stack spacing={2} minHeight="100%">
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

      <ButtonGroup size="small" color="info">
        <Button variant="text" color="inherit">
          취소
        </Button>
        <Button variant="text">저장</Button>
      </ButtonGroup>
    </Stack>
  );
}

export default FocusDarContainer;
