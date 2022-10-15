import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import MuiDialog from 'components/MuiDialog';
import {
  TRadiologyDefaultValues,
  SurveyDialogProps,
} from 'routes/Main/Survey/type';

import PatientInfo from './PatientInfo';
import Radiologies from './Radiologies';

const Radiology = (props: SurveyDialogProps<TRadiologyDefaultValues>) => {
  const { title, isOpen, defaultValues, patientInfo, onClose } = props;
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
        <PatientInfo {...patientInfo} />
        <Radiologies getValues={getValues} />
      </Grid>
    </MuiDialog.SurveyForm>
  );
};

export default Radiology;
