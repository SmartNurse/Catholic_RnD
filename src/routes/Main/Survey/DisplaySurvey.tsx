import { MENU, SurveyDialogProps } from './type';

import ECardex from './ECardex';
import TakingOver from './TakingOver';
import Hospitalization from './Hospitalization';
import OutHospital from './OutHospital';
import Prescription from './Prescription';
import Nurse from './Nurse';
import Medication from './Medication';
import Radiology from './Radiology';
import Pathology from './Pathology';
import ClinicalObservation from './ClinicalObservation';
import BedScore from './BedScore';
import Fall from './Fall';
import Needs from './Needs';
import NRS from './Pain/NRS';
import FLACC from './Pain/FLACC';
import Operation from './Special/Operation';
import Transfusion from './Special/Transfusion';
import Dialysis from './Special/Dialysis';
import Emergency from  './Special/Emergency';
import DietNutrition from './DietNutrition';

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
    case MENU.E_CARDEX: {
      if (!defaultValues) return null;
      return <ECardex {...dialogProps} onClose={onCloseSave} />;
    }
    case MENU.TAKING_OVER: {
      if (!defaultValues) return null;
      return <TakingOver {...dialogProps} onClose={onCloseSave} />;
    }
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
    case MENU.CLINICAL_OBSERVATION: {
      if (!defaultValues) return null;
      return <ClinicalObservation {...dialogProps} onClose={onCloseSave} />;
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
    case MENU.NRS: {
      if (!defaultValues) return null;
      return <NRS {...dialogProps} onClose={onCloseSave} />;
    }
    case MENU.FLACC: {
      if (!defaultValues) return null;
      return <FLACC {...dialogProps} onClose={onCloseSave} />;
    }
    case MENU.OPERATION: {
      if (!defaultValues) return null;
      return <Operation {...dialogProps} onClose={onCloseSave} />;
    }
    case MENU.TRANSFUSION: {
      if (!defaultValues) return null;
      return <Transfusion {...dialogProps} onClose={onCloseSave} />;
    }
    case MENU.DIALYSIS: {
      if (!defaultValues) return null;
      return <Dialysis {...dialogProps} onClose={onCloseSave} />;
    }
    case MENU.EMERGENCY: {
      if (!defaultValues) return null;
      return <Emergency {...dialogProps} onClose={onCloseSave} />;
    }
    case MENU.DIET_NUTRITION: {
      if (!defaultValues) return null;
      return <DietNutrition {...dialogProps} onClose={onCloseSave} />;
    }
    default:
      return null;
  }
};

export default DisplaySurvey;
