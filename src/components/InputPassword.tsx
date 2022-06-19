import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, TextField, TextFieldProps } from '@mui/material';
import { forwardRef, useState } from 'react';

const InputPassword = forwardRef((props: TextFieldProps, ref) => {
  const [isVisible, setIsVisible] = useState(false);

  const type = isVisible ? 'text' : 'password';

  const VisibleBtn = () => {
    const onClick = () => setIsVisible(value => !value);
    const icon = isVisible ? <VisibilityOff /> : <Visibility />;
    return (
      <IconButton size="small" onClick={onClick} sx={{ ml: '14px' }}>
        {icon}
      </IconButton>
    );
  };

  return (
    <TextField
      size="small"
      variant="outlined"
      type={type}
      InputProps={{ endAdornment: <VisibleBtn /> }}
      inputProps={{ ref }}
      {...props}
    />
  );
});

export default InputPassword;
