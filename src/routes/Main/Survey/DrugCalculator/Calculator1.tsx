import Form from 'components/Form';
import { Fragment, useState } from 'react';
import { Stack, Grid, Typography, Button } from '@mui/material';

import MuiTable from 'components/MuiTable';
import { IFormValues, IFormWatch, IFormRegister } from 'routes/Main/type';

import EmtyTitle from './components/EmtyTitle';
import EmtyLine from './components/EmtyLine';

import SectionTitle from '../components/SectionTitle';
import RowContainer from '../components/RowContainer';

interface Props extends IFormValues, IFormWatch, IFormRegister {
  disabled?: boolean;
}

const Calculator1 = (props: Props) => {
  const { disabled, register, getValues, setValue } = props;

  //* 처방속도 X 몸무게 X 60 X 혼합액 총량(cc) / 약품용량(mcg or mg) */

  const [kgMin, setKgMin] = useState('');
  const handleChangeKgMin = (event: any) => {
    setKgMin(event.target.value);
    return Number(setKgMin);
  };

  const [kgcc, setKgCc] = useState('');
  const handleChangeKgCc = (event: any) => {
    setKgCc(event.target.value);
    return Number(setKgCc);
  };

  const [weight, setWeight] = useState('');
  const handleChangeWeight = (event: any) => {
    setWeight(event.target.value);
    return Number(setWeight);
  };

  const [volume, setVolume] = useState('');
  const handleChangeVolume = (event: any) => {
    setVolume(event.target.value);
    return Number(setVolume);
  };

  const [answer, setAnswer] = useState(0);

  const result = () => {
    const a =
      (Number(kgMin) * Number(kgcc) * Number(60) * Number(weight)) /
      Number(volume);
    return setAnswer(a);
  };

  // 오른쪽 hr state 및 클릭 함수
  const [kgHr, setKgHr] = useState('');
  const handleChangeKgHr = (event: any) => {
    setKgHr(event.target.value);
    return Number(setKgHr);
  };

  const [hrCc, setHrCc] = useState('');
  const handleChangeHrCc = (event: any) => {
    setHrCc(event.target.value);
    return Number(setHrCc);
  };

  const [weight1, setWeight1] = useState('');
  const handleChangeWeight1 = (event: any) => {
    setWeight1(event.target.value);
    return Number(setWeight1);
  };

  const [volume1, setVolume1] = useState('');
  const handleChangeVolume1 = (event: any) => {
    setVolume1(event.target.value);
    return Number(setVolume1);
  };

  const [answer1, setAnswer1] = useState(0);

  const result1 = () => {
    const a = (Number(kgHr) * Number(hrCc) * Number(weight1)) / Number(volume1);
    return setAnswer1(a);
  };

  return (
    <Fragment>
      <EmtyTitle />

      <RowContainer xs={6}>
        <SectionTitle title="mcg/kg/min , mg/kg/min" mb={3} />
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
            type="number"
            required={false}
            disabled={disabled}
            onChange={handleChangeKgMin}
            sx={{ width: '25%' }}
          />
          <Typography
            sx={{
              fontSize: '14px',
              lineHeight: '37px',
              marginRight: '9%',
              marginLeft: '3%',
            }}
          >
            혼합액 총량(cc)
          </Typography>

          <Form.MuiTextField
            type="number"
            required={false}
            fullWidth={false}
            disabled={disabled}
            onChange={handleChangeKgCc}
            sx={{ width: '25%' }}
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
              marginRight: '18.5%',
            }}
          >
            체중
          </Typography>
          <Form.MuiTextField
            type="number"
            required={false}
            disabled={disabled}
            onChange={handleChangeWeight}
            sx={{ width: '25%' }}
          />
          <Typography
            sx={{
              fontSize: '14px',
              lineHeight: '37px',
              marginRight: '3.4%',
              marginLeft: '3%',
            }}
          >
            약품 용량(mcg or mg)
          </Typography>
          <Form.MuiTextField
            type="number"
            required={false}
            fullWidth={false}
            onChange={handleChangeVolume}
            disabled={disabled}
            sx={{ width: '25%' }}
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
            type="number"
            required={false}
            disabled={disabled}
            value={answer}
            InputProps={{ ...Form.adornment('', 'mcg/kg/min , mg/kg/min') }}
            sx={{ width: '63%', marginRight: '3%' }}
          />
          <Button variant="contained" size="small" onClick={result}>
            확인
          </Button>
        </Stack>
      </RowContainer>

      {/* 오른쪽편 */}
      <RowContainer xs={6}>
        <SectionTitle title="mcg/kg/hr, mg/kg/hr" mb={3} />
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
            type="number"
            required={false}
            disabled={disabled}
            onChange={handleChangeKgHr}
            sx={{ width: '25%' }}
          />
          <Typography
            sx={{
              fontSize: '14px',
              lineHeight: '37px',
              marginRight: '9%',
              marginLeft: '3%',
            }}
          >
            혼합액 총량(cc)
          </Typography>
          <Form.MuiTextField
            type="number"
            required={false}
            fullWidth={false}
            disabled={disabled}
            onChange={handleChangeHrCc}
            sx={{ width: '25%' }}
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
              marginRight: '18.5%',
            }}
          >
            체중
          </Typography>
          <Form.MuiTextField
            type="number"
            required={false}
            disabled={disabled}
            onChange={handleChangeWeight1}
            sx={{ width: '25%' }}
          />
          <Typography
            sx={{
              fontSize: '14px',
              lineHeight: '37px',
              marginRight: '3.4%',
              marginLeft: '3%',
            }}
          >
            약품 용량(mcg or mg)
          </Typography>
          <Form.MuiTextField
            type="number"
            required={false}
            fullWidth={false}
            onChange={handleChangeVolume1}
            disabled={disabled}
            sx={{ width: '25%' }}
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
            type="number"
            required={false}
            disabled={disabled}
            value={answer1}
            InputProps={{ ...Form.adornment('', 'mcg/kg/hr , mg/kg/hr') }}
            sx={{ width: '63%', marginRight: '3%' }}
          />
          <Button variant="contained" size="small" onClick={result1}>
            확인
          </Button>
        </Stack>
      </RowContainer>
    </Fragment>
  );
};

export default Calculator1;
