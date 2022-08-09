import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useUser from '../../store/slices/useUser';

import DisplayInformation from './DisplayInformation';
import InputInformation from './InputInformation';
import MenuDrawer from './MenuDrawer';

function Main() {
  const { name } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (name) return;
    navigate('/signin', { replace: true });
  }, [name, navigate]);

  return (
    <Box display={'flex'} minWidth={1440}>
      <MenuDrawer name={name} />
      <DisplayInformation />
      <InputInformation />
    </Box>
  );
}

export default Main;
