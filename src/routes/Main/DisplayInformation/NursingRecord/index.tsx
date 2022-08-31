import { Fragment, useEffect, useRef } from 'react';
import { Box, Card, Skeleton, Typography } from '@mui/material';

import { IGetList } from '../../../../apis/type';
import { getNursingRecords } from '../../../../apis/main';
import { IPatientInfo } from '../../../../apis/admin/type';
import { INursingRecord } from '../../../../apis/main/type';
import usePatient from '../../../../store/slices/usePatient';
import useUser from '../../../../store/slices/useUser';
import useInfiniteScroll from '../../../../hooks/useInfiniteScroll';

import RecordItemWrapper from './RecordItemWrapper';

interface Props {
  patientInfo?: IPatientInfo | null;
}

const NursingRecord = ({ patientInfo }: Props) => {
  const { student_uuid: user_id, name } = useUser();
  const { isUpdateNursingRecord, onUpdateNursingRecord } = usePatient();

  const moreRef = useRef(null);
  const getApi = ({ page }: IGetList) =>
    getNursingRecords({ page, user_id, patient_id: patientInfo?.patient_id! });

  const { list, onResetList } = useInfiniteScroll({
    listKey: 'nursing_records',
    moreRef,
    getApi,
  });

  useEffect(() => {
    if (!isUpdateNursingRecord) return;

    onResetList();
    onUpdateNursingRecord(false);
    // eslint-disable-next-line
  }, [isUpdateNursingRecord]);

  if (!patientInfo) {
    return (
      <Box flex={1} display="flex" flexDirection="column" overflow="auto">
        <Skeleton variant="rectangular" sx={{ flex: 1 }} />
      </Box>
    );
  }

  const RecordList = () => {
    if (list.length === 0) {
      return (
        <Typography variant="caption">작성된 간호기록이 없습니다.</Typography>
      );
    }

    return (
      <Fragment>
        {list.map((record: INursingRecord) => {
          const itemWrapperProps = {
            ...record,
            nurseName: name,
            refetch: onResetList,
          };

          return (
            <RecordItemWrapper
              key={record.nursing_record_id}
              {...itemWrapperProps}
            />
          );
        })}
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
        onLoad={() => console.log('load')}
      >
        <RecordList />
        <div ref={moreRef} />
      </Card>
    </Box>
  );
};

export default NursingRecord;
