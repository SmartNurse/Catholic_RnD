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

const CheckList = (props: Props) => {
  const { setValue, getValues, disabled } = props;

  const radioId = [
    '간호정보조사1',
    '간호정보조사2',
    '간호정보조사3',
    '간호정보조사4',
  ];

  const contentLabel = [
    {
      id: 1,
      ko: '간호정보조사',
      desc: [
        '입원시 초기간호평가는 24시간 이내에 이루어 졌는가?(전자서명 기준 입원일과 작성일이 일치)',
      ],
    },
    {
      id: 2,
      ko: '',
      desc: [
        '환자에 맞는 간호정보조사 서식을 사용하였는가?\n[성인, 정신, 산모(유산된 환자도 포함), 성인재활, 신생아, 영유아기, 학령전기, 소아 및 청소년]',
      ],
    },
    {
      id: 3,
      ko: '',
      desc: [
        "각 항목을 빠짐없이 정확하게 기록했는가? (과거력, 음주, 흡연력은 의사의 입원기록과 일치되도록 함)\n(항암, 방사선치료, 면역질환은 '주증상 및 내원과정'에 반드시 기입하도록. 예시: 항암치료위해 입원함)\n*면역질환은 백혈병, 재생불량성 빈혈, 다발성 골수종, 림프종, 골수이형성증후군",
      ],
    },
    {
      id: 4,
      ko: '정서적 상태',
      desc: [
        '정서적 상태가 불안으로 되어 있는가? (무의식 환자는 기타 > 사유 입력)',
      ],
    },
  ];

  return (
    <Fragment>
      <SectionTitle title="간호정보조사" />
      <Grid item xs={12}>
        <div style={{ display: 'table-row' }}>
          {contentLabel.map(
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
    </Fragment>
  );
};

export default CheckList;
