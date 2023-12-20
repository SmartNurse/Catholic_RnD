import { useState } from 'react';
import { format } from 'date-fns/esm';
import { Box, Button, Stack, Typography, CardMedia } from '@mui/material';

import MuiDialog from 'components/MuiDialog';
import { SurveyDialogProps } from 'routes/Main/Survey/type';

const PrescriptionOrigin = (props: SurveyDialogProps<null>) => {
  const today = format(new Date(), 'yyyy-MM-dd');
  const { title, isOpen, patientInfo, onClose } = props;

  const [patientName, setPatientName] = useState('');

  return (
    <MuiDialog.SurveyForm title={title} isOpen={isOpen} onClose={onClose}>
      <Box component="section" sx={{ py: 5, px: 1 }}>
        <Typography variant="caption" component="p" color="#00000080" mb={1}>
          처방일시 {today}
        </Typography>
        <Typography variant="body2" lineHeight="22px" whiteSpace="pre-wrap">
          {patientInfo.medical_note}
        </Typography>
      </Box>
    </MuiDialog.SurveyForm>
  );
};

export default PrescriptionOrigin;
