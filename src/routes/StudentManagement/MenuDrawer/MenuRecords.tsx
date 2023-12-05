import { Fragment, useState } from 'react';

import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

import { TbMessagePlus } from 'react-icons/tb';

import { ReactComponent as NonStudentVideo } from '../../../assets/icon-nonStudent-video.svg';
import { ReactComponent as NonStudentNursint } from '../../../assets/icon-nonStudent-nursing.svg';

import Survey from '../../Main/Survey';

import { IToggleObj } from './type';
import { initialToggleObj } from './initialStates';

interface Props {
  menuDrawerWidth: number;
  setMenuDrawerWidth: (menuDrawerWidth: number) => void;
  menuState: string;
  setMenuState: (menuState: string) => void;
}

const MenuRecords = (props: Props) => {
  const { menuDrawerWidth, setMenuDrawerWidth, menuState, setMenuState } =
    props;

  const changeOriginMenu = () => setMenuState('핵심간호술기영상 관리');
  const changeMenuNurseRecord = () => setMenuState('간호기록 전체조회');
  const changeMenuNurseProcess = () => setMenuState('간호과정 서술기록 조회');

  const [toggle, setToggle] = useState<IToggleObj>(initialToggleObj);

  const menus = [
    {
      icon: <NonStudentVideo />,
      label: '핵심간호술기영상 관리',
      onclick: changeOriginMenu,
    },
    {
      icon: <NonStudentNursint />,
      label: '간호기록 전체조회',
      onclick: changeMenuNurseRecord,
    },
    {
      icon: <TbMessagePlus />,
      label: '간호과정 서술기록 조회',
      onclick: changeMenuNurseProcess,
    },
  ];

  return (
    <Fragment>
      {menus.map(({ icon, label, onclick }) => {
        return (
          <>
            {menuDrawerWidth !== 220 ? (
              icon ? (
                <ListItem key={label} disablePadding>
                  <ListItemButton onClick={onclick}>
                    <ListItemIcon>{icon}</ListItemIcon>
                  </ListItemButton>
                </ListItem>
              ) : null
            ) : icon ? (
              <ListItem key={label} disablePadding>
                <ListItemButton onClick={onclick}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={label} />
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
