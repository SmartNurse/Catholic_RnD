import { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  RadioGroup,
  Radio,
  TableBody,
  TableRow,
  useTheme,
  TableContainer,
} from '@mui/material';
import {
  StyledTableCellTwo,
  StyledTableCellWithoutLeftTwo,
  StyledTableCellWithoutLeftRightTwo,
} from 'routes/Main/style';
import SectionTitle from '../../components/SectionTitle';

import { IFormValues, IFormWatch } from 'routes/Main/type';

const radioId = ['no01', 'no02'];

const 영역1 = [
  {
    id: 1,
    ko: '1. V/S check (manual TPR, BP)',
    info: [
      '구강체온, 맥박, 호흡수를 직접 측정, 혈압을 cuff를 이용하여 직접 측정하고 푸는 시간, 기록시간 포함. 모니터를 이용한 경우는 감시 및 측정 항목임',
    ],
    desc: ['해당 없음', '4점 : q 2h or 12회', '8점 : q 1h or 24회'],
  },
  {
    id: 2,
    ko: '2. 직장/액와/tympany temp 4회 이상',
    info: ['액와나 직장, 귀에 온도를 측정하고 기록함'],
    desc: ['해당 없음', '2점'],
  },
  {
    id: 3,
    ko: '3. Femoral pulse, Pedal pulse',
    info: [
      'check q 4hr 이상',
      '측정빈도가 증가하더라도 점수는 증가하지 않는다, 두가지를 재더라도 동일함',
    ],
    desc: ['해당 없음', '2점'],
  },
  {
    id: 4,
    ko: '4. 수술/검사/분만/출생 직후 신생아  V/S',
    info: ["q 15' ×4, q 30' ×4, q 1 hr ×4, then 4 hr 측정시 적용"],
    desc: ['해당 없음', '4점'],
  },
];

const radioId1 = ['no03', 'no04', 'no05', 'no06', 'no07', 'no08'];

const 영역2 = [
  {
    id: 1,
    ko: '5. I/O check',
    info: [
      '음수량, 배설량 모두 측정 시, 배설량은 소변과 기타 배액량을 재거나 무게측정, 기저귀, 침대린넨(삭제) 교환이 포함된다(한 가지만 측정한 경우에는 주지 않는다)',
    ],
    desc: [
      '해당 없음',
      '2점: q 8h',
      '3점: q 6h',
      '4점: q 4h',
      '8점: q 2h',
      '16점: q 1h',
    ],
  },
  {
    id: 2,
    ko: '6. 순환확인',
    info: [
      '순환확인 (사지부종, 무감각, 저린감 확인, 피부온도/ 색깔, 사지 움직임 사정)',
    ],
    desc: ['해당 없음', '2점'],
  },
  {
    id: 3,
    ko: '7. 의식신경계 사정',
    info: [
      '동공반사, 의식 확인, 지남력 확인, 감각(통증, 진동, 가벼운 터치, 정확한 입체감인식평가), 운동 및 감각검사(감각과 근력 사정)',
    ],
    desc: [
      '해당 없음',
      '3점: q 4hr or 6회',
      '6점: q 2hr or 12회',
      '12점: q 1hr or 24회',
    ],
  },
  {
    id: 4,
    ko: '8. Manual CVP check reading',
    info: ['swan-ganz catheter로 측정하는 것은 제외  '],
    desc: ['해당 없음', '2점: q 2hr or 12회', '4점: q 1hr or 24회'],
  },
  {
    id: 5,
    ko: '9. ICP check or monitor reading',
    info: ['manual or monitoring 모두 동일함'],
    desc: ['해당 없음', '2점: q 2hr or 12회', '4점: q 1hr or 24회'],
  },
  {
    id: 6,
    ko: '10. Cardiac/apnea/temp/NIBP monitor',
    info: [
      '하나 이상 측정했을 때 6점이며 가산하지 않는다. 모니터 조정 또는 leads연결, alarm  resets 포함한다.',
    ],
    desc: ['해당 없음', '6점'],
  },
  {
    id: 7,
    ko: '11. SpO2 monitor 4회이상',
    info: [
      '6시간 마다 probe 위치 이동 및 피부확인, 피부 간호하는 시간. (자주  측정해도 추가점수 없음)',
    ],
    desc: ['해당 없음', '6점'],
  },
  {
    id: 8,
    ko: '12. A-line monitor set up',
    info: ['주입시 준비, 각 line의 set up, transducer 교체를 포함한다.'],
    desc: ['해당 없음', '4점'],
  },
  {
    id: 9,
    ko: '13. ICP monitor set up',
    info: ['주입시 준비, 각 line의 set up, transducer 교체를 포함한다.'],
    desc: ['해당 없음', '4점'],
  },
  {
    id: 10,
    ko: '14. Swan-Ganz monitor set up',
    info: ['주입시 준비, 각 line의 set up, transducer 교체를 포함한다.'],
    desc: ['해당 없음', '4점'],
  },
  {
    id: 11,
    ko: '15. A-line monitor reading',
    info: [
      '기록이 있어야 한다. 수은주 혈압계로 수치를 확인하는 행위를 포함한다.',
    ],
    desc: ['해당 없음', '2점: q 2h', '4점: q 1h'],
  },
  {
    id: 12,
    ko: '16. PAP/PCWP/RAP reading',
    info: ['기록이 있어야 한다.'],
    desc: ['해당 없음', '4점: q 2h', '8점: q 1h'],
  },
  {
    id: 13,
    ko: '17. Cardiac output tid',
    info: ['간호사가 직접 측정했거나 측정을 도울 때'],
    desc: ['해당 없음', '2점'],
  },
];

