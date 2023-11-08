import { Grid, Typography } from '@mui/material';
import zIndex from '@mui/material/styles/zIndex';

import useUser from 'store/user/useUser';

import CollegePatientList from './CollegePatientList';

const SearchToolbar = () => {
  const { student_uuid: user_id } = useUser();

  return (
    <Grid
      container
      alignItems="center"
      spacing={1}
      sx={{ zIndex: zIndex.modal }}
    >
      <Grid item xs={8}>
        <CollegePatientList user_id={user_id} />
      </Grid>
    </Grid>
  );
};

export default SearchToolbar;
