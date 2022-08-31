import { useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../apis/account';
import useNotification from '../../hooks/useNotification';
import useUser from '../../store/slices/useUser';
import {
  getLocalStorage,
  setLocalStorage,
  removeLocalStorage,
  clearLocalStorage,
} from '../../utils/storage';
import SignInForm from './SignInForm';
import { ISignInForm } from './type';

function SignIn() {
  const navigate = useNavigate();
  const { onSignIn } = useUser();
  const { onSuccess, onFail } = useNotification();

  // 로그인 화면으로 오는 경우 로컬스토리지 클리어
  useEffect(clearLocalStorage, []);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FieldValues, ISignInForm>({
    defaultValues: { userEmail: getLocalStorage('USER_EMAIL') },
  });

  const onSubmit = (data: any) => {
    const request = {
      user_email: data.userEmail,
      user_password: data.userPassword,
    };

    // 이메일 저장 체크된 경우 로컬스토리지에 이메일 저장
    if (data.saveEmail) setLocalStorage('USER_EMAIL', data.userEmail);

    postLogin(request)
      .then(({ data }) => {
        if (data.rc !== 1) {
          onFail('로그인에 실패하였습니다.', `server rc code is ${data.rc}`);
          return removeLocalStorage('USER_EMAIL');
        }

        onSignIn({ ...data });
        onSuccess('로그인 되었습니다.');
        navigate('/', { replace: true });
      })
      .catch(e => {
        onFail('로그인에 실패하였습니다.', e);
        removeLocalStorage('USER_EMAIL');
      });
  };

  const onSignUp = () => navigate('/signup', { replace: true });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SignInForm errors={errors} register={register} onSignUp={onSignUp} />
    </form>
  );
}

export default SignIn;
