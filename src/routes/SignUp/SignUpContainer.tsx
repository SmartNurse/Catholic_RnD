import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { postSendEmail } from '../../apis/account';
import ConfirmDialog from '../../components/ConfirmDialog/ConfirmDialog';
import SignUpPresenter from './SignUpPresenter';

function SignUpContainer() {
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();

  const handleSendEmail = useMutation(postSendEmail, {
    onSuccess: () => {
      console.log('onSuccess');
      setIsSendCertificationMail(true);
    },
    onError: e => {
      console.log('onError', e);
    },
  });

  const [isSendCertificationMail, setIsSendCertificationMail] = useState(false);
  const onSendCertificationMail = () => {
    // TODO 인증메일 API
    const userEmail = getValues('userEmail');
    handleSendEmail.mutate({ userEmail });
  };

  const [isCertification, setIsCertification] = useState(false);
  const onCertificationCode = () => {
    // TODO 인증메일 코드 확인
    setIsCertification(true);
  };

  const [isSignUp, setIsSignUp] = useState(false);

  const onSubmit = (data: any) => {
    console.log(data);
    // TODO 회원가입
    setIsSignUp(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SignUpPresenter
        errors={errors}
        register={register}
        isSendCertificationMail={isSendCertificationMail}
        onSendCertificationMail={onSendCertificationMail}
        isCertification={isCertification}
        onCertificationCode={onCertificationCode}
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
