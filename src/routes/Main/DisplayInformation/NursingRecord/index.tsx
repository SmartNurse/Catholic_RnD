import { useRef } from 'react';
import { Box, Card, Typography } from '@mui/material';

import { getNursingRecords } from 'apis/main';
import { IPatientInfo } from 'apis/admin/type';
import useStudent from 'store/student/useStudent';
import useInfiniteScroll from 'hooks/useInfiniteScroll';

import RecordList from './RecordList';

interface Props {
  patientInfo: IPatientInfo;
}

const NursingRecord = ({ patientInfo }: Props) => {
  const { student_uuid: user_id } = useStudent();

  const moreRef = useRef(null);
  const { list, onResetList } = useInfiniteScroll({
    moreRef,
    listKey: 'nursing_records',
    getApi: ({ page }) =>
      getNursingRecords({
        page,
        user_id,
        patient_id: patientInfo?.patient_id!,
      }),
  });

  return (
    <Box flex={1} display="flex" flexDirection="column" overflow="auto">
      <Typography variant="subtitle2" fontSize={13} mb={1}>
        간호 기록 내역
      </Typography>

      <Card
        component="section"
        sx={{ p: '10px 15px', height: '100%', overflow: 'auto' }}
      >
        <RecordList list={list} onResetList={onResetList} />
        <div ref={moreRef} />
      </Card>
    </Box>
  );
};

export default NursingRecord;
