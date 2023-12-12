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

const radioId9 = ['no81', 'no82'];

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
    desc: ['해당 없음', '146점'],
  },
];

interface Props extends IFormValues, IFormWatch, IFormRegister {
  disabled?: boolean;
  sum9: number;
  setSum9: (sum9: number) => void;
}

const KPCSICUContents5 = (props: Props) => {
  const { palette } = useTheme();

  const { disabled, setValue, getValues, setSum9, register, sum9 } = props;

  const calculateSumValue9 = () => {
    setSum9(
      radioId9.reduce((acc, cur) => {
        if (cur === 'no81') {
          let value = Number(getValues(cur)) * 96;
          return value ? acc + value : acc;
        } else if (cur === 'no82') {
          let value = Number(getValues(cur)) * 146;
          return value ? acc + value : acc;
        }
        let value = Number(getValues(cur));
        return value ? acc + value : acc;
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

  useEffect(() => {
    calculateSumValue9();
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
                      {content.desc.map((v, i) => {
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
