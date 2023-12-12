import { useState } from 'react';
import { format } from 'date-fns/esm';
import { Box, Button, Stack, Typography, CardMedia } from '@mui/material';

import MuiDialog from 'components/MuiDialog';
import { SurveyDialogProps } from 'routes/Main/Survey/type';

import one from 'assets/kimheechul.svg';
import two from 'assets/kimheechulTwo.svg';
import three from 'assets/parkboklei.svg';
import four from 'assets/leegeumja.svg';
import five from 'assets/leegeumjaTwo.svg';
import six from 'assets/leegeumjaThree.svg';

const Prescription = (props: SurveyDialogProps<null>) => {
  const today = format(new Date(), 'yyyy-MM-dd');
  const { title, isOpen, patientInfo, onClose } = props;

  const [patientName, setPatientName] = useState('');

  return (
    <MuiDialog.SurveyForm title={title} isOpen={isOpen} onClose={onClose}>
      <Box component="section" sx={{ py: 5, px: 1 }}>
        {/* <Typography variant="caption" component="p" color="#00000080" mb={1}>
          처방일시 {today}
        </Typography>
        <Typography variant="body2" lineHeight="22px" whiteSpace="pre-wrap">
          {patientInfo.medical_note}
        </Typography> */}
        <Stack direction="row" gap={3}>
          <Button variant="contained" onClick={() => setPatientName('김희철')}>
            김희철
          </Button>
          <Button variant="contained" onClick={() => setPatientName('박복례')}>
            박복례
          </Button>
          <Button variant="contained" onClick={() => setPatientName('이금자')}>
            이금자
          </Button>
        </Stack>
      </Box>

      {patientName === '김희철' ? (
        <Box component="section" sx={{ width: '98%' }}>
          <CardMedia
            height={1200}
            component="img"
            image={one}
            sx={{ objectFit: 'contain' }}
          />
          <CardMedia
            height={1200}
            component="img"
            image={two}
            sx={{ objectFit: 'contain' }}
          />
        </Box>
      ) : patientName === '박복례' ? (
        <Box component="section" sx={{ width: '98%' }}>
          <CardMedia
            height={1200}
            component="img"
            image={three}
            sx={{ objectFit: 'contain' }}
          />
        </Box>
      ) : (
        <Box component="section" sx={{ width: '98%' }}>
          <CardMedia
            height={1200}
            component="img"
            image={four}
            sx={{ objectFit: 'contain' }}
          />
          <CardMedia
            height={1200}
            component="img"
            image={five}
            sx={{ objectFit: 'contain' }}
          />
          <CardMedia
            height={1200}
            component="img"
            image={six}
            sx={{ objectFit: 'contain' }}
          />
        </Box>
      )}
    </MuiDialog.SurveyForm>
  );
};

export default Prescription;
