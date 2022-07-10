import { Box, Drawer, Typography, Toolbar, List } from '@mui/material';
import { imgSmartNurseLogoText } from '../../../assets';
import { DrawerWrapper } from '../style';
import CopyRight from './CopyRight';
import MenuRecords from './MenuRecords';
import MenuSettings from './MenuSettings';

export const menuDrawerWidth = 220;

const MenuDrawer = () => {
  return (
    <Drawer
      open
      variant="permanent"
      sx={{ width: menuDrawerWidth }}
      PaperProps={{ sx: { width: 'inherit' } }}
    >
      <DrawerWrapper>
        <Toolbar>
          <img src={imgSmartNurseLogoText} alt="SmartNurse" width={86} />
        </Toolbar>
        <Typography className="userName" variant="subtitle2">
          김아무 간호사
        </Typography>
        <List>
          <MenuRecords />
          <Box sx={{ mt: 'auto' }} />
          <MenuSettings />
          <CopyRight />
        </List>
      </DrawerWrapper>
    </Drawer>
  );
};

export default MenuDrawer;
