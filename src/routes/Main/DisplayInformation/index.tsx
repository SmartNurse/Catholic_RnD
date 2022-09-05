import { Box, Toolbar } from '@mui/material';

import { inputInformationWidth } from '../InputInformation';
import { StyledContentContainer } from '../style';
import { menuDrawerWidth } from '../MenuDrawer';
import NursingRecord from './NursingRecord';
import PatientsList from './PatientsList';
import MedicalNote from './MedicalNote';
import PatientInfo from './PatientInfo';

const DisplayInformation = () => {
  const containerWidth = {
    xs: `calc(100% - ${menuDrawerWidth}px - ${inputInformationWidth.xs}px)`,
    xl: `calc(100% - ${menuDrawerWidth}px - ${inputInformationWidth.xl}px)`,
  };

  return (
    <Box
      display="flex"
      component="main"
      flexDirection="column"
      width={containerWidth}
    >
      <Toolbar sx={{ boxShadow: '-4px 4px 10px rgba(0, 0, 0, 0.04)' }}>
        <PatientsList />
      </Toolbar>

      <StyledContentContainer
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#EDF3FA',
        }}
      >
        <PatientInfo />
        <Box
          display="flex"
          mt={2.5}
          columnGap={2.5}
          overflow="hidden"
          height={'calc(100% - 180px)'}
        >
          <MedicalNote />
          <NursingRecord />
        </Box>
      </StyledContentContainer>
    </Box>
  );
};

export default DisplayInformation;
