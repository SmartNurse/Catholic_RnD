import { Stack, TextField } from '@mui/material';
import FormItem from '../../../components/FormItem';
import useI18n from '../../../hooks/useI18n';
import { FormProps } from '../type';

function NarrativeRecord({ register }: FormProps) {
  const i18n = useI18n();

  return (
    <Stack spacing={2}>
      <FormItem title={i18n('NARRATIVE.NOTES')}>
        <TextField
          required
          fullWidth
          multiline
          rows={20}
          size="small"
          variant="outlined"
          {...register('narrativeNote')}
        />
      </FormItem>
    </Stack>
  );
}

export default NarrativeRecord;
