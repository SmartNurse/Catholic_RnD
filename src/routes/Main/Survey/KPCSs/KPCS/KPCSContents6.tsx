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

const radioId11 = ['no48', 'no49', 'no50'];

const 영역11 = [
  {
    id: 1,
    ko: '48. 교육',
    info: ['질환별 환자 교육 (당뇨, 고혈압, 심장질환 등) 포함'],
    desc: ['해당 없음', '2점: 15~30분 미만', '4점: 30분 이상'],
  },
  {
    id: 2,
    ko: '49. 환자, 가족의 정서적 지지',
    info: ['환자 또는 가족에게 정서적 지지를 제공한 경우 해당'],
    desc: ['해당 없음', '2점: 15~30분', '4점: 30분 이상'],
  },
  {
    id: 3,
    ko: '50. 의사소통장애',
    info: [
      '정신지체, 시각/청각/언어력 소실이 있는 환자와 의사소통 할 때 보통의 환자보다 많은 시간과 노력이 요구되는 경우 해당',
    ],
    desc: ['해당 없음', '3점'],
  },
];

interface Props extends IFormValues, IFormWatch, IFormRegister {
  disabled?: boolean;
  sum11: number;
  setSum11: (sum11: number) => void;
}
const KPCSContents6 = (props: Props) => {
  const { palette } = useTheme();

  const { disabled, setValue, getValues, setSum11, register } = props;

  const calculateSumValue11 = () => {
    setSum11(
      radioId11.reduce((acc, cur) => {
        if (cur === 'no48' || cur === 'no49') {
          let value = Number(getValues(cur)) * 2;
          return value ? acc + value : acc;
        } else {
          let value = Number(getValues(cur)) * 3;
          return value ? acc + value : acc;
        }
      }, 0)
    );
  };

  const handleChange11 = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
    calculateSumValue11();
  };

  useEffect(() => {
    calculateSumValue11();
  }, []);

  return (
    <>
      <SectionTitle title="영역 : 처치" />
      <Box sx={{ width: '98%', margin: '20px' }}>
        <TableContainer sx={{ marginTop: '20px', marginBottom: '30px' }}>
          <TableBody>
            {영역11.map(
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
                      name={radioId11[content.id - 1]}
                      defaultValue={Number(
                        getValues(radioId11[content.id - 1])
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
                                  name={radioId11[content.id - 1]}
                                  value={i}
                                  onChange={handleChange11}
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

export default KPCSContents6;
