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

export const initialHospitalizationSurvey = {
  offer: '',
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
    hospitalization_way: '',
    joo_ho_so: '',
    status: '',
    status02: '',
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
    nutrition: { weight: '', appetite: '' },
    obstetric: { G: '', T: '', P: '', A: '' },
    sleep: '',
    smoke: { value: 1, checked: [], input: '', input2: '' },
    urine: { value: '', input: '' },
    urine_info: { checked: [] },
  },
  functional_evaluation: {
    sit: '',
    stand_up: '',
    walk: '',
    wheel_chair: '',
  },
  social_history: {
    job: '',
    language: '한국어',
    marry: '',
    religion: { value: '', input: '' },
  },
  economy_history: {
    counseling: '',
    mind_status: { checked: [] },
  },
  education: {
    education_contents: { checked: [], input: '' },
    education_way: '',
  },
  out_hospital_plan: {
    destination: { value: 1, input: '' },
    guardian: { value: 1, input: '' },
    life: '',
  },
};

export const initialOutHospitalSurvey = {
  date: '',
  default_info: {
    destination: { value: 1, input: '' },
    out_hospital_way: { value: 1, input: '' },
    guardians: { value: 1, input: '' },
    food: { value: 1, input: '' },
    shower: { value: 1, input: '' },
    activity: '',
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
