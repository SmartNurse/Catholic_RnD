import { Box, Drawer, Typography, Toolbar, List } from '@mui/material';

import { imgSmartNurseLogoText } from 'assets';

import { StyledDrawerWrapper } from '../style';
import CopyRight from './CopyRight';
import MenuRecords from './MenuRecords';
import MenuSettings from './MenuSettings';

export const menuDrawerWidth = 220;

interface Props {
  name?: string;
}

const MenuDrawer = ({ name }: Props) => (
  <Drawer
    open
    variant="permanent"
    sx={{ width: menuDrawerWidth }}
    PaperProps={{ sx: { width: 'inherit' } }}
  >
    <StyledDrawerWrapper>
      <Toolbar>
        <img src={imgSmartNurseLogoText} alt="SmartNurse" width={86} />
      </Toolbar>
      <Typography className="userName" variant="subtitle2">
        {name} 간호사
      </Typography>
      <List>
        <MenuRecords />
        <Box sx={{ mt: '90px' }} />
        <MenuSettings />
        <CopyRight />
      </List>
    </StyledDrawerWrapper>
  </Drawer>
);

export default MenuDrawer;
