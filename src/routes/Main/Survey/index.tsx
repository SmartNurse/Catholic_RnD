import { useEffect, useState } from 'react';

import usePatient from 'store/patient/usePatient';
import useSurvey from 'store/survey/useSurvey';
import useUser from 'store/user/useUser';

import { ACTIVE_MENU } from '../type';
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

  if (!type || !patientInfo) return null;

  const dialogProps = {
    user_id,
    nurseName: name,
    patientInfo,
    title: type,
    isOpen: Boolean(type),
    onClose: () => {
      if (isSave) return onReset();
      const isConfirm = window.confirm('저장하지 않고 종료하시겠습니까?');
      if (isConfirm) return onReset();
    },
  };

  switch (type) {
    case ACTIVE_MENU.ADMISSION: {
      if (!defaultValues) return null;
      return <Hospitalization {...dialogProps} defaultValues={defaultValues} />;
    }
    case ACTIVE_MENU.DISCHARGE: {
      if (!defaultValues) return null;
      return <OutHospital {...dialogProps} defaultValues={defaultValues} />;
    }
    case ACTIVE_MENU.PRESCRIPTION: {
      if (!defaultValues) return null;
      return <OutHospital {...dialogProps} defaultValues={defaultValues} />;
    }
    default:
      return null;
  }
};

export default Survey;
