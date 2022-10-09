import { useEffect, useState } from 'react';

import usePatient from 'store/patient/usePatient';
import useSurvey from 'store/survey/useSurvey';
import useUser from 'store/user/useUser';

import { ACTIVE_MENU } from '../type';
import Hospitalization from './Hospitalization';
import useDefaultValues from './useDefaultValues';
import OutHospital from './OutHospital';
import Prescription from './Prescription';
import Nurse from './Nurse';
import Medication from './Medication';
import Radiology from './Radiology';
import Pathology from './Pathology';

const Survey = () => {
  const { patientInfo } = usePatient();
  const { name, student_uuid: user_id } = useUser();
  const { onUpdateIsSave, surveyType, onCloseSave, onCloseReadOnly } =
    useSurvey();

  const [defaultValues, setDefaultValues] = useState(null);
  const {
    onGetHospitalization,
    onGetOutHospital,
    onGetMedication,
    onGetRadiology,
    onGetPathology,
  } = useDefaultValues({
    user_id,
    setDefaultValues,
  });

  useEffect(() => {
    if (!patientInfo) return;

    onUpdateIsSave(false);
    const { patient_id } = patientInfo;

    switch (surveyType) {
      case ACTIVE_MENU.ADMISSION:
        onGetHospitalization(patient_id);
        break;
      case ACTIVE_MENU.DISCHARGE:
        onGetOutHospital(patient_id);
        break;
      case ACTIVE_MENU.DOSAGE:
        onGetMedication(patient_id);
        break;
      case ACTIVE_MENU.IMAGING:
        onGetRadiology(patient_id);
        break;
      case ACTIVE_MENU.CLINICAL_PATHOLOGY:
        onGetPathology(patient_id);
        break;
      default:
        setDefaultValues(null);
        break;
    }
    // eslint-disable-next-line
  }, [surveyType, patientInfo]);

  if (!surveyType || !patientInfo) return null;

  const dialogProps = {
    user_id,
    nurseName: name,
    patientInfo,
    title: surveyType,
    isOpen: Boolean(surveyType),
  };

  switch (surveyType) {
    case ACTIVE_MENU.ADMISSION: {
      if (!defaultValues) return null;
      return (
        <Hospitalization
          {...dialogProps}
          defaultValues={defaultValues}
          onClose={onCloseSave}
        />
      );
    }
    case ACTIVE_MENU.DISCHARGE: {
      if (!defaultValues) return null;
      return (
        <OutHospital
          {...dialogProps}
          defaultValues={defaultValues}
          onClose={onCloseSave}
        />
      );
    }
    case ACTIVE_MENU.PRESCRIPTION: {
      return (
        <Prescription
          {...dialogProps}
          defaultValues={null}
          onClose={onCloseReadOnly}
        />
      );
    }
    case ACTIVE_MENU.NURSE: {
      return (
        <Nurse
          {...dialogProps}
          defaultValues={null}
          onClose={onCloseReadOnly}
        />
      );
    }
    case ACTIVE_MENU.DOSAGE: {
      if (!defaultValues) return null;
      return (
        <Medication
          {...dialogProps}
          defaultValues={defaultValues}
          onClose={onCloseSave}
        />
      );
    }
    case ACTIVE_MENU.IMAGING: {
      if (!defaultValues) return null;
      return (
        <Radiology
          {...dialogProps}
          defaultValues={defaultValues}
          onClose={onCloseReadOnly}
        />
      );
    }
    case ACTIVE_MENU.CLINICAL_PATHOLOGY: {
      if (!defaultValues) return null;
      return (
        <Pathology
          {...dialogProps}
          defaultValues={defaultValues}
          onClose={onCloseReadOnly}
        />
      );
    }
    default:
      return null;
  }
};

export default Survey;
