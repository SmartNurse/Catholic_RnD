import { styled, Typography } from '@mui/material';

export const StyledTableTypography = styled(Typography)`
  position: relative;
  &::before {
    content: '...';
    position: absolute;
    top: 0;
    right: 0;
  }
`;
