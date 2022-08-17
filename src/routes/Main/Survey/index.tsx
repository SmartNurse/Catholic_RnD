import { useEffect, useState } from 'react';

import { ACTIVE_MENU } from '../type';
import usePatient from '../../../store/slices/usePatient';
import useSurvey from '../../../store/slices/useSurvey';
import useUser from '../../../store/slices/useUser';

import Hospitalization from './Hospitalization';
import useDefaultValues from './useDefaultValues';
import OutHospital from './OutHospital';

interface Props {
  type: string;
  onReset: () => void;
}

const Survey = ({ type, onReset }: Props) => {
  const { name, student_uuid: user_id } = useUser();
  const { patientInfo } = usePatient();
  const { isSave, onUpdateIsSave } = useSurvey();
  const [defaultValues, setDefaultValues] = useState(null);
  const { onGetHospitalization, onGetOutHospital } = useDefaultValues({
    user_id,
    setDefaultValues,
  });

  useEffect(() => {
    if (!patientInfo) return;

    const { patient_id } = patientInfo;

    onUpdateIsSave(false);

    switch (type) {
      case ACTIVE_MENU.ADMISSION:
        onGetHospitalization(patient_id);
        break;
      case ACTIVE_MENU.DISCHARGE:
        onGetOutHospital(patient_id);
        break;
      default:
        setDefaultValues(null);
        break;
    }
    // eslint-disable-next-line
  }, [type, patientInfo]);

  if (!type || !patientInfo || !defaultValues) return null;

  const dialogProps = {
    user_id,
    nurseName: name,
    patientInfo,
    defaultValues,
    title: type,
    isOpen: Boolean(type),
    onClose: () => {
      if (isSave) return onReset();

      const isConfirm = window.confirm('저장하지 않고 종료하시겠습니까?');
      if (isConfirm) return onReset();
    },
  };

  switch (type) {
    case ACTIVE_MENU.ADMISSION:
      return <Hospitalization {...dialogProps} />;
    case ACTIVE_MENU.DISCHARGE:
      return <OutHospital {...dialogProps} />;
    default:
      return null;
  }
};

export default Survey;
