import { Grid, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

import MuiDialog from 'components/MuiDialog';
import {
  TRadiologyDefaultValues,
  SurveyDialogProps,
} from 'routes/Main/Survey/type';

import CommonPatientInfo from '../components/CommonPatientInfo';
import Radiologies from './Radiologies';

const Radiology = (props: SurveyDialogProps<TRadiologyDefaultValues>) => {
  const { title, isOpen, defaultValues, patientInfo, nurseName, onClose } =
    props;
  const { getValues } = useForm({ defaultValues });

  return (
    <MuiDialog.SurveyForm title={title} isOpen={isOpen} onClose={onClose}>
      <Grid
        container
        wrap="wrap"
        rowSpacing={5}
        columnSpacing={3}
        sx={{ py: 5, px: 1 }}
      >
        <Typography
          sx={{
            margin: '40px auto 0px auto',
            fontWeight: '700',
            fontSize: '16px',
            textAlign: 'center',
          }}
        >
          영상검사 기록지
        </Typography>
        <CommonPatientInfo patientInfo={patientInfo} nurseName={nurseName} />
        <Radiologies getValues={getValues} />
      </Grid>
    </MuiDialog.SurveyForm>
  );
};

export default Radiology;
