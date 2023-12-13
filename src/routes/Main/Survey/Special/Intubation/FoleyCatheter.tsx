import { useEffect, useState } from 'react';

import Form from 'components/Form';
import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';

import { Table, TableBody, TableCell, TableRow, Grid } from '@mui/material';
import { AccessTime } from '@mui/icons-material';
import { MobileTimePicker } from '@mui/x-date-pickers';

import MuiTextField from 'components/Form/MuiTextField';
import RowContainer from '../../components/RowContainer';
import SectionTitle from '../../components/SectionTitle';
import { IIntubationFoley } from 'apis/survey/type';

interface Props extends IFormRegister, IFormValues, IFormWatch {
  disabled?: boolean;
}

const FoleyCatheter = (props: Props) => {
  const { disabled, register, getValues, setValue, watch } = props;

  const labels = ['시간당', '소변 양상'];
  const registerIds = ['amount_per_hour', 'urine_condition'];

  const [dialysisRecord, setDialysisRecord] = useState<IIntubationFoley[]>([
    {
      record_date: '',
      insertion_date: '',
      amount_per_hour: '',
      urine_condition: '',
    },
    {
      record_date: '',
      insertion_date: '',
      amount_per_hour: '',
      urine_condition: '',
    },
    {
      record_date: '',
      insertion_date: '',
      amount_per_hour: '',
      urine_condition: '',
    },
    {
      record_date: '',
      insertion_date: '',
      amount_per_hour: '',
      urine_condition: '',
    },
  ]);

  useEffect(() => {
    if (getValues('foley')) setDialysisRecord(getValues('foley'));
    else setValue('foley', dialysisRecord);
  }, []);

  return (
    <>
      <SectionTitle title="Foley catheter" />
      <RowContainer xs={12}>
        <Grid item flex={1}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table" size="small">
            <TableBody>
              <TableRow
                key={'기록 일시'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  기록 일시
                </TableCell>
                {Array(4)
                  .fill(0)
                  .map((_, idx) => (
                    <TableCell key={idx}>
                      <Form.MuiTextField
                        type="date"
                        required={false}
                        disabled={disabled}
                        value={
                          dialysisRecord ? dialysisRecord[idx].record_date : ''
                        }
                        onChange={e => {
                          let newRecord = dialysisRecord
                            ? [...dialysisRecord]
                            : [];
                          newRecord[idx]['record_date'] = e.target.value;
                          setDialysisRecord(newRecord);
                          setValue('foley', newRecord);
                        }}
                      />
                    </TableCell>
                  ))}
              </TableRow>
              <TableRow
                key={'삽입 일시'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  삽입 일시
                </TableCell>
                {Array(4)
                  .fill(0)
                  .map((_, idx) => (
                    <TableCell key={idx}>
                      <Form.MuiTextField
                        required={false}
                        type="date"
                        disabled={disabled}
                        value={
                          dialysisRecord
                            ? dialysisRecord[idx].insertion_date
                            : ''
                        }
                        onChange={e => {
                          let newRecord = dialysisRecord
                            ? [...dialysisRecord]
                            : [];
                          newRecord[idx]['insertion_date'] = e.target.value;
                          setDialysisRecord(newRecord);
                          setValue('foley', newRecord);
                        }}
                      />
                    </TableCell>
                  ))}
              </TableRow>
              {labels.map((label, labelIdx) => (
                <TableRow
                  key={label}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" sx={{ width: '150px' }}>
                    {label}
                  </TableCell>
                  {Array(4)
                    .fill(0)
                    .map((_, idx) => (
                      <TableCell key={idx}>
                        <Form.MuiTextField
                          value={
                            dialysisRecord
                              ? dialysisRecord[idx][registerIds[labelIdx]]
                              : ''
                          }
                          onChange={e => {
                            let newRecord = dialysisRecord
                              ? [...dialysisRecord]
                              : [];
                            newRecord[idx][registerIds[labelIdx]] =
                              e.target.value;
                            setDialysisRecord(newRecord);
                            setValue('foley', newRecord);
                          }}
                          required={false}
                          disabled={disabled}
                        />
                      </TableCell>
                    ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
      </RowContainer>
    </>
  );
};

export default FoleyCatheter;
