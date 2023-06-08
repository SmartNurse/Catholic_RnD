import camelcaseKeys from 'camelcase-keys';

import { formatToRequestParameter } from 'utils/formatting';
import apiGateway from '../axios';
import {
  IGetSurvey,
  ICreateHospitalization,
  ICreateOutHospital,
  IUpdateMedication,
  IUpdateFall,
  IUpdateFallTwo,
  IUpdatePediatric_fall,
  IUpdateGCS,
  IUpdatePediatric_GCS,
  IUpdateFourScore,
  IUpdateBedScore,
  IUpdateNeeds,
  IUpdateClinicObservation,
  IUpdateTakingOver,
  IUpdateECardex,
  IUpdateGlucose,
  IUpdateSafety,
  IUpdateCNPS,
  IUpdateFLACC,
  IUpdateNRS,
  IUpdateMentalNursing,
  IUpdateBDI,
  IUpdateBAI,
  IUpdateMMSE,
  IUpdateCIST,
  IUpdateOperation,
  IUpdateAnesthesia,
  IUpdateTransfusion,
  IUpdateDialysis,
  IUpdateEmergency,
  IUpdateChildbirth,
  IUpdateHomeCare,
  IUpdateDietNutrition,
  IUpdateHospitalConfirm,
  IUpdateFallConfirm,
  IUpdateColonoscopy,
  IUpdateUpperEndoscopy,
  IUpdateNonSalary,
  IUpdateMedicalRecords,
  IUpdateDNR,
  IUpdateDNA,
} from './type';

