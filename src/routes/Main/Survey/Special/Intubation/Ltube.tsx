import { useEffect, useState } from 'react';

import Form from 'components/Form';
import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';

import { Table, TableBody, TableCell, TableRow, Grid } from '@mui/material';
import { AccessTime } from '@mui/icons-material';
import { MobileTimePicker } from '@mui/x-date-pickers';

import MuiTextField from 'components/Form/MuiTextField';
import RowContainer from '../../components/RowContainer';
import SectionTitle from '../../components/SectionTitle';
import { IIntubationLtube } from 'apis/survey/type';

interface Props extends IFormRegister, IFormValues, IFormWatch {
  disabled?: boolean;
}

const Ltube = (props: Props) => {
  const { disabled, register, getValues, setValue, watch } = props;

  const labels = ['삽입 부위', '삽입 상태'];
  const registerIds = ['insertion_part', 'insertion_condition'];

  const [dialysisRecord, setDialysisRecord] = useState<IIntubationLtube[]>([
    {
      record_date: '',
      insertion_date: '',
      insertion_part: '',
      insertion_condition: '',
    },
    {
      record_date: '',
      insertion_date: '',
      insertion_part: '',
      insertion_condition: '',
    },
    {
      record_date: '',
      insertion_date: '',
      insertion_part: '',
      insertion_condition: '',
    },
    {
      record_date: '',
      insertion_date: '',
      insertion_part: '',
      insertion_condition: '',
    },
  ]);

  useEffect(() => {
    if (getValues('ltube')) setDialysisRecord(getValues('ltube'));
    else setValue('ltube', dialysisRecord);
  }, []);

  return (
    <>
      <SectionTitle title="L-tube" />
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
                        required={false}
                        type="date"
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
                          setValue('ltube', newRecord);
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
                        type="date"
                        required={false}
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
                          setValue('ltube', newRecord);
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
                            setValue('ltube', newRecord);
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

export default Ltube;
