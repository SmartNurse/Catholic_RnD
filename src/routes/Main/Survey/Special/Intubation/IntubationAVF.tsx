import { useEffect, useState } from 'react';

import Form from 'components/Form';
import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';

import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Grid,
  MenuItem,
} from '@mui/material';
import { AccessTime } from '@mui/icons-material';
import { MobileTimePicker } from '@mui/x-date-pickers';

import MuiTextField from 'components/Form/MuiTextField';
import RowContainer from '../../components/RowContainer';
import SectionTitle from '../../components/SectionTitle';
import { IIntubationPICCandMore4 } from 'apis/survey/type';

interface Props extends IFormRegister, IFormValues, IFormWatch {
  disabled?: boolean;
}

const IntubationAVF = (props: Props) => {
  const { disabled, register, getValues, setValue, watch } = props;

  const labels = [
    '종류',
    '삽입 부위',
    '피부 및 삽입 상태',
    '드레싱 종류, 상태, 부착',
  ];
  const registerIds = ['type4', 'part4', 'condition4', 'dressing4'];

  const [dialysisRecord, setDialysisRecord] = useState<
    IIntubationPICCandMore4[]
  >([
    {
      record_date4: '',
      insertion_date4: '',
      type4: '',
      part4: '',
      condition4: '',
      dressing4: '',
    },
    {
      record_date4: '',
      insertion_date4: '',
      type4: '',
      part4: '',
      condition4: '',
      dressing4: '',
    },
    {
      record_date4: '',
      insertion_date4: '',
      type4: '',
      part4: '',
      condition4: '',
      dressing4: '',
    },
    {
      record_date4: '',
      insertion_date4: '',
      type4: '',
      part4: '',
      condition4: '',
      dressing4: '',
    },
  ]);

  useEffect(() => {
    if (getValues('picc_and_more4'))
      setDialysisRecord(getValues('picc_and_more4'));
    else setValue('picc_and_more4', dialysisRecord);
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
                        required={false}
                        type="date"
                        disabled={disabled}
                        value={
                          dialysisRecord ? dialysisRecord[idx].record_date4 : ''
                        }
                        onChange={e => {
                          let newRecord = dialysisRecord
                            ? [...dialysisRecord]
                            : [];
                          newRecord[idx]['record_date4'] = e.target.value;
                          setDialysisRecord(newRecord);
                          setValue('picc_and_more4', newRecord);
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
                            ? dialysisRecord[idx].insertion_date4
                            : ''
                        }
                        onChange={e => {
                          let newRecord = dialysisRecord
                            ? [...dialysisRecord]
                            : [];
                          newRecord[idx]['insertion_date4'] = e.target.value;
                          setDialysisRecord(newRecord);
                          setValue('picc_and_more4', newRecord);
                        }}
                      />
                    </TableCell>
                  ))}
              </TableRow>
              {labels.map((label, labelIdx) => {
                return (
                  <TableRow
                    key={label}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ width: '150px', whiteSpace: 'nowrap' }}
                    >
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
                              setValue('picc_and_more4', newRecord);
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

export default IntubationAVF;