const scoreLabel = [
  { score: '15', label: 'ALERT' },
  { score: '13~14', label: 'DROWSY' },
  { score: '8~12', label: 'STUPOR' },
  { score: '4~7', label: 'SEMI-COMA' },
  { score: '3', label: 'COMA' },
];

interface Props extends IFormValues, IFormWatch {
  disabled?: boolean;
  sum1: number;
  setSum1: (sum1: number) => void;

  sum2: number;
  setSum2: (sum2: number) => void;
}
const KPCSICUContents = (props: Props) => {
  const { palette } = useTheme();

  const { disabled, setValue, getValues, setSum1, setSum2 } = props;

  const calculateSumValue1 = () => {
    setSum1(
      radioId.reduce((acc, cur) => {
        const value = Number(getValues(cur));
        return value ? acc + value : acc;
      }, 0)
    );
  };

  const handleChange1 = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    calculateSumValue1();
  };

  const calculateSumValue2 = () => {
    setSum2(
      radioId1.reduce((acc, cur) => {
        if (Number(getValues(cur)) === 1) {
          if (cur === 'no05') {
            const value = 2;
            return value ? acc + value : acc;
          } else if (cur === 'no06') {
            const value = 3;
            return value ? acc + value : acc;
          } else {
            const value = Number(getValues(cur));
            return value ? acc + value : acc;
          }
        }
        const value = Number(getValues(cur));
        return value ? acc + value : acc;
      }, 0)
    );
  };

  const handleChange2 = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    calculateSumValue2();
  };

  useEffect(() => {
    calculateSumValue1();
    calculateSumValue2();
  }, []);

  return (
    <>
      <SectionTitle title="영역 : 활력징후 측정" />
      <Box sx={{ width: '98%', margin: '20px' }}>
        <TableContainer sx={{ marginTop: '20px', marginBottom: '30px' }}>
          <TableBody>
            {영역1.map(
              (
                content: {
                  id: number;
                  ko: string;
                  info: string[];
                  desc: string[];
                },
                i
              ) => (
                <TableRow>
                  <StyledTableCellTwo
                    sx={{
                      padding: '16px',
                      width: '300px',
                      whiteSpace: 'pre-wrap',
                      verticalAlign: 'top',
                    }}
                  >
                    {content.ko}
                  </StyledTableCellTwo>
                  <StyledTableCellWithoutLeftTwo>
                    <RadioGroup
                      sx={{
                        paddingTop: content.info.length > 1 ? '45px' : '28px',
                      }}
                      name={radioId[content.id - 1]}
                      defaultValue={Number(getValues(radioId[content.id - 1]))}
                    >
                      {content.desc.map((point, i) => {
                        if (point.includes('no')) {
                          return (
                            <TableRow
                              sx={{
                                lineHeight: '43px',
                                textAlign: 'center',
                                height: '43px',
                              }}
                            ></TableRow>
                          );
                        } else
                          return (
                            <TableRow
                              sx={{
                                lineHeight: '43px',
                                textAlign: 'center',
                              }}
                            >
                              <Box>
                                <Radio
                                  disabled={disabled}
                                  name={radioId[content.id - 1]}
                                  value={i}
                                  onChange={handleChange1}
                                />
                              </Box>
                            </TableRow>
                          );
                      })}
                    </RadioGroup>
                  </StyledTableCellWithoutLeftTwo>
                  <StyledTableCellWithoutLeftRightTwo>
                    <Box>
                      {content.info.includes('') ? (
                        <TableRow
                          sx={{
                            height: '21px',
                          }}
                        >
                          <Box sx={{ minWidth: '500px' }}> </Box>
                        </TableRow>
                      ) : content.info.length > 1 ? (
                        content.info.map((item, i) => {
                          return (
                            <TableRow
                              sx={{
                                lineHeight: '17px',
                                height: '4px',
                              }}
                            >
                              <Box
                                sx={{
                                  minWidth: '65vw',
                                  marginLeft: '-28px',
                                }}
                              >
                                ・ {item}
                              </Box>
                            </TableRow>
                          );
                        })
                      ) : (
                        content.info.map((item, i) => {
                          return (
                            <TableRow
                              sx={{
                                height: '8.5px',
                              }}
                            >
                              <Box
                                sx={{
                                  minWidth: '65vw',
                                  marginLeft: '-28px',
                                }}
                              >
                                ・ {item}
                              </Box>
                            </TableRow>
                          );
                        })
                      )}
                      {content.desc.map((v, i) => (
                        <TableRow
                          sx={{
                            lineHeight: '42px',
                          }}
                        >
                          <Box sx={{ minWidth: '500px' }}>{v}</Box>
                        </TableRow>
                      ))}
                    </Box>
                  </StyledTableCellWithoutLeftRightTwo>
                </TableRow>
              )
            )}
          </TableBody>
        </TableContainer>

        <SectionTitle title="영역 : 감시 및 측정" />
        <TableContainer sx={{ marginTop: '40px', marginBottom: '-30px' }}>
          <TableBody>
            {영역2.map(
              (
                content: {
                  id: number;
                  ko: string;
                  info: string[];
                  desc: string[];
                },
                i
              ) => (
                <TableRow>
                  <StyledTableCellTwo
                    sx={{
                      padding: '16px',
                      width: '300px',
                      whiteSpace: 'pre-wrap',
                      verticalAlign: 'top',
                    }}
                  >
                    {content.ko}
                  </StyledTableCellTwo>
                  <StyledTableCellWithoutLeftTwo>
                    <RadioGroup
                      sx={{
                        paddingTop: content.info.length > 1 ? '55px' : '28px',
                      }}
                      name={radioId1[content.id - 1]}
                      defaultValue={Number(getValues(radioId1[content.id - 1]))}
                    >
                      {content.desc.map((point, i) => {
                        if (point.includes('no')) {
                          return (
                            <TableRow
                              sx={{
                                lineHeight: '43px',
                                textAlign: 'center',
                                height: '48px',
                              }}
                            ></TableRow>
                          );
                        } else
                          return (
                            <TableRow
                              sx={{
                                lineHeight: '43px',
                                textAlign: 'center',
                              }}
                            >
                              <Box>
                                <Radio
                                  disabled={disabled}
                                  name={radioId1[content.id - 1]}
                                  value={i}
                                  onChange={handleChange2}
                                />
                              </Box>
                            </TableRow>
                          );
                      })}
                    </RadioGroup>
                  </StyledTableCellWithoutLeftTwo>
                  <StyledTableCellWithoutLeftRightTwo>
                    <Box>
                      {content.info.includes('') ? (
                        <TableRow
                          sx={{
                            height: '16px',
                          }}
                        >
                          <Box sx={{ minWidth: '500px' }}> </Box>
                        </TableRow>
                      ) : content.info.length > 1 ? (
                        content.info.map((item, i) => {
                          return (
                            <TableRow
                              sx={{
                                lineHeight: '23px',
                                height: '4px',
                              }}
                            >
                              <Box
                                sx={{ minWidth: '65vw', marginLeft: '-28px' }}
                              >
                                ・ {item}
                              </Box>
                            </TableRow>
                          );
                        })
                      ) : (
                        content.info.map((item, i) => {
                          return (
                            <TableRow
                              sx={{
                                height: '8.5px',
                              }}
                            >
                              <Box
                                sx={{ minWidth: '65vw', marginLeft: '-28px' }}
                              >
                                ・ {item}
                              </Box>
                            </TableRow>
                          );
                        })
                      )}
                      {content.desc.map((v, i) => (
                        <TableRow
                          sx={{
                            lineHeight: '42px',
                          }}
                        >
                          <Box sx={{ minWidth: '500px' }}>{v}</Box>
                        </TableRow>
                      ))}
                    </Box>
                  </StyledTableCellWithoutLeftRightTwo>
                </TableRow>
              )
            )}
          </TableBody>
        </TableContainer>
      </Box>
    </>
  );
};

export default KPCSICUContents;
