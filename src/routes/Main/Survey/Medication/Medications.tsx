import { Fragment } from 'react';
import { AccessTime } from '@mui/icons-material';
import { Checkbox, Grid } from '@mui/material';
import { MobileTimePicker } from '@mui/x-date-pickers';

import { IMedication } from 'apis/survey/type';
import { IFormValues, IFormWatch } from 'routes/Main/Survey/type';
import MuiTextField from 'components/Form/MuiTextField';

import SectionTitle from '../components/SectionTitle';
import MuiTable from 'components/MuiTable';
import { formatStringToDate } from 'utils/formatting';

interface Props extends IFormValues, IFormWatch {}

const Medications = (props: Props) => {
  const { watch, getValues, setValue } = props;
  const medicationList: IMedication[] = getValues('medication_surveys');

  const columns = [
    { fieldId: 'pt_medication_no', label: '약물처방번호' },
    { fieldId: 'prescription_time', label: '처방시간' },
    { fieldId: 'medication_time', label: '투여시간' },
    { fieldId: 'medication_name', label: '약물명', width: 150 },
    { fieldId: 'medication_content', label: '함량' },
    { fieldId: 'medication_measure', label: '단위' },
    { fieldId: 'medication_amount', label: '투여량' },
    { fieldId: 'medication_freq', label: '투여횟수' },
    { fieldId: 'medication_note', label: '상세투여방법', width: 250 },
    { fieldId: 'medication_do', label: '투여완료' },
  ];

  const getRowEditing = (prefix: string) => {
    const medicationTime = watch(`${prefix}.medication_time`);
    const onChangeMedicationTime = (value: any) =>
      setValue(`${prefix}.medication_time`, value);
    const medicationDo = Boolean(watch(`${prefix}.medication_do`));
    const onChangeMedicationDo = (_: any, checked: boolean) =>
      setValue(`${prefix}.medication_do`, checked ? 1 : 0);

    return {
      medicationTime,
      onChangeMedicationTime,
      medicationDo,
      onChangeMedicationDo,
    };
  };

  const rows = medicationList?.map((item, i) => {
    const {
      medicationTime,
      onChangeMedicationTime,
      medicationDo,
      onChangeMedicationDo,
    } = getRowEditing(`medication_surveys.${i}`);

    return {
      ...item,
      id: item.pt_medication_no,
      prescription_time: formatStringToDate(item.prescription_time, 'hh:mm a'),
      medication_time: (
        <MobileTimePicker
          value={medicationTime}
          onChange={onChangeMedicationTime}
          renderInput={params => (
            <MuiTextField
              {...params}
              placeholder="00:00 pm"
              InputProps={{ endAdornment: <AccessTime /> }}
              sx={{ width: 150 }}
            />
          )}
        />
      ),
      medication_do: (
        <Checkbox
          size="small"
          checked={medicationDo}
          onChange={onChangeMedicationDo}
        />
      ),
    };
  });

  return (
    <Fragment>
      <SectionTitle title="처방 내역" />
      <Grid item xs={12}>
        <MuiTable columns={columns} rows={rows} />
      </Grid>
    </Fragment>
  );
};

export default Medications;
