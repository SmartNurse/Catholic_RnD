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

const Calculator2 = (props: Props) => {
  const { disabled, register, getValues, setValue } = props;

  return (
    <Fragment>
      <EmtyTitle />

      <RowContainer xs={6}>
        <SectionTitle title="mcg/hr" mb={3} />
        <Stack direction="row" sx={{ marginLeft: '38px', width: '100%' }}>
          <Typography
            sx={{
              fontSize: '14px',
              lineHeight: '37px',
              marginRight: '15%',
            }}
          >
            처방속도
          </Typography>
          <Form.MuiTextField
            required={false}
            disabled={disabled}
            sx={{ width: '25%' }}
            {...register('default_info.hospitalization_path.input')}
          />
          <Typography
            sx={{
              fontSize: '14px',
              lineHeight: '37px',
              marginRight: '15%',
              marginLeft: '3%',
            }}
          >
            처방속도
          </Typography>
          <Form.MuiTextField
            required={false}
            fullWidth={false}
            disabled={disabled}
            sx={{ width: '25%' }}
            {...register('default_info.hospitalization_path.input')}
          />
        </Stack>
        <Stack
          direction="row"
          sx={{ marginLeft: '38px', width: '100%', marginTop: '20px' }}
        >
          <Typography
            sx={{
              fontSize: '14px',
              lineHeight: '37px',
              marginRight: '10.2%',
            }}
          >
            약품 용량(mg)
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
              marginRight: '18.5%',
            }}
          >
            결과
          </Typography>
          <Form.MuiTextField
            required={false}
            disabled={disabled}
            InputProps={{ ...Form.adornment('', 'mg/hr') }}
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
        <SectionTitle title="mcg/min , u/min" mb={3} />
        <Stack direction="row" sx={{ marginLeft: '38px', width: '100%' }}>
          <Typography
            sx={{
              fontSize: '14px',
              lineHeight: '37px',
              marginRight: '15%',
            }}
          >
            처방속도
          </Typography>
          <Form.MuiTextField
            required={false}
            disabled={disabled}
            sx={{ width: '25%' }}
            {...register('default_info.hospitalization_path.input')}
          />
          <Typography
            sx={{
              fontSize: '14px',
              lineHeight: '37px',
              marginRight: '15%',
              marginLeft: '3%',
            }}
          >
            처방속도
          </Typography>
          <Form.MuiTextField
            required={false}
            fullWidth={false}
            disabled={disabled}
            sx={{ width: '25%' }}
            {...register('default_info.hospitalization_path.input')}
          />
        </Stack>
        <Stack
          direction="row"
          sx={{ marginLeft: '38px', width: '100%', marginTop: '20px' }}
        >
          <Typography
            sx={{
              fontSize: '14px',
              lineHeight: '37px',
              marginRight: '5.2%',
            }}
          >
            약품 용량(mcg or u)
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
            InputProps={{ ...Form.adornment('', 'mcg/min , u/min') }}
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

export default Calculator2;
