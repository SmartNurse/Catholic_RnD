import Form from 'components/Form';

import { Fragment, useState } from 'react';
import { Delete } from '@mui/icons-material';
import {
  Checkbox,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';

import { Ti18nId } from 'hooks/useI18n';
import { IMentalNursingRecord } from 'apis/survey/type';
import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';

import MuiTextField from 'components/Form/MuiTextField';
import SectionTitle from '../../components/SectionTitle';

import { formatStringToDate } from 'utils/formatting';

interface Props extends IFormValues, IFormWatch, IFormRegister {
  disabled?: boolean;
  onRequired: (id: Ti18nId) => void;
  onSuccess: (message: string) => void;
}

const CautionList = (props: Props) => {
  const { disabled, watch, setValue, onRequired, onSuccess, register } = props;
  const mentalNursingRecordList: IMentalNursingRecord[] =
    watch('mental_survey');

  const [patient, setPatient] = useState('');
  const [patient1, setPatient1] = useState('');

  const [student1, setStudent1] = useState('');
  const [student2, setStudent2] = useState('');

  const [basis1, setBasis1] = useState('');
  const [basis2, setBasis2] = useState('');

  const [evaluation1, setEvaluation1] = useState('');
  const [evaluation2, setEvaluation2] = useState('');

  const onDeleteRow = (index: number) => {
    setValue(
      'mental_survey',
      mentalNursingRecordList.filter((_, i) => i !== index)
    );
  };

  const inputRows = [
    {
      label: 'No.',
      elements: [
        {
          type: 'text',
          element: (
            <div style={{ display: 'flex' }}>
              <div style={{ width: '35%' }}>항목</div>
              <div style={{ width: '35%' }}>비용</div>
              <div
                style={{
                  width: '100px',
                  marginLeft: '123px',
                }}
              >
                확인함
              </div>
            </div>
          ),
        },
      ],
    },
    {
      label: '1',
      elements: [
        {
          type: 'text',
          element: (
            <div style={{ display: 'flex' }}>
              <MuiTextField
                sx={{ width: '400px', paddingRight: '30px', height: 'auto' }}
                value={patient}
                required={false}
                onChange={({ target: { value } }) => setPatient(value)}
                multiline
                minRows={1}
              />
              <MuiTextField
                sx={{ width: '400px', paddingRight: '30px', height: 'auto' }}
                value={patient1}
                required={false}
                onChange={({ target: { value } }) => setPatient1(value)}
                multiline
                minRows={1}
              />
              <Checkbox
                size="small"
                disabled={disabled}
                // checked={medicationDo}
                // onChange={onChangeMedicationDo}
                sx={{
                  marginLeft: '135px',
                }}
              />
            </div>
          ),
        },
      ],
    },
    {
      label: '2',
      elements: [
        {
          type: 'text',
          element: (
            <div style={{ display: 'flex' }}>
              <MuiTextField
                sx={{ width: '400px', paddingRight: '30px', height: 'auto' }}
                value={student1}
                required={false}
                onChange={({ target: { value } }) => setStudent1(value)}
                multiline
                minRows={1}
              />
              <MuiTextField
                sx={{ width: '400px', paddingRight: '30px', height: 'auto' }}
                value={student2}
                required={false}
                onChange={({ target: { value } }) => setStudent2(value)}
                multiline
                minRows={1}
              />
              <Checkbox
                size="small"
                disabled={disabled}
                // checked={medicationDo}
                // onChange={onChangeMedicationDo}
                sx={{
                  marginLeft: '135px',
                }}
              />
            </div>
          ),
        },
      ],
    },
    {
      label: '3',
      elements: [
        {
          type: 'text',
          element: (
            <div style={{ display: 'flex' }}>
              <MuiTextField
                sx={{ width: '400px', paddingRight: '30px', height: 'auto' }}
                value={basis1}
                required={false}
                onChange={({ target: { value } }) => setBasis1(value)}
                multiline
                minRows={1}
              />
              <MuiTextField
                sx={{ width: '400px', paddingRight: '30px', height: 'auto' }}
                value={basis2}
                required={false}
                onChange={({ target: { value } }) => setBasis2(value)}
                multiline
                minRows={1}
              />
              <Checkbox
                size="small"
                disabled={disabled}
                // checked={medicationDo}
                // onChange={onChangeMedicationDo}
                sx={{
                  marginLeft: '135px',
                }}
              />
            </div>
          ),
        },
      ],
    },
    {
      label: '4',
      elements: [
        {
          type: 'text',
          element: (
            <div style={{ display: 'flex' }}>
              <MuiTextField
                sx={{ width: '400px', paddingRight: '30px', height: 'auto' }}
                value={evaluation1}
                required={false}
                onChange={({ target: { value } }) => setEvaluation1(value)}
                multiline
                minRows={1}
              />
              <MuiTextField
                sx={{ width: '400px', paddingRight: '30px', height: 'auto' }}
                value={evaluation2}
                required={false}
                onChange={({ target: { value } }) => setEvaluation2(value)}
                multiline
                minRows={1}
              />
              <Checkbox
                size="small"
                disabled={disabled}
                // checked={medicationDo}
                // onChange={onChangeMedicationDo}
                sx={{
                  marginLeft: '135px',
                }}
              />
            </div>
          ),
        },
      ],
    },
  ];

  const displayRows = mentalNursingRecordList
    ? mentalNursingRecordList.map((item, i) => ({
        ...item,
        id: i,
        time: formatStringToDate(item.time, 'hh:mm a'),
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
    : [];
  return (
    <Fragment>
      <SectionTitle title="비급여 진료 내용 및 비용" />
      <Grid item xs={12}>
        <Table
          sx={{ minWidth: 650, marginTop: '30px' }}
          aria-label="simple table"
        >
          <TableBody>
            {!disabled &&
              inputRows.map(row => (
                <TableRow
                  key={row.label}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell
                    style={{
                      width: '20%',
                      verticalAlign: 'top',
                    }}
                  >
                    {row.label}
                  </TableCell>
                  {row.elements.map(element =>
                    element.type === 'date' || element.type === 'time' ? (
                      <TableCell>{element.element}</TableCell>
                    ) : element.type === 'button' ? (
                      <TableCell align="right">{element.element}</TableCell>
                    ) : (
                      <TableCell colSpan={3}>{element.element}</TableCell>
                    )
                  )}
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <Typography
          sx={{
            width: '98%',
            textAlign: 'center',
            fontSize: '21px',
            margin: '30px 0px 30px 0px',
          }}
        >
          본인은 상기 비급여 진료대상과 항목, 비용에 대하여
          <br />
          충분한 설명을 들었으며 이에 동의합니다.
        </Typography>
      </Grid>
    </Fragment>
  );
};

export default CautionList;
