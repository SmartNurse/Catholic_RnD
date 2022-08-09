import React, { Fragment, useEffect, useState } from 'react';
import { FieldValues, UseFormSetValue } from 'react-hook-form';
import {
  Autocomplete,
  CircularProgress,
  debounce,
  TextField,
} from '@mui/material';

import { getCollegeLists } from '../../apis/admin';
import { ICollege } from '../../apis/admin/type';

interface Props {
  setValue: UseFormSetValue<FieldValues>;
}

const CollegeList = ({ setValue }: Props) => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([] as ICollege[]);

  const onChangeOptions = (keyword: string) => {
    getCollegeLists({ page: 1, keyword })
      .then(({ data }) => {
        setOptions(data.college_lists);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => onChangeOptions(''), []);

  const onChangeTextField = debounce(e => {
    const keyword = e.target.value;
    onChangeOptions(keyword);
  }, 500);

  const TextFieldEndAdornment = ({
    endAdornment,
  }: {
    endAdornment: React.ReactNode;
  }) => (
    <Fragment>
      {isLoading ? <CircularProgress color="inherit" size={20} /> : null}
      {endAdornment}
    </Fragment>
  );

  return (
    <Autocomplete
      fullWidth
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      isOptionEqualToValue={(option, value) =>
        option.college_name === value.college_name
      }
      getOptionLabel={option => option.college_name}
      noOptionsText="다른 학교를 입력해주세요"
      options={options}
      loading={isLoading}
      onChangeCapture={() => setIsLoading(true)}
      onChange={(_, value) => setValue('college', value?.college_id)}
      renderInput={params => (
        <TextField
          {...params}
          onChange={onChangeTextField}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <TextFieldEndAdornment
                endAdornment={params.InputProps.endAdornment}
              />
            ),
          }}
        />
      )}
    />
  );

  // useInfiniteQuery에서 쓸 함수
  // const fetchCollegeLists = ({ pageParam = 1 }) =>
  //   getCollegeLists({ page: pageParam });

  // const { data, fetchNextPage } = useInfiniteQuery(
  //   ['collegeList'],
  //   fetchCollegeLists,
  //   {
  //     getNextPageParam: (lastPage, pages) => {
  //       if (lastPage.data) return pages.length + 1;
  //       return false;
  //     },
  //   }
  // );

  // const onConvertList = () => {
  //   if (!data) return [];

  //   const lists = data?.pages.map(page => page.data.college_lists);
  //   return lists?.reduce((prev, next) => [...prev, ...next]);
  // };

  // const renderItem = ({ college_name }: { college_name: string }) =>
  //   college_name;

  // return (
  //   <InfinitySelect
  //     required
  //     fullWidth
  //     id="college_id"
  //     list={onConvertList()}
  //     renderItem={renderItem}
  //     getMoreItems={fetchNextPage}
  //     placeholder="학교를 선택해주세요"
  //     {...register('college')}
  //     MenuProps={{ PaperProps: { style: { maxHeight: 250 } } }}
  //   />
  // );
};

export default CollegeList;
