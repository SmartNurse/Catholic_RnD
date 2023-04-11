import { SxProps, TableCell, TableRow } from '@mui/material';

export interface Props {
  columns: { fieldId: string; label: string; width?: number; sx?: SxProps }[];
}

const BedScoreTwoTableHeadList = ({ columns }: Props) => (
  <TableRow >
    {columns.map(({ fieldId, label, sx }) => (
      <TableCell
        key={fieldId}
        sx={{
          fontSize: 12,
          fontWeight: 700,
          whiteSpace: 'nowrap',
          paddingLeft: '15px',
          ...sx,
        }}
      >
        {label}
      </TableCell>
    ))}
  </TableRow>
);

export default BedScoreTwoTableHeadList;
