import { Fragment } from 'react';
import { Grid } from '@mui/material';

import Form from 'components/Form';
import { IFormRegister } from 'routes/Main/Survey/type';

import RowContainer from '../components/RowContainer';
import SectionTitle from '../components/SectionTitle';

const Education = (props: IFormRegister) => {
  const { register } = props;

  return (
    <Fragment>
      <SectionTitle title="퇴원 교육" />

      <RowContainer xs={12}>
        <Grid item flex={1}>
          <Form.MuiTextField multiline minRows={5} {...register('education')} />
        </Grid>
      </RowContainer>
    </Fragment>
  );
};

export default Education;
