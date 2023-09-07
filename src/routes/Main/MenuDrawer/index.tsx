import { useState } from 'react';

import { Box, Drawer, Typography, Toolbar, List } from '@mui/material';
import { Menu } from '@mui/icons-material';

import { imgSmartNurseLogoText } from 'assets';

import { StyledDrawerWrapper } from '../style';
import CopyRight from './CopyRight';
import MenuRecords from './MenuRecords';
import MenuSettings from './MenuSettings';

interface Props {
  name?: string;
  college_ci?: string;
  college_name?: string;
  menuDrawerWidth: number;
  setMenuDrawerWidth: (menuDrawerWidth: number) => void;
  coachRefA: any;
  coachRefB: any;
}

const MenuDrawer = (props: Props) => {
  const {
    name,
    college_ci,
    college_name,
    menuDrawerWidth,
    setMenuDrawerWidth,
    coachRefA,
    coachRefB,
  } = props;

  return (
    <Drawer
      open
      variant="permanent"
      sx={{ width: menuDrawerWidth }}
      PaperProps={{ sx: { width: 'inherit' } }}
    >
      <StyledDrawerWrapper>
        <Toolbar>
          {menuDrawerWidth === 220 ? (
            <Box
              height={35}
              component="img"
              alt={college_name ? college_name : 'SmartNurse'}
              src={college_ci ? college_ci : imgSmartNurseLogoText}
              sx={{ objectFit: 'contain' }}
            />
          ) : null}
        </Toolbar>
        <Box className="userDiv">
          <Menu
            className="hamburgerIcon"
            onClick={() => {
              if (menuDrawerWidth !== 220) setMenuDrawerWidth(220);
              else setMenuDrawerWidth(52);
            }}
          />
          {menuDrawerWidth === 220 && name}
        </Box>
        <List ref={coachRefA}>
          <MenuRecords
            menuDrawerWidth={menuDrawerWidth}
            setMenuDrawerWidth={setMenuDrawerWidth}
            coachRef={coachRefB}
          />
          <Box sx={{ mt: '90px' }} />
          <MenuSettings
            menuDrawerWidth={menuDrawerWidth}
            setMenuDrawerWidth={setMenuDrawerWidth}
          />
          <CopyRight />
        </List>
      </StyledDrawerWrapper>
    </Drawer>
  );
};

export default MenuDrawer;
