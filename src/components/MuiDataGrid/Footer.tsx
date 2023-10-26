import { Box, Pagination, TextField, Typography } from '@mui/material';

interface Props {
  page: number;
  count: number;
  onPageChange: (page: number) => void;
}

const Footer = ({ page, count, onPageChange }: Props) => {
  const onKeydown = ({ code, target }: any) => {
    if (code !== 'Enter') return null;

    const value = Number(target.value);
    if (value < 1) return onPageChange(1);
    if (value > count) return onPageChange(count);
    onPageChange(value);
  };

  const maxWidth = 22 + 10 * String(count).length;

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      sx={{ p: 2, borderTop: 'solid 1px lightGray' }}
    >
      <Box display="flex" alignItems="center" sx={{ mr: 3 }}>
        <Typography variant="body2">페이지:</Typography>
        <TextField
          size="small"
          type="number"
          defaultValue={page}
          onKeyDown={onKeydown}
          inputProps={{ style: { padding: '2px 8px', textAlign: 'center' } }}
          sx={{ mx: 1, maxWidth }}
        />
        <Typography variant="body2">/</Typography>
        <Typography variant="body2">{count}</Typography>
      </Box>

      <Pagination
        size="small"
        showLastButton
        showFirstButton
        page={page}
        count={count}
        onChange={(_, page) => onPageChange(page)}
      />
    </Box>
  );
};

export default Footer;
