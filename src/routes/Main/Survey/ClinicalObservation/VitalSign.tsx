import { Fragment, useState } from 'react';
import { AccessTime, Delete } from '@mui/icons-material';
import { Button, Grid, IconButton } from '@mui/material';
import { MobileTimePicker } from '@mui/x-date-pickers';

import { Ti18nId } from 'hooks/useI18n';
import { IVitalSign } from 'apis/survey/type';
import { IFormValues, IFormWatch } from 'routes/Main/type';
import MuiTable from 'components/MuiTable';
import MuiTextField from 'components/Form/MuiTextField';
import { formatStringToDate } from 'utils/formatting';

import SectionTitle from '../components/SectionTitle';

interface Props extends IFormValues, IFormWatch {
  disabled?: boolean;
  onRequired: (id: Ti18nId) => void;
  onSuccess: (message: string) => void;
}

const VitalSign = (props: Props) => {
  const { disabled, watch, setValue, onRequired, onSuccess } = props;
  const vitalSignList: IVitalSign[] = watch('vital_sign');

  const [checkTime, setCheckTime] = useState(null);
  const [sbp, setSbp] = useState('');
  const [dbp, setDbp] = useState('');
  const [pr, setPr] = useState('');
  const [rr, setRr] = useState('');
  const [bt, setBt] = useState('');
  const [sp02, setSp02] = useState('');

  const columns = [
    { fieldId: 'checkTime', label: '체크시간', sx: { width: 200 } },
    { fieldId: 'sbp', label: 'SBP (mmHg)' },
    { fieldId: 'dbp', label: 'DBP (mmHg)' },
    { fieldId: 'pr', label: 'PR (회)' },
    { fieldId: 'rr', label: 'RR (회)' },
    { fieldId: 'bt', label: 'BT (℃)' },
    { fieldId: 'sp02', label: 'SPO2 (%)' },
    { fieldId: 'action', label: '', sx: { width: 100 } },
  ];

  const onAddRow = () => {
    const request = { checkTime, sbp, dbp, pr, rr, bt, sp02 };
    if (Object.values(request).filter(v => !v).length > 0) {
      return onRequired('CLINICAL.OBSERVATION.ADD.ROW');
    }

    onSuccess('Vital Sign 추가되었습니다.');
    setValue('vital_sign', [...vitalSignList, request]);
    setCheckTime(null);
    setSbp('');
    setDbp('');
    setPr('');
    setRr('');
    setBt('');
    setSp02('');
  };

  const inputRow = {
    id: 'add-vital-sign',
    checkTime: (
      <MobileTimePicker
        value={checkTime}
        onChange={setCheckTime}
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
    sbp: (
      <MuiTextField
        value={sbp}
        required={false}
        onChange={({ target: { value } }) => setSbp(value)}
      />
    ),
    dbp: (
      <MuiTextField
        value={dbp}
        required={false}
        onChange={({ target: { value } }) => setDbp(value)}
      />
    ),
    pr: (
      <MuiTextField
        value={pr}
        required={false}
        onChange={({ target: { value } }) => setPr(value)}
      />
    ),
    rr: (
      <MuiTextField
        value={rr}
        required={false}
        onChange={({ target: { value } }) => setRr(value)}
      />
    ),
    bt: (
      <MuiTextField
        value={bt}
        required={false}
        onChange={({ target: { value } }) => setBt(value)}
      />
    ),
    sp02: (
      <MuiTextField
        value={sp02}
        required={false}
        onChange={({ target: { value } }) => setSp02(value)}
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
      'vital_sign',
      vitalSignList.filter((_, i) => i !== index)
    );
  };

  const displayRows = vitalSignList?.map((item, i) => ({
    ...item,
    id: i,
    checkTime: formatStringToDate(item.checkTime, 'hh:mm a'),
    action: (
      <IconButton
        size="small"
        onClick={() => onDeleteRow(i)}
        sx={{ display: disabled ? 'none' : 'block' }}
      >
        <Delete />
      </IconButton>
    ),
  }));

  const tableRow = disabled ? displayRows : [inputRow, ...displayRows];

  return (
    <Fragment>
      <SectionTitle title="Vital Sign" />
      <Grid item xs={12}>
        <MuiTable columns={columns} rows={tableRow} />
      </Grid>
    </Fragment>
  );
};

export default VitalSign;
