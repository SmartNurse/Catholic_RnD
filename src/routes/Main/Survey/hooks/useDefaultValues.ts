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
import { findKeyValueToObj } from 'utils/convert';

import {
  initialOutHospitalSurvey,
  initialHospitalizationSurvey,
  initialMedicationSurvey,
  initialRadiology,
  initialPathology,
  initialBedScore,
  initialFall,
  initialNeeds,
  initialClinicalObservation,
} from '../initialStates';
import { MENU } from '../type';

interface Props {
  user_id: number;
  setDefaultValues: (v: any) => void;
}

const useDefaultValues = ({ setDefaultValues, user_id }: Props) => {
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
      case MENU.HOSPITALIZATION:
        getHospitalization({ user_id, patient_id }).then(({ data }) => {
          const { hospitalization_survey } = data;
          convertDataToStates(
            hospitalization_survey,
            initialHospitalizationSurvey
          );
        });
        break;
      case MENU.OUT_HOSPITAL:
        getOutHospital({ user_id, patient_id }).then(({ data }) => {
          const { out_hospital_survey } = data;
          convertDataToStates(out_hospital_survey, initialOutHospitalSurvey);
        });
        break;
      case MENU.MEDICATION:
        getMedication({ user_id, patient_id }).then(({ data }) => {
          convertDataToStates(data, initialMedicationSurvey);
        });
        break;
      case MENU.RADIOLOGY:
        getRadiology({ user_id, patient_id }).then(({ data }) => {
          convertDataToStates(data, initialRadiology);
        });
        break;
      case MENU.PATHOLOGY:
        getPathology({ user_id, patient_id }).then(({ data }) => {
          convertDataToStates(data, initialPathology);
        });
        break;
      case MENU.CLINICAL_OBSERVATION:
        getClinicObservation({ user_id, patient_id }).then(({ data }) => {
          const { vital_sign, io_check } = data;
          const m_data = {
            ...data,
            vital_sign: JSON.parse(vital_sign),
            io_check: JSON.parse(io_check),
          };
          convertDataToStates(m_data, initialClinicalObservation);
        });
        break;
      case MENU.BEDSORES:
        getBedScore({ user_id, patient_id }).then(({ data }) => {
          const { contents } = data;
          const m_data = { ...data, contents: JSON.parse(contents) };
          convertDataToStates(m_data, initialBedScore);
        });
        break;
      case MENU.NEEDS:
        getNeeds({ user_id, patient_id }).then(({ data }) => {
          const { body_status, disease_status } = data;
          const m_data = {
            ...data,
            body_status: JSON.parse(body_status),
            disease_status: JSON.parse(disease_status),
          };
          convertDataToStates(m_data, initialNeeds);
        });
        break;
      case MENU.FALL:
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
