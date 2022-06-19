import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function MainContainer() {
  const navigate = useNavigate();

  useEffect(() => {
    // 로그인 안되어 있는 경우 페이지 이동
    navigate('/signin', { replace: true });
  }, [navigate]);

  return <div>Main</div>;
}

export default MainContainer;
