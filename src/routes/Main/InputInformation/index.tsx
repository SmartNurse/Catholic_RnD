import { Box, Toolbar } from '@mui/material';

import { StyledContentContainer } from '../style';
import PatientMemo from './PatientMemo';
import NursingRecords from './NursingRecords';
import Advertisement from "./Advertisement";

export const inputInformationWidth = { xs: 340, xl: 530 };

const InputInformation = () => {
  return (
    <Box component="aside" width={inputInformationWidth}>
      <Advertisement />

      <StyledContentContainer>
        <PatientMemo />
        <NursingRecords />
      </StyledContentContainer>
    </Box>
  );
};

export default InputInformation;
