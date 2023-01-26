import Form from 'components/Form';

import { Fragment, useState } from 'react';
import { AccessTime, Delete } from '@mui/icons-material';
import { Button, Grid, IconButton } from '@mui/material';
import { MobileTimePicker } from '@mui/x-date-pickers';

import { Ti18nId } from 'hooks/useI18n';
import { INursingRecord } from 'apis/survey/type';
import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';
import MuiTable from 'components/MuiTable';
import MuiTextField from 'components/Form/MuiTextField';
import SectionTitle from '../../components/SectionTitle';

import { formatStringToDate } from "utils/formatting";

interface Props extends IFormValues, IFormWatch, IFormRegister {
  disabled?: boolean;
  onRequired: (id: Ti18nId) => void;
  onSuccess: (message: string) => void;
}

const NursingRecords = (props: Props) => {
  const { disabled, watch, setValue, onRequired, onSuccess, register } = props;
  const nursingRecordList: INursingRecord[] = watch('nursing_records');

  const [date, setDate] = useState("");
  const [time, setTime] = useState(null);
  const [desc, setDesc] = useState("");

  const columns = [
    { fieldId: 'date', label: '', sx: { width: 200 } },
    { fieldId: 'time', label: '', sx: { width: 200 } },
    { fieldId: 'content', label: '' },
    { fieldId: 'action', label: '', sx: { width: 100 } }
  ];

  const onAddRow = () => {
    const request = {
        date,
        time,
        content: desc,
    };

    if (Object.values(request).filter(v => !v).length > 0) {
      return onRequired('CLINICAL.OBSERVATION.ADD.ROW');
    }

    onSuccess('간호 기록 추가되었습니다.');
    setValue('nursing_records', nursingRecordList ? [...nursingRecordList, request] : [request]);
    setValue("nursing_records.date", "");
    setDate("");
    setTime(null);
    setDesc("");
  };

  const inputRow = {
    id: 'add-glucose-record',
    date: (
        <Form.MuiTextField
            type="date"
            required={false}
            disabled={disabled}
            {...register("nursing_records.date", {
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
    content: (
          <MuiTextField
              value={desc}
              required={false}
              onChange={({ target: { value } }) => setDesc(value)}
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
      'nursing_records',
      nursingRecordList.filter((_, i) => i !== index)
    );
  };

  const displayRows = nursingRecordList ? 
    nursingRecordList.map((item, i) => ({
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
  :
  []
  ;

  const tableRow = disabled ? displayRows : [inputRow, ...displayRows];

  return (
    <Fragment>
      <SectionTitle title="간호 기록" />
      <Grid item xs={12}>
        <MuiTable columns={columns} rows={[...tableRow]} />
      </Grid>
    </Fragment>
  );
};

export default NursingRecords;