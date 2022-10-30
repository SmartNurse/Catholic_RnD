import { Grid, Typography } from '@mui/material';

import { getPatients } from 'apis/admin';
import useUser from 'store/user/useUser';

import PatientsList from './PatientsList';

const SearchToolbar = () => {
  const { isStudent, college_name } = useUser();

  //   if (isStudent) return <PatientsList getApi={getPatients} />;
  return (
    <Grid container alignItems="center" spacing={1}>
      <Grid item xs={2}>
        <Typography>{college_name}</Typography>
      </Grid>
      <Grid item xs={5}>
        <PatientsList getApi={getPatients} />
      </Grid>
      <Grid item xs={5}>
        <PatientsList getApi={getPatients} />
      </Grid>
    </Grid>
  );
};

export default SearchToolbar;
