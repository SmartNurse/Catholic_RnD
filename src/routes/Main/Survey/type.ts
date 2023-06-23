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
  initialBedScoreTwo,
  initialFall,
  initialFallTwo,
  initialPediatric_fall,
  initialGCS,
  initialPediatric_GCS,
  initialNeeds,
  initialClinicalObservation,
  initialGlucose,
  initialSafety,
  initialNRS,
  initialFLACC,
  initialCNPS,
  initialMentalNursing,
  initialBDI,
  initialBAI,
  initialMMSE,
  initialCIST,
  initialOperation,
  initialAnesthesia,
  initialTransfusion,
  initialDialysis,
  initialEmergency,
  initialChildbirth,
  initialHomeCare,
  initialDietNutrition,
  initialHospitalConfirm,
  initialFallConfirm,
  initialColonoscopy,
  initialUpperEndoscopy,
  initialNonSalary,
  initialMedicalRecords,
  initialDNR,
  initialDNA,
  initialCoreNursingSkillVideo,
  initialCoreNursingSkillVideoExemple,
  initialFourScore,
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
  BEDSORES = '욕창위험 평가도구 I',
  BEDSORESTWO = '욕창위험 평가도구 II',
  NEEDS = '욕구평가 기록지',
  FALL = '낙상위험 평가도구 I',
  FALLTWO = '낙상위험 평가도구 II',
  FALLSCALE = '소아 낙상위험 평가',
  GCS = 'GCS',
  Pediatric_GCS = 'Pediatric GCS',
  FourScore = 'FOUR Score',
  PAIN = '통증평가도구',
  SAFETY = '환자안전사고보고서',
  NRS = 'NRS',
  FLACC = 'FLACC Scale',
  CNPS = 'CNPS',
  MENTAL_NURSING = '정신간호 기록지',
  BDI = 'BDI',
  BAI = 'BAI',
  MMSE = 'MMSE-K',
  CIST = 'CIST',
  COGNITIVE_FUNCTION = '인지기능검사',
  OPERATION = '수술 기록지',
  ANESTHESIA = '마취 기록지',
  TRANSFUSION = '수혈 기록지',
  DIALYSIS = '투석 기록지',
  EMERGENCY = '응급 기록지',
  CHILDBIRTH = '분만 기록지',
  HOME_CARE = '가정간호 기록지',
  DIET_NUTRITION = '식이/영양 기록지',
  AGREEMENT = '동의서',
  HOSPITAL_CONFIRM = '입원 안내 확인서',
  FALL_CONFIRM = '낙상 예방교육 확인서',
  COLONOSCOPY = '대장내시경 동의서',
  UPPER_ENDOSCOPY = '상부내시경 동의서',
  NONSALARY = '비급여진료비동의서',
  MEDICALRECORDS = '진료기록 열람, \n사본발급 동의서',
  DNR = '사전연명의료의향서',
  DNA = '유전자검사 동의서',
  CORE_NURSING_SKILL_VIDEO = '핵심간호술기영상 저장',
  CORE_NURSING_SKILL_VIDEO_EXEMPLE = '핵심간호술기영상 예시',
  NURSE_RECORD = '간호기록체크리스트',
  WODR = '병동',
  ER = '응급실',
  OP = '수술실',
  DRUG_CALCULATOR = '약물계산기',
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
export type TBedScoreTwoDefaultValues = typeof initialBedScoreTwo;
export type TNeedsDefaultValues = typeof initialNeeds;
export type TFallDefaultValues = typeof initialFall;
export type TGCSDefaultValues = typeof initialGCS;
export type TPediaTric_GCSDefaultValues = typeof initialPediatric_GCS;
export type TFourScoreDefaultValues = typeof initialFourScore;
export type TFallTwoDefaultValues = typeof initialFallTwo;
export type TPediatric_fallDefaultValues = typeof initialPediatric_fall;
export type TSafetyDefaultValues = typeof initialSafety;
export type TNRSDefaultValues = typeof initialNRS;
export type TFLACCDefaultValues = typeof initialFLACC;
export type TCNPSDefaultValues = typeof initialCNPS;
export type TMentalNursingDefaultValues = typeof initialMentalNursing;
export type TBDIDefaultValues = typeof initialBDI;
export type TBAIDefaultValues = typeof initialBAI;
export type TMMSEDefaultValues = typeof initialMMSE;
export type TCISTDefaultValues = typeof initialCIST;
export type TOperationDefaultValues = typeof initialOperation;
export type TAnesthesiaDefaultValues = typeof initialAnesthesia;
export type TTransfusionDefaultValues = typeof initialTransfusion;
export type TDialysisDefaultValues = typeof initialDialysis;
export type TEmergencyDefaultValues = typeof initialEmergency;
export type TChildbirthDefaultValues = typeof initialChildbirth;
export type THomeCareDefaultValues = typeof initialHomeCare;
export type TDietNutritionDefaultValues = typeof initialDietNutrition;
export type THospitalConfirmDefaultValues = typeof initialHospitalConfirm;
export type TFallConfirmDefaultValues = typeof initialFallConfirm;
export type TColonoscopyDefaultValues = typeof initialColonoscopy;
export type TUpperEndoscopyDefaultValues = typeof initialUpperEndoscopy;
export type TNonSalaryDefaultValues = typeof initialNonSalary;
export type TMedicalRecordDefaultValues = typeof initialMedicalRecords;
export type TDNRDefaultValues = typeof initialDNR;
export type TDNADefaultValues = typeof initialDNA;

export type TCoreNursingSkillVideoDefaultValues =
  typeof initialCoreNursingSkillVideo;
export type TCoreNursingSkillVideoDeExemplefaultValues =
  typeof initialCoreNursingSkillVideoExemple;
