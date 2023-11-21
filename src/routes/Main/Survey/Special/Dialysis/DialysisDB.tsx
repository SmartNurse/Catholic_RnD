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

const DialysisDB = (props: Props) => {
  const { disabled, register, getValues, setValue, watch } = props;

  const labels = [
    '투석액온도/용량',
    '혈류속도 (mL/min)',
    '동맥압 (mmHg)',
    '정맥압 (mmHg)',
    '초여과율 (mL/hr)',
    '막통과압 (mmHg)',
    'Heparin (unit)',
    'SBP',
    'DBP',
    'PR',
    'BT',
    'RR',
  ];
  const registerIds = [
    'volume',
    'blood_flow',
    'arterial_pressure',
    'venous_pressure',
    'ufr',
    'tmp',
    'heparin',
    'sbp',
    'dbp',
    'pr',
    'bt',
    'rr',
  ];

  const [dialysisRecord, setDialysisRecord] = useState<IDialysisRecord[]>([
    {
      time: null,
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
      time: null,
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
      time: null,
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
      time: null,
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
      <SectionTitle title="투석 DB" />
      <RowContainer xs={12}>
        <Grid item flex={1}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table" size="small">
            <TableBody>
              <TableRow
                key={'시간'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  시간
                </TableCell>
                {Array(4)
                  .fill(0)
                  .map((_, idx) => (
                    <TableCell key={idx}>
                      <MobileTimePicker
                        disabled={disabled}
                        value={dialysisRecord ? dialysisRecord[idx].time : null}
                        onChange={v => {
                          let newRecord = dialysisRecord
                            ? [...dialysisRecord]
                            : [];
                          newRecord[idx]['time'] = v;
                          setDialysisRecord(newRecord);
                          setValue('dialysis_db', newRecord);
                        }}
                        renderInput={params => (
                          <MuiTextField
                            {...params}
                            required={false}
                            placeholder="00:00 pm"
                            InputProps={{ endAdornment: <AccessTime /> }}
                          />
                        )}
                      />
                    </TableCell>
                  ))}
              </TableRow>
              {labels.map((label, labelIdx) => (
                <TableRow
                  key={label}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
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

export default DialysisDB;
