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

const radioId7 = ['no24', 'no25', 'no26'];

const 영역7 = [
  {
    id: 1,
    ko: '24. 체위변경',
    info: ['간호사가 직접 시행한 경우로 환자가 완전 도움이 필요한 경우 해당'],
    desc: ['해당 없음', '2점: 3~5회', '3점: 6회 이상'],
  },
  {
    id: 2,
    ko: '25. 환자 이동',
    info: [
      '침상에서 의자나 스트레처로 이동 또는 의자나 스트레처에서 침상으로 이동한 경우가 각각 1회에 해당',
    ],
    desc: ['해당 없음', '1점: 2~3회', '2점: 4회 이상'],
  },
  {
    id: 3,
    ko: '26. 침상에서 일어나 걷도록 도와주기',
    info: ['간호사가 직접 시행한 경우 해당'],
    desc: ['해당 없음', '2점: 3회 이상'],
  },
];

const radioId8 = ['no27', 'no28'];

const 영역8 = [
  {
    id: 1,
    ko: '27. 혈당검사',
    info: [''],
    desc: ['해당 없음', '1점: 4회 이하', '2점: 5회 이상'],
  },
  {
    id: 2,
    ko: '28. 추가 혈액 검사',
    info: [
      '검사 개수가 아니고 혈액 검사를 위한 환자 방문 횟수임',
      '정규 혈액 검사만 시행한 경우엔 해당안됨',
    ],
    desc: ['해당 없음', '2점: 2회 이상'],
  },
];

interface Props extends IFormValues, IFormWatch {
  disabled?: boolean;
  sum7: number;
  setSum7: (sum7: number) => void;

  sum8: number;
  setSum8: (sum8: number) => void;
}
const KPCSContents4 = (props: Props) => {
  const { palette } = useTheme();

  const { disabled, setValue, getValues, setSum7, setSum8 } = props;

  const calculateSumValue7 = () => {
    setSum7(
      radioId7.reduce((acc, cur) => {
        if (Number(getValues(cur)) > 0) {
          if (cur === 'no24') {
            const value = Number(getValues(cur)) + 1;
            return value ? acc + value : acc;
          } else if (cur === 'no26') {
            const value = Number(getValues(cur)) + 1;
            return value ? acc + value : acc;
          } else {
            const value = Number(getValues(cur));
            return value ? acc + value : acc;
          }
        } else {
          const value = Number(getValues(cur));
          return value ? acc + value : acc;
        }
      }, 0)
    );
  };

  const handleChange7 = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    calculateSumValue7();
  };

  const calculateSumValue8 = () => {
    setSum8(
      radioId8.reduce((acc, cur) => {
        if (cur === 'no28' && Number(getValues(cur)) > 0) {
          const value = 2;
          return value ? acc + value : acc;
        } else {
          const value = Number(getValues(cur));
          return value ? acc + value : acc;
        }
      }, 0)
    );
  };

  const handleChange8 = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    calculateSumValue8();
  };

  useEffect(() => {
    calculateSumValue7();
    calculateSumValue8();
  }, []);

  return (
    <>
      <SectionTitle title="영역 : 운동" />
      <Box sx={{ width: '98%', margin: '20px' }}>
        <TableContainer sx={{ marginTop: '20px', marginBottom: '30px' }}>
          <TableBody>
            {영역7.map(
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
                      name={radioId7[content.id - 1]}
                      defaultValue={Number(getValues(radioId7[content.id - 1]))}
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
                                  name={radioId7[content.id - 1]}
                                  value={i}
                                  onChange={handleChange7}
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

        <SectionTitle title="영역 : 검사" />
        <TableContainer sx={{ marginTop: '40px', marginBottom: '-30px' }}>
          <TableBody>
            {영역8.map(
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
                      name={radioId8[content.id - 1]}
                      defaultValue={Number(getValues(radioId8[content.id - 1]))}
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
                                  name={radioId8[content.id - 1]}
                                  value={i}
                                  onChange={handleChange8}
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

export default KPCSICUContents4;
