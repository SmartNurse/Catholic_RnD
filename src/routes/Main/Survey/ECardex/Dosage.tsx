import Form from 'components/Form';

import { Fragment, useState } from 'react';
import { AccessTime, Delete } from '@mui/icons-material';
import { Button, Grid, IconButton } from '@mui/material';
import { MobileTimePicker } from '@mui/x-date-pickers';

import { Ti18nId } from 'hooks/useI18n';
import { IECardexDosage } from 'apis/survey/type';
import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';
import MuiTable from 'components/MuiTable';
import MuiTextField from 'components/Form/MuiTextField';

import { formatStringToDate } from 'utils/formatting';

interface Props extends IFormValues, IFormWatch, IFormRegister {
  disabled?: boolean;
  onRequired: (id: Ti18nId) => void;
  onSuccess: (message: string) => void;
}

const Dosage = (props: Props) => {
  const { disabled, watch, setValue, onRequired, onSuccess, register } = props;
  const dosageList: IECardexDosage[] = watch('medication_data');

  const [date, setDate] = useState('');
  const [dosage, setDosage] = useState('');
  const [method, setMethod] = useState('');
  const [time, setTime] = useState(null);
  const [termination, setTermination] = useState('');

  const columns = [
    { fieldId: 'date', label: '일시', sx: { width: 200 } },
    { fieldId: 'medication', label: '투약' },
    { fieldId: 'method', label: '방법', sx: { width: 200 } },
    { fieldId: 'time', label: '시간', sx: { width: 200 } },
    { fieldId: 'end', label: '중지', sx: { width: 200 } },
    { fieldId: 'action', label: '', sx: { width: 100 } },
  ];

  const onAddRow = () => {
    const request = {
      date,
      medication: dosage,
      method,
      time,
      end: termination,
    };

    // console.log(request);
    // if (Object.values(request).filter(v => !v).length > 0) {
    //   return onRequired('CLINICAL.OBSERVATION.ADD.ROW');
    // }

    onSuccess('투약 추가되었습니다.');
    setValue(
      'medication_data',
      dosageList ? [...dosageList, request] : [request]
    );
    setValue('etc.dosage.date', '');
    setDate('');
    setDosage('');
    setMethod('');
    setTime(null);
    setTermination('');
  };

  const inputRow = {
    id: 'add-dosage',
    date: (
      <Form.MuiTextField
        type="date"
        required={false}
        disabled={disabled}
        {...register('etc.dosage.date', {
          onChange: e => setDate(e.target.value),
        })}
      />
    ),
    medication: (
      <MuiTextField
        required={false}
        onChange={({ target: { value } }) => setDosage(value)}
      />
    ),
    method: (
      <MuiTextField
        value={method}
        required={false}
        onChange={({ target: { value } }) => setMethod(value)}
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
    end: (
      <MuiTextField
        value={termination}
        required={false}
        onChange={({ target: { value } }) => setTermination(value)}
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
      'medication_data',
      dosageList.filter((_, i) => i !== index)
    );
  };

  const displayRows = dosageList
    ? dosageList.map((item, i) => ({
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
  const tableRow = disabled ? displayRows : [inputRow, ...displayRows];

  return (
    <Fragment>
      <Grid item xs={12}>
        <MuiTable columns={columns} rows={[...tableRow]} />
      </Grid>
    </Fragment>
  );
};

export default Dosage;
