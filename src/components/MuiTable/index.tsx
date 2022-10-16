import { Table, TableHead } from '@mui/material';
import TableHeadList, { Props as TableHeadListProps } from './TableHeadList';
import TableBodyList, { Props as TableBodyListProps } from './TableBodyList';

interface Props extends TableHeadListProps, TableBodyListProps {}

const MuiTable = ({ columns, rows }: Props) => (
  <Table size="small">
    <TableHead>
      <TableHeadList columns={columns} />
    </TableHead>
    <TableBodyList columns={columns} rows={rows} />
  </Table>
);

export default MuiTable;
