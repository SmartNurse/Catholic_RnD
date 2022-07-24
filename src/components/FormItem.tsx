import { Box, Typography } from '@mui/material';

interface Props {
  title: string;
  children: JSX.Element;
  isHidden?: boolean;
}

const FormItem = ({ title, children, isHidden }: Props) =>
  isHidden ? null : (
    <Box>
      <Typography variant="caption">{title}</Typography>
      {children}
    </Box>
  );

export default FormItem;
