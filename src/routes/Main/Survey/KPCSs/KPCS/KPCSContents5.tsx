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
import Form from 'components/Form';
import {
  StyledTableCellTwo,
  StyledTableCellWithoutLeftTwo,
  StyledTableCellWithoutLeftRightTwo,
} from 'routes/Main/style';
import SectionTitle from '../../components/SectionTitle';

import { IFormValues, IFormWatch, IFormRegister } from 'routes/Main/type';

const radioId9 = [
  'no34',
  'no35',
  'no36',
  'no37',
  'no38',
  'no39',
  'no40',
  'no41',
  'no42',
  'no43',
];

const 영역9 = [
  {
    id: 1,
    ko: '34. 말초정맥관 삽입',
    info: ['간호사가 시행한 경우 해당'],
    desc: ['해당 없음', '1점'],
  },
  {
    id: 2,
    ko: '35. 튜브삽입 관련 (삽입 당일)',
    info: [''],
    desc: [
      '해당 없음',
      '2점: L-tube 삽입 및 관리',
      '2점: Folye bag 준비 및 삽입',
      '2점: Rectal tube 삽입 및 유지',
      '2점: 중심정맥관 삽입 준비 및 보조',
      '3점: 흉관 삽입 준비 및 보조',
    ],
  },
  {
    id: 3,
    ko: '36. 각종 tube 관리',
    info: [
      'Chest tube, Penrose drain, JP drain, PCD, Gastrostomy tube, PTBD, H-vac 등이 해당',
      'Squeezing, 피부소독, 배액양상 관찰 기록',
    ],
    desc: ['해당 없음', '2점: 3회 이상'],
  },
  {
    id: 4,
    ko: '37. 천자 준비 및 간호',
    info: ['Lumbar Puncture 준비 및 보조', '늑막강/복강 천자 준비 및 보조'],
    desc: ['해당 없음', '2점'],
  },
  {
    id: 5,
    ko: '38. 수술 및 시술 전 처치',
    info: [
      '수술 또는 시술 당일의 동의서, 금식 확인, 피부 준비, 투약 및 교육 설명 등 포함',
    ],
    desc: ['해당 없음', '3점'],
  },
  {
    id: 6,
    ko: '39. Irrigation',
    info: ['Foley cath 또는 L-tube'],
    desc: ['해당 없음', '1점'],
  },
  {
    id: 7,
    ko: '40. 가운이나 마스크 착용이 필요한 격리',
    info: [''],
    desc: ['해당 없음', '2점'],
  },
  {
    id: 8,
    ko: '41. 억제대 적용',
    info: ['(2군데 혹은 4군데)하고 부위 순환 관찰'],
    desc: ['해당 없음', '2점'],
  },
  {
    id: 9,
    ko: '42. 냉온찜질 교환',
    info: [''],
    desc: ['해당 없음', '2점: 4회 이상'],
  },
  {
    id: 10,
    ko: '43. 기타 15분 이상 소요되는 처치 ',
    info: ['간호사가 직접 시행한 경우'],
    desc: ['해당 없음', '2점'],
  },
];

const radioId10 = ['no44', 'no45', 'no46', 'no47'];

const 영역10 = [
  {
    id: 1,
    ko: '44. 신환 입원',
    info: [
      '입원 당시 병력청취, V/S check, 신체계측, 각종 행정업무 및 교육 등 포함',
    ],
    desc: ['해당 없음', '5점'],
  },
  {
    id: 2,
    ko: '45. 전출입/퇴원 간호',
    info: [
      '전출입 간호: 병동간 인수인계 및 행정 업무 등 포함',
      '퇴원 간호: 퇴원교육 및 행정 업무 등 포함',
    ],
    desc: ['해당 없음', '3점'],
  },
  {
    id: 3,
    ko: '46. 사망환자 간호 (사후처치까지 포함)',
    info: [''],
    desc: ['해당 없음', '5점'],
  },
  {
    id: 4,
    ko: '47. 간호사 keep 필요 (시간으로 표시)',
    info: ['CPR 시행 시 (시간당 6점)'],
    desc: ['해당 없음', 'no47_1'],
  },
];

interface Props extends IFormValues, IFormWatch, IFormRegister {
  disabled?: boolean;
  sum9: number;
  setSum9: (sum9: number) => void;

  sum10: number;
  setSum10: (sum10: number) => void;

  cpr: number;
  setCpr: (cpr: number) => void;
}

