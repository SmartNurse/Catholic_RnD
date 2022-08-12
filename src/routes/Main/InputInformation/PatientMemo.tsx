import { useEffect, useMemo, useState } from 'react';
import { Skeleton, TextField } from '@mui/material';

import { getPatientMemo, postPatientMemo } from '../../../apis/admin';
import { IPatient } from '../../../apis/admin/type';
import useUser from '../../../store/slices/useUser';

interface Props {
  patient?: IPatient | null;
}

const PatientMemo = ({ patient }: Props) => {
  const { student_uuid } = useUser();
  const [memo, setMemo] = useState('');

  const requestIds = useMemo(
    () => ({
      user_id: student_uuid,
      patient_id: patient ? patient.patient_id : 0,
    }),
    [patient, student_uuid]
  );

  useEffect(() => {
    if (!patient) return;

    // 가상환자 메모 조회요청
    getPatientMemo(requestIds).then(({ data }) => setMemo(data?.memo));
  }, [patient, student_uuid, requestIds]);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setMemo(e.target.value);

  const onBlur = () => {
    // 가상환자 메모 업데이트요청
    postPatientMemo({ ...requestIds, memo: encodeURIComponent(memo) });
  };

  if (!patient) {
    return <Skeleton variant="rectangular" width="100%" height={160} />;
  }

  return (
    <TextField
      multiline
      fullWidth
      size="small"
      value={memo}
      onBlur={onBlur}
      onChange={onChange}
      placeholder="진단명, 주의사항, 처방 등 인수인계를 입력해주세요."
      InputProps={{ sx: { fontSize: 14, height: 160 } }}
      inputProps={{ style: { height: '100%' } }}
    />
  );
};

export default PatientMemo;
