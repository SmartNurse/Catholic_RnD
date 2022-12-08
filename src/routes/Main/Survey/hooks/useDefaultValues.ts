import {
  getBedScore,
  getClinicObservation,
  getFall,
  getHospitalization,
  getMedication,
  getNeeds,
  getOutHospital,
  getPathology,
  getRadiology,
} from 'apis/survey';
import useNotification from 'hooks/useNotification';
import { findKeyValueToObj } from 'utils/convert';

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
  initialOperation,
  initialTransfusion,
  initialDialysis,
  initialEmergency,
  initialDietNutrition,
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
        values[key] = findKeyValueToObj(getValue, Object.keys(getValue));
      }
    }

    setDefaultValues(values);
  };

  const onGetDefaultValues = (patient_id: number, type: string) => {
    switch (type) {
      case MENU.E_CARDEX: 
        convertDataToStates(
          initialECardex,
          initialECardex,
        );
        break;
      case MENU.TAKING_OVER:
        convertDataToStates(
          initialTakingOver,
          initialTakingOver,
        );
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
        convertDataToStates(
          initialGlucose,
          initialGlucose,
        );
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
        convertDataToStates(
          { pain_score: [] },
          initialNRS
        );
        break;
      case MENU.FLACC:
        convertDataToStates(
          { scale: { face: '', legs: '', activity: '', cry: '', consolability: ''} },
          initialFLACC
        );
        break;
      case MENU.OPERATION:
        convertDataToStates(
          initialOperation,
          initialOperation
        );
        break;
      case MENU.TRANSFUSION:
        convertDataToStates(
          initialTransfusion,
          initialTransfusion
        );
        break;
      case MENU.DIALYSIS:
        convertDataToStates(
          initialDialysis,
          initialDialysis
        );
        break;
      case MENU.EMERGENCY:
        convertDataToStates(
          initialEmergency,
          initialEmergency
        );
        break;
      case MENU.DIET_NUTRITION:
        convertDataToStates(
          { ...initialDietNutrition },
          initialDietNutrition
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
