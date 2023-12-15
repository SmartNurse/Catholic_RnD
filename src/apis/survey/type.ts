import {
  initialHospitalizationSurvey,
  initialOutHospitalSurvey,
} from '../../routes/Main/Survey/initialStates';

export interface IGetSurvey {
  user_id: number;
  patient_id: number;
}

export interface IGetSearchSurvey {
  user_id: number;
  searchType?: string | (string | null)[] | null;
  keyword?: string | (string | null)[] | null;
  patient_id?: string | (string | null)[] | null;
  page?: string | (string | null)[] | null;
  sort_method?: string | (string | null)[] | null;
  year?: string | (string | null)[] | null;
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

    contact1: typeof initialHospitalizationSurvey.contact1;
    contact2: typeof initialHospitalizationSurvey.contact2;
    contact3: typeof initialHospitalizationSurvey.contact3;

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
export interface IUpdateClinicObservation extends IGetSurvey {
  catholic_clinical_observation: {
    vital_sign: {
      // v/s 첫열
      date: string;
      // v/s 두번째열
      time: string;
      sbp: string;
      dbp: string;
      pr: string;
      rr: string;
      bt: string;
      spo2: string;
      o2: string;
      etc: string;
    };
    weight_height: {
      weight: string;
      height: string;
    };
    intake: {
      oral: string;
      veinal: string;
      blood_and_more: string;
      total: string;
    };
    output: {
      urine: string;
      vomit: string;
      stool: string;
      drainage: string;
      total: string;
    };
    position_change: {
      do_or_not: string;
      position: string;
      condition: string;
    };
    restraint: {
      date: string;
      reason: string;
      part: string;
      condition: string;
      cyanosis: string;
      temp: string;
      sense: string;
      adverse_reaction: string;
      prevention: string;
    };
    ipc: string;
    vent: {
      date: string;
      mode: string;
      fio2: string;
      peep: string;
      f: string;
      vsennse: string;
      pi: string;
      ti: string;
      tv: string;
      mv: string;
      cstat: string;
      pf_ration: string;
    };
    crrt: {
      mode: string;
      blood_flow: string;
      dialysate: string;
      pre: string;
      post: string;
      pbp: string;
      pt_fluid_rmv: string;
      anti_coagulation: string;
      crrt_ck: string;
      access_prs: string;
      return_prs: string;
      filter_prs: string;
      effluent_prs: string;
      tmp_prs: string;
      prs_drop: string;
    };
  };
}

// 정신간호기록지
export interface IIORCheckCord {
  date: string;
  duty: string;
  input1: string;
  input2: number;
  input3: string;
  input4: number;
  input5: string;
  input6: number;

  inputTwo1: string;
  inputTwo2: number;
  inputTwo3: string;
  inputTwo4: number;
  inputTwo5: string;
  inputTwo6: number;

  inputThree1: string;
  inputThree2: number;
  inputThree3: string;
  inputThree4: number;
  inputThree5: string;
  inputThree6: number;

  inputFour1: string;
  inputFour2: number;
  inputFour3: string;
  inputFour4: number;
  inputFour5: string;
  inputFour6: number;

  inputFive1: string;
  inputFive2: number;
  inputFive3: string;
  inputFive4: number;
  inputFive5: string;
  inputFive6: number;

  total: number;

  output1: string;
  output2: number;
  output3: string;
  output4: number;
  output5: string;
  output6: number;

  outputTwo1: string;
  outputTwo2: number;
  outputTwo3: string;
  outputTwo4: number;
  outputTwo5: string;
  outputTwo6: number;

  outputThree1: string;
  outputThree2: number;
  outputThree3: string;
  outputThree4: number;
  outputThree5: string;
  outputThree6: number;

  outputFour1: string;
  outputFour2: number;
  outputFour3: string;
  outputFour4: number;
  outputFour5: string;
  outputFour6: number;

  outputFive1: string;
  outputFive2: number;
  outputFive3: string;
  outputFive4: number;
  outputFive5: string;
  outputFive6: number;
}

export interface IUpdateIONursing extends IGetSurvey {
  io_survey: IIORCheckCord[];
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
  date: string;
  time: string;
  pain_score: number;
  pain_character: string;
}

export interface IUpdateNRS extends IGetSurvey {
  catholic_nrs_survey: INRS[];
}

// FLACC Scale
export interface IFLACC {
  date: string;
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
      blood_product: string;
      pre_dose: string;
      irradiation: string;
      filtering: string;
      education: string;
      confirm_transfusion: string;
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
      nursing_implementation: string;
    };
    transfusion_record: IBloodRecord[];
  };
}

