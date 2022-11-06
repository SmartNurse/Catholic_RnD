import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from 'store/user';

export interface StudentState extends UserState {}

const initialState: StudentState = {
  student_uuid: 0,
  student_name: '',
};

// name, initialState, reducers.
export const studentsSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    selected(_, action: PayloadAction<StudentState>) {
      return action.payload;
    },
    reset() {
      return initialState;
    },
  },
});

export const { selected, reset } = studentsSlice.actions;
export default studentsSlice.reducer;
