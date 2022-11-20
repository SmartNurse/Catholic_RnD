import { Fragment, useEffect } from 'react';
import { Typography } from '@mui/material';

import { INursingRecord } from 'apis/main/type';
import useUser from 'store/user/useUser';
import usePatient from 'store/patient/usePatient';
import useStudent from 'store/student/useStudent';

import RecordItem from './RecordItem';

interface Props {
  list: any[];
  onResetList: () => void;
}

const RecordList = ({ list, onResetList }: Props) => {
  const { isStudent } = useUser();
  const { student_name } = useStudent();
  const { nursingRecord, isUpdateNursingRecord, onUpdateNursingRecord } =
    usePatient();

  useEffect(() => {
    if (!isUpdateNursingRecord) return;

    onResetList();
    onUpdateNursingRecord(false);
    // eslint-disable-next-line
  }, [isUpdateNursingRecord]);

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
          activeId={nursingRecord?.nursing_record_id}
          refetch={isStudent ? onResetList : undefined}
        />
      ))}
    </Fragment>
  );
};

export default RecordList;
