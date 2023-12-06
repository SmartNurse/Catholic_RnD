import { useEffect, useState } from 'react';

import Form from 'components/Form';
import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';

import { Table, TableBody, TableCell, TableRow, Grid } from '@mui/material';

import RowContainer from '../../components/RowContainer';
import SectionTitle from '../../components/SectionTitle';
import { IDialysisCrrtRecord } from 'apis/survey/type';

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
    'mode',
    'blood_flow_crrt',
    'dialysate',
    'pre_replacement',
    'post_replacement',
    'pbp',
    'pt_fluid_rmv',
    'anti_coagulation',
    '',
    'access_press',
    'return_press',
    'filter_press',
    'effluent_press',
    'tmp_press',
    'press_drop',
  ];

  const [dialysisRecord, setDialysisRecord] = useState<IDialysisCrrtRecord[]>([
    {
      mode: '',
      blood_flow_crrt: '',
      dialysate: '',
      pre_replacement: '',
      post_replacement: '',
      pbp: '',
      pt_fluid_rmv: '',
      anti_coagulation: '',
      access_press: '',
      return_press: '',
      filter_press: '',
      effluent_press: '',
      tmp_press: '',
      press_drop: '',
    },
    {
      mode: '',
      blood_flow_crrt: '',
      dialysate: '',
      pre_replacement: '',
      post_replacement: '',
      pbp: '',
      pt_fluid_rmv: '',
      anti_coagulation: '',
      access_press: '',
      return_press: '',
      filter_press: '',
      effluent_press: '',
      tmp_press: '',
      press_drop: '',
    },
    {
      mode: '',
      blood_flow_crrt: '',
      dialysate: '',
      pre_replacement: '',
      post_replacement: '',
      pbp: '',
      pt_fluid_rmv: '',
      anti_coagulation: '',
      access_press: '',
      return_press: '',
      filter_press: '',
      effluent_press: '',
      tmp_press: '',
      press_drop: '',
    },
    {
      mode: '',
      blood_flow_crrt: '',
      dialysate: '',
      pre_replacement: '',
      post_replacement: '',
      pbp: '',
      pt_fluid_rmv: '',
      anti_coagulation: '',
      access_press: '',
      return_press: '',
      filter_press: '',
      effluent_press: '',
      tmp_press: '',
      press_drop: '',
    },
  ]);

  useEffect(() => {
    if (getValues('crrt')) setDialysisRecord(getValues('crrt'));
    else setValue('crrt', dialysisRecord);
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
                          <TableCell
                            key={idx}
                            sx={{ height: '50px' }}
                          ></TableCell>
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
                              setValue('crrt', newRecord);
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
