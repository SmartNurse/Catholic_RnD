import {
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';
import { IPatientInfo } from '../../apis/admin/type';
import { SaveDialogProps } from '../../components/SaveDialog/SaveDialog';

export enum ACTIVE_MENU {
  ADMISSION = '입원간호 기록지',
  DISCHARGE = '퇴원간호 기록지',
  PRESCRIPTION = '처방 기록지',
  NURSE = '간호 기록지',
  DOSAGE = '투약 기록지',
  IMAGING = '영상검사 기록지',
  CLINICAL_PATHOLOGY = '임상병리검사 기록지',
  CLINICAL_OBSERVATION = '임상관찰 기록지',
  RISK_OF_BEDSORES = '욕창위험도 평가도구',
  NEEDS_ASSESSMENT = '욕구평가 기록지',
  FALL_RISK_ASSESSMENT = '낙상위험도 평가도구',
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

export interface FormProps<T = any> {
  register: UseFormRegister<T>;
  watch?: UseFormWatch<T>;
  getValues?: UseFormGetValues<T>;
  setValue?: UseFormSetValue<T>;
}

export interface SurveyDialogProps<T>
  extends Omit<SaveDialogProps, 'children'> {
  nurseName: string;
  patientInfo: IPatientInfo;
  defaultValues: T;
}

export interface HospitalizationSurveyDefaultValues {
  offer: string;
  contacts: {
    contact: string;
    name: string;
    relation: string;
  }[];
  disease_history: {
    history: string;
    operation_history: string;
    latest_medicine: string;
    family_history: string;
    medicine_allergy: string;
    allergy: string;
    food_allergy: string;
  };
  body_status: {
    cycle: string;
    breath: string;
    camouflage: string;
    nerve: string;
    skin: string;
    operation_history: string;
    medicine_history: string;
    fall: string;
    yukchang: string;
    fain: string;
  };
  habit: {
    feces: string;
    feces_info: string;
    urine: string;
    urine_info: string;
    drink: string;
    smoke: string;
    sleep: string;
    nutrition: string;
    obstetric: string;
  };
  functional_evaluation: {
    sit: string;
    stand_up: string;
    wheel_chair: string;
    walk: string;
  };
  social_history: {
    marry: string;
    language: string;
    job: string;
    religion: string;
  };
  economy_history: {
    counseling: string;
    mind_status: string;
  };
  education: {
    education_way: string;
    education_contents: string;
  };
  out_hospital_plan: {
    life: string;
    guardian: string;
    destination: string;
  };
  default_info: {
    hospitalization_path: string;
    hospitalization_path_input: string;
    hospitalization_way: string;
    status: string;
    joo_ho_so: string;
    date: string;
    hospitalization_reason: string;
    height: string;
    weight: string;
    status02: string;
    SBP: string;
    DBP: string;
    PR: string;
    RR: string;
    BT: string;
    Sp02: string;
  };
}