// CPR 기록지
export interface IUpdateCPR extends IGetSurvey {
  catholic_cpr_survey: {
    update_at: string;
    find_date: string;
    find_time: string;
    terminate_reason: string;
    clinical_observation: {
      [key: string]: string;
      bp0: string;
      hr0: string;
      rr0: string;
      bt0: string;
      spo20: string;
      consciousness0: string;
      pupil_size0: string;
      pupil_reflex0: string;
      cardio_ryt0: string;
      bp1: string;
      hr1: string;
      rr1: string;
      bt1: string;
      spo21: string;
      consciousness1: string;
      pupil_size1: string;
      pupil_reflex1: string;
      cardio_ryt1: string;
      bp2: string;
      hr2: string;
      rr2: string;
      bt2: string;
      spo22: string;
      consciousness2: string;
      pupil_size2: string;
      pupil_reflex2: string;
      cardio_ryt2: string;
      bp3: string;
      hr3: string;
      rr3: string;
      bt3: string;
      spo23: string;
      consciousness3: string;
      pupil_size3: string;
      pupil_reflex3: string;
      cardio_ryt3: string;
      bp4: string;
      hr4: string;
      rr4: string;
      bt4: string;
      spo24: string;
      consciousness4: string;
      pupil_size4: string;
      pupil_reflex4: string;
      cardio_ryt4: string;
      bp5: string;
      hr5: string;
      rr5: string;
      bt5: string;
      spo25: string;
      consciousness5: string;
      pupil_size5: string;
      pupil_reflex5: string;
      cardio_ryt5: string;
      bp6: string;
      hr6: string;
      rr6: string;
      bt6: string;
      spo26: string;
      consciousness6: string;
      pupil_size6: string;
      pupil_reflex6: string;
      cardio_ryt6: string;
      bp7: string;
      hr7: string;
      rr7: string;
      bt7: string;
      spo27: string;
      consciousness7: string;
      pupil_size7: string;
      pupil_reflex7: string;
      cardio_ryt7: string;
      bp8: string;
      hr8: string;
      rr8: string;
      bt8: string;
      spo28: string;
      consciousness8: string;
      pupil_size8: string;
      pupil_reflex8: string;
      cardio_ryt8: string;
      bp9: string;
      hr9: string;
      rr9: string;
      bt9: string;
      sp929: string;
      consciousness9: string;
      pupil_size9: string;
      pupil_reflex9: string;
      cardio_ryt9: string;
      bp10: string;
      hr10: string;
      rr10: string;
      bt10: string;
      spo210: string;
      consciousness10: string;
      pupil_size10: string;
      pupil_reflex10: string;
      cardio_ryt10: string;
      bp11: string;
      hr11: string;
      rr11: string;
      bt11: string;
      spo211: string;
      consciousness11: string;
      pupil_size11: string;
      pupil_reflex11: string;
      cardio_ryt11: string;
      bp12: string;
      hr12: string;
      rr12: string;
      bt12: string;
      spo212: string;
      consciousness12: string;
      pupil_size12: string;
      pupil_reflex12: string;
      cardio_ryt12: string;
      bp13: string;
      hr13: string;
      rr13: string;
      bt13: string;
      spo213: string;
      consciousness13: string;
      pupil_size13: string;
      pupil_reflex13: string;
      cardio_ryt13: string;
      bp14: string;
      hr14: string;
      rr14: string;
      bt14: string;
      spo214: string;
      consciousness14: string;
      pupil_size14: string;
      pupil_reflex14: string;
      cardio_ryt14: string;
      bp15: string;
      hr15: string;
      rr15: string;
      bt15: string;
      spo215: string;
      consciousness15: string;
      pupil_size15: string;
      pupil_reflex15: string;
      cardio_ryt15: string;
      bp16: string;
      hr16: string;
      rr16: string;
      bt16: string;
      spo216: string;
      consciousness16: string;
      pupil_size16: string;
      pupil_reflex16: string;
      cardio_ryt16: string;
      bp17: string;
      hr17: string;
      rr17: string;
      bt17: string;
      spo217: string;
      consciousness17: string;
      pupil_size17: string;
      pupil_reflex17: string;
      cardio_ryt17: string;
      bp18: string;
      hr18: string;
      rr18: string;
      bt18: string;
      spo218: string;
      consciousness18: string;
      pupil_size18: string;
      pupil_reflex18: string;
      cardio_ryt18: string;
      bp19: string;
      hr19: string;
      rr19: string;
      bt19: string;
      sp9219: string;
      consciousness19: string;
      pupil_size19: string;
      pupil_reflex19: string;
      cardio_ryt19: string;
      bp20: string;
      hr20: string;
      rr20: string;
      bt20: string;
      spo220: string;
      consciousness20: string;
      pupil_size20: string;
      pupil_reflex20: string;
      cardio_ryt20: string;
      bp21: string;
      hr21: string;
      rr21: string;
      bt21: string;
      spo221: string;
      consciousness21: string;
      pupil_size21: string;
      pupil_reflex21: string;
      cardio_ryt21: string;
    };
    treatment: {
      [key: string]: string;
      chest_compression0: string;
      artificial_ventilation0: string;
      aed0: string;
      chest_compression1: string;
      artificial_ventilation1: string;
      aed1: string;
      chest_compression2: string;
      artificial_ventilation2: string;
      aed2: string;
      chest_compression3: string;
      artificial_ventilation3: string;
      aed3: string;
      chest_compression4: string;
      artificial_ventilation4: string;
      aed4: string;
      chest_compression5: string;
      artificial_ventilation5: string;
      aed5: string;
      chest_compression6: string;
      artificial_ventilation6: string;
      aed6: string;
      chest_compression7: string;
      artificial_ventilation7: string;
      aed7: string;
      chest_compression8: string;
      artificial_ventilation8: string;
      aed8: string;
      chest_compression9: string;
      artificial_ventilation9: string;
      aed9: string;
      chest_compression10: string;
      artificial_ventilation10: string;
      aed10: string;
      chest_compression11: string;
      artificial_ventilation11: string;
      aed11: string;
      chest_compression12: string;
      artificial_ventilation12: string;
      aed12: string;
      chest_compression13: string;
      artificial_ventilation13: string;
      aed13: string;
      chest_compression14: string;
      artificial_ventilation14: string;
      aed14: string;
      chest_compression15: string;
      artificial_ventilation15: string;
      aed15: string;
      chest_compression16: string;
      artificial_ventilation16: string;
      aed16: string;
      chest_compression17: string;
      artificial_ventilation17: string;
      aed17: string;
      chest_compression18: string;
      artificial_ventilation18: string;
      aed18: string;
      chest_compression19: string;
      artificial_ventilation19: string;
      aed19: string;
      chest_compression20: string;
      artificial_ventilation20: string;
      aed20: string;
      chest_compression21: string;
      artificial_ventilation21: string;
      aed21: string;
    };
    intubation: {
      [key: string]: string;
      id0: string;
      depth0: string;
      balloon0: string;
      times0: string;
      practitioner0: string;
      id1: string;
      depth1: string;
      balloon1: string;
      times1: string;
      practitioner1: string;
      id2: string;
      depth2: string;
      balloon2: string;
      times2: string;
      practitioner2: string;
      id3: string;
      depth3: string;
      balloon3: string;
      times3: string;
      practitioner3: string;
      id4: string;
      depth4: string;
      balloon4: string;
      times4: string;
      practitioner4: string;
      id5: string;
      depth5: string;
      balloon5: string;
      times5: string;
      practitioner5: string;
      id6: string;
      depth6: string;
      balloon6: string;
      times6: string;
      practitioner6: string;
      id7: string;
      depth7: string;
      balloon7: string;
      times7: string;
      practitioner7: string;
      id8: string;
      depth8: string;
      balloon8: string;
      times8: string;
      practitioner8: string;
      id9: string;
      depth9: string;
      balloon9: string;
      times9: string;
      practitioner9: string;
      id10: string;
      depth10: string;
      balloon10: string;
      times10: string;
      practitioner10: string;
      id11: string;
      depth11: string;
      balloon11: string;
      times11: string;
      practitioner11: string;
      id12: string;
      depth12: string;
      balloon12: string;
      times12: string;
      practitioner12: string;
      id13: string;
      depth13: string;
      balloon13: string;
      times13: string;
      practitioner13: string;
      id14: string;
      depth14: string;
      balloon14: string;
      times14: string;
      practitioner14: string;
      id15: string;
      depth15: string;
      balloon15: string;
      times15: string;
      practitioner15: string;
      id16: string;
      depth16: string;
      balloon16: string;
      times16: string;
      practitioner16: string;
      id17: string;
      depth17: string;
      balloon17: string;
      times17: string;
      practitioner17: string;
      id18: string;
      depth18: string;
      balloon18: string;
      times18: string;
      practitioner18: string;
      id19: string;
      depth19: string;
      balloon19: string;
      times19: string;
      practitioner19: string;
      id20: string;
      depth20: string;
      balloon20: string;
      times20: string;
      practitioner20: string;
      id21: string;
      depth21: string;
      balloon21: string;
      times21: string;
      practitioner21: string;
    };
    medication: {
      [key: string]: string;
      no00_1: string;
      no00_2: string;
      no00_3: string;
      no00_4: string;
      no00_5: string;
      no00_6: string;
      no00_7: string;
      no0_1: string;
      no0_2: string;
      no0_3: string;
      no0_4: string;
      no0_5: string;
      no0_6: string;
      no0_7: string;
      no1_1: string;
      no1_2: string;
      no1_3: string;
      no1_4: string;
      no1_5: string;
      no1_6: string;
      no1_7: string;
      no2_1: string;
      no2_2: string;
      no2_3: string;
      no2_4: string;
      no2_5: string;
      no2_6: string;
      no2_7: string;
      no3_1: string;
      no3_2: string;
      no3_3: string;
      no3_4: string;
      no3_5: string;
      no3_6: string;
      no3_7: string;
      no4_1: string;
      no4_2: string;
      no4_3: string;
      no4_4: string;
      no4_5: string;
      no4_6: string;
      no4_7: string;
      no5_1: string;
      no5_2: string;
      no5_3: string;
      no5_4: string;
      no5_5: string;
      no5_6: string;
      no5_7: string;
      no6_1: string;
      no6_2: string;
      no6_3: string;
      no6_4: string;
      no6_5: string;
      no6_6: string;
      no6_7: string;
      no7_1: string;
      no7_2: string;
      no7_3: string;
      no7_4: string;
      no7_5: string;
      no7_6: string;
      no7_7: string;
      no8_1: string;
      no8_2: string;
      no8_3: string;
      no8_4: string;
      no8_5: string;
      no8_6: string;
      no8_7: string;
      no9_1: string;
      no9_2: string;
      no9_3: string;
      no9_4: string;
      no9_5: string;
      no9_6: string;
      no9_7: string;
      no10_1: string;
      no10_2: string;
      no10_3: string;
      no10_4: string;
      no10_5: string;
      no10_6: string;
      no10_7: string;
      no10__1: string;
      no10__2: string;
      no10__3: string;
      no10__4: string;
      no10__5: string;
      no10__6: string;
      no10__7: string;
      no11_1: string;
      no11_2: string;
      no11_3: string;
      no11_4: string;
      no11_5: string;
      no11_6: string;
      no11_7: string;
      no12_1: string;
      no12_2: string;
      no12_3: string;
      no12_4: string;
      no12_5: string;
      no12_6: string;
      no12_7: string;
      no13_1: string;
      no13_2: string;
      no13_3: string;
      no13_4: string;
      no13_5: string;
      no13_6: string;
      no13_7: string;
      no14_1: string;
      no14_2: string;
      no14_3: string;
      no14_4: string;
      no14_5: string;
      no14_6: string;
      no14_7: string;
      no15_1: string;
      no15_2: string;
      no15_3: string;
      no15_4: string;
      no15_5: string;
      no15_6: string;
      no15_7: string;
      no16_1: string;
      no16_2: string;
      no16_3: string;
      no16_4: string;
      no16_5: string;
      no16_6: string;
      no16_7: string;
      no17_1: string;
      no17_2: string;
      no17_3: string;
      no17_4: string;
      no17_5: string;
      no17_6: string;
      no17_7: string;
      no18_1: string;
      no18_2: string;
      no18_3: string;
      no18_4: string;
      no18_5: string;
      no18_6: string;
      no18_7: string;
      no19_1: string;
      no19_2: string;
      no19_3: string;
      no19_4: string;
      no19_5: string;
      no19_6: string;
      no19_7: string;
      no20_1: string;
      no20_2: string;
      no20_3: string;
      no20_4: string;
      no20_5: string;
      no20_6: string;
      no20_7: string;
      no21_1: string;
      no21_2: string;
      no21_3: string;
      no21_4: string;
      no21_5: string;
      no21_6: string;
      no21_7: string;
    };
    test: {
      [key: string]: boolean;
      chest0: boolean;
      abga1: boolean;
      chest1: boolean;
      abga2: boolean;
      chest2: boolean;
      abga3: boolean;
      chest3: boolean;
      abga4: boolean;
      chest4: boolean;
      abga5: boolean;
      chest5: boolean;
      abga6: boolean;
      chest6: boolean;
      abga7: boolean;
      chest7: boolean;
      abga8: boolean;
      chest8: boolean;
      abga9: boolean;
      chest9: boolean;
      abga10: boolean;
      chest10: boolean;
      abga11: boolean;
      chest11: boolean;
      abga12: boolean;
      chest12: boolean;
      abga13: boolean;
      chest13: boolean;
      abga14: boolean;
      chest14: boolean;
      abga15: boolean;
      chest15: boolean;
      abga16: boolean;
      chest16: boolean;
      abga17: boolean;
      chest17: boolean;
      abga18: boolean;
      chest18: boolean;
      abga19: boolean;
      chest19: boolean;
      abga20: boolean;
      chest20: boolean;
      abga21: boolean;
      chest21: boolean;
    };
  };
}

