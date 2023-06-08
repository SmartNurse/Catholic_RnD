export const initialNursingRecord = {
  nanda: {
    domain: '',
    class: '',
    diagnosis: '',
    collectingData: '',
    goal: '',
    plan: '',
    interventions: '',
    evaluation: '',
  },
  soapie: {
    subjective: '',
    objective: '',
    assessment: '',
    planning: '',
    interventions: '',
    evaluation: '',
  },
  focusDar: { focus: '', data: '', action: '', response: '' },
  narrativeRecord: { narrativeNote: '' },
  remarks: {
    assessment: '',
    diagnosisRelate: '',
    diagnosis: '',
    goal: '',
    plan: '',
    interventions: '',
    evaluation: '',
  },
};

export const initialECardex = {
  update_at: '',
  other_remarks: '',
  remark_data: [],
  medication_data: [],
  lab_data: [],
  imaging_test_data: [],
  concerns: '',
  plans: '',
  evaluation: '',
};

export const initialTakingOver = {
  update_at: '',
  loc: '',
  vital_sign: '',
  current_condition: '',
  rbfi: '',
  reasons: '',
  intervention: '',
  other: '',
};

export const initialHospitalizationSurvey = {
  offer: '',
  update_at: '',
  contacts: [
    { contact: '', name: '', relation: '' },
    { contact: '', name: '', relation: '' },
    { contact: '', name: '', relation: '' },
  ],
  info_etc: [],
  default_info: {
    BT: '',
    DBP: '',
    PR: '',
    RR: '',
    SBP: '',
    Sp02: '',
    date: '',
    height: '',
    hospitalization_path: { value: 1, input: '' },
    hospitalization_reason: '',
    hospitalization_way: 1,
    joo_ho_so: '',
    status: 1,
    status02: 1,
    weight: '',
  },
  disease_history: {
    allergy: { value: 1, input: '' },
    family_history: { value: 1, input: '' },
    food_allergy: { value: 1, input: '' },
    history: { value: 1, date: '', checked: [], input: '' },
    latest_medicine: { value: 1, input: '' },
    medicine_allergy: { value: 1, input: '' },
    operation_history: { value: 1, input: '' },
  },
  body_status: {
    breath: { value: 1, checked: [], input: '' },
    camouflage: { value: 1, checked: [], input: '' },
    cycle: { value: 1, checked: [], input: '' },
    fain: { checked: [] },
    fall: { checked: [] },
    medicine_history: { value: 1, input: '' },
    nerve: { value: 1, checked: [], input: '' },
    operation_history: { value: 1, input: '' },
    skin: { value: 1, checked: [], input: '' },
    yukchang: { checked: [] },
  },
  habit: {
    drink: { value: 1, checked: [], input: '', input2: '' },
    feces: { value: '', input: '' },
    feces_info: { checked: [] },
    nutrition: { weight: 1, appetite: 1 },
    obstetric: { G: '0', T: '0', P: '0', A: '0', L: '0' },
    sleep: 1,
    smoke: { value: 1, checked: [], input: '', input2: '' },
    urine: { value: '', input: '' },
    urine_info: { checked: [] },
  },
  functional_evaluation: {
    sit: 1,
    stand_up: 1,
    walk: 1,
    wheel_chair: 1,
  },
  social_history: {
    job: '',
    language: '한국어',
    marry: 1,
    religion: { value: 1, input: '' },
  },
  economy_history: {
    counseling: 1,
    mind_status: { checked: [] },
  },
  education: {
    education_contents: { checked: [], input: '' },
    education_way: 1,
  },
  out_hospital_plan: {
    destination: { value: 1, input: '' },
    guardian: { value: 1, input: '' },
    life: 1,
  },
};

