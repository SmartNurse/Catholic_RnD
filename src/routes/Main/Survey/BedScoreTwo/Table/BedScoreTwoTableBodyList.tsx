import {
  TableBody,
  TableCell,
  TableRow,
  Tooltip,
  Typography,
} from '@mui/material';
import { Props as BedScoreTwoTableHeadList } from './BedScoreTwoTableHeadList';
import { ReactComponent as Question } from './../../../../../assets/question.svg';
import { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

export interface Props extends BedScoreTwoTableHeadList {
  rows: { id: string | number; [key: string]: any }[];
}

const BedScoreTwoTableBodyList = ({ columns, rows }: Props) => {
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

  const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 15,
      whiteSpace: 'preLine',
    },
  }));

  return (
    <TableBody>
      {rows.map(row => (
        <TableRow key={row.id}>
          {columns.map(({ fieldId, width, sx: columnSx }) => {
            const rowData = row[fieldId];
            const isObjectRowData = typeof rowData === 'object';
            // console.log('fieldId is ', fieldId, rowData, isObjectRowData, row);
            const toolTipData = row.toolTipContents.map(function (tip: any) {
              return (
                <div style={{}}>
                  <div
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      marginBottom: 5,
                      marginTop: 5,
                    }}
                  >
                    {tip.title}
                  </div>
                  <div style={{ fontSize: 12, whiteSpace: 'pre-line' }}>
                    {tip.contents}
                  </div>
                </div>
              );
            });
            const rowDataWithToolTip = (
              <Tooltip title={<TooltipTitle title={rowData} />}>
                <Typography
                  sx={{ fontSize: '0.85rem', fontWeight: '450' }}
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
              </Tooltip>
            );
            const rowDataWithQuestion = (
              <div style={{ display: 'flex' }}>
                <LightTooltip title={toolTipData}>
                  <Question style={{ marginRight: '20px' }} />
                </LightTooltip>
                {rowDataWithToolTip}
              </div>
            );

            return (
              <TableCell key={`${fieldId}-${row.id}`} sx={{ ...columnSx }}>
                {getColumnsData()}
              </TableCell>
            );

            function getColumnsData() {
              if (isObjectRowData === true) {
                return rowData;
              } else if (fieldId === 'title') {
                return rowDataWithQuestion;
              } else {
                return rowDataWithToolTip;
              }
            }
          })}
        </TableRow>
      ))}
    </TableBody>
  );
};

export default BedScoreTwoTableBodyList;
