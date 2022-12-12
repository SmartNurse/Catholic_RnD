import { Box, Skeleton, Toolbar } from '@mui/material';

import useSelectorTyped from 'store/useSelectorTyped';

import { inputInformationWidth } from '../InputInformation';
import { StyledContentContainer } from '../style';
import { menuDrawerWidth } from '../MenuDrawer';
import NursingRecord from './NursingRecord';
import MedicalNote from './MedicalNote';
import PatientInfo from './PatientInfo';
import SearchToolbar from './SearchToolbar';

const DisplayInformation = () => {
  // shallowEqual 해도 리렌더링 발생해서 이곳만 별도로 선택해서 사용
  const patientInfo = useSelectorTyped(state => state.patient.patientInfo);

  const containerWidth = {
    xs: `calc(100% - ${menuDrawerWidth}px - ${inputInformationWidth.xs}px)`,
    xl: `calc(100% - ${menuDrawerWidth}px - ${inputInformationWidth.xl}px)`,
  };

  const Content = () => {
    const contentBoxProps = {
      display: 'flex',
      mt: 2.5,
      columnGap: 2.5,
      overflow: 'hidden',
      height: 'calc(100% - 180px)',
    };

    if (!patientInfo) {
      return (
        <Box {...contentBoxProps}>
          <Box flex={1} display="flex" flexDirection="column" overflow="auto">
            <Skeleton variant="rectangular" sx={{ flex: 1 }} />
          </Box>
          <Box flex={1} display="flex" flexDirection="column" overflow="auto">
            <Skeleton variant="rectangular" sx={{ flex: 1 }} />
          </Box>
        </Box>
      );
    }

    return (
      <Box {...contentBoxProps}>
        <MedicalNote patientInfo={patientInfo} />
        <NursingRecord patientInfo={patientInfo} />
      </Box>
    );
  };

  return (
    <Box
      display="flex"
      component="main"
      flexDirection="column"
      width={containerWidth}
    >
      <Toolbar sx={{ boxShadow: '-4px 4px 10px rgba(0, 0, 0, 0.04)' }}>
        <SearchToolbar />
      </Toolbar>

      <StyledContentContainer
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#EDF3FA',
        }}
      >
        <PatientInfo />
        <Content />
      </StyledContentContainer>
    </Box>
  );
};

export default DisplayInformation;