// 투석기록지
export interface IDialysisRecord {
  [index: string]: string | null;
  time: string | null;
  volume: string;
  blood_flow_dialysis_db: string;
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

export interface IDialysisCrrtRecord {
  [index: string]: string | null;
  mode: string | null;
  blood_flow_crrt: string;
  dialysate: string;
  pre_replacement: string;
  post_replacement: string;
  pbp: string;
  pt_fluid_rmv: string;
  anti_coagulation: string;
  access_press: string;
  return_press: string;
  filter_press: string;
  effluent_press: string;
  tmp_press: string;
  press_drop: string;
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
    crrt: IDialysisCrrtRecord[];
    additional_information: string;
  };
}

// 삽관기록지
export interface IIntubationPICCandMore1 {
  [index: string]: string | null;
  record_date1: string;
  insertion_date1: string;
  type1: string;
  part1: string;
  condition1: string;
  dressing1: string;
}

export interface IIntubationPICCandMore2 {
  [index: string]: string | null;
  record_date2: string;
  insertion_date2: string;
  type2: string;
  part2: string;
  condition2: string;
  dressing2: string;
}

export interface IIntubationPICCandMore3 {
  [index: string]: string | null;
  record_date3: string;
  insertion_date3: string;
  type3: string;
  part3: string;
  condition3: string;
  dressing3: string;
}

