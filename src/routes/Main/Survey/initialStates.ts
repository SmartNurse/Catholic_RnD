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
  remarks: { cbe: '' },
};

export const initialECardex = {
  update_at: '',
  other_remarks:  '',
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
  update_at: "",
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
  mental_nursing_records: [],
};

export const initialOperation = {
  update_at: '',
  operation_date: '',
  staff_info: {
    main_doctor: '',
    sub_doctor: '',
    disinfection_nurse: '',
    circular_nurse: '',
  },
  operation_info: {
    department: '',
    date: '',
    time: '',
    asa_class: '',
    main_title: '',
    sub_title: '',
    history: '',
    allergy: '',
    fast: '',
    antibiotics: '',
    posture: '',
    posture_etc: '',
    x_ray: false,
    ecg: false,
  },
  operation_content: {
    desc: '',
    arrived: '',
    anesthesia_start: '',
    op_start: '',
    op_end: '',
    anesthesia_end: '',
    left: '',
    method: '',
    doctor: '',
  },
};

export const initialAnesthesia = {
  update_at: '',
  operation_info: {
    department: '',
    date: '',
    time: '',
    title: '',
    fast: '',
    x_ray: false,
    ecg: false,
    posture: '',
    posture_etc: '',
    history: '',
    emergency: '',
    asa_class: '',
    antibiotics: '',
    method: '',
    method_etc: '',
  },
  prescription_records: [],
  patient_status: {
    intake: {
      infusione: '',
      transfusion: '',
      etc: '',
    },
    output: {
      urine: '',
      blood_lost: '',
      etc: '',
    },
    records: [],
  },
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
  update_at: "",
  date: "",
  time: "",
  visiting_route: "",
  visiting_route_etc: "",
  dialysis_machine: "",
  dialyzer: "",
  dialysate: "",
  vascular_access: "",
  vascular_access_etc: "",
  starting_nurse: "",
  ending_nurse:"",
  pre_previous_weight: "",
  pre_today_weight: "",
  pre_weight_change: "",
  post_previous_weight: "",
  post_today_weight: "",
  post_weight_change: "",
  dialysis_db: [],
  additional_information: "",
};

export const initialEmergency = {
  update_at: '',
  accident_type: 1,
  identification: '',
  address: '',
  division: '',
  place: '',  
  accident_date: '',
  accident_time: '',
  arrived_date: '',
  arrived_time: '',
  accident_reason: '',
  primary_handling: '',
  doctor_instruction: '',
  handler: {
    opinion: '',
    organization: '',
    certificate: '',
    name: '',
    phone: '', 
  },
  hospital_record: '',
};

export const initialChildbirth = {
  update_at: '',
  childbirth_info: {
    date: '',
    time: '',
    type: '',
  },
  baby_status: {
    gender: '',
    weight: '',
    apgar: { one_min: '', five_min: '' },
    breathe: '',
    urine: '',
    placenta_discharge: '',
    placenta_color: '',
    nuchal_cord: { value: '', input: '' },
    resuscitation: { value: '', input: '' },
    special_note: '',
  },
  placenta_removal: {
    time: '',
    method: '',
    curettage: '',
  },
  mother_status: {
    incision: { value: '', select: '' },
    laceration: { value: '', select: '' },
    contraction: '',
  },
  nursing_records: [],
};

export const initialDietNutrition = {
  update_at: '',
  target: '',
  diet_time: {
    checked1: false,
    checked2: false,
    checked3: false,
  },
  calorie: '',
  default_diet: {
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
  treatment: {
    stomach: {
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
  controlled: {
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
  special: {
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
  name: "",
  relationship: "",
  signature: "",
  date: "",
  personnel_signature: "",
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
  signature: "",
  date: "",
  personnel_signature: "",
}

export const initialCoreNursingSkillVideo = {
  update_at: "",
  files: [],
}