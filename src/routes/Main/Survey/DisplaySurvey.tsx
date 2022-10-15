import { ACTIVE_MENU, SurveyDialogProps } from './type';

import Hospitalization from './Hospitalization';
import OutHospital from './OutHospital';
import Prescription from './Prescription';
import Nurse from './Nurse';
import Medication from './Medication';
import Radiology from './Radiology';
import Pathology from './Pathology';
import BedScore from './BedScore';
import Fall from './Fall';

interface Props {
  surveyType: string;
  onCloseSaveSurvey: () => void;
  onCloseReadOnlySurvey: () => void;
  dialogProps: Omit<SurveyDialogProps<any>, 'onClose'>;
}

const DisplaySurvey = (props: Props) => {
  const { surveyType, onCloseSaveSurvey, onCloseReadOnlySurvey, dialogProps } =
    props;

  const { defaultValues } = dialogProps;

  switch (surveyType) {
    case ACTIVE_MENU.ADMISSION: {
      if (!defaultValues) return null;
      return <Hospitalization {...dialogProps} onClose={onCloseSaveSurvey} />;
    }
    case ACTIVE_MENU.DISCHARGE: {
      if (!defaultValues) return null;
      return <OutHospital {...dialogProps} onClose={onCloseSaveSurvey} />;
    }
    case ACTIVE_MENU.PRESCRIPTION: {
      return (
        <Prescription
          {...dialogProps}
          defaultValues={null}
          onClose={onCloseReadOnlySurvey}
        />
      );
    }
    case ACTIVE_MENU.NURSE: {
      return (
        <Nurse
          {...dialogProps}
          defaultValues={null}
          onClose={onCloseReadOnlySurvey}
        />
      );
    }
    case ACTIVE_MENU.DOSAGE: {
      if (!defaultValues) return null;
      return <Medication {...dialogProps} onClose={onCloseSaveSurvey} />;
    }
    case ACTIVE_MENU.IMAGING: {
      if (!defaultValues) return null;
      return <Radiology {...dialogProps} onClose={onCloseReadOnlySurvey} />;
    }
    case ACTIVE_MENU.CLINICAL_PATHOLOGY: {
      if (!defaultValues) return null;
      return <Pathology {...dialogProps} onClose={onCloseReadOnlySurvey} />;
    }
    case ACTIVE_MENU.RISK_OF_BEDSORES: {
      if (!defaultValues) return null;
      return (
        <BedScore
          {...dialogProps}
          defaultValues={defaultValues}
          onClose={onCloseSaveSurvey}
        />
      );
    }
    case ACTIVE_MENU.FALL_RISK_ASSESSMENT: {
      if (!defaultValues) return null;
      return <Fall {...dialogProps} onClose={onCloseSaveSurvey} />;
    }
    default:
      return null;
  }
};

export default DisplaySurvey;
