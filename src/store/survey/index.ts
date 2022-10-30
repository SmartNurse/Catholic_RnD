import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SurveyState {
  isSave?: boolean;
  surveyType?: string;
}

const initialState = {
  isSave: false,
  surveyType: '',
};

export const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    updateSurveyType(state, action: PayloadAction<string>) {
      state.isSave = false;
      state.surveyType = action.payload;
    },
    updateIsSave(state, action: PayloadAction<boolean>) {
      state.isSave = action.payload;
    },
    resetSurvey(state) {
      state.isSave = false;
      state.surveyType = '';
    },
  },
});

export const { updateSurveyType, updateIsSave, resetSurvey } =
  surveySlice.actions;
export default surveySlice.reducer;
