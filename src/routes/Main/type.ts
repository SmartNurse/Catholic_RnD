import {
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';
import { IPatientInfo } from '../../apis/admin/type';
import { SaveDialogProps } from '../../components/SaveDialog/SaveDialog';
import {
  initialHospitalizationSurvey,
  initialOutHospitalSurvey,
} from './initialStates';

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

export interface FormProps {
  register: UseFormRegister<any>;
  setValue?: UseFormSetValue<any>;
  getValues?: UseFormGetValues<any>;
  watch?: UseFormWatch<any>;
}

export interface IFormRegister {
  register: UseFormRegister<any>;
}

export interface IFormValues {
  setValue: UseFormSetValue<any>;
  getValues: UseFormGetValues<any>;
}

export interface IFormWatch {
  watch: UseFormWatch<any>;
}

export interface SurveyDialogProps<T>
  extends Omit<SaveDialogProps, 'children'> {
  user_id: number;
  nurseName: string;
  patientInfo: IPatientInfo;
  defaultValues: T;
}

export type THospitalizationSurveyDefaultValues =
  typeof initialHospitalizationSurvey;

export type TOutHospitalSurveyDefaultValues = typeof initialOutHospitalSurvey;
