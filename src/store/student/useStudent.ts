import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { selected, reset, StudentState } from '.';
import useSelectorTyped from 'store/useSelectorTyped';

const useStudent = () => {
  const dispatch = useDispatch();

  const studentState = useSelectorTyped(state => state.student);

  const onSelectedStudent = useCallback(
    (student: StudentState) => dispatch(selected(student)),
    [dispatch]
  );

  const onResetStudent = useCallback(() => dispatch(reset()), [dispatch]);

  return { ...studentState, onSelectedStudent, onResetStudent };
};

export default useStudent;
