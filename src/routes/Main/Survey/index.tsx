import { useEffect, useState } from 'react';
import { getHospitalization } from '../../../apis/survey';
import usePatient from '../../../store/slices/usePatient';
import useUser from '../../../store/slices/useUser';
import { findKeyValueToObj } from '../../../utils/convert';
import { initialHospitalizationSurvey } from '../initialStates';
import { ACTIVE_MENU } from '../type';
import Hospitalization from './Hospitalization';

interface Props {
  type: string;
  onReset: () => void;
}

const Survey = ({ type, onReset }: Props) => {
  const { name, student_uuid: user_id } = useUser();
  const { patientInfo } = usePatient();
  const [defaultValues, setDefaultValues] = useState(null);

  useEffect(() => {
    if (!type || !patientInfo) return;

    switch (type) {
      case ACTIVE_MENU.ADMISSION:
        getHospitalization({
          user_id,
          patient_id: patientInfo?.patient_id,
        }).then(({ data }) => {
          const { hospitalization_survey } = data;
          const keys = Object.keys(initialHospitalizationSurvey);
          const values = initialHospitalizationSurvey as any;

          for (let key of keys) {
            const getValue = hospitalization_survey[key];

            if (key === 'offer' || key === 'contacts') {
              values[key] = getValue;
            } else if (hospitalization_survey[key]) {
              values[key] = findKeyValueToObj(getValue, Object.keys(getValue));
            }
          }

          setDefaultValues(values);
        });
        break;
      default:
        break;
    }
  }, [type, patientInfo, user_id]);

  if (!type || !patientInfo || !defaultValues) return null;

  const dialogProps = {
    user_id,
    nurseName: name,
    patientInfo,
    defaultValues,
    title: type,
    isOpen: Boolean(type),
    onClose: () => {
      const isConfirm = window.confirm('저장하지 않고 종료하시겠습니까?');
      if (isConfirm) return onReset();
    },
  };

  switch (type) {
    case ACTIVE_MENU.ADMISSION:
      return <Hospitalization {...dialogProps} />;
    default:
      return null;
  }
};

export default Survey;
