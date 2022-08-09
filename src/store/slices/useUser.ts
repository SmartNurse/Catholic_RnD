import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { persistKey } from '..';
import { removeLocalStorage } from '../../utils/storage';
import { ReducerType } from '../reducer';
import { signIn, User } from './user';

const useUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { name } = useSelector<ReducerType, User>(state => state.user);

  const onSignIn = useCallback(
    (user: User) => dispatch(signIn(user)),
    [dispatch]
  );

  const onSignOut = () => {
    navigate('/signin');
    removeLocalStorage(`persist:${persistKey}`);
  };

  return { name, onSignIn, onSignOut };
};

export default useUser;
