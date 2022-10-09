import { Table, TableHead } from '@mui/material';
import TableBodyList from './TableBodyList';
import TableHeadList from './TableHeadList';

interface Props {
  columns: { fieldId: string; label: string }[];
  rows: { id: string | number; [key: string]: any }[];
}

const MuiTable = ({ columns, rows }: Props) => (
  <Table size="small">
    <TableHead>
      <TableHeadList columns={columns} />
    </TableHead>
    <TableBodyList columns={columns} rows={rows} />
  </Table>
);

export default MuiTable;
