import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

import MuiDialog from 'components/MuiDialog';
import {
  TPathologyDefaultValues,
  SurveyDialogProps,
} from 'routes/Main/Survey/type';

import CommonPatientInfo from '../components/CommonPatientInfo';
import Pathologies from './Pathologies';

const Pathology = (props: SurveyDialogProps<TPathologyDefaultValues>) => {
  const { title, isOpen, defaultValues, patientInfo, nurseName, onClose } = props;

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
        <CommonPatientInfo patientInfo={patientInfo} nurseName={nurseName} />
        <Pathologies getValues={getValues} />
      </Grid>
    </MuiDialog.SurveyForm>
  );
};

export default Pathology;
