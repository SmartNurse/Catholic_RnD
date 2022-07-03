import { Box, Typography } from '@mui/material';

interface Props {
  title: string;
  children: JSX.Element;
}

const FormItem = ({ title, children }: Props) => (
  <Box sx={{ mb: '20px' }}>
    <Typography variant="caption">{title}</Typography>
    {children}
  </Box>
);

export default FormItem;
