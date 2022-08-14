import { Typography } from '@mui/material';

const adornment = (start?: string, end?: string) => {
  const Element = (label: string) => (
    <Typography variant="caption" noWrap overflow="visible" sx={{ p: 0.25 }}>
      {label}
    </Typography>
  );

  return {
    startAdornment: start && Element(start),
    endAdornment: end && Element(end),
  };
};

export default adornment;
