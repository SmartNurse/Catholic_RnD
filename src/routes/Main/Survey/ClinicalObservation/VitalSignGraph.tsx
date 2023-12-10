import Form from 'components/Form';

import { useEffect, useState, Fragment } from 'react';
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
import { AccessTime } from '@mui/icons-material';
import {
  CPRStyledTableCell,
  CPRStyledTableCellFirst,
  CPRStyledTableCellHead,
  CPRStyledTableCellHeadNumbering,
  CPRStyledTableCellBodyNumbering,
} from 'routes/Main/style';
import SectionTitle from '../components/SectionTitle';

import { IFormValues, IFormWatch, IFormRegister } from 'routes/Main/type';
import { MobileTimePicker } from '@mui/x-date-pickers';

const radioId = ['face', 'activity', 'respiratory', 'vocalization'];
const contentLabel = [
  {
    id: 'V/S',
    ko: [
      '날짜',
      '시간',
      'SBP (mm/Hg)',
      'DBP (mmHg)',
      'PR (회/min)',
      'RR (회/min)',
      'BT (℃)',
      'Spo2 (%)',
      'O2',
      '기타',
    ],
    desc: [
      '편안한 자세, 움직임이 없음',
      '느리고 조심스러운 움직임, 몸을 뒤척임',
      '통증 부위를 만지려고 하거나 문지름, 온몸에 힘을 줌',
      '온몸을 흔들거나 비틀며 심하게 움직임, 공격적 행동',
      'q',
      'q',
      'w',
      'e',
      'r',
      't',
      't',
    ],
  },
  {
    id: '키 / 체중',
    ko: ['키 (cm)', '체중 (kg)'],
    desc: [
      '경보가 울리지 않고, 잘 적응함',
      '경보가 울리지만 곧 멈춤',
      '경보가 자주 울림, 인공호흡기에 저항함',
      '기계 호흡과 Fighting',
      'q',
      'q',
      'w',
      'e',
      'r',
      't',
      't',
    ],
  },
  {
    id: '섭취량',
    ko: ['경구', '정맥 주입', '혈액 및 기타', '총 섭취량'],
    desc: [
      '정상적인 말투',
      '공공대며 신음소리를 냄',
      '훌쩍거리거나, 소리를 내어 흐느껴 울음',
      '큰소리를 지름, 폭언을 함, 울부짖음',
      'q',
      'q',
      'w',
      'e',
      'r',
      't',
      't',
    ],
  },
  {
    id: '배설량',
    ko: ['소변', '구토', '대변', '배액 및 기타', '총 배설량'],
    desc: [
      '정상적인 말투',
      '공공대며 신음소리를 냄',
      '훌쩍거리거나, 소리를 내어 흐느껴 울음',
      '큰소리를 지름, 폭언을 함, 울부짖음',
      'q',
      'q',
      'w',
      'e',
      'r',
      't',
      't',
    ],
  },
  {
    id: '체위변경',
    ko: ['수행 여부', 'Position', '피부 상태'],
    desc: [
      '정상적인 말투',
      '공공대며 신음소리를 냄',
      '훌쩍거리거나, 소리를 내어 흐느껴 울음',
      '큰소리를 지름, 폭언을 함, 울부짖음',
      'q',
      'q',
      'w',
      'e',
      'r',
      't',
      't',
    ],
  },
  {
    id: '신체 보호대',
    ko: [
      '적용 일시',
      '적용 사유',
      '적용 부위',
      '피부 상태',
      '말단부 청색증',
      '말단부 온도',
      '말단부 감각',
      '부작용 발생',
      '예방활동',
    ],
    desc: [
      '정상적인 말투',
      '공공대며 신음소리를 냄',
      '훌쩍거리거나, 소리를 내어 흐느껴 울음',
      '큰소리를 지름, 폭언을 함, 울부짖음',
      'q',
      'q',
      'w',
      'e',
      'r',
      't',
      't',
    ],
  },
  {
    id: 'IPC',
    ko: ['적용 일시'],
    desc: [
      '정상적인 말투',
      '공공대며 신음소리를 냄',
      '훌쩍거리거나, 소리를 내어 흐느껴 울음',
      '큰소리를 지름, 폭언을 함, 울부짖음',
      'q',
      'q',
      'w',
      'e',
      'r',
      't',
      't',
    ],
  },
  {
    id: 'Vent',
    ko: [
      '시작 일시',
      'Mode',
      'FiO2',
      'PEEP',
      'F',
      'Vsennse',
      'Pi',
      'Ti',
      'TV',
      'MV',
      'Cstat',
      'P/F ratio',
    ],
    desc: [
      '정상적인 말투',
      '공공대며 신음소리를 냄',
      '훌쩍거리거나, 소리를 내어 흐느껴 울음',
      '큰소리를 지름, 폭언을 함, 울부짖음',
      'q',
      'q',
      'w',
      'e',
      'r',
      't',
      't',
    ],
  },
  {
    id: 'CRRT',
    ko: [
      '모드',
      'Blood flow',
      'Dialysate (mL/hr)',
      'Pre-Replacement (mL/hr)',
      'Post-Replacement (mL/hr)',
      'PBP (mL/hr)',
      'Pt fluid removal (mL/hr)',
      'Anticoagulation (mg/hr)',
      'CRRT 감시',
      'Access pressure',
      'Return pressure',
      'Filter pressure',
      'Effluent pressure',
      'TMP Pressure',
      'Pressure drop',
    ],
    desc: [
      '정상적인 말투',
      '공공대며 신음소리를 냄',
      '훌쩍거리거나, 소리를 내어 흐느껴 울음',
      '큰소리를 지름, 폭언을 함, 울부짖음',
      'q',
      'q',
      'w',
      'e',
      'r',
      't',
      't',
    ],
  },
];
const scoreLabel = [
  { score: '0', label: '통증없음' },
  { score: '1~3', label: '약간 불편함' },
  { score: '4~6', label: '중간정도 불편함' },
  { score: '7~10', label: '매우 불편하고 아픈상태' },
];

