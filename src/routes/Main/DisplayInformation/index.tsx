import { Box, Toolbar, Typography } from '@mui/material';
import { inputInformationWidth } from '../InputInformation';
import { menuDrawerWidth } from '../MenuDrawer';
import NursingRecord from './NursingRecord';
import Prescription from './Prescription';
import Privacy from './Privacy';

const DisplayInformation = () => {
  const containerWidth = {
    xs: `calc(100% - ${menuDrawerWidth}px - ${inputInformationWidth.xs}px)`,
    xl: `calc(100% - ${menuDrawerWidth}px - ${inputInformationWidth.xl}px)`,
  };

  return (
    <Box
      component="main"
      display="flex"
      flexDirection="column"
      sx={{ width: containerWidth, height: '100vh' }}
    >
      <Toolbar sx={{ boxShadow: '-4px 4px 10px rgba(0, 0, 0, 0.04)' }}>
        {/* TODO autocomplete list */}
        <Typography variant="subtitle1">김소현 환자</Typography>
      </Toolbar>

      <Box
        flex={1}
        display="flex"
        flexDirection="column"
        sx={{ p: 2.5, backgroundColor: '#EDF3FA' }}
      >
        <Privacy />
        <Box display="flex" flex={1} mt={2.5} columnGap={2.5}>
          <Prescription />
          <NursingRecord />
        </Box>
      </Box>
    </Box>
  );
};

export default DisplayInformation;
