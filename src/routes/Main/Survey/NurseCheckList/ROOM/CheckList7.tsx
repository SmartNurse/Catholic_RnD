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

const CheckList7 = (props: Props) => {
  const { setValue, getValues, disabled } = props;

  const radioId = ['right01'];

  const 사생활보호 = [
    {
      id: 1,
      ko: '사생활보호',
      desc: [
        '입원사실 비공개를 원하는 환자는 “환자정보 비공개” 환자로 등록되어 있는가?',
      ],
    },
  ];

  const radioId1 = ['discharge01', 'discharge02', 'discharge03', 'discharge04'];

  const 퇴원 = [
    {
      id: 1,
      ko: '퇴원요약',
      desc: ['퇴원요약, 퇴원간호기록, 환자용 퇴원요약이 모두 있는가? (총 3개)'],
    },
    {
      id: 2,
      ko: '퇴원간호기록',
      desc: [
        '퇴원간호기록으로 식이, 목욕, 활동범위, 퇴원 후 건강관리, 추후관리에 대한 기록을 하였는가?\n(전원환자 퇴원 후 갈 곳 ‘타병원’ 선택)',
      ],
    },
    {
      id: 3,
      ko: '간호기록',
      desc: [
        '프로토콜 ❛퇴원❜으로 퇴원 후 관리에 대해 기록에 남겼는가?\n(퇴원 절차에 대해 설명함, 약물에 대해 기록함, 퇴원 후 관리에 대해 설명함, 퇴원함)',
      ],
    },
    {
      id: 4,
      ko: '퇴원간호기록',
      desc: ['퇴원시 복용중이던 약이 환자용 퇴원요약지에 기록되어있는가?'],
    },
  ];

  const radioId2 = ['ocs01'];

  const 메모 = [
    {
      id: 1,
      ko: 'OCS 메모관리',
      desc: ['ocs 메모가 관리되고 있는가? (완료된 메모는 완료시켰는가?)'],
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
      <SectionTitle title="권리" />
      <Grid item xs={12}>
        <div style={{ display: 'table-row' }}>
          {사생활보호.map(
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
                    })}
                  </StyledTableCellWithoutLeftRightTwo>
                  <StyledTableCellWithoutLeftTwo>
                    <RadioGroup
                      name={radioId[content.id - 1]}
                      defaultValue={
                        getValues(radioId[content.id - 1]).length > 0
                          ? Number(getValues(radioId[content.id - 1]))
                          : 3
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
                                  onChange={handleChange}
                                  value={1}
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
                                  value={2}
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

      <SectionTitle title="퇴원" />
      <Grid item xs={12}>
        <div style={{ display: 'table-row' }}>
          {퇴원.map(
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
                      defaultValue={
                        getValues(radioId1[content.id - 1]).length > 0
                          ? Number(getValues(radioId[content.id - 1]))
                          : 3
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
                                  name={radioId1[content.id - 1]}
                                  onChange={handleChange}
                                  value={1}
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
                                  value={2}
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

      <SectionTitle title="OCS 메모" />
      <Grid item xs={12}>
        <div style={{ display: 'table-row' }}>
          {메모.map(
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
                    })}
                  </StyledTableCellWithoutLeftRightTwo>
                  <StyledTableCellWithoutLeftTwo>
                    <RadioGroup
                      name={radioId2[content.id - 1]}
                      defaultValue={
                        getValues(radioId2[content.id - 1]).length > 0
                          ? Number(getValues(radioId[content.id - 1]))
                          : 3
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
                                  name={radioId2[content.id - 1]}
                                  onChange={handleChange}
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
                                  name={radioId2[content.id - 1]}
                                  onChange={handleChange}
                                  value={1}
                                />
                              }
                            />
                            <FormControlLabel
                              label="해당없음"
                              control={
                                <Radio
                                  disabled={disabled}
                                  name={radioId2[content.id - 1]}
                                  onChange={handleChange}
                                  value={2}
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

export default CheckList7;
