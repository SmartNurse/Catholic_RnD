import { Fragment } from 'react';
import { Grid } from '@mui/material';

import Form from 'components/Form';
import MuiTable from 'components/MuiTable';
import { IFormRegister } from 'routes/Main/type';

import RowContainer from '../components/RowContainer';
import SectionTitle from '../components/SectionTitle';

interface Props extends IFormRegister {
  disabled?: boolean;
}

const Medicines = (props: Props) => {
  const { disabled, register } = props;

  const columns = [
    { fieldId: 'name', label: '약품명' },
    { fieldId: 'amount', label: '용량' },
    { fieldId: 'count', label: '횟수' },
    { fieldId: 'days', label: '일수' },
    { fieldId: 'how_to', label: '용법' },
  ];
  const rows = Array.from({ length: 5 }, (_, i) => {
    const prefix = `out_hospital_medicines.${i}`;
    return {
      id: i,
      name: (
        <Form.MuiTextField
          fullWidth
          required={false}
          disabled={disabled}
          {...register(`${prefix}.name`)}
        />
      ),
      amount: (
        <Form.MuiTextField
          required={false}
          disabled={disabled}
          {...register(`${prefix}.amount`)}
        />
      ),
      count: (
        <Form.MuiTextField
          type="number"
          required={false}
          disabled={disabled}
          {...register(`${prefix}.count`)}
        />
      ),
      days: (
        <Form.MuiTextField
          type="number"
          required={false}
          disabled={disabled}
          {...register(`${prefix}.days`)}
        />
      ),
      how_to: (
        <Form.MuiTextField
          required={false}
          disabled={disabled}
          {...register(`${prefix}.how_to`)}
        />
      ),
    };
  });

  return (
    <Fragment>
      <SectionTitle title="퇴원약" />

      <RowContainer xs={12}>
        <Grid item xs={12}>
          <MuiTable columns={columns} rows={rows} />
        </Grid>
      </RowContainer>
    </Fragment>
  );
};

export default Medicines;
