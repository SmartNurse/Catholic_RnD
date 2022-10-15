import { useEffect, useState } from 'react';

import usePatient from 'store/patient/usePatient';
import useSurvey from 'store/survey/useSurvey';
import useUser from 'store/user/useUser';
import useDefaultValues from './useDefaultValues';
import DisplaySurvey from './DisplaySurvey';

const Survey = () => {
  const { patientInfo } = usePatient();
  const { name, student_uuid: user_id } = useUser();
  const { onUpdateIsSave, surveyType, onCloseSave, onCloseReadOnly } =
    useSurvey();

  const [defaultValues, setDefaultValues] = useState(null);
  const { onGetDefaultValues } = useDefaultValues({
    user_id,
    setDefaultValues,
  });

  const onCloseSaveSurvey = () => {
    onCloseSave();
    setDefaultValues(null);
  };

  const onCloseReadOnlySurvey = () => {
    onCloseReadOnly();
    setDefaultValues(null);
  };

  useEffect(() => {
    if (!patientInfo || !surveyType) return;

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
    nurseName: name,
    title: surveyType,
    isOpen: Boolean(surveyType),
  };

  return (
    <DisplaySurvey
      surveyType={surveyType}
      dialogProps={dialogProps}
      onCloseSaveSurvey={onCloseSaveSurvey}
      onCloseReadOnlySurvey={onCloseReadOnlySurvey}
    />
  );
};

export default Survey;
