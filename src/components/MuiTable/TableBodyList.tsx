import {
  TableBody,
  TableCell,
  TableRow,
  Tooltip,
  Typography,
} from '@mui/material';
import { Props as TableHeadListProps } from './TableHeadList';

export interface Props extends TableHeadListProps {
  rows: { id: string | number; [key: string]: any }[];
}

const TableBodyList = ({ columns, rows }: Props) => {
  // console.log('row.length', rows.length);
  // console.log('row', rows);

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
        <TableRow key={row.id}>
          {columns.map(({ fieldId, width, sx: columnSx }) => {
            const rowData = row[fieldId];
            const isObjectRowData = typeof rowData === 'object';
            return (
              <TableCell key={`${fieldId}-${row.id}`} sx={{ ...columnSx }}>
                {isObjectRowData ? (
                  rowData
                ) : (
                  <Tooltip title={<TooltipTitle title={rowData} />}>
                    <Typography
                      maxWidth={width ?? 'auto'}
                      maxHeight={20}
                      display="block"
                      variant="caption"
                      overflow="hidden"
                      textOverflow="ellipsis"
                      whiteSpace={width ? 'nowrap' : 'pre-line'}
                      fontSize="12px"
                      fontWeight={500}
                    >
                      {rowData}
                    </Typography>
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
