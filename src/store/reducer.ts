import { combineReducers } from '@reduxjs/toolkit';
import user from './slices/user';
import patient from './slices/patient';
import survey from './slices/survey';

const reducer = combineReducers({
  user,
  patient,
  survey,
});

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;
