import Form from 'components/Form';

import { Fragment, useState } from 'react';
import { Delete } from '@mui/icons-material';
import { Button, Grid, IconButton } from '@mui/material';

import { Ti18nId } from 'hooks/useI18n';
import { IECardexLab } from 'apis/survey/type';
import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';
import MuiTable from 'components/MuiTable';
import MuiTextField from 'components/Form/MuiTextField';

interface Props extends IFormValues, IFormWatch, IFormRegister {
  disabled?: boolean;
  onRequired: (id: Ti18nId) => void;
  onSuccess: (message: string) => void;
}

const Lab = (props: Props) => {
  const { disabled, watch, setValue, onRequired, onSuccess, register } = props;
  const labList: IECardexLab[] = watch('lab_data');

  const [date, setDate] = useState('');
  const [lab, setLab] = useState('');
  const [receipt, setReceipt] = useState('');
  const [result, setResult] = useState('');

  const columns = [
    { fieldId: 'date', label: '일시', sx: { width: 200 } },
    { fieldId: 'lab', label: 'LAB' },
    {
      fieldId: 'implementing_and_inspection',
      label: '접수/시행',
      sx: { width: 200 },
    },
    { fieldId: 'result', label: '결과', sx: { width: 200 } },
    { fieldId: 'action', label: '', sx: { width: 100 } },
  ];

  const onAddRow = () => {
    const request = { date, lab, implementing_and_inspection: receipt, result };

    // console.log(request);
    // if (Object.values(request).filter(v => !v).length > 0) {
    //   return onRequired('CLINICAL.OBSERVATION.ADD.ROW');
    // }

    onSuccess('LAB 추가되었습니다.');
    setValue('lab_data', labList ? [...labList, request] : [request]);
    setValue('etc.lab.date', '');
    setDate('');
    setLab('');
    setReceipt('');
    setResult('');
  };

  const inputRow = {
    id: 'add-lab',
    date: (
      <Form.MuiTextField
        type="date"
        required={false}
        disabled={disabled}
        {...register('etc.lab.date', {
          onChange: e => setDate(e.target.value),
        })}
      />
    ),
    lab: (
      <MuiTextField
        value={lab}
        required={false}
        onChange={({ target: { value } }) => setLab(value)}
      />
    ),
    implementing_and_inspection: (
      <MuiTextField
        value={receipt}
        required={false}
        onChange={({ target: { value } }) => setReceipt(value)}
      />
    ),
    result: (
      <MuiTextField
        value={result}
        required={false}
        onChange={({ target: { value } }) => setResult(value)}
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
      'lab_data',
      labList.filter((_, i) => i !== index)
    );
  };

  const displayRows = labList
    ? labList.map((item, i) => ({
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
  const tableRow = disabled ? displayRows : [inputRow, ...displayRows];

  return (
    <Fragment>
      <Grid item xs={12}>
        <MuiTable columns={columns} rows={[...tableRow]} />
      </Grid>
    </Fragment>
  );
};

export default Lab;
