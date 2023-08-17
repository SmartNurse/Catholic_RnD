import Form from 'components/Form';

import { Fragment, useState } from 'react';
import { AccessTime, Delete } from '@mui/icons-material';
import {
  Button,
  Grid,
  IconButton,
  MenuItem,
  TextField,
  Checkbox,
} from '@mui/material';
import { MobileTimePicker } from '@mui/x-date-pickers';

import { Ti18nId } from 'hooks/useI18n';
import { IGlucosePrescriptionRecord } from 'apis/survey/type';
import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';
import MuiTable from 'components/MuiTable';
import MuiTextField from 'components/Form/MuiTextField';
import SectionTitle from '../components/SectionTitle';

import { formatStringToDate } from 'utils/formatting';

interface Props extends IFormValues, IFormWatch, IFormRegister {
  disabled?: boolean;
  onRequired: (id: Ti18nId) => void;
  onSuccess: (message: string) => void;
}

const GlucoseRecords = (props: Props) => {
  const { disabled, watch, setValue, onRequired, onSuccess, register } = props;
  const prescriptionRecordList: IGlucosePrescriptionRecord[] =
    watch('prescription');

  const [date, setDate] = useState('');
  const [time, setTime] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [unit, setUnit] = useState('');
  const [amount, setAmount] = useState('');
  const [count, setCount] = useState('');
  const [detail, setDetail] = useState('');
  const [finished, setFinished] = useState(false);

  const columns = [
    { fieldId: 'date', label: '일자', sx: { width: 200 } },
    { fieldId: 'time', label: '시간', sx: { width: 200 } },
    { fieldId: 'medication', label: '약물명', sx: { width: 200 } },
    { fieldId: 'content', label: '함량', sx: { width: 200 } },
    { fieldId: 'unit', label: '단위', sx: { width: 100 } },
    { fieldId: 'dose', label: '투여량', sx: { width: 100 } },
    { fieldId: 'administration_no', label: '투여횟수', sx: { width: 100 } },
    { fieldId: 'methods', label: '상세투여방법', sx: { width: 100 } },
    { fieldId: 'completed', label: '완료', sx: { width: 50 } },
    { fieldId: 'action', label: '', sx: { width: 100 } },
  ];

  const onAddRow = () => {
    const request = {
      date,
      time,
      medication: title,
      content,
      unit,
      dose: amount,
      administration_no: count,
      methods: detail,
    };

    if (Object.values(request).filter(v => !v).length > 0) {
      return onRequired('CLINICAL.OBSERVATION.ADD.ROW');
    }

    onSuccess('처방 기록 추가되었습니다.');
    setValue(
      'prescription',
      prescriptionRecordList
        ? [
            ...prescriptionRecordList,
            { ...request, completed: String(finished) },
          ]
        : [{ ...request, completed: String(finished) }]
    );
    console.log(prescriptionRecordList);
    setValue('prescription_date', '');
    setDate('');
    setTime(null);
    setTitle('');
    setContent('');
    setUnit('');
    setAmount('');
    setCount('');
    setDetail('');
    setFinished(false);
  };

  const inputRow = {
    id: 'add-prescription-record',
    date: (
      <Form.MuiTextField
        type="date"
        sx={{ width: '160px' }}
        required={false}
        disabled={disabled}
        {...register('prescription_date', {
          onChange: e => setDate(e.target.value),
        })}
      />
    ),
    time: (
      <MobileTimePicker
        value={time}
        onChange={setTime}
        renderInput={params => (
          <MuiTextField
            {...params}
            required={false}
            sx={{ width: '160px' }}
            placeholder="00:00 pm"
            InputProps={{ endAdornment: <AccessTime /> }}
          />
        )}
      />
    ),
    medication: (
      <MuiTextField
        value={title}
        required={false}
        sx={{ width: '160px' }}
        onChange={({ target: { value } }) => setTitle(value)}
      />
    ),
    content: (
      <MuiTextField
        value={content}
        required={false}
        onChange={({ target: { value } }) => setContent(value)}
      />
    ),
    unit: (
      <MuiTextField
        value={unit}
        required={false}
        onChange={({ target: { value } }) => setUnit(value)}
      />
    ),
    dose: (
      <MuiTextField
        value={amount}
        required={false}
        onChange={({ target: { value } }) => setAmount(value)}
      />
    ),
    administration_no: (
      <MuiTextField
        value={count}
        required={false}
        onChange={({ target: { value } }) => setCount(value)}
      />
    ),
    methods: (
      <MuiTextField
        value={detail}
        required={false}
        onChange={({ target: { value } }) => setDetail(value)}
      />
    ),
    completed: (
      <Checkbox
        size="small"
        defaultChecked={false}
        value={finished}
        onChange={e => setFinished(e.target.checked)}
      />
    ),
    action: (
      <Button variant="contained" size="small" onClick={onAddRow}>
        추가
      </Button>
    ),
  };

  const onDeleteRow = (index: number) => {
    setValue(
      'prescription',
      prescriptionRecordList.filter((_, i) => i !== index)
    );
  };

  const displayRows = prescriptionRecordList
    ? prescriptionRecordList.map((item, i) => ({
        ...item,
        id: i,
        time: formatStringToDate(item.time, 'hh:mm a'),
        completed: (
          <Checkbox
            size="small"
            defaultChecked={item.completed === 'true' ? true : false}
          />
        ),
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
  const tableRow = disabled ? displayRows : [inputRow, ...displayRows];

  return (
    <Fragment>
      <SectionTitle title="처방 기록" />
      <Grid item xs={12}>
        <MuiTable columns={columns} rows={[...tableRow]} />
      </Grid>
    </Fragment>
  );
};

export default GlucoseRecords;
