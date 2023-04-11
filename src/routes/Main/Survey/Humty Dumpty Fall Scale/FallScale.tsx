import { Fragment } from 'react';
import { Box, Grid, Typography, useTheme } from '@mui/material';

import MuiTable from 'components/MuiTable';
import { IFormValues, IFormWatch } from 'routes/Main/type';

import SectionTitle from '../components/SectionTitle';
import useTableForm from '../hooks/useTableForm';

interface Props extends IFormValues, IFormWatch {}

const FallScaleContents = (props: Props) => {
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
      id: 'age',
      title: '나이',
      ...radioGroup({
        key: 'contents.age',
        options: [1, 2, 3, 4],
        i18nKey: 'FALLSCALE.SCORE.AGE',
      }),
    },
    {
      id: 'gender',
      title: '성별',
      ...radioGroup({
        key: 'contents.gender',
        options: [1, 2],
        i18nKey: 'FALLSCALE.SCORE.GENDER',
      }),
    },
    {
      id: 'diagnosis',
      title: '진단',
      ...radioGroup({
        key: 'contents.diagnosis',
        options: [1, 2, 3, 4],
        i18nKey: 'FALLSCALE.SCORE.DIANOSIS',
      }),
    },
    {
      id: 'cognitive',
      title: '인지장애',
      ...radioGroup({
        key: 'contents.cognitive',
        options: [1, 2, 3],
        i18nKey: 'FALLSCALE.SCORE.COGNITIVE',
      }),
    },
    {
      id: 'environmental',
      title: '환경요인',
      ...radioGroup({
        key: 'contents.environmental',
        options: [1, 2, 3],
        i18nKey: 'FALLSCALE.SCORE.ENVIRONMENTAL',
      }),
    },
    {
      id: 'history',
      title: '수술 / 진정 / 마취요인',
      ...radioGroup({
        key: 'contents.history',
        options: [1, 2, 3],
        i18nKey: 'FALLSCALE.SCORE.HISTORY',
      }),
    },
    {
      id: 'drug',
      title: '약물 사용',
      ...radioGroup({
        key: 'contents.drug',
        options: [1, 2, 3],
        i18nKey: 'FALLSCALE.SCORE.DRUG',
      }),
    },
  ];

  const watchSumValues = () => {
    const values = rows.map(({ id }) => Number(props.watch(`contents.${id}`)));
    return sumValues(values);
  };

  return (
    <Fragment>
      <SectionTitle title="소아 낙상위험 평가" />
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
          <Typography minWidth={115} variant="caption" sx={{ color: `${palette.primary.main}`}}>
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5}>
                7-11점 :
              </Box>
              저위험군
              <br />
              (낙상예방활동 기록지 작성 안함)
            </Typography>
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5}>
                12점 이상 :
              </Box>
              High Risk
              <br />
              (낙상예방활동 기록지 작성 3회/1일)
            </Typography>
          </Typography>
        </Box>
      </Grid>
    </Fragment>
  );
};

export default FallScaleContents;
