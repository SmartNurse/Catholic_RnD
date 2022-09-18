import { Fragment } from 'react';

import Form from 'components/Form';
import { IFormRegister } from 'routes/Main/type';

import RowContainer from '../components/RowContainer';
import SectionTitle from '../components/SectionTitle';
import RowTable from '../components/RowTable';

const OutPatients = (props: IFormRegister) => {
  const { register } = props;

  const columns = [
    { id: 'department', label: '진료과', xs: 2.4 },
    { id: 'doctor', label: '진료의', xs: 2.4 },
    { id: 'location', label: '장소', xs: 2.4 },
    { id: 'call_number', label: '전화번호', xs: 2.4 },
    { id: 'date', label: '예약일시', xs: 2.4 },
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
        <RowTable rows={rows} columns={columns} />
      </RowContainer>
    </Fragment>
  );
};

export default OutPatients;
