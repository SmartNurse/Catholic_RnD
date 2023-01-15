import Form from 'components/Form';

import { Fragment, useState } from 'react';
import { Delete } from '@mui/icons-material';
import { Button, Grid, IconButton } from '@mui/material';

import { Ti18nId } from 'hooks/useI18n';
import { IECardexImagingTest } from 'apis/survey/type';
import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';
import MuiTable from 'components/MuiTable';
import MuiTextField from 'components/Form/MuiTextField';

interface Props extends IFormValues, IFormWatch, IFormRegister {
  disabled?: boolean;
  onRequired: (id: Ti18nId) => void;
  onSuccess: (message: string) => void;
}

const ImageTest = (props: Props) => {
  const { disabled, watch, setValue, onRequired, onSuccess, register } = props;
  const imageTestList: IECardexImagingTest[] = watch('imaging_test_data');

  const [date, setDate] = useState("");
  const [imageTest, setImageTest] = useState("");
  const [receipt, setReceipt] = useState("");
  const [result, setResult] = useState("");

  const columns = [
    { fieldId: 'date', label: '일시', sx: { width: 200 } },
    { fieldId: 'imaging_test', label: '영상 검사' },
    { fieldId: 'implementing_and_inspection', label: '접수/시행', sx: { width: 200 } },
    { fieldId: 'result', label: '결과', sx: { width: 200 } },
    { fieldId: 'action', label: '', sx: { width: 100 } },
  ];

  const onAddRow = () => {
    const request = { date, imaging_test: imageTest, implementing_and_inspection: receipt, result };
    console.log(request);
    console.log(request);
    if (Object.values(request).filter(v => !v).length > 0) {
      return onRequired('CLINICAL.OBSERVATION.ADD.ROW');
    }

    onSuccess('영상 검사 추가되었습니다.');
    setValue('imaging_test_data', imageTestList ? [...imageTestList, request] : [request]);
    setValue("etc.image_test.date", "");
    setDate("");
    setImageTest("");
    setReceipt("");
    setResult("");
  };

  const inputRow = {
    id: 'add-image_test',
    date: (
        <Form.MuiTextField
            type="date"
            required={false}
            disabled={disabled}
            {...register("etc.image_test.date", {
                onChange: (e) => setDate(e.target.value)
            })}
          />
    ),
    imaging_test: (
      <MuiTextField
        value={imageTest}
        required={false}
        onChange={({ target: { value } }) => setImageTest(value)}
      />
    ),
    implementing_and_inspection: (
      <MuiTextField
        value={receipt}
        required={false}
        onChange={({ target: { value } }) => setReceipt(value)}
      />
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
      'imaging_test_data',
      imageTestList.filter((_, i) => i !== index)
    );
  };

  const displayRows = imageTestList ? 
    imageTestList.map((item, i) => ({
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

export default ImageTest;
