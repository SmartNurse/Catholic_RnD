import {
  TableBody,
  TableCell,
  TableRow,
  Tooltip,
  Typography,
} from '@mui/material';

interface Props {
  columns: { fieldId: string; label: string; width?: number }[];
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
        <TableRow key={row.id}>
          {columns.map(({ fieldId, width }) => (
            <TableCell key={`${fieldId}-${row.id}`}>
              {typeof row[fieldId] === 'object' ? (
                row[fieldId]
              ) : (
                <Tooltip title={<TooltipTitle title={row[fieldId]} />}>
                  <Typography
                    maxWidth={width ?? 'auto'}
                    maxHeight={20}
                    display="block"
                    variant="caption"
                    overflow="hidden"
                    textOverflow="ellipsis"
                    whiteSpace={width ? 'nowrap' : 'pre-line'}
                  >
                    {row[fieldId]}
                  </Typography>
                </Tooltip>
              )}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
};

export default TableBodyList;
