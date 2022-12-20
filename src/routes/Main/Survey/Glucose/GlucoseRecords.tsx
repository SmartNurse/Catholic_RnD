import Form from 'components/Form';

import { Fragment, useState } from 'react';
import { AccessTime, Delete } from '@mui/icons-material';
import { Button, Grid, IconButton, MenuItem, Box } from '@mui/material';
import { MobileTimePicker } from '@mui/x-date-pickers';

import { Ti18nId } from 'hooks/useI18n';
import { IGlucoseRecord } from 'apis/survey/type';
import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';
import MuiTable from 'components/MuiTable';
import MuiTextField from 'components/Form/MuiTextField';

import { formatStringToDate } from "utils/formatting";

interface Props extends IFormValues, IFormWatch, IFormRegister {
  disabled?: boolean;
  onRequired: (id: Ti18nId) => void;
  onSuccess: (message: string) => void;
}

const GlucoseRecords = (props: Props) => {
  const { disabled, watch, setValue, onRequired, onSuccess, register } = props;
  const glucoseRecordList: IGlucoseRecord[] = watch('glucose_records');

  const [date, setDate] = useState("");
  const [time, setTime] = useState(null);
  const [meal, setMeal] = useState("");
  const [mealEtc, setMealEtc] = useState("");
  const [item, setItem] = useState("");
  const [itemEtc, setItemEtc] = useState("");
  const [result, setResult] = useState("");

  const columns = [
    { fieldId: 'date', label: '일자', sx: { width: 200 } },
    { fieldId: 'time', label: '시간', sx: { width: 200 } },
    { fieldId: 'meal', label: '식사', sx: { width: 200 } },
    { fieldId: 'item', label: '검사항목', sx: { width: 200 } },
    { fieldId: 'result', label: '검사결과', sx: { width: 400 } },
    { fieldId: 'action', label: '', sx: { width: 100 } }
  ];

  const meals = ['식사 전', '식사 후', '기타(직접입력)'];
  const items = ['Glucose(혈당)', 'FBS(공복혈당)', 'PP2(경구당부하검사)', 'HbA1c(당화혈색소)', '기타(직접입력)'];

  const onAddRow = () => {
    const request = {
        date,
        time,
        meal: meal === "기타(직접입력)" ? mealEtc : meal,
        item: item === "기타(직접입력)" ? itemEtc : item,
        result
    };

    if (Object.values(request).filter(v => !v).length > 0) {
      return onRequired('CLINICAL.OBSERVATION.ADD.ROW');
    }

    onSuccess('혈당 기록 추가되었습니다.');
    setValue('glucose_records', glucoseRecordList ? [...glucoseRecordList, request] : [request]);
    setValue("glucose_date", "");
    setDate("");
    setTime(null);
    setMeal("");
    setMealEtc("");
    setItem("");
    setItemEtc("");
    setResult("");
  };

  const inputRow = {
    id: 'add-glucose-record',
    date: (
        <Form.MuiTextField
            type="date"
            required={false}
            disabled={disabled}
            {...register("glucose_date", {
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
    meal: (
        <Box sx={{ display: "flex" }}>
            <MuiTextField
                select
                value={meal}
                required={false}
                onChange={({ target: { value } }) => setMeal(value)}
            >
                {meals.map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </MuiTextField>
            {meal === "기타(직접입력)" &&
                <MuiTextField value={mealEtc} onChange={({ target: { value }}) => setMealEtc(value)} />
            }
        </Box>
    ),
    item: (
        <Box sx={{ display: "flex" }}>
            <MuiTextField
                select
                value={item}
                required={false}
                onChange={({ target: { value } }) => setItem(value)}
            >
                {items.map((option) => (
                    <MenuItem key={option} value={option}>
                    {option}
                    </MenuItem>
                ))}
            </MuiTextField>
            {item === "기타(직접입력)" &&
                <MuiTextField value={itemEtc} onChange={({ target: { value }}) => setItemEtc(value)} />
            }
        </Box>
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
      'glucose_records',
      glucoseRecordList.filter((_, i) => i !== index)
    );
  };

  const displayRows = glucoseRecordList ? 
    glucoseRecordList.map((item, i) => ({
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
      <Grid item xs={12}>
        <MuiTable columns={columns} rows={[...tableRow]} />
      </Grid>
    </Fragment>
  );
};

export default GlucoseRecords;