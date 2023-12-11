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

const CVCone = (props: Props) => {
  const { disabled, register } = props;

  return (
    <Fragment>
      <Box
        sx={{
          width: '100%',
          marginTop: '60px',
          marginRight: 'auto',
          marginLeft: 'auto',
        }}
      >
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
      <Typography
        sx={{ margin: '30px 0 20px 0', fontSize: '14px', fontWeight: 400 }}
      >
        {'<'} 호스피스·완화의료 및 임종과정에 있는 환자의 연명의료결정에 관한
        법률{'>'} 제 18조제1항에 따라 환자의 의사를 확인할 수 없고, 해당 환자가
        의사표현을 할 수 없는 의학적 상태에 해당하여 미성년자인 환자의 법정
        <br />
        대리인(친권자) 또는 환자 가족이 위와 같은 의사표시를 했음을 확인합니다.
      </Typography>
    </Fragment>
  );
};

export default CVCone;
