import { useEffect, useState } from 'react';
import { TextField } from '@mui/material';

import useUser from 'store/user/useUser';
import useStudent from 'store/student/useStudent';
import usePatient from 'store/patient/usePatient';
import { getPatientMemo, postPatientMemo } from 'apis/admin';

const PatientMemo = () => {
  const { isStudent } = useUser();
  const { patientInfo } = usePatient();
  const { student_uuid: user_id } = useStudent();
  const [memo, setMemo] = useState('');

  useEffect(() => {
    if (!patientInfo) return;
    const { patient_id } = patientInfo;

    // 가상환자 메모 조회요청
    getPatientMemo({ patient_id, user_id }).then(({ data }) =>
      setMemo(data?.memo)
    );

    // eslint-disable-next-line
  }, [patientInfo]);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setMemo(e.target.value);

  const onBlur = () => {
    if (!patientInfo) return;
    const { patient_id } = patientInfo;

    // 가상환자 메모 업데이트요청
    postPatientMemo({ patient_id, user_id, memo });
  };

  return (
    <TextField
      multiline
      fullWidth
      size="small"
      value={memo}
      onBlur={onBlur}
      onChange={onChange}
      disabled={!patientInfo || !isStudent}
      placeholder="진단명, 주의사항, 처방 등 인수인계를 입력해주세요."
      InputProps={{ sx: { height: 160 } }}
      inputProps={{ style: { height: '100%' } }}
    />
  );
};

export default PatientMemo;
