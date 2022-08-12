import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IPatient, IPatientInfo } from '../../apis/admin/type';
import { ReducerType } from '../reducer';
import { PatientState, selectedPatient, selectedPatientInfo } from './patient';

const usePatient = () => {
  const dispatch = useDispatch();

  const { patient, patientInfo } = useSelector<ReducerType, PatientState>(
    state => state.patient
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

  return { patient, patientInfo, onSelectedPatient, onSelectedPatientInfo };
};

export default usePatient;
