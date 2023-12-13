import { useEffect, useState } from 'react';

import Form from 'components/Form';
import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';

import { Table, TableBody, TableCell, TableRow, Grid } from '@mui/material';
import { AccessTime } from '@mui/icons-material';
import { MobileTimePicker } from '@mui/x-date-pickers';

import MuiTextField from 'components/Form/MuiTextField';
import RowContainer from '../../components/RowContainer';
import SectionTitle from '../../components/SectionTitle';
import { IIntubationEtube } from 'apis/survey/type';

interface Props extends IFormRegister, IFormValues, IFormWatch {
  disabled?: boolean;
}

const Etube = (props: Props) => {
  const { disabled, register, getValues, setValue, watch } = props;

  const labels = ['종류', '삽입 깊이', '고정 위치', 'Cuff pressure'];
  const registerIds = [
    'type',
    'insertion_depth',
    'fixing_area',
    'cuff_pressure',
  ];

  const [dialysisRecord, setDialysisRecord] = useState<IIntubationEtube[]>([
    {
      record_date: '',
      insertion_date: '',
      type: '',
      insertion_depth: '',
      fixing_area: '',
      cuff_pressure: '',
    },
    {
      record_date: '',
      insertion_date: '',
      type: '',
      insertion_depth: '',
      fixing_area: '',
      cuff_pressure: '',
    },
    {
      record_date: '',
      insertion_date: '',
      type: '',
      insertion_depth: '',
      fixing_area: '',
      cuff_pressure: '',
    },
    {
      record_date: '',
      insertion_date: '',
      type: '',
      insertion_depth: '',
      fixing_area: '',
      cuff_pressure: '',
    },
  ]);

  useEffect(() => {
    if (getValues('etube')) setDialysisRecord(getValues('etube'));
    else setValue('etube', dialysisRecord);
  }, []);

  return (
    <>
      <SectionTitle title="E-tube" />
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
                        value={
                          dialysisRecord ? dialysisRecord[idx].record_date : ''
                        }
                        onChange={e => {
                          let newRecord = dialysisRecord
                            ? [...dialysisRecord]
                            : [];
                          newRecord[idx]['record_date'] = e.target.value;
                          setDialysisRecord(newRecord);
                          setValue('etube', newRecord);
                        }}
                        required={false}
                        disabled={disabled}
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
                          setValue('etube', newRecord);
                        }}
                        required={false}
                        disabled={disabled}
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
                            setValue('etube', newRecord);
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

export default Etube;
