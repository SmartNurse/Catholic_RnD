import { FieldValues, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../apis/account';
import useUser from '../../store/slices/useUser';
import {
  getLocalStorage,
  setLocalStorage,
  removeLocalStorage,
} from '../../utils/storage';
import SignInForm from './SignInForm';
import { ISignInForm } from './type';

function SignIn() {
  const navigate = useNavigate();
  const { onSignIn } = useUser();

  const handleLogin = useMutation(postLogin, {
    onSuccess: ({ data }) => {
      onSignIn({ ...data });
      navigate('/');
    },
    onError: e => removeLocalStorage('USER_EMAIL'),
  });

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

    handleLogin.mutate(request);
  };

  const onSignUp = () => navigate('/signup');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SignInForm errors={errors} register={register} onSignUp={onSignUp} />
    </form>
  );
}

export default SignIn;
