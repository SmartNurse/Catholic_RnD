import { useEffect, useState, useCallback, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import useUser from 'store/user/useUser';

import { IPatientInfoSmall } from 'apis/admin/type';
import { getNursingRecode } from 'apis/survey/index';
import ContentsHead from './ContentsHead';
import useNotification from 'hooks/useNotification';
import ContentsBody from './ContentsBody';
import useTable from 'hooks/useTable';
import { IUpedateSkillVideo } from 'apis/survey/type';
import { getSearchQuery } from 'utils/searchQuery';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListSubheader,
  Typography,
} from '@mui/material';

interface Props {
  patientInfo: IPatientInfoSmall;
}

const NurseContents = ({ patientInfo }: Props) => {
  const { student_uuid: user_id } = useUser();
  const { search } = useLocation();
  const { onFail, onRequired } = useNotification();

  const { page = 1, keyword, searchType, sort_method } = getSearchQuery(search);
  const {
    list,
    setList,
    totalCount,
    setTotalCount,
    isLoading,
    setIsLoading,
    onPageChange,
    selected,
    setSelected,
  } = useTable<IUpedateSkillVideo>();

  const onGetList = useCallback(() => {
    setSelected([]);
    setIsLoading(true);

    getNursingRecode({
      page: String(page),
      patient_id: String(patientInfo.patient_id),
      user_id,
      keyword,
      searchType,
      sort_method,
    })
      .then(({ data }) => {
        setList(data.student_nursing_record_info);
        setTotalCount(data.count);
      })
      .catch(e => {
        const message = `가상환자 목록을 불러오는데 실패했습니다.`;
        onFail(message, e);
      })
      .finally(() => setIsLoading(false));
    // eslint-disable-next-line
  }, [page, keyword, searchType, sort_method]);

  useEffect(onGetList, [onGetList]);

  return (
    <Box flex={2} display="flex" flexDirection="column" overflow="auto">
      <ContentsHead
        onRequired={onRequired}
        currentSearchType={searchType as any}
      />
      <ContentsBody
        list={list}
        isLoading={isLoading}
        totalCount={totalCount}
        page={Number(page) - 1}
        onPageChange={onPageChange}
        selected={selected}
        onSelected={setSelected}
      />
    </Box>
  );
};

export default NurseContents;
