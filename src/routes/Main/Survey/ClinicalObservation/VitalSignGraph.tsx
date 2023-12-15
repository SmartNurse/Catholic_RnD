import Form from 'components/Form';

import { useEffect, useState, Fragment } from 'react';
import { Box, Table, TableBody, TableRow, useTheme } from '@mui/material';
import {
  CPRStyledTableCell,
  CPRStyledTableCellFirst,
  CPRStyledTableCellBodyNumbering,
} from 'routes/Main/style';
import SectionTitle from '../components/SectionTitle';

import { IFormValues, IFormWatch, IFormRegister } from 'routes/Main/type';

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
    desc: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  },
  {
    id: '키 / 체중',
    ko: ['키 (cm)', '체중 (kg)'],
    desc: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  },
  {
    id: '섭취량',
    ko: ['경구', '정맥 주입', '혈액 및 기타', '총 섭취량'],
    desc: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  },
  {
    id: '배설량',
    ko: ['소변', '구토', '대변', '배액 및 기타', '총 배설량'],
    desc: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  },
  {
    id: '체위변경',
    ko: ['수행 여부', 'Position', '피부 상태'],
    desc: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
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
    desc: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  },
  {
    id: 'IPC',
    ko: ['적용 일시'],
    desc: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
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
    desc: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  },
  {
    id: 'CRRT',
    ko: [
      'Mode',
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
    desc: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  },
];

interface Props extends IFormValues, IFormWatch, IFormRegister {
  disabled?: boolean;
}

const VitalSignGraph = (props: Props) => {
  const { disabled, setValue, getValues, register } = props;

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
                          {content.ko.map((item, i) => {
                            if (content.id === 'V/S') {
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
                                      {...register(
                                        `vital_sign.vital0${v}.no${v}${i}`
                                      )}
                                    />
                                  </Box>
                                </TableRow>
                              );
                            } else if (content.id === '키 / 체중') {
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
                                      {...register(
                                        `weight_height.weight_height0${v}.no${v}${i}`
                                      )}
                                    />
                                  </Box>
                                </TableRow>
                              );
                            } else if (content.id === '섭취량') {
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
                                      {...register(
                                        `intake.intake0${v}.no${v}${i}`
                                      )}
                                    />
                                  </Box>
                                </TableRow>
                              );
                            } else if (content.id === '배설량') {
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
                                      {...register(
                                        `output.output0${v}.no${v}${i}`
                                      )}
                                    />
                                  </Box>
                                </TableRow>
                              );
                            } else if (content.id === '체위변경') {
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
                                      {...register(
                                        `position_change.position_change0${v}.no${v}${i}`
                                      )}
                                    />
                                  </Box>
                                </TableRow>
                              );
                            } else if (content.id === '신체 보호대') {
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
                                      {...register(
                                        `restraint.restraint0${v}.no${v}${i}`
                                      )}
                                    />
                                  </Box>
                                </TableRow>
                              );
                            } else if (content.id === 'IPC') {
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
                                      {...register(`ipc.ipc0${v}`)}
                                    />
                                  </Box>
                                </TableRow>
                              );
                            } else if (content.id === 'Vent') {
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
                                      {...register(`vent.vent0${v}.no${v}${i}`)}
                                    />
                                  </Box>
                                </TableRow>
                              );
                            } else if (content.id === 'CRRT') {
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
                                      {...register(`crrt.crrt0${v}.no${v}${i}`)}
                                    />
                                  </Box>
                                </TableRow>
                              );
                            }
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
