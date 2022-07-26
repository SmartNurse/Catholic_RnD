import { Button, ButtonGroup, Stack, TextField } from '@mui/material';
import FormItem from '../../../components/FormItem';

function SoapieContainer() {
  return (
    <Stack spacing={2} minHeight="100%">
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

      <ButtonGroup size="small" color="info">
        <Button variant="text" color="inherit">
          취소
        </Button>
        <Button variant="text">저장</Button>
      </ButtonGroup>
    </Stack>
  );
}

export default SoapieContainer;
