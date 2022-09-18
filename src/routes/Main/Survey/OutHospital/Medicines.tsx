import { Fragment } from 'react';

import Form from 'components/Form';
import { IFormRegister } from 'routes/Main/type';

import RowContainer from '../components/RowContainer';
import SectionTitle from '../components/SectionTitle';
import RowTable from '../components/RowTable';

const Medicines = (props: IFormRegister) => {
  const { register } = props;

  const columns = [
    { id: 'name', label: '약품명', xs: 3 },
    { id: 'amount', label: '용량', xs: 3 },
    { id: 'count', label: '횟수', xs: 2 },
    { id: 'days', label: '일수', xs: 2 },
    { id: 'how_to', label: '용법', xs: 2 },
  ];
  const rows = Array.from({ length: 5 }, (_, i) => {
    const prefix = `out_hospital_medicines.${i}`;
    return {
      id: i,
      name: <Form.MuiTextField required={!i} {...register(`${prefix}.name`)} />,
      amount: (
        <Form.MuiTextField required={!i} {...register(`${prefix}.amount`)} />
      ),
      count: (
        <Form.MuiTextField
          type="number"
          required={!i}
          {...register(`${prefix}.count`)}
        />
      ),
      days: (
        <Form.MuiTextField
          type="number"
          required={!i}
          {...register(`${prefix}.days`)}
        />
      ),
      how_to: (
        <Form.MuiTextField required={!i} {...register(`${prefix}.how_to`)} />
      ),
    };
  });

  return (
    <Fragment>
      <SectionTitle title="퇴원약" />

      <RowContainer xs={12}>
        <RowTable rows={rows} columns={columns} />
      </RowContainer>
    </Fragment>
  );
};

export default Medicines;
