import { Fragment } from 'react';
import { Box, Grid, Typography, useTheme } from '@mui/material';

import MuiTable from 'components/MuiTable';
import { IFormValues, IFormWatch } from 'routes/Main/type';

import SectionTitle from '../../components/SectionTitle';
import useTableForm from './components/useTableForm';

interface Props extends IFormValues, IFormWatch {}

const STarTContents = (props: Props) => {
  const { palette } = useTheme();
  const { radioGroup, sumValues } = useTableForm(props);

  const columns = [
    {
      fieldId: 'title',
      label: '',
    },
    {
      fieldId: '0',
      label: '',
      sx: { width: '200px' },
    },
    {
      fieldId: '1',
      label: '',
      sx: { width: '200px' },
    },
    // {
    //   fieldId: '2',
    //   label: '',
    //   sx: { width: '200px' },
    // },
    // {
    //   fieldId: '3',
    //   label: '',
    //   sx: { width: '200px' },
    // },
    // {
    //   fieldId: '4',
    //   label: '',
    //   sx: { width: '200px' },
    // },
  ];

  const rows = [
    {
      id: 'sTarTBack01',
      title:
        '1. My back pain has spread down my leg(s) at some time in the last 2 weeks.',
      ...radioGroup({
        key: 'contents.sTarTBack01',
        options: [1, 2],
        i18nKey: 'STARTSCREENING.SCORE',
        width: '150px',
      }),
    },
    {
      id: 'sTarTBack02',
      title:
        '2. I have had pain in the shoulder or neck at some time in the last 2 weeks.',
      ...radioGroup({
        key: 'contents.sTarTBack02',
        options: [1, 2],
        i18nKey: 'STARTSCREENING.SCORE',
        width: '150px',
      }),
    },
    {
      id: 'sTarTBack03',
      title:
        '3. I have only walked short distances because of my back pain in the last 2 weeks.',
      ...radioGroup({
        key: 'contents.sTarTBack03',
        options: [1, 2],
        i18nKey: 'STARTSCREENING.SCORE',
        width: '150px',
      }),
    },
    {
      id: 'sTarTBack04',
      title:
        '4. In the last 2 weeks, I have dressed more slowly than usual because of back pain.',
      ...radioGroup({
        key: 'contents.sTarTBack04',
        options: [1, 2],
        i18nKey: 'STARTSCREENING.SCORE',
        width: '150px',
      }),
    },
    {
      id: 'sTarTBack05',
      title:
        '5. It is not really safe for a person with a condition like mine to be physically active.',
      ...radioGroup({
        key: 'contents.sTarTBack05',
        options: [1, 2],
        i18nKey: 'STARTSCREENING.SCORE',
        width: '150px',
      }),
    },
    {
      id: 'sTarTBack06',
      title:
        '6. Worrying thoughts have been going through my mind a lot of the time.',
      ...radioGroup({
        key: 'contents.sTarTBack06',
        options: [1, 2],
        i18nKey: 'STARTSCREENING.SCORE',
        width: '150px',
      }),
    },
    {
      id: 'sTarTBack07',
      title:
        "7. I feel that my back pain is terrible and it's never going to get any better.",
      ...radioGroup({
        key: 'contents.sTarTBack07',
        options: [1, 2],
        i18nKey: 'STARTSCREENING.SCORE',
        width: '150px',
      }),
    },
    {
      id: 'sTarTBack08',
      title:
        '8. In general, I have not enjoyed all the things I used to enjoy.',
      ...radioGroup({
        key: 'contents.sTarTBack08',
        options: [1, 2],
        i18nKey: 'STARTSCREENING.SCORE',
        width: '150px',
      }),
    },
    // {
    //   id: 'sTarTBack09',
    //   title:
    //     '9. In general, I have not enjoyed all the things I used to enjoy.',
    //   ...radioGroup({
    //     key: 'contents.sTarTBack09',
    //     options: [0, 1, 2, 3, 4],
    //     i18nKey: 'STARTSCREENING.SCORE.FIVE',
    //     width: '150px',
    //   }),
    // },
  ];

  const watchSumValues = () => {
    const values = rows.map(({ id }) => {
      return Number(props.watch(`contents.${id}`));
    });
    return sumValues(values);
  };

  return (
    <Fragment>
      <SectionTitle title="STarT Back Screening Tool" />
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
            Total Score : {watchSumValues()}point
            {/* Sub(Q5~9) Score :  */}
          </Typography>
          <Typography
            minWidth={115}
            variant="caption"
            sx={{ color: `${palette.primary.main}`, marginTop: ' 40px' }}
          >
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5} sx={{ fontSize: '16px' }}>
                Low risk: Total score-3 or less
              </Box>
            </Typography>
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5} sx={{ fontSize: '16px' }}>
                Medium risk: Total score-4 or more, Sub score(Q5~9)-3 or less
              </Box>
            </Typography>
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5} sx={{ fontSize: '16px' }}>
                high risk: Total score-4 or more, Sub score(Q5~9)-4 or more
              </Box>
            </Typography>
          </Typography>
        </Box>
      </Grid>
    </Fragment>
  );
};

export default STarTContents;
