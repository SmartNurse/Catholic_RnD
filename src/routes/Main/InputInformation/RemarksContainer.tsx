import { Button, ButtonGroup, Stack, TextField } from '@mui/material';
import FormItem from '../../../components/FormItem';

function RemarksContainer() {
  return (
    <Stack spacing={2} minHeight="100%">
      <FormItem title="특기사항기록 CBE - 추후 시스템 업데이트 예정">
        <TextField
          fullWidth
          size="small"
          variant="outlined"
          helperText="*CBE = Charting By Exception"
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

export default RemarksContainer;
