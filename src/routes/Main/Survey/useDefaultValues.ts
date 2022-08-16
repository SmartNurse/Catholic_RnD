import { getHospitalization, getOutHospital } from '../../../apis/survey';
import { findKeyValueToObj } from '../../../utils/convert';
import {
  initialHospitalizationSurvey,
  initialOutHospitalSurvey,
} from '../initialStates';

interface Props {
  user_id: number;
  setDefaultValues: (v: any) => void;
}

const useDefaultValues = ({ setDefaultValues, user_id }: Props) => {
  const onGetHospitalization = (patient_id: number) => {
    getHospitalization({ user_id, patient_id }).then(({ data }) => {
      const { hospitalization_survey } = data;
      const keys = Object.keys(initialHospitalizationSurvey);
      const values = initialHospitalizationSurvey as any;

      for (let key of keys) {
        const getValue = hospitalization_survey[key];

        if (key === 'offer' || key === 'contacts') {
          values[key] = getValue;
        } else if (getValue) {
          values[key] = findKeyValueToObj(getValue, Object.keys(getValue));
        }
      }

      setDefaultValues(values);
    });
  };

  const onGetOutHospital = (patient_id: number) => {
    getOutHospital({ user_id, patient_id }).then(({ data }) => {
      const { out_hospital_survey } = data;
      const keys = Object.keys(initialOutHospitalSurvey);
      const values = initialOutHospitalSurvey as any;

      for (let key of keys) {
        const getValue = out_hospital_survey[key];

        if (key === 'default_info' && getValue) {
          values[key] = findKeyValueToObj(getValue, Object.keys(getValue));
        } else if (getValue) {
          values[key] = getValue;
        }
      }

      setDefaultValues(values);
    });
  };

  return { onGetHospitalization, onGetOutHospital };
};

export default useDefaultValues;
