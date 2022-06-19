import { useForm } from 'react-hook-form';
import SignUpPresenter from './SignUpPresenter';

function SignUpContainer() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(console.log)}>
      <SignUpPresenter register={register} errors={errors} />
    </form>
  );
}

export default SignUpContainer;
