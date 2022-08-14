import { FormControl, Typography } from '@mui/material';

interface Props {
  title: string;
  children: React.ReactNode;
  isHidden?: boolean;
}

const FormItem = ({ title, children, isHidden }: Props) =>
  isHidden ? null : (
    <FormControl fullWidth>
      <Typography variant="caption">{title}</Typography>
      {children}
    </FormControl>
  );

export default FormItem;
