import { initialHospitalizationSurvey } from '../../routes/Main/initialStates';

export interface IGetHospitalization {
  user_id: number;
  patient_id: number;
}

export interface ICreateHospitalization extends IGetHospitalization {
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
