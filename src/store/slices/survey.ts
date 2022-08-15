import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// name, initialState, reducers.
export interface SurveyState {
  isSave: boolean;
}

export const surveySlice = createSlice({
  name: 'survey',
  initialState: {
    isSave: false,
  } as SurveyState,
  reducers: {
    updateIsSave(state, action: PayloadAction<boolean>) {
      state.isSave = action.payload;
    },
  },
});

export const { updateIsSave } = surveySlice.actions;
export default surveySlice.reducer;
