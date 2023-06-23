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

const Calculator2 = (props: Props) => {
  const { disabled, register, getValues, setValue } = props;

  // 처방속도 X 혼합액 총량(cc) / 약품용량(mg)
  const [kgHr, setKgHr] = useState('');
  const handleChangeKgHr = (event: any) => {
    setKgHr(event.target.value);
    return Number(setKgHr);
  };

  const [kgcc, setKgCc] = useState('');
  const handleChangeKgCc = (event: any) => {
    setKgCc(event.target.value);
    return Number(setKgCc);
  };

  const [volume, setVolume] = useState('');
  const handleChangeVolume = (event: any) => {
    setVolume(event.target.value);
    return Number(setVolume);
  };

  const [answer, setAnswer] = useState(0);

  const result = () => {
    const a = (Number(kgHr) * Number(kgcc)) / Number(volume);
    return setAnswer(a);
  };

  // 오른쪽 hr state 및 클릭 함수
  // 처방속도 X 60 X 혼합액 총량(cc) / 약품용량(mg or u)
  const [kgMin, setKgMin] = useState('');
  const handleChangeKgMin = (event: any) => {
    setKgMin(event.target.value);
    return Number(setKgMin);
  };

  const [hrCc, setHrCc] = useState('');
  const handleChangeHrCc = (event: any) => {
    setHrCc(event.target.value);
    return Number(setHrCc);
  };

  const [volume1, setVolume1] = useState('');
  const handleChangeVolume1 = (event: any) => {
    setVolume1(event.target.value);
    return Number(setVolume1);
  };

  const [answer1, setAnswer1] = useState(0);

  const result1 = () => {
    const a = (Number(kgMin) * Number(60) * Number(hrCc)) / Number(volume1);
    return setAnswer1(a);
  };

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
            type="number"
            required={false}
            disabled={disabled}
            sx={{ width: '25%' }}
            onChange={handleChangeKgHr}
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
            sx={{ width: '25%' }}
            onChange={handleChangeKgCc}
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
            type="number"
            required={false}
            disabled={disabled}
            sx={{ width: '75%' }}
            onChange={handleChangeVolume}
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
            InputProps={{ ...Form.adornment('', 'mg/hr') }}
            sx={{ width: '63%', marginRight: '3%' }}
            value={answer}
          />
          <Button variant="contained" size="small" onClick={result}>
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
            type="number"
            required={false}
            disabled={disabled}
            sx={{ width: '25%' }}
            onChange={handleChangeKgMin}
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
            sx={{ width: '25%' }}
            onChange={handleChangeHrCc}
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
            type="number"
            required={false}
            disabled={disabled}
            sx={{ width: '75.2%' }}
            onChange={handleChangeVolume1}
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
            InputProps={{ ...Form.adornment('', 'mcg/min , u/min') }}
            sx={{ width: '63.3%', marginRight: '3%' }}
            value={answer1}
          />
          <Button variant="contained" size="small" onClick={result1}>
            확인
          </Button>
        </Stack>
      </RowContainer>
    </Fragment>
  );
};

export default Calculator2;
