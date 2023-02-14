import { combineReducers } from '@reduxjs/toolkit';
import user from './user';
import patient from './patient';
import student from './student';
import survey from './survey';
import vitalsign from './vitalsign';
import color from './color';

const reducer = combineReducers({
  user,
  patient,
  student,
  survey,
  vitalsign,
  color,
});

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;
