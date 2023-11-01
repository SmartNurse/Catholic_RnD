import {
  Typography,
  Grid,
  Table,
  Stack,
  TableRow,
  TableCell,
  TableBody,
  Button,
  IconButton,
  MenuItem,
  TableHead,
} from '@mui/material';
import { MobileTimePicker } from '@mui/x-date-pickers';
import MuiTextField from 'components/Form/MuiTextField';
import { AccessTime, Delete } from '@mui/icons-material';

import { Fragment, useState } from 'react';

import Form from 'components/Form';
import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';

import RowContainer from '../components/RowContainer';
import RowContent from '../components/RowContent';
import SectionTitle from '../components/SectionTitle';

import useTableForm from '../hooks/useTableForm';
import MuiTable from 'components/MuiTable';
import { Ti18nId } from 'hooks/useI18n';
import { formatStringToDate } from 'utils/formatting';

import { IIORCheckCord } from 'apis/survey/type';

interface Props extends IFormRegister, IFormValues, IFormWatch {
  disabled?: boolean;
  onRequired: (id: Ti18nId) => void;
  onSuccess: (message: string) => void;
}

const SocialHistory = (props: Props) => {
  const { disabled, watch, setValue, onRequired, onSuccess, register } = props;
  const mentalNursingRecordList: IIORCheckCord[] = watch('io_survey');

  const [date, setDate] = useState('');
  const [duty, setDuty] = useState('');

  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  const [input5, setInput5] = useState('');
  const [input6, setInput6] = useState('');

  const [inputTwo1, setInputTwo1] = useState('');
  const [inputTwo2, setInputTwo2] = useState('');
  const [inputTwo3, setInputTwo3] = useState('');
  const [inputTwo4, setInputTwo4] = useState('');
  const [inputTwo5, setInputTwo5] = useState('');
  const [inputTwo6, setInputTwo6] = useState('');

  const [inputThree1, setInputThree1] = useState('');
  const [inputThree2, setInputThree2] = useState('');
  const [inputThree3, setInputThree3] = useState('');
  const [inputThree4, setInputThree4] = useState('');
  const [inputThree5, setInputThree5] = useState('');
  const [inputThree6, setInputThree6] = useState('');

  const [inputFour1, setInputFour1] = useState('');
  const [inputFour2, setInputFour2] = useState('');
  const [inputFour3, setInputFour3] = useState('');
  const [inputFour4, setInputFour4] = useState('');
  const [inputFour5, setInputFour5] = useState('');
  const [inputFour6, setInputFour6] = useState('');

  const [inputFive1, setInputFive1] = useState('');
  const [inputFive2, setInputFive2] = useState('');
  const [inputFive3, setInputFive3] = useState('');
  const [inputFive4, setInputFive4] = useState('');
  const [inputFive5, setInputFive5] = useState('');
  const [inputFive6, setInputFive6] = useState('');

  const [total, setTotal] = useState('');

  const [output1, setOutput1] = useState('');
  const [output2, setOutput2] = useState('');
  const [output3, setOutput3] = useState('');
  const [output4, setOutput4] = useState('');
  const [output5, setOutput5] = useState('');
  const [output6, setOutput6] = useState('');

  const [outputTwo1, setOutputTwo1] = useState('');
  const [outputTwo2, setOutputTwo2] = useState('');
  const [outputTwo3, setOutputTwo3] = useState('');
  const [outputTwo4, setOutputTwo4] = useState('');
  const [outputTwo5, setOutputTwo5] = useState('');
  const [outputTwo6, setOutputTwo6] = useState('');

  const [outputThree1, setOutputThree1] = useState('');
  const [outputThree2, setOutputThree2] = useState('');
  const [outputThree3, setOutputThree3] = useState('');
  const [outputThree4, setOutputThree4] = useState('');
  const [outputThree5, setOutputThree5] = useState('');
  const [outputThree6, setOutputThree6] = useState('');

  const [outputFour1, setOutputFour1] = useState('');
  const [outputFour2, setOutputFour2] = useState('');
  const [outputFour3, setOutputFour3] = useState('');
  const [outputFour4, setOutputFour4] = useState('');
  const [outputFour5, setOutputFour5] = useState('');
  const [outputFour6, setOutputFour6] = useState('');

  const [outputFive1, setOutputFive1] = useState('');
  const [outputFive2, setOutputFive2] = useState('');
  const [outputFive3, setOutputFive3] = useState('');
  const [outputFive4, setOutputFive4] = useState('');
  const [outputFive5, setOutputFive5] = useState('');
  const [outputFive6, setOutputFive6] = useState('');

  const onAddRow = () => {
    const request = {
      date,
      duty,
      input1,
      input2,
      input3,
      input4,
      input5,
      input6,

      inputTwo1,
      inputTwo2,
      inputTwo3,
      inputTwo4,
      inputTwo5,
      inputTwo6,

      inputThree1,
      inputThree2,
      inputThree3,
      inputThree4,
      inputThree5,
      inputThree6,

      inputFour1,
      inputFour2,
      inputFour3,
      inputFour4,
      inputFour5,
      inputFour6,

      inputFive1,
      inputFive2,
      inputFive3,
      inputFive4,
      inputFive5,
      inputFive6,

      total,

      output1,
      output2,
      output3,
      output4,
      output5,
      output6,

      outputTwo1,
      outputTwo2,
      outputTwo3,
      outputTwo4,
      outputTwo5,
      outputTwo6,

      outputThree1,
      outputThree2,
      outputThree3,
      outputThree4,
      outputThree5,
      outputThree6,

      outputFour1,
      outputFour2,
      outputFour3,
      outputFour4,
      outputFour5,
      outputFour6,

      outputFive1,
      outputFive2,
      outputFive3,
      outputFive4,
      outputFive5,
      outputFive6,
    };

    // if (Object.values(request).filter(v => !v).length > 0) {
    //   return onRequired('CLINICAL.OBSERVATION.ADD.ROW');
    // }

    onSuccess('정신간호 기록 추가되었습니다.');
    setValue(
      'mental_survey',
      mentalNursingRecordList
        ? [...mentalNursingRecordList, request]
        : [request]
    );
    setValue('io_survey', '');
    setDate('');
    setDuty('');

    setInput1('');
    setInput2('');
    setInput3('');
    setInput4('');
    setInput5('');
    setInput6('');

    setInputTwo1('');
    setInputTwo2('');
    setInputTwo3('');
    setInputTwo4('');
    setInputTwo5('');
    setInputTwo6('');

    setInputThree1('');
    setInputThree2('');
    setInputThree3('');
    setInputThree4('');
    setInputThree5('');
    setInputThree6('');

    setInputFour1('');
    setInputFour2('');
    setInputFour3('');
    setInputFour4('');
    setInputFour5('');
    setInputFour6('');

    setInputFive1('');
    setInputFive2('');
    setInputFive3('');
    setInputFive4('');
    setInputFive5('');
    setInputFive6('');

    setTotal('');

    setOutput1('');
    setOutput2('');
    setOutput3('');
    setOutput4('');
    setOutput5('');
    setOutput6('');

    setOutputTwo1('');
    setOutputTwo2('');
    setOutputTwo3('');
    setOutputTwo4('');
    setOutputTwo5('');
    setOutputTwo6('');

    setOutputThree1('');
    setOutputThree2('');
    setOutputThree3('');
    setOutputThree4('');
    setOutputThree5('');
    setOutputThree6('');

    setOutputFour1('');
    setOutputFour2('');
    setOutputFour3('');
    setOutputFour4('');
    setOutputFour5('');
    setOutputFour6('');

    setOutputFive1('');
    setOutputFive2('');
    setOutputFive3('');
    setOutputFive4('');
    setOutputFive5('');
    setOutputFive6('');
  };

  const onDeleteRow = (index: number) => {
    setValue(
      'mental_survey',
      mentalNursingRecordList.filter((_, i) => i !== index)
    );
  };

  const meals = ['식사 전', '식사 후', '기타(직접입력)'];

  const inputRows = [
    {
      label: '일시',
      elements: [
        {
          type: 'date',
          element: (
            <Stack direction="row" sx={{ gap: 1 }}>
              <Form.MuiTextField
                type="date"
                required={false}
                {...register('mental_nursing_date', {
                  onChange: e => setDate(e.target.value),
                })}
              />

              <Form.MuiTextField
                select
                value={duty}
                required={false}
                onChange={({ target: { value } }) => setDuty(value)}
              >
                {meals.map(option => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Form.MuiTextField>
            </Stack>
          ),
        },
      ],
    },
    {
      label: '환자의 언어적/비언어적 행동',
      elements: [
        {
          type: 'text',
          element: (
            <Stack direction="row" sx={{ gap: 24 }}>
              <Typography
                sx={{ fontSize: '13px', color: '#14855B', fontWeight: 500 }}
              >
                섭취량
              </Typography>
            </Stack>
          ),
        },
      ],
    },
    {
      label: '환자의 언어적/비언어적 행동',
      elements: [
        {
          type: 'text',
          element: (
            <Stack direction="row" sx={{ gap: 24 }}>
              <Typography sx={{ fontSize: '13px' }}>구강</Typography>
              <Typography sx={{ fontSize: '13px' }}>수액</Typography>
              <Typography sx={{ fontSize: '13px' }}>기타</Typography>
            </Stack>
          ),
        },
      ],
    },
    {
      label: '환자의 언어적/비언어적 행동',
      elements: [
        {
          type: 'title',
          element: (
            <Stack direction="row" sx={{ gap: 11.2 }}>
              <Typography sx={{ fontSize: '13px' }}>구분</Typography>
              <Typography sx={{ fontSize: '13px' }}>양</Typography>
              <Typography sx={{ fontSize: '13px' }}>구분</Typography>
              <Typography sx={{ fontSize: '13px' }}>양</Typography>
              <Typography sx={{ fontSize: '13px' }}>구분</Typography>
              <Typography sx={{ fontSize: '13px' }}>양</Typography>
            </Stack>
          ),
        },
      ],
    },
    {
      label: '환자의 언어적/비언어적 행동',
      elements: [
        {
          type: 'text',
          element: (
            <Stack direction="row" sx={{ gap: 1 }}>
              <MuiTextField
                value={input1}
                required={false}
                onChange={({ target: { value } }) => setInput1(value)}
                placeholder="밥/NPO"
              />
              <MuiTextField
                value={input2}
                required={false}
                onChange={({ target: { value } }) => setInput2(value)}
                placeholder=""
              />
              <MuiTextField
                value={input3}
                required={false}
                onChange={({ target: { value } }) => setInput3(value)}
                placeholder="N/S 1L"
              />
              <MuiTextField
                value={input4}
                required={false}
                onChange={({ target: { value } }) => setInput4(value)}
                placeholder=""
              />
              <MuiTextField
                value={input5}
                required={false}
                onChange={({ target: { value } }) => setInput5(value)}
                placeholder="Blood"
              />
              <MuiTextField
                value={input6}
                required={false}
                onChange={({ target: { value } }) => setInput6(value)}
                placeholder=""
              />
            </Stack>
          ),
        },
      ],
    },
    {
      label: '간호사의 언어적/비언어적 행동',
      elements: [
        {
          type: 'text',
          element: (
            <Stack direction="row" sx={{ gap: 1 }}>
              <MuiTextField
                value={inputTwo1}
                required={false}
                onChange={({ target: { value } }) => setInputTwo1(value)}
                placeholder="밥/NPO"
              />
              <MuiTextField
                value={inputTwo2}
                required={false}
                onChange={({ target: { value } }) => setInputTwo2(value)}
                placeholder=""
              />
              <MuiTextField
                value={inputTwo3}
                required={false}
                onChange={({ target: { value } }) => setInputTwo3(value)}
                placeholder="N/S 1L"
              />
              <MuiTextField
                value={inputTwo4}
                required={false}
                onChange={({ target: { value } }) => setInputTwo4(value)}
                placeholder=""
              />
              <MuiTextField
                value={inputTwo5}
                required={false}
                onChange={({ target: { value } }) => setInputTwo5(value)}
                placeholder="Blood"
              />
              <MuiTextField
                value={inputTwo6}
                required={false}
                onChange={({ target: { value } }) => setInputTwo6(value)}
                placeholder=""
              />
            </Stack>
          ),
        },
      ],
    },
    {
      label: '간호사 반응의 이론적 근거',
      elements: [
        {
          type: 'text',
          element: (
            <Stack direction="row" sx={{ gap: 1 }}>
              <MuiTextField
                value={inputThree1}
                required={false}
                onChange={({ target: { value } }) => setInputThree1(value)}
                placeholder="밥/NPO"
              />
              <MuiTextField
                value={inputThree2}
                required={false}
                onChange={({ target: { value } }) => setInputThree2(value)}
                placeholder=""
              />
              <MuiTextField
                value={inputThree3}
                required={false}
                onChange={({ target: { value } }) => setInputThree3(value)}
                placeholder="N/S 1L"
              />
              <MuiTextField
                value={inputThree4}
                required={false}
                onChange={({ target: { value } }) => setInputThree4(value)}
                placeholder=""
              />
              <MuiTextField
                value={inputThree5}
                required={false}
                onChange={({ target: { value } }) => setInputThree5(value)}
                placeholder="Blood"
              />
              <MuiTextField
                value={inputThree6}
                required={false}
                onChange={({ target: { value } }) => setInputThree6(value)}
                placeholder=""
              />
            </Stack>
          ),
        },
      ],
    },
    {
      label: '평가',
      elements: [
        {
          type: 'text',
          element: (
            <Stack direction="row" sx={{ gap: 1 }}>
              <MuiTextField
                value={inputFour1}
                required={false}
                onChange={({ target: { value } }) => setInputFour1(value)}
                placeholder="밥/NPO"
              />
              <MuiTextField
                value={inputFour2}
                required={false}
                onChange={({ target: { value } }) => setInputFour2(value)}
                placeholder=""
              />
              <MuiTextField
                value={inputFour3}
                required={false}
                onChange={({ target: { value } }) => setInputFour3(value)}
                placeholder="N/S 1L"
              />
              <MuiTextField
                value={inputFour4}
                required={false}
                onChange={({ target: { value } }) => setInputFour4(value)}
                placeholder=""
              />
              <MuiTextField
                value={inputFour5}
                required={false}
                onChange={({ target: { value } }) => setInputFour5(value)}
                placeholder="Blood"
              />
              <MuiTextField
                value={inputFour6}
                required={false}
                onChange={({ target: { value } }) => setInputFour6(value)}
                placeholder=""
              />
            </Stack>
          ),
        },
      ],
    },
    {
      label: '정신간호 서술기록',
      elements: [
        {
          type: 'text',
          element: (
            <Stack direction="row" sx={{ gap: 1 }}>
              <MuiTextField
                value={inputFive1}
                required={false}
                onChange={({ target: { value } }) => setInputFive1(value)}
                placeholder="밥/NPO"
              />
              <MuiTextField
                value={inputFive2}
                required={false}
                onChange={({ target: { value } }) => setInputFive2(value)}
                placeholder=""
              />
              <MuiTextField
                value={inputFive3}
                required={false}
                onChange={({ target: { value } }) => setInputFive3(value)}
                placeholder="N/S 1L"
              />
              <MuiTextField
                value={inputFive4}
                required={false}
                onChange={({ target: { value } }) => setInputFive4(value)}
                placeholder=""
              />
              <MuiTextField
                value={inputFive5}
                required={false}
                onChange={({ target: { value } }) => setInputFive5(value)}
                placeholder="Blood"
              />
              <MuiTextField
                value={inputFive6}
                required={false}
                onChange={({ target: { value } }) => setInputFive6(value)}
                placeholder=""
              />
            </Stack>
          ),
        },
      ],
    },
  ];

  const displayRows = mentalNursingRecordList
    ? mentalNursingRecordList.map((item, i) => ({
        ...item,
        id: i,
      }))
    : [];

  const inputRows1 = [
    {
      label: '일시',
      elements: [
        {
          type: 'time',
          element: (
            <Stack direction="row" sx={{ gap: 3 }}>
              <Typography
                sx={{
                  fontSize: '15px',
                  whiteSpace: 'nowrap',
                  lineHeight: '38px',
                }}
              >
                1일 섭취량 / 배설량 총계
              </Typography>
              <Form.MuiTextField
                required={false}
                value={total}
                onChange={({ target: { value } }) => setTotal(value)}
              />
              <Button variant="contained" size="small" onClick={onAddRow}>
                추가
              </Button>
            </Stack>
          ),
        },
      ],
    },
    {
      label: '환자의 언어적/비언어적 행동',
      elements: [
        {
          type: 'text',
          element: (
            <Stack direction="row" sx={{ gap: 24 }}>
              <Typography
                sx={{ fontSize: '13px', color: '#14855B', fontWeight: 500 }}
              >
                배설량
              </Typography>
            </Stack>
          ),
        },
      ],
    },
    {
      label: '간호사의 언어적/비언어적 행동',
      elements: [
        {
          type: 'text',
          element: (
            <Stack direction="row" sx={{ gap: 24 }}>
              <Typography sx={{ fontSize: '13px' }}>소변</Typography>
              <Typography sx={{ fontSize: '13px' }}>대변</Typography>
              <Typography sx={{ fontSize: '13px' }}>기타</Typography>
            </Stack>
          ),
        },
      ],
    },
    {
      label: '간호사 반응의 이론적 근거',
      elements: [
        {
          type: 'text',
          element: (
            <Stack direction="row" sx={{ gap: 11.2 }}>
              <Typography sx={{ fontSize: '13px' }}>구분</Typography>
              <Typography sx={{ fontSize: '13px' }}>양</Typography>
              <Typography sx={{ fontSize: '13px' }}>구분</Typography>
              <Typography sx={{ fontSize: '13px' }}>양</Typography>
              <Typography sx={{ fontSize: '13px' }}>구분</Typography>
              <Typography sx={{ fontSize: '13px' }}>양</Typography>
            </Stack>
          ),
        },
      ],
    },
    {
      label: '평가',
      elements: [
        {
          type: 'text',
          element: (
            <Stack direction="row" sx={{ gap: 1 }}>
              <MuiTextField
                value={output1}
                required={false}
                onChange={({ target: { value } }) => setOutput1(value)}
                placeholder="foley"
              />
              <MuiTextField
                value={output2}
                required={false}
                onChange={({ target: { value } }) => setOutput2(value)}
                placeholder=""
              />
              <MuiTextField
                value={output3}
                required={false}
                onChange={({ target: { value } }) => setOutput3(value)}
                placeholder="loose"
              />
              <MuiTextField
                value={output4}
                required={false}
                onChange={({ target: { value } }) => setOutput4(value)}
                placeholder=""
              />
              <MuiTextField
                value={output5}
                required={false}
                onChange={({ target: { value } }) => setOutput5(value)}
                placeholder="JP drain"
              />
              <MuiTextField
                value={output6}
                required={false}
                onChange={({ target: { value } }) => setOutput6(value)}
                placeholder=""
              />
            </Stack>
          ),
        },
      ],
    },
    {
      label: '정신간호 서술기록',
      elements: [
        {
          type: 'text',
          element: (
            <Stack direction="row" sx={{ gap: 1 }}>
              <MuiTextField
                value={outputTwo1}
                required={false}
                onChange={({ target: { value } }) => setOutputTwo1(value)}
                placeholder="foley"
              />
              <MuiTextField
                value={outputTwo2}
                required={false}
                onChange={({ target: { value } }) => setOutputTwo2(value)}
                placeholder=""
              />
              <MuiTextField
                value={outputTwo3}
                required={false}
                onChange={({ target: { value } }) => setOutputTwo3(value)}
                placeholder="loose"
              />
              <MuiTextField
                value={outputTwo4}
                required={false}
                onChange={({ target: { value } }) => setOutputTwo4(value)}
                placeholder=""
              />
              <MuiTextField
                value={outputTwo5}
                required={false}
                onChange={({ target: { value } }) => setOutputTwo5(value)}
                placeholder="JP drain"
              />
              <MuiTextField
                value={outputTwo6}
                required={false}
                onChange={({ target: { value } }) => setOutputTwo6(value)}
                placeholder=""
              />
            </Stack>
          ),
        },
      ],
    },
    {
      label: '정신간호 서술기록',
      elements: [
        {
          type: 'text',
          element: (
            <Stack direction="row" sx={{ gap: 1 }}>
              <MuiTextField
                value={outputThree1}
                required={false}
                onChange={({ target: { value } }) => setOutputThree1(value)}
                placeholder="foley"
              />
              <MuiTextField
                value={outputThree2}
                required={false}
                onChange={({ target: { value } }) => setOutputThree2(value)}
                placeholder=""
              />
              <MuiTextField
                value={outputThree3}
                required={false}
                onChange={({ target: { value } }) => setOutputThree3(value)}
                placeholder="loose"
              />
              <MuiTextField
                value={outputThree4}
                required={false}
                onChange={({ target: { value } }) => setOutputThree4(value)}
                placeholder=""
              />
              <MuiTextField
                value={outputThree5}
                required={false}
                onChange={({ target: { value } }) => setOutputThree5(value)}
                placeholder="JP drain"
              />
              <MuiTextField
                value={outputThree6}
                required={false}
                onChange={({ target: { value } }) => setOutputThree6(value)}
                placeholder=""
              />
            </Stack>
          ),
        },
      ],
    },
    {
      label: '정신간호 서술기록',
      elements: [
        {
          type: 'text',
          element: (
            <Stack direction="row" sx={{ gap: 1 }}>
              <MuiTextField
                value={outputFour1}
                required={false}
                onChange={({ target: { value } }) => setOutputFour1(value)}
                placeholder="foley"
              />
              <MuiTextField
                value={outputFour2}
                required={false}
                onChange={({ target: { value } }) => setOutputFour2(value)}
                placeholder=""
              />
              <MuiTextField
                value={outputFour3}
                required={false}
                onChange={({ target: { value } }) => setOutputFour3(value)}
                placeholder="loose"
              />
              <MuiTextField
                value={outputFour4}
                required={false}
                onChange={({ target: { value } }) => setOutputFour4(value)}
                placeholder=""
              />
              <MuiTextField
                value={outputFour5}
                required={false}
                onChange={({ target: { value } }) => setOutputFour5(value)}
                placeholder="JP drain"
              />
              <MuiTextField
                value={outputFour6}
                required={false}
                onChange={({ target: { value } }) => setOutputFour6(value)}
                placeholder=""
              />
            </Stack>
          ),
        },
      ],
    },
    {
      label: '정신간호 서술기록',
      elements: [
        {
          type: 'text',
          element: (
            <Stack direction="row" sx={{ gap: 1 }}>
              <MuiTextField
                value={outputFive1}
                required={false}
                onChange={({ target: { value } }) => setOutputFive1(value)}
                placeholder="foley"
              />
              <MuiTextField
                value={outputFive2}
                required={false}
                onChange={({ target: { value } }) => setOutputFive2(value)}
                placeholder=""
              />
              <MuiTextField
                value={outputFive3}
                required={false}
                onChange={({ target: { value } }) => setOutputFive3(value)}
                placeholder="loose"
              />
              <MuiTextField
                value={outputFive4}
                required={false}
                onChange={({ target: { value } }) => setOutputFive4(value)}
                placeholder=""
              />
              <MuiTextField
                value={outputFive5}
                required={false}
                onChange={({ target: { value } }) => setOutputFive5(value)}
                placeholder="JP drain"
              />
              <MuiTextField
                value={outputFive6}
                required={false}
                onChange={({ target: { value } }) => setOutputFive6(value)}
                placeholder=""
              />
            </Stack>
          ),
        },
      ],
    },
  ];

  const displayRows1 = mentalNursingRecordList
    ? mentalNursingRecordList.map((item, i) => ({
        ...item,
        id: i,
        action: (
          <IconButton
            size="small"
            onClick={() => onDeleteRow(i)}
            sx={{ display: disabled ? 'none' : 'block' }}
          >
            <Delete />
          </IconButton>
        ),
      }))
    : [];

  return (
    <Fragment>
      <SectionTitle title="섭취 및 배설량" />
      <RowContainer ratio={12} sx={{ mb: 'auto', marginTop: '10px' }}>
        <Grid item xs={6} sx={{ marginBottom: '30px' }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              {!disabled &&
                inputRows.map(row => (
                  <TableRow
                    key={row.label}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    {row.elements.map(element =>
                      element.type === 'date' || element.type === 'time' ? (
                        <TableCell>{element.element}</TableCell>
                      ) : element.type === 'button' ? (
                        <TableCell align="right">{element.element}</TableCell>
                      ) : (
                        <TableCell colSpan={3}>{element.element}</TableCell>
                      )
                    )}
                  </TableRow>
                ))}

              <TableRow>
                <TableCell>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      lineHeight: '38px',
                    }}
                  >
                    총계
                    <Form.MuiTextField
                      size="small"
                      sx={{
                        width: '14vw',
                        minWidth: '200px',
                        maxWidth: '224px',
                      }}
                    />
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>
        <Grid item xs={6} sx={{ marginBottom: '30px' }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              {!disabled &&
                inputRows1.map(row => (
                  <TableRow
                    key={row.label}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    {row.elements.map(element =>
                      element.type === 'date' || element.type === 'time' ? (
                        <TableCell>{element.element}</TableCell>
                      ) : element.type === 'button' ? (
                        <TableCell align="right">{element.element}</TableCell>
                      ) : (
                        <TableCell colSpan={3}>{element.element}</TableCell>
                      )
                    )}
                  </TableRow>
                ))}

              <TableRow>
                <TableCell>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      lineHeight: '38px',
                    }}
                  >
                    총계
                    <Form.MuiTextField
                      size="small"
                      sx={{
                        width: '14vw',
                        minWidth: '200px',
                        maxWidth: '224px',
                      }}
                    />
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>

        <SectionTitle title="작성 리스트" />

        <Grid item xs={6}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              {displayRows.map(row => {
                console.log('roow', row);
                return (
                  <>
                    <TableRow
                      key="일시"
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell style={{ width: '20%', verticalAlign: 'top' }}>
                        일시
                      </TableCell>
                      <TableCell>
                        <Typography style={{ fontSize: '14px' }}>
                          {row.date}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography style={{ fontSize: '14px' }}>
                          {row.duty}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow
                      key="환자의 언어적/비언어적 행동"
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell colSpan={3}>
                        <Typography style={{ fontSize: '14px' }}>
                          {row.input1}
                        </Typography>
                        <Typography style={{ fontSize: '14px' }}>
                          {row.input2}
                        </Typography>
                        <Typography style={{ fontSize: '14px' }}>
                          {row.input3}
                        </Typography>
                        <Typography style={{ fontSize: '14px' }}>
                          {row.input4}
                        </Typography>
                        <Typography style={{ fontSize: '14px' }}>
                          {row.input5}
                        </Typography>
                        <Typography style={{ fontSize: '14px' }}>
                          {row.input6}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow
                      key="학생의 언어적/비언어적 행동"
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell style={{ width: '20%', verticalAlign: 'top' }}>
                        학생의 언어적/비언어적 행동
                      </TableCell>
                      <TableCell colSpan={3}>
                        <Typography style={{ fontSize: '14px' }}>
                          {row.inputTwo1}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow
                      key="학생 반응의 이론적 근거"
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell style={{ width: '20%', verticalAlign: 'top' }}>
                        학생 반응의 이론적 근거
                      </TableCell>
                      <TableCell colSpan={3}>
                        <Typography style={{ fontSize: '14px' }}>
                          {row.inputTwo2}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow
                      key="평가"
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell style={{ width: '20%', verticalAlign: 'top' }}>
                        평가
                      </TableCell>
                      <TableCell colSpan={3}>
                        <Typography style={{ fontSize: '14px' }}>
                          {row.inputTwo3}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow
                      key="정신간호 서술기록"
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell style={{ width: '20%', verticalAlign: 'top' }}>
                        정신간호 서술기록
                      </TableCell>
                      <TableCell colSpan={3}>
                        <Typography style={{ fontSize: '14px' }}>
                          {row.inputTwo4}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </>
                );
              })}
            </TableBody>
          </Table>
        </Grid>

        <Grid item xs={6}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              {displayRows1.map(row => (
                <>
                  <TableRow
                    key="일시"
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell style={{ width: '20%', verticalAlign: 'top' }}>
                      일시
                    </TableCell>
                    <TableCell>
                      <Typography style={{ fontSize: '14px' }}>
                        {row.date}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography style={{ fontSize: '14px' }}>
                        {row.duty}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">{row.action}</TableCell>
                  </TableRow>
                  <TableRow
                    key="환자의 언어적/비언어적 행동"
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell style={{ width: '20%', verticalAlign: 'top' }}>
                      환자의 언어적/비언어적 행동
                    </TableCell>
                    <TableCell colSpan={3}>
                      <Typography style={{ fontSize: '14px' }}>
                        {row.inputThree1}
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    key="학생의 언어적/비언어적 행동"
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell style={{ width: '20%', verticalAlign: 'top' }}>
                      학생의 언어적/비언어적 행동
                    </TableCell>
                    <TableCell colSpan={3}>
                      <Typography style={{ fontSize: '14px' }}>
                        {row.inputThree1}
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    key="학생 반응의 이론적 근거"
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell style={{ width: '20%', verticalAlign: 'top' }}>
                      학생 반응의 이론적 근거
                    </TableCell>
                    <TableCell colSpan={3}>
                      <Typography style={{ fontSize: '14px' }}>
                        {row.inputThree1}
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    key="평가"
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell style={{ width: '20%', verticalAlign: 'top' }}>
                      평가
                    </TableCell>
                    <TableCell colSpan={3}>
                      <Typography style={{ fontSize: '14px' }}>
                        {row.inputThree1}
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    key="정신간호 서술기록"
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell style={{ width: '20%', verticalAlign: 'top' }}>
                      정신간호 서술기록
                    </TableCell>
                    <TableCell colSpan={3}>
                      <Typography style={{ fontSize: '14px' }}>
                        {row.inputThree1}
                      </Typography>
                    </TableCell>
                  </TableRow>
                </>
              ))}
            </TableBody>
          </Table>
        </Grid>
      </RowContainer>
    </Fragment>
  );
};

export default SocialHistory;
