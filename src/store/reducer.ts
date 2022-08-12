import { combineReducers } from '@reduxjs/toolkit';
import user from './slices/user';
import patient from './slices/patient';

const reducer = combineReducers({
  user,
  patient,
});

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;
