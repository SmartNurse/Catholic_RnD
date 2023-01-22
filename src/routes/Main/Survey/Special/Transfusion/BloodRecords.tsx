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
  const bloodRecordList: IBloodRecord[] = watch('transfusion_record');

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
    { fieldId: 'time', label: '측정시간', sx: { width: 200 } },
    { fieldId: 'division', label: '구분', sx: { width: 200 } },
    { fieldId: 'sbp', label: 'SBP', sx: { width: 150 } },
    { fieldId: 'dbp', label: 'DBP', sx: { width: 150 } },
    { fieldId: 'pr', label: 'PR', sx: { width: 150 } },
    { fieldId: 'rr', label: 'RR', sx: { width: 150 } },
    { fieldId: 'bt', label: 'BT', sx: { width: 150 } },
    { fieldId: 'side_effects', label: '수혈 부작용', sx: { width: 200 } },
    { fieldId: 'notes', label: '비고', sx: { width: 150 } },
    { fieldId: 'action', label: '', sx: { width: 100 } }
  ];

  const divisions = ['수혈 시작 전', '수혈 시작 15분 후', '수혈 시작 30분 후', '수혈 시작 1시간 후', '수혈 시작 1시간 30분 후', '수혈 종료 시'];

  const onAddRow = () => {
    const request = { time: checkTime, division, sbp, dbp, pr, rr, bt, side_effects: sideEffect === 1 ? true : false, notes: etc };
  
    if (checkTime === null || division === "" || sbp === "" || dbp === "" || pr === "" || rr === "" || bt === "") {
      return onRequired('CLINICAL.OBSERVATION.ADD.ROW');
    }

    onSuccess('수혈 기록 추가되었습니다.');
    setValue('transfusion_record', bloodRecordList ? [...bloodRecordList, {...request}] : [{...request}]);
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
    time: (
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
    side_effects: (
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
    notes: (
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
      'transfusion_record',
      bloodRecordList.filter((_, i) => i !== index)
    );
  };

  const displayRows = bloodRecordList ? 
    bloodRecordList.map((item, i) => ({
        ...item,
        id: i,
        time: formatStringToDate(item.time, 'hh:mm a'),
        side_effects: item.side_effects == true ? "유" : "무",
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