import {
  getECardex,
  getTakingOver,
  getBedScore,
  getClinicObservation,
  getGlucose,
  getFall,
  getHospitalization,
  getMedication,
  getNeeds,
  getOutHospital,
  getPathology,
  getRadiology,
  getNRS,
  getFLACC,
  getCNPS,
  getOperation,
  getAnesthesia,
  getTransfusion,
  getDialysis,
  getEmergency,
  getChildbirth,
  getDietNutrition,
  getFallConfirm,
  getHospitalConfirm,
  getMentalNursing,
} from 'apis/survey';
import useNotification from 'hooks/useNotification';
import { findKeyValueToObj, findKeyValueToObjNoParse } from 'utils/convert';

import {
  initialECardex,
  initialTakingOver,
  initialOutHospitalSurvey,
  initialHospitalizationSurvey,
  initialMedicationSurvey,
  initialRadiology,
  initialPathology,
  initialBedScore,
  initialFall,
  initialNeeds,
  initialClinicalObservation,
  initialGlucose,
  initialNRS,
  initialFLACC,
  initialCNPS,
  initialMentalNursing,
  initialOperation,
  initialAnesthesia,
  initialTransfusion,
  initialDialysis,
  initialEmergency,
  initialChildbirth,
  initialDietNutrition,
  initialHospitalConfirm,
  initialFallConfirm,
  initialCoreNursingSkillVideo,
} from '../initialStates';
import { MENU } from '../type';

interface Props {
  user_id: number;
  setDefaultValues: (v: any) => void;
}

