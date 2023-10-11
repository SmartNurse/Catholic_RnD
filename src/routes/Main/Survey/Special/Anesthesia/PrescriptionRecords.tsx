import Form from 'components/Form';

import { Fragment, useState } from 'react';
import { Delete } from '@mui/icons-material';
import { Button, Grid, IconButton } from '@mui/material';
import { AccessTime } from '@mui/icons-material';
import { MobileTimePicker } from '@mui/x-date-pickers';

import { formatStringToDate } from 'utils/formatting';
import { Ti18nId } from 'hooks/useI18n';
import { IAnesthesiaPrescriptionRecord } from 'apis/survey/type';
import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';

import MuiTable from 'components/MuiTable';
import MuiTextField from 'components/Form/MuiTextField';
import SectionTitle from '../../components/SectionTitle';

interface Props extends IFormValues, IFormWatch, IFormRegister {
  disabled?: boolean;
  onRequired: (id: Ti18nId) => void;
  onSuccess: (message: string) => void;
}

const PrescriptionRecords = (props: Props) => {
  const { disabled, watch, setValue, onRequired, onSuccess, register } = props;
  const prescriptionRecordList: IAnesthesiaPrescriptionRecord[] = watch(
    'prescription_record'
  );

  const [time, setTime] = useState(null);
  const [desc, setDesc] = useState('');

  const columns = [
    { fieldId: 'time', label: '', sx: { width: 200 } },
    { fieldId: 'content', label: '' },
    { fieldId: 'action', label: '', sx: { width: 100 } },
  ];

  const onAddRow = () => {
    const request = { time, content: desc };

    if (Object.values(request).filter(v => !v).length > 0) {
      return onRequired('CLINICAL.OBSERVATION.ADD.ROW');
    }
    // console.log(request);
    onSuccess('처방 기록이 추가되었습니다.');
    setValue(
      'prescription_record',
      prescriptionRecordList ? [...prescriptionRecordList, request] : [request]
    );
    setTime(null);
    setDesc('');
  };

  const inputRow = {
    id: 'add-remark',
    time: (
      <MobileTimePicker
        value={time}
        onChange={setTime}
        renderInput={params => (
          <Form.MuiTextField
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
      'prescription_record',
      prescriptionRecordList.filter((_, i) => i !== index)
    );
  };

  const displayRows = prescriptionRecordList
    ? prescriptionRecordList.map((item, i) => ({
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
      <SectionTitle title="처방 기록" />
      <Grid item xs={12}>
        <MuiTable columns={columns} rows={[...tableRow]} />
      </Grid>
    </Fragment>
  );
};

export default PrescriptionRecords;
