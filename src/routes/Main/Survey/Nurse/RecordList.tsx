import { Fragment } from 'react';
import { Typography } from '@mui/material';

import { getNursingRecords } from 'apis/main';
import { INursingRecord } from 'apis/main/type';
import useInfiniteScroll from 'hooks/useInfiniteScroll';
import RecordItemWrapper from 'routes/Main/DisplayInformation/NursingRecord/RecordItem';

import useStudent from 'store/student/useStudent';

interface Props {
  user_id: number;
  nurseName: string;
  patient_id: number;
  moreRef: React.MutableRefObject<null>;
}

const RecordList = (props: Props) => {
  const { student_no } = useStudent();
  const { moreRef, user_id, nurseName, patient_id } = props;
  const { list } = useInfiniteScroll({
    moreRef,
    listKey: 'nursing_records',
    getApi: ({ page }) =>
      getNursingRecords({
        page,
        user_id,
        patient_id,
      }),
  });

  if (list.length === 0) {
    return (
      <Typography variant="caption">작성된 간호기록이 없습니다.</Typography>
    );
  }

  return (
    <Fragment>
      {list.map((record: INursingRecord) => (
        <RecordItemWrapper
          {...record}
          studentNo={student_no}
          nurseName={nurseName}
          key={record.nursing_record_id}
        />
      ))}
    </Fragment>
  );
};

export default RecordList;
