import Form from 'components/Form';

import { Fragment, useState } from 'react';
import { AccessTime, Delete } from '@mui/icons-material';
import { Button, Grid, IconButton, MenuItem, TextField } from '@mui/material';
import { MobileTimePicker } from '@mui/x-date-pickers';

import { Ti18nId } from 'hooks/useI18n';
import { IBloodRecord } from 'apis/survey/type';
import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';
import MuiTable from 'components/MuiTable';
import MuiTextField from 'components/Form/MuiTextField';

import { formatStringToDate } from "utils/formatting";

interface Props extends IFormValues, IFormWatch, IFormRegister {
  disabled?: boolean;
  onRequired: (id: Ti18nId) => void;
  onSuccess: (message: string) => void;
}

const BloodRecords = (props: Props) => {
  const { disabled, watch, setValue, onRequired, onSuccess, register } = props;
  const bloodRecordList: IBloodRecord[] = watch('blood_record');

  const [checkTime, setCheckTime] = useState(null);
  const [division, setDivision] = useState("");
  const [sbp, setSbp] = useState("");
  const [dbp, setDbp] = useState("");
  const [pr, setPr] = useState("");
  const [rr, setRr] = useState("");
  const [bt, setBt] = useState("");
  const [sideEffect, setSideEffect] = useState(1);
  const [etc, setEtc] = useState("");

  const columns = [
    { fieldId: 'checkTime', label: '측정시간', sx: { width: 200 } },
    { fieldId: 'division', label: '구분', sx: { width: 200 } },
    { fieldId: 'sbp', label: 'SBP', sx: { width: 150 } },
    { fieldId: 'dbp', label: 'DBP', sx: { width: 150 } },
    { fieldId: 'pr', label: 'PR', sx: { width: 150 } },
    { fieldId: 'rr', label: 'RR', sx: { width: 150 } },
    { fieldId: 'bt', label: 'BT', sx: { width: 150 } },
    { fieldId: 'sideEffect', label: '수혈 부작용', sx: { width: 200 } },
    { fieldId: 'etc', label: '비고', sx: { width: 150 } },
    { fieldId: 'action', label: '', sx: { width: 100 } }
  ];

  const divisions = ['수혈 직후', '수혈 후 15분', '수혈 후 30분'];

  const onAddRow = () => {
    const request = { checkTime, division, sbp, dbp, pr, rr, bt, sideEffect, etc };

    console.log(request);
    if (Object.values(request).filter(v => !v).length > 0) {
      return onRequired('CLINICAL.OBSERVATION.ADD.ROW');
    }

    onSuccess('투약 추가되었습니다.');
    setValue('blood_record', bloodRecordList ? [...bloodRecordList, request] : [request]);
    setCheckTime(null);
    setDivision("");
    setSbp("");
    setDbp("");
    setPr("");
    setRr("");
    setBt("");
    setSideEffect(1);
    setEtc("");
  };

  const inputRow = {
    id: 'add-blood-record',
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
    division: (
      <MuiTextField
        select
        value={division}
        required={false}
        onChange={({ target: { value } }) => setDivision(value)}
      >
        {divisions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
        ))}
      </MuiTextField>
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
    sideEffect: (
      <Form.MuiRadioGroup
        disabled={disabled}
        i18nNullKey="ETC"
        i18nKey="BLOOD.RECORD.SIDE.EFFECT"
        values={[1 , 2]}
        defaultValue={sideEffect}
        value={sideEffect}
        onChange={(value) => setSideEffect(value)}
      />
    ),
    etc: (
      <MuiTextField
        value={etc}
        required={false}
        onChange={({ target: { value } }) => setEtc(value)}
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
      'blood_record',
      bloodRecordList.filter((_, i) => i !== index)
    );
  };

  const displayRows = bloodRecordList ? 
    bloodRecordList.map((item, i) => ({
        ...item,
        id: i,
        checkTime: formatStringToDate(item.checkTime, 'hh:mm a'),
        sideEffect: sideEffect === 1 ? "유" : "무",
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

export default BloodRecords;