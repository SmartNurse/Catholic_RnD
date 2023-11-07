import { useState, useEffect, useRef } from 'react';

import { Box, Container, Button, Stack } from '@mui/material';
import MenuDrawer from './MenuDrawer';
import useUser from 'store/user/useUser';
import DisplayInformation from './DisplayInformation';

const CoreSkillVideo = () => {
  const {
    student_name,
    student_uuid,
    student_grade,
    college_ci,
    college_name,
  } = useUser();

  const title = student_grade === 1 ? '간호사' : '(교수/조교)';

  const [menuDrawerWidth, setMenuDrawerWidth] = useState(220);
  const [menuState, setMenuState] = useState('핵심간호술기영상 관리');

  return (
    <Box display="flex" minWidth={1440}>
      {/* 왼쪽 메뉴 */}
      <MenuDrawer
        name={`${student_name} ${title}`}
        college_name={college_name}
        college_ci={college_ci}
        menuDrawerWidth={menuDrawerWidth}
        setMenuDrawerWidth={setMenuDrawerWidth}
        setMenuState={setMenuState}
        menuState={menuState}
      />
      {/* 오른쪽에 툴바 및 컨텐츠 */}
      <DisplayInformation
        menuDrawerWidth={menuDrawerWidth}
        menuState={menuState}
      />
    </Box>
  );
};

export default CoreSkillVideo;
