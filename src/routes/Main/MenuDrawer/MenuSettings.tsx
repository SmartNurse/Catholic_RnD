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
import useUser from '../../../store/slices/useUser';

const MenuSettings = () => {
  const { onSignOut } = useUser();

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
    },
    {
      icon: <LogoutOutlined />,
      label: '로그아웃',
      buttonClick: {
        onClick: onSignOut,
      },
    },
  ];

  return (
    <Fragment>
      {settings.map(({ icon, label, buttonClick }) => {
        return (
          <ListItem key={label} disablePadding>
            <ListItemButton {...buttonClick}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </Fragment>
  );
};

export default MenuSettings;
