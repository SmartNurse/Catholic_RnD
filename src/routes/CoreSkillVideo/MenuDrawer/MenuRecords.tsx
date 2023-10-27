import { Fragment, useState } from 'react';

import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

import { ReactComponent as ProPlus } from '../../../assets/proPlus.svg';
import { ReactComponent as NonStudentVideo } from '../../../assets/icon-nonStudent-video.svg';
import { ReactComponent as NonStudentNursint } from '../../../assets/icon-nonStudent-nursing.svg';

import Survey from '../../Main/Survey';

import { IToggleObj } from './type';
import { initialToggleObj } from './initialStates';

interface Props {
  menuDrawerWidth: number;
  setMenuDrawerWidth: (menuDrawerWidth: number) => void;
}

const MenuRecords = (props: Props) => {
  const { menuDrawerWidth, setMenuDrawerWidth } = props;

  const [toggle, setToggle] = useState<IToggleObj>(initialToggleObj);

  const menus = [
    {
      icon: <NonStudentVideo />,
      label: '핵심간호술기영상 관리',
    },
    {
      icon: <NonStudentNursint />,
      label: '간호기록 전체조회',
    },
  ];

  return (
    <Fragment>
      {menus.map(({ icon, label }) => {
        return (
          <>
            {menuDrawerWidth !== 220 ? (
              icon ? (
                <ListItem key={label} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{icon}</ListItemIcon>
                  </ListItemButton>
                </ListItem>
              ) : null
            ) : icon ? (
              <ListItem key={label} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={label} />
                </ListItemButton>
              </ListItem>
            ) : toggle ? (
              <ListItem key={label} disablePadding>
                <ListItemButton className={''}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText
                    primary={label}
                    sx={{ whiteSpace: 'pre-wrap' }}
                  />
                </ListItemButton>
              </ListItem>
            ) : (
              <></>
            )}
          </>
        );
      })}

      <Survey />
    </Fragment>
  );
};

export default MenuRecords;
