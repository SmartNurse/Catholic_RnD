import { Fragment } from 'react';
import { AccessTime } from '@mui/icons-material';
import { Checkbox, Typography } from '@mui/material';
import { MobileTimePicker } from '@mui/x-date-pickers';

import { IMedication } from 'apis/survey/type';
import { IFormValues, IFormWatch } from 'routes/Main/type';
import MuiTextField from 'components/Form/MuiTextField';

import RowTable from '../components/RowTable';
import RowContainer from '../components/RowContainer';
import SectionTitle from '../components/SectionTitle';

interface Props extends IFormValues, IFormWatch {}

const Medications = (props: Props) => {
  const { watch, getValues, setValue } = props;
  const medicationList: IMedication[] = getValues('patient_medications');

  const columns = [
    { id: 'pt_medication_no', label: '약물처방번호', xs: 1.5 },
    { id: 'prescription_time', label: '처방시간', xs: 1 },
    { id: 'medication_time', label: '투여시간', xs: 1.5 },
    { id: 'medication_id', label: '약물명', xs: 1.5 },
    { id: 'medication_content', label: '함량', xs: 1 },
    { id: 'medication_measure', label: '단위', xs: 1 },
    { id: 'medication_amount', label: '투여량', xs: 1 },
    { id: 'medication_freq', label: '투여횟수', xs: 1 },
    { id: 'medication_note', label: '상세투여방법', xs: 1.5 },
    { id: 'medication_do', label: '투여완료', xs: 1 },
  ];

  const rows = medicationList.map((item, i) => {
    const prefix = `patient_medications.${i}`;
    return {
      id: item.pt_medication_uuid,
      pt_medication_no: (
        <Typography variant="caption">{item.pt_medication_no}</Typography>
      ),
      prescription_time: (
        <Typography variant="caption">{item.prescription_time}</Typography>
      ),
      medication_time: (
        <MobileTimePicker
          value={watch(`${prefix}.medication_time`)}
          onChange={value => setValue(`${prefix}.medication_time`, value)}
          renderInput={params => (
            <MuiTextField
              {...params}
              placeholder="00:00 pm"
              InputProps={{ endAdornment: <AccessTime /> }}
            />
          )}
        />
      ),
      medication_id: (
        <Typography variant="caption">{item.medication_id}</Typography>
      ),
      medication_content: (
        <Typography variant="caption">{item.medication_content}</Typography>
      ),
      medication_measure: (
        <Typography variant="caption">{item.medication_measure}</Typography>
      ),
      medication_amount: (
        <Typography variant="caption">{item.medication_amount}</Typography>
      ),
      medication_freq: (
        <Typography variant="caption">{item.medication_freq}</Typography>
      ),
      medication_note: (
        <Typography variant="caption">{item.medication_note}</Typography>
      ),
      medication_do: (
        <Checkbox
          size="small"
          checked={Boolean(watch(`${prefix}.medication_do`))}
          onChange={(_, checked) =>
            setValue(`${prefix}.medication_do`, checked ? 1 : 0)
          }
        />
      ),
    };
  });

  return (
    <Fragment>
      <SectionTitle title="처방 내역" />

      <RowContainer ratio={12}>
        <RowTable rows={rows} columns={columns} />
      </RowContainer>
    </Fragment>
  );
};

export default Medications;
