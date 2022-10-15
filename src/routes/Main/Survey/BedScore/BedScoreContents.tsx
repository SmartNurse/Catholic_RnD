import { Fragment } from 'react';
import { Box, Grid, Typography } from '@mui/material';

import Form from 'components/Form';
import MuiTable from 'components/MuiTable';
import { IFormValues, IFormWatch } from 'routes/Main/Survey/type';

import SectionTitle from '../components/SectionTitle';

interface Props extends IFormValues, IFormWatch {}

const BedScoreContents = (props: Props) => {
  const { watch, getValues, setValue } = props;

  const columns = [
    { fieldId: 'title', label: '평가항목' },
    { fieldId: '1', label: '1점' },
    { fieldId: '2', label: '2점' },
    { fieldId: '3', label: '3점' },
    { fieldId: '4', label: '4점' },
  ];

  const forms = (key: string) => ({
    value: watch(key) && Number(watch(key)),
    defaultValue: getValues(key),
    onChange: (v: any) => setValue(key, v),
  });

  const rowRadioGroup = (length: number, i18nKey: string, key: string) => {
    let groups = {} as any;
    for (let i = 1; i <= length; i++) {
      groups[i] = (
        <Form.MuiRadioGroup i18nKey={i18nKey} values={[i]} {...forms(key)} />
      );
    }
    return groups;
  };

  const rows = [
    {
      id: 'sensoryPerception',
      title: '감각지각',
      ...rowRadioGroup(
        4,
        'BED.SCORE.SENSORY.PERCEPTION',
        'contents.sensoryPerception'
      ),
    },
    {
      id: 'humidity',
      title: '습기',
      ...rowRadioGroup(4, 'BED.SCORE.HUMIDITY', 'contents.humidity'),
    },
    {
      id: 'activity',
      title: '활동',
      ...rowRadioGroup(4, 'BED.SCORE.ACTIVITY', 'contents.activity'),
    },
    {
      id: 'mobility',
      title: '기동성',
      ...rowRadioGroup(4, 'BED.SCORE.MOBILITY', 'contents.mobility'),
    },
    {
      id: 'nutrition',
      title: '영양',
      ...rowRadioGroup(4, 'BED.SCORE.NUTRITION', 'contents.nutrition'),
    },
    {
      id: 'frictionAndDissolutionForce',
      title: '영양',
      ...rowRadioGroup(
        3,
        'BED.SCORE.FRICTION',
        'contents.frictionAndDissolutionForce'
      ),
    },
  ];

  const sumValues = rows.reduce(
    (prev, next) => prev + Number(watch(`contents.${next.id}`)),
    0
  );

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
            합계 : {sumValues}점
          </Typography>
          <Typography minWidth={115} color="#2264A8" variant="caption">
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
