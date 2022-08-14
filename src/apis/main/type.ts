export interface INames {
  kor: string;
  eng: string;
}

export interface IGetNandaClass {
  domain: string;
}

export interface IGetNandaDiagnosis extends IGetNandaClass {
  class: string;
}

export interface IContentNanda {
  domain: string;
  class: string;
  diagnosis: string;
  collectingData: string;
  nurseGoal: string;
  nursePlan: string;
  nurseInterventions: string;
  nurseEvaluation: string;
}

export interface IContentNarrativeRecord {
  narrativeNote: string;
}

export interface ICreateNursingRecord {
  userId: number;
  patientId: number;
  recordType: number;
  content: string;
}

export interface IDeleteNursingRecord {
  patient_id: number;
  user_id: number;
  record_id: number;
}

export interface IGetNursingRecords {
  patient_id: number;
  user_id: number;
  page: number;
}

export interface INursingRecord {
  content: string;
  create_at: string;
  nursing_record_id: number;
  patient_id: number;
  record_type: 0 | 1 | 2 | 3 | 4;
  user_id: number;
}
