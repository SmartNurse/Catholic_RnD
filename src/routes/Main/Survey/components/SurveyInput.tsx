import { forwardRef } from 'react';
import { TextField, TextFieldProps } from '@mui/material';

const SurveyInput = forwardRef((props: TextFieldProps, ref) => (
  <TextField
    required
    fullWidth
    size="small"
    inputRef={ref}
    variant="outlined"
    {...props}
  />
));

export default SurveyInput;
