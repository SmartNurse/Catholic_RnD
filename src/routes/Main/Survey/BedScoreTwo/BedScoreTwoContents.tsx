import { Fragment } from 'react';
import { Box, Grid, Typography, useTheme } from '@mui/material';

import Table from './../BedScoreTwo/Table';
import { IFormValues, IFormWatch } from 'routes/Main/type';

import SectionTitle from '../components/SectionTitle';
import useTableForm from '../hooks/useTableForm';
import { ReactComponent as Question} from './../../../../assets/blueQuestion.svg'; 

interface Props extends IFormValues, IFormWatch {}

const BedScoreContents = (props: Props) => {
  const { palette } = useTheme();
  const { radioGroup, sumValues } = useTableForm(props);

  const columns = [
    { fieldId: 'title', label: '평가항목' },
    { fieldId: '0', label: '1점' },
    { fieldId: '1', label: '2점' },
    { fieldId: '2', label: '3점' },
    { fieldId: '3', label: '4점' },
  ];

  const rows = [
    {
      id: 'sensoryPerception',
      title: '감각인지',
      toolTipContents: [
        {
            title : '완전제한',
            contents : '의식이 저하되거나 진정제로 인해 통증자극에 대해 전혀 반응이 없음 즉 신음이 움찔거리거나 손을 쥐지 않음 또는 신체의 대부분에 감각이 떨어짐'
        },
        {
            title : '매우제한',
            contents : '통증자극에만 반응하고 신음하거나 안절부절 못하는 것 외에는 불편감을 호소하지 못함 또는 신체의 1/2 이상의 감각이 떨어짐'
        },
        {
            title : '약간제한',
            contents : '언어적 지시에 반응은 보이나 항상 불편감에 대한 의사소통을 보이지는 않음 또는 1개 또는 2개 사지의 감각이 떨어짐'
        },
        {
            title : '장애없음',
            contents : '구두로 요구를 표현할 수 있으며 감각 기능장애가 전혀 없음'
        }
      ],
      ...radioGroup({
        key: 'contents.sensoryPerception',
        options: [1, 2, 3, 4],
        i18nKey: 'BED.SCORETWO.SENSORY.PERCEPTION',
      }),
    },
    {
      id: 'humidity',
      title: '습기정도',
      toolTipContents:[
        {
            title : '지속적으로 습함',
            contents : '땀, 소변 등으로 피부가 계속 습한 상태임. 환자를 이동하거나 돌려 눕힐 때 항상 축축하게 전혀 있는 것을 볼 수 있음. 기저귀를 매일 착용하고 교환해줘야 함'
        },
        {
            title : '습함',
            contents : '항상은 아니나 자주 습한 상태임. \n 적어도 8시간마다 침대시트를 교환해야 함(3회/일)'
        },
        {
            title : '때때로습함',
            contents : '하루에 한번 정도로 린넨을 교환할 정도로 습한 상태(1회/일)'
        },
        {
            title : '거의습하지않음',
            contents : '피부가 거의 습하지 않음. \n정해진 간격으로 린넨을 교환하여도 됨'
        }
      ],
      ...radioGroup({
        key: 'contents.humidity',
        options: [1, 2, 3, 4],
        i18nKey: 'BED.SCORETWO.HUMIDITY',
      }),
    },
    {
      id: 'activity',
      title: '활동정도',
      toolTipContents:[
        {
            title : '침상안정',
            contents : '계속적으로 침대에 누워있어야 함'
        },
        {
            title : '의자에 앉을 수 있음',
            contents : '보행능력이 없거나 매우 제한됨. 몸을 지탱할 수 없거나 의자나 휠체어로 옮길 때 도움이 필요로 함'
        },
        {
            title : '때때로보행',
            contents : '낮 동안은 때때로 걸으나 짧은 거리만 가능함. \n대부분을 침대나 의자에서 보냄'
        },
        {
            title : '정상',
            contents : '적어도 하루에 두 번 정도는 산책할 수 있음'
        }
      ],
      ...radioGroup({
        key: 'contents.activity',
        options: [1, 2, 3, 4],
        i18nKey: 'BED.SCORETWO.ACTIVITY',
      }),
    },
    {
      id: 'mobility',
      title: '기동력',
      toolTipContents: [
        {
            title : '전혀없음',
            contents : '도움 없이는 신체나 사지를 전혀 움직이지 못함'
        },
        {
            title : '매우제한',
            contents : '가끔 신체나 사지를 움직일 수 있으나 혼자서 자주 하지는 않음'
        },
        {
            title : '약간제한',
            contents : '몸이나 사지를 독립적으로 자주 약간 움직이면서 자세를 바꿈'
        },
        {
            title : '정상',
            contents : '도움 없이도 자주 체위변경 가능함'
        }
      ],
      ...radioGroup({
        key: 'contents.mobility',
        options: [1, 2, 3, 4],
        i18nKey: 'BED.SCORETWO.MOBILITY',
      }),
    },
    {
      id: 'nutrition',
      title: '영양상태',
      toolTipContents:[
        {
            title : '불량',
            contents : '식사의 1/3 이상을 섭취하지 못하고 수분섭취도 부족함. \n금식 중이거나 수액치료 중임'
        },
        {
            title : '부적절함',
            contents : '식사의 1/2 정도를 섭취함. \n적은 양의 미음을 섭취하거나 Tube feeding함'
        },
        {
            title : '적절함',
            contents : '식사의 1/2 이상을 먹음.\nTube feeding이나 TPN으로 대부분의 영양요구가 충당됨'
        },
        {
            title : '정상',
            contents : '잘 먹음. 가끔 간식도 섭취하여 보충이 필요 없음'
        }
      ],
      ...radioGroup({
        key: 'contents.nutrition',
        options: [1, 2, 3, 4],
        i18nKey: 'BED.SCORETWO.NUTRITION',
      }),
    },
    {
      id: 'frictionAndDissolutionForce',
      title: '마찰력과 응전력',
      toolTipContents:[
        {
            title : '문제있음',
            contents : '이동시 많은 도움을 필요로 하며 끌지 않고 완전히 옮기기 불가능함. 종종 침대나 의자에게 미끄러져 자세를 다시 취해야 함. 경직, 경축, 초조가 계속적으로 마찰을 일으킴'
        },
        {
            title : '잠재적문제있음',
            contents : '최소한의 도움을 받아 움직일 수 있음. 이동시 시트, 의자, 억제대나 다른 도구에 약간 끌림. 때때로 미끄러지나 의자나 침대에서 대부분은 좋은 자세를 유지함'
        },
        {
            title : '문제없음',
            contents : '침대나 의자에서 혼자 움직일 수 있고 움직이는 동안은 몸을 들어 올릴 수 있음. 침대나 의자에서 좋은 자세를 유지할 수 있음'
        }
      ],
      ...radioGroup({
        key: 'contents.frictionAndDissolutionForce',
        options: [1, 2, 3],
        i18nKey: 'BED.SCORETWO.FRICTION',
      }),
    },
  ];


  const watchSumValues = () => {
    const values = rows.map(({ id }) => Number(props.watch(`contents.${id}`)));
    return sumValues(values);
  };

  return (
    <Fragment>
      <SectionTitle title="욕창위험 평가도구 II" />
      <Grid item xs={12}>
        <Table columns={columns} rows={rows} />
      </Grid>
      <Grid item xs={12}>
        <Box display={'flex'} flexDirection={'column'} alignItems={'flex-end'}>
          <Typography
            gutterBottom
            minWidth={115}
            fontWeight={700}
            variant="subtitle1"
          >
            합계 : {watchSumValues()}점
          </Typography>
          <Typography minWidth={115} variant="caption" sx={{ color: "#2264A8" }}>
            <Typography variant="inherit" sx={{marginLeft:"30px"}}>
              <Box component={'strong'} mr={0.5}>
                9점 이하:
              </Box>
              초고위험군
            </Typography>
            <Typography variant="inherit" sx={{marginLeft:"30px"}}>
              <Box component={'strong'} mr={0.5}>
                10 - 12점:
              </Box>
              위험군
            </Typography>
            <Typography variant="inherit" sx={{marginLeft:"30px"}}>
              <Box component={'strong'} mr={0.5}>
                13 - 14점:
              </Box>
              중위험군
            </Typography>
            <Typography variant="inherit" sx={{marginLeft:"30px"}}>
              <Box component={'strong'} mr={0.5}>
                15 - 18점:
              </Box>
              저위험군
            </Typography>
            <div style={{display:"flex"}}>
            <Typography variant="inherit" sx={{marginLeft:"15px"}}>
              <Question 
                style={{blockSize:"14px"}}
              /> 클릭하여 상세 설명을 확인할 수 있습니다.
            </Typography>
            </div>
            <Typography variant="inherit" sx={{marginLeft:"30px"}}>
              *입원 24시간 이내 평가
            </Typography>
            <Typography variant="inherit" sx={{marginLeft:"30px"}}>
              *주 1회, 환자상태 변화 시 재평가
            </Typography>
            <Typography variant="inherit">
            </Typography>
            <Typography variant="inherit" sx={{marginLeft:"30px"}}>
              *해당 기록지는 우석대학교 간호학과 협조를 통해 제작하였습니다.
            </Typography>
          </Typography>
        </Box>
      </Grid>
    </Fragment>
  );
};

export default BedScoreContents;
