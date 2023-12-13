import { useEffect, useState } from 'react';

import Form from 'components/Form';
import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';

import { Table, TableBody, TableCell, TableRow, Grid } from '@mui/material';
import { AccessTime } from '@mui/icons-material';
import { MobileTimePicker } from '@mui/x-date-pickers';

import MuiTextField from 'components/Form/MuiTextField';
import RowContainer from '../../components/RowContainer';
import SectionTitle from '../../components/SectionTitle';
import { IIntubationPCA } from 'apis/survey/type';

interface Props extends IFormRegister, IFormValues, IFormWatch {
  disabled?: boolean;
}

const IntubationPCA = (props: Props) => {
  const { disabled, register, getValues, setValue, watch } = props;

  const labels = ['종류'];
  const registerIds = ['types'];
  const [dialysisRecord, setDialysisRecord] = useState<IIntubationPCA[]>([
    {
      record_dates: '',
      insertion_dates: '',
      types: '',
    },
    {
      record_dates: '',
      insertion_dates: '',
      types: '',
    },
    {
      record_dates: '',
      insertion_dates: '',
      types: '',
    },
    {
      record_dates: '',
      insertion_dates: '',
      types: '',
    },
  ]);

  useEffect(() => {
    if (getValues('pca')) setDialysisRecord(getValues('pca'));
    else setValue('pca', dialysisRecord);
  }, []);

  return (
    <>
      <SectionTitle title="PCA" />
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
                          dialysisRecord
                            ? dialysisRecord[idx].insertion_dates
                            : ''
                        }
                        onChange={e => {
                          let newRecord = dialysisRecord
                            ? [...dialysisRecord]
                            : [];
                          newRecord[idx]['record_dates'] = e.target.value;
                          setDialysisRecord(newRecord);
                          setValue('pca', newRecord);
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
                            ? dialysisRecord[idx].insertion_dates
                            : ''
                        }
                        onChange={e => {
                          let newRecord = dialysisRecord
                            ? [...dialysisRecord]
                            : [];
                          newRecord[idx]['insertion_dates'] = e.target.value;
                          setDialysisRecord(newRecord);
                          setValue('pca', newRecord);
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
                            setValue('pca', newRecord);
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

export default IntubationPCA;
