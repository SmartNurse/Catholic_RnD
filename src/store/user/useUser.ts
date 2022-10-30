import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { removeLocalStorage } from 'utils/storage';

import { persistKey } from '..';
import { ReducerType } from '../reducer';
import { signIn, signOut, UserState } from '.';

const useUser = () => {
  const dispatch = useDispatch();

  const userState = useSelector<ReducerType, UserState>(state => state.user);
  const isStudent = false;
  // const isStudent = userState.student_grade === 1 ? true : false;

  const onSignIn = useCallback(
    (user: UserState) => dispatch(signIn(user)),
    [dispatch]
  );

  const onSignOut = useCallback(() => {
    dispatch(signOut());
    removeLocalStorage(`persist:${persistKey}`);
  }, [dispatch]);

  return { ...userState, isStudent, onSignIn, onSignOut };
};

export default useUser;
