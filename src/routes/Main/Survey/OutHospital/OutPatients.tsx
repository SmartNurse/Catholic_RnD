import { Fragment } from 'react';
import { Grid, Stack, Typography, TypographyProps } from '@mui/material';

import { IFormRegister } from '../../type';
import Form from '../../../../components/Form';

import RowContainer from '../components/RowContainer';
import SectionTitle from '../components/SectionTitle';

const OutPatients = (props: IFormRegister) => {
  const { register } = props;

  const titleProps: TypographyProps = {
    variant: 'caption',
    fontWeight: 'bold',
  };

  const outPatients = Array.from({ length: 2 }, (_, i) => i);

  return (
    <Fragment>
      <SectionTitle title="외래 예약" />

      <RowContainer xs={12}>
        <Grid item flex={1}>
          <Stack spacing={1}>
            <Typography {...titleProps}>진료과</Typography>
            {outPatients.map(i => (
              <Form.MuiTextField
                key={i}
                required={!i}
                {...register(`out_patients.${i}.department`)}
              />
            ))}
          </Stack>
        </Grid>
        <Grid item flex={1}>
          <Stack spacing={1}>
            <Typography {...titleProps}>진료의</Typography>
            {outPatients.map(i => (
              <Form.MuiTextField
                key={i}
                required={!i}
                {...register(`out_patients.${i}.doctor`)}
              />
            ))}
          </Stack>
        </Grid>
        <Grid item flex={1}>
          <Stack spacing={1}>
            <Typography {...titleProps}>장소</Typography>
            {outPatients.map(i => (
              <Form.MuiTextField
                key={i}
                required={!i}
                {...register(`out_patients.${i}.location`)}
              />
            ))}
          </Stack>
        </Grid>
        <Grid item flex={1}>
          <Stack spacing={1}>
            <Typography {...titleProps}>전화번호</Typography>
            {outPatients.map(i => (
              <Form.MuiTextField
                key={i}
                type="tel"
                required={!i}
                {...register(`out_patients.${i}.call_number`)}
              />
            ))}
          </Stack>
        </Grid>
        <Grid item flex={1}>
          <Stack spacing={1}>
            <Typography {...titleProps}>예약일시</Typography>
            {outPatients.map(i => (
              <Form.MuiTextField
                key={i}
                type="date"
                required={!i}
                {...register(`out_patients.${i}.date`)}
              />
            ))}
          </Stack>
        </Grid>
      </RowContainer>
    </Fragment>
  );
};

export default OutPatients;
