import { Fragment, useEffect } from 'react';
import { Typography } from '@mui/material';

import { INursingRecord } from 'apis/main/type';
import useUser from 'store/user/useUser';
import usePatient from 'store/patient/usePatient';
import useStudent from 'store/student/useStudent';

import RecordItem from './RecordItem';
import { getSearchQuery } from 'utils/searchQuery';
import { useLocation, useNavigate } from 'react-router-dom';

interface Props {
  list: any[];
  onResetList: () => void;
}

const RecordList = ({ list, onResetList }: Props) => {
  const { isStudent } = useUser();
  const { student_name, student_no } = useStudent();
  const { nursingRecord } = usePatient();

  const navigate = useNavigate();
  const { pathname, search } = useLocation();
  const { isUpdateNursingRecord } = getSearchQuery(search);

  useEffect(() => {
    if (!isUpdateNursingRecord) return;

    onResetList();
    navigate(pathname, { replace: true });
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
          studentNo={student_no}
          nurseName={student_name}
          activeId={nursingRecord?.nursing_record_id}
          refetch={isStudent ? onResetList : undefined}
        />
      ))}
    </Fragment>
  );
};

export default RecordList;
