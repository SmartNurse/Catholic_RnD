import { Fragment } from 'react';
import { Grid } from '@mui/material';

import Form from 'components/Form';
import { IFormRegister } from 'routes/Main/type';

import RowContainer from './RowContainer';
import SectionTitle from './SectionTitle';

interface Props extends IFormRegister {
  disabled?: boolean;
  title: string;
  registerId: string;
  required?: boolean;
}

const TextAreaSection = (props: Props) => {
  const { required, title, registerId, disabled, register } = props;

  return (
    <Fragment>
      <SectionTitle title={title} />

      <RowContainer xs={12}>
        <Grid item flex={1}>
          <Form.MuiTextField
            multiline
            minRows={5}
            disabled={disabled}
            {...register(registerId)}
            required={required === undefined ? true : required}
          />
        </Grid>
      </RowContainer>
    </Fragment>
  );
};

export default TextAreaSection;
