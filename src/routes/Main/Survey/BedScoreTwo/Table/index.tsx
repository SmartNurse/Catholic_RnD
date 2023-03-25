import { Table, TableHead } from '@mui/material';
import BedScoreTwoTableHeadList, { Props as BedScoreTwoTableHeadListProps } from './BedScoreTwoTableHeadList';
import BedScoreTwoTableBodyList, { Props as BedScoreTwoTableBodyListProps } from './BedScoreTwoTableBodyList';

interface Props extends BedScoreTwoTableHeadListProps, BedScoreTwoTableBodyListProps {}

const MuiTable = ({ columns, rows}: Props) => (
  <Table size="small">
    <TableHead>
      <BedScoreTwoTableHeadList columns={columns} />
    </TableHead>
    <BedScoreTwoTableBodyList columns={columns} rows={rows} />
  </Table>
);

export default MuiTable;
