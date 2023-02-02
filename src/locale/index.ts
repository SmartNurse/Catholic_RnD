const locale = {
  ko: {
    // common
    ETC: '기타',
    'GRADE.1': '학생',
    'GRADE.2': '교수/조교',
    'GENDER.1': '여자',
    'GENDER.2': '남자',
    'EXIST.1': '없음',
    'EXIST.2': '있음',
    'EXIST.SHORT.1': '무',
    'EXIST.SHORT.2': '유',
    'NEED.1': '필요',
    'NEED.2': '불필요',

    // error message
    'ERROR.CODE.0': '알 수 없는 오류가 발생했습니다. ErrorCode: {rc}',
    'ERROR.CODE.100': '계정에 문제가 발생했습니다. 관리자에게 문의해주세요',
    'ERROR.CODE.101': '이메일 인증 코드가 일치하지 않습니다.',
    'ERROR.CODE.102': '가상환자의 ID가 올바르지 않습니다.',
    'ERROR.CODE.104': '기록지 ID가 올바르지 않습니다.',
    'ERROR.CODE.105': '간호기록지 정보를 찾을 수 없습니다.',
    'ERROR.CODE.106': '승인되지 않은 유저입니다. 관리자에게 문의해주세요',
    'ERROR.CODE.107': '비밀번호가 일치하지 않습니다.',
    'ERROR.CODE.108':
      '이미 가입된 Email 주소 입니다. 다른 Email을 입력해주세요.',
    'ERROR.CODE.109':
      '이미 존재하는 가상환자 ID 입니다. 다른 ID를 입력해주세요.',
    'ERROR.CODE.110': '학교 정보를 찾지 못했습니다. 관리자에게 문의해주세요.',
    'ERROR.CODE.111': '권한이 없습니다. 관리자에게 문의해주세요.',
    'ERROR.CODE.201': '수가코드 정보를 찾을 수 없습니다.',
    'ERROR.CODE.202': '약품코드 정보를 찾을 수 없습니다.',
    'ERROR.CODE.702': '유효한 파일이 아닙니다. 파일을 다시 한번 확인해주세요',

    // signup
    'REQUIRED.EMAIL.FORMAT': '이메일 형식이 올바르지 않습니다',
    'REQUIRED.EMAIL.VERIFICATION': '이메일 인증번호를 확인해주세요',
    'REQUIRED.PASSWORD.FORMAT':
      '비밀번호는 영문+숫자+특수기호를 포함해서 8자리 이상 입력해 주세요',
    'REQUIRED.PASSWORD.CONFIRM': '입력하신 비밀번호가 일치하지 않습니다',
    'REQUIRED.COLLEGE': '학교를 선택해주세요',
    'REQUIRED.STUDENT.NO':
      '학번은 "-"를 제외한 15자리 이하 숫자만 입력가능합니다',

    // Main
    'REQUIRED.STUDENT': '학생이 선택되지 않았습니다.',
    'REQUIRED.PATIENT': '가상환자가 선택되지 않았습니다.',

    // nursing record
    'RECORD.0': 'NANDA',
    'RECORD.1': 'SOAPIE',
    'RECORD.2': 'Focus DAR',
    'RECORD.3': '서술기록',
    'RECORD.4': '특기사항',
    'RECORD.TYPE.0': 'NANDA',
    'RECORD.TYPE.1': 'SOAPIE',
    'RECORD.TYPE.2': 'FOCUSDAR',
    'RECORD.TYPE.3': 'NARRATIVE',
    'RECORD.TYPE.4': 'REMARKS',
    'NANDA.DOMAIN': '영역 Domain',
    'NANDA.CLASS': '분류 Class',
    'NANDA.DIAGNOSIS': '진단명 Diagnosis',
    'NANDA.COLLECTINGDATA': '자료 수집 주관적 / 객관적',
    'NANDA.GOAL': '간호목표 단기/장기 Goal',
    'NANDA.PLAN': '간호계획 Plan',
    'NANDA.INTERVENTIONS': '간호수행/중재/이론적 근거 Interventions',
    'NANDA.EVALUATION': '간호평가 Evaluation',
    'SOAPIE.SUBJECTIVE': '주관적 증상 Subjective Data',
    'SOAPIE.OBJECTIVE': '객관적 정보 Objective Data',
    'SOAPIE.ASSESSMENT': '사정 Assessment',
    'SOAPIE.PLANNING': '계획 Planning',
    'SOAPIE.INTERVENTIONS': '중재 Interventions',
    'SOAPIE.EVALUATION': '평가 Evaluation',
    'FOCUSDAR.FOCUS': '포커스 Focus',
    'FOCUSDAR.DATA': '데이터 Data',
    'FOCUSDAR.ACTION': '활동 Action',
    'FOCUSDAR.RESPONSE': '반응 Response',
    'NARRATIVE.NARRATIVENOTE': '서술 기록 Narrative Notes',
    'REMARKS.CBE': '특기사항기록 CBE',
    'REQUIRED.DOMAIN': '영역을 선택해주세요',
    'REQUIRED.CLASS': '분류를 선택해주세요',
    'REQUIRED.DIAGNOSIS': '진단명을 선택해주세요',
    'REQUIRED.RECORD.TIME': '간호기록 시간을 입력해주세요',

    // hospitalization
    'HOSPITALIZATION.PATH.1': '외래',
    'HOSPITALIZATION.PATH.2': '응급실',
    'HOSPITALIZATION.WAY.1': '도보',
    'HOSPITALIZATION.WAY.2': '휠체어',
    'HOSPITALIZATION.WAY.3': '이동침대',
    'HOSPITALIZATION.STATUS.1': '명료',
    'HOSPITALIZATION.STATUS.2': '기면',
    'HOSPITALIZATION.STATUS.3': '반혼수',
    'HOSPITALIZATION.STATUS.4': '혼수',
    'HOSPITALIZATION.STATUS02.1': '원만',
    'HOSPITALIZATION.STATUS02.2': '곤란',
    'HOSPITALIZATION.STATUS02.3': '불가능',

    'HOSPITALIZATION.DISEASE.HISTORY.1': '고혈압',
    'HOSPITALIZATION.DISEASE.HISTORY.2': '당뇨',
    'HOSPITALIZATION.DISEASE.HISTORY.3': '결핵',
    'HOSPITALIZATION.DISEASE.HISTORY.4': '간염',
    'HOSPITALIZATION.DISEASE.HISTORY.5': '암',

    'HOSPITALIZATION.BODY.CYCLE.1': '흉통',
    'HOSPITALIZATION.BODY.CYCLE.2': '심계항진',
    'HOSPITALIZATION.BODY.CYCLE.3': '부정맥',
    'HOSPITALIZATION.BODY.CYCLE.4': '인공심박동기',
    'HOSPITALIZATION.BODY.BREATH.1': '호흡곤란',
    'HOSPITALIZATION.BODY.BREATH.2': '기침',
    'HOSPITALIZATION.BODY.BREATH.3': '객담',
    'HOSPITALIZATION.BODY.BREATH.4': '객혈',
    'HOSPITALIZATION.BODY.CAMOUFLAGE.1': '오심',
    'HOSPITALIZATION.BODY.CAMOUFLAGE.2': '구토',
    'HOSPITALIZATION.BODY.CAMOUFLAGE.3': '복통',
    'HOSPITALIZATION.BODY.CAMOUFLAGE.4': '연하곤란',
    'HOSPITALIZATION.BODY.NERVE.1': '마비',
    'HOSPITALIZATION.BODY.NERVE.2': '저림',
    'HOSPITALIZATION.BODY.NERVE.3': '감각이상',
    'HOSPITALIZATION.BODY.NERVE.4': '현기증',
    'HOSPITALIZATION.BODY.SKIN.1': '발진',
    'HOSPITALIZATION.BODY.SKIN.2': '소양감',
    'HOSPITALIZATION.BODY.SKIN.3': '부종',

    'HOSPITALIZATION.HABIT.FECES.1': '정상',
    'HOSPITALIZATION.HABIT.FECES.2': '설사',
    'HOSPITALIZATION.HABIT.FECES.3': '혈변',
    'HOSPITALIZATION.HABIT.FECES.4': '변비',
    'HOSPITALIZATION.HABIT.FECES.5': '인공루',
    'HOSPITALIZATION.HABIT.URINE.1': '정상',
    'HOSPITALIZATION.HABIT.URINE.2': '작열감',
    'HOSPITALIZATION.HABIT.URINE.3': '빈뇨',
    'HOSPITALIZATION.HABIT.URINE.4': '실금',
    'HOSPITALIZATION.HABIT.URINE.5': '인공루',

    'HOSPITALIZATION.FUNCTIONAL.EVALUATION.1': '가능 (1점)',
    'HOSPITALIZATION.FUNCTIONAL.EVALUATION.2': '도움필요 (1점)',
    'HOSPITALIZATION.FUNCTIONAL.EVALUATION.3': '불가능 (2점)',

    'HOSPITALIZATION.MARRY.1': '기혼',
    'HOSPITALIZATION.MARRY.2': '미혼',

    'HOSPITALIZATION.ECONOMY.MIND.1': '안정',
    'HOSPITALIZATION.ECONOMY.MIND.2': '불안',
    'HOSPITALIZATION.ECONOMY.MIND.3': '슬픔',
    'HOSPITALIZATION.ECONOMY.MIND.4': '분노',
    'HOSPITALIZATION.ECONOMY.MIND.5': '우울',

    'HOSPITALIZATION.EDUCATION.WAY.1': '구두',
    'HOSPITALIZATION.EDUCATION.WAY.2': '유인물',
    'HOSPITALIZATION.EDUCATION.WAY.3': '시범',
    'HOSPITALIZATION.EDUCATION.WAY.4': '구두+유인물',
    'HOSPITALIZATION.EDUCATION.CONTENTS.1': '질환 및 치료',
    'HOSPITALIZATION.EDUCATION.CONTENTS.2': '약물',
    'HOSPITALIZATION.EDUCATION.CONTENTS.3': '영양',

    'HOSPITALIZATION.LIFE.1': '독립수행',
    'HOSPITALIZATION.LIFE.2': '부분적 도움필요',
    'HOSPITALIZATION.LIFE.3': '전적도움필요',
    'HOSPITALIZATION.DESTINATION.1': '자택',
    'HOSPITALIZATION.DESTINATION.2': '타병원',
    'HOSPITALIZATION.DESTINATION.3': '요양시설',
    'HOSPITALIZATION.GUARDIAN.1': '없음',
    'HOSPITALIZATION.GUARDIAN.2': '배우자',
    'HOSPITALIZATION.GUARDIAN.3': '부',
    'HOSPITALIZATION.GUARDIAN.4': '모',
    'HOSPITALIZATION.GUARDIAN.5': '자녀',

    // out hospital
    'OUT.HOSPITAL.DESTINATION.1': '자택',
    'OUT.HOSPITAL.DESTINATION.2': '타병원',
    'OUT.HOSPITAL.DESTINATION.3': '요양시설',
    'OUT.HOSPITAL.WAY.1': '요양시설',
    'OUT.HOSPITAL.WAY.2': '대중교통',
    'OUT.HOSPITAL.WAY.3': '구급차',
    'OUT.HOSPITAL.FOOD.1': '일반식',
    'OUT.HOSPITAL.FOOD.2': '처방식',
    'OUT.HOSPITAL.SHOWER.1': '샤워',
    'OUT.HOSPITAL.SHOWER.2': '통목욕',
    'OUT.HOSPITAL.ACTIVITY.1': '제한',
    'OUT.HOSPITAL.ACTIVITY.2': '제한없음',

    // clinical observation
    'CLINICAL.OBSERVATION.ADD.ROW': '입력하지 않은 값이 있습니다.',

    // bedScore
    'BED.SCORE.SENSORY.PERCEPTION.1': '완전 제한',
    'BED.SCORE.SENSORY.PERCEPTION.2': '매우 제한',
    'BED.SCORE.SENSORY.PERCEPTION.3': '약간 제한',
    'BED.SCORE.SENSORY.PERCEPTION.4': '제한 없음',
    'BED.SCORE.HUMIDITY.1': '항상 촉촉함',
    'BED.SCORE.HUMIDITY.2': '촉촉함',
    'BED.SCORE.HUMIDITY.3': '가끔 촉촉함',
    'BED.SCORE.HUMIDITY.4': '거의 촉촉하지 않음',
    'BED.SCORE.ACTIVITY.1': '침대에만 있음',
    'BED.SCORE.ACTIVITY.2': '주로 앉아 있음',
    'BED.SCORE.ACTIVITY.3': '가끔 보행함',
    'BED.SCORE.ACTIVITY.4': '자주 보행함',
    'BED.SCORE.MOBILITY.1': '완전 부동',
    'BED.SCORE.MOBILITY.2': '매우 제한',
    'BED.SCORE.MOBILITY.3': '약간 제한',
    'BED.SCORE.MOBILITY.4': '제한 없음',
    'BED.SCORE.NUTRITION.1': '매우 불량',
    'BED.SCORE.NUTRITION.2': '불량함',
    'BED.SCORE.NUTRITION.3': '적절함',
    'BED.SCORE.NUTRITION.4': '우수함',
    'BED.SCORE.FRICTION.1': '문제가 있음',
    'BED.SCORE.FRICTION.2': '잠재적 문제',
    'BED.SCORE.FRICTION.3': '문제 없음',
    'REQUIRED.BED.SCORE': '평가항목을 모두 선택해주세요',

    // needs
    'REQUIRED.NEEDS.BODY.STATUS': '신체상태 항목을 모두 선택해주세요',

    // fall
    'FALL.0': '없음 (0점)',
    'FALL.15': '있음 (15점)',
    'FALL.25': '있음 (25점)',
    'FALL.20': '있음 (20점)',
    'FALL.WALKING.AIDS.0': '없음/침상안정/간호보조 (0점)',
    'FALL.WALKING.AIDS.15': '목발/지팡이/보행기 (15점)',
    'FALL.WALKING.AIDS.30': '기구를 잡고 이동 (30점)',
    'FALL.GAIT.0': '정상/침상안정/부동 (0점)',
    'FALL.GAIT.10': '허약 (10점)',
    'FALL.GAIT.20': '장애 (20점)',
    'FALL.CONSCIOUSNESS.0': '자신의 기능수준을 인지함 (0점)',
    'FALL.CONSCIOUSNESS.15': '자신의 기능수준을 인지하지 못함 (15점)',
    'REQUIRED.FALL': '평가항목을 모두 선택해주세요',

    // nrs
    'NRS.ADD.ROW': '입력하지 않은 값이 있습니다.',

    // flacc
    'FLACC.ADD.ROW': '입력하지 않은 값이 있습니다.',

    // transfusion
    'BLOOD.RECORD.SIDE.EFFECT.1': '유',
    'BLOOD.RECORD.SIDE.EFFECT.2': '무',

    // dialysis
    'DIALYSIS.DIALYSIS_INFO.ROUTE.1': '외래',
    'DIALYSIS.DIALYSIS_INFO.ROUTE.2': '응급실',
    'DIALYSIS.DIALYSIS_INFO.ROUTE.3': '입원',
    'DIALYSIS.DIALYSIS_INFO.ROUTE.0': '기타',

    'DIALYSIS.DIALYSIS_INFO.BLOOD_VESSEL.1': 'AVF',
    'DIALYSIS.DIALYSIS_INFO.BLOOD_VESSEL.2': 'AVG',
    'DIALYSIS.DIALYSIS_INFO.BLOOD_VESSEL.3': 'Perm C',
    'DIALYSIS.DIALYSIS_INFO.BLOOD_VESSEL.4': 'JVC',
    'DIALYSIS.DIALYSIS_INFO.BLOOD_VESSEL.5': 'SVC',
    'DIALYSIS.DIALYSIS_INFO.BLOOD_VESSEL.6': 'FVC',
    'DIALYSIS.DIALYSIS_INFO.BLOOD_VESSEL.0': '기타',

    // emergency
    'EMERGENCY.ACCIDENT_TYPE.1': '긴급',
    'EMERGENCY.ACCIDENT_TYPE.2': '응급',
    'EMERGENCY.ACCIDENT_TYPE.3': '비응급',

    'EMERGENCY.DIVISION.1': '사고',
    'EMERGENCY.DIVISION.2': '재해',
    'EMERGENCY.DIVISION.3': '급성질환',
    'EMERGENCY.DIVISION.4': '만성질환 급속악화',
    'EMERGENCY.DIVISION.0': '기타',

    // childbirth
    'CHILDBIRTH.BABY_STATUS.GENDER.1': '남아',
    'CHILDBIRTH.BABY_STATUS.GENDER.2': '여아',

    'CHILDBIRTH.YES_OR_NO.1': '무',
    'CHILDBIRTH.YES_OR_NO.2': '유',

    'CHILDBIRTH.PLACENTA_REMOVAL.METHOD.1' : '자연박리',
    'CHILDBIRTH.PLACENTA_REMOVAL.METHOD.2' : '용수박리',

    // diet_nutrition
    'DIET_NUTRITION.CLASSIFICATION.1': '환자',
    'DIET_NUTRITION.CLASSIFICATION.2': '보호자',
  },
};

export default locale;
