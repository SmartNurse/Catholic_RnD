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

const CheckList3 = (props: Props) => {
  const { setValue, getValues, disabled } = props;

  const radioId = ['교육1', '교육2'];

  const 교육 = [
    {
      id: 1,
      ko: '교육',
      desc: [
        '간호정보조사지에서 기록된 환자요구도에 있는 내용이 교육현황에서 모두 조회되는가?',
      ],
    },
    {
      id: 2,
      ko: '',
      desc: [
        '교육에 대해 기록할 때 대상자, 교육매체 or 교육방법, 교육내용, 대상자의 학습장애요인, 교육 성취도 or 지식부족의 결과를 모두 포함하였는가?\n(교육 방법-환자에게 적합한 방법)',
      ],
    },
  ];

  const radioId1 = ['CarePlan1', 'CarePlan2', 'CarePlan3'];

  const CarePlan = [
    {
      id: 1,
      ko: '환자별 치료계획',
      desc: [
        '간호진단에 따라 Goal이 적절히 입력되었는가? - Goal에 환자가 가지고 있는 문제가 모두 있어야 함.\n(무의미한 글자와 기호 안됨, 동사형, 괄호는 채우고 환자상태에 따라 구체적으로 입력함)',
      ],
    },
    {
      id: 2,
      ko: '',
      desc: [
        '목표일(수정목표일)이 평가일 보다 지나진 않았는가?\n평가일이 의사가 입력한 퇴원예정일 보다 지난것은 없는가?\n(목표일을 왜 이렇게 세웠는 지 이야기 할 수 있어야함-퇴원일, 완료 예상일 등)',
      ],
    },
    {
      id: 3,
      ko: '',
      desc: [
        '해결된 간호진단은 완료하여 환자상태에 해당되는 Care plan만 남아있는가?',
      ],
    },
  ];
  return (
    <Fragment>
      <SectionTitle title="교육현황" />
      <Grid item xs={12}>
        <div style={{ display: 'table-row' }}>
          {교육.map(
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

      <SectionTitle title="Care Plan" />
      <Grid item xs={12}>
        <div style={{ display: 'table-row' }}>
          {CarePlan.map(
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

export default CheckList3;
