import { Box, Card, Skeleton, Typography } from '@mui/material';
import { format } from 'date-fns/esm';
import usePatient from '../../../store/slices/usePatient';

const MedicalNote = () => {
  const { patientInfo } = usePatient();
  const today = format(new Date(), 'yyyy-MM-dd');

  const MedicalNoteCard = () => {
    if (!patientInfo) {
      return <Skeleton variant="rectangular" height="auto" sx={{ flex: 1 }} />;
    }

    return (
      <Card component="section" sx={{ p: '20px 15px', flex: 1 }}>
        <Typography variant="caption" component="p" color="#00000080" mb={1}>
          처방일시 {today}
        </Typography>
        <Typography variant="body2" lineHeight="22px" whiteSpace="pre-wrap">
          {patientInfo.medical_note}
        </Typography>
      </Card>
    );
  };

  return (
    <Box flex={1} display="flex" flexDirection={'column'}>
      <Typography variant="subtitle2" fontSize={13} mb={1}>
        처방 내역
      </Typography>
      <MedicalNoteCard />
    </Box>
  );
};

export default MedicalNote;
