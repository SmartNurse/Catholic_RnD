import Form from 'components/Form';

import { Fragment, useState } from 'react';
import { Delete } from '@mui/icons-material';
import { Button, Grid, IconButton } from '@mui/material';

import { Ti18nId } from 'hooks/useI18n';
import { IHomeCareRecord } from 'apis/survey/type';
import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';
import MuiTable from 'components/MuiTable';
import MuiTextField from 'components/Form/MuiTextField';
import SectionTitle from '../../components/SectionTitle';

interface Props extends IFormValues, IFormWatch, IFormRegister {
  disabled?: boolean;
  onRequired: (id: Ti18nId) => void;
  onSuccess: (message: string) => void;
}

const MedicationRecords = (props: Props) => {
  const { disabled, watch, setValue, onRequired, onSuccess, register } = props;
  const medicationRecordsList: IHomeCareRecord[] = watch('medication_records');

  const [date, setDate] = useState("");
  const [content, setContent] = useState("");

  const columns = [
    { fieldId: 'date', label: '' },
    { fieldId: 'content', label: '' },
    { fieldId: 'action', label: '', sx: { width: 100 } },
  ];

  const onAddRow = () => {
    const request = { date, content };

    if (Object.values(request).filter(v => !v).length > 0) {
      return onRequired('CLINICAL.OBSERVATION.ADD.ROW');
    }

    onSuccess('투약기록지 추가되었습니다.');
    setValue('medication_records', medicationRecordsList ? [...medicationRecordsList, request] : [request]);
    setDate("");
    setContent("");
  };

  const inputRow = {
    id: 'add-medication-records',
    date: (
        <Form.MuiTextField
            type="date"
            required={false}
            disabled={disabled}
            value={date}
            onChange={({ target: { value }}) => setDate(value)}
        />
    ),
    content: (
      <MuiTextField
        required={false}
        disabled={disabled}
        value={content}
        onChange={({ target: { value } }) => setContent(value)}
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
      'medication_records',
      medicationRecordsList.filter((_, i) => i !== index)
    );
  };

  const displayRows = medicationRecordsList ? 
    medicationRecordsList.map((item, i) => ({
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
  :
  []
  ;

  const tableRow = disabled ? displayRows : [inputRow, ...displayRows];

  return (
    <Fragment>
      <SectionTitle title="투약기록지" />
      <Grid item xs={12}>
        <MuiTable columns={columns} rows={[...tableRow]} />
      </Grid>
    </Fragment>
  );
};

export default MedicationRecords;