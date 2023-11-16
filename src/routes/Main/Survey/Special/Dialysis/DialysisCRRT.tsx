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

const DialysisCRRT = (props: Props) => {
  const { disabled, register, getValues, setValue, watch } = props;

  const labels = [
    '모드',
    'Blood flow',
    'Dialysate (mL/hr)',
    'Pre-Replacement (mL/hr)',
    'Post-Replacement (mL/hr)',
    'PBP (mL/hr)',
    'Pt fluid removal (mL/hr)',
    'Anticoagulation (mg/hr)',
    'CRRT 감시',
    'Access pressure',
    'Return pressure',
    'Filter pressure',
    'Effluent pressure',
    'TMP Pressure',
    'Pressure drop',
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
    'ㅇㅇ',
    'ㅇㅇ',
    'ㅇㅇ',
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
      <SectionTitle title="CRRT" />
      <RowContainer xs={12}>
        <Grid item flex={1}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table" size="small">
            <TableBody>
              {labels.map((label, labelIdx) => {
                if (label === 'CRRT 감시') {
                  return (
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
                          <TableCell key={idx} sx={{ height: '50px' }}>
                            {/* <Form.MuiTextField
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
                            /> */}
                          </TableCell>
                        ))}
                    </TableRow>
                  );
                }
                return (
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
                );
              })}
            </TableBody>
          </Table>
        </Grid>
      </RowContainer>
    </>
  );
};

export default DialysisCRRT;
