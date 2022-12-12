import { Fragment } from 'react';
import { Box, Grid, Typography } from '@mui/material';

import MuiTable from 'components/MuiTable';
import { IFormValues, IFormWatch } from 'routes/Main/type';

import SectionTitle from '../components/SectionTitle';
import useTableForm from '../hooks/useTableForm';

interface Props extends IFormValues, IFormWatch {}

const BedScoreContents = (props: Props) => {
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
        i18nKey: 'BED.SCORE.SENSORY.PERCEPTION',
      }),
    },
    {
      id: 'humidity',
      title: '습기',
      ...radioGroup({
        key: 'contents.humidity',
        options: [1, 2, 3, 4],
        i18nKey: 'BED.SCORE.HUMIDITY',
      }),
    },
    {
      id: 'activity',
      title: '활동',
      ...radioGroup({
        key: 'contents.activity',
        options: [1, 2, 3, 4],
        i18nKey: 'BED.SCORE.ACTIVITY',
      }),
    },
    {
      id: 'mobility',
      title: '기동성',
      ...radioGroup({
        key: 'contents.mobility',
        options: [1, 2, 3, 4],
        i18nKey: 'BED.SCORE.MOBILITY',
      }),
    },
    {
      id: 'nutrition',
      title: '영양',
      ...radioGroup({
        key: 'contents.nutrition',
        options: [1, 2, 3, 4],
        i18nKey: 'BED.SCORE.NUTRITION',
      }),
    },
    {
      id: 'frictionAndDissolutionForce',
      title: '마찰력과 응전력',
      ...radioGroup({
        key: 'contents.frictionAndDissolutionForce',
        options: [1, 2, 3],
        i18nKey: 'BED.SCORE.FRICTION',
      }),
    },
  ];

  const watchSumValues = () => {
    const values = rows.map(({ id }) => Number(props.watch(`contents.${id}`)));
    return sumValues(values);
  };

  return (
    <Fragment>
      <SectionTitle title="욕창위험도평가" />
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
          <Typography minWidth={115} color="#0D7E54" variant="caption">
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5}>
                초고위험군:
              </Box>
              9점 이하
            </Typography>
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5}>
                고위험군:
              </Box>
              10 - 12점
            </Typography>
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5}>
                중위험군:
              </Box>
              13 - 15점
            </Typography>
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5}>
                저위험군:
              </Box>
              15 - 18점
            </Typography>
          </Typography>
        </Box>
      </Grid>
    </Fragment>
  );
};

export default BedScoreContents;
