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
  };
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
  };
}

// 입원간호기록지
export interface IInpomation {
  contact: string;
  name: string;
  relation: string;
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
    info_etc: string;
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
  };
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

// 낙상위험도평가도구 I
export interface IUpdateFall extends IGetSurvey {
  date: string;
  contents: string;
}

// 낙상위험 평가도구 II
export interface IUpdateFallTwo extends IGetSurvey {
  date: string;
  contents: string;
}

// 소아 낙상위험 평가
export interface IUpdatePediatric_fall extends IGetSurvey {
  date: string;
  contents: string;
}

// GCS
export interface IUpdateGCS extends IGetSurvey {
  gcs_survey: {
    eye_opening: string;
    verbal_response: string;
    motor_response: string;
  };
}

// Pediatric_GCS
export interface IUpdatePediatric_GCS extends IGetSurvey {
  pediatric_gcs_survey: {
    eye_opening: string;
    verbal_response: string;
    motor_response: string;
  };
}

// Four Score
export interface IUpdateFourScore extends IGetSurvey {
  four_score_survey: {
    eye_opening: string;
    brainstem_reflexes: string;
    motor_response: string;
    respiration: string;
  };
}

// 환자안전사고보고서
export interface IUpdateSafety extends IGetSurvey {
  safety_survey: {
    accident_consequences_details: {
      accidence_date: string;
      discovery_date: string;
      discovery_place: string;
      accident_type: string;
      accident_classification: string;
    };
    event_classification: string;
    falling_type: {
      consciousness_level: string;
      activity_status: string;
      assisting_devices: string;
      place_falling_accident: string;
      patient_risk_factors: string;
      score: number;
      date: string;
      fall_type: string;
      risk_factor: string;
    };
    medication_type: {
      prescription_error: string;
      drug_preparation_error: string;
      confirm_error: string;
      interpretation_error: string;
    };
    other_type: string;
    accident_detail: string;
    accident_handling: string;
    accident_result: string;
  };
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
  };
}

// 정신간호기록지
export interface IMentalNursingRecord {
  date: string;
  time: string;
  patient_activity: string;
  student_activity: string;
  student_rationale: string;
  evaluation: string;
  mental_nursing: string;
}

export interface IUpdateMentalNursing extends IGetSurvey {
  mental_survey: IMentalNursingRecord[];
}

// BDI
export interface IUpdateBDI extends IGetSurvey {
  bdi_survey: {
    content: number[];
    sum: number;
  };
}

// BAI
export interface IUpdateBAI extends IGetSurvey {
  bai_survey: {
    content: number[];
    sum: number;
  };
}

export interface IUpdateMMSE extends IGetSurvey {
  score: (number | undefined)[];
  sum: number;
}

// CIST
export interface IUpdateCIST extends IGetSurvey {
  cist_survey: {
    orientation1: string;
    orientation2: string;
    orientation3: string;
    orientation4: string;
    orientation5: string;
    memory1: string;
    memory2: string;
    attention1: string;
    attention2: string;
    attention3: string;
    visual_spatial_ability: string;
    executive_function1_1: string;
    executive_function1_2: string;
    executive_function1_3: string;
    memory3: string;
    memory4: string;
    language_function1: string;
    language_function2: string;
    language_function3: string;
    language_function4: string;
    executive_function2: string;
  };
}

// 수술기록지
export interface IUpdateOperation extends IGetSurvey {
  surgical_survey: {
    surgery_information: {
      operating_surgeon: string;
      assistant: string;
      scrubbing_nurse: string;
      circulating_nurse: string;
    };
    operation_information: {
      operating_department: string;
      operating_date: string;
      operating_time: string;
      asa_class: string;
      main_operation_name: string;
      minor_operation_name: string;
      past_history: string;
      allergy: string;
      npo_status: string;
      prophylactic_antibiotics: string;
      position: string;
      preoperative_xray: boolean;
      preoperative_ekg: boolean;
    };
    surgery_details: {
      content: string;
      arrival_time: string;
      anesthesia_start_time: string;
      surgery_start_time: string;
      surgery_end_time: string;
      anesthesia_end_time: string;
      discharge_time: string;
      anesthetic_method: string;
      anesthesiologist: string;
    };
  };
}

// 마취기록지
export interface IAnesthesiaPrescriptionRecord {
  time: string;
  content: string;
}

export interface IAnesthesiaVitalsignRecord {
  time: string;
  sbp: string;
  dbp: string;
  pr: string;
  rr: string;
  bt: string;
  note: string;
}

