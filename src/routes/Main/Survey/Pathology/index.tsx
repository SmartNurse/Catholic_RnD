import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import MuiDialog from 'components/MuiDialog';
import {
  TPathologySurveyDefaultValues,
  SurveyDialogProps,
} from 'routes/Main/type';

import PatientInfo from './PatientInfo';
import Pathologies from './Pathologies';

const Pathology = (props: SurveyDialogProps<TPathologySurveyDefaultValues>) => {
  const { title, isOpen, defaultValues, patientInfo, onClose } = props;

  const { getValues } = useForm({
    defaultValues,
  });

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
        <Pathologies getValues={getValues} />
      </Grid>
    </MuiDialog.SurveyForm>
  );
};

export default Pathology;
