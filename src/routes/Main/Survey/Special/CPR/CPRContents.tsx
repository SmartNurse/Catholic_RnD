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
import { initialCPR } from '../../initialStates';
import { TCPRDefaultValues } from '../../type';
import { IUpdateCPR } from 'apis/survey/type';

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
    idForApi: 'clinical_observation',
    koForApi: [
      'bp',
      'hr',
      'rr',
      'bt',
      'spo2',
      'consciousness',
      'pupil_size',
      'pupil_reflex',
      'cardio_ryt',
    ],
    desc: Array(11).fill(' '),
  },
  {
    id: '처치',
    ko: ['흉부압박', '인공호흡', '제세동'],
    idForApi: 'treatment',
    koForApi: ['chest_compression', 'artificial_ventilation', 'aed'],
    desc: Array(11).fill(' '),
  },
  {
    id: ' 처치:\n기관\n삽관',
    ko: ['ID', 'Depth', 'Balloon', '시술자'],
    idForApi: 'intubation',
    koForApi: ['id', 'depth', 'balloon', 'times', 'practitioner'],
    desc: Array(11).fill(' '),
  },
  {
    id: '투약',
    ko: [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    idForApi: 'medication',
    koForApi: ['no', 'no', 'no', 'no', 'no', 'no', 'no'],
    desc: Array(11).fill(' '),
  },
  {
    id: '검사',
    ko: ['ABGA', 'Chest X-ray', 'lab'],
    idForApi: 'test',
    koForApi: ['abga', 'chest', 'lab'],
    desc: Array(11).fill(' '),
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
  const [cprRecord, setCprRecord] = useState(initialCPR);

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

  useEffect(() => {
    if (getValues('update_at')) {
      setCprRecord(prev => ({ ...prev, update_at: getValues('update_at') }));
    } else {
      setValue('update_at', cprRecord.update_at);
    }
    if (getValues('find_date')) {
      setCprRecord(prev => ({ ...prev, find_date: getValues('find_date') }));
    } else {
      setValue('find_date', cprRecord.find_date);
    }
    if (getValues('find_time')) {
      setCprRecord(prev => ({ ...prev, find_time: getValues('find_time') }));
    } else {
      setValue('find_time', cprRecord.find_time);
    }
    if (getValues('terminate_reason')) {
      setCprRecord(prev => ({
        ...prev,
        terminate_reason: getValues('terminate_reason'),
      }));
    } else {
      setValue('terminate_reason', cprRecord.terminate_reason);
    }
    if (getValues('clinical_observation')) {
      setCprRecord(prev => ({
        ...prev,
        clinical_observation: getValues('clinical_observation'),
      }));
    } else {
      setValue('clinical_observation', cprRecord.clinical_observation);
    }
    if (getValues('treatment')) {
      setCprRecord(prev => ({ ...prev, treatment: getValues('treatment') }));
    } else {
      setValue('treatment', cprRecord.treatment);
    }
    if (getValues('intubation')) {
      setCprRecord(prev => ({
        ...prev,
        intubation: getValues('intubation'),
      }));
    } else {
      setValue('intubation', cprRecord.intubation);
    }
    if (getValues('medication')) {
      setCprRecord(prev => ({
        ...prev,
        medication: getValues('medication'),
      }));
    } else {
      setValue('medication', cprRecord.medication);
    }
    if (getValues('test')) {
      setCprRecord(prev => ({ ...prev, test: getValues('test') }));
    } else {
      setValue('test', cprRecord.test);
    }
  }, []);

  useEffect(() => {
    console.log(cprRecord);
  }, [cprRecord]);

  const headerProps = {
    disabled,
    register,
    getValues,
    setValue,
    cprRecord,
    setCprRecord,
  };

  return (
    <>
      {timeStart === 0 && <CPRHeader {...headerProps} />}
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
                  key={min}
                >
                  {min}
                </CPRStyledTableCellHeadNumbering>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {contentLabel.map(
              (
                content: {
                  id: string;
                  ko: string[];
                  desc: string[];
                  koForApi: string[];
                  idForApi: string;
                },
                i
              ) => {
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
                      {content.ko.map((el, i) => {
                        if (el === ' ') {
                          return (
                            <TableRow
                              sx={{
                                lineHeight: el.includes('심장리듬')
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
                                  {...register(`medication.no00_${i + 1}`)}
                                  onChange={e =>
                                    setCprRecord(prev => ({
                                      ...prev,
                                      [`medication.no00_${i + 1}`]:
                                        e.target.value,
                                    }))
                                  }
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

                    {content.desc.map((_, descIdx) => {
                      return (
                        <CPRStyledTableCellBodyNumbering>
                          {content.ko.map((_, koIdx) => {
                            if (
                              content.ko[koIdx] === 'ABGA' ||
                              content.ko[koIdx] === 'Chest X-ray' ||
                              content.ko[koIdx] === 'lab'
                            ) {
                              return (
                                <TableRow
                                  sx={{
                                    lineHeight: content.ko[koIdx].includes(
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
                                      {...register(
                                        `${content.idForApi}.${
                                          content.koForApi[koIdx]
                                        }${descIdx + timeStart}`
                                      )}
                                      checked={
                                        // @ts-ignore
                                        cprRecord.test[
                                          `${content.koForApi[koIdx]}${
                                            descIdx + timeStart
                                          }`
                                        ] === true
                                      }
                                      onChange={(_, checked) => {
                                        setValue(
                                          `${content.idForApi}.${
                                            content.koForApi[koIdx]
                                          }${descIdx + timeStart}`,
                                          checked
                                        );
                                        setCprRecord(prev => {
                                          const key = `${
                                            content.koForApi[koIdx]
                                          }${descIdx + timeStart}`;
                                          const idForApi =
                                            content.idForApi as keyof typeof prev;
                                          return {
                                            ...prev,
                                            [idForApi]: {
                                              ...(prev[idForApi] as object),
                                              [key]: checked,
                                            },
                                          };
                                        });
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
                                    {...register(
                                      content.idForApi === 'medication'
                                        ? `medication.no${
                                            descIdx + timeStart
                                          }_${koIdx + 1}`
                                        : `${content.idForApi}.${
                                            content.koForApi[koIdx]
                                          }${descIdx + timeStart}`
                                    )}
                                    value={
                                      content.idForApi === 'medication'
                                        ? // @ts-ignore
                                          cprRecord.medication[
                                            `no${descIdx + timeStart}_${
                                              koIdx + 1
                                            }`
                                          ]
                                        : // @ts-ignore
                                          cprRecord[content.idForApi][
                                            `${content.koForApi[koIdx]}${
                                              descIdx + timeStart
                                            }`
                                          ]
                                    }
                                    onChange={e => {
                                      if (content.idForApi === 'medication') {
                                        const key = `no${descIdx}_${koIdx + 1}`;
                                        setCprRecord(prev => {
                                          return {
                                            ...prev,
                                            medication: {
                                              // @ts-ignore
                                              ...prev[cprRecord.medication],
                                              [key]: e.target.value,
                                            },
                                          };
                                        });
                                      } else {
                                        const key = `${
                                          content.koForApi[koIdx]
                                        }${descIdx + timeStart}`;
                                        setCprRecord(prev => {
                                          const idForApi =
                                            content.idForApi as keyof typeof prev;
                                          return {
                                            ...prev,
                                            [idForApi]: {
                                              ...(prev[idForApi] as object),
                                              [key]: e.target.value,
                                            },
                                          };
                                        });
                                      }
                                    }}
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
