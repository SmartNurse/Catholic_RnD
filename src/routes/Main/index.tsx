import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useUser from 'store/user/useUser';

import DisplayInformation from './DisplayInformation';
import InputInformation from './InputInformation';
import MenuDrawer from './MenuDrawer';

function Main() {
  const navigate = useNavigate();
  const {
    student_name,
    student_uuid,
    student_grade,
    college_ci,
    college_name,
  } = useUser();

  useEffect(() => {
    if (student_uuid) return;
    navigate('/signin', { replace: true });
  }, [student_uuid, navigate]);

  const title = student_grade === 1 ? '간호사' : '(교수/조교)';

  return (
    <Box display="flex" minWidth={1440}>
      <MenuDrawer
        name={`${student_name} ${title}`}
        college_name={college_name}
        college_ci={college_ci}
      />
      <DisplayInformation />
      <InputInformation />
    </Box>
  );
}

export default Main;
