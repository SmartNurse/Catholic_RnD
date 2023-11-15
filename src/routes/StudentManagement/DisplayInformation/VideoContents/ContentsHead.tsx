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
  totalCount: number;
  onRequired: (id: Ti18nId) => void;
  currentSearchType?: number;
  currentSortType?: number;
}

const ContentsHead = ({
  onRequired,
  currentSearchType,
  totalCount,
  currentSortType,
}: Props) => {
  const keywordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const searchTypeRef = useRef<HTMLSelectElement>(null);
  const sortTypeRef = useRef<HTMLSelectElement>(null);

  const onSearch = () => {
    const keyword = keywordRef.current?.value;

    const searchType = searchTypeRef.current?.value;
    if (!keyword) return onRequired('REQUIRED.KEYWORD');

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
      : setSearchQuery({
          page: 1,
          searchType,
          keyword: String(keyword),
        });
    navigate(`${pathname}?${query}`);
  };

  const onSort = () => {
    const searchType = sortTypeRef.current?.value;

    const query = setSearchQuery({
      page: 1,
      sort_method: searchType,
    });

    navigate(`${pathname}?${query}`);
  };

  const SearchKeyword = () => {
    return (
      <Stack direction={'row'} spacing={0.5} alignItems="center">
        <NativeSelect
          size="small"
          input={<OutlinedInput sx={{ fontSize: '12px', height: '33px' }} />}
          inputRef={searchTypeRef}
          defaultValue={currentSearchType}
        >
          <option value={1}>이름</option>
          <option value={2}>아이디</option>
        </NativeSelect>

        <TextField
          placeholder="검색"
          inputRef={keywordRef}
          sx={{
            input: {
              minHeight: 33,
              boxSizing: 'border-box',
              fontSize: '12px',
            },
          }}
        />
        <Button variant="contained" onClick={onSearch} sx={{ height: '33px' }}>
          검색
        </Button>
        <Typography sx={{ mr: 'auto', padding: '0 10px 0 10px' }}>|</Typography>

        <NativeSelect
          size="small"
          input={<OutlinedInput sx={{ fontSize: '12px' }} />}
          inputRef={sortTypeRef}
          defaultValue={currentSortType}
          onChange={onSort}
        >
          <option value={1}>이름 순</option>
          <option value={2}>학번 오름차순</option>
          <option value={3}>학번 내림차순</option>
        </NativeSelect>
      </Stack>
    );
  };

  return (
    <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
      <Typography variant="subtitle2" sx={{ mr: 'auto' }}>
        총 {formatWithComma(totalCount)}명
      </Typography>
      <SearchKeyword />
    </Box>
  );
};

export default ContentsHead;
