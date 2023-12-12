import { Grid } from '@mui/material';
import MuiTextField from 'components/Form/MuiTextField';
import SectionTitle from '../../components/SectionTitle';
import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';
import { Ti18nId } from 'hooks/useI18n';

interface Props extends IFormValues, IFormWatch, IFormRegister {
  disabled?: boolean;
  onRequired: (id: Ti18nId) => void;
  onSuccess: (message: string) => void;
}

const Implementation = (props: Props) => {
  const { disabled, register } = props;

  return (
    <>
      <SectionTitle title="간호 수행" />
      <Grid item xs={12}>
        <MuiTextField
          multiline
          minRows={5}
          disabled={disabled}
          required={false}
          {...register('nursing_implementation')}
        />
      </Grid>
    </>
  );
};

export default Implementation;
