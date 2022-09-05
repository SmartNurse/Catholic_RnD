import { Fragment } from 'react';
import { Grid, Stack, Typography, TypographyProps } from '@mui/material';

import { IFormRegister } from '../../type';
import Form from '../../../../components/Form';

import RowContainer from '../components/RowContainer';
import SectionTitle from '../components/SectionTitle';

const CheckReservations = (props: IFormRegister) => {
  const { register } = props;

  const titleProps: TypographyProps = {
    variant: 'caption',
    fontWeight: 'bold',
  };

  const reservations = Array.from({ length: 2 }, (_, i) => i);

  return (
    <Fragment>
      <SectionTitle title="검사 예약" />

      <RowContainer xs={12}>
        <Grid item flex={1}>
          <Stack spacing={1}>
            <Typography {...titleProps}>검사명</Typography>
            {reservations.map(i => (
              <Form.MuiTextField
                key={i}
                required={!i}
                {...register(`check_reservations.${i}.name`)}
              />
            ))}
          </Stack>
        </Grid>
        <Grid item flex={1}>
          <Stack spacing={1}>
            <Typography {...titleProps}>장소</Typography>
            {reservations.map(i => (
              <Form.MuiTextField
                key={i}
                required={!i}
                {...register(`check_reservations.${i}.destination`)}
              />
            ))}
          </Stack>
        </Grid>
        <Grid item flex={1}>
          <Stack spacing={1}>
            <Typography {...titleProps}>주의사항</Typography>
            {reservations.map(i => (
              <Form.MuiTextField
                key={i}
                required={!i}
                {...register(`check_reservations.${i}.warning`)}
              />
            ))}
          </Stack>
        </Grid>
        <Grid item flex={1}>
          <Stack spacing={1}>
            <Typography {...titleProps}>전화번호</Typography>
            {reservations.map(i => (
              <Form.MuiTextField
                key={i}
                type="tel"
                required={!i}
                {...register(`check_reservations.${i}.call_number`)}
              />
            ))}
          </Stack>
        </Grid>
        <Grid item flex={1}>
          <Stack spacing={1}>
            <Typography {...titleProps}>예약일시</Typography>
            {reservations.map(i => (
              <Form.MuiTextField
                key={i}
                type="date"
                required={!i}
                {...register(`check_reservations.${i}.date`)}
              />
            ))}
          </Stack>
        </Grid>
      </RowContainer>
    </Fragment>
  );
};

export default CheckReservations;
