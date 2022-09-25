import {
  initialHospitalizationSurvey,
  initialOutHospitalSurvey,
} from '../../routes/Main/initialStates';

interface GetSurvey {
  user_id: number;
  patient_id: number;
}

export interface IGetHospitalization extends GetSurvey {}

export interface ICreateHospitalization extends GetSurvey {
  hospitalization_survey: {
    patient_name: string;
    age: string;
    gender: number;
    department: string;
    user_name: string;
    main_doctor: string;
    offer: typeof initialHospitalizationSurvey.offer;
    contacts: typeof initialHospitalizationSurvey.contacts;
    disease_history: object;
    body_status: object;
    habit: object;
    functional_evaluation: object;
    economy_history: object;
    education: object;
    out_hospital_plan: object;
    default_info: object;
    social_history: object;
  };
}

export interface IGetOutHospital extends GetSurvey {}

export interface ICreateOutHospital extends GetSurvey {
  out_hospital_survey: {
    patient_name: string;
    patient_id: number;
    date: string;
    default_info: object;
    out_hospital_medicines: typeof initialOutHospitalSurvey.out_hospital_medicines;
    out_patients: typeof initialOutHospitalSurvey.out_patients;
    check_reservations: typeof initialOutHospitalSurvey.check_reservations;
    education: string;
  };
}
export interface IGetMedication extends GetSurvey {}
export interface IMedication {
  patient_id: number;
  survey_uuid: number;
  pt_medication_no: number;
  medication_name: string;
  medication_content: string;
  medication_measure: string;
  medication_amount: string;
  medication_freq: string;
  medication_note: string;
  prescription_time: string;
  medication_time: string | null;
  medication_do: number;
}

export interface IUpdateMedication extends GetSurvey {
  infos: Pick<
    IMedication,
    'survey_uuid' | 'pt_medication_no' | 'medication_time' | 'medication_do'
  >[];
}
