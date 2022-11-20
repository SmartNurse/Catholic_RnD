import { useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { ReducerType } from '../reducer';
import { selected, reset, StudentState } from '.';

const useStudent = () => {
  const dispatch = useDispatch();

  const studentState = useSelector<ReducerType, StudentState>(
    state => state.student,
    shallowEqual
  );

  const onSelectedStudent = useCallback(
    (student: StudentState) => dispatch(selected(student)),
    [dispatch]
  );

  const onResetStudent = useCallback(() => dispatch(reset()), [dispatch]);

  return { ...studentState, onSelectedStudent, onResetStudent };
};

export default useStudent;
