import { Fragment } from 'react';
import { Grid, Box, Typography, useTheme } from '@mui/material';

import MuiTable from 'components/MuiTable';
import { IFormValues, IFormWatch } from 'routes/Main/type';

import useTableForm from './components/useTableForm';

interface Props extends IFormValues, IFormWatch {
  disabled?: boolean;
}

const BAIContents = (props: Props) => {
  const { palette } = useTheme();

  const { radioGroup, sumValues } = useTableForm(props);
  const { watch, setValue } = props;

  const columns = [
    { fieldId: 'title', label: '질문 사항' },
    {
      fieldId: '0',
      label: '전혀 느끼지 않았다.(0)',
      sx: { textAlign: 'center' },
    },
    { fieldId: '1', label: '조금 느꼈다.(1)', sx: { textAlign: 'center' } },
    { fieldId: '2', label: '상당히 느꼈다.(2)', sx: { textAlign: 'center' } },
    { fieldId: '3', label: '심하게 느꼈다.(3)', sx: { textAlign: 'center' } },
  ];

  const rows = [
    {
      id: 'content[0]',
      title: '가끔씩 몸이 저리고 쑤시며 감각이 마비된 느낌을 받는다.',
      ...radioGroup({
        key: 'content[0]',
        options: [0, 1, 2, 3],
        width: '25px',
      }),
    },
    {
      id: 'content[1]',
      title: '흥분된 느낌을 받는다.',
      ...radioGroup({
        key: 'content[1]',
        options: [0, 1, 2, 3],
        width: '25px',
      }),
    },
    {
      id: 'content[2]',
      title: '가끔씩 다리가 떨리곤 한다.',
      ...radioGroup({
        key: 'content[2]',
        options: [0, 1, 2, 3],
        width: '25px',
      }),
    },
    {
      id: 'content[3]',
      title: '편안하게 쉴 수가 없다.',
      ...radioGroup({
        key: 'content[3]',
        options: [0, 1, 2, 3],
        width: '25px',
      }),
    },
    {
      id: 'content[4]',
      title: '매우 나쁜 일이 일어날 것 같은 두려움을 느낀다.',
      ...radioGroup({
        key: 'content[4]',
        options: [0, 1, 2, 3],
        width: '25px',
      }),
    },
    {
      id: 'content[5]',
      title: '어지러움(현기증)을 느낀다.',
      ...radioGroup({
        key: 'content[5]',
        options: [0, 1, 2, 3],
        width: '25px',
      }),
    },
    {
      id: 'content[6]',
      title: '가끔씩 심장이 두근거리고 빨리 뛴다.',
      ...radioGroup({
        key: 'content[6]',
        options: [0, 1, 2, 3],
        width: '25px',
      }),
    },
    {
      id: 'content[7]',
      title: '침착하지 못한다.',
      ...radioGroup({
        key: 'content[7]',
        options: [0, 1, 2, 3],
        width: '25px',
      }),
    },
    {
      id: 'content[8]',
      title: '자주 겁을 먹고 무서움을 느낀다.',
      ...radioGroup({
        key: 'content[8]',
        options: [0, 1, 2, 3],
        width: '25px',
      }),
    },
    {
      id: 'content[9]',
      title: '신경이 과민 되어 왔다.',
      ...radioGroup({
        key: 'content[9]',
        options: [0, 1, 2, 3],
        width: '25px',
      }),
    },
    {
      id: 'content[10]',
      title: '가끔씩 숨이 막히고 질식할 것 같다.',
      ...radioGroup({
        key: 'content[10]',
        options: [0, 1, 2, 3],
        width: '25px',
      }),
    },
    {
      id: 'content[11]',
      title: '자주 손이 떨린다.',
      ...radioGroup({
        key: 'content[11]',
        options: [0, 1, 2, 3],
        width: '25px',
      }),
    },
    {
      id: 'content[12]',
      title: '안절부절못해 한다.',
      ...radioGroup({
        key: 'content[12]',
        options: [0, 1, 2, 3],
        width: '25px',
      }),
    },
    {
      id: 'content[13]',
      title: '미칠 것 같은 두려움을  느낀다.',
      ...radioGroup({
        key: 'content[13]',
        options: [0, 1, 2, 3],
        width: '25px',
      }),
    },
    {
      id: 'content[14]',
      title: '가끔씩 숨쉬기 곤란할 때가 있다.',
      ...radioGroup({
        key: 'content[14]',
        options: [0, 1, 2, 3],
        width: '25px',
      }),
    },
    {
      id: 'content[15]',
      title: '죽을 것 같은 두려움을 느낀다.',
      ...radioGroup({
        key: 'content[15]',
        options: [0, 1, 2, 3],
        width: '25px',
      }),
    },
    {
      id: 'content[16]',
      title: '불안한 상태에 있다.',
      ...radioGroup({
        key: 'content[16]',
        options: [0, 1, 2, 3],
        width: '25px',
      }),
    },
    {
      id: 'content[17]',
      title: '자주 소화가 잘 안되고 뱃속이 불편하다.',
      ...radioGroup({
        key: 'content[17]',
        options: [0, 1, 2, 3],
        width: '25px',
      }),
    },
    {
      id: 'content[18]',
      title: '가끔씩 기절할 것 같다.',
      ...radioGroup({
        key: 'content[18]',
        options: [0, 1, 2, 3],
        width: '25px',
      }),
    },
    {
      id: 'content[19]',
      title: '자주 얼굴이 붉어지곤 한다.',
      ...radioGroup({
        key: 'content[19]',
        options: [0, 1, 2, 3],
        width: '25px',
      }),
    },
    {
      id: 'content[20]',
      title: '땀을 많이 흘린다. (더위로 인한 경우는 제외)',
      ...radioGroup({
        key: 'content[20]',
        options: [0, 1, 2, 3],
        width: '25px',
      }),
    },
  ];

  console.log('언디파인?', watch(`content[20]`));

  const watchSumValues = () => {
    const values = rows.map(({ id }) => (watch(id) ? Number(watch(id)) : 0));
    const sum = sumValues(values);
    setValue('sum', sum);
    return sum;
  };

  return (
    <Fragment>
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
            sx={{ color: `${palette.primary.main}` }}
          >
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5}>
                0~15점
              </Box>
              : NO CONCERN
            </Typography>
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5}>
                16~31점
              </Box>
              : A LITTLE CONCERN
            </Typography>
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5}>
                32~47점
              </Box>
              : MODERATE CONCERN
            </Typography>
            <Typography variant="inherit">
              <Box component={'strong'} mr={0.5}>
                48~63점
              </Box>
              : EXTREME CONCERN
            </Typography>
          </Typography>
        </Box>
      </Grid>
    </Fragment>
  );
};

export default BAIContents;
