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
import Glucose from "./Glucose";
import BedScore from './BedScore';
import BedScoreTwo from './BedScoreTwo';
import Fall from './Fall';
import FallTwo from './FallTwo';
import FallScale from './Humty Dumpty Fall Scale';
import GCS from './GCS';
import Pediatric_GCS from './Pediatric_GCS'
import FourScore from './Four Score'
import Needs from './Needs';
import Safety from './Safety';
import NRS from './Pain/NRS';
import FLACC from './Pain/FLACC';
import CNPS from "./Pain/CNPS";
import MentalNursing from './MentalHealth/MentalNursing';
import BDI from './MentalHealth/BDI';
import BAI from './MentalHealth/BAI';
import MMSE from './MentalHealth/MMSE';
import CIST from './MentalHealth/CIST';
import Operation from './Special/Operation';
import Anesthesia from './Special/Anesthesia';
import Transfusion from './Special/Transfusion';
import Dialysis from './Special/Dialysis';
import Emergency from  './Special/Emergency';
import Childbirth from './Special/Childbirth';
import HomeCare from './Special/HomeCare';
import DietNutrition from './DietNutrition';
import HospitalizationInfo from './Agreement/HospitalizationInfo';
import FallPrevention from './Agreement/FallPrevention';
import CoreNursingSkillVideo from 'routes/CoreNursingSkillVideo';
import CoreNursingSkillVideoExemple from 'routes/CoreNursingSkillVideoExemple';

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
    case MENU.GLUCOSE: {
      if (!defaultValues) return null;
      return <Glucose {...dialogProps} onClose={onCloseSave} />;
    }
    case MENU.BEDSORES: {
      if (!defaultValues) return null;
      return <BedScore {...dialogProps} onClose={onCloseSave} />;
    }
    case MENU.BEDSORESTWO: {
      if (!defaultValues) return null;
      return <BedScoreTwo {...dialogProps} onClose={onCloseSave} />;
    }
    case MENU.NEEDS: {
      if (!defaultValues) return null;
      return <Needs {...dialogProps} onClose={onCloseSave} />;
    }
    case MENU.FALL: {
      if (!defaultValues) return null;
      return <Fall {...dialogProps} onClose={onCloseSave} />;
    }
    case MENU.FALLTWO: {
      if (!defaultValues) return null;
      return <FallTwo {...dialogProps} onClose={onCloseSave} />;
    }
    case MENU.FALLSCALE: {
      if (!defaultValues) return null;
      return <FallScale {...dialogProps} onClose={onCloseSave} />;
    }
    case MENU.GCS: {
      if (!defaultValues) return null;
      return <GCS {...dialogProps} onClose={onCloseSave} />;
    }
    case MENU.Pediatric_GCS: {
      if (!defaultValues) return null;
      return <Pediatric_GCS {...dialogProps} onClose={onCloseSave} />;
    }
    case MENU.FourScore: {
      if (!defaultValues) return null;
      return <FourScore {...dialogProps} onClose={onCloseSave} />;
    }
    case MENU.SAFETY: {
      if (!defaultValues) return null;
      return <Safety {...dialogProps} onClose={onCloseSave} />;
    }
    case MENU.NRS: {
      if (!defaultValues) return null;
      return <NRS {...dialogProps} onClose={onCloseSave} />;
    }
    case MENU.FLACC: {
      if (!defaultValues) return null;
      return <FLACC {...dialogProps} onClose={onCloseSave} />;
    }
    case MENU.CNPS: {
      if (!defaultValues) return null;
      return <CNPS {...dialogProps} onClose={onCloseSave} />;
    }
    case MENU.MENTAL_NURSING: {
      if (!defaultValues) return null;
      return <MentalNursing {...dialogProps} onClose={onCloseSave} />;
    }
    case MENU.BDI: {
      if (!defaultValues) return null;
      return <BDI {...dialogProps} onClose={onCloseSave} />;
    }
    case MENU.BAI: {
      if (!defaultValues) return null;
      return <BAI {...dialogProps} onClose={onCloseSave} />;
    }
    case MENU.MMSE: {
      if (!defaultValues) return null;
      return <MMSE {...dialogProps} onClose={onCloseSave} />;
    }
    case MENU.CIST: {
      if (!defaultValues) return null;
      return <CIST {...dialogProps} onClose={onCloseSave} />;
    }  
    case MENU.OPERATION: {
      if (!defaultValues) return null;
      return <Operation {...dialogProps} onClose={onCloseSave} />;
    }
    case MENU.ANESTHESIA: {
      if (!defaultValues) return null;
      return <Anesthesia {...dialogProps} onClose={onCloseSave} />;
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
    case MENU.CHILDBIRTH: {
      if (!defaultValues) return null;
      return <Childbirth {...dialogProps} onClose={onCloseSave} />;
    }
    case MENU.HOME_CARE: {
      if (!defaultValues) return null;
      return <HomeCare {...dialogProps} onClose={onCloseSave} />;
    }
    case MENU.DIET_NUTRITION: {
      if (!defaultValues) return null;
      return <DietNutrition {...dialogProps} onClose={onCloseSave} />;
    }
    case MENU.HOSPITAL_CONFIRM: {
      if (!defaultValues) return null;
      return <HospitalizationInfo {...dialogProps} onClose={onCloseSave} />;
    }
    case MENU.FALL_CONFIRM: {
      if (!defaultValues) return null;
      return <FallPrevention {...dialogProps} onClose={onCloseSave} />;
    }
    case MENU.CORE_NURSING_SKILL_VIDEO: {
      if (!defaultValues) return null;
      return <CoreNursingSkillVideo {...dialogProps} onClose={onCloseSave} />;
    }
    case MENU.CORE_NURSING_SKILL_VIDEO_EXEMPLE: {
      if (!defaultValues) return null;
      return <CoreNursingSkillVideoExemple {...dialogProps} onClose={onCloseReadOnly} />;
    }
    default:
      return null;
  }
};

export default DisplaySurvey;
