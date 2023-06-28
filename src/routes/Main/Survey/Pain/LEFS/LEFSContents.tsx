import { Fragment } from 'react';
import { Box, Grid, Typography, useTheme } from '@mui/material';

import MuiTable from 'components/MuiTable';
import { IFormValues, IFormWatch } from 'routes/Main/type';

import SectionTitle from '../../components/SectionTitle';
import useTableForm from '../../hooks/useTableForm';

interface Props extends IFormValues, IFormWatch {}

const LEFSContents = (props: Props) => {
  const { palette } = useTheme();
  const { radioGroup, sumValues } = useTableForm(props);

  const columns = [
    { fieldId: 'title', label: '' },
    { fieldId: '0', label: '심하게 어려움(0점)' },
    { fieldId: '1', label: '완전 도움(1점)' },
    { fieldId: '2', label: '완전 도움(2점)' },
    { fieldId: '3', label: '부분도움(3점)' },
    { fieldId: '4', label: '완전자립(4점)' },
  ];

  const rows = [
    {
      id: 'sensoryPerception',
      title: '1. 집안일, 학교생활 등 평상시에 하는 일',
      ...radioGroup({
        key: 'contents.sensoryPerception',
        options: [1, 2, 3, 4, 5],
        sx: {
          paddingLeft: '30px',
        },
      }),
    },
    {
      id: 'humidity',
      title: '2. 취미생활, 레크레이션, 스포츠 활동',
      ...radioGroup({
        key: 'contents.humidity',
        options: [1, 2, 3, 4, 5],
        sx: {
          paddingLeft: '30px',
        },
      }),
    },
    {
      id: 'activity',
      title: '3. 욕조에 들어가거나 나오기',
      ...radioGroup({
        key: 'contents.activity',
        options: [1, 2, 3, 4, 5],
        sx: {
          paddingLeft: '30px',
        },
      }),
    },
    {
      id: 'mobility',
      title: '4. 방에서 다른 방으로 걸어서 이동',
      ...radioGroup({
        key: 'contents.mobility',
        options: [1, 2, 3, 4, 5],
        sx: {
          paddingLeft: '30px',
        },
      }),
    },
    {
      id: 'nutrition',
      title: '5. 신발이나 양말 신기',
      ...radioGroup({
        key: 'contents.nutrition',
        options: [1, 2, 3, 4, 5],
        sx: {
          paddingLeft: '30px',
        },
      }),
    },
    {
      id: 'frictionAndDissolutionForce',
      title: '6. 쪼그려 앉기',
      ...radioGroup({
        key: 'contents.frictionAndDissolutionForce',
        options: [1, 2, 3, 4, 5],
        sx: {
          paddingLeft: '30px',
        },
      }),
    },
    {
      id: 'frictionAndDissolutionForce',
      title: '7. 바닥에 놓은 가방이나 장바구니를 들어올리기',
      ...radioGroup({
        key: 'contents.frictionAndDissolutionForce',
        options: [1, 2, 3, 4, 5],
        sx: {
          paddingLeft: '30px',
        },
      }),
    },
    {
      id: 'frictionAndDissolutionForce',
      title: '8. 쉬운 집안 일 하기',
      ...radioGroup({
        key: 'contents.frictionAndDissolutionForce',
        options: [1, 2, 3, 4, 5],
        sx: {
          paddingLeft: '30px',
        },
      }),
    },
    {
      id: 'frictionAndDissolutionForce',
      title: '9. 힘든 집안 일 하기',
      ...radioGroup({
        key: 'contents.frictionAndDissolutionForce',
        options: [1, 2, 3, 4, 5],
        sx: {
          paddingLeft: '30px',
        },
      }),
    },
    {
      id: 'frictionAndDissolutionForce',
      title: '10. 차에 타고 내리기',
      ...radioGroup({
        key: 'contents.frictionAndDissolutionForce',
        options: [1, 2, 3, 4, 5],
        sx: {
          paddingLeft: '30px',
        },
      }),
    },
    {
      id: 'frictionAndDissolutionForce',
      title: '11. 200m 걷기',
      ...radioGroup({
        key: 'contents.frictionAndDissolutionForce',
        options: [1, 2, 3, 4, 5],
        sx: {
          paddingLeft: '30px',
        },
      }),
    },
    {
      id: 'frictionAndDissolutionForce',
      title: '12. 1.6km (1 mile) 걷기',
      ...radioGroup({
        key: 'contents.frictionAndDissolutionForce',
        options: [1, 2, 3, 4, 5],
        sx: {
          paddingLeft: '30px',
        },
      }),
    },
    {
      id: 'frictionAndDissolutionForce',
      title: '13. 10개의 계단을 오르거나 내리기(한 층 정도)',
      ...radioGroup({
        key: 'contents.frictionAndDissolutionForce',
        options: [1, 2, 3, 4, 5],
        sx: {
          paddingLeft: '30px',
        },
      }),
    },
    {
      id: 'frictionAndDissolutionForce',
      title: '14. 1시간 동안 서 있기',
      ...radioGroup({
        key: 'contents.frictionAndDissolutionForce',
        options: [1, 2, 3, 4, 5],
        sx: {
          paddingLeft: '30px',
        },
      }),
    },
    {
      id: 'frictionAndDissolutionForce',
      title: '15. 1시간 동안 바닥에 앉아 있기',
      ...radioGroup({
        key: 'contents.frictionAndDissolutionForce',
        options: [1, 2, 3, 4, 5],
        sx: {
          paddingLeft: '30px',
        },
      }),
    },
    {
      id: 'frictionAndDissolutionForce',
      title: '16. 평지에서 뛰기',
      ...radioGroup({
        key: 'contents.frictionAndDissolutionForce',
        options: [1, 2, 3, 4, 5],
        sx: {
          paddingLeft: '30px',
        },
      }),
    },
    {
      id: 'frictionAndDissolutionForce',
      title: '17. 고르지 못한 지면에서 뛰기',
      ...radioGroup({
        key: 'contents.frictionAndDissolutionForce',
        options: [1, 2, 3, 4, 5],
        sx: {
          paddingLeft: '30px',
        },
      }),
    },
    {
      id: 'frictionAndDissolutionForce',
      title: '18. 빠르게 달리다 급회전하기',
      ...radioGroup({
        key: 'contents.frictionAndDissolutionForce',
        options: [1, 2, 3, 4, 5],
        sx: {
          paddingLeft: '30px',
        },
      }),
    },
    {
      id: 'frictionAndDissolutionForce',
      title: '19. 깡충깡충 뛰기',
      ...radioGroup({
        key: 'contents.frictionAndDissolutionForce',
        options: [1, 2, 3, 4, 5],
        sx: {
          paddingLeft: '30px',
        },
      }),
    },
    {
      id: 'frictionAndDissolutionForce',
      title: '20. 침대에서 돌아눕기',
      ...radioGroup({
        key: 'contents.frictionAndDissolutionForce',
        options: [1, 2, 3, 4, 5],
        sx: {
          paddingLeft: '30px',
        },
      }),
    },
  ];

  const watchSumValues = () => {
    const values = rows.map(({ id }) => {
      if (Number(props.watch(`contents.${id}`)) > 0) {
        return Number(props.watch(`contents.${id}`)) - Number(1);
      } else {
        return Number(props.watch(`contents.${id}`));
      }
    });
    return sumValues(values);
  };

  return (
    <Fragment>
      <SectionTitle title="Lower Extremity Functional Scale (LEFS)" />
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
            합계 : {watchSumValues()}점 / 80
          </Typography>
          <Typography
            minWidth={115}
            variant="caption"
            sx={{ color: `${palette.primary.main}`, marginTop: ' 40px' }}
          >
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5} sx={{ fontSize: '16px' }}>
                최대 80점이 가능하고, 점수가 높을 수록 기능이 좋은 것을 의미한다
              </Box>
            </Typography>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sx={{ marginRight: '10px' }}>
        <Box display={'flex'} flexDirection={'column'} alignItems={'flex-end'}>
          <Typography
            sx={{
              fontSize: '13px',
            }}
          >
            이관우, 정경심, 서현두, 정이정.(2011).하지의 근골격계 기능장애
            환자들을 위한 한국어 판 Lower Extremity Functional Scale의 신뢰도와
            타당도.
            <br />
            특수교육재활과학연구,50(3),451-467.
          </Typography>
        </Box>
      </Grid>
    </Fragment>
  );
};

export default LEFSContents;
