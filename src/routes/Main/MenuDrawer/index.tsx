import { Box, Drawer, Typography, Toolbar, List } from '@mui/material';

import { imgSmartNurseLogoText } from 'assets';

import { StyledDrawerWrapper } from '../style';
import CopyRight from './CopyRight';
import MenuRecords from './MenuRecords';
import MenuSettings from './MenuSettings';

export const menuDrawerWidth = 220;

interface Props {
  name?: string;
  college_ci?: string;
  college_name?: string;
}

const MenuDrawer = ({ name, college_ci, college_name }: Props) => (
  <Drawer
    open
    variant="permanent"
    sx={{ width: menuDrawerWidth }}
    PaperProps={{ sx: { width: 'inherit' } }}
  >
    <StyledDrawerWrapper>
      <Toolbar>
        <img
          width={86}
          alt={college_name ? college_name : 'SmartNurse'}
          src={college_ci ? college_ci : imgSmartNurseLogoText}
        />
      </Toolbar>
      <Typography className="userName" variant="subtitle2">
        {name}
      </Typography>
      <List>
        <MenuRecords />
        <Box sx={{ mt: 'auto' }} />
        <MenuSettings />
        <CopyRight />
      </List>
    </StyledDrawerWrapper>
  </Drawer>
);

export default MenuDrawer;
