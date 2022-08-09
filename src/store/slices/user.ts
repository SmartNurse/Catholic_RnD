import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  name: string;
  student_uuid: number;
}

// name, initialState, reducers.
export const userSlice = createSlice({
  name: 'users',
  initialState: {
    name: '',
    student_uuid: 0,
  } as User,
  reducers: {
    signIn(_, action: PayloadAction<User>) {
      return action.payload;
    },
  },
});

export const { signIn } = userSlice.actions;
export default userSlice.reducer;
