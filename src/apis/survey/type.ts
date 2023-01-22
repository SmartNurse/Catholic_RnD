import {
  initialHospitalizationSurvey,
  initialOutHospitalSurvey,
} from '../../routes/Main/Survey/initialStates';

export interface IGetSurvey {
  user_id: number;
  patient_id: number;
}

// e-Cardex
export interface IECardexRemark {
  date: string;
  remark: string;
}

export interface IECardexDosage {
  date: string;
  medication: string;
  method: string;
  time: string;
  end: string;
}

export interface IECardexLab {
  date: string;
  lab: string;
  implementing_and_inspection: string;
  result: string;
}

export interface IECardexImagingTest {
  date: string;
  imaging_test: string;
  implementing_and_inspection: string;
  result: string;
}

export interface IUpdateECardex extends IGetSurvey {
  e_cardex_survey: {
    other_remarks: string;
    remark_data: IECardexRemark[];
    medication_data: IECardexDosage[];
    lab_data: IECardexLab[];
    imaging_test_data: IECardexImagingTest[];
    concerns: string;
    plans: string;
    evaluation: string;
  }
}

// 간호인수인계
export interface IUpdateTakingOver extends IGetSurvey {
  take_over_survey: {
    loc: string;
    vital_sign: string;
    current_condition: string;
    rbfi: string;
    reasons: string;
    intervention: string;
    other: string;
  }
}

// 입원간호기록지
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

// 퇴원간호기록지
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

// 처방기록지
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

// 영상검사기록지
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

// 임상병리검사기록지
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

// 임상관찰기록지
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

// 혈당기록지
export interface IGlucoseRecord {
  date: string;
  time: string;
  activity: string;
  category: string;
  level: string;
}

export interface IGlucosePrescriptionRecord {
  date: string;
  time: string;
  medication: string;
  content: string;
  unit: string;
  dose: string;
  administration_no: string;
  methods: string;
  completed: string;
}

export interface IUpdateGlucose extends IGetSurvey {
  blood_sugar_survey: {
    blood_sugar_log: IGlucoseRecord[];
    prescription: IGlucosePrescriptionRecord[];
  }
}

// 욕창위험도평가도구
export interface IBedScore {
  date: string;
  contents: string;
}

export interface IUpdateBedScore extends IGetSurvey {
  date: string;
  contents: string;
}

// 욕구평가기록지
export interface IUpdateNeeds extends IGetSurvey {
  date: string;
  body_status: string;
  disease_status: string;
  reason1: string;
  reason2: string;
}

// 낙상위험도평가도구
export interface IUpdateFall extends IGetSurvey {
  date: string;
  contents: string;
}

// NRS
export interface INRS {
  time: string;
  pain_score: number;
}

export interface IUpdateNRS extends IGetSurvey {
  nrs_survey: INRS[];
}

// FLACC Scale
export interface IFLACC {
  time: string;
  sum: number;
}

export interface IUpdateFLACC extends IGetSurvey {
  flacc_survey: IFLACC[];
}

// CNPS
export interface IUpdateCNPS extends IGetSurvey {
  cnps_survey: {
    face: string;
    activity: string;
    respiratory: string;
    vocalization: string;
  }
}

// 정신간호기록지
export interface IMentalNursingRecord {
  date: string;
  time: string;
  patient: string;
  student: string;
  basis: string;
  evaluation: string;
  desc: string;
}

// 마취기록지
export interface IAnesthesiaPrescriptionRecord {
  time: string;
  desc: string;
}

// 수혈기록지
export interface IBloodRecord {
  time: string;
  division: string;
  sbp: string;
  dbp: string;
  pr: string;
  rr: string;
  bt: string;
  side_effects: boolean;
  notes: string;
}

export interface IUpdateTransfusion extends IGetSurvey {
  transfusion_survey: {
    transfusion_information: {
      blood_number: string;
      blood_name: string;
      volume: string;
      arrival_time: string;
      blood_transfusion_arrival: string;
      transfusion_check1: string;
      transfusion_check2: string;
      transfusion_start_time: string;
      practitioner_start: string;
      transfusion_end_time: string;
      practitioner_end: string;
    },
    transfusion_record: IBloodRecord[];  
  }
}

// 투석기록지
export interface IDialysisRecord {
  [index: string]: string | null;
  time: string | null;
  volume: string;
  blood_flow: string;
  arterial_pressure: string;
  venous_pressure: string;
  ufr: string;
  tmp: string;
  heparin: string;
  sbp: string;
  dbp: string;
  pr: string;
  bt: string;
  rr: string;
}

export interface IUpdateDialysis extends IGetSurvey {
  hemodialysis_survey: {
    dialysis_information: {
      date: string;
      time: string;
      visiting_route: string;
      dialysis_machine: string;
      dialyzer: string;
      dialysate: string;
      vascular_access: string;
      starting_nurse: string;
      ending_nurse:string;
    },
    weight_information: {
      pre_previous_weight: string;
      pre_today_weight: string;
      pre_weight_change: string;
      post_previous_weight: string;
      post_today_weight: string;
      post_weight_change: string;
    },
    dialysis_db: IDialysisRecord[];
    additional_information: string;
  }
}

// 분만기록지
export interface INursingRecord {
  date: string;
  time: string;
  desc: string;
}

// 입원안내확인서
export interface IUpdateHospitalConfirm extends IGetSurvey {
  hospital_confirm: {
    nursing_care: string;
    facilities_in: string;
    name: string;
    relationship: string;
    signature: string;
    date: string;
    personnel_signature: string;
  }
}

// 낙상예방교육확인서
export interface IUpdateFallConfirm extends IGetSurvey {
  fall_confirm: {
    fall_education: string;
    signature: string;
    date: string;
    personnel_signature: string;
  }
}