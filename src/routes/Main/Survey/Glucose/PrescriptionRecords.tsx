import Form from 'components/Form';

import { Fragment, useState } from 'react';
import { AccessTime, Delete } from '@mui/icons-material';
import { Button, Grid, IconButton, MenuItem, TextField, Checkbox } from '@mui/material';
import { MobileTimePicker } from '@mui/x-date-pickers';

import { Ti18nId } from 'hooks/useI18n';
import { IPrescriptionRecord } from 'apis/survey/type';
import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';
import MuiTable from 'components/MuiTable';
import MuiTextField from 'components/Form/MuiTextField';

import { formatStringToDate } from "utils/formatting";

interface Props extends IFormValues, IFormWatch, IFormRegister {
  disabled?: boolean;
  onRequired: (id: Ti18nId) => void;
  onSuccess: (message: string) => void;
}

const GlucoseRecords = (props: Props) => {
  const { disabled, watch, setValue, onRequired, onSuccess, register } = props;
  const prescriptionRecordList: IPrescriptionRecord[] = watch('prescription_records');

  const [date, setDate] = useState("");
  const [time, setTime] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [unit, setUnit] = useState("");
  const [amount, setAmount] = useState("");
  const [count, setCount] = useState("");
  const [detail, setDetail] = useState("");
  const [finished, setFinished] = useState(false);

  const columns = [
    { fieldId: 'date', label: '일자', sx: { width: 200 } },
    { fieldId: 'time', label: '시간', sx: { width: 200 } },
    { fieldId: 'title', label: '약물명', sx: { width: 200 } },
    { fieldId: 'content', label: '함량', sx: { width: 200 } },
    { fieldId: 'unit', label: '단위', sx: { width: 100 } },
    { fieldId: 'amount', label: '투여량', sx: { width: 100 } },
    { fieldId: 'count', label: '투여횟수', sx: { width: 100 } },
    { fieldId: 'detail', label: '상세투여방법', sx: { width: 100 } },
    { fieldId: 'finished', label: '완료', sx: { width: 50 } },
    { fieldId: 'action', label: '', sx: { width: 100 } }
  ];

  const onAddRow = () => {
    const request = { date, time, title, content, unit, amount, count, detail };

    if (Object.values(request).filter(v => !v).length > 0) {
      return onRequired('CLINICAL.OBSERVATION.ADD.ROW');
    }

    onSuccess('처방 기록 추가되었습니다.');
    setValue('prescription_records', prescriptionRecordList ? [...prescriptionRecordList, request] : [request]);
    setValue("prescription_date", "");
    setDate("");
    setTime(null);
    setTitle("");
    setContent("");
    setUnit("");
    setAmount("");
    setCount("");
    setDetail("");
    setFinished(false);
  };
  console.log(finished);

  const inputRow = {
    id: 'add-prescription-record',
    date: (
        <Form.MuiTextField
            type="date"
            required={false}
            disabled={disabled}
            {...register("prescription_date", {
                onChange: (e) => setDate(e.target.value)
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
            placeholder="00:00 pm"
            InputProps={{ endAdornment: <AccessTime /> }}
          />
        )}
      />
    ),
    title: (
      <MuiTextField
        value={title}
        required={false}
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
    amount: (
      <MuiTextField
        value={amount}
        required={false}
        onChange={({ target: { value } }) => setAmount(value)}
      />
    ),
    count: (
      <MuiTextField
        value={count}
        required={false}
        onChange={({ target: { value } }) => setCount(value)}
      />
    ),
    detail: (
      <MuiTextField
        value={detail}
        required={false}
        onChange={({ target: { value } }) => setDetail(value)}
      />
    ),
    finished: (
        <Checkbox size="small" defaultChecked={false} value={finished} onChange={(e) => setFinished(e.target.checked)} />
    ),
    action: (
      <Button variant="contained" size="small" onClick={onAddRow}>
        추가
      </Button>
    ),
  };

  const onDeleteRow = (index: number) => {
    setValue(
      'prescription_records',
      prescriptionRecordList.filter((_, i) => i !== index)
    );
  };

  const displayRows = prescriptionRecordList ? 
    prescriptionRecordList.map((item, i) => ({
        ...item,
        id: i,
        time: formatStringToDate(item.time, 'hh:mm a'),
        finished: <Checkbox size="small" defaultChecked={item.finished} />,
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
  :
  []
  ;

  const tableRow = disabled ? displayRows : [inputRow, ...displayRows];

  return (
    <Fragment>
      <Grid item xs={12}>
        <MuiTable columns={columns} rows={[...tableRow]} />
      </Grid>
    </Fragment>
  );
};

export default GlucoseRecords;