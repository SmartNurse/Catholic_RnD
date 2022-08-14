import { Stack, TextField } from '@mui/material';
import FormItem from '../../../components/FormItem';
import { FormProps } from '../type';

function FocusDar({ register }: FormProps) {
  return (
    <Stack spacing={2}>
      <FormItem title="포커스 Focus">
        <TextField
          required
          fullWidth
          multiline
          rows={2}
          size="small"
          variant="outlined"
          {...register('focus')}
        />
      </FormItem>

      <FormItem title="데이터 Data">
        <TextField
          required
          fullWidth
          multiline
          rows={4}
          size="small"
          variant="outlined"
          {...register('data')}
        />
      </FormItem>

      <FormItem title="활동 Action">
        <TextField
          required
          fullWidth
          multiline
          rows={3}
          size="small"
          variant="outlined"
          {...register('action')}
        />
      </FormItem>

      <FormItem title="반응 Response">
        <TextField
          required
          fullWidth
          multiline
          rows={5}
          size="small"
          variant="outlined"
          {...register('response')}
        />
      </FormItem>
    </Stack>
  );
}

export default FocusDar;
