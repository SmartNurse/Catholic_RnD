import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
  postAccountCreate,
  postSendMail,
  postVerifyMail,
} from '../../apis/account';
import ConfirmDialog from '../../components/ConfirmDialog/ConfirmDialog';
import useNotification from '../../hooks/useNotification';
import regex from '../../utils/regex';
import SignUpForm from './SignUpForm';

function SignUp() {
  const navigate = useNavigate();
  const { onSuccess, onFail, onRequired } = useNotification();

  const { handleSubmit, register, getValues, setValue } = useForm();

  // 이메일 발송
  const [isSendMail, setSendMail] = useState(false);
  const [isSendMailLoading, setSendMailLoading] = useState(false);
  const onSendMail = () => {
    setSendMailLoading(true);
    const user_email = getValues('userEmail');

    // 이메일 형식 확인
    if (!regex.email.test(user_email)) {
      onRequired('REQUIRED.EMAIL.FORMAT');
      return setSendMailLoading(false);
    }

    postSendMail({ user_email })
      .then(() => {
        setSendMail(true);
        setIsVerification(false);
        onSuccess('요청하신 이메일로 인증번호를 발송하였습니다.');
      })
      .catch(e => onFail('인증번호 발송에 실패하였습니다.', e))
      .finally(() => setSendMailLoading(false));
  };

  // 이메일 인증
  const [isVerification, setIsVerification] = useState(false);
  const [isVerifyMailLoading, setVerifyMailLoading] = useState(false);
  const onVerifyMail = () => {
    setVerifyMailLoading(true);
    const user_code = getValues('userCode');
    const user_email = getValues('userEmail');

    postVerifyMail({ user_code, user_email })
      .then(() => {
        setIsVerification(true);
        onSuccess('이메일 인증되었습니다.');
      })
      .catch(e => onFail('이메일 인증 실패하였습니다.', e))
      .finally(() => setVerifyMailLoading(false));
  };

  // 회원 가입
  const [isSignUp, setIsSignUp] = useState(false);

  const onSubmit = (data: any) => {
    // 메일인증 여부
    if (!isVerification) {
      return onRequired('REQUIRED.EMAIL.VERIFICATION');
    }

    // 이메일 유효성 검사
    if (!regex.password.test(data.userPassword)) {
      return onRequired('REQUIRED.PASSWORD.FORMAT');
    }

    // 비밀번호 일치 여부
    const isPasswordConfirm = data.userPassword === data.userPasswordConfirm;
    if (!isPasswordConfirm) {
      return onRequired('REQUIRED.PASSWORD.CONFIRM');
    }

    if (!data.college) {
      return onRequired('REQUIRED.COLLEGE');
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

    postAccountCreate(request)
      .then(() => setIsSignUp(true))
      .catch(e => onFail('회원가입 실패했습니다.', e));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SignUpForm
        register={register}
        setValue={setValue}
        sendMailProps={{
          isSendMail,
          isLoading: isSendMailLoading,
          onClick: onSendMail,
        }}
        verifyMailProps={{
          isVerification,
          isLoading: isVerifyMailLoading,
          onClick: onVerifyMail,
        }}
      />

      <ConfirmDialog
        isOpen={isSignUp}
        title="회원가입 신청 완료"
        message="승인까지 최대 1일이 소요 됩니다"
        onClose={() => navigate('/signin', { replace: true })}
      />
    </form>
  );
}

export default SignUp;
