import { useForm } from 'react-hook-form';

import useUser from 'store/user/useUser';
import useNotification from 'hooks/useNotification';

import VideoForm from './VideoForm';
// import StudentInfo from './StudentInfo';

const CoreNursingSkillVideo = () => {
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
      student_name,
      student_no,
    } as any,
  });

  return (
    <form>
      <VideoForm
        register={register}
      />
      {/*<StudentInfo student_no={student_no} student_name={student_name} />*/}
    </form>
  );
}

export default CoreNursingSkillVideo;