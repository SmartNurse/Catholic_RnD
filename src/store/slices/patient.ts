import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPatient, IPatientInfo } from '../../apis/admin/type';

// name, initialState, reducers.
export interface PatientState {
  patient?: IPatient | null;
  patientInfo?: IPatientInfo | null;
}

export const patientSlice = createSlice({
  name: 'patients',
  initialState: {
    patient: null,
    patientInfo: null,
  } as PatientState,
  reducers: {
    selectedPatient(state, action: PayloadAction<IPatient | null>) {
      state.patient = action.payload;
      state.patientInfo = null;
    },
    selectedPatientInfo(state, action: PayloadAction<IPatientInfo | null>) {
      state.patientInfo = action.payload;
    },
  },
});

export const { selectedPatient, selectedPatientInfo } = patientSlice.actions;
export default patientSlice.reducer;
