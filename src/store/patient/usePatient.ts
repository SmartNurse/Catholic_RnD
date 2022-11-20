import { useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { IPatient, IPatientInfo } from 'apis/admin/type';

import { ReducerType } from '../reducer';
import {
  PatientState,
  resetPatient,
  selectedPatient,
  selectedPatientInfo,
  updateNursingRecord,
} from '.';

const usePatient = () => {
  const dispatch = useDispatch();

  const { patient, patientInfo, isUpdateNursingRecord } = useSelector<
    ReducerType,
    PatientState
  >(state => state.patient, shallowEqual);

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

  return {
    patient,
    onResetPatient,
    onSelectedPatient,
    patientInfo,
    onSelectedPatientInfo,
    isUpdateNursingRecord,
    onUpdateNursingRecord,
  };
};

export default usePatient;
