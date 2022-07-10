export enum RECORD_TYPE {
  ADMISSION = '입원간호 기록지',
  DISCHARGE = '퇴원간호 기록지',
  PRESCRIPTION = '처방 기록지',
  NURSE = '간호 기록지',
  DOSAGE = '투약 기록지',
  IMAGING = '영상검사 기록지',
  CLINICAL_PATHOLOGY = '임상병리검사 기록지',
  CLINICAL_OBSERVATION = '임상관찰 기록지',
  PATIENT_EVALUATION = '환자평가 기록지',
  RISK_OF_BEDSORES = '욕창위험도 평가도구',
  NEEDS_ASSESSMENT = '욕구평가 기록지',
  FALL_RISK_ASSESSMENT = '낙상위험도 평가도구',
  COGNITIVE_FUNCTION = '인지기능검사',
  DIET_NUTRITION = '식이/영양 기록지',
  AGREEMENT = '동의서',
}

export enum SETTING_TYPE {
  NOTICE = '공지사항',
  ACCOUNT = '계정설정',
  LOGOUT = '로그아웃',
}
