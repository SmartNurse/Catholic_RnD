import Form from 'components/Form';
import { Fragment, useState } from 'react';
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

  // 시간당 주입량 / 3
  const [gtt, setGtt] = useState('');
  const handleChangeGtt = (event: any) => {
    setGtt(event.target.value);
    return Number(setGtt);
  };

  const [answer, setAnswer] = useState(0);

  const result = () => {
    const a = Number(gtt) / Number(3);
    return setAnswer(a);
  };

  // 1분당 방울 수(gtt) X 3
  const [gtt1, setGtt1] = useState('');
  const handleChangeGtt1 = (event: any) => {
    setGtt1(event.target.value);
    return Number(setGtt1);
  };

  const [answer1, setAnswer1] = useState(0);

  const result1 = () => {
    const a = Number(gtt1) * Number(3);
    return setAnswer1(a);
  };

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
            type="number"
            required={false}
            disabled={disabled}
            sx={{ width: '75%' }}
            onChange={handleChangeGtt}
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
            value={answer}
          />
          <Button variant="contained" size="small" onClick={result}>
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
            onChange={handleChangeGtt1}
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

export default Calculator3;
