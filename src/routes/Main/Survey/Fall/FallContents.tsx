import { Fragment } from 'react';
import { Box, Grid, Typography } from '@mui/material';

import Form from 'components/Form';
import MuiTable from 'components/MuiTable';
import { IFormValues, IFormWatch } from 'routes/Main/type';

import SectionTitle from '../components/SectionTitle';

interface Props extends IFormValues, IFormWatch {}

const FallContents = (props: Props) => {
  const { watch, getValues, setValue } = props;

  const columns = [
    { fieldId: 'title', label: '' },
    { fieldId: '0', label: '' },
    { fieldId: '1', label: '' },
    { fieldId: '2', label: '' },
  ];

  const forms = (key: string) => ({
    value: watch(key) && Number(watch(key)),
    defaultValue: getValues(key),
    onChange: (v: any) => setValue(key, v),
  });

  const rows = [
    {
      id: 'experience',
      title: '낙상 경험',
      0: (
        <Form.MuiRadioGroup
          i18nNullKey="FALL.0"
          i18nKey="FALL"
          values={[0]}
          {...forms('contents.experience')}
        />
      ),
      1: (
        <Form.MuiRadioGroup
          i18nKey="FALL"
          values={[25]}
          {...forms('contents.experience')}
        />
      ),
    },
    {
      id: 'diagnosis',
      title: '이차적 진단',
      0: (
        <Form.MuiRadioGroup
          i18nNullKey="FALL.0"
          i18nKey="FALL"
          values={[0]}
          {...forms('contents.diagnosis')}
        />
      ),
      1: (
        <Form.MuiRadioGroup
          i18nKey="FALL"
          values={[15]}
          {...forms('contents.diagnosis')}
        />
      ),
    },
    {
      id: 'walkingAids',
      title: '보행보조기구',
      0: (
        <Form.MuiRadioGroup
          i18nNullKey="FALL.WALKING.AIDS.0"
          i18nKey="FALL.WALKING.AIDS"
          values={[0]}
          {...forms('contents.walkingAids')}
        />
      ),
      1: (
        <Form.MuiRadioGroup
          i18nKey="FALL.WALKING.AIDS"
          values={[15]}
          {...forms('contents.walkingAids')}
        />
      ),
      2: (
        <Form.MuiRadioGroup
          i18nKey="FALL.WALKING.AIDS"
          values={[30]}
          {...forms('contents.walkingAids')}
        />
      ),
    },
    {
      id: 'intravenousLine',
      title: '정맥주사라인',
      0: (
        <Form.MuiRadioGroup
          i18nNullKey="FALL.0"
          i18nKey="FALL"
          values={[0]}
          {...forms('contents.intravenousLine')}
        />
      ),
      1: (
        <Form.MuiRadioGroup
          i18nKey="FALL"
          values={[20]}
          {...forms('contents.intravenousLine')}
        />
      ),
    },
    {
      id: 'gait',
      title: '걸음걸이',
      0: (
        <Form.MuiRadioGroup
          i18nNullKey="FALL.GAIT.0"
          i18nKey="FALL.GAIT"
          values={[0]}
          {...forms('contents.gait')}
        />
      ),
      1: (
        <Form.MuiRadioGroup
          i18nKey="FALL.GAIT"
          values={[10]}
          {...forms('contents.gait')}
        />
      ),
      2: (
        <Form.MuiRadioGroup
          i18nKey="FALL.GAIT"
          values={[20]}
          {...forms('contents.gait')}
        />
      ),
    },
    {
      id: 'consciousness',
      title: '의식상태',
      0: (
        <Form.MuiRadioGroup
          i18nNullKey="FALL.0"
          i18nKey="FALL"
          values={[0]}
          {...forms('contents.consciousness')}
        />
      ),
      1: (
        <Form.MuiRadioGroup
          i18nKey="FALL"
          values={[15]}
          {...forms('contents.consciousness')}
        />
      ),
    },
  ];

  const sumValues = () => {
    return rows.reduce(
      (prev, next) => prev + Number(watch(`contents.${next.id}`)),
      0
    );
  };

  return (
    <Fragment>
      <SectionTitle title="낙상위험도평가" />
      <Grid item xs={12}>
        <MuiTable columns={columns} rows={rows} />
      </Grid>
      <Grid item xs={12}>
        <Box display={'flex'} flexDirection={'column'} alignItems={'flex-end'}>
          <Typography
            gutterBottom
            minWidth={114}
            fontWeight={700}
            variant="subtitle1"
          >
            합계 : {sumValues()}점
          </Typography>
          <Typography color="#2264A8" variant="caption">
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5}>
                고위험군:
              </Box>
              45점 이상
            </Typography>
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5}>
                중위험군:
              </Box>
              25점 ~ 45점
            </Typography>
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5}>
                저위험군:
              </Box>
              0 ~ 24점
            </Typography>
          </Typography>
        </Box>
      </Grid>
    </Fragment>
  );
};

export default FallContents;