export const initialOutHospitalSurvey = {
  date: '',
  update_at: '',
  default_info: {
    destination: { value: 1, input: '' },
    out_hospital_way: { value: 1, input: '' },
    guardians: { value: 1, input: '' },
    food: { value: 1, input: '' },
    shower: { value: 1, input: '' },
    activity: 1,
  },
  out_hospital_medicines: [
    { amount: '', count: '', days: '', how_to: '', name: '' },
    { amount: '', count: '', days: '', how_to: '', name: '' },
    { amount: '', count: '', days: '', how_to: '', name: '' },
    { amount: '', count: '', days: '', how_to: '', name: '' },
    { amount: '', count: '', days: '', how_to: '', name: '' },
  ],
  out_patients: [
    { call_number: '', date: '', department: '', doctor: '', location: '' },
    { call_number: '', date: '', department: '', doctor: '', location: '' },
  ],
  check_reservations: [
    { call_number: '', date: '', destination: '', name: '', warning: '' },
    { call_number: '', date: '', destination: '', name: '', warning: '' },
  ],
  education: '',
};

export const initialMedicationSurvey = {
  update_at: '',
  medication_surveys: [],
};

export const initialRadiology = {
  radiologies: [],
};

export const initialPathology = {
  pathologies: [],
};

export const initialClinicalObservation = {
  update_at: '',
  survey_uuid: '',
  vital_sign: [],
  io_check: [],
};

export const initialGlucose = {
  update_at: '',
  blood_sugar_log: [],
  prescription: [],
};

export const initialBedScore = {
  date: '',
  update_at: '',
  contents: {
    sensoryPerception: '',
    humidity: '',
    activity: '',
    mobility: '',
    nutrition: '',
    frictionAndDissolutionForce: '',
  },
};

export const initialBedScoreTwo = {
  date: '',
  update_at: '',
  contents: {
    sensoryPerception: '',
    humidity: '',
    activity: '',
    mobility: '',
    nutrition: '',
    frictionAndDissolutionForce: '',
  },
};

export const initialNeeds = {
  date: '',
  update_at: '',
  body_status: {
    takeOffClothes: '',
    eat: '',
    sitUp: '',
    toilet: '',
    washFace: '',
    bath: '',
    transfer: '',
    controlStool: '',
    brushTeeth: '',
    changePosition: '',
    getOutRoom: '',
    controlUrine: '',
  },
  disease_status: {
    chronic: {
      checked1: false,
      checked2: false,
      checked3: false,
      checked4: false,
      cancer: '',
    },
    circulatory: {
      checked1: false,
      checked2: false,
      checked3: false,
      checked4: false,
      checked5: false,
      etc: '',
    },
    nervous: {
      checked1: false,
      checked2: false,
      checked3: false,
      checked5: false,
      etc: '',
    },
    musculoskeletal: {
      checked1: false,
      checked2: false,
      checked3: false,
      checked5: false,
      etc: '',
    },
    mentalAndBehavioral: {
      checked1: false,
      checked2: false,
      checked3: false,
      checked5: false,
      etc: '',
    },
    respiratory: {
      checked1: false,
      checked2: false,
      checked5: false,
      etc: '',
    },
    renal: {
      checked1: false,
      checked5: false,
      etc: '',
    },
    other: {
      checked1: false,
      checked5: false,
      allergy: '',
      etc: '',
    },
  },
  reason1: '',
  reason2: '',
};

export const initialFall = {
  date: '',
  update_at: '',
  contents: {
    experience: '',
    diagnosis: '',
    walkingAids: '',
    intravenousLine: '',
    gait: '',
    consciousness: '',
  },
};

export const initialFallTwo = {
  date: '',
  update_at: '',
  contents: {
    experience: '',
    diagnosis: '',
    walkingAids: '',
    intravenousLine: '',
    gait: '',
    consciousness: '',
  },
};

export const initialPediatric_fall = {
  date: '',
  update_at: '',
  contents: {
    age: '',
    diagnosis: '',
    sex: '',
    cognitive_disorder: '',
    environmental_factors: '',
    medication_use: '',
    surgical_sedative_anesthetic_factors: '',
  },
};

export const initialGCS = {
  date: '',
  update_at: '',
  eye_opening: '',
  verbal_response: '',
  motor_response: '',
};

export const initialPediatric_GCS = {
  date: '',
  update_at: '',
  eye_opening: '',
  verbal_response: '',
  motor_response: '',
};

export const initialFourScore = {
  date: '',
  update_at: '',
  eye_opening: '',
  brainstem_reflexes: '',
  motor_response: '',
  respiration: '',
};

