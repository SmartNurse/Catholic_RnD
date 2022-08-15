import { forwardRef } from 'react';
import { TextField, TextFieldProps } from '@mui/material';

type Props = TextFieldProps & {
  textAlign?: 'right' | 'left';
};

const SurveyInput = forwardRef(
  ({ textAlign = 'left', ...props }: Props, ref) => {
    return (
      <TextField
        required
        fullWidth
        size="small"
        inputRef={ref}
        variant="outlined"
        inputProps={{ style: { textAlign } }}
        {...props}
      />
    );
  }
);

export default SurveyInput;
