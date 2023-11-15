import { useRef } from 'react';
import {
  Box,
  Button,
  Typography,
  NativeSelect,
  OutlinedInput,
  Stack,
  TextField,
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

import { formatWithComma } from 'utils/formatting';

import { Ti18nId } from 'hooks/useI18n';
import { setSearchQuery } from 'utils/searchQuery';

interface Props {
  onRequired: (id: Ti18nId) => void;
  currentSearchType?: number;
}

const ContentsHead = ({ onRequired, currentSearchType }: Props) => {
  const keywordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const searchTypeRef = useRef<HTMLSelectElement>(null);

  const onSearch = () => {
    const keyword = keywordRef.current?.value;

    const searchType = searchTypeRef.current?.value;
    if (!keyword) return onRequired('REQUIRED.KEYWORD');
    if (searchType === '3' && isNaN(Number(keyword)))
      return onRequired('REQUIRED.COLLEGENUMBER');
    if (searchType === '2' && isNaN(Number(keyword)))
      return onRequired('REQUIRED.NUMBER');
    if (searchType === '1' && !isNaN(Number(keyword)))
      return onRequired('REQUIRED.STRING');

    const query = isNaN(Number(keyword))
      ? setSearchQuery({
          page: 1,
          searchType,
          keyword,
        })
      : searchType === '2'
      ? setSearchQuery({
          page: 1,
          searchType,
          keyword: '',
        })
      : setSearchQuery({
          page: 1,
          searchType,
          patient_id: '',
          keyword: '',
        });
    navigate(`${pathname}?${query}`);
  };

  const SearchKeyword = () => (
    <Stack direction={'row'} spacing={0.5} alignItems="center">
      <Typography
        sx={{ mr: 'auto', padding: '0 10px 0 10px', fontSize: '13px' }}
      >
        조회 년도
      </Typography>
      <NativeSelect
        size="small"
        input={<OutlinedInput sx={{ fontSize: '12px', height: '33px' }} />}
        inputRef={searchTypeRef}
        defaultValue={currentSearchType}
      >
        <option value={1}>이름</option>
        <option value={2}>아이디</option>
        <option value={3}>학교</option>
      </NativeSelect>

      <Typography sx={{ mr: 'auto', padding: '0 10px 0 10px' }}>|</Typography>

      <NativeSelect
        size="small"
        input={<OutlinedInput sx={{ fontSize: '12px' }} />}
        inputRef={searchTypeRef}
        defaultValue={currentSearchType}
      >
        <option value={1}>이름순</option>
        <option value={2}>아</option>
        <option value={3}>학교 순</option>
      </NativeSelect>
    </Stack>
  );

  return (
    <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
      <SearchKeyword />
    </Box>
  );
};

export default ContentsHead;
