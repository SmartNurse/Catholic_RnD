import { Fragment, useState, useEffect } from 'react';
import { AccessTime, Delete, DetailsTwoTone, Sort } from '@mui/icons-material';
import { Button, FormHelperText, Grid, IconButton } from '@mui/material';
import { MobileTimePicker } from '@mui/x-date-pickers';

import { Ti18nId } from 'hooks/useI18n';
import { IVitalSign } from 'apis/survey/type';
import { IFormValues, IFormWatch } from 'routes/Main/type';
import MuiTable from 'components/MuiTable';
import MuiTextField from 'components/Form/MuiTextField';
import { formatStringToDate, formatTimeStrToNum } from 'utils/formatting';

import SectionTitle from '../components/SectionTitle';

import useVitalSign from 'store/vitalsign/useVitalsign';

interface Props extends IFormValues, IFormWatch {
  disabled?: boolean;
  onRequired: (id: Ti18nId) => void;
  onSuccess: (message: string) => void;
}

const VitalSign = (props: Props) => {
  const { vitalsign, onUpdateSign } = useVitalSign();

  const { disabled, watch, setValue, onRequired, onSuccess } = props;
  const vitalSignList: IVitalSign[] = watch('vital_sign');

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
    bt: 0,
  });

  const columns = [
    { fieldId: 'checkTime', label: '체크시간', sx: { width: 200 } },
    { fieldId: 'sbp', label: 'SBP (mmHg)' },
    { fieldId: 'dbp', label: 'DBP (mmHg)' },
    { fieldId: 'pr', label: 'PR (회)' },
    { fieldId: 'rr', label: 'RR (회)' },
    { fieldId: 'bt', label: 'BT (℃)' },
    { fieldId: 'sp02', label: 'SPO2 (%)' },
    { fieldId: 'etc', label: '비고' },
    { fieldId: 'action', label: '', sx: { width: 100 } },
  ];

  const onAddRow = () => {
    const request = { checkTime, sbp, dbp, pr, rr, bt, sp02 };
    if (Object.values(request).filter(v => !v).length > 0) {
      return onRequired('CLINICAL.OBSERVATION.ADD.ROW');
    } else if (vitalsign.data.length > 4) {
      return onRequired('CLINICAL.OBSERVATION.STOP');
    }

    onSuccess('Vital Sign 추가되었습니다.');
    setValue('vital_sign', [...vitalSignList, { ...request, etc }]);
    console.log('시간', checkTime);
    onUpdateSign({
      isUpdated: !vitalsign.isUpdated,
      data: [
        ...vitalsign.data,
        {
          checkTime:
            checkTime !== null ? formatStringToDate(checkTime, 'hh:mm a') : '',
          sbp: Number(sbp),
          dbp: Number(dbp),
          pr: Number(pr),
          rr: Number(rr),
          bt: Number(bt),
        },
      ].sort((a, b) => {
        const aTime = new Date('1970/01/01 ' + a.checkTime);
        const bTime = new Date('1970/01/01 ' + b.checkTime);

        return Number(aTime) - Number(bTime);
      }),
    });

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
    sp02: (
      <MuiTextField
        value={sp02}
        required={false}
        onChange={({ target: { value } }) => setSp02(value)}
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
      'vital_sign',
      vitalSignList.filter((_, i) => i !== index)
    );
    onUpdateSign({
      isUpdated: !vitalsign.isUpdated,
      data: vitalsign.data.filter((_, i) => i !== index),
    });
  };

  const displayRows = vitalSignList
    .slice()
    .sort(
      (a, b) => Number(new Date(a.checkTime)) - Number(new Date(b.checkTime))
    )
    .map((item, i) => ({
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

  useEffect(() => {
    const initialVitalsign = vitalSignList.map(obj => {
      return {
        checkTime: formatStringToDate(obj.checkTime, 'hh:mm a'),
        bt: Number(obj.bt),
        pr: Number(obj.pr),
        rr: Number(obj.rr),
        sbp: Number(obj.sbp),
        dbp: Number(obj.dbp),
      };
    });
    onUpdateSign({
      isUpdated: !vitalsign.isUpdated,
      data: [...initialVitalsign].sort(
        (a, b) =>
          formatTimeStrToNum(a.checkTime) - formatTimeStrToNum(b.checkTime)
      ),
    });
  }, []);

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
