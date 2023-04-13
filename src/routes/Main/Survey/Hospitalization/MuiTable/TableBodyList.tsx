import {
  TableBody,
  TableCell,
  TableRow,
  Tooltip,
  Typography,
} from '@mui/material';
import { Props as TableHeadListProps } from './TableHeadList';
import TableHeadList from './TableHeadList';
import { ReactComponent as Question } from './../../assets/question.svg';
import RowContentSub from '../RowContentSub';

export interface Props extends TableHeadListProps {
  rows: { id: string | number; [key: string]: any }[];
}

const TableBodyList = ({ columns, rows }: Props) => {
  if (rows.length === 0) {
    return (
      <TableBody>
        <TableRow>
          <TableCell align="center" colSpan={columns.length}>
            <Typography py={1} variant="body2">
              데이터가 없습니다.
            </Typography>
          </TableCell>
        </TableRow>
      </TableBody>
    );
  }

  const TooltipTitle = ({ title }: { title: string }) => (
    <Typography variant="caption" sx={{ whiteSpace: 'pre-line' }}>
      {title}
    </Typography>
  );

  return (
    <TableBody>
      {rows.map(row => (
        <TableRow key={row.id} sx={{ border: 'none' }}>
          {columns.map(({ fieldId, width, sx: columnSx }) => {
            const rowData = row[fieldId];

            const isObjectRowData = typeof rowData === 'object';

            return (
              <TableCell key={`${fieldId}-${row.id}`} sx={{ ...columnSx }}>
                {isObjectRowData ? (
                  rowData
                ) : (
                  <Tooltip title={<TooltipTitle title={rowData} />}>
                    <div style={{ display: 'inline-flex' }}>
                      {/* <Typography>보호자 이름</Typography> */}
                      <Typography
                        sx={{
                          fontSize: '0.85rem',
                          fontWeight: '450',
                          paddingLeft: '140px',
                        }}
                        maxWidth={width ?? 'auto'}
                        maxHeight={20}
                        display="block"
                        variant="caption"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        whiteSpace={width ? 'nowrap' : 'pre-line'}
                      >
                        {rowData}
                      </Typography>
                    </div>
                  </Tooltip>
                )}
              </TableCell>
            );
          })}
        </TableRow>
      ))}
    </TableBody>
  );
};

export default TableBodyList;
