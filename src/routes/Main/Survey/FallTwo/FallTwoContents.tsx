import { Fragment } from 'react';
import { Box, Grid, Typography, useTheme } from '@mui/material';

import MuiTable from './MuiTable';
import { IFormValues, IFormWatch } from 'routes/Main/type';

import SectionTitle from '../components/SectionTitle';
import useTableForm from '../hooks/useTableForm';

interface Props extends IFormValues, IFormWatch {
  disabled?: boolean;
}

const FallTwoContents = (props: Props) => {
  const { palette } = useTheme();
  const { radioGroup, sumValues } = useTableForm(props);

  const columns = [
    { fieldId: 'title', label: '', sx: { width: 400 } },
    { fieldId: '0', label: '', sx: { width: 320 } },
    { fieldId: '1', label: '', sx: { width: 320 } },
    { fieldId: '2', label: '', sx: { width: 320 } },
  ];

  const rows = [
    {
      id: 'experience',
      title: '과거 낙상 경험(3개월 이내)',
      ...radioGroup({
        key: 'contents.experience',
        options: [1, 25],
        i18nKey: 'FALLTWO',
      }),
    },
    {
      id: 'diagnosis',
      title: '이차적인 진단',
      ...radioGroup({
        key: 'contents.diagnosis',
        options: [1, 15],
        i18nKey: 'FALLTWO',
      }),
    },
    {
      id: 'walkingAids',
      title: '보행보조(보조 기구)',
      ...radioGroup({
        key: 'contents.walkingAids',
        options: [1, 15, 30],
        i18nKey: 'FALLTWO.WALKING.AIDS',
      }),
    },
    {
      id: 'intravenousLine',
      title: '정맥주사요법 / 헤파린록',
      ...radioGroup({
        key: 'contents.intravenousLine',
        options: [1, 20],
        i18nKey: 'FALLTWO',
      }),
    },
    {
      id: 'gait',
      title: '걸음걸이(보행/이동)',
      ...radioGroup({
        key: 'contents.gait',
        options: [1, 10, 20],
        i18nKey: 'FALLTWO.GAIT',
      }),
    },
    {
      id: 'consciousness',
      title: '의식상태(정신이상 및 이행동)',
      ...radioGroup({
        key: 'contents.consciousness',
        options: [1, 15],
        i18nKey: 'FALLTWO.CONSCIOUSNESS',
      }),
    },
  ];

  const watchSumValues = () => {
    const values = rows.map(({ id }) => {
      if (Number(props.watch(`contents.${id}`)) === 1) {
        return Number(0);
      } else {
        return Number(props.watch(`contents.${id}`));
      }
    });

    return sumValues(values);
  };

  return (
    <Fragment>
      <SectionTitle title="낙상위험 평가도구 II" />
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
          <Typography
            minWidth={115}
            variant="caption"
            sx={{ color: '#2264A8' }}
          >
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5}>
                0-24점:
              </Box>
              저위험군, 낙상 위험이 거의 없음(NO RISK)
            </Typography>
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5}>
                25점-50점:
              </Box>
              중위험군, 낙상 위험성이 낮음(LOW RISK)
            </Typography>
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5}>
                51~125점:
              </Box>
              고위험군, 낙상 위험이 높음(HIGH RISK)
            </Typography>
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5}></Box>
              (단, 기준점은 의료기관, 시설의 종류에 따라 다르게 적용할 수 있음)
            </Typography>
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5}></Box>
            </Typography>
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5}></Box>
              *해당 기록지는 우석대학교 간호학과 협조를 통해 제작한
              기록지입니다.
            </Typography>
          </Typography>
        </Box>
      </Grid>
    </Fragment>
  );
};

export default FallTwoContents;
