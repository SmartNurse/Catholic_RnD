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
import { SETTING_TYPE } from '../type';
import { removeSessionStorage } from '../../../utils/storage';
import { useNavigate } from 'react-router-dom';

const MenuSettings = () => {
  const navigate = useNavigate();

  const settings = [
    {
      icon: <NotificationsOutlined />,
      label: SETTING_TYPE.NOTICE,
      buttonClick: {
        target: '_blank',
        href: 'https://www.smartnurse.co.kr/enrnotice',
      },
    },
    {
      icon: <AccountCircleOutlined />,
      label: SETTING_TYPE.ACCOUNT,
    },
    {
      icon: <LogoutOutlined />,
      label: SETTING_TYPE.LOGOUT,
      buttonClick: {
        onClick: () => {
          removeSessionStorage('AUTH_TOKEN');
          navigate('/signin', { replace: true });
        },
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