export interface IIntubationPICCandMore4 {
  [index: string]: string | null;
  record_date4: string;
  insertion_date4: string;
  type4: string;
  part4: string;
  condition4: string;
  dressing4: string;
}

export interface IIntubationPICCandMore5 {
  [index: string]: string | null;
  record_date5: string;
  insertion_date5: string;
  type5: string;
  part5: string;
  condition5: string;
  dressing5: string;
}

export interface IIntubationPCA {
  [index: string]: string | null;
  record_date: string;
  insertion_date: string;
  type: string;
}

export interface IIntubationLtube {
  [index: string]: string | null;
  record_date: string;
  insertion_date: string;
  insertion_part: string;
  insertion_condition: string;
}

export interface IIntubationJPbag {
  [index: string]: string | null;
  record_date: string;
  insertion_date: string;
  insertion_part: string;
  drainage_condition: string;
  pressure: string;
}

export interface IIntubationFoley {
  [index: string]: string | null;
  record_date: string;
  insertion_date: string;
  amount_per_hour: string;
  urine_condition: string;
}

export interface IIntubationEtube {
  [index: string]: string | null;
  record_date: string;
  insertion_date: string;
  type: string;
  insertion_depth: string;
  fixing_area: string;
  cuff_pressure: string;
}

export interface IUpdateIntubation extends IGetSurvey {
  catholic_line_info_survey: {
    picc_and_more1: IIntubationPICCandMore1[];
    picc_and_more2: IIntubationPICCandMore2[];
    picc_and_more3: IIntubationPICCandMore3[];
    picc_and_more4: IIntubationPICCandMore4[];
    picc_and_more5: IIntubationPICCandMore5[];

    pca: IIntubationPCA[];
    ltube: IIntubationLtube[];
    jpbag: IIntubationJPbag[];
    foley: IIntubationFoley[];
    etube: IIntubationEtube[];
  };
}

