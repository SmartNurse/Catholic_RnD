import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { IPatient, IPatientInfo } from 'apis/admin/type';

import {
  resetPatient,
  selectedPatient,
  selectedPatientInfo,
  updateNursingRecord,
  selectedNursingRecord,
  clearNursingRecord,
} from '.';
import { IUpdateNursingRecord } from 'apis/main/type';
import useSelectorTyped from 'store/useSelectorTyped';

const usePatient = () => {
  const dispatch = useDispatch();

  const { patient, patientInfo, isUpdateNursingRecord, nursingRecord } =
    useSelectorTyped(state => state.patient);

  const onResetPatient = useCallback(
    () => dispatch(resetPatient()),
    [dispatch]
  );

  const onSelectedPatient = useCallback(
    (patient: IPatient | null) => dispatch(selectedPatient(patient)),
    [dispatch]
  );

  const onSelectedPatientInfo = useCallback(
    (patientInfo: IPatientInfo | null) =>
      dispatch(selectedPatientInfo(patientInfo)),
    [dispatch]
  );

  const onUpdateNursingRecord = useCallback(
    (value: boolean) => dispatch(updateNursingRecord(value)),
    [dispatch]
  );

  const onSelectedNursingRecord = useCallback(
    (value: IUpdateNursingRecord) => dispatch(selectedNursingRecord(value)),
    [dispatch]
  );

  const onClearNursingRecord = useCallback(
    () => dispatch(clearNursingRecord()),
    [dispatch]
  );

  return {
    patient,
    onResetPatient,
    onSelectedPatient,
    patientInfo,
    onSelectedPatientInfo,
    isUpdateNursingRecord,
    onUpdateNursingRecord,
    nursingRecord,
    onSelectedNursingRecord,
    onClearNursingRecord,
  };
};

export default usePatient;