interface Props extends IFormValues, IFormWatch, IFormRegister {
  disabled?: boolean;
}

const VitalSignGraph = (props: Props) => {
  const { palette } = useTheme();
  const [checkTime, setCheckTime] = useState(null);

  const { disabled, setValue, getValues, register } = props;

  const [sumValue, setSumValue] = useState(0);

  const calculateSumValue = () => {
    setSumValue(
      radioId.reduce((acc, cur) => {
        const value = Number(getValues(cur));
        return value ? acc + value : acc;
      }, 0)
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    calculateSumValue();
  };

  useEffect(() => {
    calculateSumValue();
  }, []);

  return (
    <>
      <SectionTitle title="임상관찰기록" mt={3} />
      <Box
        sx={{
          width: '93%',
          marginTop: '60px',
          justifyContent: 'center',
          marginLeft: '3%',
        }}
      >
        <Table aria-label="simple table">
          <TableBody>
            {contentLabel.map(
              (content: { id: string; ko: string[]; desc: string[] }, i) => {
                return (
                  <TableRow>
                    <CPRStyledTableCellFirst
                      align="center"
                      sx={{
                        minWidth: '80px',
                        whiteSpace: 'pre',
                      }}
                    >
                      {content.id}
                    </CPRStyledTableCellFirst>
                    <CPRStyledTableCell>
                      {content.ko.map((_, i) => {
                        if (content.ko[i] === ' ') {
                          return (
                            <TableRow
                              sx={{
                                lineHeight: content.ko[i].includes('심장리듬')
                                  ? '22px'
                                  : '44px',
                                borderBottom:
                                  i !== content.ko.length - 1
                                    ? '1px solid lightgray'
                                    : '',
                              }}
                            >
                              <Box
                                sx={{
                                  minWidth: '70px',
                                  textAlign: 'center',
                                }}
                              >
                                <input
                                  disabled={disabled}
                                  style={{
                                    border: 'none',
                                    width: '100%',
                                    height: '44px',
                                  }}
                                  {...register(`${content.desc[i]}`)}
                                />
                              </Box>
                            </TableRow>
                          );
                        }
                        return (
                          <TableRow
                            sx={{
                              lineHeight: content.ko[i].includes('심장리듬')
                                ? '22px'
                                : '44px',
                              borderBottom:
                                i !== content.ko.length - 1
                                  ? '1px solid lightgray'
                                  : '',
                            }}
                          >
                            <Box
                              sx={{
                                width: '200px',
                                whiteSpace: 'pre',
                                padding: '0 0 0 5px',
                              }}
                            >
                              {content.ko[i]}
                            </Box>
                          </TableRow>
                        );
                      })}
                    </CPRStyledTableCell>

                    {content.desc.map((v, i) => {
                      return (
                        <CPRStyledTableCellBodyNumbering>
                          {content.ko.map((_, i) => {
                            if (
                              content.ko[i] === '인공호흡' ||
                              content.ko[i] === 'ABGA' ||
                              content.ko[i] === 'Chest X-ray'
                            ) {
                              return (
                                <TableRow
                                  sx={{
                                    lineHeight: '47px',
                                    borderBottom:
                                      i !== content.ko.length - 1
                                        ? '1px solid lightgray'
                                        : '',
                                  }}
                                >
                                  <Box
                                    sx={{
                                      minWidth: '100px',
                                      textAlign: 'right',
                                    }}
                                  >
                                    <Checkbox
                                      size="small"
                                      // value={label}
                                      defaultValue={
                                        Boolean(getValues(`${v}checked`))
                                          ? [v]
                                          : []
                                      }
                                      onChange={(_, checked) => {
                                        setValue(`${v}checked`, checked);
                                      }}
                                    />
                                  </Box>
                                </TableRow>
                              );
                            }

                            return (
                              <TableRow
                                sx={{
                                  lineHeight: '43px',
                                  borderBottom:
                                    i !== content.ko.length - 1
                                      ? '1px solid lightgray'
                                      : '',
                                }}
                              >
                                <Box
                                  sx={{
                                    minWidth: '100px',
                                    textAlign: 'center',
                                  }}
                                >
                                  <input
                                    disabled={disabled}
                                    style={{
                                      border: 'none',
                                      width: '100%',
                                      height: '44px',
                                    }}
                                    {...register(`${v}`)}
                                  />
                                </Box>
                              </TableRow>
                            );
                          })}
                        </CPRStyledTableCellBodyNumbering>
                      );
                    })}
                  </TableRow>
                );
              }
            )}
          </TableBody>
        </Table>
      </Box>
    </>
  );
};

export default VitalSignGraph;
