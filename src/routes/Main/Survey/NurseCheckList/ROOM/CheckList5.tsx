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

const CheckList5 = (props: Props) => {
  const { setValue, getValues, disabled } = props;

  const radioId = [
    '입원시간호기록1',
    '입원시간호기록2',
    '입원시간호기록3',
    '입원시간호기록4',
    '입원시간호기록5',
    '입원시간호기록6',
    '입원시간호기록7',
    '입원시간호기록8',
  ];

  const contentLabel = [
    {
      id: 1,
      ko: '입원',
      desc: [
        `프로토콜 '입원'을 사용하여 기록하였는가? (환자권리장전, 낙상예방지침, 금연 포함)`,
      ],
    },
    {
      id: 2,
      ko: '금연',
      desc: [
        `호흡기 질환이 있으며 현재 흡연을 하는 환자의 경우 금연에 대해 설명하고 \n"지식부족 > 질병에 대해 설명함 > 교육내용(질병) > 금연"으로 기록하였는가?`,
      ],
    },
    {
      id: 3,
      ko: '정서적 지지',
      desc: [`"불안"을 통해 정서적 지지에 대해 간호기록을 하였는가?`],
    },
    {
      id: 4,
      ko: '교육',
      desc: [
        '환자교육 요구도에 따라 약물(자가약 포함), 검사, 시술, 질병 등에 대해 교육을 하고 기록하였는가?\n(자가약이 있는 경우 복용여부를 반드시 교육해야함)',
      ],
    },
    {
      id: 5,
      ko: '낙상간호',
      desc: [
        `낙상위험요인평가 점수가 2점 이상인 경우 간호진단 '낙상의 위험' 을사용하여 기록하였는가?\n(낙상고위험군은 낙상고위험군임을 알리고 낙상고위험 표지판 부착한 것을 기록하였는가?\n낙상고고위험군은 낙상고고위험군임을 알리고 낙상고위험 표지판 부착하고 낙상주의 팔찌 부착한 것을 기록하였는가?)\n(낙상점수가 2점 미만인 경우에는 '낙상의위험'으로 기록하면 안됨)`,
      ],
    },
    {
      id: 6,
      ko: '욕창간호',
      desc: [
        `욕창위험요인 평가 점수가 16점 이하인 경우 "피부통합성장애(의 위험)"으로 기록하였는가?\n(욕창예방활동, 욕창평가, 드레싱 등)`,
      ],
    },
    {
      id: 7,
      ko: '임상관찰기록지',
      desc: ['입원시 혈압, 체온, 맥박, 호흡과 체중, 키가 입력되어 있는가?'],
    },
    {
      id: 8,
      ko: '간호정보조사',
      desc: [
        `간호정보조사지 작성 후 "상황변수 가져오기"에서 구분이 "서식"으로 제시되는 간호진단에 대하여 간호행위를 하고 기록하였는가?\n(불안, 자가간호결핍 등)`,
      ],
    },
  ];

  return (
    <Fragment>
      <SectionTitle title="입원시 간호 기록" />
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

export default CheckList5;
