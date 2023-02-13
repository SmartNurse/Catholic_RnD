import { Box, Toolbar } from '@mui/material';

import { StyledContentContainer } from '../style';
import PatientMemo from './PatientMemo';
import NursingRecords from './NursingRecords';
import Advertisement from "./Advertisement";

export const inputInformationWidth = { xs: 340, xl: 530 };

interface Props {
  coachRefA: any;
  coachRefB: any;
}

const InputInformation = ({ coachRefA, coachRefB }: Props) => {
  return (
    <Box component="aside" width={inputInformationWidth}>
      <Advertisement />

      <StyledContentContainer>
        <PatientMemo coachRef={coachRefA} />
        <NursingRecords coachRef={coachRefB} />
      </StyledContentContainer>
    </Box>
  );
};

export default InputInformation;
