import { Grid } from '@mui/material';

import {
  HospitalizationSurveyDefaultValues,
  SurveyDialogProps,
} from '../../type';
import SaveDialog from '../../../../components/SaveDialog/SaveDialog';

import PatientInfo from './PatientInfo';
import DefaultInfo from './DefaultInfo';
import DiseaseHistory from './DiseaseHistory';
import BodyStatus from './BodyStatus';
import Habit from './Habit';
import { useForm } from 'react-hook-form';

const Hospitalization = (
  props: SurveyDialogProps<HospitalizationSurveyDefaultValues>
) => {
  const { title, isOpen, defaultValues, nurseName, patientInfo, onClose } =
    props;
  const { handleSubmit, register, getValues } = useForm({ defaultValues });

  return (
    <form onSubmit={handleSubmit(console.log)}>
      <SaveDialog title={title} isOpen={isOpen} onClose={onClose}>
        <Grid
          container
          wrap="wrap"
          rowSpacing={5}
          columnSpacing={3}
          sx={{ p: 5 }}
        >
          <PatientInfo
            nurseName={nurseName}
            patientInfo={patientInfo}
            register={register}
          />
          <DefaultInfo getValues={getValues} register={register} />
          <DiseaseHistory />
          <BodyStatus />
          <Habit />
        </Grid>
      </SaveDialog>
    </form>
  );
};

export default Hospitalization;
