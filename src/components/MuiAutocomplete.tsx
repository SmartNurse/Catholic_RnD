import React, { Fragment, useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import {
  Autocomplete,
  CircularProgress,
  debounce,
  TextField,
} from '@mui/material';
import { Search } from '@mui/icons-material';

import { IGetSearch } from 'apis/type';

interface Props {
  listKey: string;
  valueKey: string;
  variant?: 'outlined' | 'standard';
  noOptionsText?: string;
  helperText?: string;
  placeholder?: string;
  onChange: (value: any) => void;
  getApi: (request: IGetSearch) => Promise<AxiosResponse<any>>;
  getOptionLabel: (option: any) => string;
}

const MuiAutocomplete = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState<any[]>([]);

  const {
    listKey,
    valueKey,
    variant = 'outlined',
    noOptionsText,
    helperText,
    placeholder,
    onChange,
    getApi,
    getOptionLabel,
  } = props;

  const onChangeOptions = (keyword: string) => {
    getApi({ page: 1, keyword })
      .then(({ data }) => setOptions(data[listKey]))
      .finally(() => setIsLoading(false));
  };

  // eslint-disable-next-line
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
        option[valueKey] === value[valueKey]
      }
      getOptionLabel={getOptionLabel}
      noOptionsText={noOptionsText}
      options={options}
      loading={isLoading}
      onChangeCapture={() => setIsLoading(true)}
      onChange={(_, value) => onChange(value)}
      renderInput={params => (
        <TextField
          {...params}
          variant={variant}
          helperText={helperText}
          placeholder={placeholder}
          onChange={onChangeTextField}
          InputProps={{
            ...params.InputProps,
            startAdornment: <Search color="disabled" />,
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

export default MuiAutocomplete;
