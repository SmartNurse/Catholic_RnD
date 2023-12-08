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
    ko: '81. 1:1 coverage',
    info: ['특정한 환자에게 매 근무조마다 1:1 간호를 해주는 경우'],
    desc: ['해당 없음', '96점'],
  },
  {
    id: 2,
    ko: '82. 1:1 초과 coverage',
    info: ['각각의 근무조마다 1환자에게 1명 이상의 직원이 필요한 경우'],
    desc: [
      '해당 없음',
      '146점',
    ],
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
          } else if (cur === 'no47') {
            const value = Number(getValues(cur));
            return value ? acc : acc;
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

  const [disableCPR, setDisableCPR] = useState(false);

  const handleChange10 = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    calculateSumValue10();
  };

  const handleChange10_1 = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    setValue('no47_1', 0);
    setCpr(0);
    setDisableCPR(true);
    calculateSumValue10();
  };

  const handleChange10_1_1 = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    setValue('no47_1', 0);
    setCpr(0);
    setDisableCPR(false);
    calculateSumValue10();
  };

  useEffect(() => {
    calculateSumValue9();
    calculateSumValue10();
  }, []);

  return (
    <>
      <SectionTitle title="영역 : 지속적 요구" />
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
                                  name={'no47'}
                                  value={i}
                                  onChange={handleChange10_1}
                                />
                              </Box>
                            </TableRow>
                          );
                        } else if (point === 'no47_1') {
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
                                  name={'no47'}
                                  value={i}
                                  onChange={handleChange10_1_1}
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
                                  disabled={disableCPR ? true : disabled}
                                  sx={{ width: '200px' }}
                                  InputProps={{
                                    ...Form.adornment('', '시간'),
                                  }}
                                  {...register('no47_1', {
                                    onChange: e => {
                                      setValue('no47_1', e.target.value);
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

export default KPCSICUContents5;
