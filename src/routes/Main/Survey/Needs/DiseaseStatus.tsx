import { Fragment } from 'react';
import { Grid } from '@mui/material';

import MuiTable from 'components/MuiTable';
import { IFormRegister, IFormWatch, IFormValues } from 'routes/Main/type';

import SectionTitle from '../components/SectionTitle';
import useTableForm from '../hooks/useTableForm';

interface Props extends IFormValues, IFormWatch, IFormRegister {
  disabled?: boolean;
}

const DiseaseStatus = (props: Props) => {
  const { checkbox } = useTableForm(props);

  const columns = [
    { fieldId: 'title', label: '' },
    { fieldId: '0', label: '' },
    { fieldId: '1', label: '' },
    { fieldId: '2', label: '' },
    { fieldId: '3', label: '' },
    { fieldId: '4', label: '' },
  ];

  const rows = [
    {
      id: 'circulatory',
      title: '순환기계',
      0: checkbox({
        label: '뇌경색',
        key: 'disease_status.circulatory.checked1',
      }),
      1: checkbox({
        label: '뇌출혈',
        key: 'disease_status.circulatory.checked2',
      }),
      2: checkbox({
        label: '협심증',
        key: 'disease_status.circulatory.checked3',
      }),
      3: checkbox({
        label: '심근경색증',
        key: 'disease_status.circulatory.checked4',
      }),
      4: checkbox({
        label: '기타',
        inputKey: 'disease_status.circulatory.etc',
        key: 'disease_status.circulatory.checked5',
      }),
    },
    {
      id: 'chronic',
      title: '만성질환',
      0: checkbox({
        label: '당뇨',
        key: 'disease_status.chronic.checked1',
      }),
      1: checkbox({
        label: '고혈압',
        key: 'disease_status.chronic.checked2',
      }),
      2: checkbox({
        label: '만성호흡기질환',
        key: 'disease_status.chronic.checked3',
      }),
      3: checkbox({
        label: '암',
        inputKey: 'disease_status.chronic.cancer',
        key: 'disease_status.chronic.checked4',
      }),
    },
    {
      id: 'nervous',
      title: '신경계',
      0: checkbox({
        label: '치매',
        key: 'disease_status.nervous.checked1',
      }),
      1: checkbox({
        label: '파킨슨병',
        key: 'disease_status.nervous.checked2',
      }),
      2: checkbox({
        label: '간질',
        key: 'disease_status.nervous.checked3',
      }),
      3: checkbox({
        label: '기타',
        inputKey: 'disease_status.nervous.etc',
        key: 'disease_status.nervous.checked5',
      }),
    },
    {
      id: 'musculoskeletal',
      title: '근골격계',
      0: checkbox({
        label: '관절염',
        key: 'disease_status.musculoskeletal.checked1',
      }),
      1: checkbox({
        label: '요통, 좌골통',
        key: 'disease_status.musculoskeletal.checked2',
      }),
      2: checkbox({
        label: '골절 등 후유증',
        key: 'disease_status.musculoskeletal.checked3',
      }),
      3: checkbox({
        label: '기타',
        inputKey: 'disease_status.musculoskeletal.etc',
        key: 'disease_status.musculoskeletal.checked5',
      }),
    },
    {
      id: 'mentalAndBehavioral',
      title: '정신, 행동장애',
      0: checkbox({
        label: '우울증',
        key: 'disease_status.mentalAndBehavioral.checked1',
      }),
      1: checkbox({
        label: '수면장애',
        key: 'disease_status.mentalAndBehavioral.checked2',
      }),
      2: checkbox({
        label: '정신질환',
        key: 'disease_status.mentalAndBehavioral.checked3',
      }),
      3: checkbox({
        label: '기타',
        inputKey: 'disease_status.mentalAndBehavioral.etc',
        key: 'disease_status.mentalAndBehavioral.checked5',
      }),
    },
    {
      id: 'respiratory',
      title: '호흡기계',
      0: checkbox({
        label: '호흡곤란',
        key: 'disease_status.respiratory.checked1',
      }),
      1: checkbox({
        label: '결핵',
        key: 'disease_status.respiratory.checked2',
      }),
      2: checkbox({
        label: '기타',
        inputKey: 'disease_status.respiratory.etc',
        key: 'disease_status.respiratory.checked5',
      }),
    },
    {
      id: 'renal',
      title: '만성신장질환',
      0: checkbox({
        key: 'disease_status.renal.checked1',
        label: '만성신부전증',
      }),
      1: checkbox({
        label: '기타',
        inputKey: 'disease_status.renal.etc',
        key: 'disease_status.renal.checked5',
      }),
    },
    {
      id: 'other',
      title: '기타질환',
      0: checkbox({
        label: '알레르기',
        key: 'disease_status.other.checked1',
        inputKey: 'disease_status.other.allergy',
      }),
      1: checkbox({
        label: '기타',
        inputKey: 'disease_status.other.etc',
        key: 'disease_status.other.checked5',
      }),
    },
  ];

  return (
    <Fragment>
      <SectionTitle title="질병상태" />
      <Grid item xs={12}>
        <MuiTable columns={columns} rows={rows} />
      </Grid>
    </Fragment>
  );
};

export default DiseaseStatus;
