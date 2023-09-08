import { useState } from 'react';
import { useForm } from 'react-hook-form';

import regex from 'utils/regex';
import useUser from 'store/user/useUser';
import useNotification from 'hooks/useNotification';
import { postChangePassword, postLogin } from 'apis/account';

import Contents1 from './Contents1';
import Contents2 from './Contents2';
import Contents3 from './Contents3';

function CheckHealthBaby() {
  const {
    student_uuid: userId,
    student_id,
    student_name,
    student_gender,
    student_grade,
    college_name,
    student_birth,
    student_no,
  } = useUser();
  const { onResultCode, onSuccess, onFail, onRequired } = useNotification();

  const { handleSubmit, getValues, register, reset } = useForm({
    defaultValues: {
      student_id,
      student_name,
      student_gender,
      student_grade,
      college_name,
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
    // // 비밀번호 유효성 검사
    // if (!regex.password.test(data.newPassword)) {
    //   return onRequired('REQUIRED.PASSWORD.FORMAT');
    // }
    // // 비밀번호 일치 여부
    // const isConfirm = data.newPassword === data.newPasswordConfirm;
    // if (!isConfirm) {
    //   return onRequired('REQUIRED.PASSWORD.CONFIRM');
    // }
    // const request = {
    //   userId,
    //   password: data.password,
    //   newPassword: data.newPassword,
    //   student_name: data.student_name,
    // };
    // console.log('data', data);
    // postChangePassword(request)
    //   .then(({ data: { rc } }) => {
    //     if (rc !== 1) return onResultCode(rc);
    //     reset();
    //     setIsConfirmPassword(false);
    //     onSuccess('비밀번호 변경 성공했습니다.');
    //   })
    //   .catch(e => onFail('비밀번호 변경 실패했습니다.', e));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Contents1
        studentGrade={student_grade!}
        studentGender={student_gender!}
        register={register}
        isConfirmPassword={isConfirmPassword}
        onConfirmPassword={onConfirmPassword}
      />
      <Contents2
        studentGrade={student_grade!}
        studentGender={student_gender!}
        register={register}
        isConfirmPassword={isConfirmPassword}
        onConfirmPassword={onConfirmPassword}
      />
      <Contents3
        studentGrade={student_grade!}
        studentGender={student_gender!}
        register={register}
        isConfirmPassword={isConfirmPassword}
        onConfirmPassword={onConfirmPassword}
      />
    </form>
  );
}

export default CheckHealthBaby;
