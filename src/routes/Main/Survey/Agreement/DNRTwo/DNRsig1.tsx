import Form from 'components/Form';

import { Fragment } from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableHead,
  TableRow,
  useTheme,
  Stack,
  Checkbox,
} from '@mui/material';

import { Ti18nId } from 'hooks/useI18n';
import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';

import {
  DNRTWOStyledTableCellFirst,
  DNRTWOStyledTableCellHead,
  DNRTWOStyledTableCellHeadNumbering,
  DNRTWOStyledTableCellBodyNumbering,
} from 'routes/Main/style';

interface Props extends IFormValues, IFormWatch, IFormRegister {
  disabled?: boolean;
  onRequired: (id: Ti18nId) => void;
  onSuccess: (message: string) => void;
}

const radioId = ['face', 'activity', 'respiratory', 'vocalization'];

const contentLabel = [
  {
    id: '임상\n관찰',
    ko: ['혈압(mmHg)'],
    desc: [
      '편안한 자세, 움직임이 없음',
      '느리고 조심스러운 움직임, 몸을 뒤척임',
      '통증 부위를 만지려고 하거나 문지름, 온몸에 힘을 줌',
      '온몸을 흔들거나 비틀며 심하게 움직임, 공격적 행동',
      'q',
    ],
  },
  {
    id: '처치',
    ko: ['혈압(mmHg)'],
    desc: [
      '편안한 자세, 움직임이 없음',
      '느리고 조심스러운 움직임, 몸을 뒤척임',
      '통증 부위를 만지려고 하거나 문지름, 온몸에 힘을 줌',
      '온몸을 흔들거나 비틀며 심하게 움직임, 공격적 행동',
      'q',
    ],
  },
  {
    id: ' 처치:\n기관\n삽관',
    ko: ['혈압(mmHg)'],
    desc: [
      '편안한 자세, 움직임이 없음',
      '느리고 조심스러운 움직임, 몸을 뒤척임',
      '통증 부위를 만지려고 하거나 문지름, 온몸에 힘을 줌',
      '온몸을 흔들거나 비틀며 심하게 움직임, 공격적 행동',
      'q',
    ],
  },
];

const DNRsig1 = (props: Props) => {
  const { disabled, register } = props;

  return (
    <Fragment>
      <Box
        sx={{
          width: '100%',
          marginTop: '-30px',
          marginRight: 'auto',
          marginLeft: 'auto',
        }}
      >
        <Typography sx={{ fontSize: '12px' }}>
          위 환자의 법정대리인(친권자)으로서 환자에게 연명의료를 시행하지 않거나
          중단하겠다는 의사를 표시합니다.
        </Typography>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <DNRTWOStyledTableCellHead
                colSpan={1}
                align="center"
              ></DNRTWOStyledTableCellHead>

              <DNRTWOStyledTableCellHeadNumbering colSpan={1} align="center">
                환자가족 성명
              </DNRTWOStyledTableCellHeadNumbering>
              <DNRTWOStyledTableCellHeadNumbering colSpan={1} align="center">
                환자와의 관계
              </DNRTWOStyledTableCellHeadNumbering>
              <DNRTWOStyledTableCellHeadNumbering colSpan={1} align="center">
                주민등록번호
              </DNRTWOStyledTableCellHeadNumbering>
              <DNRTWOStyledTableCellHeadNumbering colSpan={1} align="center">
                연락처
              </DNRTWOStyledTableCellHeadNumbering>
              <DNRTWOStyledTableCellHeadNumbering colSpan={1} align="center">
                서명란
              </DNRTWOStyledTableCellHeadNumbering>
            </TableRow>
          </TableHead>
          <TableBody>
            {contentLabel.map(
              (content: { id: string; ko: string[]; desc: string[] }, i) => {
                return (
                  <TableRow>
                    <DNRTWOStyledTableCellFirst
                      align="center"
                      sx={{
                        // minWidth: '30px',
                        whiteSpace: 'pre',
                      }}
                    >
                      {i + 1}
                    </DNRTWOStyledTableCellFirst>

                    {content.desc.map((v, i) => {
                      return (
                        <DNRTWOStyledTableCellBodyNumbering>
                          {content.ko.map((_, i) => {
                            return (
                              <TableRow
                                sx={{
                                  lineHeight: content.ko[i].includes('심장리듬')
                                    ? '44px'
                                    : '44px',
                                  borderBottom:
                                    i !== content.ko.length - 1
                                      ? '1px solid lightgray'
                                      : '',
                                }}
                              >
                                <Box
                                  sx={{
                                    textAlign: 'center',
                                  }}
                                >
                                  <input
                                    disabled={disabled}
                                    style={{
                                      width: '100%',
                                      border: 'none',
                                      height: '44px',
                                    }}
                                    {...register(`${v}`)}
                                  />
                                </Box>
                              </TableRow>
                            );
                          })}
                        </DNRTWOStyledTableCellBodyNumbering>
                      );
                    })}
                  </TableRow>
                );
              }
            )}
          </TableBody>
        </Table>
      </Box>
    </Fragment>
  );
};

export default DNRsig1;
