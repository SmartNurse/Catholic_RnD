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

const radioId7_1 = [
  'no55',
  'no56',
  'no57',
  'no58',
  'no59',
  'no60',
  'no61',
  'no62',
  'no63',
  'no64',
  'no65',
  'no66',
  'no67',
  'no68',
];

const 영역7_1 = [
  {
    id: 1,
    ko: '55. 흉관삽입보조',
    info: ['준비, 삽입시 보조, 배액병 준비 및 연결, 정리'],
    desc: ['해당 없음', '4점'],
  },
  {
    id: 2,
    ko: '56. 요추천자, EVD 시술',
    info: ['준비, 천자시 보조, 정리'],
    desc: ['해당 없음', '4점'],
  },
  {
    id: 3,
    ko: '57. 심낭천자, 늑막천자, 복강천자',
    info: ['준비, 천자 중 환자활력증후 측정, 검사보조, 검체채취, 정리'],
    desc: ['해당 없음', '4점'],
  },
  {
    id: 4,
    ko: '58. Tracheotomy care',
    info: ['기관캐뉼라의 교환이나 세척, 드레싱교환을 1일 3회 이상'],
    desc: ['해당 없음 ', '1회당 4점 : '],
  },
  {
    id: 5,
    ko: '59. 단순도뇨 4회이상',
    info: ['nelaton catheterization을 하루 4회 이상 시행한 경우'],
    desc: ['해당 없음', '4점 : 4회 이상'],
  },
  {
    id: 6,
    ko: '60. 복잡드레싱 30분 이상',
    info: ['젖은 dressing 제거, 세척액을 적용하고 드레싱을 시행하며 정리함'],
    desc: ['해당 없음', '4점'],
  },
  {
    id: 7,
    ko: '61. 기타 30분 이상',
    info: [
      '30분~1시간 동안 직접간호 활동이 이루어진 경우.',
      '이 활동은 항목 리스트에 없어야 하며 환자 기록에 있어야 한다: tracheostomy시 보조, IABP 삽입시 보조, 30분-1시간 환자 동반',
    ],
    desc: ['해당 없음  ', '1회당 4점 :  '],
  },
  {
    id: 8,
    ko: '62. 혈액여과기 삽입보조 및 설치',
    info: [
      '중환자실 간호사에 의해 시작 또는 교체되는 경우에 한함. 장비준비, priming, 기록을 포함. ',
    ],
    desc: ['해당 없음   ', '1회당 8점 : '],
  },
  {
    id: 9,
    ko: '63. 혈액여과기 유지',
    info: [
      '장비의 유지를 위해 관찰, 응고예방활동과 기록 포함.',
      'I/O는 별도 부여함',
    ],
    desc: ['해당 없음', '4점'],
  },
  {
    id: 10,
    ko: '64. 복막투석 시작',
    info: [
      '중환자실 간호사에 의해 시작하는 경우. 장비 준비, priming, 유지, 기록 포함.',
      'I/O는 별도 부여',
    ],
    desc: ['해당 없음', '4점'],
  },
  {
    id: 11,
    ko: '65. 심폐소생술',
    info: [
      '간호직원 1명이 환자옆에 keep할 경우 부과 다른 간호 제공을 함께 할 경우 불인정, 2명이 1시간동안 지속적으로 참여하면 16점 부여한다.',
      '중환자실에서 응급수술 시행, CPB, ECMO 사용',
    ],
    desc: ['해당 없음', '8점: 1시간', '16점: 2시간', '24점: 3시간'],
  },
  {
    id: 12,
    ko: '66. 신환간호 (사정과 안내)',
    info: [
      '새로 입원한 환자에 대한 신체사정, 병력작성, 병동안내, 병원활동 소개, 병동 규칙 설명',
    ],
    desc: ['해당 없음', '12점'],
  },
  {
    id: 13,
    ko: '67. 전동 및 퇴원 (사정과 안내)',
    info: [
      '병원내에서 이송이 된 경우로서 환자사정과 새로운 병동에 대한 안내가 이루어져야 한다.',
    ],
    desc: ['해당 없음', '4점'],
  },
  {
    id: 14,
    ko: '68. 과도한 정신적 흥분상태',
    info: [
      'ICU psychosis 안정 전',
      'severe agitated 환자, ICU psychosis로 안정시까지',
    ],
    desc: ['해당 없음', '8점'],
  },
];

