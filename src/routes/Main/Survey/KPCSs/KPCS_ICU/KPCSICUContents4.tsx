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
    ko: '69. O2 therapy',
    info: [
      '기구 준비, 산소농도 조절, 환자반응 평가 (oxyhood, prong, mask, nasal or mist with collar, face- tent), 2가지 사용 시 추가 점수 없음',
    ],
    desc: ['해당 없음', '2점'],
  },
  {
    id: 2,
    ko: '70. NO therapy',
    info: [
      '매일 적용, 가스농도 모니터, 환자의 부작용 관찰, 누출예방관리, 기록',
    ],
    desc: ['해당 없음', '4점'],
  },
  {
    id: 3,
    ko: '71. 기침심호흡운동, incentive spirometer',
    info: [
      '기구 준비하고 사용 중 환자를 돕고 적절히 사용하도록 교육함.',
      '6회 미만과 환자 스스로 시행한 경우 불인정',
    ],
    desc: ['해당 없음', '2점'],
  },
  {
    id: 4,
    ko: '72. 흉부물리요법',
    info: [
      '청진 후 손상된 폐부위에 타진, vibrator 실시, postural drainage을 체계적으로 시행하고 환자의 상태를 평가함',
    ],
    desc: ['해당 없음', '2점: 2회', '4점: 4회', '6점: 6회'],
  },
  {
    id: 5,
    ko: '73. IPPB or Nebulizer',
    info: [
      '간호사에 의해 직접 시행한 경우로 기구를 준비하고 nebulizer를 준비하고 자세를 돕고 적절한 호흡법을 교육하며 치료를 시행함',
    ],
    desc: ['해당 없음', '2점: 2회', '4점: 4회', '6점: 6회'],
  },
  {
    id: 6,
    ko: '74. tent, incubator',
    info: [
      'tent 적용 후 4시간마다 환자의 적응 상태와 tent 내부 온도 측정. incubator에 산소농도, 습도, 온도를 측정 하고 청결 유지를 포함',
    ],
    desc: ['해당 없음', '8점'],
  },
  {
    id: 7,
    ko: '75. 흡인간호 (suction)',
    info: [
      'oral or tracheostomy, naso-tracheal, endotracheal suction 포함. 영아에게 oral bulb syringe suctioning 하는 것도 포함됨',
    ],
    desc: ['해당 없음', '2점: 6회', '4점: 12회', '8점: 24회', '16점: 30분마다'],
  },
  {
    id: 8,
    ko: '76. 인공호흡기',
    info: [
      '산소조절, 인공호흡기 준비, 회로의 유지, 가습기의 유지, 환자 반응, alarm에 대한 조정을 포함',
    ],
    desc: ['해당 없음', '10점'],
  },
  {
    id: 9,
    ko: '77. 복위치료법',
    info: [
      '돌려 눕힐 때마다 가산, 환자를 돌려 눕히고 자세보조하며 반응을 살핌',
    ],
    desc: ['해당 없음', '1회당 4점 :'], //인풋박스 확인!
  },
];

const radioId8 = ['no27', 'no28'];

const 영역8 = [
  {
    id: 1,
    ko: '78. 수술전 교육',
    info: ['환자와 가족에게 수술 전 교육을 하고 질문에  답변을 함'],
    desc: ['해당 없음', '4점'],
  },
  {
    id: 2,
    ko: '79. 개별교육',
    info: [
      '당뇨/심장/장루/신생아투약/분만후/퇴원교육',
      '개인적으로 교육 실시(환자의 질환, 예방, 주의사항, 약물교육, 질문응답 포함)',
    ],
    desc: ['해당 없음', '4점'],
  },
  {
    id: 3,
    ko: '80. 환자 및 가족 상담 30분 이상',
    info: [
      '환자와 가족에게 상담 또는 면담을 별도로 30분 이상 제공한 경우로 기록이 있어야 한다',
      '24시간 동안 30분 이상 면담/상담이 이루어졌을 경우에만 점수를 주며 반드시 기록되어야 한다.',
    ],
    desc: ['해당 없음', '4점'],
  },
];

interface Props extends IFormValues, IFormWatch {
  disabled?: boolean;
  sum7: number;
  setSum7: (sum7: number) => void;

  sum8: number;
  setSum8: (sum8: number) => void;
}
const KPCSICUContents4 = (props: Props) => {
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
      <SectionTitle title="영역 : 호흡치료" />
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

        <SectionTitle title="영역 : 교육 및 정서적 지지" />
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
