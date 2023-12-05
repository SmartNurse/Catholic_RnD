import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

import useUser from 'store/user/useUser';

import { IPatientInfoSmall } from 'apis/admin/type';
import { getNursingProcessAll } from 'apis/survey/index';
import ContentsHead from './ContentsHead';
import useNotification from 'hooks/useNotification';
import ContentsBody from './ContentsBody';
import useTable from 'hooks/useTable';
import { IUpedateNursingRecord } from 'apis/survey/type';
import { getSearchQuery } from 'utils/searchQuery';
import { Box } from '@mui/material';

interface Props {
  patientInfo: IPatientInfoSmall;
}

const ProcessContents = ({ patientInfo }: Props) => {
  const { student_uuid: user_id } = useUser();
  const { search } = useLocation();
  const { onBeforeSearch, onRequired } = useNotification();

  const { page = 1, year, sort_method } = getSearchQuery(search);
  const {
    list,
    setList,
    totalCount,
    setTotalCount,
    isLoading,
    setIsLoading,
    onPageChange,
  } = useTable<IUpedateNursingRecord>();

  const onGetList = useCallback(() => {
    setIsLoading(true);

    getNursingProcessAll({
      page: String(page),
      patient_id: String(patientInfo.patient_id),
      user_id,
      year,
      sort_method,
    })
      .then(({ data }) => {
        setList(data.nursing_process_narrative_note_survey);
        setTotalCount(data.count);
      })
      .catch(e => {
        const message = `가상환자 목록을 불러오는데 실패했습니다.`;
        onBeforeSearch(message);
      })
      .finally(() => setIsLoading(false));
    // eslint-disable-next-line
  }, [page, year, sort_method]);

  useEffect(onGetList, [onGetList]);

  return (
    <Box flex={2} display="flex" flexDirection="column" overflow="auto">
      <ContentsHead
        totalCount={totalCount}
        onRequired={onRequired}
        currentSearchType={sort_method as any}
      />
      <ContentsBody
        list={list}
        isLoading={isLoading}
        totalCount={totalCount}
        page={Number(page) - 1}
        onPageChange={onPageChange}
      />
    </Box>
  );
};

export default ProcessContents;
