import { Grid, Typography } from '@mui/material';
import zIndex from '@mui/material/styles/zIndex';
import { useState } from 'react';
import useNotification from 'hooks/useNotification';

import useUser from 'store/user/useUser';
import CollegePatientList from './CollegePatientList';

import PatientsList from './PatientsList';
import StudentList from './StudentList';

const SearchToolbar = () => {
  const { student_uuid: user_id, isStudent, college_name } = useUser();

  const [okay, setOkay] = useState<boolean>(false);

  if (isStudent) return <PatientsList user_id={user_id} />;

  if (!okay)
    return (
      <Grid
        container
        alignItems="center"
        spacing={1}
        sx={{ zIndex: zIndex.modal }}
      >
        <Grid item xs={10}>
          <StudentList user_id={user_id} okay={okay} setOkay={setOkay} />
        </Grid>
        {/* <Grid item xs={5}>
          <CollegePatientList user_id={user_id} />
        </Grid> */}
      </Grid>
    );
  return (
    <Grid
      container
      alignItems="center"
      spacing={1}
      sx={{ zIndex: zIndex.modal }}
    >
      <Grid item xs={5}>
        <StudentList user_id={user_id} okay={okay} setOkay={setOkay} />
      </Grid>
      <Grid item xs={5}>
        <CollegePatientList user_id={user_id} />
      </Grid>
    </Grid>
  );
};

export default SearchToolbar;
