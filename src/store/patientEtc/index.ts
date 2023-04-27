import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface OneInfoEtcState {
  contact: string;
  name: string;
  relation: string;
}

export interface InfoEtcState {
  isUpdated: boolean;
  data: OneInfoEtcState[];
}

const initialState: InfoEtcState = {
  isUpdated: false,
  data: [],
};

export const inpoEtcSlice = createSlice({
  name: 'infoEtc',
  initialState,
  reducers: {
    initInfo() {
      return initialState;
    },
    updateInfo(_, action: PayloadAction<InfoEtcState>) {
      return action.payload;
    },
  },
});

export const { initInfo, updateInfo } = inpoEtcSlice.actions;
export default inpoEtcSlice.reducer;
