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
          helperText="본인 학교 명칭을 직접 입력해주세요. 대학 재학 또는 재직 중이 아닐 시 ‘기타대학’ 이라고 입력해주세요"
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
};

export default CollegeList;
