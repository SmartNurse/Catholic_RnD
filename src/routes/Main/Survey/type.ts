import { IPatientInfo } from 'apis/admin/type';
import { SurveyFormProps } from 'components/MuiDialog/SurveyForm';
import {
  initialECardex,
  initialTakingOver,
  initialOutHospitalSurvey,
  initialHospitalizationSurvey,
  initialMedicationSurvey,
  initialRadiology,
  initialPathology,
  initialBedScore,
  initialFall,
  initialNeeds,
  initialClinicalObservation,
  initialGlucose,
  initialNRS,
  initialFLACC,
  initialCNPS,
  initialMentalNursing,
  initialBAI,
  initialOperation,
  initialAnesthesia,
  initialTransfusion,
  initialDialysis,
  initialEmergency,
  initialChildbirth,
  initialDietNutrition,
  initialHospitalConfirm,
  initialFallConfirm,
  initialCoreNursingSkillVideo,
} from './initialStates';

export enum MENU {
  E_CARDEX = 'e-CARDEX',
  TAKING_OVER = '간호 인수인계',
  HOSPITALIZATION = '입원간호 기록지',
  OUT_HOSPITAL = '퇴원간호 기록지',
  PRESCRIPTION = '처방 기록지',
  NURSE = '간호 기록지',
  MEDICATION = '투약 기록지',
  RADIOLOGY = '영상검사 기록지',
  PATHOLOGY = '임상병리검사 기록지',
  CLINICAL_OBSERVATION = '임상관찰 기록지',
  GLUCOSE = '혈당 기록지',
  BEDSORES = '욕창위험도 평가도구',
  NEEDS = '욕구평가 기록지',
  FALL = '낙상위험도 평가도구',
  PAIN = '통증평가도구',
  NRS = 'NRS',
  FLACC = 'FLACC Scale',
  CNPS = 'CNPS',
  MENTAL_NURSING = '정신간호 기록지',
  BAI = 'BAI',
  COGNITIVE_FUNCTION = '인지기능검사',
  OPERATION = '수술 기록지',
  ANESTHESIA = '마취 기록지',
  TRANSFUSION = '수혈 기록지',
  DIALYSIS = '투석 기록지',
  EMERGENCY = '응급 기록지',
  CHILDBIRTH = '분만 기록지',
  DIET_NUTRITION = '식이/영양 기록지',
  AGREEMENT = '동의서',
  HOSPITAL_CONFIRM = '입원 안내 확인서',
  FALL_CONFIRM = '낙상 예방교육 확인서',
  CORE_NURSING_SKILL_VIDEO = '핵심간호술기영상 저장',
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

export type TECardexDefaultValues = typeof initialECardex;
export type TTakingOverDefaultValues = typeof initialTakingOver;
export type THospitalizationDefaultValues = typeof initialHospitalizationSurvey;
export type TOutHospitalDefaultValues = typeof initialOutHospitalSurvey;
export type TMedicationDefaultValues = typeof initialMedicationSurvey;
export type TRadiologyDefaultValues = typeof initialRadiology;
export type TPathologyDefaultValues = typeof initialPathology;
export type TClinicalObservationDefaultValues =
  typeof initialClinicalObservation;
export type TGlucoseDefaultValues = typeof initialGlucose;
export type TBedScoreDefaultValues = typeof initialBedScore;
export type TNeedsDefaultValues = typeof initialNeeds;
export type TFallDefaultValues = typeof initialFall;
export type TNRSDefaultValues = typeof initialNRS;
export type TFLACCDefaultValues = typeof initialFLACC;
export type TCNPSDefaultValues = typeof initialCNPS;
export type TMentalNursingDefaultValues = typeof initialMentalNursing;
export type TBAIDefaultValues = typeof initialBAI;
export type TOperationDefaultValues = typeof initialOperation;
export type TAnesthesiaDefaultValues = typeof initialAnesthesia;
export type TTransfusionDefaultValues = typeof initialTransfusion;
export type TDialysisDefaultValues = typeof initialDialysis;
export type TEmergencyDefaultValues = typeof initialEmergency;
export type TChildbirthDefaultValues = typeof initialChildbirth;
export type TDietNutritionDefaultValues = typeof initialDietNutrition;
export type THospitalConfirmDefaultValues = typeof initialHospitalConfirm;
export type TFallConfirmDefaultValues = typeof initialFallConfirm;
export type TCoreNursingSkillVideoDefaultValues = typeof initialCoreNursingSkillVideo;