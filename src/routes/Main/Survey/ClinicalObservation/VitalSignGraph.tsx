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
    desc: [
      'vital_sign.date.date',
      'vital_sign.time.time',
      'vital_sign.sbp.sbp',
      'vital_sign.dbp.dbp',
      'vital_sign.pr.pr',
      'vital_sign.rr.rr',
      'vital_sign.bt.bt',
      'vital_sign.spo2.spo2',
      'vital_sign.o2.o2',
      'vital_sign.etc.etc',
    ],
  },
  {
    id: '키 / 체중',
    ko: ['키 (cm)', '체중 (kg)'],
    desc: [
      'weight_height.weight.weight_height0',
      'weight_height.weight_height1',
      'weight_height.weight_height2',
      'weight_height.weight_height3',
      'weight_height.weight_height4',
      'weight_height.weight_height5',
      'weight_height.weight_height6',
      'weight_height.weight_height7',
      'weight_height.weight_height8',
      'weight_height.weight_height9',
    ],
  },
  {
    id: '섭취량',
    ko: ['경구', '정맥 주입', '혈액 및 기타', '총 섭취량'],
    desc: [
      'intake.intake0',
      'intake.intake1',
      'intake.intake2',
      'intake.intake3',
      'intake.intake4',
      'intake.intake5',
      'intake.intake6',
      'intake.intake7',
      'intake.intake8',
      'intake.intake9',
    ],
  },
  {
    id: '배설량',
    ko: ['소변', '구토', '대변', '배액 및 기타', '총 배설량'],
    desc: [
      'output.output0',
      'output.output1',
      'output.output2',
      'output.output3',
      'output.output4',
      'output.output5',
      'output.output6',
      'output.output7',
      'output.output8',
      'output.output9',
    ],
  },
  {
    id: '체위변경',
    ko: ['수행 여부', 'Position', '피부 상태'],
    desc: [
      'position_change.position_change0',
      'position_change.position_change1',
      'position_change.position_change2',
      'position_change.position_change3',
      'position_change.position_change4',
      'position_change.position_change5',
      'position_change.position_change6',
      'position_change.position_change7',
      'position_change.position_change8',
      'position_change.position_change9',
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
      'restraint.restraint0',
      'restraint.restraint1',
      'restraint.restraint2',
      'restraint.restraint3',
      'restraint.restraint4',
      'restraint.restraint5',
      'restraint.restraint6',
      'restraint.restraint7',
      'restraint.restraint8',
      'restraint.restraint9',
    ],
  },
  {
    id: 'IPC',
    ko: ['적용 일시'],
    desc: [
      'ipc.ipc0',
      'ipc.ipc1',
      'ipc.ipc2',
      'ipc.ipc3',
      'ipc.ipc4',
      'ipc.ipc5',
      'ipc.ipc6',
      'ipc.ipc7',
      'ipc.ipc8',
      'ipc.ipc9',
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
      'vent.vent0',
      'vent.vent1',
      'vent.vent2',
      'vent.vent3',
      'vent.vent4',
      'vent.vent5',
      'vent.vent6',
      'vent.vent7',
      'vent.vent8',
      'vent.vent9',
    ],
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
    desc: [
      'crrt.crrt0',
      'crrt.crrt1',
      'crrt.crrt2',
      'crrt.crrt3',
      'crrt.crrt4',
      'crrt.crrt5',
      'crrt.crrt6',
      'crrt.crrt7',
      'crrt.crrt8',
      'crrt.crrt9',
    ],
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
                      console.log('ko', content.ko[i]);
                      return (
                        <CPRStyledTableCellBodyNumbering>
                          {content.ko.map((_, i) => {
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
                                    value={`${v}${i}`}
                                    disabled={disabled}
                                    style={{
                                      border: 'none',
                                      width: '100%',
                                      height: '44px',
                                    }}
                                    {...register(`${v}${i}`)}
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
