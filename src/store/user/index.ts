import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  name: string;
  student_uuid: number;
}

const initialState: UserState = {
  name: '',
  student_uuid: 0,
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
