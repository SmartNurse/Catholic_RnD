import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { persistKey } from '..';
import { removeLocalStorage } from '../../utils/storage';
import { ReducerType } from '../reducer';
import { signIn, signOut, UserState } from './user';

const useUser = () => {
  const dispatch = useDispatch();

  const { name, student_uuid } = useSelector<ReducerType, UserState>(
    state => state.user
  );

  const onSignIn = useCallback(
    (user: UserState) => dispatch(signIn(user)),
    [dispatch]
  );

  const onSignOut = useCallback(() => {
    dispatch(signOut());
    removeLocalStorage(`persist:${persistKey}`);
  }, [dispatch]);

  return { name, student_uuid, onSignIn, onSignOut };
};

export default useUser;
