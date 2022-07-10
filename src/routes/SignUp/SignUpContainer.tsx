import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { postSendMail, postVerifyMail } from '../../apis/account';
import ConfirmDialog from '../../components/ConfirmDialog/ConfirmDialog';
import SignUpPresenter from './SignUpPresenter';

function SignUpContainer() {
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();

  // email
  const [isSendMail, setSendMail] = useState(false);
  const handleSendEmail = useMutation(postSendMail, {
    onSuccess: () => {
      setSendMail(true);
      setIsVerification(false);
    },
  });
  const onSendMail = () => {
    const userEmail = getValues('userEmail');
    handleSendEmail.mutate({ userEmail });
  };

  const [isVerification, setIsVerification] = useState(false);
  const handleVerifyEmail = useMutation(postVerifyMail, {
    onSuccess: () => setIsVerification(true),
  });
  const onVerifyMail = () => {
    const userCode = getValues('userCode');
    const userEmail = getValues('userEmail');
    handleVerifyEmail.mutate({ userCode, userEmail });
  };

  const [isSignUp, setIsSignUp] = useState(false);

  const onSubmit = (data: any) => {
    console.log(data);
    // TODO 회원가입
    // setIsSignUp(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SignUpPresenter
        errors={errors}
        register={register}
        sendMailProps={{
          isSendMail,
          isLoading: handleSendEmail.isLoading,
          onClick: onSendMail,
        }}
        verifyMailProps={{
          isVerification,
          isLoading: handleVerifyEmail.isLoading,
          onClick: onVerifyMail,
        }}
      />

      <ConfirmDialog
        title="회원가입 신청 완료"
        message="승인까지 최대 3일이 소요 됩니다"
        isOpen={isSignUp}
        onClose={() => setIsSignUp(false)}
      />
    </form>
  );
}

export default SignUpContainer;
