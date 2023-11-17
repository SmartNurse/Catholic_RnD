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
  totalCount: number;
}

const ContentsHead = ({ onRequired, currentSearchType, totalCount }: Props) => {
  const keywordRef = useRef<HTMLSelectElement>(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const searchTypeRef = useRef<HTMLSelectElement>(null);

  const onSearch = () => {
    const keyword = keywordRef.current?.value;

    const searchType = searchTypeRef.current?.value;
    if (keyword === '') return onRequired('REQUIRED.KEYWORD');
    // if (searchType === '3' && isNaN(Number(keyword)))
    //   return onRequired('REQUIRED.COLLEGENUMBER');
    // if (searchType === '2' && isNaN(Number(keyword)))
    //   return onRequired('REQUIRED.NUMBER');
    // if (searchType === '1' && !isNaN(Number(keyword)))
    //   return onRequired('REQUIRED.STRING');

    const query = setSearchQuery({
      page: 1,
      sort_method: searchType,
      year: keyword,
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
        input={
          <OutlinedInput
            sx={{ fontSize: '12px', height: '33px', width: '120px' }}
          />
        }
        inputRef={keywordRef}
        defaultValue={currentSearchType}
      >
        {/* 년도 지날 때마다 수정 필요 */}
        <option value={2023} selected>
          2023
        </option>
        <option value={2022}>2022</option>
        {/* <option value={3}>2024</option> */}
      </NativeSelect>

      <Typography sx={{ mr: 'auto', padding: '0 10px 0 10px' }}>|</Typography>

      <NativeSelect
        size="small"
        input={<OutlinedInput sx={{ fontSize: '12px', width: '120px' }} />}
        inputRef={searchTypeRef}
        defaultValue={currentSearchType}
      >
        <option value={1} selected>
          이름순
        </option>
        <option value={2}>학번(숫자낮은순)</option>
        <option value={3}>학번(숫자높은순)</option>
      </NativeSelect>
      <Button variant="contained" onClick={onSearch} sx={{ height: '33px' }}>
        조회
      </Button>
    </Stack>
  );

  return (
    <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
      <SearchKeyword />
    </Box>
  );
};

export default ContentsHead;
