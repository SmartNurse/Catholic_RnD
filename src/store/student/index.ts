import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface StudentState {
  student_uuid: number;
  student_id?: string;
  student_name: string;
  student_gender?: number;
  student_grade?: number;
  college_name?: string;
  student_birth?: string;
  student_no?: string;
}

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