// e-CARDEX
export const getECardex = (request: IGetSurvey) => {
  const url = `/survey/ecardex?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const updateECardex = (request: IUpdateECardex) => {
  const url = `/survey/ecardex`;
  return apiGateway.post(url, camelcaseKeys(request));
};

// 간호인수인계
export const getTakingOver = (request: IGetSurvey) => {
  const url = `/survey/takeover?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const updateTakingOver = (request: IUpdateTakingOver) => {
  const url = `/survey/takeover`;
  return apiGateway.post(url, camelcaseKeys(request));
};

// 입원간호기록지
export const getHospitalization = (request: IGetSurvey) => {
  const url = `/survey/hospital?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const createHospitalization = (request: ICreateHospitalization) => {
  const url = `/survey/hospital`;
  return apiGateway.post(url, camelcaseKeys(request));
};

// 퇴원간호기록지
export const getOutHospital = (request: IGetSurvey) => {
  const url = `/survey/out/hospital?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const createOutHospital = (request: ICreateOutHospital) => {
  const url = `/survey/out/hospital`;
  return apiGateway.post(url, camelcaseKeys(request));
};

// 처방기록지
export const getMedication = (request: IGetSurvey) => {
  const url = `/survey/medication?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const updateMedication = (request: IUpdateMedication) => {
  const url = `/survey/medication`;
  return apiGateway.post(url, camelcaseKeys(request));
};

// 영상검사기록지
export const getRadiology = (request: IGetSurvey) => {
  const url = `/survey/radiology?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

// 임상병리검사기록지
export const getPathology = (request: IGetSurvey) => {
  const url = `/survey/pathology?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

// 임상관찰기록지
export const getClinicObservation = (request: IGetSurvey) => {
  const url = `/survey/clinicObservation?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const updateClinicObservation = (request: IUpdateClinicObservation) => {
  const url = `/survey/clinicObservation`;
  return apiGateway.post(url, camelcaseKeys(request));
};

// 혈당기록지
export const getGlucose = (request: IGetSurvey) => {
  const url = `/survey/bloodSugar?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const updateGlucose = (request: IUpdateGlucose) => {
  const url = `/survey/bloodSugar`;
  return apiGateway.post(url, camelcaseKeys(request));
};

// 욕창위험도평가도구
export const getBedScore = (request: IGetSurvey) => {
  const url = `/survey/bedsore?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const updateBedScore = (request: IUpdateBedScore) => {
  const url = `/survey/bedsore`;
  return apiGateway.post(url, camelcaseKeys(request));
};

// 욕구평가기록지
export const getNeeds = (request: IGetSurvey) => {
  const url = `/survey/needs?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const updateNeeds = (request: IUpdateNeeds) => {
  const url = `/survey/needs`;
  return apiGateway.post(url, camelcaseKeys(request));
};

// 낙상위험도평가도구 I
export const getFall = (request: IGetSurvey) => {
  const url = `/survey/fall?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const updateFall = (request: IUpdateFall) => {
  const url = `/survey/fall`;
  return apiGateway.post(url, camelcaseKeys(request));
};

// 낙상위험 평가도구 II
export const getFallTwo = (request: IGetSurvey) => {
  const url = `/survey/fall?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const updateFallTwo = (request: IUpdateFallTwo) => {
  const url = `/survey/fall`;
  return apiGateway.post(url, camelcaseKeys(request));
};

// 소아 낙상위험 평가
export const getPediatric_fall = (request: IGetSurvey) => {
  const url = `/survey/pediatric_fall?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const updatePediatric_fall = (request: IUpdatePediatric_fall) => {
  const url = `/survey/pediatric_fall`;
  return apiGateway.post(url, camelcaseKeys(request));
};

// GCS
export const getGCS = (request: IGetSurvey) => {
  const url = `/survey/gcs?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const updateGCS = (request: IUpdateGCS) => {
  const url = `/survey/gcs`;
  return apiGateway.post(url, camelcaseKeys(request));
};

// Pediatric_GCS
export const getPediatric_GCS = (request: IGetSurvey) => {
  const url = `/survey/pediatric_gcs?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const updatePediatric_GCS = (request: IUpdatePediatric_GCS) => {
  const url = `/survey/pediatric_gcs`;
  return apiGateway.post(url, camelcaseKeys(request));
};

// Four Score
export const getFourScore = (request: IGetSurvey) => {
  const url = `/survey/FOUR_Score?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const updateFourScore = (request: IUpdateFourScore) => {
  const url = `/survey/FOUR_Score`;
  return apiGateway.post(url, camelcaseKeys(request));
};

// 환자안전사고보고서
export const getSafety = (request: IGetSurvey) => {
  const url = `/survey/safety?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const updateSafety = (request: IUpdateSafety) => {
  const url = `/survey/safety`;
  return apiGateway.post(url, camelcaseKeys(request));
};

// NRS
export const getNRS = (request: IGetSurvey) => {
  const url = `/survey/nrs?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const updateNRS = (request: IUpdateNRS) => {
  const url = `/survey/nrs`;
  return apiGateway.post(url, camelcaseKeys(request));
};

// FLACC
export const getFLACC = (request: IGetSurvey) => {
  const url = `/survey/flacc?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const updateFLACC = (request: IUpdateFLACC) => {
  const url = `/survey/flacc`;
  return apiGateway.post(url, camelcaseKeys(request));
};

// CNPS
export const getCNPS = (request: IGetSurvey) => {
  const url = `/survey/cnps?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const updateCNPS = (request: IUpdateCNPS) => {
  const url = `/survey/cnps`;
  return apiGateway.post(url, camelcaseKeys(request));
};

// 정신간호 기록지
export const getMentalNursing = (request: IGetSurvey) => {
  const url = `/survey/mental?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const updateMentalNursing = (request: IUpdateMentalNursing) => {
  const url = `/survey/mental`;
  return apiGateway.post(url, camelcaseKeys(request));
};

// BDI
export const getBDI = (request: IGetSurvey) => {
  const url = `/survey/bdi?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const updateBDI = (request: IUpdateBDI) => {
  const url = `/survey/bdi`;
  return apiGateway.post(url, camelcaseKeys(request));
};

// BAI
export const getBAI = (request: IGetSurvey) => {
  const url = `/survey/bai?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const updateBAI = (request: IUpdateBAI) => {
  const url = `/survey/bai`;
  return apiGateway.post(url, camelcaseKeys(request));
};

// MMSE
export const getMMSE = (request: IGetSurvey) => {
  const url = `/survey/mmse?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const updateMMSE = (request: IUpdateMMSE) => {
  const url = `/survey/mmse`;
  return apiGateway.post(url, camelcaseKeys(request));
};

// CIST IUpdate
export const getCIST = (request: IGetSurvey) => {
  const url = `/survey/cist?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const updateCIST = (request: IUpdateCIST) => {
  const url = `/survey/cist`;
  return apiGateway.post(url, camelcaseKeys(request));
};

// 수술기록지
export const getOperation = (request: IGetSurvey) => {
  const url = `/survey/surgical?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const updateOperation = (request: IUpdateOperation) => {
  const url = `/survey/surgical`;
  return apiGateway.post(url, camelcaseKeys(request));
};

// 마취 기록지
export const getAnesthesia = (request: IGetSurvey) => {
  const url = `/survey/anesthetic?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const updateAnestheia = (request: IUpdateAnesthesia) => {
  const url = `/survey/anesthetic`;
  return apiGateway.post(url, camelcaseKeys(request));
};

// 수혈기록지
export const getTransfusion = (request: IGetSurvey) => {
  const url = `/survey/transfusion?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const updateTransfusion = (request: IUpdateTransfusion) => {
  const url = `/survey/transfusion`;
  return apiGateway.post(url, camelcaseKeys(request));
};

// 투석기록지
export const getDialysis = (request: IGetSurvey) => {
  const url = `/survey/hemodialysis?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const updateDialysis = (request: IUpdateDialysis) => {
  const url = `/survey/hemodialysis`;
  return apiGateway.post(url, camelcaseKeys(request));
};

// 응급기록지
export const getEmergency = (request: IGetSurvey) => {
  const url = `/survey/emergency?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const updateEmergency = (request: IUpdateEmergency) => {
  const url = `/survey/emergency`;
  return apiGateway.post(url, camelcaseKeys(request));
};

// 분만기록지
export const getChildbirth = (request: IGetSurvey) => {
  const url = `/survey/delivery?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const updateChildbirth = (request: IUpdateChildbirth) => {
  const url = `/survey/delivery`;
  return apiGateway.post(url, camelcaseKeys(request));
};

// 가정간호 기록지
export const getHomeCare = (request: IGetSurvey) => {
  const url = `/survey/homecare?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const updateHomeCare = (request: IUpdateHomeCare) => {
  const url = `/survey/homecare`;
  return apiGateway.post(url, camelcaseKeys(request));
};

// 식이/영양 기록지
export const getDietNutrition = (request: IGetSurvey) => {
  const url = `/survey/dietary?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const updateDietNutrition = (request: IUpdateDietNutrition) => {
  const url = `/survey/dietary`;
  return apiGateway.post(url, camelcaseKeys(request));
};

// 입원안내확인서
export const getHospitalConfirm = (request: IGetSurvey) => {
  const url = `/survey/hospitalConfirm?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const updateHospitalConfirm = (request: IUpdateHospitalConfirm) => {
  const url = `/survey/hospitalConfirm`;
  return apiGateway.post(url, camelcaseKeys(request));
};

// 낙상예방교육확인서
export const getFallConfirm = (request: IGetSurvey) => {
  const url = `/survey/fallConfirm?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const updateFallConfirm = (request: IUpdateFallConfirm) => {
  const url = `/survey/fallConfirm`;
  return apiGateway.post(url, camelcaseKeys(request));
};

// 대장 내시경
export const getColonoscopy = (request: IGetSurvey) => {
  const url = `/survey/colonoScopyConfirm?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const updateColonoscopy = (request: IUpdateColonoscopy) => {
  const url = `/survey/colonoScopyConfirm`;
  return apiGateway.post(url, camelcaseKeys(request));
};

// 상부내시경
export const getUpperEndoscopy = (request: IGetSurvey) => {
  const url = `/survey/fallConfirm?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const updateUpperEndoscopy = (request: IUpdateUpperEndoscopy) => {
  const url = `/survey/fallConfirm`;
  return apiGateway.post(url, camelcaseKeys(request));
};

// 비급여확인서
export const getNonSalary = (request: IGetSurvey) => {
  const url = `/survey/fallConfirm?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const updateNonSalary = (request: IUpdateNonSalary) => {
  const url = `/survey/fallConfirm`;
  return apiGateway.post(url, camelcaseKeys(request));
};

// 진료 기록
export const getMedicalRecords = (request: IGetSurvey) => {
  const url = `/survey/fallConfirm?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const updateMedicalRecords = (request: IUpdateMedicalRecords) => {
  const url = `/survey/fallConfirm`;
  return apiGateway.post(url, camelcaseKeys(request));
};

// DNR
export const getDNR = (request: IGetSurvey) => {
  const url = `/survey/fallConfirm?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const updateDNR = (request: IUpdateDNR) => {
  const url = `/survey/fallConfirm`;
  return apiGateway.post(url, camelcaseKeys(request));
};

// 낙상예방교육확인서
export const getDNA = (request: IGetSurvey) => {
  const url = `/survey/fallConfirm?${formatToRequestParameter(request)}`;
  return apiGateway.get(url);
};

export const updateDNA = (request: IUpdateDNA) => {
  const url = `/survey/fallConfirm`;
  return apiGateway.post(url, camelcaseKeys(request));
};
