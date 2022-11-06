import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  student_uuid: number;
  student_id?: string;
  student_name: string;
  student_gender?: number;
  student_grade?: number;
  college_ci?: string;
  college_name?: string;
  student_birth?: string;
  student_no?: string;
}

const initialState: UserState = {
  student_uuid: 0,
  student_name: '',
};

// name, initialState, reducers.
export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    signIn(_, action: PayloadAction<UserState>) {
      return action.payload;
    },
    signOut() {
      return initialState;
    },
  },
});

export const { signIn, signOut } = userSlice.actions;
export default userSlice.reducer;
