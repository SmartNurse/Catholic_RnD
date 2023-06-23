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

const CheckList2 = (props: Props) => {
  const { setValue, getValues, disabled } = props;

  const radioId = [
    '낙상위험요인평가1',
    '낙상위험요인평가2',
    '낙상위험요인평가3',
    '낙상위험요인평가4',
    '낙상위험요인평가5',
  ];

  const 낙상 = [
    {
      id: 1,
      ko: '낙상위험요인평가',
      desc: [
        '입원시 24시간 이내에 “낙상위험요인평가"를 하였는가? (전자서명 기준 입원일과 작성일일치)',
      ],
    },
    {
      id: 2,
      ko: '',
      desc: [
        '낙상평가 위험요인들을 올바르게 평가하고 기록하였는가? (평가내용이 모두 기록되었는지)',
      ],
    },
    {
      id: 3,
      ko: '',
      desc: ['낙상위험요인평가점수와 사유를 입력하였는가?'],
    },
    {
      id: 4,
      ko: '',
      desc: [
        '환자상태 변화없을 때 7일마다 재평가하였는가? (입원일+매주 토요일 Evening)',
      ],
    },
    {
      id: 5,
      ko: '',
      desc: [
        '환자상태 변화시 재평가하였는가? (병동이동, 수술, 침습적 검사/시술, 고위험약물, 장애 발생)',
      ],
    },
  ];

  const radioId1 = [
    '욕창위험요인평가1',
    '욕창위험요인평가2',
    '욕창위험요인평가3',
    '욕창위험요인평가4',
    '욕창위험요인평가5',
  ];

  const 욕창 = [
    {
      id: 1,
      ko: '욕창위험요인평가',
      desc: [
        '입원시 24시간 이내에 “욕창위험요인평가"를 하였는가?(전자서명 기준 입원일과 작성일일치)',
      ],
    },
    {
      id: 2,
      ko: '',
      desc: [
        '욕창평가 위험요인들을 올바르게 평가하고 기록하였는가?(평가내용이 모두 기록되었는지)',
      ],
    },
    {
      id: 3,
      ko: '',
      desc: ['욕창위험요인평가점수와 사유를 입력하였는가?'],
    },
    {
      id: 4,
      ko: '',
      desc: [
        '환자상태 변화없을 때 7일마다 재평가하였는가?(입원일+매주 토요일 Evening)',
      ],
    },
    {
      id: 5,
      ko: '',
      desc: ['환자상태 변화시 재평가하였는가? (병동이동, 수술, 장애발생)'],
    },
  ];
  return (
    <Fragment>
      <SectionTitle title="낙상" />
      <Grid item xs={12}>
        <div style={{ display: 'table-row' }}>
          {낙상.map(
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
                      defaultValue={Number(getValues(radioId[content.id - 1]))}
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
                                  value={i}
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
                                  value={i + 1}
                                />
                              }
                            />
                            <FormControlLabel
                              label="해당없음"
                              control={
                                <Radio
                                  disabled={disabled}
                                  name={radioId[content.id - 1]}
                                  value={i + 2}
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

      <SectionTitle title="욕창" />
      <Grid item xs={12}>
        <div style={{ display: 'table-row' }}>
          {욕창.map(
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
                      name={radioId1[content.id - 1]}
                      defaultValue={Number(getValues(radioId1[content.id - 1]))}
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
                                  value={i}
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
                                  value={i + 1}
                                />
                              }
                            />
                            <FormControlLabel
                              label="해당없음"
                              control={
                                <Radio
                                  disabled={disabled}
                                  name={radioId[content.id - 1]}
                                  value={i + 2}
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

export default CheckList2;
