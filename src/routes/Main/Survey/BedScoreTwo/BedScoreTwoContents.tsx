import { Fragment } from 'react';
import { Box, Grid, Typography, useTheme } from '@mui/material';

import MuiTable from 'components/MuiTable';
import { IFormValues, IFormWatch } from 'routes/Main/type';

import SectionTitle from '../components/SectionTitle';
import useTableForm from '../hooks/useTableForm';

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
      title: '감각지각',
      ...radioGroup({
        key: 'contents.sensoryPerception',
        options: [1, 2, 3, 4],
        i18nKey: 'BED.SCORETWO.SENSORY.PERCEPTION',
      }),
    },
    {
      id: 'humidity',
      title: '습기정도',
      ...radioGroup({
        key: 'contents.humidity',
        options: [1, 2, 3, 4],
        i18nKey: 'BED.SCORETWO.HUMIDITY',
      }),
    },
    {
      id: 'activity',
      title: '활동정도',
      ...radioGroup({
        key: 'contents.activity',
        options: [1, 2, 3, 4],
        i18nKey: 'BED.SCORETWO.ACTIVITY',
      }),
    },
    {
      id: 'mobility',
      title: '기동력',
      ...radioGroup({
        key: 'contents.mobility',
        options: [1, 2, 3, 4],
        i18nKey: 'BED.SCORETWO.MOBILITY',
      }),
    },
    {
      id: 'nutrition',
      title: '영양상태',
      ...radioGroup({
        key: 'contents.nutrition',
        options: [1, 2, 3, 4],
        i18nKey: 'BED.SCORETWO.NUTRITION',
      }),
    },
    {
      id: 'frictionAndDissolutionForce',
      title: '마찰력과 응전력',
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
        <MuiTable columns={columns} rows={rows} />
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
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5}>
                9점 이하:
              </Box>
              초고위험군
            </Typography>
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5}>
                10 - 12점:
              </Box>
              위험군
            </Typography>
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5}>
                13 - 14점:
              </Box>
              중위험군
            </Typography>
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5}>
                15 - 18점:
              </Box>
              저위험군
            </Typography>
            <Typography variant="inherit">
              *점수가 낮을 수록 욕창 위험이 높음을 의미
            </Typography>
            <Typography variant="inherit">
              *입원 24시간 이내 평가
            </Typography>
            <Typography variant="inherit">
              *주 1회, 환자상태 변화 시 재평가
            </Typography>
            <Typography variant="inherit">
            </Typography>
            <Typography variant="inherit">
              *해당 기록지는 우석대학교 간호학과 협조를 통해 제작하였습니다.
            </Typography>
          </Typography>
        </Box>
      </Grid>
    </Fragment>
  );
};

export default BedScoreContents;
