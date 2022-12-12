import { format } from 'date-fns/esm';
import { Box, Typography } from '@mui/material';

import MuiDialog from 'components/MuiDialog';
import { SurveyDialogProps } from 'routes/Main/Survey/type';

const Prescription = (props: SurveyDialogProps<null>) => {
  const today = format(new Date(), 'yyyy-MM-dd');
  const { title, isOpen, patientInfo, onClose } = props;

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

export default Prescription;
