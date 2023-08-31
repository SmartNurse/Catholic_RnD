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
    ko: '1. V/S check',
    info: [
      '4가지 항목 (혈압, 맥박, 호흡수, 체온) 모두 측정',
      '수혈시 측정하는 V/S는 제외',
    ],
    desc: [
      '해당 없음',
      '1점 : 3회 이하',
      '2점 : 4~6회',
      '3점: 7~9회',
      '4점: 10회 이상',
    ],
  },
  {
    id: 2,
    ko: '2. 대퇴동맥/족부동맥 박동 확인',
    info: [''],
    desc: ['해당 없음', '1점 : 4회 이상'],
  },
];

const radioId1 = ['no03', 'no04', 'no05', 'no06', 'no07', 'no08'];

const 영역2 = [
  {
    id: 1,
    ko: '3. I/O check',
    info: ['섭취량, 배설량을 모두 측정시 해당'],
    desc: [
      '해당 없음',
      '1점: 12시간 마다',
      '2점: 8시간 마다',
      '3점: 6시간 마다',
    ],
  },
  {
    id: 2,
    ko: '4. 순환/감각/운동 check',
    info: ['억제대 적용 시 측정하는 경우는 제외'],
    desc: ['해당 없음', '1점: 4회 이상'],
  },
  {
    id: 3,
    ko: '5. 동공/의식/지남력 check',
    info: ['동공, 의식, 지남력 세가지 모두 측정하여 기록'],
    desc: ['해당 없음', '2점: 4회 이상'],
  },
  {
    id: 4,
    ko: '6. 계속적인 심전도 감시',
    info: ['근무조당 1회 이상 심전도 판독 내용을 기록한 경우 해당'],
    desc: ['해당 없음', '3점'],
  },
  {
    id: 5,
    ko: '7. 산소포화도',
    info: [
      '산소포화도 측정 후 기록한 경우만 해당',
      '계속적인 산소포화도 감시는 6회 이상에 포함',
    ],
    desc: ['해당 없음', '1점: 3~5회', '2점: 6회 이상'],
  },
  {
    id: 6,
    ko: '8. 통증사정',
    info: [''],
    desc: ['해당 없음', '1점: 3회 이상 (도구 사용)'],
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
const KPCSContents = (props: Props) => {
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
                        paddingTop: content.info.length > 1 ? '35px' : '18px',
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
                                lineHeight: '17px',
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

        <SectionTitle title="영역 : 감시" />
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
                        paddingTop: content.info.length > 1 ? '35px' : '18px',
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
                                lineHeight: '17px',
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

export default KPCSContents;