export const initialSafety = {
  update_at: '',
  accident_consequences_details: {
    accidence_date: '',
    discovery_date: '',
    discovery_place: '',
    discovery_place_etc: '',
    accident_type: '',
    accident_classification: '',
    accident_classification_etc: '',
  },
  event_classification: '',
  falling_type: {
    consciousness_level: '',
    activity_status: '',
    assisting_devices: '',
    place_falling_accident: '',
    place_falling_accident_etc: '',
    patient_risk_factors: '',
    score: 0,
    date: '',
    fall_type: '',
    risk_factor: '',
    risk_factor_etc: '',
  },
  medication_type: {
    prescription_error: '',
    prescription_error_etc: '',
    drug_preparation_error: '',
    drug_preparation_error_etc: '',
    confirm_error: '',
    interpretation_error: '',
  },
  other_type: '',
  other_type_etc: '',
  accident_detail: '',
  accident_handling: '',
  accident_result: '',
};

export const initialNRS = {
  update_at: '',
  nrs_survey: [],
};

export const initialFLACC = {
  update_at: '',
  flacc_survey: [],
};

export const initialCNPS = {
  update_at: '',
  face: '',
  activity: '',
  respiratory: '',
  vocalization: '',
  sum: '',
};

export const initialMentalNursing = {
  update_at: '',
  mental_survey: [],
};

export const initialBDI = {
  update_at: '',
  content: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  sum: 0,
};

export const initialBAI = {
  update_at: '',
  content: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  sum: 0,
};

export const initialMMSE = {
  update_at: '',
  score: [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ],
  sum: 0,
};

export const initialCIST = {
  update_at: '',
  orientation1: '',
  orientation2: '',
  orientation3: '',
  orientation4: '',
  orientation5: '',
  memory1: {
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
    checked5: false,
  },
  memory2: {
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
    checked5: false,
  },
  attention1: '',
  attention2: '',
  attention3: '',
  visual_spatial_ability: '',
  executive_function1_1: '',
  executive_function1_2: '',
  executive_function1_3: '',
  memory3: {
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
    checked5: false,
  },
  memory4: {
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
    checked5: false,
    checked6: false,
    checked7: false,
    checked8: false,
    checked9: false,
    checked10: false,
    checked11: false,
    checked12: false,
    checked13: false,
    checked14: false,
    checked15: false,
  },
  language_function1: '',
  language_function2: '',
  language_function3: '',
  language_function4: '',
  executive_function2: '',
};

export const initialOperation = {
  update_at: '',
  surgery_information: {
    operating_surgeon: '',
    assistant: '',
    scrubbing_nurse: '',
    circulating_nurse: '',
  },
  operation_information: {
    operating_department: '',
    operating_date: '',
    operating_time: '',
    asa_class: '',
    main_operation_name: '',
    minor_operation_name: '',
    past_history: '',
    allergy: '',
    npo_status: '',
    prophylactic_antibiotics: '',
    position: '',
    position_etc: '',
    preoperative_xray: true,
    preoperative_ekg: true,
  },
  surgery_details: {
    content: '',
    arrival_time: '',
    anesthesia_start_time: '',
    surgery_start_time: '',
    surgery_end_time: '',
    anesthesia_end_time: '',
    discharge_time: '',
    anesthetic_method: '',
    anesthetic_method_etc: '',
    anesthesiologist: '',
  },
};

export const initialAnesthesia = {
  update_at: '',
  operation_information: {
    operating_department: '',
    operating_allergy: '',
    operating_date: '',
    operating_time: '',
    operation_name: '',
    npo_status: '',
    position: '',
    position_etc: '',
    past_history_and_allergy: '',
    preoperative_xray: false,
    preoperative_ekg: false,
    emergency_status: '',
    asa_class: '',
    prophylactic_antibiotics: '',
    prophylactic_method: '',
    prophylactic_method_etc: '',
  },
  prescription_record: [],
  patient_status_record: {
    infusion_amount: '',
    transfusion_amount: '',
    intake_etc: '',
    urine_amount: '',
    blood_clot_amount: '',
    output_etc: '',
  },
  patient_status_list_record: [],
};