// 응급기록지
export interface IEmergencyVitalsignRecord {
  check_time: string;
  sbp: string;
  dbp: string;
  pr: string;
  rr: string;
  bt: string;
  note: string;
}

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
    patient_status_list_record: IEmergencyVitalsignRecord[];
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

// KPCS
export interface IUpdateKPCS extends IGetSurvey {
  kpcs_survey: {
    no01: number;
    no02: number;
    no03: number;
    no04: number;
    no05: number;
    no06: number;
    no07: number;
    no08: number;
    no09: number;
    no10: number;
    no11: number;
    no12: number;
    no13: number;
    no14: number;
    no15: number;
    no16: number;
    no17: number;
    no18: number;
    no19: number;
    no20: number;
    no21: number;
    no22: number;
    no23: number;
    no24: number;
    no25: number;
    no26: number;
    no27: number;
    no28: number;
    no29: number;
    no30: number;
    no31: number;
    no32: number;
    no33: number;
    no34: number;
    no35: number;
    no36: number;
    no37: number;
    no38: number;
    no39: number;
    no40: number;
    no41: number;
    no42: number;
    no43: number;
    no44: number;
    no45: number;
    no46: number;
    no47: number;
    no48: number;
    no49: number;
    no50: number;
  };
}

// KPCS-ICU
export interface IUpdateKPCS_ICU extends IGetSurvey {
  kpcs_icu_survey: {
    no01: number;
    no02: number;
    no03: number;
    no04: number;
    no05: number;
    no06: number;
    no07: number;
    no08: number;
    no09: number;
    no10: number;
    no11: number;
    no12: number;
    no13: number;
    no14: number;
    no15: number;
    no16: number;
    no17: number;
    no18: number;
    no19: number;
    no20: number;
    no21: number;
    no22: number;
    no23: number;
    no24: number;
    no25: number;
    no26: number;
    no27: number;
    no28: number;
    no29: number;
    no30_1: number;
    no31: number;
    no32: number;
    no33: number;
    no33_1: number;
    no34: number;
    no34_1: number;
    no35: number;
    no36: number;
    no37: number;
    no38: number;
    no39: number;
    no40: number;
    no40_1: number;
    no41: number;
    no41_1: number;
    no42: number;
    no43: number;
    no43_1: number;
    no44: number;
    no45: number;
    no45_1: number;
    no46: number;
    no47: number;
    no47_1: number;
    no48: number;
    no48_1: number;
    no49: number;
    no49_1: number;
    no50: number;
    no50_1: number;
    no51: number;
    no51_1: number;
    no52: number;
    no53: number;
    no54: number;
    no55: number;
    no56: number;
    no57: number;
    no58: number;
    no58_1: number;
    no59: number;
    no60: number;
    no61: number;
    no61_1: number;
    no62: number;
    no62_1: number;
    no63: number;
    no64: number;
    no65: number;
    no66: number;
    no67: number;
    no68: number;
    no69: number;
    no70: number;
    no71: number;
    no72: number;
    no73: number;
    no74: number;
    no75: number;
    no76: number;
    no77: number;
    no77_1: number;
    no78: number;
    no79: number;
    no80: number;
    no81: number;
    no82: number;
  };
}

