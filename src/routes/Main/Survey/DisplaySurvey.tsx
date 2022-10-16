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
  onCloseSave: () => void;
  onCloseReadOnly: () => void;
  dialogProps: Omit<SurveyDialogProps<any>, 'onClose'>;
}

const DisplaySurvey = (props: Props) => {
  const { surveyType, onCloseSave, onCloseReadOnly, dialogProps } = props;

  const { defaultValues } = dialogProps;

  switch (surveyType) {
    case MENU.HOSPITALIZATION: {
      if (!defaultValues) return null;
      return <Hospitalization {...dialogProps} onClose={onCloseSave} />;
    }
    case MENU.OUT_HOSPITAL: {
      if (!defaultValues) return null;
      return <OutHospital {...dialogProps} onClose={onCloseSave} />;
    }
    case MENU.PRESCRIPTION: {
      return <Prescription {...dialogProps} onClose={onCloseReadOnly} />;
    }
    case MENU.NURSE: {
      return <Nurse {...dialogProps} onClose={onCloseReadOnly} />;
    }
    case MENU.MEDICATION: {
      if (!defaultValues) return null;
      return <Medication {...dialogProps} onClose={onCloseSave} />;
    }
    case MENU.RADIOLOGY: {
      if (!defaultValues) return null;
      return <Radiology {...dialogProps} onClose={onCloseReadOnly} />;
    }
    case MENU.PATHOLOGY: {
      if (!defaultValues) return null;
      return <Pathology {...dialogProps} onClose={onCloseReadOnly} />;
    }
    case MENU.BEDSORES: {
      if (!defaultValues) return null;
      return <BedScore {...dialogProps} onClose={onCloseSave} />;
    }
    case MENU.NEEDS: {
      if (!defaultValues) return null;
      return <Needs {...dialogProps} onClose={onCloseSave} />;
    }
    case MENU.FALL: {
      if (!defaultValues) return null;
      return <Fall {...dialogProps} onClose={onCloseSave} />;
    }
    default:
      return null;
  }
};

export default DisplaySurvey;
