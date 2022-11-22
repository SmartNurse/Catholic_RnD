import { IPatientInfo } from 'apis/admin/type';
import { SurveyFormProps } from 'components/MuiDialog/SurveyForm';
import {
  initialOutHospitalSurvey,
  initialHospitalizationSurvey,
  initialMedicationSurvey,
  initialRadiology,
  initialPathology,
  initialBedScore,
  initialFall,
  initialNeeds,
  initialClinicalObservation,
  initialNRS,
  initialFLACC,
  initialDietNutrition
} from './initialStates';

export enum MENU {
  HOSPITALIZATION = '입원간호 기록지',
  OUT_HOSPITAL = '퇴원간호 기록지',
  PRESCRIPTION = '처방 기록지',
  NURSE = '간호 기록지',
  MEDICATION = '투약 기록지',
  RADIOLOGY = '영상검사 기록지',
  PATHOLOGY = '임상병리검사 기록지',
  CLINICAL_OBSERVATION = '임상관찰 기록지',
  BEDSORES = '욕창위험도 평가도구',
  NEEDS = '욕구평가 기록지',
  FALL = '낙상위험도 평가도구',
  PAIN = '통증평가도구',
  NRS = 'NRS',
  FLACC = 'FLACC Scale',
  COGNITIVE_FUNCTION = '인지기능검사',
  DIET_NUTRITION = '식이/영양 기록지',
  AGREEMENT = '동의서',
}

export enum RECORD_TYPE {
  NANDA = '0',
  SOAPIE = '1',
  FOCUS_DAR = '2',
  NARRATIVE_RECORD = '3',
  REMARKS = '4',
}

export interface SurveyDialogProps<T>
  extends Omit<SurveyFormProps, 'children'> {
  user_id: number;
  nurseName: string;
  patientInfo: IPatientInfo;
  disabled?: boolean;
  defaultValues: T;
}

export type THospitalizationDefaultValues = typeof initialHospitalizationSurvey;
export type TOutHospitalDefaultValues = typeof initialOutHospitalSurvey;
export type TMedicationDefaultValues = typeof initialMedicationSurvey;
export type TRadiologyDefaultValues = typeof initialRadiology;
export type TPathologyDefaultValues = typeof initialPathology;
export type TClinicalObservationDefaultValues =
  typeof initialClinicalObservation;
export type TBedScoreDefaultValues = typeof initialBedScore;
export type TNeedsDefaultValues = typeof initialNeeds;
export type TFallDefaultValues = typeof initialFall;
export type TNRSDefaultValues = typeof initialNRS;
export type TFLACCDefaultValues = typeof initialFLACC;
export type TDietNutritionDefaultValues = typeof initialDietNutrition;