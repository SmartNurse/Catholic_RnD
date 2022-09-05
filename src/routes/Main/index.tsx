import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useUser from 'store/user/useUser';

import DisplayInformation from './DisplayInformation';
import InputInformation from './InputInformation';
import MenuDrawer from './MenuDrawer';

function Main() {
  const navigate = useNavigate();
  const { name, student_uuid } = useUser();

  useEffect(() => {
    if (student_uuid) return;
    navigate('/signin', { replace: true });
  }, [student_uuid, navigate]);

  return (
    <Box display="flex" minWidth={1440}>
      <MenuDrawer name={name} />
      <DisplayInformation />
      <InputInformation />
    </Box>
  );
}

export default Main;