interface Props extends IFormValues, IFormWatch, IFormRegister {
  disabled?: boolean;
  sum7_1: number;
  setSum7_1: (sum7_1: number) => void;

  tracheotomy: number;
  setTracheotomy: (tracheotomy: number) => void;

  etc30: number;
  setEtc30: (etc30: number) => void;

  filter: number;
  setFilter: (filter: number) => void;
}

const KPCSICUContents4_1 = (props: Props) => {
  const { palette } = useTheme();

  const {
    disabled,
    setValue,
    getValues,
    setSum7_1,
    setTracheotomy,
    setEtc30,
    setFilter,

    register,
    sum7_1,
  } = props;

  const calculateSumValue7_1 = () => {
    setSum7_1(
      radioId7_1.reduce((acc, cur) => {
        // 55, 56, 57, 59, 60 번
        if (
          cur === 'no55' ||
          cur === 'no56' ||
          cur === 'no57' ||
          cur === 'no59' ||
          cur === 'no60' ||
          cur === 'no67'
        ) {
          const value = Number(getValues(cur)) * 4;
          return value ? acc + value : acc;
        }
        // 58, 61, 62 번 *인풋창있는
        else if (cur === 'no58' || cur === 'no61' || cur === 'no62') {
          const value = Number(getValues(cur));
          return value ? acc + value - 1 : acc;
        }
        // 65, 68번
        else if (cur === 'no65' || cur === 'no68') {
          const value = Number(getValues(cur)) * 8;
          return value ? acc + value : acc;
        }
        // 66번
        else if (cur === 'no66') {
          const value = Number(getValues(cur)) * 12;
          return value ? acc + value : acc;
        }

        const value = Number(getValues(cur));
        return value ? acc + value : acc;
      }, 0)
    );
  };

  const [disable58, setDisable58] = useState(false);
  const [disable61, setDisable61] = useState(false);
  const [disable62, setDisable62] = useState(false);

  const handleChange7_1 = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    calculateSumValue7_1();
  };

  const handleChange7_58_none = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    setValue('no58_1', 0);
    setTracheotomy(0);
    setDisable58(true);
    calculateSumValue7_1();
  };

  const handleChange7_58_One = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    setValue('no58_1', 1);
    setTracheotomy(4);
    setDisable58(false);
    calculateSumValue7_1();
  };

  const handleChange7_61_none = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    setValue('no61_1', 0);
    setEtc30(0);
    setDisable61(true);
    calculateSumValue7_1();
  };

  const handleChange7_61_One = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    setValue('no61_1', 1);
    setEtc30(4);
    setDisable61(false);
    calculateSumValue7_1();
  };

  const handleChange7_62_none = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    setValue('no62_1', 0);
    setFilter(0);
    setDisable62(true);
    calculateSumValue7_1();
  };

  const handleChange7_62_One = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    setValue('no62_1', 1);
    setFilter(8);
    setDisable62(false);
    calculateSumValue7_1();
  };

  useEffect(() => {
    calculateSumValue7_1();
  }, []);

  return (
    <>
      <SectionTitle title="영역 : 투약" />
      <Box sx={{ width: '98%', margin: '20px' }}>
        <TableContainer sx={{ marginTop: '20px', marginBottom: '-30px' }}>
          <TableBody>
            {영역7_1.map(
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
                        marginTop: content.ko.includes('33.') ? '5px' : '0px',
                      }}
                      name={radioId7_1[content.id - 1]}
                      defaultValue={Number(
                        getValues(radioId7_1[content.id - 1])
                      )}
                    >
                      {content.desc.map((point, i) => {
                        if (point === '해당 없음 ') {
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
                                  name={'no58'}
                                  value={i}
                                  onChange={handleChange7_58_none}
                                />
                              </Box>
                            </TableRow>
                          );
                        } else if (point === '1회당 4점 : ') {
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
                                  name={'no58'}
                                  value={i}
                                  onChange={handleChange7_58_One}
                                />
                              </Box>
                            </TableRow>
                          );
                        } else if (point === '해당 없음  ') {
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
                                  name={'no61'}
                                  value={i}
                                  onChange={handleChange7_61_none}
                                />
                              </Box>
                            </TableRow>
                          );
                        } else if (point === '1회당 4점 :  ') {
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
                                  name={'no61'}
                                  value={i}
                                  onChange={handleChange7_61_One}
                                />
                              </Box>
                            </TableRow>
                          );
                        } else if (point === '해당 없음   ') {
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
                                  name={'no62'}
                                  value={i}
                                  onChange={handleChange7_62_none}
                                />
                              </Box>
                            </TableRow>
                          );
                        } else if (point === '1회당 8점 : ') {
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
                                  name={'no62'}
                                  value={i}
                                  onChange={handleChange7_62_One}
                                />
                              </Box>
                            </TableRow>
                          );
                        }
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
                                name={radioId7_1[content.id - 1]}
                                value={i}
                                onChange={handleChange7_1}
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
                      {content.desc.map((v, i) => {
                        if (v === '1회당 4점 : ') {
                          return (
                            <TableRow
                              sx={{
                                lineHeight: '42px',
                              }}
                            >
                              <Box sx={{ minWidth: '500px' }}>
                                {v}
                                <Form.MuiTextField
                                  disabled={disable58 ? true : disabled}
                                  required={false}
                                  type="number"
                                  textAlign="right"
                                  sx={{ width: '140px', marginLeft: '3px' }}
                                  InputProps={{
                                    ...Form.adornment('', '회'),
                                  }}
                                  {...register('no58_1', {
                                    onChange: e => {
                                      setValue('no58_1', e.target.value);
                                      setTracheotomy(Number(e.target.value));
                                    },
                                  })}
                                />
                              </Box>
                            </TableRow>
                          );
                        } else if (v === '1회당 4점 :  ') {
                          return (
                            <TableRow
                              sx={{
                                lineHeight: '42px',
                              }}
                            >
                              <Box sx={{ minWidth: '500px' }}>
                                {v}
                                <Form.MuiTextField
                                  required={false}
                                  type="number"
                                  textAlign="right"
                                  disabled={disable61 ? true : disabled}
                                  sx={{ width: '140px', marginLeft: '3px' }}
                                  InputProps={{
                                    ...Form.adornment('', '회'),
                                  }}
                                  {...register('no61_1', {
                                    onChange: e => {
                                      setValue('no61_1', e.target.value);
                                      setEtc30(Number(e.target.value));
                                    },
                                  })}
                                />
                              </Box>
                            </TableRow>
                          );
                        } else if (v === '1회당 8점 : ') {
                          return (
                            <TableRow
                              sx={{
                                lineHeight: '42px',
                              }}
                            >
                              <Box sx={{ minWidth: '500px' }}>
                                {v}
                                <Form.MuiTextField
                                  required={false}
                                  type="number"
                                  textAlign="right"
                                  disabled={disable62 ? true : disabled}
                                  sx={{ width: '140px', marginLeft: '3px' }}
                                  InputProps={{
                                    ...Form.adornment('', '회'),
                                  }}
                                  {...register('no62_1', {
                                    onChange: e => {
                                      setValue('no62_1', e.target.value);
                                      setFilter(Number(e.target.value));
                                    },
                                  })}
                                />
                              </Box>
                            </TableRow>
                          );
                        }
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

export default KPCSICUContents4_1;
