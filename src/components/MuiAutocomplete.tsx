import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import {
  Autocomplete,
  CircularProgress,
  TextField,
  debounce,
  Typography,
  colors,
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
  getOptionLabel: (option: any) => string;
  renderOption?: (props: any, option: any) => React.ReactNode;
  getApi: (request: IGetSearch) => Promise<AxiosResponse<any>>;
}

const MuiAutocomplete = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState<any[]>([]);
  const [totalCount, setTotalCount] = useState(0);

  const {
    listKey,
    valueKey,
    variant = 'outlined',
    noOptionsText,
    helperText,
    placeholder,
    onChange,
    renderOption,
    getOptionLabel,
    getApi,
  } = props;

  const onChangeOptions = useCallback((keyword: string) => {
    getApi({ page: 1, keyword })
      .then(({ data }) => {
        setTotalCount(data?.count);
        setOptions(data[listKey]);
      })
      .finally(() => setIsLoading(false));
    // eslint-disable-next-line
  }, []);

  useEffect(() => onChangeOptions(''), [onChangeOptions]);

  const isOptionEqualToValue = (option: any, value: any) =>
    option[valueKey] === value[valueKey];

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
      isOptionEqualToValue={isOptionEqualToValue}
      renderOption={renderOption}
      getOptionLabel={getOptionLabel}
      noOptionsText={<Typography variant="caption">{noOptionsText}</Typography>}
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
            startAdornment: totalCount ? (
              <Typography
                variant="caption"
                color={colors.grey[500]}
                sx={{ mr: 1 }}
              >
                (총 {totalCount}명)
              </Typography>
            ) : (
              <Search color="disabled" sx={{ fontSize: 16, mr: 1 }} />
            ),
            endAdornment: (
              <TextFieldEndAdornment
                endAdornment={params.InputProps.endAdornment}
              />
            ),
            sx: { fontSize: 14 },
          }}
        />
      )}
    />
  );
};

export default MuiAutocomplete;
