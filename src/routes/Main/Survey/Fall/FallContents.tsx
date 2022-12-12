import { Fragment } from 'react';
import { Box, Grid, Typography } from '@mui/material';

import MuiTable from 'components/MuiTable';
import { IFormValues, IFormWatch } from 'routes/Main/type';

import SectionTitle from '../components/SectionTitle';
import useTableForm from '../hooks/useTableForm';

interface Props extends IFormValues, IFormWatch {
  disabled?: boolean;
}

const FallContents = (props: Props) => {
  const { radioGroup, sumValues } = useTableForm(props);

  const columns = [
    { fieldId: 'title', label: '' },
    { fieldId: '0', label: '' },
    { fieldId: '1', label: '' },
    { fieldId: '2', label: '' },
  ];

  const rows = [
    {
      id: 'experience',
      title: '낙상 경험',
      ...radioGroup({
        key: 'contents.experience',
        options: [0, 25],
        i18nKey: 'FALL',
      }),
    },
    {
      id: 'diagnosis',
      title: '이차적 진단',
      ...radioGroup({
        key: 'contents.diagnosis',
        options: [0, 15],
        i18nKey: 'FALL',
      }),
    },
    {
      id: 'walkingAids',
      title: '보행보조기구',
      ...radioGroup({
        key: 'contents.walkingAids',
        options: [0, 15, 30],
        i18nKey: 'FALL.WALKING.AIDS',
      }),
    },
    {
      id: 'intravenousLine',
      title: '정맥주사라인',
      ...radioGroup({
        key: 'contents.intravenousLine',
        options: [0, 20],
        i18nKey: 'FALL',
      }),
    },
    {
      id: 'gait',
      title: '걸음걸이',
      ...radioGroup({
        key: 'contents.gait',
        options: [0, 10, 20],
        i18nKey: 'FALL.GAIT',
      }),
    },
    {
      id: 'consciousness',
      title: '의식상태',
      ...radioGroup({
        key: 'contents.consciousness',
        options: [0, 15],
        i18nKey: 'FALL.CONSCIOUSNESS',
      }),
    },
  ];

  const watchSumValues = () => {
    const values = rows.map(({ id }) => Number(props.watch(`contents.${id}`)));
    return sumValues(values);
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
            minWidth={115}
            fontWeight={700}
            variant="subtitle1"
          >
            합계 : {watchSumValues()}점
          </Typography>
          <Typography minWidth={115} color="#0D7E54" variant="caption">
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
              25점 - 45점
            </Typography>
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5}>
                저위험군:
              </Box>
              0 - 24점
            </Typography>
          </Typography>
        </Box>
      </Grid>
    </Fragment>
  );
};

export default FallContents;
