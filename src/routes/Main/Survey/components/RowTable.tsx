import {
  Box,
  Grid,
  GridSize,
  Stack,
  Typography,
  TypographyProps,
} from '@mui/material';
import { Fragment } from 'react';

interface Props {
  columns: {
    id: string | number;
    label: string;
    xs: GridSize;
  }[];
  rows: {
    id: string | number;
    [id: string]: React.ReactNode;
  }[];
}

const RowTable = ({ columns, rows }: Props) => {
  const contactTitleProps: TypographyProps = {
    variant: 'caption',
    fontWeight: 'bold',
  };

  return (
    <Fragment>
      {columns.map(column => {
        return (
          <Grid item xs={column.xs} key={column.id}>
            <Stack spacing={1}>
              <Typography {...contactTitleProps}>{column.label}</Typography>
              {rows.map(row => (
                <Box
                  key={row.id}
                  height={40}
                  display="flex"
                  alignItems="center"
                >
                  {row[column.id] ?? null}
                </Box>
              ))}
            </Stack>
          </Grid>
        );
      })}
    </Fragment>
  );
};

export default RowTable;
