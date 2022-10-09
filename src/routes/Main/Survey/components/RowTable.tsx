import {
  Box,
  Grid,
  GridSize,
  Stack,
  Typography,
  TypographyProps,
} from '@mui/material';
import { Fragment } from 'react';

export interface IRowTableColumn {
  id: string | number;
  label: string;
  xs: GridSize;
}

interface Props {
  columns: IRowTableColumn[];
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

  const Rows = ({ column }: { column: IRowTableColumn }) => {
    if (rows.length === 0)
      return <Typography variant="subtitle2">데이터가 없습니다.</Typography>;

    return (
      <Stack spacing={1}>
        <Typography {...contactTitleProps}>{column.label}</Typography>
        {rows.map(row => (
          <Box key={row.id} height={40} display="flex" alignItems="center">
            {row[column.id] ?? null}
          </Box>
        ))}
      </Stack>
    );
  };

  return (
    <Fragment>
      {columns.map(column => (
        <Grid item xs={column.xs} key={column.id}>
          <Rows column={column} />
        </Grid>
      ))}
    </Fragment>
  );
};

export default RowTable;
