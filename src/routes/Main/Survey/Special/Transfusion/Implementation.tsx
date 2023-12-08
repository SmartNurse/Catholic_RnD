import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import MuiTextField from 'components/Form/MuiTextField';
import SectionTitle from '../../components/SectionTitle';

const SurgeryContentInput = ({ disabled, register }) => {
    useEffect(() => {
      // test 한슬.!!
    }, []);

  return (
    <>
      <SectionTitle title="간호 수행" />
      <Grid item xs={12}>
        <MuiTextField
          multiline
          minRows={15}
          disabled={disabled}
          required={false}
          {...register('Blood_details.content')}
        />
      </Grid>
    
    </>
  );
};

export default Implementation;
