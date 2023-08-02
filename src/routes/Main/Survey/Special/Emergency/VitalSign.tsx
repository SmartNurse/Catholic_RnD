import { Fragment, useState, useEffect } from 'react';
import { AccessTime, Delete } from '@mui/icons-material';
import { MobileTimePicker } from '@mui/x-date-pickers';
import {
  Button,
  FormHelperText,
  Grid,
  IconButton,
  MenuItem,
  Box,
} from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import { Ti18nId } from 'hooks/useI18n';
import { IEmergencyVitalsignRecord } from 'apis/survey/type';
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
  const colors = ['#FE2503', '#FF9200', '#02F900', '#0333FF', '#942092'];

  const columns = [
    { fieldId: 'check_time', label: '체크시간', sx: { width: 200 } },
    { fieldId: 'sbp', label: 'SBP (mmHg)' },
    { fieldId: 'dbp', label: 'DBP (mmHg)' },
    { fieldId: 'pr', label: 'PR (회)' },
    { fieldId: 'rr', label: 'RR (회)' },
    { fieldId: 'bt', label: 'BT (℃)' },
    { fieldId: 'note', label: '비고', sx: { width: 200 } },
    { fieldId: 'action', label: '', sx: { width: 100 } },
  ];

  const etc_labels = ['도착', '퇴실', '직접입력'];

  const { disabled, watch, setValue, onRequired, onSuccess } = props;

  const vitalSignList: IEmergencyVitalsignRecord[] = watch(
    'patient_status_list_record'
  );
  const [vitalsignData, setVitalsignData] = useState<
    {
      name: string;
      data: { timestamp: string; value?: string; temp?: string }[];
    }[]
  >([
    { name: 'BT (℃)', data: [] },
    { name: 'PR (회)', data: [] },
    { name: 'RR (회)', data: [] },
    { name: 'SBP (mmHg)', data: [] },
    { name: 'DBP (mmHg)', data: [] },
  ]);

  const [checkTime, setCheckTime] = useState(null);
  const [sbp, setSbp] = useState('');
  const [dbp, setDbp] = useState('');
  const [pr, setPr] = useState('');
  const [rr, setRr] = useState('');
  const [bt, setBt] = useState('');
  const [etc, setEtc] = useState('');
  const [labelEtc, setLabelEtc] = useState('');
  const [errors, setErrors] = useState({
    sbp: 0,
    dbp: 0,
    pr: 0,
    rr: 0,
    bt: 0,
  });

  const onAddRow = () => {
    const request = {
      check_time: checkTime,
      sbp,
      dbp,
      pr,
      rr,
      bt,
      note: etc === '직접입력' ? labelEtc : etc,
    };

    if (checkTime === null) {
      return onRequired('CLINICAL.OBSERVATION.ADD.ROW');
    } else if (sbp === '') {
      return onRequired('CLINICAL.OBSERVATION.ADD.ROW');
    } else if (dbp === '') {
      return onRequired('CLINICAL.OBSERVATION.ADD.ROW');
    } else if (pr === '') {
      return onRequired('CLINICAL.OBSERVATION.ADD.ROW');
    } else if (rr === '') {
      return onRequired('CLINICAL.OBSERVATION.ADD.ROW');
    } else if (bt === '') {
      return onRequired('CLINICAL.OBSERVATION.ADD.ROW');
    }

    onSuccess('Vital Sign 추가되었습니다.');

    const newRecord = vitalSignList
      ? [...vitalSignList, { ...request, etc }]
      : [request];
    setValue(
      'patient_status_list_record',
      newRecord
        .slice()
        .sort((a, b) =>
          a.check_time && b.check_time
            ? Number(new Date(a.check_time)) - Number(new Date(b.check_time))
            : 0
        )
    );
    setCheckTime(null);
    setSbp('');
    setDbp('');
    setPr('');
    setRr('');
    setBt('');
    setEtc('');
    setLabelEtc('');
  };

  const inputRow = {
    id: 'add-vital-sign',
    check_time: (
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

            if (Number(value) >= 250) setErrors({ ...errors, sbp: 1 });
            else setErrors({ ...errors, sbp: 0 });
          }}
          error={Number(sbp) >= 250 ? true : false}
        />
        {errors.sbp ? (
          <FormHelperText error={true}>SBP 값은 250 미만입니다</FormHelperText>
        ) : null}
      </>
    ),
    dbp: (
      <>
        <MuiTextField
          value={dbp}
          required={false}
          onChange={({ target: { value } }) => {
            setDbp(value);

            if (Number(value) >= 250) setErrors({ ...errors, dbp: 1 });
            else setErrors({ ...errors, dbp: 0 });
          }}
          error={Number(dbp) >= 250 ? true : false}
        />
        {errors.dbp ? (
          <FormHelperText error={true}>DBP 값은 250 미만입니다</FormHelperText>
        ) : null}
      </>
    ),
    pr: (
      <>
        <MuiTextField
          value={pr}
          required={false}
          onChange={({ target: { value } }) => {
            setPr(value);

            if (Number(value) >= 200) setErrors({ ...errors, pr: 1 });
            else setErrors({ ...errors, pr: 0 });
          }}
          error={Number(pr) >= 200 ? true : false}
        />
        {errors.pr ? (
          <FormHelperText error={true}>PR 값은 200 미만입니다</FormHelperText>
        ) : null}
      </>
    ),
    rr: (
      <>
        <MuiTextField
          value={rr}
          required={false}
          onChange={({ target: { value } }) => {
            setRr(value);

            if (Number(value) >= 200) setErrors({ ...errors, rr: 1 });
            else setErrors({ ...errors, rr: 0 });
          }}
          error={Number(rr) >= 200 ? true : false}
        />
        {errors.rr ? (
          <FormHelperText error={true}>RR 값은 200 미만입니다</FormHelperText>
        ) : null}
      </>
    ),
    bt: (
      <>
        <MuiTextField
          value={bt}
          required={false}
          onChange={({ target: { value } }) => {
            setBt(value);

            if (value === '' || (Number(value) > 30 && Number(value) < 43))
              setErrors({ ...errors, bt: 0 });
            else setErrors({ ...errors, bt: 1 });
          }}
          error={
            bt === '' || (Number(bt) > 30 && Number(bt) < 43) ? false : true
          }
        />
        {errors.bt ? (
          <FormHelperText error={true}>
            BT 값은 30 초과 43 미만입니다
          </FormHelperText>
        ) : null}
      </>
    ),
    note: (
      <div style={{ width: '300px', display: 'flex' }}>
        <MuiTextField
          select
          value={etc}
          required={false}
          onChange={({ target: { value } }) => setEtc(value)}
        >
          {etc_labels.map(option => {
            return <MenuItem value={option}>{option}</MenuItem>;
          })}
        </MuiTextField>
        {etc === '직접입력' && (
          <MuiTextField
            sx={{ marginLeft: '10px' }}
            value={labelEtc}
            onChange={({ target: { value } }) => setLabelEtc(value)}
          />
        )}
      </div>
    ),
    action: (
      <Button variant="contained" size="small" onClick={onAddRow}>
        추가
      </Button>
    ),
  };

  const onDeleteRow = (index: number) => {
    setValue(
      'patient_status_list_record',
      vitalSignList.filter((_, i) => i !== index)
    );
  };

  console.log('오류바이탈', vitalSignList);

  const displayRows = vitalSignList
    ? vitalSignList.map((item, i) => ({
        ...item,
        id: i,
        check_time: formatStringToDate(item.check_time, 'hh:mm a'),
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

  useEffect(() => {
    const sortedVitalSignList = vitalSignList ? [...vitalSignList] : [];

    if (sortedVitalSignList.length) {
      const btData = sortedVitalSignList.map(v => {
        return {
          timestamp: formatStringToDate(v.check_time, 'hh:mm:a'),
          note: v.note,
          temp: v.bt,
        };
      });
      const prData = sortedVitalSignList.map(v => {
        return {
          timestamp: formatStringToDate(v.check_time, 'hh:mm:a'),
          note: v.note,
          value: v.pr,
        };
      });
      const rrData = sortedVitalSignList.map(v => {
        return {
          timestamp: formatStringToDate(v.check_time, 'hh:mm:a'),
          note: v.note,
          value: v.rr,
        };
      });
      const sbpData = sortedVitalSignList.map(v => {
        return {
          timestamp: formatStringToDate(v.check_time, 'hh:mm:a'),
          note: v.note,
          value: v.sbp,
        };
      });
      const dbpData = sortedVitalSignList.map(v => {
        return {
          timestamp: formatStringToDate(v.check_time, 'hh:mm:a'),
          note: v.note,
          value: v.dbp,
        };
      });

      setVitalsignData([
        { name: 'BT (℃)', data: [...btData] },
        { name: 'PR (회)', data: [...prData] },
        { name: 'RR (회)', data: [...rrData] },
        { name: 'SBP (mmHg)', data: [...sbpData] },
        { name: 'DBP (mmHg)', data: [...dbpData] },
      ]);
    }
  }, [vitalSignList]);

  return (
    <Fragment>
      <Box sx={{ width: '80%', height: '500px', margin: '50px auto 0px auto' }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
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
              formatter={value => (
                <span style={{ color: 'black' }}>{value}</span>
              )}
              wrapperStyle={{
                backgroundColor: '#EBEBEB',
                padding: '15px 10px',
                marginLeft: '10px',
              }}
            />
            {vitalsignData.map((v, idx) => (
              <Line
                dataKey={v.name === 'BT (℃)' ? 'temp' : 'value'}
                data={v.data}
                name={v.name}
                key={v.name}
                stroke={colors[idx]}
                dot={{ stroke: colors[idx], strokeWidth: 4 }}
                yAxisId={v.name === 'BT (℃)' ? 1 : 0}
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
