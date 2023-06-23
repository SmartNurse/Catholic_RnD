import Form from 'components/Form';
import { Fragment } from 'react';
import { Stack, Grid, Typography, Button } from '@mui/material';

import MuiTable from 'components/MuiTable';
import { IFormValues, IFormWatch, IFormRegister } from 'routes/Main/type';

import EmtyTitle from './components/EmtyTitle';
import EmtyLine from './components/EmtyLine';

import SectionTitle from '../components/SectionTitle';
import useTableForm from '../hooks/useTableForm';
import RowContainer from '../components/RowContainer';
import RowContent from '../components/RowContent';

interface Props extends IFormValues, IFormWatch, IFormRegister {
  disabled?: boolean;
}

const Calculator3 = (props: Props) => {
  const { disabled, register, getValues, setValue } = props;

  return (
    <Fragment>
      <EmtyTitle />

      <RowContainer xs={6}>
        <SectionTitle title="1분당 방울 수(gtt)" mb={3} />
        <Stack
          direction="row"
          sx={{ marginLeft: '38px', width: '100%', marginTop: '20px' }}
        >
          <Typography
            sx={{
              fontSize: '14px',
              lineHeight: '37px',
              marginRight: '10.8%',
            }}
          >
            시간당 주입량
          </Typography>
          <Form.MuiTextField
            required={false}
            disabled={disabled}
            sx={{ width: '75%' }}
            {...register('default_info.hospitalization_path.input')}
          />
        </Stack>
        <EmtyLine />
        <Stack
          direction="row"
          sx={{ marginLeft: '38px', width: '100%', marginTop: '20px' }}
        >
          <Typography
            sx={{
              fontSize: '14px',
              lineHeight: '37px',
              marginRight: '18.4%',
            }}
          >
            결과
          </Typography>
          <Form.MuiTextField
            required={false}
            disabled={disabled}
            InputProps={{ ...Form.adornment('', 'gtt') }}
            sx={{ width: '63%', marginRight: '3%' }}
            {...register('default_info.hospitalization_path.input')}
          />
          <Button variant="contained" size="small">
            확인
          </Button>
        </Stack>
      </RowContainer>

      {/* 오른쪽편 */}
      <RowContainer xs={6}>
        <SectionTitle title="시간당 주입량 (ml/hr)" mb={3} />

        <Stack
          direction="row"
          sx={{ marginLeft: '38px', width: '100%', marginTop: '20px' }}
        >
          <Typography
            sx={{
              fontSize: '14px',
              lineHeight: '37px',
              marginRight: '7%',
            }}
          >
            1분 당 방울 수(gtt)
          </Typography>
          <Form.MuiTextField
            required={false}
            disabled={disabled}
            sx={{ width: '75.2%' }}
            {...register('default_info.hospitalization_path.input')}
          />
        </Stack>
        <EmtyLine />
        <Stack
          direction="row"
          sx={{ marginLeft: '38px', width: '100%', marginTop: '20px' }}
        >
          <Typography
            sx={{
              fontSize: '14px',
              lineHeight: '37px',
              marginRight: '18.5%',
            }}
          >
            결과
          </Typography>
          <Form.MuiTextField
            required={false}
            disabled={disabled}
            InputProps={{ ...Form.adornment('', 'ml/hr') }}
            sx={{ width: '63.3%', marginRight: '3%' }}
            {...register('default_info.hospitalization_path.input')}
          />
          <Button variant="contained" size="small">
            확인
          </Button>
        </Stack>
      </RowContainer>
    </Fragment>
  );
};

export default Calculator3;
