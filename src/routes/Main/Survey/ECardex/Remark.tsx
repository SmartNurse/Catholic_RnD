import Form from 'components/Form';

import { Fragment, useState } from 'react';
import { Delete } from '@mui/icons-material';
import { Button, Grid, IconButton } from '@mui/material';

import { Ti18nId } from 'hooks/useI18n';
import { IECardexRemark } from 'apis/survey/type';
import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';
import MuiTable from 'components/MuiTable';
import MuiTextField from 'components/Form/MuiTextField';

interface Props extends IFormValues, IFormWatch, IFormRegister {
  disabled?: boolean;
  onRequired: (id: Ti18nId) => void;
  onSuccess: (message: string) => void;
}

const Remark = (props: Props) => {
  const { disabled, watch, setValue, onRequired, onSuccess, register } = props;
  const remarkList: IECardexRemark[] = watch('remark_data');

  const [date, setDate] = useState("");
  const [remark, setRemark] = useState("");

  const columns = [
    { fieldId: 'date', label: '일시', sx: { width: 200 } },
    { fieldId: 'remark', label: 'REMARK' },
    { fieldId: 'action', label: '', sx: { width: 100 } },
  ];

  const onAddRow = () => {
    const request = { date, remark };

    console.log(request);
    if (Object.values(request).filter(v => !v).length > 0) {
      return onRequired('CLINICAL.OBSERVATION.ADD.ROW');
    }

    onSuccess('Remark 추가되었습니다.');
    setValue('remark_data', remarkList ? [...remarkList, request] : [request]);
    setValue("etc.remark.date", "");
    setDate("");
    setRemark("");
  };

  const inputRow = {
    id: 'add-remark',
    date: (
        <Form.MuiTextField
            type="date"
            required={false}
            disabled={disabled}
            {...register("etc.remark.date", {
                onChange: (e) => setDate(e.target.value)
            })}
          />
    ),
    remark: (
      <MuiTextField
        value={remark}
        required={false}
        onChange={({ target: { value } }) => setRemark(value)}
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
      'remark_data',
      remarkList.filter((_, i) => i !== index)
    );
  };

  const displayRows = remarkList ? 
    remarkList.map((item, i) => ({
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
      <Grid item xs={12}>
        <MuiTable columns={columns} rows={[...tableRow]} />
      </Grid>
    </Fragment>
  );
};

export default Remark;