const useDefaultValues = ({ setDefaultValues, user_id }: Props) => {
  const { onFail } = useNotification();

  const convertDataToStates = (data: any, states: any) => {
    const values = { ...states };
    const keys = Object.keys(states);
    
    for (let key of keys) {
      const getValue = data[key];

      if (typeof getValue !== 'object' || Array.isArray(getValue)) {
        values[key] = getValue;
      } else if (getValue) {
        try {
          values[key] = findKeyValueToObj(getValue, Object.keys(getValue));
        } catch {
          values[key] =findKeyValueToObjNoParse(getValue, Object.keys(getValue));
        }
      }
    }
    
    setDefaultValues(values);
  };

  const onGetDefaultValues = (patient_id: number, type: string) => {
    switch (type) {
      case MENU.E_CARDEX:
        getECardex({ user_id, patient_id })
          .then(({ data }) => {
            const { update_at, ecardex_survey } = data;
            convertDataToStates({ update_at, ...ecardex_survey }, initialECardex);
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e)); 
        break;
      case MENU.TAKING_OVER:
        getTakingOver({ user_id, patient_id })
          .then(({ data }) => {
            const { update_at, take_over_survey } = data;
            convertDataToStates({ update_at, ...take_over_survey }, initialTakingOver);
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.HOSPITALIZATION:
        getHospitalization({ user_id, patient_id })
          .then(({ data }) => {
            const { hospitalization_survey } = data;
            convertDataToStates(
              hospitalization_survey,
              initialHospitalizationSurvey
            );
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.OUT_HOSPITAL:
        getOutHospital({ user_id, patient_id })
          .then(({ data }) => {
            const { out_hospital_survey } = data;
            convertDataToStates(out_hospital_survey, initialOutHospitalSurvey);
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.MEDICATION:
        getMedication({ user_id, patient_id })
          .then(({ data }) => {
            convertDataToStates(data, initialMedicationSurvey);
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.RADIOLOGY:
        getRadiology({ user_id, patient_id })
          .then(({ data }) => {
            convertDataToStates(data, initialRadiology);
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.PATHOLOGY:
        getPathology({ user_id, patient_id })
          .then(({ data }) => {
            convertDataToStates(data, initialPathology);
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.CLINICAL_OBSERVATION:
        getClinicObservation({ user_id, patient_id })
          .then(({ data }) => {
            const { vital_sign, io_check } = data;
            const m_data = {
              ...data,
              vital_sign: JSON.parse(vital_sign),
              io_check: JSON.parse(io_check),
            };
            convertDataToStates(m_data, initialClinicalObservation);
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.CLINICAL_OBSERVATION:
        // getClinicObservation({ user_id, patient_id }).then(({ data }) => {
        //   const { vital_sign, io_check } = data;
        //   const m_data = {
        //     ...data,
        //     vital_sign: JSON.parse(vital_sign),
        //     io_check: JSON.parse(io_check),
        //   };
        //   convertDataToStates(m_data, initialClinicalObservation);
        // });
        convertDataToStates(
          { vital_sign: [], io_check: [] },
          initialClinicalObservation
        );
        break;
      case MENU.GLUCOSE:
        getGlucose({ user_id, patient_id })
          .then(({ data }) => {
            const { update_at, blood_sugar_survey } = data;
            convertDataToStates({ update_at, ...blood_sugar_survey }, initialGlucose);
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.BEDSORES:
        getBedScore({ user_id, patient_id })
          .then(({ data }) => {
            const { contents } = data;
            const m_data = { ...data, contents: JSON.parse(contents) };
            convertDataToStates(m_data, initialBedScore);
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.NEEDS:
        getNeeds({ user_id, patient_id })
          .then(({ data }) => {
            const { body_status, disease_status } = data;
            const m_data = {
              ...data,
              body_status: JSON.parse(body_status),
              disease_status: JSON.parse(disease_status),
            };
            convertDataToStates(m_data, initialNeeds);
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.FALL:
        getFall({ user_id, patient_id })
          .then(({ data }) => {
            const { contents } = data;
            const m_data = { ...data, contents: JSON.parse(contents) };
            convertDataToStates(m_data, initialFall);
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.NRS:
        getNRS({ user_id, patient_id })
          .then(({ data }) => {
            convertDataToStates(data, initialNRS);
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다', e));
        break;
      case MENU.FLACC:
        getFLACC({ user_id, patient_id })
          .then(({ data }) => {
            convertDataToStates(data, initialFLACC);
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다', e));
        break;
      case MENU.CNPS:
        getCNPS({ user_id, patient_id })
          .then(({ data }) => {
            const { update_at, cnps_survey } = data;
            convertDataToStates({ update_at, ...cnps_survey }, initialCNPS);
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.MENTAL_NURSING: 
        getMentalNursing({ user_id, patient_id })
          .then(({ data }) => {
            convertDataToStates(data, initialMentalNursing);
          })
          .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.OPERATION:
        getOperation({ user_id, patient_id })
        .then(({ data }) => {
          const { update_at, surgical_survey } = data;
          convertDataToStates({ update_at, ...surgical_survey }, initialOperation);
        })
        .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.ANESTHESIA:
        getAnesthesia({ user_id, patient_id })
        .then(({ data }) => {
          console.log(data);
          convertDataToStates(data, initialAnesthesia);
        })
        .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.TRANSFUSION:
        getTransfusion({ user_id, patient_id })
        .then(({ data }) => {
          const { update_at, transfusion_survey } = data;
          convertDataToStates({
            update_at,
            ...transfusion_survey?.transfusion_information,
            transfusion_record: transfusion_survey?.transfusion_record,
          }, initialTransfusion);
        })
        .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e)); 
        break;
      case MENU.DIALYSIS:
        getDialysis({ user_id, patient_id })
        .then(({ data }) => {
          const { update_at, hemodialysis_survey } = data;
          convertDataToStates({
            update_at,
            ...hemodialysis_survey?.dialysis_information,
            ...hemodialysis_survey?.weight_information,
            dialysis_db: hemodialysis_survey?.dialysis_db,
            additional_information: hemodialysis_survey?.additional_information,
          }, initialDialysis);
        })
        .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.EMERGENCY:
        getEmergency({ user_id, patient_id })
        .then(({ data }) => {
          const { update_at, emergency_survey } = data;
          convertDataToStates({
            update_at,
            ...emergency_survey?.emergency_information,
            ...emergency_survey?.emergency_contents,
          }, initialEmergency);
        })
        .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.CHILDBIRTH:
        getChildbirth({ user_id, patient_id })
        .then(({ data }) => {
          const { update_at, delivery_survey } = data;
          convertDataToStates({ update_at, ...delivery_survey }, initialChildbirth);
        })
        .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.DIET_NUTRITION:
        getDietNutrition({ user_id, patient_id })
        .then(({ data }) => {
          const { update_at, dietary_survey } = data;
          convertDataToStates({
            update_at,
            birth: dietary_survey?.birth,
            classification: dietary_survey ? dietary_survey.classification : 1,
            select_meal: dietary_survey ? JSON.parse(dietary_survey.select_meal) : {},
            basic_meal: dietary_survey ? JSON.parse(dietary_survey.basic_meal) : {},
            therapuetic_diet: {
              intestinal: dietary_survey ? JSON.parse(dietary_survey.therapuetic_diet.intestinal) : {},
              kidney: dietary_survey ? JSON.parse(dietary_survey.therapuetic_diet.kidney) : {},
              liver: dietary_survey ? JSON.parse(dietary_survey.therapuetic_diet.liver) : {},
            },
            controlled_diet: dietary_survey ? JSON.parse(dietary_survey.controlled_diet) : {},
            specifics: dietary_survey ? JSON.parse(dietary_survey.specifics) : {},
          }, initialDietNutrition);
        })
        .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.HOSPITAL_CONFIRM:
        getHospitalConfirm({ user_id, patient_id })
        .then(({ data }) => {
          const { update_at, hospital_confirm } = data;
          convertDataToStates({
            update_at,
            nursing_care: hospital_confirm ? JSON.parse(hospital_confirm.nursing_care) : {},
            facilities_in: hospital_confirm ? JSON.parse(hospital_confirm.facilities_in) : {},
            facilities: hospital_confirm ? JSON.parse(hospital_confirm.facilities) : {},
            name: hospital_confirm?.name,
            relationship: hospital_confirm?.relationship,
            signature: hospital_confirm?.signature,
            date: hospital_confirm?.date,
            personnel_signature: hospital_confirm?.personnel_signature,
          }, initialHospitalConfirm);
        })
        .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e)); 
        break;
      case MENU.FALL_CONFIRM:
        getFallConfirm({ user_id, patient_id })
        .then(({ data }) => {
          const { update_at, fall_confirm } = data;
          convertDataToStates({
            update_at,
            fall_education: fall_confirm ? JSON.parse(fall_confirm.fall_education) : {},
            signature: fall_confirm?.signature,
            date: fall_confirm?.date,
            personnel_signature: fall_confirm?.personnel_signature,
          }, initialFallConfirm);
        })
        .catch(e => onFail('알 수 없는 오류가 발생했습니다.', e));
        break;
      case MENU.CORE_NURSING_SKILL_VIDEO:
        convertDataToStates(
          initialCoreNursingSkillVideo,
          initialCoreNursingSkillVideo
        );
        break;
      default:
        setDefaultValues(null);
        break;
    }
  };

  return { onGetDefaultValues };
};

export default useDefaultValues;
