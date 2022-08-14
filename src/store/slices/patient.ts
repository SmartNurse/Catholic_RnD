import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPatient, IPatientInfo } from '../../apis/admin/type';

// name, initialState, reducers.
export interface PatientState {
  patient?: IPatient | null;
  patientInfo?: IPatientInfo | null;
  isUpdateNursingRecord: boolean;
}

export const patientSlice = createSlice({
  name: 'patients',
  initialState: {
    patient: null,
    patientInfo: null,
    isUpdateNursingRecord: false,
  } as PatientState,
  reducers: {
    selectedPatient(state, action: PayloadAction<IPatient | null>) {
      state.patient = action.payload;
      state.patientInfo = null;
    },
    selectedPatientInfo(state, action: PayloadAction<IPatientInfo | null>) {
      state.patientInfo = action.payload;
    },
    updateNursingRecord(state, action: PayloadAction<boolean>) {
      state.isUpdateNursingRecord = action.payload;
    },
  },
});

export const { selectedPatient, selectedPatientInfo, updateNursingRecord } =
  patientSlice.actions;
export default patientSlice.reducer;
