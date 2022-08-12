import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { persistKey } from '..';
import { removeLocalStorage } from '../../utils/storage';
import { ReducerType } from '../reducer';
import { signIn, UserState } from './user';

const useUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { name, student_uuid } = useSelector<ReducerType, UserState>(
    state => state.user
  );

  const onSignIn = useCallback(
    (user: UserState) => dispatch(signIn(user)),
    [dispatch]
  );

  const onSignOut = () => {
    navigate('/signin');
    removeLocalStorage(`persist:${persistKey}`);
  };

  return { name, student_uuid, onSignIn, onSignOut };
};

export default useUser;
