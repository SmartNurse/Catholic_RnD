import Form from 'components/Form';

import { Fragment, useState } from 'react';
import { AccessTime, Delete } from '@mui/icons-material';
import {
  Button,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';
import { MobileTimePicker } from '@mui/x-date-pickers';

import { Ti18nId } from 'hooks/useI18n';
import { IMentalNursingRecord } from 'apis/survey/type';
import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';

import MuiTextField from 'components/Form/MuiTextField';
import SectionTitle from '../../components/SectionTitle';

import { formatStringToDate } from 'utils/formatting';

interface Props extends IFormValues, IFormWatch, IFormRegister {
  disabled?: boolean;
  onRequired: (id: Ti18nId) => void;
  onSuccess: (message: string) => void;
}

const GlucoseRecords = (props: Props) => {
  const { disabled, watch, setValue, onRequired, onSuccess, register } = props;
  const mentalNursingRecordList: IMentalNursingRecord[] =
    watch('mental_survey');

  const [date, setDate] = useState('');
  const [time, setTime] = useState(null);
  const [patient, setPatient] = useState('');
  const [student, setStudent] = useState('');
  const [basis, setBasis] = useState('');
  const [evaluation, setEvaluation] = useState('');
  const [desc, setDesc] = useState('');

  const onAddRow = () => {
    const request = {
      date,
      time,
      patient_activity: patient,
      student_activity: student,
      student_rationale: basis,
      evaluation,
      mental_nursing: desc,
    };

    if (Object.values(request).filter(v => !v).length > 0) {
      return onRequired('CLINICAL.OBSERVATION.ADD.ROW');
    }

    onSuccess('정신간호 기록 추가되었습니다.');
    setValue(
      'mental_survey',
      mentalNursingRecordList
        ? [...mentalNursingRecordList, request]
        : [request]
    );
    setValue('mental_nursing_date', '');
    setDate('');
    setTime(null);
    setPatient('');
    setStudent('');
    setBasis('');
    setEvaluation('');
    setDesc('');
  };

  const onDeleteRow = (index: number) => {
    setValue(
      'mental_survey',
      mentalNursingRecordList.filter((_, i) => i !== index)
    );
  };

  const inputRows = [
    {
      label: '일시',
      elements: [
        {
          type: 'date',
          element: (
            <Form.MuiTextField
              type="date"
              required={false}
              {...register('mental_nursing_date', {
                onChange: e => setDate(e.target.value),
              })}
            />
          ),
        },
        {
          type: 'time',
          element: (
            <MobileTimePicker
              value={time}
              onChange={setTime}
              renderInput={params => (
                <MuiTextField
                  {...params}
                  required={false}
                  placeholder="00:00 pm"
                  InputProps={{ endAdornment: <AccessTime /> }}
                />
              )}
            />
          ),
        },
        {
          type: 'button',
          element: (
            <Button variant="contained" size="small" onClick={onAddRow}>
              추가
            </Button>
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
            <MuiTextField
              value={patient}
              required={false}
              onChange={({ target: { value } }) => setPatient(value)}
              multiline
              minRows={2}
              placeholder="직접 입력"
            />
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
            <MuiTextField
              value={student}
              required={false}
              onChange={({ target: { value } }) => setStudent(value)}
              multiline
              minRows={2}
              placeholder="직접 입력"
            />
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
            <MuiTextField
              value={basis}
              required={false}
              onChange={({ target: { value } }) => setBasis(value)}
              multiline
              minRows={2}
              placeholder="직접 입력"
            />
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
            <MuiTextField
              value={evaluation}
              required={false}
              onChange={({ target: { value } }) => setEvaluation(value)}
              multiline
              minRows={2}
              placeholder="직접 입력"
            />
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
            <MuiTextField
              value={desc}
              required={false}
              onChange={({ target: { value } }) => setDesc(value)}
              multiline
              minRows={2}
              placeholder="직접 입력"
            />
          ),
        },
      ],
    },
  ];

  const displayRows = mentalNursingRecordList
    ? mentalNursingRecordList.map((item, i) => ({
        ...item,
        id: i,
        time: formatStringToDate(item.time, 'hh:mm a'),
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
      <SectionTitle title="정신간호 기록" />
      <Grid item xs={12}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            {!disabled &&
              inputRows.map(row => (
                <TableRow
                  key={row.label}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell style={{ width: '20%', verticalAlign: 'top' }}>
                    {row.label}
                  </TableCell>
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
          </TableBody>
          <TableBody>
            {displayRows.map(row => (
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
                      {row.time}
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
                      {row.patient_activity}
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
                      {row.student_activity}
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
                      {row.student_rationale}
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
                      {row.evaluation}
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
                      {row.mental_nursing}
                    </Typography>
                  </TableCell>
                </TableRow>
              </>
            ))}
          </TableBody>
        </Table>
      </Grid>
    </Fragment>
  );
};

export default GlucoseRecords;
