import { Grid, Typography } from '@mui/material';

import Form from 'components/Form';
import { IFormRegister } from 'routes/Main/type';

interface Props extends IFormRegister {
  registerKey: string;
}

const Reason = ({ registerKey, register }: Props) => {
  return (
    <Grid item xs={12}>
      <Typography fontSize={12} fontWeight={500} sx={{ mb: 1.5 }}>
        진단근거
      </Typography>
      <Form.MuiTextField
        required
        multiline
        minRows={5}
        {...register(registerKey)}
      />
    </Grid>
  );
};

export default Reason;
