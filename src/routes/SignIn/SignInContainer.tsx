import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import SignInPresenter from './SignInPresenter';

function SignInContainer() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const onSignUp = () => navigate('/signup');

  return (
    <form onSubmit={handleSubmit(console.log)}>
      <SignInPresenter
        errors={errors}
        register={register}
        onSignUp={onSignUp}
      />
    </form>
  );
}

export default SignInContainer;
