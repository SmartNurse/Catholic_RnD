import { useState } from 'react';
import { useForm } from 'react-hook-form';

import regex from 'utils/regex';
import useUser from 'store/user/useUser';
import useStudent from 'store/student/useStudent';
import usePatient from 'store/patient/usePatient';

import useNotification from 'hooks/useNotification';
import { postChangePassword, postLogin } from 'apis/account';

import MyPageForm from './MyPageForm';

function MyPage() {
  const {
    student_uuid: userId,
    student_id,
    student_gender,
    student_grade,
    student_name,
    college_name,
    student_birth,
    student_no,
    onSignOut,
  } = useUser();
  const { onResetStudent } = useStudent();
  const { onResetPatient } = usePatient();

  const { onResultCode, onSuccess, onFail, onRequired } = useNotification();

  const { handleSubmit, getValues, register, reset, setValue } = useForm({
    defaultValues: {
      student_id,
      student_gender,
      student_grade,
      college_name,
      student_name,
      student_birth,
      student_no,
    } as any,
  });

  const [isConfirmPassword, setIsConfirmPassword] = useState(false);

  const onConfirmPassword = () => {
    const password = getValues('password');
    postLogin({ user_email: student_id!, user_password: password }).then(
      ({ data: { rc } }) => {
        if (rc !== 1) return onResultCode(rc);
        setIsConfirmPassword(true);
      }
    );
  };

  // 비밀번호 변경
  const onSubmit = (data: any) => {
    // 비밀번호 확인
    if (!isConfirmPassword) {
      return onRequired('REQUIRED.PASSWORD.CONFIRMTRUE');
    }

    if (data.newPassword.length > 0 && !regex.password.test(data.newPassword)) {
      // 비밀번호 유효성 검사
      return onRequired('REQUIRED.PASSWORD.FORMAT');
    }

    // 비밀번호 일치 여부
    const isConfirm = data.newPassword === data.newPasswordConfirm;

    if (data.newPasswordConfirm.length === 0) {
      return onRequired('REQUIRED.PASSWORD.CONFIRMTWO');
    } else if (!isConfirm) {
      return onRequired('REQUIRED.PASSWORD.CONFIRM');
    }

    const request = {
      userId,
      password: data.password,
      newPassword: data?.newPassword,

      student_name: data.student_name,
    };

    const request1 = {
      userId,
      // password: data.password,

      student_name: data.student_name,
    };

    // console.log('data', data.newPassword !== '' ? request:request1);

    postChangePassword(data.newPassword !== '' ? request : request1)
      .then(({ data: { rc } }) => {
        if (rc !== 1) return onResultCode(rc);
        reset();
        setIsConfirmPassword(false);
        onSuccess(
          '계정 정보 수정을 성공했습니다.\n 로그인을 다시 시도해주세요'
        );

        onSignOut();
        // 로그아웃 시 스토어 초기화
        onResetStudent();
        onResetPatient();
      })
      .catch(e => onFail('계정 정보 수정을 실패했습니다.', e));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <MyPageForm
        studentGrade={student_grade!}
        studentGender={student_gender!}
        register={register}
        getValues={getValues}
        setValue={setValue}
        isConfirmPassword={isConfirmPassword}
        onConfirmPassword={onConfirmPassword}
      />
    </form>
  );
}

export default MyPage;
