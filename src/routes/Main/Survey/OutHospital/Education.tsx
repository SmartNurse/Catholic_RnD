import { Grid } from '@mui/material';
import { Fragment } from 'react';

import { FormProps } from '../../type';

import RowContainer from '../components/RowContainer';
import SectionTitle from '../components/SectionTitle';
import SurveyInput from '../components/SurveyInput';

const Education = (props: FormProps) => {
  const { register } = props;

  return (
    <Fragment>
      <SectionTitle title="퇴원 교육" />

      <RowContainer xs={12}>
        <Grid item flex={1}>
          <SurveyInput multiline rows={5} {...register('education')} />
        </Grid>
      </RowContainer>
    </Fragment>
  );
};

export default Education;
