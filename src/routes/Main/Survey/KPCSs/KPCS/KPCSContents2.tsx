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

const radioId3 = ['no09', 'no10', 'no11', 'no12', 'no13'];

const 영역3 = [
  {
    id: 1,
    ko: '9. 산소 투여',
    info: [''],
    desc: ['해당 없음', '2점'],
  },
  {
    id: 2,
    ko: `10. 심호흡 교육 및 \n         incentive spirometry 사용 교육`,
    info: [''],
    desc: ['해당 없음', '1점'],
  },
  {
    id: 3,
    ko: '11. 흉부물리요법',
    info: ['타진, Vibrator 실시 후 기록한 경우'],
    desc: ['해당 없음', '1점: 3~5회', '2점: 6회 이상'],
  },
  {
    id: 4,
    ko: '12. 기관내 흡인 간호',
    info: ['T-cannula, E-tube를 통한 흡인 간호 시 해당'],
    desc: ['해당 없음', '2점: 3~5회', '3점: 6회 이상'],
  },
  {
    id: 5,
    ko: '13. Tracheostomy care',
    info: [
      'T-cannula 교환 또는 Dressing, 관찰 기록 등의 Tracheostomy care를 3회 이상 시행한 경우',
    ],
    desc: ['해당 없음', '2점: 3회 이상'],
  },
];

const radioId4 = ['no14', 'no15', 'no16', 'no17', 'no18'];

const 영역4 = [
  {
    id: 1,
    ko: '14. 침상목욕 (20분 소요)',
    info: ['간호사가 직접 시행한 경우 해당'],
    desc: ['해당 없음', '4점'],
  },
  {
    id: 2,
    ko: '15. 침상세발 (10분 소요)',
    info: [
      '침상에서 제공하는 물을 이용한 세발로 간호사가 직접 시행한 경우 해당',
    ],
    desc: ['해당 없음', '2점'],
  },
  {
    id: 3,
    ko: '16. 구강 간호',
    info: [''],
    desc: ['해당 없음', '1점'],
  },
  {
    id: 4,
    ko: '17. 회음부 간호',
    info: [''],
    desc: ['해당 없음', '1점'],
  },
  {
    id: 5,
    ko: '18. Linen 또는 환의 교환',
    info: [
      '산소포화도 측정 후 기록한 경우만 해당',
      '계속적인 산소포화도 감시는 6회 이상에 포함',
    ],
    desc: ['해당 없음', '1점: 1~2회', '2점: 3회 이상'],
  },
];

interface Props extends IFormValues, IFormWatch {
  disabled?: boolean;
  sum3: number;
  setSum3: (sum3: number) => void;

  sum4: number;
  setSum4: (sum4: number) => void;
}
const KPCSContents2 = (props: Props) => {
  const { palette } = useTheme();

  const { disabled, setValue, getValues, setSum3, setSum4 } = props;

  const calculateSumValue3 = () => {
    setSum3(
      radioId3.reduce((acc, cur) => {
        if (
          Number(getValues(cur)) > 0 &&
          cur !== 'no11' &&
          cur !== 'no10' &&
          cur !== 'no12'
        ) {
          const value = 2;
          return value ? acc + value : acc;
        } else if (cur === 'no12' && Number(getValues(cur)) > 0) {
          const value = Number(getValues(cur)) + 1;
          return value ? acc + value : acc;
        } else {
          const value = Number(getValues(cur));
          return value ? acc + value : acc;
        }
      }, 0)
    );
  };

  const handleChange3 = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    calculateSumValue3();
  };

  const calculateSumValue4 = () => {
    setSum4(
      radioId4.reduce((acc, cur) => {
        if (Number(getValues(cur)) > 0) {
          if (cur === 'no14') {
            const value = 4;
            return value ? acc + value : acc;
          } else if (cur === 'no15') {
            const value = 2;
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

  const handleChange4 = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    calculateSumValue4();
  };

  useEffect(() => {
    calculateSumValue3();
    calculateSumValue4();
  }, []);

  return (
    <>
      <SectionTitle title="영역 : 호흡 치료" />
      <Box sx={{ width: '98%', margin: '20px' }}>
        <TableContainer sx={{ marginTop: '20px', marginBottom: '30px' }}>
          <TableBody>
            {영역3.map(
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
                      name={radioId3[content.id - 1]}
                      defaultValue={Number(getValues(radioId3[content.id - 1]))}
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
                                  name={radioId3[content.id - 1]}
                                  value={i}
                                  onChange={handleChange3}
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

        <SectionTitle title="영역 : 위생" />
        <TableContainer sx={{ marginTop: '40px', marginBottom: '-30px' }}>
          <TableBody>
            {영역4.map(
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
                      name={radioId4[content.id - 1]}
                      defaultValue={Number(getValues(radioId4[content.id - 1]))}
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
                                  name={radioId4[content.id - 1]}
                                  value={i}
                                  onChange={handleChange4}
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

export default KPCSContents2;
