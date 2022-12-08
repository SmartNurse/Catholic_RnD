import {
  initialHospitalizationSurvey,
  initialOutHospitalSurvey,
} from '../../routes/Main/Survey/initialStates';

export interface IGetSurvey {
  user_id: number;
  patient_id: number;
}

export interface ICreateHospitalization extends IGetSurvey {
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

export interface ICreateOutHospital extends IGetSurvey {
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
export interface IMedication {
  survey_uuid: number;
  pt_medication_uuid: number;
  pt_medication_no: number;
  prescription_time: string;
  medication_name: string;
  medication_content: string;
  medication_measure: string;
  medication_amount: string;
  medication_freq: string;
  medication_note: string;
  medication_do: number;
  medication_time: string | null;
}

export interface IUpdateMedication extends IGetSurvey {
  infos: Pick<
    IMedication,
    'survey_uuid' | 'pt_medication_uuid' | 'medication_time' | 'medication_do'
  >[];
}

export interface IRadiology {
  pt_radiology_no: number;
  fee_kor: string;
  fee_eng: string;
  radiology_result: string;
  radiology_note: string;
  radiology_time: string;
  radiology_image1?: string;
  radiology_image2?: string;
  radiology_image3?: string;
  radiology_image4?: string;
  radiology_image5?: string;
  create_at: string;
  update_at: string;
}

export interface IPathology {
  pt_pathology_no: number;
  pathology_time: string;
  fee_id: string;
  fee_kor: string;
  fee_eng: string;
  pathology_result: string;
  pathology_range: string;
  pathology_note: string;
}

export interface IVitalSign {
  checkTime: string;
  sbp: number;
  dbp: number;
  pr: number;
  rr: number;
  bt: number;
  sp02: number;
  etc: string;
}

export interface IIOCheck {
  checkTime: string;
  intake: number;
  output: number;
  etc: string;
}
export interface IUpdateClinicObservation extends IGetSurvey {
  survey_uuid: string;
  vital_sign: string;
  io_check: string;
}

export interface IBedScore {
  date: string;
  contents: string;
}

export interface IUpdateBedScore extends IGetSurvey {
  date: string;
  contents: string;
}

export interface IUpdateNeeds extends IGetSurvey {
  date: string;
  body_status: string;
  disease_status: string;
  reason1: string;
  reason2: string;
}

export interface IUpdateFall extends IGetSurvey {
  date: string;
  contents: string;
}

export interface INRS {
  checkTime: string;
  painScore: number;
}

export interface IFLACC {
  checkTime: string;
  sumValue: number;
}

export interface IECardexRemark {
  date: string;
  remark: string;
}

export interface IECardexDosage {
  date: string;
  dosage: string;
  method: string;
  time: string;
  termination: string;
}

export interface IECardexLab {
  date: string;
  lab: string;
  receipt: string;
  result: string;
}

export interface IECardexImageTest {
  date: string;
  image_test: string;
  receipt: string;
  result: string;
}

export interface IBloodRecord {
  checkTime: string;
  division: string;
  sbp: string;
  dbp: string;
  pr: string;
  rr: string;
  bt: string;
  sideEffect: number;
  etc: string;
}

export interface IGlucoseRecord {
  date: string;
  time: string;
  meal: string;
  item: string;
  result: string;
}

export interface IPrescriptionRecord {
  date: string;
  time: string;
  title: string;
  content: string;
  unit: string;
  amount: string;
  count: string;
  detail: string;
  finished: boolean;
}