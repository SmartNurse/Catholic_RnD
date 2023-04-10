import { Table, TableHead,  } from '@mui/material';
import TableHeadList, { Props as TableHeadListProps } from './TableHeadList';
import TableBodyList, { Props as TableBodyListProps } from './TableBodyList';
import RowContainer from '../../components/RowContainer';


interface Props extends TableHeadListProps, TableBodyListProps {}

const MuiTable = ({ columns, rows }: Props) => (
  <RowContainer xs={12}>
    <TableBodyList columns={columns} rows={rows} />
  </RowContainer>
);

export default MuiTable;
