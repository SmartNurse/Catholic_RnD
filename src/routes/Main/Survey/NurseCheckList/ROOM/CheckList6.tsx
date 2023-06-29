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

const CheckList6 = (props: Props) => {
  const { setValue, getValues, disabled } = props;

  const radioId = [
    'ns_fall01',
    'ns_fall02',

    'ns_bedsore01',

    'ns_pt_moving01',
    'ns_pt_moving02',

    'ns_edu01',

    'ns_surgery01',

    'ns_transfusion01',

    'ns_infection01',

    'ns_pain01',
    'ns_pain02',
    'ns_pain03',

    'ns_re_pain01',
    'ns_re_pain02',
    'ns_re_pain03',
    'ns_re_pain04',

    'ns_pca01',
    'ns_pca02',
    'ns_pca03',
    'ns_pca04',

    'ns_nausea01',
    'ns_nausea02',

    'ns_chemo_side_eff01',

    'ns_restraint01',
    'ns_restraint02',
    'ns_restraint03',
    'ns_restraint04',
    'ns_restraint05',

    'ns_high_risk01',
    'ns_high_risk02',
  ];

  const contentLabel = [
    {
      id: 1,
      ko: '낙상간호',
      desc: [
        `낙상고위험군(낙상위험요인 평가 점수가 2점 이상)은 매일 1회 이상 "낙상의 위험"으로 기록이 남겨 있는가?\n(무의미한 교육내용을 반복 기록할 필요는 없음)`,
      ],
    },
    {
      id: 2,
      ko: '',
      desc: [
        '낙상고고위험군(낙상위험요인 평가 점수가 2점 이상이며 항응고제 투여환자)은 근무조별 1회 이상 "낙상의 위험"으로 기록이 남겨 있는가?\n(무의미한 교육내용을 반복 기록할 필요는 없음)',
      ],
    },
    {
      id: 3,
      ko: '욕창간호',
      desc: [
        '욕창위험요인 평가 점수가 16점 이하인 경우 근무조별 1회 이상 "피부통합성 장애(의 위험)"으로 기록하고 처치 실시 현황에 2시간마다\n"Position change"처치가 입력되어있는가?',
      ],
    },
    {
      id: 4,
      ko: '환자이동 시',
      desc: [
        '환자 병동 내 이동시 프로토콜 "Transfer"를 적용하여 간호기록을 남겼는가?(퇴실)',
      ],
    },
    {
      id: 5,
      ko: '',
      desc: [
        '환자 병동 간 이동시 프로토콜 "Transfer"를 적용하여 간호기록을 남겼는가?(퇴실, 입실)\n환자 이동시 환자상태 평가를 하였는가? (이동사유, 동행자, 이동방법, 산소공급상태-적용시, 의식상태, 보조기구-적용시, 투여중인 약물 등)',
      ],
    },
    {
      id: 6,
      ko: '교육',
      desc: [
        '항암제, 고혈압약, 당뇨약, 항경련제, 항응고제, 항혈전제, 면역억제제 첫 투여시, 약물명과 작용과 부작용, 주의사항에 대해 \n교육한 내용이 기록되어있는가? ',
      ],
    },
    {
      id: 7,
      ko: '수술',
      desc: [
        '수술후, 모든 간호진단 완료하고 새로 간호진단 세웠는가? (급성통증, 감염의 위험, 지식부족 필수) ',
      ],
    },
    {
      id: 8,
      ko: '수혈',
      desc: [
        '첫 수혈 전, 첫 수혈 15분 후, 전체 수혈 종료 후 활력징후를 간호기록에 남겼는가?\n(첫 수혈 15분 이내 부작용 기록 포함, 혈액제제 바뀐 경우 15분 후 활력징후와 부작용기록 포함)',
      ],
    },
    {
      id: 9,
      ko: '감염',
      desc: [
        `감염의 위험이 있는 환자는 간호진단 '감염의 위험'으로 간호기록을 남겼는가? 교육내용(감염예방)을 이용하여 기록에 남겼는가?`,
      ],
    },
    {
      id: 10,
      ko: '통증평가',
      desc: [
        '간호정보조사에서 통증이 있는 경우(1점 이상) 간호진단 "급성통증 or 만성통증"을 이용하여 기록하였는가?\n(통증이 0점이면 기록하면 안됨)',
      ],
    },
    {
      id: 11,
      ko: '',
      desc: [
        `통증 '부위'나 '위치', '통증강도', '통증 평가도구', '통증양상', '통증시작시간', '수행한 중재'가 기록되어있는가?\n(통증시작시간은 기록시간과 같을 때는 기록시간으로 대체함)`,
      ],
    },
    {
      id: 12,
      ko: '',
      desc: [
        '통증 호소시, 그리고 수술과 침습적 검사 및 처치 후 통증을 재평가하였는가?',
      ],
    },
    {
      id: 13,
      ko: '통증 재평가',
      desc: [
        `지속적 치료중재시 1일 3회 '통증을 사정함'을 이용하여 통증을 사정하였는가?`,
      ],
    },
    {
      id: 14,
      ko: '',
      desc: [
        '1회성 중재 후, 증상 변화로 투약용법, 용량 변경된 후 투약 2시간이내 재평가하였는가? (흉통은 5분 후)',
      ],
    },
    {
      id: 15,
      ko: '',
      desc: [
        '통증에 대한 치료적 중재는 종료하였으나 1점 이상의 통증이 있을 경우 매일 1회 재평가하였는가? (급성통증, 만성통증 이용)',
      ],
    },
    {
      id: 16,
      ko: '',
      desc: [
        `통증에 대한 치료적 중재가 없으며 통증도 없을 경우(0점) \n급성통증/만성통증을 완료하고 매일 1회 이상 'Routine check up-통증을 사정함-통증강도:0'으로 기록되어있는가?`,
      ],
    },
    {
      id: 17,
      ko: 'PCA 관리',
      desc: [
        'PCA 적용중인 환자는 통증간호기록 원칙에 따라 3회/일 통증을 사정하였는가?',
      ],
    },
    {
      id: 18,
      ko: '',
      desc: [
        'PCA 적용 및 제거 시에는 간호기록에 남기고 제거 후 2시간 이내에 통증을 재평가하였는가?',
      ],
    },
    {
      id: 19,
      ko: '',
      desc: ['PCA 가 잘 주입되고 있는지 duty 별로 간호기록에 기록을 하였는가?'],
    },
    {
      id: 20,
      ko: '',
      desc: ['PCA 의 잔량을 duty별로 간호기록에 기록을 하였는가?'],
    },
    {
      id: 21,
      ko: '오심 평가',
      desc: [
        '2회/일 이상 지속적으로 오심구토제가 투여되는 환자는 매일 2회 이상 투여효과에 대해 기록하였는가?\n(항암제와 함께 예방적 처방시도 포함)',
      ],
    },
    {
      id: 22,
      ko: '',
      desc: [
        '오심구토제 투여환자는 1일 3회 이상 IV site 부작용(정맥주사부위 &주입상태를 관찰함)을 모니터하고 기록하였는가?',
      ],
    },
    {
      id: 23,
      ko: '항암 부작용 모니터링',
      desc: [
        '항암화학요법을 받고 있는 환자는 1일 3회 이상 IV site 부작용(정맥주사부위 & 주입상태를 관찰함)을 모니터하고 기록하였는가?',
      ],
    },
    {
      id: 24,
      ko: '억제대',
      desc: ['억제대 적용환자는 억제대 사용 동의서를 받았는가?'],
    },
    {
      id: 25,
      ko: '',
      desc: [
        `억제대 적용환자는 '부분억제간호 or 전신억제간호'처치처방을 이용하여 억제대 적용처방을 받았는가? \n(억제대 해제시까지 매일 처방이 있어야함)`,
      ],
    },
    {
      id: 26,
      ko: '',
      desc: [
        '억제대 적용 시 "상해의 위험"으로 억제대의 종류, 사용목적, 시행자, 호출수단제공, 교육내용에 대해 기록하였는가?',
      ],
    },
    {
      id: 27,
      ko: '',
      desc: [
        '억제대 적용 후 "상해의 위험"으로 4시간마다 사지감각, 피부색, 피부온도, 움직임을 관찰하여 기록하고 \n8시간마다 억제대 지속여부를 재평가하였는가?',
      ],
    },
    {
      id: 28,
      ko: '',
      desc: ['억제대 제거 시 억제대 제거함을 기록을 하였는가?'],
    },
    {
      id: 29,
      ko: '고위험시술',
      desc: [
        `'Time out함'을 기록하였는가? (고위험수술: Chest tube 삽입, 복막천자, 흉막천자 병동 실시)`,
      ],
    },
    {
      id: 30,
      ko: '',
      desc: [
        '시술 전, 시술 중 15분 간격, 시술 후 30분 간격 2회 vital 포함 환자상태 기록하였는가?\n(이후 활력징후 안정될 때까지 1시간 간격)',
      ],
    },
    {
      id: 31,
      ko: '임종 환자 관리',
      desc: [
        "임종에 임박한 환자는 간호진단 '죽음 불안'으로 기록하였는가? (예: 정서적 지지, 원목실 연결 등)",
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
      <SectionTitle title="간호 기록" />
      <Grid item xs={12}>
        <div style={{ display: 'table-row' }}>
          {contentLabel.map(
            (content: { id: number; ko: string; desc: string[] }, i) => {
              return (
                <TableRow
                  sx={{
                    display: 'block',
                  }}
                >
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
    </Fragment>
  );
};

export default CheckList6;
