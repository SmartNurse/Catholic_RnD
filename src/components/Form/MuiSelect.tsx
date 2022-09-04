import { forwardRef } from 'react';
import { NativeSelect, NativeSelectProps } from '@mui/material';

interface Props extends NativeSelectProps {
  isNone?: boolean;
  options?: any[];
  getOptionLabel?: (option: any) => string;
  getOptionValue?: (option: any) => string;
}

const MuiSelect = forwardRef((props: Props, ref) => {
  const { isNone, options, getOptionLabel, getOptionValue, ...selectProps } =
    props;

  return (
    <NativeSelect
      fullWidth
      size="small"
      inputRef={ref}
      sx={{ fontSize: 14, pt: 1 }}
      {...selectProps}
    >
      {isNone && <option value="none">선택</option>}
      {options?.map(option => {
        const label = getOptionLabel ? getOptionLabel(option) : option;
        const value = getOptionValue ? getOptionValue(option) : option;

        return (
          <option key={value} value={value}>
            {label}
          </option>
        );
      })}
    </NativeSelect>
  );
});

export default MuiSelect;
