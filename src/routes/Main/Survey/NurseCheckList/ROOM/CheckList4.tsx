import { Fragment } from 'react';
import {
  Grid,
  Box,
  TableRow,
  Radio,
  RadioGroup,
  FormControlLabel,
} from '@mui/material';

import { IFormValues, IFormWatch } from 'routes/Main/type';

import SectionTitle from '../../components/SectionTitle';

import {
  StyledTableCellTwo,
  StyledTableCellWithoutLeftTwo,
  StyledTableCellWithoutLeftRightTwo,
} from 'routes/Main/style';

interface Props extends IFormValues, IFormWatch {
  disabled?: boolean;
}

const CheckList4 = (props: Props) => {
  const { setValue, getValues, disabled } = props;

  const radioId = ['surgery01', 'surgery02', 'surgery03'];

  const 수술 = [
    {
      id: 1,
      ko: '수술',
      desc: [
        `"수술 전 처지 및 간호상태 확인"을 작성했으며 서식의 '수술일'은 실제 수술일인가?\n(수술 전날 작성해도 수술일로 바꿔야함- 처음 작성시 바꾸고 수술보내면서 재확인함)`,
      ],
    },
    {
      id: 2,
      ko: '',
      desc: [
        `"수술 전 처지 및 간호상태 확인"서식이 수술 보내는 시점에 전자서명이 되었는가?`,
      ],
    },
    {
      id: 3,
      ko: '',
      desc: [
        '수술[시술, 검사], 수혈동의서와 마취동의서를 작성하였는가?(동의서 보관 or 스캔 or 스캔의뢰)',
      ],
    },
  ];

  const radioId1 = ['medicine01', 'medicine02'];

  const 자가약관리 = [
    {
      id: 1,
      ko: '자가약  관리',
      desc: [
        `복용중인 약이 있으며 약을 모르는 경우 '약품식별의뢰' 처방이 있는가?`,
      ],
    },
    {
      id: 2,
      ko: '',
      desc: [
        '자가약을 투약하는 경우 반드시 자가약 처방을 받고 실시 버튼을 이용하여 기록하는 가?',
      ],
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(e.target.name, e.target.value);
  };

  return (
    <Fragment>
      <SectionTitle title="수술환자" />
      <Grid item xs={12}>
        <div style={{ display: 'table-row' }}>
          {수술.map(
            (content: { id: number; ko: string; desc: string[] }, i) => {
              return (
                <TableRow sx={{ display: 'block' }}>
                  <StyledTableCellTwo
                    align="left"
                    sx={{
                      paddingTop: '16px',
                      paddingBottom: '16px',
                      width: '200px',
                      whiteSpace: 'pre-wrap',
                      minWidth: '150px',
                    }}
                  >
                    {content.ko}
                  </StyledTableCellTwo>

                  <StyledTableCellWithoutLeftRightTwo>
                    {content.desc.map((v, i) => {
                      if (v.includes('\n')) {
                        return (
                          <TableRow
                            sx={{
                              height: '44px',
                              lineHeight: '33px',
                            }}
                          >
                            <Box
                              sx={{
                                paddingLeft: '1vw',
                                width: '56vw',
                                minWidth: '800px',
                                whiteSpace: 'pre-wrap',
                              }}
                            >
                              {v}
                            </Box>
                          </TableRow>
                        );
                      } else {
                        return (
                          <TableRow
                            sx={{
                              paddingTop: '10px',
                              height: '44px',
                              lineHeight: '44px',
                            }}
                          >
                            <Box
                              sx={{
                                paddingLeft: '1vw',
                                width: '56vw',
                                minWidth: '800px',
                              }}
                            >
                              {v}
                            </Box>
                          </TableRow>
                        );
                      }
                    })}
                  </StyledTableCellWithoutLeftRightTwo>
                  <StyledTableCellWithoutLeftTwo>
                    <RadioGroup
                      name={radioId[content.id - 1]}
                      defaultValue={
                        Number(getValues(radioId[content.id - 1])) > 0
                          ? Number(getValues(radioId[content.id - 1]))
                          : 4
                      }
                    >
                      {content.desc.map((_, i) => (
                        <TableRow
                          sx={{
                            height: '44px',
                            lineHeight: '44px',
                            textAlign: 'right',
                          }}
                        >
                          <Box sx={{ width: '240px' }}>
                            <FormControlLabel
                              sx={{ paddingRight: '35px' }}
                              label="Y"
                              control={
                                <Radio
                                  disabled={disabled}
                                  name={radioId[content.id - 1]}
                                  onChange={handleChange}
                                  value={1}
                                />
                              }
                            />
                            <FormControlLabel
                              sx={{ paddingRight: '30px' }}
                              label="N"
                              control={
                                <Radio
                                  disabled={disabled}
                                  name={radioId[content.id - 1]}
                                  onChange={handleChange}
                                  value={2}
                                />
                              }
                            />
                            <FormControlLabel
                              label="해당없음"
                              control={
                                <Radio
                                  disabled={disabled}
                                  name={radioId[content.id - 1]}
                                  onChange={handleChange}
                                  value={3}
                                />
                              }
                            />
                          </Box>
                        </TableRow>
                      ))}
                    </RadioGroup>
                  </StyledTableCellWithoutLeftTwo>
                </TableRow>
              );
            }
          )}
        </div>
      </Grid>

      <SectionTitle title="자가약 관리" />
      <Grid item xs={12}>
        <div style={{ display: 'table-row' }}>
          {자가약관리.map(
            (content: { id: number; ko: string; desc: string[] }, i) => {
              return (
                <TableRow sx={{ display: 'block' }}>
                  <StyledTableCellTwo
                    align="left"
                    sx={{
                      paddingTop: '16px',
                      paddingBottom: '16px',
                      width: '200px',
                      whiteSpace: 'pre-wrap',
                    }}
                  >
                    {content.ko}
                  </StyledTableCellTwo>

                  <StyledTableCellWithoutLeftRightTwo>
                    {content.desc.map((v, i) => {
                      if (v.includes('\n')) {
                        return (
                          <TableRow
                            sx={{
                              height: '44px',
                              lineHeight: '33px',
                            }}
                          >
                            <Box
                              sx={{
                                paddingLeft: '1vw',
                                width: '54vw',
                                whiteSpace: 'pre-wrap',
                                minWidth: '800px',
                              }}
                            >
                              {v}
                            </Box>
                          </TableRow>
                        );
                      } else {
                        return (
                          <TableRow
                            sx={{
                              paddingTop: '10px',
                              height: '44px',
                              lineHeight: '44px',
                            }}
                          >
                            <Box
                              sx={{
                                paddingLeft: '1vw',
                                width: '56vw',
                                minWidth: '800px',
                              }}
                            >
                              {v}
                            </Box>
                          </TableRow>
                        );
                      }
                    })}
                  </StyledTableCellWithoutLeftRightTwo>
                  <StyledTableCellWithoutLeftTwo>
                    <RadioGroup
                      name={radioId1[content.id - 1]}
                      defaultValue={
                        Number(getValues(radioId1[content.id - 1])) > 0
                          ? Number(getValues(radioId1[content.id - 1]))
                          : 4
                      }
                    >
                      {content.desc.map((_, i) => (
                        <TableRow
                          sx={{
                            height: '44px',
                            lineHeight: '44px',
                            textAlign: 'right',
                          }}
                        >
                          <Box sx={{ width: '240px' }}>
                            <FormControlLabel
                              sx={{ paddingRight: '35px' }}
                              label="Y"
                              control={
                                <Radio
                                  disabled={disabled}
                                  name={radioId1[content.id - 1]}
                                  onChange={handleChange}
                                  value={1}
                                />
                              }
                            />
                            <FormControlLabel
                              sx={{ paddingRight: '30px' }}
                              label="N"
                              control={
                                <Radio
                                  disabled={disabled}
                                  name={radioId1[content.id - 1]}
                                  onChange={handleChange}
                                  value={2}
                                />
                              }
                            />
                            <FormControlLabel
                              label="해당없음"
                              control={
                                <Radio
                                  disabled={disabled}
                                  name={radioId1[content.id - 1]}
                                  onChange={handleChange}
                                  value={3}
                                />
                              }
                            />
                          </Box>
                        </TableRow>
                      ))}
                    </RadioGroup>
                  </StyledTableCellWithoutLeftTwo>
                </TableRow>
              );
            }
          )}
        </div>
      </Grid>
    </Fragment>
  );
};

export default CheckList4;
