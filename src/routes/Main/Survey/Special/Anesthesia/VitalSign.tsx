import { Fragment, useState, useEffect } from 'react';
import { AccessTime, Delete } from '@mui/icons-material';
import { MobileTimePicker } from '@mui/x-date-pickers';
import { Button, FormHelperText, Grid, IconButton, MenuItem, Box } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { Ti18nId } from 'hooks/useI18n';
import { IVitalSign } from 'apis/survey/type';
import { IFormValues, IFormWatch } from 'routes/Main/type';

import { formatStringToDate } from 'utils/formatting';

import MuiTable from 'components/MuiTable';
import MuiTextField from 'components/Form/MuiTextField';

interface Props extends IFormValues, IFormWatch {
  disabled?: boolean;
  onRequired: (id: Ti18nId) => void;
  onSuccess: (message: string) => void;
}

const VitalSign = (props: Props) => {
  const colors = ["#FE2503", "#FF9200", "#02F900", "#0333FF", "#942092"];

  const columns = [
    { fieldId: 'checkTime', label: '체크시간', sx: { width: 200 } },
    { fieldId: 'sbp', label: 'SBP (mmHg)' },
    { fieldId: 'dbp', label: 'DBP (mmHg)' },
    { fieldId: 'pr', label: 'PR (회)' },
    { fieldId: 'rr', label: 'RR (회)' },
    { fieldId: 'bt', label: 'BT (℃)' },
    { fieldId: 'sp02', label: 'SPO2 (%)' },
    { fieldId: 'etc', label: '비고', sx: { width: 200 } },
    { fieldId: 'action', label: '', sx: { width: 100 } },
  ];

  const etc_labels = ["환자 도착", "마취 시작", "마취 중", "마취 종료", "수술 시작", "수술 중", "수술 종료", "환자 퇴실", "기타"];

  const { disabled, watch, setValue, onRequired, onSuccess } = props;

  const vitalSignList: IVitalSign[] = watch('anesthesia.patient_status.records');
  const [vitalsignData, setVitalsignData] = useState<{name: string, data: {timestamp: string, value?: number, temp?: number}[]}[]>([
    { name: "BT (℃)", data: [] }, 
    { name: "PR (회)", data: [] }, 
    { name: "RR (회)", data: [] }, 
    { name: "SBP (mmHg)", data: [] }, 
    { name: "DBP (mmHg)", data: [] }, 
  ]);

  const [checkTime, setCheckTime] = useState(null);
  const [sbp, setSbp] = useState('');
  const [dbp, setDbp] = useState('');
  const [pr, setPr] = useState('');
  const [rr, setRr] = useState('');
  const [bt, setBt] = useState('');
  const [sp02, setSp02] = useState('');
  const [etc, setEtc] = useState('');
  const [errors, setErrors] = useState({
    sbp: 0,
    dbp: 0,
    pr: 0,
    rr: 0,
    bt: 0
  }); 

  const onAddRow = () => {
    const request = { checkTime, sbp, dbp, pr, rr, bt, sp02, etc };
    if (Object.values(request).filter(v => !v).length > 0) {
      return onRequired('CLINICAL.OBSERVATION.ADD.ROW');
    }

    onSuccess('Vital Sign 추가되었습니다.');
    setValue('anesthesia.patient_status.records', vitalSignList ? [...vitalSignList, {...request, etc }] : [request]);
    setCheckTime(null);
    setSbp('');
    setDbp('');
    setPr('');
    setRr('');
    setBt('');
    setSp02('');
    setEtc('');
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
      <>
        <MuiTextField
          value={sbp}
          required={false}
          onChange={({ target: { value } }) => {
            setSbp(value);

            if (Number(value) >= 250) setErrors({...errors, sbp: 1});
            else setErrors({...errors, sbp: 0});
          }}
          error={Number(sbp) >= 250 ? true : false}
        />
        {errors.sbp ? <FormHelperText error={true}>SBP 값은 250 미만입니다</FormHelperText> : null}
      </>
    ),
    dbp: (
      <>
        <MuiTextField
          value={dbp}
          required={false}
          onChange={({ target: { value } }) => {
            setDbp(value);

            if (Number(value) >= 250) setErrors({...errors, dbp: 1});
            else setErrors({...errors, dbp: 0});
          }}
          error={Number(dbp) >= 250 ? true : false}
        />
        {errors.dbp ? <FormHelperText error={true}>DBP 값은 250 미만입니다</FormHelperText> : null}
      </>
    ),
    pr: (
      <>
        <MuiTextField
          value={pr}
          required={false}
          onChange={({ target: { value } }) => {
            setPr(value);

            if (Number(value) >= 200) setErrors({...errors, pr: 1});
            else setErrors({...errors, pr: 0});
          }}
          error={Number(pr) >= 200 ? true : false}
        />
        {errors.pr ? <FormHelperText error={true}>PR 값은 200 미만입니다</FormHelperText> : null}
      </>
    ),
    rr: (
      <>
        <MuiTextField
          value={rr}
          required={false}
          onChange={({ target: { value } }) => {
            setRr(value);

            if (Number(value) >= 200) setErrors({...errors, rr: 1});
            else setErrors({...errors, rr: 0});
          }}
          error={Number(rr) >= 200 ? true : false}
        />
        {errors.rr ? <FormHelperText error={true}>RR 값은 200 미만입니다</FormHelperText> : null}
      </>
    ),
    bt: (
      <>
        <MuiTextField
          value={bt}
          required={false}
          onChange={({ target: { value } }) => {
            setBt(value);

            if (value === "" || Number(value) > 30 && Number(value) < 43) setErrors({...errors, bt: 0});
            else setErrors({...errors, bt: 1});
          }}
          error={bt === "" || Number(bt) > 30 && Number(bt) < 43 ? false : true}
        />
        {errors.bt ? <FormHelperText error={true}>BT 값은 30 초과 43 미만입니다</FormHelperText> : null}
      </>
    ),
    sp02: (
      <MuiTextField
        value={sp02}
        required={false}
        onChange={({ target: { value } }) => setSp02(value)}
      />
    ),
    etc: (
      <MuiTextField
        select
        value={etc}
        required={false}
        onChange={({ target: { value }}) => setEtc(value)}
      >
        {etc_labels.map((option) => <MenuItem value={option}>{option}</MenuItem>)}
      </MuiTextField>
    ),
    action: (
      <Button variant="contained" size="small" onClick={onAddRow}>
        추가
      </Button>
    ),
  };

  const onDeleteRow = (index: number) => {
    setValue(
      'anesthesia.patient_status.records',
      vitalSignList.filter((_, i) => i !== index)
    );
  };

  const displayRows = vitalSignList ?
    vitalSignList.slice().sort((a, b) => Number(new Date(a.checkTime)) - Number(new Date(b.checkTime))).map((item, i) => ({
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
  }))
  :
  [];

  const tableRow = disabled ? displayRows : [inputRow, ...displayRows];

  useEffect(() => {
    const sortedVitalSignList = vitalSignList ? vitalSignList.slice().sort((a, b) => Number(new Date(a.checkTime)) - Number(new Date(b.checkTime))) : [];
    
    if (sortedVitalSignList.length) {
      const btData = sortedVitalSignList.map((v) => { return {timestamp: formatStringToDate(v.checkTime, 'hh:mm:a'), temp: v.bt} });
      const prData = sortedVitalSignList.map((v) => { return {timestamp: formatStringToDate(v.checkTime, 'hh:mm:a'), value: v.pr }});
      const rrData = sortedVitalSignList.map((v) => { return {timestamp: formatStringToDate(v.checkTime, 'hh:mm:a'), value: v.rr }});
      const sbpData = sortedVitalSignList.map((v) => { return {timestamp: formatStringToDate(v.checkTime, 'hh:mm:a'), value: v.sbp }});
      const dbpData = sortedVitalSignList.map((v) => { return {timestamp: formatStringToDate(v.checkTime, 'hh:mm:a'), value: v.dbp }});  

      setVitalsignData([
        { name: "BT (℃)", data: [...btData] }, 
        { name: "PR (회)", data: [...prData] }, 
        { name: "RR (회)", data: [...rrData] }, 
        { name: "SBP (mmHg)", data: [...sbpData] }, 
        { name: "DBP (mmHg)", data: [...dbpData] }, 
      ]);
    }
  }, [vitalSignList]);

  return (
    <Fragment>
      <Box sx={{ width: "80%", height: "500px", margin: "50px auto 0px auto"}}>
        <ResponsiveContainer width="100%" height="100%">
            <LineChart margin={{ top:5, right: 5, bottom: 5, left: 5 }}>
                <CartesianGrid horizontal={false} />
                <XAxis
                  dataKey="timestamp"
                  type="category"
                  allowDuplicatedCategory={false}
                  padding={{ left: 50, right: 50 }}
                  tickMargin={10}
                />
                <YAxis
                  yAxisId={0}
                  orientation="left"
                  dataKey="value"
                  type="number"
                  tickCount={11}
                  domain={[0, 200]}
                  tickMargin={10}
                />
                <YAxis
                  yAxisId={1}
                  orientation="right"
                  dataKey="temp"
                  type="number"
                  domain={[30, 42]}
                  tickMargin={10}
                />
                <Tooltip />
                <Legend
                    layout="vertical"
                    align="right"
                    verticalAlign="middle"
                    formatter={(value) => <span style={{ color: "black" }}>{value}</span>}
                    wrapperStyle={{ backgroundColor: "#EBEBEB", padding: "15px 10px", marginLeft: "10px" }}
                />
                {vitalsignData.map((v, idx) => (
                    <Line
                      dataKey={v.name === "BT (℃)" ? "temp" : "value"}
                      data={v.data}
                      name={v.name}
                      key={v.name}
                      stroke={colors[idx]}
                      dot={{ stroke: colors[idx], strokeWidth: 4 }}
                      yAxisId={v.name === "BT (℃)" ? 1 : 0}
                    />
                ))}
            </LineChart>
        </ResponsiveContainer>
    </Box>
      <Grid item xs={12}>
        <MuiTable columns={columns} rows={tableRow} />
      </Grid>
    </Fragment>
  );
};

export default VitalSign;
