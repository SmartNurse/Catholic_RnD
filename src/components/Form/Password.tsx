import { forwardRef, useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, TextField, TextFieldProps } from '@mui/material';

type Props = TextFieldProps & {
  isHideVisibleBtn?: boolean;
};

const Password = forwardRef(({ isHideVisibleBtn, ...props }: Props, ref) => {
  const [isVisible, setIsVisible] = useState(false);

  const type = isVisible ? 'new-password' : 'password';

  const VisibleBtn = () => {
    if (isHideVisibleBtn) return null;

    const onClick = () => setIsVisible(value => !value);
    const icon = isVisible ? <VisibilityOff /> : <Visibility />;

    return (
      <IconButton size="small" onClick={onClick} sx={{ ml: 1.75 }}>
        {icon}
      </IconButton>
    );
  };

  return (
    <TextField
      type={type}
      InputProps={{ endAdornment: <VisibleBtn /> }}
      inputRef={ref}
      {...props}
    />
  );
});

export default Password;
