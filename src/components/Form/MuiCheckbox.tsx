import { Checkbox, CheckboxProps, FormControlLabel } from '@mui/material';
import { forwardRef } from 'react';

interface Props extends CheckboxProps {
  label: string;
  defaultValue: string[];
}

const MuiCheckbox = forwardRef(
  ({ label, defaultValue, ...props }: Props, ref) => (
    <FormControlLabel
      label={label}
      inputRef={ref}
      control={
        <Checkbox
          size="small"
          value={label}
          defaultChecked={defaultValue?.includes(label)}
          {...props}
        />
      }
      sx={{ flexWrap: 'nowrap', whiteSpace: 'nowrap' }}
    />
  )
);

export default MuiCheckbox;
