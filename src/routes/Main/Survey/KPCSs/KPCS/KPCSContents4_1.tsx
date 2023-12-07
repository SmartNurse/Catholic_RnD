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

const radioId7_1 = ['no29', 'no30', 'no31', 'no32', 'no33'];

const 영역7_1 = [
  {
    id: 1,
    ko: '29. 수액교환',
    info: [
      '항생제를 mix하는 D5W 50cc, N/S 50cc 등은 해당 안되며 수액만 해당됨',
    ],
    desc: ['해당 없음', '1점: 2회 이하', '3점: 3~4회', '4점: 5회 이상'],
  },
  {
    id: 2,
    ko: '30. 복합 치료',
    info: ['정맥투여로  2개 이상 또는 multilumen 사용'],
    desc: ['해당 없음', '1점'],
  },
  {
    id: 3,
    ko: '31. 정맥내 투약',
    info: [
      '환자에게 투여한 약품별 투여횟수의 합을 말함',
      '1회 방문으로 2개 동시 투약하는 경우 2회로 환자에게 투여된 경우에만 count함',
    ],
    desc: ['해당 없음', '1점: 3~5회', '2점: 6~9회', '3점: 10회 이상'],
  },
  {
    id: 4,
    ko: '32. 수혈-횟수로 표시',
    info: [
      '혈액 확인, V/S check, 환자 관찰 등을 모두 포함',
      '혈소판, Cryo는 6unit당 2점',
    ],
    desc: ['해당 없음 ', '수혈'],
  },
  {
    id: 5,
    ko: '33. 정맥 투약을 제외한 투약 방문',
    info: [
      '약품 개수가 아니고 투약을 위한 환자 방문 횟수임',
      '1회 방문으로 2개 이상 동시 투약하는 경우 1회로 계산함 (PRN 투약은 환자에게 투여된 경우에만 count함)',
      '약 준비, 설명, 투여가 포함되며 기록이 있어야 함',
    ],
    desc: ['해당 없음', '2점: 3회 이상'],
  },
];

interface Props extends IFormValues, IFormWatch, IFormRegister {
  disabled?: boolean;
  sum7_1: number;
  setSum7_1: (sum7_1: number) => void;

  trancfusion: number;
  setTransfusion: (trancfusion: number) => void;
}

const KPCSContents4_1 = (props: Props) => {
  const { palette } = useTheme();

  const { disabled, setValue, getValues, setSum7_1, setTransfusion, register } =
    props;

  const calculateSumValue7_1 = () => {
    setSum7_1(
      radioId7_1.reduce((acc, cur) => {
        if (Number(getValues(cur)) > 0 && cur !== 'no29') {
          if (cur === 'no33') {
            const value = 2;
            return value ? acc + value : acc;
          } else {
            const value = Number(getValues(cur));
            return value ? acc + value : acc;
          }
        } else if (cur === 'no29' && Number(getValues(cur)) > 1) {
          const value = Number(getValues(cur)) + 1;
          return value ? acc + value : acc;
        } else {
          const value = Number(getValues(cur));
          return value ? acc + value : acc;
        }
      }, 0)
    );
  };

  const [disableTF, setDisableTF] = useState(false);

  const handleChange7_1 = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    calculateSumValue7_1();
  };

  const handleChange7_2 = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    setValue('no32_1', 0);
    setTransfusion(0);
    setDisableTF(true);
    calculateSumValue7_1();
  };

  const handleChange7_2_1 = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    setValue('no32_1', 0);
    setTransfusion(0);
    setDisableTF(false);
    calculateSumValue7_1();
  };

  useEffect(() => {
    calculateSumValue7_1();
  }, []);

  return (
    <>
      <SectionTitle title="영역 : 투약" />
      <Box sx={{ width: '98%', margin: '20px' }}>
        <TableContainer sx={{ marginTop: '40px', marginBottom: '-30px' }}>
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
                        } else if (point === '해당 없음 ') {
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
                                  name={'no32'}
                                  value={i}
                                  onChange={handleChange7_2}
                                />
                              </Box>
                            </TableRow>
                          );
                        } else if (point === '수혈') {
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
                                  name={'no32'}
                                  value={i}
                                  onChange={handleChange7_2_1}
                                />
                              </Box>
                            </TableRow>
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
                        if (v === '수혈') {
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
                                  disabled={disableTF ? true : disabled}
                                  sx={{ width: '200px', marginLeft: '10px' }}
                                  InputProps={{
                                    ...Form.adornment('', 'unit'),
                                  }}
                                  {...register('no32_1', {
                                    onChange: e => {
                                      setValue(
                                        'no32_1',
                                        Number(e.target.value)
                                      );
                                      setTransfusion(
                                        Math.floor(getValues('no32_1') / 3) - 1
                                      );
                                    },
                                  })}
                                />
                              </Box>
                            </TableRow>
                          );
                        } else {
                          return (
                            <TableRow
                              sx={{
                                lineHeight: '42px',
                              }}
                            >
                              <Box sx={{ minWidth: '500px' }}>{v}</Box>
                            </TableRow>
                          );
                        }
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

export default KPCSContents4_1;