export interface IUpdateAnesthesia extends IGetSurvey {
  anesthetic_survey: {
    operation_information: {
      operating_department: string;
      operating_date: string;
      operating_time: string;
      operation_name: string;
      npo_status: string;
      position: string;
      past_history_and_allergy: string;
      preoperative_xray: boolean;
      preoperative_ekg: boolean;
      emergency_status: string;
      asa_class: string;
      prophylactic_antibiotics: string;
      prophylactic_method: string;
    };
    prescription_record: IAnesthesiaPrescriptionRecord[];
    patient_status_record: {
      infusion_amount: string;
      transfusion_amount: string;
      intake_etc: string;
      urine_amount: string;
      blood_clot_amount: string;
      output_etc: string;
    };
    patient_status_list_record: IAnesthesiaVitalsignRecord[];
  };
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
    };
    transfusion_record: IBloodRecord[];
  };
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
      ending_nurse: string;
    };
    weight_information: {
      pre_previous_weight: string;
      pre_today_weight: string;
      pre_weight_change: string;
      post_previous_weight: string;
      post_today_weight: string;
      post_weight_change: string;
    };
    dialysis_db: IDialysisRecord[];
    additional_information: string;
  };
}

// 응급기록지
export interface IUpdateEmergency extends IGetSurvey {
  emergency_register_survey: {
    emergency_information: {
      accident_date: string;
      accident_time: string;
      arrival_time: string;
      visit_method: string;
      memo: string;
    };
    emergency_patient_information: {
      symptom: string;
      etc_symptom: string;
      damage: string;
      intentional: string;
      medical_conditions: string;
      history: string;
      allergy: string;
      medication: string;
      consciousness: string;
      gcs: string;
      motor: string;
      pupil: string;
      nrs: string;
      pqrst: string;
      ktas: string;
      expected_diagnosis: string;
    };
    patient_status_record: {
      infusion_amount: string;
      transfusion_amount: string;
      intake_etc: string;
      urine_amount: string;
      blood_clot_amount: string;
      output_etc: string;
    };
    patient_status_list_record: {
      checkTime: string;
      sbp: string;
      dbp: string;
      pr: string;
      rr: string;
      bt: string;
      note: string;
    };
    emergency_care_result: {
      result: object;
      status: object;
    };
  };
}

// 분만기록지
export interface INursingRecord {
  date: string;
  time: string;
  content: string;
}

export interface IUpdateChildbirth extends IGetSurvey {
  delivery_survey: {
    child_birth_information: {
      date: string;
      time: string;
      type: string;
    };
    newborn_condition: {
      gender: number;
      weight: string;
      apgar_score1m: string;
      apgar_score5m: string;
      oxygen_intake: number;
      first_urine: number;
      placenta_discharge: number;
      fetal_staining: number;
      nuchal_cord: number;
      nuchal_cord_content: string;
      resuscitation: number;
      resuscitation_content: string;
      specifications: string;
    };
    apgar: {
      appearance: number;
      pulse: number;
      grimace: number;
      activity: number;
      respiration: number;
    };
    placenta_removal: {
      time: string;
      methods: number;
      curettage: number;
    };
    maternal_condition: {
      episiotomy: number;
      episiotomy_content: string;
      perineal_laceration: number;
      perineal_laceration_content: string;
      uterus_contraction: string;
    };
    nursing_records: INursingRecord[];
  };
}

// 가정간호 기록지
export interface IHomeCareRecord {
  date: string;
  content: string;
}

export interface IUpdateHomeCare extends IGetSurvey {
  homecare_survey: {
    basic_information: {
      occupation: string;
      insurance_type: string;
      residence: string;
      religion: string;
      nursing_provider: string;
      sanitary: string;
      marital_status: string;
      past_history: string;
      safety: string;
    };
    request_status: IHomeCareRecord[];
    inspection_findings: IHomeCareRecord[];
    medication_records: IHomeCareRecord[];
    need_service: string;
  };
}

// 식이/영양 기록지
export interface IUpdateDietNutrition extends IGetSurvey {
  dietary_survey: {
    birth: string;
    classification: number;
    select_meal: string;
    basic_meal: string;
    therapuetic_diet: {
      intestinal: string;
      kidney: string;
      liver: string;
    };
    controlled_diet: string;
    specifics: string;
  };
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
  };
}

// 낙상예방교육확인서
export interface IUpdateFallConfirm extends IGetSurvey {
  fall_confirm: {
    fall_education: string;
    signature: string;
    date: string;
    personnel_signature: string;
  };
}

// 대장 내시경
export interface IUpdateColonoscopy extends IGetSurvey {
  colono_scopy_confirmation: {
    agree_check_01: string;
    agree_check_02: string;
    patient_bday: string;
    patient_contact: string;
    patient_name: string;
    patient_sig: string;
    companion_bday: string;
    companion_contact: string;
    companion_name: string;
    companion_sig: string;
    dr_name: string;
    dr_sig: string;
  };
}

