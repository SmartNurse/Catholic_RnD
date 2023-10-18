import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { removeLocalStorage } from 'utils/storage';

import { persistKey } from '..';
import { signIn, signOut, UserState } from '.';
import useSelectorTyped from 'store/useSelectorTyped';

const useUser = () => {
  const dispatch = useDispatch();

  const userState = useSelectorTyped<UserState>(state => state.user);
  const isStudent = userState.student_grade === 1 ? true : false;

  const onSignIn = useCallback(
    (user: UserState) => {
      dispatch(signIn(user));
    },
    [dispatch]
  );

  const onSignOut = useCallback(() => {
    dispatch(signOut());
    removeLocalStorage(`persist:${persistKey}`);
  }, [dispatch]);

  return { ...userState, isStudent, onSignIn, onSignOut };
};

export default useUser;
