import { Fragment, useEffect, useRef } from 'react';
import { Box, Card, Typography } from '@mui/material';

import { getNursingRecords } from 'apis/main';
import { INursingRecord } from 'apis/main/type';
import { IPatientInfo } from 'apis/admin/type';
import useUser from 'store/user/useUser';
import usePatient from 'store/patient/usePatient';
import useStudent from 'store/student/useStudent';
import useInfiniteScroll from 'hooks/useInfiniteScroll';

import RecordItem from './RecordItem';

interface Props {
  patientInfo: IPatientInfo;
}

const NursingRecord = ({ patientInfo }: Props) => {
  const { isStudent } = useUser();
  const { student_uuid: user_id, student_name } = useStudent();
  const { isUpdateNursingRecord, onUpdateNursingRecord } = usePatient();

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

  useEffect(() => {
    if (!isUpdateNursingRecord) return;

    onResetList();
    onUpdateNursingRecord(false);
    // eslint-disable-next-line
  }, [isUpdateNursingRecord]);

  const RecordList = () => {
    if (list.length === 0) {
      return (
        <Typography variant="caption">작성된 간호기록이 없습니다.</Typography>
      );
    }

    return (
      <Fragment>
        {list.map((record: INursingRecord) => (
          <RecordItem
            {...record}
            key={record.nursing_record_id}
            nurseName={student_name}
            refetch={isStudent ? onResetList : undefined}
          />
        ))}
      </Fragment>
    );
  };

  return (
    <Box flex={1} display="flex" flexDirection="column" overflow="auto">
      <Typography variant="subtitle2" fontSize={13} mb={1}>
        간호 기록 내역
      </Typography>

      <Card
        component="section"
        sx={{ p: '10px 15px', height: '100%', overflow: 'auto' }}
      >
        <RecordList />
        <div ref={moreRef} />
      </Card>
    </Box>
  );
};

export default NursingRecord;
