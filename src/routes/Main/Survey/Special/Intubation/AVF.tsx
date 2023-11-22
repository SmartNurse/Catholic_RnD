import { useEffect, useState } from 'react';

import Form from 'components/Form';
import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';

import { Table, TableBody, TableCell, TableRow, Grid } from '@mui/material';
import { AccessTime } from '@mui/icons-material';
import { MobileTimePicker } from '@mui/x-date-pickers';

import MuiTextField from 'components/Form/MuiTextField';
import RowContainer from '../../components/RowContainer';
import SectionTitle from '../../components/SectionTitle';
import { IDialysisRecord } from 'apis/survey/type';

interface Props extends IFormRegister, IFormValues, IFormWatch {
  disabled?: boolean;
}

const AVF = (props: Props) => {
  const { disabled, register, getValues, setValue, watch } = props;

  const labels = ['삽입 부위', '삽입 상태'];
  const registerIds = ['volume', 'blood_flow'];

  const [dialysisRecord, setDialysisRecord] = useState<IDialysisRecord[]>([
    {
      time: '',
      volume: '',
      blood_flow: '',
      arterial_pressure: '',
      venous_pressure: '',
      ufr: '',
      tmp: '',
      heparin: '',
      sbp: '',
      dbp: '',
      pr: '',
      bt: '',
      rr: '',
    },
    {
      time: '',
      volume: '',
      blood_flow: '',
      arterial_pressure: '',
      venous_pressure: '',
      ufr: '',
      tmp: '',
      heparin: '',
      sbp: '',
      dbp: '',
      pr: '',
      bt: '',
      rr: '',
    },
    {
      time: '',
      volume: '',
      blood_flow: '',
      arterial_pressure: '',
      venous_pressure: '',
      ufr: '',
      tmp: '',
      heparin: '',
      sbp: '',
      dbp: '',
      pr: '',
      bt: '',
      rr: '',
    },
    {
      time: '',
      volume: '',
      blood_flow: '',
      arterial_pressure: '',
      venous_pressure: '',
      ufr: '',
      tmp: '',
      heparin: '',
      sbp: '',
      dbp: '',
      pr: '',
      bt: '',
      rr: '',
    },
  ]);

  useEffect(() => {
    if (getValues('dialysis_db')) setDialysisRecord(getValues('dialysis_db'));
    else setValue('dialysis_db', dialysisRecord);
  }, []);

  return (
    <>
      <SectionTitle title="AVF" />
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
                        disabled={disabled}
                        // {...register(`${time}`)}
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
                        disabled={disabled}
                        // {...register(`${time}`)}
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
                            setValue('dialysis_db', newRecord);
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

export default AVF;