export const initialTransfusion = {
  update_at: '',
  blood_number: '',
  blood_name: '',
  volume: '',
  arrival_time: '',
  blood_transfusion_arrival: '',
  transfusion_check1: '',
  transfusion_check2: '',
  transfusion_start_time: '',
  practitioner_start: '',
  transfusion_end_time: '',
  practitioner_end: '',
  transfusion_record: [],
};

export const initialDialysis = {
  update_at: '',
  date: '',
  time: '',
  visiting_route: '',
  visiting_route_etc: '',
  dialysis_machine: '',
  dialyzer: '',
  dialysate: '',
  vascular_access: '',
  vascular_access_etc: '',
  starting_nurse: '',
  ending_nurse: '',
  pre_previous_weight: '',
  pre_today_weight: '',
  pre_weight_change: '',
  post_previous_weight: '',
  post_today_weight: '',
  post_weight_change: '',
  dialysis_db: [],
  additional_information: '',
};

export const initialEmergency = {
  update_at: '',
  emergency_information: {
    accident_date: '',
    accident_time: '',
    visit_method: '',
    memo: '',
    arrival_time: '',
  },
  emergency_patient_information: {
    symptom: '',
    etc_symptom: '',
    damage: '',
    intentional: '',
    medical_conditions: '',
    history: '',
    allergy: '',
    medication: '',
    consciousness: '',
    gcs: '',
    motor: '',
    pupil: '',
    nrs: '',
    pqrst: '',
    ktas: '',
    expected_diagnosis: '',
  },
  patient_status_record: {
    infusion_amount: '',
    transfusion_amount: '',
    intake_etc: '',
    urine_amount: '',
    blood_clot_amount: '',
    output_etc: '',
  },
  patient_status_list_record: {
    checkTime: '',
    sbp: '',
    dbp: '',
    pr: '',
    rr: '',
    bt: '',
    note: '',
  },
  emergency_care_result: {
    result: { value: 1, input: '' },
    status: {
      checked1: false,
      checked2: false,
      checked3: false,
      checked4: false,
      placeholder: '',
    },
  },
};

export const initialChildbirth = {
  update_at: '',
  child_birth_information: {
    date: '',
    time: '',
    type: '',
  },
  newborn_condition: {
    gender: -1,
    weight: '',
    apgar_score1m: '',
    apgar_score5m: '',
    oxygen_intake: -1,
    first_urine: -1,
    placenta_discharge: -1,
    fetal_staining: -1,
    nuchal_cord: -1,
    nuchal_cord_content: '',
    resuscitation: -1,
    resuscitation_content: '',
    specifications: '',
  },
  apgar: {
    appearance: -1,
    pulse: -1,
    grimace: -1,
    activity: -1,
    respiration: -1,
  },
  placenta_removal: {
    time: '',
    methods: -1,
    curettage: -1,
  },
  maternal_condition: {
    episiotomy: -1,
    episiotomy_content: '',
    perineal_laceration: -1,
    perineal_laceration_content: '',
    uterus_contraction: '',
  },
  nursing_records: [],
};

export const initialHomeCare = {
  update_at: '',
  basic_information: {
    occupation: '',
    insurance_type: '',
    residence: '',
    residence_etc: '',
    religion: '',
    nursing_provider: '',
    sanitary: '',
    sanitary_notes: '',
    marital_status: '',
    past_history: '',
    safety: '',
    safety_notes: '',
  },
  request_status: [],
  inspection_findings: [],
  medication_records: [],
  need_service: '',
};

