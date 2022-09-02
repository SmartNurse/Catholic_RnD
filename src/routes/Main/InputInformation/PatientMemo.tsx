import { useEffect, useState } from 'react';
import { TextField } from '@mui/material';

import { getPatientMemo, postPatientMemo } from '../../../apis/admin';

interface Props {
  user_id: number;
  patient_id: number;
}

const PatientMemo = ({ user_id, patient_id }: Props) => {
  const [memo, setMemo] = useState('');

  useEffect(() => {
    // 가상환자 메모 조회요청
    getPatientMemo({ patient_id, user_id }).then(({ data }) => {
      setMemo(data?.memo);
    });
  }, [patient_id, user_id]);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setMemo(e.target.value);

  const onBlur = () => {
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
      placeholder="진단명, 주의사항, 처방 등 인수인계를 입력해주세요."
      InputProps={{ sx: { height: 160 } }}
      inputProps={{ style: { height: '100%' } }}
    />
  );
};

export default PatientMemo;
