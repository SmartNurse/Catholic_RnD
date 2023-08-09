import { Grid, Typography } from '@mui/material';

import useUser from 'store/user/useUser';
import CollegePatientList from './CollegePatientList';

import PatientsList from './PatientsList';
import StudentList from './StudentList';

const SearchToolbar = () => {
  const { student_uuid: user_id, isStudent, college_name } = useUser();

  if (isStudent) return <PatientsList user_id={user_id} />;
  return (
    <Grid container alignItems="center" spacing={1} sx={{ zIndex: 100000 }}>
      {/* <Grid item xs={2}>
        <Typography>{college_name}</Typography>
      </Grid> */}
      <Grid item xs={5}>
        <StudentList user_id={user_id} />
      </Grid>
      <Grid item xs={5}>
        <CollegePatientList user_id={user_id} />
      </Grid>
    </Grid>
  );
};

export default SearchToolbar;
