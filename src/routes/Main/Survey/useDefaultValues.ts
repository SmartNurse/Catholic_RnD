import { getHospitalization, getMedication, getOutHospital } from 'apis/survey';
import { findKeyValueToObj } from 'utils/convert';

import {
  initialOutHospitalSurvey,
  initialHospitalizationSurvey,
  initialMedicationSurvey,
} from '../initialStates';

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

  const onGetHospitalization = (patient_id: number) => {
    getHospitalization({ user_id, patient_id }).then(({ data }) => {
      const { hospitalization_survey } = data;
      convertDataToStates(hospitalization_survey, initialHospitalizationSurvey);
    });
  };

  const onGetOutHospital = (patient_id: number) => {
    getOutHospital({ user_id, patient_id }).then(({ data }) => {
      const { out_hospital_survey } = data;
      convertDataToStates(out_hospital_survey, initialOutHospitalSurvey);
    });
  };

  const onGetMedication = (patient_id: number) => {
    getMedication({ user_id, patient_id }).then(({ data }) => {
      convertDataToStates(data, initialMedicationSurvey);
    });
  };

  return { onGetHospitalization, onGetOutHospital, onGetMedication };
};

export default useDefaultValues;
