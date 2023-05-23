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
    'YESORNO.1': '예',
    'YESORNO.2': '아니오',
    'CIST.SCORE.1': '0',
    'CIST.SCORE.2': '1',

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
    'RECORD.4': '간호과정',
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
    'REMARKS.ASSESSMENT': '간호사정 (Assessment)',
    'REMARKS.DIAGNOSIS': '간호진단 (Diagnosis)',
    'REMARKS.DIAGNOSISRELATE': '와/과 관련된',
    'REMARKS.GOAL': '간호목표 (Goal)',
    'REMARKS.PLAN': '간호계획 (Plan)',
    'REMARKS.INTERVENTIONS': '간호수행/중재/이론적 근거 (Interventions)',
    'REMARKS.EVALUATION': '간호평가 (Evaluation)',
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
    'HOSPITALIZATION.BODY.SKIN.4': '궤양',

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

    'HOSPITALIZATION.FUNCTIONAL.EVALUATION.1': '가능 (0점)',
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
    'CLINICAL.OBSERVATION.STOP': '가상 환자 1명 당 5개까지 입력 가능합니다',
    'CLINICAL.OBSERVATION.ADD.NAN': '연락처는 숫자만 입력해주세요.',
    'REQUIRED.CONTACK.FORMAT':
      '비상연락처는 숫자로만 10자리 이상 입력해주세요.',

    // bedScore I
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

    // bedScore II
    'BED.SCORETWO.SENSORY.PERCEPTION.1': '완전 제한',
    'BED.SCORETWO.SENSORY.PERCEPTION.2': '매우 제한',
    'BED.SCORETWO.SENSORY.PERCEPTION.3': '약간 제한',
    'BED.SCORETWO.SENSORY.PERCEPTION.4': '장애 없음',
    'BED.SCORETWO.HUMIDITY.1': '지속적으로 습함',
    'BED.SCORETWO.HUMIDITY.2': '습함',
    'BED.SCORETWO.HUMIDITY.3': '때때로 습함',
    'BED.SCORETWO.HUMIDITY.4': '거의 습하지 않음',
    'BED.SCORETWO.ACTIVITY.1': '침상 안정',
    'BED.SCORETWO.ACTIVITY.2': '의자에 앉을 수 있음',
    'BED.SCORETWO.ACTIVITY.3': '때때로 보행',
    'BED.SCORETWO.ACTIVITY.4': '정상',
    'BED.SCORETWO.MOBILITY.1': '전혀 없음',
    'BED.SCORETWO.MOBILITY.2': '매우 제한',
    'BED.SCORETWO.MOBILITY.3': '약간 제한',
    'BED.SCORETWO.MOBILITY.4': '정상',
    'BED.SCORETWO.NUTRITION.1': '불량',
    'BED.SCORETWO.NUTRITION.2': '부적절함',
    'BED.SCORETWO.NUTRITION.3': '적절함',
    'BED.SCORETWO.NUTRITION.4': '정상',
    'BED.SCORETWO.FRICTION.1': '문제 있음',
    'BED.SCORETWO.FRICTION.2': '잠재적 문제 있음',
    'BED.SCORETWO.FRICTION.3': '문제 없음',
    'REQUIRED.BED.SCORETWO': '평가항목을 모두 선택해주세요',

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

    // fall II
    'FALLTWO.0': '없음 (0점)',
    'FALLTWO.15': '있음 (15점)',
    'FALLTWO.25': '있음 (25점)',
    'FALLTWO.20': '있음 (20점)',
    'FALLTWO.WALKING.AIDS.0':
      '보조기 사용하지 않음/침상안정/ \n휠체어/사람이 도와줌 (0점)',
    'FALLTWO.WALKING.AIDS.15': '목발/지팡이/보행기 (15점)',
    'FALLTWO.WALKING.AIDS.30':
      '보조기 이외에 주변 기물/기구를 잡고 보행 (30점)',
    'FALLTWO.GAIT.0': '정상보행(0점) \n (시선, 균형, 보폭 유지/침상안정/부동)',
    'FALLTWO.GAIT.10': '균형 및 시선 유지되지만, 기력이 저하됨 (10점)',
    'FALLTWO.GAIT.20':
      '장애가 있음 (20점) \n (사람이나 기구의 도움 없이는 걸을 수 없는 사람/\n시선 및 균형 유지불가능/의족 착용/파킨슨 보행',
    'FALLTWO.CONSCIOUSNESS.0':
      '의식 명료하며 자신의 기능 수준에 대해 \n 잘 알고 있음 (0점)',
    'FALLTWO.CONSCIOUSNESS.15':
      '의식 명료하지 않거나 자신의 기능 수준을 \n 과대평가하거나 잊어버림 (15점)',
    'REQUIRED.FALLTWO': '평가항목을 모두 선택해주세요',

    // FallScale
    'FALLSCALE.SCORE.AGE.1': '3개월 미만, 13세 이상',
    'FALLSCALE.SCORE.AGE.2': '7세 이상~13세 미만',
    'FALLSCALE.SCORE.AGE.3': '3세 이상~7세 미만',
    'FALLSCALE.SCORE.AGE.4': '3개월 이상~3세 미만',

    'FALLSCALE.SCORE.GENDER.1': '여아',
    'FALLSCALE.SCORE.GENDER.2': '남아',

    'FALLSCALE.SCORE.DIANOSIS.1': '그 밖의 다른 진단',
    'FALLSCALE.SCORE.DIANOSIS.2': '정신/행동 장애 관련 진단',
    'FALLSCALE.SCORE.DIANOSIS.3':
      '산소량 변화 진단\n(호흡기적 진단, 탈수, 빈혈,\n식욕감퇴, 실신, 어지러움 등)',
    'FALLSCALE.SCORE.DIANOSIS.4': '신경학적 진단',

    'FALLSCALE.SCORE.COGNITIVE.1': '자기 능력을 알고 있음',
    'FALLSCALE.SCORE.COGNITIVE.2': '능력의 한계를 알고 있지만\n시행하지 않음',
    'FALLSCALE.SCORE.COGNITIVE.3':
      '4세 이상이나 능력의 한계를 알지못함\n또는 4세 미만 환자',

    'FALLSCALE.SCORE.ENVIRONMENTAL.1': '해당없음',
    'FALLSCALE.SCORE.ENVIRONMENTAL.2': '보조기(휠체어, 워커, 목발) 사용함',
    'FALLSCALE.SCORE.ENVIRONMENTAL.3': '낙상 경험 있음',

    'FALLSCALE.SCORE.HISTORY.1': '시행 후 48시간 이상 / 해당없음',
    'FALLSCALE.SCORE.HISTORY.2': '시행 후 48시간 이내',
    'FALLSCALE.SCORE.HISTORY.3': '시행 후 24시간 이내',

    'FALLSCALE.SCORE.DRUG.1': '다른 약물/ 해당 없음',
    'FALLSCALE.SCORE.DRUG.2': '위 약물중 하나',
    'FALLSCALE.SCORE.DRUG.3':
      '2가지 이상\n(진정제, 수면제, 최면제, 정신안정제,\n항불안제, 완화제, 진통제)',

    'REQUIRED.FALLSCALE.SCORE': '평가항목을 모두 선택해주세요',

    // safety
    'SAFETY.DISCOVERY.PLACE.1': '병동',
    'SAFETY.DISCOVERY.PLACE.2': '외래',
    'SAFETY.DISCOVERY.PLACE.3': '환자 대기실',
    'SAFETY.DISCOVERY.PLACE.4': '계단',
    'SAFETY.DISCOVERY.PLACE.5': '검사실',
    'SAFETY.DISCOVERY.PLACE.0': '기타',

    'SAFETY.ACCIDENT.TYPE.1': '적신호사건',
    'SAFETY.ACCIDENT.TYPE.2': '위해사건',
    'SAFETY.ACCIDENT.TYPE.3': '근접오류',

    'SAFETY.ACCIDENT.CLASSIFICATION.1': '낙상',
    'SAFETY.ACCIDENT.CLASSIFICATION.2': '투약',
    'SAFETY.ACCIDENT.CLASSIFICATION.3': '검사 관련',
    'SAFETY.ACCIDENT.CLASSIFICATION.4': '화상',
    'SAFETY.ACCIDENT.CLASSIFICATION.5': '자해, 자살',
    'SAFETY.ACCIDENT.CLASSIFICATION.6': '수혈',
    'SAFETY.ACCIDENT.CLASSIFICATION.7': '수술',
    'SAFETY.ACCIDENT.CLASSIFICATION.8': '영유아 유괴',
    'SAFETY.ACCIDENT.CLASSIFICATION.0': '기타',

    'SAFETY.EVENT.CLASSIFICATION.8': '[적신호사건] 8등급: 환자 사망',
    'SAFETY.EVENT.CLASSIFICATION.7':
      '[적신호사건] 7등급: 환자에게 사망에 가까운 위험한 상황 초래',
    'SAFETY.EVENT.CLASSIFICATION.6':
      '[적신호사건] 6등급: 영구적인 손상, 잘못된 부위 시술 및 수술',
    'SAFETY.EVENT.CLASSIFICATION.5':
      '[위해사건] 5등급: 일시적 손상으로 입원을 하였거나 입원기간이 연장됨',
    'SAFETY.EVENT.CLASSIFICATION.4':
      '[위해사건] 4등급: 일시적 손상으로 중재가 필요함 (검사, 내/외과적 치료 등)',
    'SAFETY.EVENT.CLASSIFICATION.3':
      '[위해사건] 3등급: 환자에게 투여/적용되었으며 추가적인 관찰이 필요함',
    'SAFETY.EVENT.CLASSIFICATION.2':
      '[위해사건] 2등급: 환자에게 투여/적용되었으나 해가 없음',
    'SAFETY.EVENT.CLASSIFICATION.1':
      '[근접오류] 1등급: 오류가 발생하였으나 환자에게 도달하지 않음',
    'SAFETY.EVENT.CLASSIFICATION.0':
      '[근접오류] 0등급: 오류가 발생할 위험이 있는 상황',

    'SAFETY.TYPE.CONSCIOUSNESS.LEVEL.1': '명료',
    'SAFETY.TYPE.CONSCIOUSNESS.LEVEL.2': '졸음',
    'SAFETY.TYPE.CONSCIOUSNESS.LEVEL.3': '혼돈',
    'SAFETY.TYPE.CONSCIOUSNESS.LEVEL.4': '혼미',
    'SAFETY.TYPE.CONSCIOUSNESS.LEVEL.5': '혼수',

    'SAFETY.TYPE.ACTIVITY.STATUS.1': '독립적',
    'SAFETY.TYPE.ACTIVITY.STATUS.2': '부분적 도움',
    'SAFETY.TYPE.ACTIVITY.STATUS.3': '항상 도움',
    'SAFETY.TYPE.ACTIVITY.STATUS.4': '의존적',
    'SAFETY.TYPE.ACTIVITY.STATUS.5': '침상 안전 상태',

    'SAFETY.TYPE.ASSISTING.DEVICES.1': '휠체어',
    'SAFETY.TYPE.ASSISTING.DEVICES.2': '보행 보조기구',
    'SAFETY.TYPE.ASSISTING.DEVICES.0': '사용 안함',

    'SAFETY.TYPE.PLACE.FALLING.ACCIDENT.1': '병실',
    'SAFETY.TYPE.PLACE.FALLING.ACCIDENT.2': '화장실',
    'SAFETY.TYPE.PLACE.FALLING.ACCIDENT.3': '샤워실',
    'SAFETY.TYPE.PLACE.FALLING.ACCIDENT.4': '복도',
    'SAFETY.TYPE.PLACE.FALLING.ACCIDENT.5': '검사실',
    'SAFETY.TYPE.PLACE.FALLING.ACCIDENT.0': '기타',

    'SAFETY.PATIENT.RISK.FACTORS.1': '흥분',
    'SAFETY.PATIENT.RISK.FACTORS.2': '어지러움',
    'SAFETY.PATIENT.RISK.FACTORS.3': '전신쇠약',
    'SAFETY.PATIENT.RISK.FACTORS.4': '마비',
    'SAFETY.PATIENT.RISK.FACTORS.5': '낙상 과거력 (3개월 이내)',
    'SAFETY.PATIENT.RISK.FACTORS.6': '시력장애',
    'SAFETY.PATIENT.RISK.FACTORS.7': '평형장애',
    'SAFETY.PATIENT.RISK.FACTORS.8': '보행장애',
    'SAFETY.PATIENT.RISK.FACTORS.9': '수면장애',
    'SAFETY.PATIENT.RISK.FACTORS.10': '해당 없음',

    'SAFETY.TYPE.FALL.TYPE.1': '침대 사용 시',
    'SAFETY.TYPE.FALL.TYPE.2': '의료장비 사용 시',
    'SAFETY.TYPE.FALL.TYPE.3': '기립 보행 시',
    'SAFETY.TYPE.FALL.TYPE.4': '의자 사용 시',

    'SAFETY.TYPE.RISK.FACTOR.1': '침대 바퀴 고정 안함',
    'SAFETY.TYPE.RISK.FACTOR.2': '보조 난간 내려짐',
    'SAFETY.TYPE.RISK.FACTOR.3': '바닥 물기',
    'SAFETY.TYPE.RISK.FACTOR.4': '발에 맞지 않는 신발',
    'SAFETY.TYPE.RISK.FACTOR.5': '주변 물건에 걸려 넘어짐',
    'SAFETY.TYPE.RISK.FACTOR.0': '기타',

    'SAFETY.TYPE.PRESCRIPTION.1': '용량',
    'SAFETY.TYPE.PRESCRIPTION.2': '환자',
    'SAFETY.TYPE.PRESCRIPTION.3': '경로',
    'SAFETY.TYPE.PRESCRIPTION.4': '약제',
    'SAFETY.TYPE.PRESCRIPTION.0': '기타',

    'SAFETY.TYPE.CONFIRM.1': '처방 확인 안함',
    'SAFETY.TYPE.CONFIRM.2': '투약 직전 환자 확인 안함',
    'SAFETY.TYPE.CONFIRM.3': '투약 직전 약제 확인 안함',
    'SAFETY.TYPE.CONFIRM.4': '투약 직전 용량 확인 안함',
    'SAFETY.TYPE.CONFIRM.5': '투약 직전 경로 확인 안함',
    'SAFETY.TYPE.CONFIRM.6': '투약 직전 투약 카드 확인 안함',
    'SAFETY.TYPE.CONFIRM.7': '약물 유효기간 확인 안함',

    'SAFETY.TYPE.INTERPRETATION.1': '처방 해석 오류',
    'SAFETY.TYPE.INTERPRETATION.2': '투약 카드 잘못 해석',

    'SAFETY.OTHER.TYPE.1': '검사 관련',
    'SAFETY.OTHER.TYPE.2': '화상',
    'SAFETY.OTHER.TYPE.3': '자해, 자살',
    'SAFETY.OTHER.TYPE.4': '수혈',
    'SAFETY.OTHER.TYPE.5': '잘못된 위치 시술, 수술',
    'SAFETY.OTHER.TYPE.6': '영유아 유괴',
    'SAFETY.OTHER.TYPE.0': '기타',

    'SAFETY.ACCIDENT.RESULT.1': '후유증 없이 치료 됨',
    'SAFETY.ACCIDENT.RESULT.2': '추후 관찰 필요',
    'SAFETY.ACCIDENT.RESULT.3': '특별한 이상 없음',

    // nrs
    'NRS.ADD.ROW': '입력하지 않은 값이 있습니다.',

    // flacc
    'FLACC.ADD.ROW': '입력하지 않은 값이 있습니다.',

    // bai
    'REQUIRED.BAI': '평가항목을 모두 선택해주세요',

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

    'EMERGENGY.RESULT.0': '입원',
    'EMERGENGY.RESULT.1': '전원',
    'EMERGENGY.RESULT.2': '귀가',
    'EMERGENGY.RESULT.3': '사망',
    'EMERGENGY.RESULT.4': '기타',

    'EMERGENGY.CHECKDISEASE.1': '보호자 1인 상주',
    'EMERGENGY.CHECKDISEASE.2': '도난 방지',
    'EMERGENGY.CHECKDISEASE.3': '낙상 방지',
    'EMERGENGY.CHECKDISEASE.4': '기타',

    // childbirth
    'CHILDBIRTH.BABY_STATUS.GENDER.1': '남아',
    'CHILDBIRTH.BABY_STATUS.GENDER.2': '여아',

    'CHILDBIRTH.YES_OR_NO.1': '무',
    'CHILDBIRTH.YES_OR_NO.2': '유',

    'CHILDBIRTH.PLACENTA_REMOVAL.METHOD.1': '자연박리',
    'CHILDBIRTH.PLACENTA_REMOVAL.METHOD.2': '용수박리',

    // home_care
    'HOME_CARE.INSURANCE_TYPE.1': '건강보험',
    'HOME_CARE.INSURANCE_TYPE.2': '의료급여',
    'HOME_CARE.INSURANCE_TYPE.3': '보훈',

    'HOME_CARE.RESIDENCE.1': '아파트',
    'HOME_CARE.RESIDENCE.2': '연립',
    'HOME_CARE.RESIDENCE.3': '단독주택',

    'HOME_CARE.SANITARY.1': '양호',
    'HOME_CARE.SANITARY.2': '불량',

    'HOME_CARE.SAFETY.1': '양호',
    'HOME_CARE.SAFETY.2': '불량',

    // diet_nutrition
    'DIET_NUTRITION.CLASSIFICATION.1': '환자',
    'DIET_NUTRITION.CLASSIFICATION.2': '보호자',

    //CoreNursingSkillVideo
    'REQUIRED.VIDIEO.FORMAT': '500MB가 넘는 파일은 업로드할 수 없습니다.',

    // DNR
    'DNR.DEATHRECORD.1': '열람 가능',
    'DNR.DEATHRECORD.2': '열람 거부',
    'DNR.DEATHRECORD.0': '기타',

    'DNR.EXPLANATION.1': '서명 :       날짜',
    'DNR.EXPLANATION.2': '녹화',
    'DNR.EXPLANATION.3': '녹취',
  },
};

export default locale;
