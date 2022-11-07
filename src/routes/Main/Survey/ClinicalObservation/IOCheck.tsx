import { Fragment, useState } from 'react';
import { AccessTime, Delete } from '@mui/icons-material';
import { Button, Grid, IconButton, Typography } from '@mui/material';
import { MobileTimePicker } from '@mui/x-date-pickers';

import { Ti18nId } from 'hooks/useI18n';
import { IIOCheck } from 'apis/survey/type';
import { IFormValues, IFormWatch } from 'routes/Main/type';
import MuiTable from 'components/MuiTable';
import MuiTextField from 'components/Form/MuiTextField';
import { formatStringToDate } from 'utils/formatting';

import SectionTitle from '../components/SectionTitle';
import useTableForm from '../hooks/useTableForm';

interface Props extends IFormValues, IFormWatch {
  disabled?: boolean;
  onRequired: (id: Ti18nId) => void;
  onSuccess: (message: string) => void;
}

const IOCheck = (props: Props) => {
  const { sumValues } = useTableForm(props);
  const { disabled, watch, setValue, onRequired, onSuccess } = props;
  const ioCheckList: IIOCheck[] = watch('io_check');

  const [checkTime, setCheckTime] = useState(null);
  const [intake, setIntake] = useState('');
  const [output, setOutput] = useState('');

  const columns = [
    { fieldId: 'checkTime', label: '체크시간', sx: { width: 200 } },
    { fieldId: 'intake', label: 'INTAKE' },
    { fieldId: 'output', label: 'OUTPUT' },
    { fieldId: 'action', label: '', sx: { width: 100 } },
  ];

  const onAddRow = () => {
    const request = { checkTime, intake, output };
    if (Object.values(request).filter(v => !v).length > 0) {
      return onRequired('CLINICAL.OBSERVATION.ADD.ROW');
    }

    onSuccess('I/O Check 추가되었습니다.');
    setValue('io_check', [...ioCheckList, request]);
    setCheckTime(null);
    setIntake('');
    setOutput('');
  };

  const inputRow = {
    id: 'add-io-check',
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
    intake: (
      <MuiTextField
        value={intake}
        required={false}
        onChange={({ target: { value } }) => setIntake(value)}
      />
    ),
    output: (
      <MuiTextField
        value={output}
        required={false}
        onChange={({ target: { value } }) => setOutput(value)}
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
      'io_check',
      ioCheckList.filter((_, i) => i !== index)
    );
  };

  const displayRows = ioCheckList?.map((item, i) => ({
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

  const watchSumIntake = () => {
    const values = ioCheckList.map(({ intake }) => Number(intake));
    return sumValues(values);
  };

  const watchSumOutput = () => {
    const values = ioCheckList.map(({ output }) => Number(output));
    return sumValues(values);
  };

  const sumTypo = (label: string | number) => (
    <Typography fontSize={12} fontWeight={700} sx={{ py: 0.5 }}>
      {label}
    </Typography>
  );

  const tableRow = disabled ? displayRows : [inputRow, ...displayRows];

  const sumRow =
    tableRow.length > 0
      ? [
          {
            id: 'total-io-check',
            checkTime: sumTypo('TOTAL'),
            intake: sumTypo(watchSumIntake()),
            output: sumTypo(watchSumOutput()),
          },
          {
            id: 'result-io-check',
            checkTime: sumTypo('+/-'),
            intake: sumTypo(watchSumIntake() - watchSumOutput()),
          },
        ]
      : [];

  return (
    <Fragment>
      <SectionTitle title="I/O Check" />
      <Grid item xs={12}>
        <MuiTable columns={columns} rows={[...tableRow, ...sumRow]} />
      </Grid>
    </Fragment>
  );
};

export default IOCheck;
