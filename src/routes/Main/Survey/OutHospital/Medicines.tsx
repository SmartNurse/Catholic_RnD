import { Fragment } from 'react';
import { Grid, Stack, Typography, TypographyProps } from '@mui/material';

import { FormProps } from '../../type';

import RowContainer from '../components/RowContainer';
import SectionTitle from '../components/SectionTitle';
import SurveyInput from '../components/SurveyInput';

const Medicines = (props: FormProps) => {
  const { register } = props;

  const titleProps: TypographyProps = {
    variant: 'caption',
    fontWeight: 'bold',
  };

  const medicines = Array.from({ length: 5 }, (_, i) => i);

  return (
    <Fragment>
      <SectionTitle title="퇴원약" />

      <RowContainer xs={12}>
        <Grid item xs={3}>
          <Stack spacing={1}>
            <Typography {...titleProps}>약품명</Typography>
            {medicines.map(i => (
              <SurveyInput
                key={i}
                required={!i}
                {...register(`out_hospital_medicines.${i}.name`)}
              />
            ))}
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack spacing={1}>
            <Typography {...titleProps}>용량</Typography>
            {medicines.map(i => (
              <SurveyInput
                key={i}
                required={!i}
                {...register(`out_hospital_medicines.${i}.amount`)}
              />
            ))}
          </Stack>
        </Grid>
        <Grid item xs={2}>
          <Stack spacing={1}>
            <Typography {...titleProps}>횟수</Typography>
            {medicines.map(i => (
              <SurveyInput
                key={i}
                required={!i}
                type="number"
                {...register(`out_hospital_medicines.${i}.count`)}
              />
            ))}
          </Stack>
        </Grid>
        <Grid item xs={2}>
          <Stack spacing={1}>
            <Typography {...titleProps}>일수</Typography>
            {medicines.map(i => (
              <SurveyInput
                key={i}
                required={!i}
                type="number"
                {...register(`out_hospital_medicines.${i}.days`)}
              />
            ))}
          </Stack>
        </Grid>
        <Grid item xs={2}>
          <Stack spacing={1}>
            <Typography {...titleProps}>용법</Typography>
            {medicines.map(i => (
              <SurveyInput
                key={i}
                required={!i}
                {...register(`out_hospital_medicines.${i}.how_to`)}
              />
            ))}
          </Stack>
        </Grid>
      </RowContainer>
    </Fragment>
  );
};

export default Medicines;
