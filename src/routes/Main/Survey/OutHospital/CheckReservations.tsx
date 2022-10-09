import { Fragment } from 'react';
import { Grid } from '@mui/material';

import Form from 'components/Form';
import MuiTable from 'components/MuiTable';
import { IFormRegister } from 'routes/Main/type';

import RowContainer from '../components/RowContainer';
import SectionTitle from '../components/SectionTitle';

const CheckReservations = (props: IFormRegister) => {
  const { register } = props;

  const columns = [
    { fieldId: 'name', label: '검사명' },
    { fieldId: 'destination', label: '장소' },
    { fieldId: 'warning', label: '주의사항' },
    { fieldId: 'call_number', label: '전화번호' },
    { fieldId: 'date', label: '예약일시' },
  ];
  const rows = Array.from({ length: 2 }, (_, i) => {
    const prefix = `check_reservations.${i}`;
    return {
      id: i,
      name: <Form.MuiTextField required={!i} {...register(`${prefix}.name`)} />,
      destination: (
        <Form.MuiTextField
          required={!i}
          {...register(`${prefix}.destination`)}
        />
      ),
      warning: (
        <Form.MuiTextField required={!i} {...register(`${prefix}.warning`)} />
      ),
      call_number: (
        <Form.MuiTextField
          type="tel"
          required={!i}
          {...register(`${prefix}.call_number`)}
        />
      ),
      date: (
        <Form.MuiTextField
          type="date"
          required={!i}
          {...register(`${prefix}.date`)}
        />
      ),
    };
  });

  return (
    <Fragment>
      <SectionTitle title="검사 예약" />

      <RowContainer xs={12}>
        <Grid item xs={12}>
          <MuiTable columns={columns} rows={rows} />
        </Grid>
      </RowContainer>
    </Fragment>
  );
};

export default CheckReservations;
