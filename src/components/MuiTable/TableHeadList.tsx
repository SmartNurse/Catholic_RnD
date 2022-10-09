import { TableCell, TableRow } from '@mui/material';

interface Props {
  columns: { fieldId: string; label: string }[];
}

const TableHeadList = ({ columns }: Props) => (
  <TableRow>
    {columns.map(column => (
      <TableCell
        key={column.fieldId}
        sx={{
          fontSize: 12,
          fontWeight: 700,
          whiteSpace: 'nowrap',
        }}
      >
        {column.label}
      </TableCell>
    ))}
  </TableRow>
);

export default TableHeadList;
