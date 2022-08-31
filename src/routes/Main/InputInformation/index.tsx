import { Box, Skeleton, Toolbar } from '@mui/material';

import { StyledContentContainer } from '../style';
import usePatient from '../../../store/slices/usePatient';
import PatientMemo from './PatientMemo';
import NursingRecords from './NursingRecords';
import useUser from '../../../store/slices/useUser';

export const inputInformationWidth = { xs: 340, xl: 530 };

const InputInformation = () => {
  const { patient, onUpdateNursingRecord } = usePatient();
  const { student_uuid: user_id } = useUser();

  const InputContents = () => {
    if (!patient) {
      return (
        <StyledContentContainer>
          <Skeleton variant="rectangular" sx={{ height: '100%' }} />
        </StyledContentContainer>
      );
    }

    return (
      <StyledContentContainer>
        <PatientMemo user_id={user_id} patient_id={patient.patient_id} />
        <NursingRecords
          user_id={user_id}
          patient_id={patient.patient_id}
          onUpdateNursingRecord={onUpdateNursingRecord}
        />
      </StyledContentContainer>
    );
  };

  return (
    <Box component="aside" width={inputInformationWidth}>
      <Toolbar sx={{ backgroundColor: '#F2F2F2' }}>광고 영역</Toolbar>

      <InputContents />
    </Box>
  );
};

export default InputInformation;
