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

const MenuSettings = () => {
  const settings = [
    {
      icon: <NotificationsOutlined />,
      label: SETTING_TYPE.NOTICE,
    },
    {
      icon: <AccountCircleOutlined />,
      label: SETTING_TYPE.ACCOUNT,
    },
    {
      icon: <LogoutOutlined />,
      label: SETTING_TYPE.LOGOUT,
    },
  ];

  return (
    <Fragment>
      {settings.map(({ icon, label }) => {
        return (
          <ListItem key={label} disablePadding>
            <ListItemButton>
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
