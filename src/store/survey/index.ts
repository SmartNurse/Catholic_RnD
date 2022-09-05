import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SurveyState {
  isSave?: boolean;
  surveyType?: string;
}

export const surveySlice = createSlice({
  name: 'survey',
  initialState: {} as SurveyState,
  reducers: {
    updateSurveyType(state, action: PayloadAction<string>) {
      state.isSave = false;
      state.surveyType = action.payload;
    },
    updateIsSave(state, action: PayloadAction<boolean>) {
      state.isSave = action.payload;
    },
    closeSave(state) {
      state.isSave = false;
      state.surveyType = undefined;
    },
    closeReadOnly(state) {
      state.surveyType = undefined;
    },
  },
});

export const { updateSurveyType, updateIsSave, closeSave, closeReadOnly } =
  surveySlice.actions;
export default surveySlice.reducer;
