import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSessionStorage } from '../../utils/storage';
import MenuDrawer from './MenuDrawer';

function MainContainer() {
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = getSessionStorage('AUTH_TOKEN');
    if (authToken) return;

    // TODO 로그인 안되어 있는 경우 페이지 이동
    navigate('/signin', { replace: true });
  }, [navigate]);

  return (
    <Box sx={{ display: 'flex' }}>
      <MenuDrawer />
    </Box>
  );
}

export default MainContainer;
