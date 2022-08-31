import { FormControl, FormControlProps, FormLabel } from '@mui/material';

interface Props extends FormControlProps {
  label: string;
  children: React.ReactNode;
  isHidden?: boolean;
}

const Item = ({
  label,
  children,
  required,
  isHidden,
  ...formControlProps
}: Props) =>
  isHidden ? null : (
    <FormControl {...formControlProps}>
      <FormLabel
        required={required}
        sx={{ fontSize: 12, '.MuiFormLabel-asterisk': { color: 'red' } }}
      >
        {label}
      </FormLabel>
      {children}
    </FormControl>
  );

export default Item;
