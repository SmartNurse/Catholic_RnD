import { Box, Drawer, Typography, Toolbar, List } from '@mui/material';
import { Menu } from '@mui/icons-material';

import { imgSmartNurseLogoText } from 'assets';

import { StyledDrawerWrapper } from '../style';
import CopyRight from './CopyRight';
import MenuRecords from './MenuRecords';
import MenuSettings from './MenuSettings';

export let menuDrawerWidth = 220;

interface Props {
  name?: string;
  college_ci?: string;
  college_name?: string;
  hideMenu: boolean;
  setHideMenu: (hideMenu: boolean) => void;
}

const MenuDrawer = ({ name, college_ci, college_name, hideMenu, setHideMenu }: Props) => (
  <Drawer
    open
    variant="permanent"
    sx={{ width: menuDrawerWidth }}
    PaperProps={{ sx: { width: 'inherit' } }}
  >
    <StyledDrawerWrapper>
      <Toolbar>
        {!hideMenu ? 
        <Box
          height={35}
          component="img"
          alt={college_name ? college_name : 'SmartNurse'}
          src={college_ci ? college_ci : imgSmartNurseLogoText}
          sx={{ objectFit: 'contain' }}
        />
        :
        null
        }
      </Toolbar>
      <Box className="userDiv">
        <Menu className="hamburgerIcon" onClick={() => {
          if (hideMenu) menuDrawerWidth = 220;
          else menuDrawerWidth = 52;
          setHideMenu(!hideMenu);
        }}/>
        {!hideMenu && name}
      </Box>
      <List>
        {!hideMenu ?
          <>
            <MenuRecords />
            <Box sx={{ mt: '90px' }} />
            <MenuSettings />
            <CopyRight />
          </>
        :
          null
        }
      </List>
    </StyledDrawerWrapper>
  </Drawer>
);

export default MenuDrawer;
