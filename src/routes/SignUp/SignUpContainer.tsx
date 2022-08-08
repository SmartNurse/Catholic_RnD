import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import {
  postAccountCreate,
  postSendMail,
  postVerifyMail,
} from '../../apis/account';
import ConfirmDialog from '../../components/ConfirmDialog/ConfirmDialog';
import SignUpPresenter from './SignUpPresenter';

function SignUpContainer() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const {
    handleSubmit,
    register,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  const [isSendMail, setSendMail] = useState(false);
  const handleSendEmail = useMutation(postSendMail, {
    onSuccess: () => {
      setSendMail(true);
      setIsVerification(false);
    },
  });
  const onSendMail = () => {
    const user_email = getValues('userEmail');
    handleSendEmail.mutate({ user_email });
  };

  const [isVerification, setIsVerification] = useState(false);
  const handleVerifyEmail = useMutation(postVerifyMail, {
    onSuccess: () => setIsVerification(true),
  });
  const onVerifyMail = () => {
    const user_code = getValues('userCode');
    const user_email = getValues('userEmail');
    handleVerifyEmail.mutate({ user_code, user_email });
  };

  const [isSignUp, setIsSignUp] = useState(false);
  const handleAccountCreate = useMutation(postAccountCreate, {
    onSuccess: () => setIsSignUp(true),
  });

  const onSubmit = (data: any) => {
    if (!data.userCode) {
      enqueueSnackbar('이메일 인증을 해주세요', { variant: 'error' });
      return null;
    }

    if (!data.gender) {
      enqueueSnackbar('성별을 선택해주세요', { variant: 'error' });
      return null;
    }

    if (!data.grade) {
      enqueueSnackbar('구분을 선택해주세요', { variant: 'error' });
      return null;
    }

    const request = {
      user_email: data.userEmail,
      user_password: data.userPassword,
      user_name: data.userName,
      birth: data.birth,
      college: data.college,
      studentNo: data.studentNo,
      grade: data.grade,
      gender: data.gender,
    };

    handleAccountCreate.mutate(request);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SignUpPresenter
        errors={errors}
        register={register}
        setValue={setValue}
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
        onClose={() => navigate('/signin', { replace: true })}
      />
    </form>
  );
}

export default SignUpContainer;