export const initialDietNutrition = {
  update_at: '',
  birth: '',
  classification: 1,
  select_meal: {
    checked1: false,
    checked2: false,
    checked3: false,
    calorie: '',
  },
  basic_meal: {
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
    checked5: false,
    checked6: false,
    checked7: false,
    checked8: false,
    checked9: false,
    checked10: false,
  },
  therapuetic_diet: {
    intestinal: {
      checked1: false,
      checked2: false,
      checked3: false,
      checked4: false,
      checked5: false,
      checked6: false,
      checked7: false,
      checked8: false,
      checked9: false,
    },
    kidney: {
      checked1: false,
      checked2: false,
      checked3: false,
      checked4: false,
      checked5: false,
      checked6: false,
      checked7: false,
      checked8: false,
      checked9: false,
      checked10: false,
      checked11: false,
      checked12: false,
      checked13: false,
      checked14: false,
    },
    liver: {
      checked1: false,
      checked2: false,
      checked3: false,
      checked4: false,
      checked5: false,
      checked6: false,
      checked7: false,
      checked8: false,
      checked9: false,
      checked10: false,
      checked11: false,
      checked12: false,
    },
  },
  controlled_diet: {
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
    checked5: false,
    checked6: false,
    checked7: false,
    checked8: false,
    checked9: false,
    checked10: false,
    checked11: false,
  },
  specifics: {
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
    checked5: false,
    checked6: false,
    checked7: false,
    checked8: false,
    checked9: false,
    checked10: false,
    checked11: false,
    checked12: false,
    checked13: false,
    checked14: false,
    checked15: false,
    checked16: false,
    checked17: false,
    checked18: false,
    checked19: false,
    checked20: false,
    checked21: false,
    checked22: false,
    checked23: false,
    checked24: false,
    checked25: false,
    checked26: false,
    checked27: false,
    checked28: false,
    checked29: false,
    checked30: false,
    checked31: false,
    checked32: false,
    checked33: false,
    checked34: false,
    checked35: false,
    checked36: false,
    checked37: false,
    checked38: false,
    checked39: false,
    placeholder: '',
  },
};

export const initialHospitalConfirm = {
  update_at: '',
  nursing_care: {
    checked1: false,
  },
  facilities_in: {
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
    checked5: false,
    checked6: false,
    checked7: false,
    checked8: false,
  },
  facilities: {
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
    checked5: false,
    checked6: false,
    checked7: false,
    checked8: false,
    checked9: false,
    checked10: false,
    checked11: false,
    checked12: false,
    checked13: false,
    checked14: false,
    checked15: false,
    checked16: false,
  },
  name: '',
  relationship: '',
  signature: '',
  date: '',
  personnel_signature: '',
};

export const initialFallConfirm = {
  update_at: '',
  fall_education: {
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
    checked5: false,
    checked6: false,
    checked7: false,
    checked8: false,
  },
  signature: '',
  date: '',
  personnel_signature: '',
};

export const initialColonoscopy = {
  update_at: '',
  agree_check_01: '',
  agree_check_02: '',
  patient_bday: '',
  patient_contact: '',
  patient_name: '',
  patient_sig: '',
  companion_bday: '',
  companion_contact: '',
  companion_name: '',
  companion_sig: '',
  dr_name: '',
  dr_sig: '',
};

export const initialUpperEndoscopy = {
  update_at: '',
  agree_check: '',
  patient_bday: '',
  patient_contact: '',
  patient_name: '',
  patient_sig: '',
  companion_bday: '',
  companion_contact: '',
  companion_name: '',
  companion_sig: '',
  dr_name: '',
  dr_sig: '',
};

export const initialNonSalary = {
  update_at: '',
  item_01: '',
  fee_01: '',
  no_01: true,

  item_02: '',
  fee_02: '',
  no_02: true,

  item_03: '',
  fee_03: '',
  no_03: true,

  item_04: '',
  fee_04: '',
  no_04: true,

  date: '',
  name: '',
  sig: '',
};

export const initialMedicalRecords = {
  update_at: '',
  pt_name: '',
  pt_ssn: '',
  pt_addr: '',
  pt_contact: '',

  applier_name: '',
  applier_relp: '',
  applier_bday: '',
  applier_contact: '',
  applier_addr: '',

  scope_center: '',
  scope_period_from: '',
  scope_period_to: '',
  scope_reason: '',
  scope_detail: '',

  date: '',
  name: '',
  sig: '',
};

export const initialDNR = {
  update_at: '',
  fall_education: {
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
    checked5: false,
    checked6: false,
    checked7: false,
    checked8: false,
  },
  signature: '',
  date: '',
  personnel_signature: '',
};

export const initialDNA = {
  update_at: '',
  fall_education: {
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
    checked5: false,
    checked6: false,
    checked7: false,
    checked8: false,
  },
  signature: '',
  date: '',
  personnel_signature: '',
};

export const initialCoreNursingSkillVideo = {
  update_at: '',
  files: [],
};

export const initialCoreNursingSkillVideoExemple = {
  update_at: '',
  files: [],
};
