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

  contact1: [{ contact: '', name: '', relation: '', etc: '' }],
  contact2: [{ contact: '', name: '', relation: '', etc: '' }],
  contact3: [{ contact: '', name: '', relation: '', etc: '' }],

  default_info: {
    BT: '',
    DBP: '',
    PR: '',
    RR: '',
    SBP: '',
    Sp02: '',
    date: '',
    height: '',
    hospitalization_path: { value: 3, input: '' },
    hospitalization_reason: '',
    hospitalization_way: 4,
    joo_ho_so: '',
    status: 4,
    status02: 4,
    weight: '',
  },
  disease_history: {
    history: { value: 3, checked: [], input: '' },
    family_history: { value: 3, input: '' },
    allergy: { value: 3, input: '' },
    food_allergy: { value: 3, input: '' },
    latest_medicine: { value: 3, input: '' },
    medicine_allergy: { value: 3, input: '' },
    operation_history: { value: 3, input: '' },
  },
  body_status: {
    breath: { value: 3, checked: [], input: '' },
    camouflage: { value: 3, checked: [], input: '' },
    cycle: { value: 3, checked: [], input: '' },
    fain: { checked: [] },
    fall: { checked: [] },
    medicine_history: { value: 3, input: '' },
    nerve: { value: 3, checked: [], input: '' },
    operation_history: { value: 3, input: '' },
    skin: { value: 3, checked: [], input: '' },
    yukchang: { checked: [] },
  },
  habit: {
    drink: { value: 3, checked: [], input: '', input2: '' },
    feces: { value: '', input: '' },
    feces_info: { checked: [] },
    nutrition: { weight: 3, appetite: 3 },
    obstetric: { G: '', T: '', P: '', A: '', L: '' },
    sleep: 3,
    smoke: { value: 3, checked: [], input: '', input2: '' },
    urine: { value: '', input: '' },
    urine_info: { checked: [] },
  },
  functional_evaluation: {
    sit: 4,
    stand_up: 4,
    walk: 4,
    wheel_chair: 4,
  },
  social_history: {
    job: '',
    language: '한국어',
    marry: 3,
    religion: { value: 3, input: '' },
  },
  economy_history: {
    counseling: 3,
    mind_status: { checked: [] },
  },
  education: {
    education_contents: { checked: [], input: '' },
    education_way: 5,
  },
  out_hospital_plan: {
    destination: { value: 4, input: '' },
    guardian: { value: 5, input: '' },
    life: 7,
  },
};

