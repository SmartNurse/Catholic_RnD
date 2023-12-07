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
    ko: '18. 기본간호 (5세 이하)',
    info: ['2회 이하 비정주 투약, 침상/욕실 목욕, 정규 또는 수시 세면, AM/PM care(세면, 양치, 등 마사지, 침대보 정리), 제대간호, 환의/기저귀 교환, 배변보조, 점유침상/빈침상 만들기, 체중측정, 식사준비/공급, 간호과정'],
    desc: ['해당 없음', '6점'],
  },
  {
    id: 2,
    ko: `19. 최소기본간호 (> 5세)`,
    info: ['Self/minimal care', '2회 이하 비정주 투약, 목욕 준비, 식사공급, 빈침상만들기, 간호과정'],
    desc: ['해당 없음', '2점'],
  },
  {
    id: 3,
    ko: '20. 보조기본간호 (> 5세)',
    info: ['Assisted care-position self', '2회 이하 비정주 투약, 목욕/샤워보조, AM/PM care, 식사준비/제공, 체중측정, 빈침상 만들기, 간호과정과 환자 질문에 응답'],
    desc: ['해당 없음', '6점'],
  },
  {
    id: 4,
    ko: '21. 완전기본간호 (> 5세)',
    info: ['Completed care', '2회 이하 비정주 투약, 침상목욕, AM/PM care, 식사준비/제공, 체중측정, 변기/소변기 제공, 소변량 측정, 점유침상 만들기, 식사준비/제공, 자세보조, 간호과정과 환자 질문에 응답'],
    desc: ['해당 없음', '14점'],
  },
  {
    id: 5,
    ko: '22. 전적인 간호 (> 5세)',
    info: [
      'Total care','2회 이하 비정주 투약, 침상목욕, AM/PM care, 피부간호 q 2hr, 구강간호 q 4hr, 자세변경 q 2hr, 식사준비/제공, 침상체중 측정, 변기/소변기 제공, 소변량 측정, 점유침상 만들기, 간호과정과 환자 질문에 응답'
    ],
    desc: ['해당 없음', '32점'],
  },
  {
    id: 6,
    ko: '23. 침대에서  환자 옮기기 3회',
    info: [
      '환자를 chair/wheelchair/commode나 stretcher로 옮기고 다시 침대로 올라가는 것을 3회 도와주는 경우 ',
    ],
    desc: ['해당 없음', '2점'],
  },
  {
    id: 7,
    ko: '24. ROM 3회이상',
    info: [
      'active는 처방된 대로 하는지 확인하고 passive는 직접 운동시킴',
    ],
    desc: ['해당 없음', '4점'],
  },
  {
    id: 8,
    ko: '25. 억제대 2-4군데 적용',
    info: [
      '2-4군데 사지 억제를 하고 말초순환을 확인할 때',
    ],
    desc: ['해당 없음', '2점'],
  },
  {
    id: 9,
    ko: '26. 격리 (마스크,가운,장갑착용) 8회이상',
    info: [
      '손 씻고 마스크, 가운, 장갑을 착용하고 벗는 행위가 하루 8회일 때',
    ],
    desc: ['해당 없음', '2점'],
  },
  {
    id: 10,
    ko: '27. Peds recreation/observation',
    info: [
      '12세 이하 아동에게 모두 적용하지 않는다.', '아동의 계획적인 놀이요법이나 질문에 답하고 심하게 보채거나 우는 아이를 달래거나 안아주거나 수시로 곁에서 관찰해야 하는 경우'
    ],
    desc: ['해당 없음', '8점'],
  },
  {
    id: 11,
    ko: '28. 추가 린넨교환 및 부분목욕',
    info: [
      '한근무조당 2회 또는 1일 6회', '필요시 린넨 교환 또는 부분 목욕을 하는 경우', 'incontinent, vomiting, diaphoretic care'
    ],
    desc: ['해당 없음', '4점'],
  },
];

const radioId4 = ['no14', 'no15', 'no16', 'no17', 'no18'];

const 영역4 = [
  {
    id: 1,
    ko: '29. Tube feed (bolus)',
    info: ['비위관, 위루를 통해 영양 주입액 준비/연결, 튜브 위치 사정, 주입관 세척/속도 조절, 기록, 제거포함'],
    desc: ['해당 없음', '5점: q 4h or 6회', '8점: q 3h or 8회', '10점: q 2h or 12회'],
  },
  {
    id: 2,
    ko: '30. Tube feed (continuous)',
    info: [
      '병 교체시마다 추가 (주입액의 연결, 튜브위치 사정, 주입속도 조절, 주입량 기록을 포함)',
    ],
    desc: ['해당 없음', '1회 당 2점:'],  //인풋박스 확인!!
  },
  {
    id: 3,
    ko: '31. 5세 이상 spoon feed, 성인 식사보조',
    info: ['식사 준비와 배선 등은 ADL에 포함되므로 직접 spoon feed 시행한 경우만 점수를 준다'],
    desc: ['해당 없음', '6점: 3회'],
  },
  {
    id: 4,
    ko: '32. 1-5세 이하 spoon feed, 아동 식사보조',
    info: ['식사 준비와 배선 등은 ADL에 포함되므로 직접 spoon feed 시행한 경우만 점수를 준다'],
    desc: ['해당 없음', '10점: 3회'],
  },
  {
    id: 5,
    ko: '33. Infant/Neonate bottle feed',
    info: [
      '매 병당 2점 가산',
      '환아를 안고 feeding 후 등을 쓸고 침상에 눕히는 것',
    ],
    desc: ['해당 없음', '1점: 2점:'],  //인풋박스 확인!!
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
      <SectionTitle title="영역 : 활동" />
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

        <SectionTitle title="영역 : 영양" />
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

export default KPCSICUContents2.tsx;
