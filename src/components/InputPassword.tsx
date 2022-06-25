import { forwardRef, useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, TextField, TextFieldProps } from '@mui/material';

type Props = TextFieldProps & {
  isHideVisibleBtn?: boolean;
};

const InputPassword = forwardRef(
  ({ isHideVisibleBtn, ...props }: Props, ref) => {
    const [isVisible, setIsVisible] = useState(false);

    const type = isVisible ? 'text' : 'password';

    const VisibleBtn = () => {
      const onClick = () => setIsVisible(value => !value);
      const icon = isVisible ? <VisibilityOff /> : <Visibility />;

      if (isHideVisibleBtn) return null;
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
  }
);

export default InputPassword;