export const initialOutHospitalSurvey = {
  date: '',
  update_at: '',
  default_info: {
    destination: { value: 5, input: '' },
    out_hospital_way: { value: 5, input: '' },
    guardians: { value: 7, input: '' },
    food: { value: 3, input: '' },
    shower: { value: 3, input: '' },
    activity: 3,
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

export const initialIoCheckRecord = {
  update_at: '',
  io_survey: [],
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

export const initialCPR = {
  update_at: '',
  face: '',
  activity: '',
  respiratory: '',
  vocalization: '',
  sum: '',
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

export const initialIntubation = {
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
  patient_status_list_record: [],
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

export const initialKPCS = {
  date: '',
  update_at: '',
  no01: 0,
  no02: 0,
  no03: 0,
  no04: 0,
  no05: 0,
  no06: 0,
  no07: 0,
  no08: 0,
  no09: 0,
  no10: 0,
  no11: 0,
  no12: 0,
  no13: 0,
  no14: 0,
  no15: 0,
  no16: 0,
  no17: 0,
  no18: 0,
  no19: 0,
  no20: 0,
  no21: 0,
  no22: 0,
  no23: 0,
  no24: 0,
  no25: 0,
  no26: 0,
  no27: 0,
  no28: 0,
  no29: 0,
  no30: 0,
  no31: 0,
  no32: 0,
  no33: 0,
  no34: 0,
  no35: 0,
  no36: 0,
  no37: 0,
  no38: 0,
  no39: 0,
  no40: 0,
  no41: 0,
  no42: 0,
  no43: 0,
  no44: 0,
  no45: 0,
  no46: 0,
  no47: 0,
  no48: 0,
  no49: 0,
  no50: 0,
};

export const initialDietList = {
  update_at: '',
  birth: '',
  classification: 1,

  //  조식
  break_fast: {
    guardian_meal: false,
    basic_meal: 0,
    therapeutic_intestinal: '',
    therapeutic_kidney: '',
    therapeutic_liver: '',
    controlled_diet: '',
    specifics1: '',
    specifics2: '',
    specifics3: '',
    specifics4: '',
    specifics_etc: '',
  },
  lunch: {
    guardian_meal: false,
    basic_meal: 0,
    therapeutic_intestinal: '',
    therapeutic_kidney: '',
    therapeutic_liver: '',
    controlled_diet: '',
    specifics1: '',
    specifics2: '',
    specifics3: '',
    specifics4: '',
    specifics_etc: '',
  },
  dinner: {
    guardian_meal: false,
    basic_meal: 0,
    therapeutic_intestinal: '',
    therapeutic_kidney: '',
    therapeutic_liver: '',
    controlled_diet: '',
    specifics1: '',
    specifics2: '',
    specifics3: '',
    specifics4: '',
    specifics_etc: '',
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

export const initialTransfusionAgree = {
  update_at: '',
  pt_bday: '',
  pt_contact: '',
  pt_name: '',
  pt_sig: '',

  representative_bday: '',
  representative_contact: '',
  representative_name: '',
  representative_sig: '',

  dr_name: '',
  dr_sig: '',
};

export const initialCRRT = {
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

export const initialCentralVenous = {
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

export const initialSuppressor = {
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
  pt_name: '',
  pt_ssn: '',
  pt_addr: '',
  pt_contact: '',

  willing: '', //호스피스 이용 의향

  explanation01: false,
  explanation02: false,
  explanation03: false,
  explanation04: false,
  explanation05: false,
  explanation06: false,

  explanation_check: '',
  explanation_check_sig_date: '',
  explanation_check_sig_name: '',
  explanation_check_sig_sig: '',

  pt_available: '',
  pt_available_etc_memo: '',

  center_name: '',
  center_location: '',
  center_consultant: '',
  center_contact: '',

  recorde_date: '',
  recorde_person_name: '',
  recorde_person_sig: '',

  register_date: '',
  register_person_name: '',
  register_person_sig: '',
};

export const initialDNA = {
  update_at: '',
  test_object_name: '',
  test_object_ssn: '',
  test_object_addr: '',
  test_object_contact: '',

  legal_representative_name: '',
  legal_representative_ssn: '',
  legal_representative_addr: '',
  legal_representative_contact: '',

  lab_name: '',
  lab_contact: '',

  pt_purpose: '',
  pt_test: '',

  date: '',
  testee_name: '',
  testee_sig: '',
  representative_name: '',
  representative_sig: '',
  consultant_name: '',
  consultant_sig: '',
};

export const initialCoreNursingSkillVideo = {
  update_at: '',
  files: [],
};

export const initialCoreNursingSkillVideoExemple = {
  update_at: '',
  files: [],
};

export const initialCheckListRoom = {
  update_at: '',
  info_info01: '',
  info_info02: '',
  info_info03: '',

  info_mental01: '',

  fall01: '',
  fall02: '',
  fall03: '',
  fall04: '',
  fall05: '',

  bed_sore01: '',
  bed_sore02: '',
  bed_sore03: '',
  bed_sore04: '',
  bed_sore05: '',

  edu01: '',
  edu02: '',

  care_plan01: '',
  care_plan02: '',
  care_plan03: '',

  surgery01: '',
  surgery02: '',
  surgery03: '',

  medicine01: '',
  medicine02: '',

  hospitalization01: '',
  hospitalization02: '',
  hospitalization03: '',
  hospitalization04: '',
  hospitalization05: '',
  hospitalization06: '',
  hospitalization07: '',
  hospitalization08: '',

  ns_fall01: '',
  ns_fall02: '',

  ns_bedsore01: '',

  ns_pt_moving01: '',
  ns_pt_moving02: '',

  ns_edu01: '',

  ns_surgery01: '',

  ns_transfusion01: '',

  ns_infection01: '',

  ns_pain01: '',
  ns_pain02: '',
  ns_pain03: '',

  ns_re_pain01: '',
  ns_re_pain02: '',
  ns_re_pain03: '',
  ns_re_pain04: '',

  ns_pca01: '',
  ns_pca02: '',
  ns_pca03: '',
  ns_pca04: '',

  ns_nausea01: '',
  ns_nausea02: '',

  ns_chemo_side_eff01: '',

  ns_restraint01: '',
  ns_restraint02: '',
  ns_restraint03: '',
  ns_restraint04: '',
  ns_restraint05: '',

  ns_high_risk01: '',
  ns_high_risk02: '',

  right01: '',

  discharge01: '',
  discharge02: '',
  discharge03: '',
  discharge04: '',

  ocs01: '',
};

export const initialFFI = {
  update_at: '',
  ffi01: 0,
  ffi02: 0,
  ffi03: 0,
  ffi04: 0,
  ffi05: 0,
  ffi06: 0,
  ffi07: 0,
  ffi08: 0,

  ffi09: 0,
  ffi10: 0,
  ffi11: 0,
  ffi12: 0,
  ffi13: 0,
  ffi14: 0,
  ffi15: 0,
  ffi16: 0,
  ffi17: 0,
  ffi18: 0,

  ffi19: 0,
  ffi20: 0,
  ffi21: 0,
  ffi22: 0,
  ffi23: 0,
};

export const initialKOOS = {
  update_at: '',
  spt01: '',
  spt02: '',
  spt03: '',
  spt04: '',
  spt05: '',

  stf01: '',
  stf02: '',

  pain01: '',
  pain02: '',
  pain03: '',
  pain04: '',
  pain05: '',
  pain06: '',
  pain07: '',
  pain08: '',
  pain09: '',

  daily01: '',
  daily02: '',
  daily03: '',
  daily04: '',
  daily05: '',
  daily06: '',
  daily07: '',
  daily08: '',
  daily09: '',
  daily10: '',
  daily11: '',
  daily12: '',
  daily13: '',
  daily14: '',
  daily15: '',
  daily16: '',
  daily17: '',

  actv01: '',
  actv02: '',
  actv03: '',
  actv04: '',
  actv05: '',

  qol01: '',
  qol02: '',
  qol03: '',
  qol04: '',
};

export const initialLEFS = {
  update_at: '',
  lefs01: '',
  lefs02: '',
  lefs03: '',
  lefs04: '',
  lefs05: '',
  lefs06: '',
  lefs07: '',
  lefs08: '',
  lefs09: '',
  lefs10: '',
  lefs11: '',
  lefs12: '',
  lefs13: '',
  lefs14: '',
  lefs15: '',
  lefs16: '',
  lefs17: '',
  lefs18: '',
  lefs19: '',
  lefs20: '',
};

export const initialNDI = {
  update_at: '',
  ndi01: '',
  ndi02: '',
  ndi03: '',
  ndi04: '',
  ndi05: '',
  ndi06: '',
  ndi07: '',
  ndi08: '',
  ndi09: '',
  ndi10: '',
};

export const initialSTarTBack = {
  update_at: '',
  sb01: '',
  sb02: '',
  sb03: '',
  sb04: '',
  sb05: '',
  sb06: '',
  sb07: '',
  sb08: '',
  sb09: '',
};

export const initialNursingProcess = {
  update_at: '',
  nursing_process_narrative_note_survey: [],
};
