import { MENU, SurveyDialogProps } from './type';

import Hospitalization from './Hospitalization';
import OutHospital from './OutHospital';
import Prescription from './Prescription';
import Nurse from './Nurse';
import Medication from './Medication';
import Radiology from './Radiology';
import Pathology from './Pathology';
import BedScore from './BedScore';
import Fall from './Fall';
import Needs from './Needs';

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
    case MENU.HOSPITALIZATION: {
      if (!defaultValues) return null;
      return <Hospitalization {...dialogProps} onClose={onCloseSaveSurvey} />;
    }
    case MENU.OUT_HOSPITAL: {
      if (!defaultValues) return null;
      return <OutHospital {...dialogProps} onClose={onCloseSaveSurvey} />;
    }
    case MENU.PRESCRIPTION: {
      return (
        <Prescription
          {...dialogProps}
          defaultValues={null}
          onClose={onCloseReadOnlySurvey}
        />
      );
    }
    case MENU.NURSE: {
      return (
        <Nurse
          {...dialogProps}
          defaultValues={null}
          onClose={onCloseReadOnlySurvey}
        />
      );
    }
    case MENU.MEDICATION: {
      if (!defaultValues) return null;
      return <Medication {...dialogProps} onClose={onCloseSaveSurvey} />;
    }
    case MENU.RADIOLOGY: {
      if (!defaultValues) return null;
      return <Radiology {...dialogProps} onClose={onCloseReadOnlySurvey} />;
    }
    case MENU.PATHOLOGY: {
      if (!defaultValues) return null;
      return <Pathology {...dialogProps} onClose={onCloseReadOnlySurvey} />;
    }
    case MENU.BEDSORES: {
      if (!defaultValues) return null;
      return <BedScore {...dialogProps} onClose={onCloseSaveSurvey} />;
    }
    case MENU.NEEDS: {
      console.log(defaultValues);
      if (!defaultValues) return null;
      return <Needs {...dialogProps} onClose={onCloseSaveSurvey} />;
    }
    case MENU.FALL: {
      if (!defaultValues) return null;
      return <Fall {...dialogProps} onClose={onCloseSaveSurvey} />;
    }
    default:
      return null;
  }
};

export default DisplaySurvey;
