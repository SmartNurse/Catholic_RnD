import { useEffect, useState } from 'react';

import usePatient from 'store/patient/usePatient';
import useSurvey from 'store/survey/useSurvey';
import useUser from 'store/user/useUser';
import useDefaultValues from './hooks/useDefaultValues';
import DisplaySurvey from './DisplaySurvey';

const Survey = () => {
  const { patientInfo } = usePatient();
  const { student_name, student_uuid: user_id } = useUser();
  const { onUpdateIsSave, surveyType, onCloseSave, onCloseReadOnly } =
    useSurvey();

  const [defaultValues, setDefaultValues] = useState(null);
  const { onGetDefaultValues } = useDefaultValues({
    user_id,
    setDefaultValues,
  });

  useEffect(() => {
    if (!patientInfo || !surveyType) {
      return setDefaultValues(null);
    }

    onUpdateIsSave(false);
    const { patient_id } = patientInfo;
    onGetDefaultValues(patient_id, surveyType);
    // eslint-disable-next-line
  }, [surveyType, patientInfo]);

  if (!surveyType || !patientInfo) return null;

  const dialogProps = {
    user_id,
    patientInfo,
    defaultValues,
    nurseName: student_name,
    title: surveyType,
    isOpen: Boolean(surveyType),
  };

  return (
    <DisplaySurvey
      surveyType={surveyType}
      dialogProps={dialogProps}
      onCloseSave={onCloseSave}
      onCloseReadOnly={onCloseReadOnly}
    />
  );
};

export default Survey;
