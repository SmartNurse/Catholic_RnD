import { Fragment } from 'react';
import { Grid } from '@mui/material';

import MuiTable from 'components/MuiTable';
import { IFormValues, IFormWatch } from 'routes/Main/type';

import SectionTitle from '../components/SectionTitle';
import useTableForm from '../hooks/useTableForm';

interface Props extends IFormValues, IFormWatch {
  disabled?: boolean;
}

const BodyStatus = (props: Props) => {
  const { radioGroup } = useTableForm(props);

  const columns = [
    { fieldId: 'title', label: '신체상태' },
    { fieldId: '0', label: '완전도움', sx: { textAlign: 'center' } },
    { fieldId: '1', label: '부분도움', sx: { textAlign: 'center' } },
    { fieldId: '2', label: '완전자립', sx: { textAlign: 'center' } },
  ];

  const rows = [
    {
      id: 'takeOffClothes',
      title: '옷 벗고 입기',
      ...radioGroup({ key: 'body_status.takeOffClothes', options: [1, 2, 3] }),
    },
    {
      id: 'eat',
      title: '식사하기',
      ...radioGroup({ key: 'body_status.eat', options: [1, 2, 3] }),
    },
    {
      id: 'sitUp',
      title: '일어나 앉기',
      ...radioGroup({ key: 'body_status.sitUp', options: [1, 2, 3] }),
    },
    {
      id: 'toilet',
      title: '화장실 사용하기',
      ...radioGroup({ key: 'body_status.toilet', options: [1, 2, 3] }),
    },
    {
      id: 'washFace',
      title: '세수하기',
      ...radioGroup({ key: 'body_status.washFace', options: [1, 2, 3] }),
    },
    {
      id: 'bath',
      title: '목욕하기',
      ...radioGroup({ key: 'body_status.bath', options: [1, 2, 3] }),
    },
    {
      id: 'transfer',
      title: '옮겨 앉기',
      ...radioGroup({ key: 'body_status.transfer', options: [1, 2, 3] }),
    },
    {
      id: 'controlStool',
      title: '대변 조절하기',
      ...radioGroup({ key: 'body_status.controlStool', options: [1, 2, 3] }),
    },
    {
      id: 'brushTeeth',
      title: '양치질하기',
      ...radioGroup({ key: 'body_status.brushTeeth', options: [1, 2, 3] }),
    },
    {
      id: 'changePosition',
      title: '체위 변경하기',
      ...radioGroup({ key: 'body_status.changePosition', options: [1, 2, 3] }),
    },
    {
      id: 'getOutRoom',
      title: '방 밖으로 나오기',
      ...radioGroup({ key: 'body_status.getOutRoom', options: [1, 2, 3] }),
    },
    {
      id: 'controlUrine',
      title: '소변 조절하기',
      ...radioGroup({ key: 'body_status.controlUrine', options: [1, 2, 3] }),
    },
  ];

  return (
    <Fragment>
      <SectionTitle title="신체상태 (일상생활동작 수행능력)" />
      <Grid item xs={12}>
        <MuiTable columns={columns} rows={rows} />
      </Grid>
    </Fragment>
  );
};

export default BodyStatus;
