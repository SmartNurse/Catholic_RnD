import { useEffect, useState } from 'react';

import usePatient from 'store/patient/usePatient';
import useSurvey from 'store/survey/useSurvey';
import useStudent from 'store/student/useStudent';
import useDefaultValues from './hooks/useDefaultValues';
import DisplaySurvey from './DisplaySurvey';
import useUser from 'store/user/useUser';

const Survey = () => {
  const { isStudent } = useUser();
  const { patientInfo } = usePatient();
  const { student_name, student_uuid: user_id } = useStudent();
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
    disabled: false,
  };

  return (
    <DisplaySurvey
      surveyType={surveyType}
      dialogProps={dialogProps}
      onCloseReadOnly={onCloseReadOnly}
      onCloseSave={isStudent ? onCloseSave : onCloseReadOnly}
    />
  );
};

export default Survey;