// 식이/영양 기록지
export interface IUpdateDietList extends IGetSurvey {
  dietary_survey: {
    break_fast: object;
    lunch: object;
    dinner: object;
  };
}

// 식이/영양 기록지  (기존거)
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

// 수혈 동의서
export interface IUpdateTransfusionAgree extends IGetSurvey {
  transfusion_confirmation: {
    pt_bday: string;
    pt_contact: string;
    pt_name: string;
    pt_sig: string;

    representative_bday: string;
    representative_contact: string;
    representative_name: string;
    representative_sig: string;

    dr_name: string;
    dr_sig: string;
  };
}

// CRRT
export interface IUpdateCRRT extends IGetSurvey {
  crrt_confirmation: {
    no1_1: string;
    no1_2: string;
    no2: string;
    no3_1: string;

    date: string;
    relationship: string;
    name: string;
    applier_contact: string;
    sign: string;
  };
}

// 중심정맥관
export interface IUpdateCentralVenous extends IGetSurvey {
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

// 억제대동의서
export interface IUpdateSuppressor extends IGetSurvey {
  restraints_confirmation: {
    no2_1: string;
    no2_2: string;
    no2_3: string;
    no2_4: string;
    no2_5: string;
    no2_dr_name: string;
    no2_dr_sign: string;

    no3_check_01: boolean;
    no3_check_02: boolean;
    no3_check_03: boolean;
    no3_check_04: boolean;
    no3_input_box: string;

    date: string;
    relationship: string;
    name: string;
    sign: string;
    dr_name: string;
    dr_sign: string;
    ns_name: string;
    ns_sign: string;
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

export interface IUpdateFFI extends IGetSurvey {
  ffi_survey: {
    ffi01: number;
    ffi02: number;
    ffi03: number;
    ffi04: number;
    ffi05: number;
    ffi06: number;
    ffi07: number;
    ffi08: number;

    ffi09: number;
    ffi10: number;
    ffi11: number;
    ffi12: number;
    ffi13: number;
    ffi14: number;
    ffi15: number;
    ffi16: number;
    ffi17: number;
    ffi18: number;

    ffi19: number;
    ffi20: number;
    ffi21: number;
    ffi22: number;
    ffi23: number;
  };
}

export interface IUpdateKOOS extends IGetSurvey {
  contents: {
    spt02: string;
    spt03: string;
    spt04: string;
    spt05: string;

    stf01: string;
    stf02: string;

    pain01: string;
    pain02: string;
    pain03: string;
    pain04: string;
    pain05: string;
    pain06: string;
    pain07: string;
    pain08: string;
    pain09: string;

    daily01: string;
    daily02: string;
    daily03: string;
    daily04: string;
    daily05: string;
    daily06: string;
    daily07: string;
    daily08: string;
    daily09: string;
    daily10: string;
    daily11: string;
    daily12: string;
    daily13: string;
    daily14: string;
    daily15: string;
    daily16: string;
    daily17: string;

    actv01: string;
    actv02: string;
    actv03: string;
    actv04: string;
    actv05: string;

    qol01: string;
    qol02: string;
    qol03: string;
    qol04: string;
  };
}

export interface IUpdateLEFS extends IGetSurvey {
  contents: {
    lefs01: string;
    lefs02: string;
    lefs03: string;
    lefs04: string;
    lefs05: string;
    lefs06: string;
    lefs07: string;
    lefs08: string;
    lefs09: string;
    lefs10: string;
    lefs11: string;
    lefs12: string;
    lefs13: string;
    lefs14: string;
    lefs15: string;
    lefs16: string;
    lefs17: string;
    lefs18: string;
    lefs19: string;
    lefs20: string;
  };
}

export interface IUpdateNDI extends IGetSurvey {
  contents: {
    ndi01: string;
    ndi02: string;
    ndi03: string;
    ndi04: string;
    ndi05: string;
    ndi06: string;
    ndi07: string;
    ndi08: string;
    ndi09: string;
    ndi10: string;
  };
}

export interface IUpdateSTarTBack extends IGetSurvey {
  contents: {
    sb01: string;
    sb02: string;
    sb03: string;
    sb04: string;
    sb05: string;
    sb06: string;
    sb07: string;
    sb08: string;
  };
}

export interface IUpedateSkillVideo extends IGetSurvey {
  student_no: string;
  student_id: string;
  student_name: string;
  student_uuid: string;
  student_video: string;
}

export interface IUpedateNursingRecord extends IGetSurvey {
  student_no: string;
  student_id: string;
  student_name: string;
  student_uuid: string;
  student_nursing_record: string;
}

// 간호과정 서술기록
export interface INursingProcess {
  priority: string;
  subjective: string;
  objective: string;
  diagnosis: string;
  goal: string;
  plan: string;
  reason: string;
  perform: string;
  evaluation: string;
}

export interface IUpdateNursingProcess extends IGetSurvey {
  nursing_process_narrative_note_survey: INursingProcess[];
}
