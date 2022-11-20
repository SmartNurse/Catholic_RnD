import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IPatient, IPatientInfo } from 'apis/admin/type';
import { IUpdateNursingRecord } from 'apis/main/type';

// name, initialState, reducers.
export interface PatientState {
  patient?: IPatient | null;
  patientInfo?: IPatientInfo | null;
  isUpdateNursingRecord: boolean;
  nursingRecord?: IUpdateNursingRecord | null;
}

const initialState: PatientState = {
  patient: null,
  patientInfo: null,
  isUpdateNursingRecord: false,
  nursingRecord: null,
};

export const patientSlice = createSlice({
  name: 'patients',
  initialState,
  reducers: {
    resetPatient: () => initialState,
    selectedPatient(state, action: PayloadAction<IPatient | null>) {
      state.patient = action.payload;
      state.patientInfo = null;
      state.nursingRecord = null;
    },
    selectedPatientInfo(state, action: PayloadAction<IPatientInfo | null>) {
      state.patientInfo = action.payload;
    },
    updateNursingRecord(state, action: PayloadAction<boolean>) {
      state.isUpdateNursingRecord = action.payload;
    },
    selectedNursingRecord(state, action: PayloadAction<IUpdateNursingRecord>) {
      state.nursingRecord = action.payload;
    },
    clearNursingRecord(state) {
      state.nursingRecord = null;
    },
  },
});

export const {
  resetPatient,
  selectedPatient,
  selectedPatientInfo,
  updateNursingRecord,
  selectedNursingRecord,
  clearNursingRecord,
} = patientSlice.actions;

export default patientSlice.reducer;
