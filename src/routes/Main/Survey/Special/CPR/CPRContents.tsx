import { useEffect, useState } from 'react';
import {
  Box,
  Table,
  TableBody,
  TableHead,
  TableRow,
  useTheme,
  Checkbox,
} from '@mui/material';
import {
  CPRStyledTableCell,
  CPRStyledTableCellFirst,
  CPRStyledTableCellHead,
  CPRStyledTableCellHeadNumbering,
  CPRStyledTableCellBodyNumbering,
} from 'routes/Main/style';

import { IFormValues, IFormWatch, IFormRegister } from 'routes/Main/type';
import CPRHeader from './CPRHeader';

const radioId = ['face', 'activity', 'respiratory', 'vocalization'];
const contentLabel = [
  {
    id: '임상\n관찰',
    ko: [
      '혈압(mmHg)',
      '심박수 (회/분당)',
      '호흡수 (회/분당)',
      '체온 (°C)',
      '산소포화도(%)',
      '의식상태',
      '동공크기',
      '동공반사',
      '심장리듬(VF, VT, PEA,\n Asystole, ROSC 등)',
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
    id: '처치',
    ko: ['흉부압박', '인공호흡', '제세동'],
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
    id: ' 처치:\n기관\n삽관',
    ko: ['ID', 'Depth', 'Balloon', '시술자'],
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
    id: '투약',
    ko: [' ', ' ', ' ', ' ', ' ', ' ', ' '],
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
    id: '검사',
    ko: ['ABGA', 'Chest X-ray', 'lab'],
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
  timeStart: number;
}

const CPRContents = (props: Props) => {
  const { palette } = useTheme();

  const { disabled, setValue, getValues, register, timeStart } = props;

  const [sumValue, setSumValue] = useState(0);

  const timeCount = new Array(11).fill(timeStart).map((num, i) => num + i);

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
      {timeStart === 0 && <CPRHeader disabled={disabled} register={register} />}
      <Box
        sx={{
          width: '88%',
          marginTop: '30px',
          marginRight: 'auto',
          marginLeft: 'auto',
        }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <CPRStyledTableCellHead
                colSpan={1}
                align="center"
              ></CPRStyledTableCellHead>
              <CPRStyledTableCellHead colSpan={1} align="center">
                시간경과(분)
              </CPRStyledTableCellHead>

              {timeCount.map(min => (
                <CPRStyledTableCellHeadNumbering
                  colSpan={1}
                  align="right"
                  sx={{ paddingRight: '5px' }}
                >
                  {min}
                </CPRStyledTableCellHeadNumbering>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {contentLabel.map(
              (content: { id: string; ko: string[]; desc: string[] }, i) => {
                return (
                  <TableRow>
                    <CPRStyledTableCellFirst
                      align="center"
                      sx={{
                        minWidth: '30px',
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
                                  minWidth: '60px',
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
                                width: '140px',
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
                              content.ko[i] === 'ABGA' ||
                              content.ko[i] === 'Chest X-ray' ||
                              content.ko[i] === 'lab'
                            ) {
                              return (
                                <TableRow
                                  sx={{
                                    lineHeight: content.ko[i].includes(
                                      '심장리듬'
                                    )
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
                                      minWidth: '90px',
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
                                    minWidth: '60px',
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
        {/* <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'flex-end'}
          sx={{ marginTop: '20px' }}
        >
          <Typography
            gutterBottom
            minWidth={115}
            fontWeight={700}
            variant="subtitle1"
          >
            합계: {sumValue}점
          </Typography>
          <Typography
            minWidth={115}
            variant="caption"
            sx={{ color: `${palette.primary.main}` }}
          >
            {scoreLabel.map(({ score, label }) => (
              <Typography variant="inherit">
                <Box component={'strong'} mr={0.5}>
                  {score}점:
                </Box>
                {label}
              </Typography>
            ))}
          </Typography>
        </Box> */}
      </Box>
    </>
  );
};

export default CPRContents;
