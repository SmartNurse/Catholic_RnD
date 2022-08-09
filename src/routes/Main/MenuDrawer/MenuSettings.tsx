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
import useUser from '../../../store/slices/useUser';

const MenuSettings = () => {
  const { onSignOut } = useUser();

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
