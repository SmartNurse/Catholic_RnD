import { Stack, TextField } from '@mui/material';

import Form from 'components/Form';
import useI18n from 'hooks/useI18n';

import { IFormRegister } from '../type';

function NarrativeRecord({ register }: IFormRegister) {
  const i18n = useI18n();

  return (
    <Stack spacing={2}>
      <Form.Item label={i18n('NARRATIVE.NARRATIVENOTE')}>
        <TextField
          required
          fullWidth
          multiline
          rows={20}
          size="small"
          variant="outlined"
          {...register('narrativeNote')}
        />
      </Form.Item>
    </Stack>
  );
}

export default NarrativeRecord;
