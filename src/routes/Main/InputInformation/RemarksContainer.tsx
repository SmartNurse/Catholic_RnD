import { Stack, TextField } from '@mui/material';
import FormItem from '../../../components/FormItem';

function RemarksContainer() {
  return (
    <Stack spacing={2}>
      <FormItem title="특기사항기록 CBE - 추후 시스템 업데이트 예정">
        <TextField
          fullWidth
          size="small"
          variant="outlined"
          helperText="*CBE = Charting By Exception"
        />
      </FormItem>
    </Stack>
  );
}

export default RemarksContainer;