const KPCSContents5 = (props: Props) => {
  const { palette } = useTheme();

  const { disabled, setValue, getValues, setSum9, setSum10, setCpr, register } =
    props;

  const calculateSumValue9 = () => {
    setSum9(
      radioId9.reduce((acc, cur) => {
        if (Number(getValues(cur)) === 1 && cur !== 'no35') {
          if (cur === 'no36') {
            let value = 2;
            return value ? acc + value : acc;
          } else if (cur === 'no37') {
            let value = 2;
            return value ? acc + value : acc;
          } else if (cur === 'no40') {
            let value = 2;
            return value ? acc + value : acc;
          } else if (cur === 'no41') {
            let value = 2;
            return value ? acc + value : acc;
          } else if (cur === 'no42') {
            let value = 2;
            return value ? acc + value : acc;
          } else if (cur === 'no43') {
            let value = 2;
            return value ? acc + value : acc;
          } else if (cur === 'no38') {
            let value = 3;
            return value ? acc + value : acc;
          } else {
            let value = Number(getValues(cur));
            return value ? acc + value : acc;
          }
        } else if (cur === 'no35' && 5 > Number(getValues(cur))) {
          if (Number(getValues(cur)) > 0) {
            let value = 2;
            return value ? acc + value : acc;
          } else {
            let value = 0;
            return value ? acc + value : acc;
          }
        } else if (cur === 'no35' && 4 < Number(getValues(cur))) {
          let value = 3;
          return value ? acc + value : acc;
        } else {
          let value = Number(getValues(cur));
          return value ? acc + value : acc;
        }
      }, 0)
    );
  };

  const handleChange9 = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    calculateSumValue9();
  };

  const calculateSumValue10 = () => {
    setSum10(
      radioId10.reduce((acc, cur) => {
        if (Number(getValues(cur)) > 0) {
          if (cur === 'no44' || cur === 'no46') {
            const value = 5;
            return value ? acc + value : acc;
          } else {
            const value = 3;
            return value ? acc + value : acc;
          }
        } else {
          let value = Number(getValues(cur));
          return value ? acc + value : acc;
        }
      }, 0)
    );
  };

  const handleChange10 = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    calculateSumValue10();
  };

  useEffect(() => {
    calculateSumValue9();
    calculateSumValue10();
  }, []);

  return (
    <>
      <SectionTitle title="영역 : 처치" />
      <Box sx={{ width: '98%', margin: '20px' }}>
        <TableContainer sx={{ marginTop: '20px', marginBottom: '30px' }}>
          <TableBody>
            {영역9.map(
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
                      name={radioId9[content.id - 1]}
                      defaultValue={Number(getValues(radioId9[content.id - 1]))}
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
                                  name={radioId9[content.id - 1]}
                                  value={i}
                                  onChange={handleChange9}
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

        <SectionTitle title="영역 : 특수 처치" />
        <TableContainer sx={{ marginTop: '40px', marginBottom: '-30px' }}>
          <TableBody>
            {영역10.map(
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
                      name={radioId10[content.id - 1]}
                      defaultValue={Number(
                        getValues(radioId10[content.id - 1])
                      )}
                    >
                      {content.desc.map((point, i) => {
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
                                name={radioId10[content.id - 1]}
                                value={i}
                                onChange={handleChange10}
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
                      {content.desc.map((v, i) => {
                        if (v.includes('no')) {
                          return (
                            <TableRow
                              sx={{
                                lineHeight: '42px',
                              }}
                            >
                              <Box sx={{ minWidth: '500px' }}>
                                <Form.MuiTextField
                                  required={false}
                                  type="number"
                                  textAlign="right"
                                  disabled={
                                    Number(
                                      getValues(radioId10[content.id - 1])
                                    ) === 0
                                      ? true
                                      : disabled
                                  }
                                  sx={{ width: '200px' }}
                                  InputProps={{
                                    ...Form.adornment('', '시간'),
                                  }}
                                  {...register('no47_1', {
                                    onChange: e => {
                                      setValue(
                                        'no47_1',
                                        Number(e.target.value)
                                      );
                                      setCpr(Number(e.target.value) * 6);
                                    },
                                  })}
                                />
                              </Box>
                            </TableRow>
                          );
                        } else
                          return (
                            <TableRow
                              sx={{
                                lineHeight: '42px',
                              }}
                            >
                              <Box sx={{ minWidth: '500px' }}>{v}</Box>
                            </TableRow>
                          );
                      })}
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

export default KPCSContents5;
