import { Fragment } from 'react';
import { Grid } from '@mui/material';

import Form from 'components/Form';
import MuiTable from 'components/MuiTable';
import { IFormRegister } from 'routes/Main/Survey/type';

import RowContainer from '../components/RowContainer';
import SectionTitle from '../components/SectionTitle';

const OutPatients = (props: IFormRegister) => {
  const { register } = props;

  const columns = [
    { fieldId: 'department', label: '진료과' },
    { fieldId: 'doctor', label: '진료의' },
    { fieldId: 'location', label: '장소' },
    { fieldId: 'call_number', label: '전화번호' },
    { fieldId: 'date', label: '예약일시' },
  ];
  const rows = Array.from({ length: 2 }, (_, i) => {
    const prefix = `out_patients.${i}`;
    return {
      id: i,
      department: (
        <Form.MuiTextField
          required={!i}
          {...register(`${prefix}.department`)}
        />
      ),
      doctor: (
        <Form.MuiTextField required={!i} {...register(`${prefix}.doctor`)} />
      ),
      location: (
        <Form.MuiTextField required={!i} {...register(`${prefix}.location`)} />
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
      <SectionTitle title="외래 예약" />

      <RowContainer xs={12}>
        <Grid item xs={12}>
          <MuiTable columns={columns} rows={rows} />
        </Grid>
      </RowContainer>
    </Fragment>
  );
};

export default OutPatients;
