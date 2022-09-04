import { Box, Toolbar } from '@mui/material';

import { StyledContentContainer } from '../style';
import PatientMemo from './PatientMemo';
import NursingRecords from './NursingRecords';

export const inputInformationWidth = { xs: 340, xl: 530 };

const InputInformation = () => {
  return (
    <Box component="aside" width={inputInformationWidth}>
      <Toolbar sx={{ backgroundColor: '#F2F2F2' }}>광고 영역</Toolbar>

      <StyledContentContainer>
        <PatientMemo />
        <NursingRecords />
      </StyledContentContainer>
    </Box>
  );
};

export default InputInformation;
