import { combineReducers } from '@reduxjs/toolkit';
import user from './user';
import patient from './patient';
import student from './student';
import survey from './survey';

const reducer = combineReducers({
  user,
  patient,
  student,
  survey,
});

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;
