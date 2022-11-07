import { IGetSearch } from 'apis/type';

export interface ICollege {
  college_id: number;
  college_name: string;
  college_email: string;
  college_ci: string;
}

export interface IPatient {
  patient_id: number;
  name: string;
  age: string;
  gender: 1 | 2;
  department: string;
  ward: string;
  disease_main: string;
  college: number;
}

export interface IGetPatientInfo {
  patient_id: number;
}

interface IDisease {
  disease_id: string;
  disease_kor: string;
  disease_eng: string;
}
export interface IPatientInfo extends Omit<IPatient, 'disease_main'> {
  height: string;
  weight: string;
  blood: string;
  room: string;
  main_doctor: string;
  admin_hod: number;
  admin_pod: number;
  disease_main: IDisease;
  disease_sub: IDisease[];
  medical_note: string;
}

export interface IGetPatientMemo extends IGetPatientInfo {
  user_id: number;
}

export interface IPostPatientMemo extends IGetPatientMemo {
  memo: string;
}

export interface IPatientMemo {
  memo: string;
}

export interface IGetStudentList extends IGetSearch {
  user_id: number;
}

export interface IGetCollegePatientList extends IGetStudentList {}
