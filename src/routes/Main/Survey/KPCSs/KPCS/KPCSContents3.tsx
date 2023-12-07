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

const radioId5 = ['no19'];

const 영역5 = [
  {
    id: 1,
    ko: '19. Tube feeding',
    info: [''],
    desc: ['해당 없음', '2점: 1~3회', '4점: 4회 이상'],
  },
];

const radioId6 = ['no20', 'no21', 'no22', 'no23'];

const 영역6 = [
  {
    id: 1,
    ko: '20. 기저귀 교환',
    info: ['간호사가 직접 시행한 경우 해당'],
    desc: ['해당 없음', '2점: 3회 이상'],
  },
  {
    id: 2,
    ko: '21. 대소변기 적용',
    info: ['간호사가 직접 시행한 경우 해당'],
    desc: ['해당 없음', '2점: 3회 이상'],
  },
  {
    id: 3,
    ko: '22. 단순도뇨',
    info: ['1회당 1점'],
    desc: ['해당 없음 ', 'no22_1'],
  },
  {
    id: 4,
    ko: '23. 관장-횟수로 표시',
    info: ['1회당 1점'],
    desc: ['해당 없음  ', 'no23_1'],
  },
];

interface Props extends IFormValues, IFormWatch, IFormRegister {
  disabled?: boolean;
  sum5: number;
  setSum5: (sum5: number) => void;

  sum6: number;
  setSum6: (sum6: number) => void;

  urin: number;
  setUrin: (urin: number) => void;

  poo: number;
  setPoo: (poo: number) => void;
}

const KPCSContents3 = (props: Props) => {
  const { palette } = useTheme();

  const {
    disabled,
    setValue,
    getValues,
    setSum5,
    setSum6,
    setUrin,
    setPoo,
    register,
  } = props;

  const calculateSumValue5 = () => {
    setSum5(
      radioId5.reduce((acc, cur) => {
        const value = Number(getValues(cur)) * 2;
        return value ? acc + value : acc;
      }, 0)
    );
  };

  const handleChange5 = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    calculateSumValue5();
  };

  const calculateSumValue6 = () => {
    setSum6(
      radioId6.reduce((acc, cur) => {
        if (Number(getValues(cur)) > 0) {
          if (cur === 'no20' || cur === 'no21') {
            const value = 2;
            return value ? acc + value : acc;
          } else {
            const value = Number(getValues(cur));
            return value ? acc : acc;
          }
        }
        const value = Number(getValues(cur));
        return value ? acc + value : acc;
      }, 0)
    );
  };

  const handleChange6 = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    calculateSumValue6();
  };

  const [disableUrin, setDisableUrin] = useState(false);
  const [disablePoo, setDisablePoo] = useState(false);

  const handleChange6urin = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    setValue('no22_1', 0);
    setUrin(0);
    setDisableUrin(true);
    calculateSumValue6();
  };
  const handleChange6urinTwo = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    setValue('no22_1', 0);
    setUrin(0);
    setDisableUrin(false);
    calculateSumValue6();
  };

  const handleChange6Poo = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    setValue('no23_1', 0);
    setPoo(0);
    setDisablePoo(true);
    calculateSumValue6();
  };

  const handleChange6PooTwo = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    setValue('no23_1', 0);
    setPoo(0);
    setDisablePoo(false);
    calculateSumValue6();
  };

  useEffect(() => {
    calculateSumValue5();
    calculateSumValue6();
  }, []);

  return (
    <>
      <SectionTitle title="영역 : 식이" />
      <Box sx={{ width: '98%', margin: '20px' }}>
        <TableContainer sx={{ marginTop: '20px', marginBottom: '30px' }}>
          <TableBody>
            {영역5.map(
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
                      borderBottom: 'none',
                    }}
                  >
                    {content.ko}
                  </StyledTableCellTwo>
                  <StyledTableCellWithoutLeftTwo sx={{ borderBottom: 'none' }}>
                    <RadioGroup
                      sx={{
                        paddingTop: content.info.length > 1 ? '55px' : '28px',
                      }}
                      name={radioId5[content.id - 1]}
                      defaultValue={Number(getValues(radioId5[content.id - 1]))}
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
                                  name={radioId5[content.id - 1]}
                                  value={i}
                                  onChange={handleChange5}
                                />
                              </Box>
                            </TableRow>
                          );
                      })}
                    </RadioGroup>
                  </StyledTableCellWithoutLeftTwo>
                  <StyledTableCellWithoutLeftRightTwo
                    sx={{ borderBottom: 'none' }}
                  >
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

        <SectionTitle title="영역 : 배설" />
        <TableContainer sx={{ marginTop: '40px', marginBottom: '-30px' }}>
          <TableBody>
            {영역6.map(
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
                      name={radioId6[content.id - 1]}
                      defaultValue={Number(getValues(radioId6[content.id - 1]))}
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
                                  name={'no22'}
                                  value={i}
                                  onChange={handleChange6urin}
                                />
                              </Box>
                            </TableRow>
                          );
                        } else if (point === 'no22_1') {
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
                                  name={'no22'}
                                  value={i}
                                  onChange={handleChange6urinTwo}
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
                                  name={'no23'}
                                  value={i}
                                  onChange={handleChange6Poo}
                                />
                              </Box>
                            </TableRow>
                          );
                        } else if (point === 'no23_1') {
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
                                  name={'no23'}
                                  value={i}
                                  onChange={handleChange6PooTwo}
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
                                name={radioId6[content.id - 1]}
                                value={i}
                                onChange={handleChange6}
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
                        if (v.includes('no22')) {
                          return (
                            <TableRow
                              sx={{
                                lineHeight: '42px',
                              }}
                            >
                              <Box sx={{ minWidth: '500px' }}>
                                <Form.MuiTextField
                                  disabled={disableUrin ? true : disabled}
                                  required={false}
                                  type="number"
                                  textAlign="right"
                                  sx={{ width: '200px' }}
                                  InputProps={{
                                    ...Form.adornment('횟수', '회/day'),
                                  }}
                                  {...register('no22_1', {
                                    onChange: e => {
                                      setValue('no22_1', e.target.value);
                                      setUrin(Number(e.target.value));
                                    },
                                  })}
                                />
                              </Box>
                            </TableRow>
                          );
                        } else if (v.includes('no23')) {
                          return (
                            <TableRow
                              sx={{
                                lineHeight: '42px',
                              }}
                            >
                              <Box sx={{ minWidth: '500px' }}>
                                <Form.MuiTextField
                                  required={true}
                                  type="number"
                                  textAlign="right"
                                  disabled={disablePoo ? true : disabled}
                                  sx={{ width: '200px' }}
                                  InputProps={{
                                    ...Form.adornment('횟수', '회/day'),
                                  }}
                                  {...register('no23_1', {
                                    onChange: e => {
                                      setValue('no23_1', e.target.value);
                                      setPoo(Number(e.target.value));
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

export default KPCSContents3;
