import { Fragment } from 'react';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  AccountCircleOutlined,
  LogoutOutlined,
  NotificationsOutlined,
} from '@mui/icons-material';

import useUser from 'store/user/useUser';
import { useNavigate } from 'react-router-dom';
import useStudent from 'store/student/useStudent';
import useSurvey from 'store/survey/useSurvey';
import usePatient from 'store/patient/usePatient';

const MenuSettings = () => {
  const navigate = useNavigate();
  const { onSignOut } = useUser();
  const { onCloseReadOnly } = useSurvey();
  const { onResetStudent } = useStudent();
  const { onResetPatient } = usePatient();

  const settings = [
    {
      icon: <NotificationsOutlined />,
      label: '공지사항',
      buttonClick: {
        target: '_blank',
        href: 'https://www.smartnurse.co.kr/enrnotice',
      },
    },
    {
      icon: <AccountCircleOutlined />,
      label: '계정설정',
      buttonClick: {
        onClick: () => navigate('/mypage'),
      },
    },
    {
      icon: <LogoutOutlined />,
      label: '로그아웃',
      buttonClick: {
        onClick: () => {
          onSignOut();
          // 로그아웃 시 스토어 초기화
          onResetStudent();
          onCloseReadOnly();
          onResetPatient();
        },
      },
    },
  ];

  return (
    <Fragment>
      {settings.map(({ icon, label, buttonClick }) => (
        <ListItem key={label} disablePadding>
          <ListItemButton {...buttonClick}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={label} />
          </ListItemButton>
        </ListItem>
      ))}
    </Fragment>
  );
};

export default MenuSettings;
