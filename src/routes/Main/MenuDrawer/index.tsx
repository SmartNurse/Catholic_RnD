import { Box, Drawer, Typography, Toolbar, List } from '@mui/material';
import { imgSmartNurseLogoText } from '../../../assets';
import { DrawerWrapper } from '../style';
import CopyRight from './CopyRight';
import MenuRecords from './MenuRecords';
import MenuSettings from './MenuSettings';

const drawerWidth = 220;

const MenuDrawer = () => {
  return (
    <Box
      component="nav"
      sx={{ width: { drawerWidth }, flexShrink: 0 }}
      aria-label="mailbox folders"
    >
      <Drawer
        open
        variant="permanent"
        PaperProps={{ sx: { width: drawerWidth } }}
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
            <Box sx={{ marginTop: 'auto' }} />
            <MenuSettings />
            <CopyRight />
          </List>
        </DrawerWrapper>
      </Drawer>
    </Box>
  );
};

export default MenuDrawer;
