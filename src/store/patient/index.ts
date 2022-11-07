import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IPatient, IPatientInfo } from 'apis/admin/type';

// name, initialState, reducers.
export interface PatientState {
  patient?: IPatient | null;
  patientInfo?: IPatientInfo | null;
  isUpdateNursingRecord: boolean;
}

const initialState: PatientState = {
  patient: null,
  patientInfo: null,
  isUpdateNursingRecord: false,
};

export const patientSlice = createSlice({
  name: 'patients',
  initialState,
  reducers: {
    resetPatient: () => initialState,
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

export const {
  resetPatient,
  selectedPatient,
  selectedPatientInfo,
  updateNursingRecord,
} = patientSlice.actions;
export default patientSlice.reducer;
