import { FieldValues, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../apis/account';
import { getLocalStorage, setLocalStorage } from '../../utils/storage';
import SignInPresenter from './SignInPresenter';
import { ISignInForm } from './type';

function SignInContainer() {
  const navigate = useNavigate();

  const handleLogin = useMutation(postLogin, {
    onSuccess: () => {
      console.log('onSuccess');
    },
    onError: e => {
      console.log('onError', e);
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FieldValues, ISignInForm>({
    defaultValues: { userEmail: getLocalStorage('USER_EMAIL') },
  });

  const onSubmit = (data: any) => {
    const { saveEmail, userEmail, userPassword } = data as ISignInForm;

    // 이메일 저장 체크된 경우 로컬스토리지에 이메일 저장
    if (saveEmail) setLocalStorage('USER_EMAIL', userEmail);

    handleLogin.mutate({ userEmail, userPassword });
  };

  const onSignUp = () => navigate('/signup');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SignInPresenter
        errors={errors}
        register={register}
        onSignUp={onSignUp}
      />
    </form>
  );
}

export default SignInContainer;
