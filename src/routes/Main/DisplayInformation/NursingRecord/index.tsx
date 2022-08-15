import { useEffect } from 'react';
import { useInfiniteQuery } from 'react-query';
import { Box, Card, Typography } from '@mui/material';

import { getNursingRecords } from '../../../../apis/main';
import { INursingRecord } from '../../../../apis/main/type';
import usePatient from '../../../../store/slices/usePatient';
import useUser from '../../../../store/slices/useUser';

import DisplayNarrative from './DisplayNarrative';
import DisplayNanda from './DisplayNanda';
import DisplaySoapie from './DisplaySoapie';
import DisplayFocusDar from './DisplayFocusDar';
import DisplayRemarks from './DisplayRemarks';
import ActionButtons from './ActionButtons';

const NursingRecord = () => {
  const { student_uuid: user_id, name } = useUser();
  const { patient, isUpdateNursingRecord, onUpdateNursingRecord } =
    usePatient();

  const fetchNursingRecords = async ({ pageParam = 1 }) => {
    if (!patient) return { result: [], nextPage: pageParam };

    const { data } = await getNursingRecords({
      patient_id: patient.patient_id,
      user_id,
      page: pageParam,
    });

    return {
      nursing_records: data.nursing_records,
      nextPage: pageParam + 1,
    };
  };

  const { data, refetch } = useInfiniteQuery(
    ['nursingRecords'],
    fetchNursingRecords,
    {
      getNextPageParam: lastPage => {
        if (lastPage.nursing_records.length === 20) return lastPage.nextPage;
        return undefined;
      },
    }
  );

  useEffect(() => {
    if (!isUpdateNursingRecord) return;
    refetch();
    onUpdateNursingRecord(false);
    // eslint-disable-next-line
  }, [isUpdateNursingRecord]);

  if (!patient) return null;

  const RecordList = (record: INursingRecord) => {
    const { nursing_record_id, record_type } = record;
    const displayProps = {
      ...record,
      key: nursing_record_id,
      nurseName: name,
      actionButtons: (
        <ActionButtons
          user_id={user_id}
          patient_id={patient.patient_id}
          record_id={nursing_record_id}
          refetch={refetch}
        />
      ),
    };

    switch (record_type) {
      case 0:
        return <DisplayNanda {...displayProps} />;
      case 1:
        return <DisplaySoapie {...displayProps} />;
      case 2:
        return <DisplayFocusDar {...displayProps} />;
      case 3:
        return <DisplayNarrative {...displayProps} />;
      case 4:
        return <DisplayRemarks {...displayProps} />;
      default:
        return null;
    }
  };

  if (!data) return null;

  return (
    <Box flex={1} display="flex" flexDirection="column">
      <Typography variant="subtitle2" fontSize={13} mb={1}>
        간호 기록 내역
      </Typography>

      <Card
        component="section"
        sx={{ p: '10px 15px', height: '100%', overflow: 'auto' }}
      >
        {data.pages.map(({ nursing_records }) =>
          nursing_records.length === 0 ? (
            <Typography variant="caption">
              작성된 간호기록이 없습니다.
            </Typography>
          ) : (
            nursing_records.map(RecordList)
          )
        )}
      </Card>
    </Box>
  );
};

export default NursingRecord;
