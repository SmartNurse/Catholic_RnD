import { format } from 'date-fns/esm';
import { Box, Card, Skeleton, Typography } from '@mui/material';

import usePatient from 'store/patient/usePatient';

const MedicalNote = () => {
  const { patientInfo } = usePatient();
  const today = format(new Date(), 'yyyy-MM-dd');

  if (!patientInfo) {
    return (
      <Box flex={1} display="flex" flexDirection="column" overflow="auto">
        <Skeleton variant="rectangular" sx={{ flex: 1 }} />
      </Box>
    );
  }

  return (
    <Box flex={1} display="flex" flexDirection="column" overflow="auto">
      <Typography variant="subtitle2" fontSize={13} mb={1}>
        처방 내역
      </Typography>
      <Card
        component="section"
        sx={{ p: '20px 15px', height: '100%', overflow: 'auto' }}
      >
        <Typography variant="caption" component="p" color="#00000080" mb={1}>
          처방일시 {today}
        </Typography>
        <Typography variant="body2" lineHeight="22px" whiteSpace="pre-wrap">
          {patientInfo.medical_note}
        </Typography>
      </Card>
    </Box>
  );
};

export default MedicalNote;