// 상부내시경
export interface IUpdateUpperEndoscopy extends IGetSurvey {
  upper_endo_scopy_confirmation: {
    agree_check: string;
    patient_bday: string;
    patient_contact: string;
    patient_name: string;
    patient_sig: string;
    companion_bday: string;
    companion_contact: string;
    companion_name: string;
    companion_sig: string;
    dr_name: string;
    dr_sig: string;
  };
}

// 비급여 동의서
export interface IUpdateNonSalary extends IGetSurvey {
  uninsured_benefit_confirmation: {
    item_01: string;
    fee_01: string;
    no_01: boolean;

    item_02: string;
    fee_02: string;
    no_02: boolean;

    item_03: string;
    fee_03: string;
    no_03: boolean;

    item_04: string;
    fee_04: string;
    no_04: boolean;

    date: string;
    name: string;
    sig: string;
  };
}

// 진료기록 열람
export interface IUpdateMedicalRecords extends IGetSurvey {
  chart_confirmation: {
    pt_name: string;
    pt_ssn: string;
    pt_addr: string;
    pt_contact: string;

    applier_name: string;
    applier_relp: string;
    applier_bday: string;
    applier_contact: string;
    applier_addr: string;

    scope_center: string;
    scope_period_from: string;
    scope_period_to: string;
    scope_reason: string;
    scope_detail: string;

    date: string;
    name: string;
    sig: string;
  };
}

// DNR
export interface IUpdateDNR extends IGetSurvey {
  advance_directive_confirmation: {
    pt_name: string;
    pt_ssn: string;
    pt_addr: string;
    pt_contact: string;

    willing: string; //호스피스 이용 의향

    explanation01: boolean;
    explanation02: boolean;
    explanation03: boolean;
    explanation04: boolean;
    explanation05: boolean;
    explanation06: boolean;

    explanation_check: string;
    explanation_check_sig_date: string;
    explanation_check_sig_name: string;
    explanation_check_sig_sig: string;

    pt_available: string;
    pt_available_etc_memo: string;

    center_name: string;
    center_location: string;
    center_consultant: string;
    center_contact: string;

    recorde_date: string;
    recorde_person_name: string;
    recorde_person_sig: string;

    register_date: string;
    register_person_name: string;
    register_person_sig: string;
  };
}

// DNA
export interface IUpdateDNA extends IGetSurvey {
  gene_test_confirmation: {
    test_object_name: string;
    test_object_ssn: string;
    test_object_addr: string;
    test_object_contact: string;

    legal_representative_name: string;
    legal_representative_ssn: string;
    legal_representative_addr: string;
    legal_representative_contact: string;

    lab_name: string;
    lab_contact: string;

    pt_purpose: string;
    pt_test: string;

    date: string;
    testee_name: string;
    testee_sig: string;
    representative_name: string;
    representative_sig: string;
    consultant_name: string;
    consultant_sig: string;
  };
}

// 간호체크리스트 ( 병동 )
export interface IUpdateCheckListRoom extends IGetSurvey {
  nursing_check_list_ward: {
    info_info01: string;
    info_info02: string;
    info_info03: string;

    info_mental01: string;

    fall01: string;
    fall02: string;
    fall03: string;
    fall04: string;
    fall05: string;

    bed_sore01: string;
    bed_sore02: string;
    bed_sore03: string;
    bed_sore04: string;
    bed_sore05: string;

    edu01: string;
    edu02: string;

    care_plan01: string;
    care_plan02: string;
    care_plan03: string;

    surgery01: string;
    surgery02: string;
    surgery03: string;

    medicine01: string;
    medicine02: string;

    hospitalization01: string;
    hospitalization02: string;
    hospitalization03: string;
    hospitalization04: string;
    hospitalization05: string;
    hospitalization06: string;
    hospitalization07: string;
    hospitalization08: string;

    ns_fall01: string;
    ns_fall02: string;

    ns_bedsore01: string;

    ns_pt_moving01: string;
    ns_pt_moving02: string;

    ns_edu01: string;

    ns_surgery01: string;

    ns_transfusion01: string;

    ns_infection01: string;

    ns_pain01: string;
    ns_pain02: string;
    ns_pain03: string;

    ns_re_pain01: string;
    ns_re_pain02: string;
    ns_re_pain03: string;
    ns_re_pain04: string;

    ns_pca01: string;
    ns_pca02: string;
    ns_pca03: string;
    ns_pca04: string;

    ns_nausea01: string;
    ns_nausea02: string;

    ns_chemo_side_eff01: string;

    ns_restraint01: string;
    ns_restraint02: string;
    ns_restraint03: string;
    ns_restraint04: string;
    ns_restraint05: string;

    ns_high_risk01: string;
    ns_high_risk02: string;

    right01: string;

    discharge01: string;
    discharge02: string;
    discharge03: string;
    discharge04: string;

    ocs01: string;
  };
}

export interface IUpdateLEFS extends IGetSurvey {
  date: string;
  contents: string;
}
