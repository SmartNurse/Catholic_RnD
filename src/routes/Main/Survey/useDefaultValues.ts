import {
  getBedScore,
  getFall,
  getHospitalization,
  getMedication,
  getOutHospital,
  getPathology,
  getRadiology,
} from 'apis/survey';
import { findKeyValueToObj } from 'utils/convert';

import {
  initialOutHospitalSurvey,
  initialHospitalizationSurvey,
  initialMedicationSurvey,
  initialRadiology,
  initialPathology,
  initialBedScore,
  initialFall,
} from '../initialStates';
import { ACTIVE_MENU } from '../type';

interface Props {
  user_id: number;
  setDefaultValues: (v: any) => void;
}

const useDefaultValues = ({ setDefaultValues, user_id }: Props) => {
  const convertDataToStates = (data: any, states: any) => {
    const keys = Object.keys(states);
    const values = states;

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
      case ACTIVE_MENU.ADMISSION:
        getHospitalization({ user_id, patient_id }).then(({ data }) => {
          const { hospitalization_survey } = data;
          convertDataToStates(
            hospitalization_survey,
            initialHospitalizationSurvey
          );
        });
        break;
      case ACTIVE_MENU.DISCHARGE:
        getOutHospital({ user_id, patient_id }).then(({ data }) => {
          const { out_hospital_survey } = data;
          convertDataToStates(out_hospital_survey, initialOutHospitalSurvey);
        });
        break;
      case ACTIVE_MENU.DOSAGE:
        getMedication({ user_id, patient_id }).then(({ data }) => {
          convertDataToStates(data, initialMedicationSurvey);
        });
        break;
      case ACTIVE_MENU.IMAGING:
        getRadiology({ user_id, patient_id }).then(({ data }) => {
          convertDataToStates(data, initialRadiology);
        });
        break;
      case ACTIVE_MENU.CLINICAL_PATHOLOGY:
        getPathology({ user_id, patient_id }).then(({ data }) => {
          convertDataToStates(data, initialPathology);
        });
        break;
      case ACTIVE_MENU.RISK_OF_BEDSORES:
        getBedScore({ user_id, patient_id }).then(({ data }) => {
          const { contents } = data;
          const m_data = { ...data, contents: JSON.parse(contents) };
          convertDataToStates(m_data, initialBedScore);
        });
        break;
      case ACTIVE_MENU.FALL_RISK_ASSESSMENT:
        getFall({ user_id, patient_id }).then(({ data }) => {
          const { contents } = data;
          const m_data = { ...data, contents: JSON.parse(contents) };
          convertDataToStates(m_data, initialFall);
        });
        break;
      default:
        setDefaultValues(null);
        break;
    }
  };

  return { onGetDefaultValues };
};

export default useDefaultValues;
