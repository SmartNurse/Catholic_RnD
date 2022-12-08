import { useState } from "react";

import Form from 'components/Form';
import { IPatientInfo } from 'apis/admin/type';
import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';

import { AccessTime } from '@mui/icons-material';
import { Box } from "@mui/material";
import { MobileTimePicker } from '@mui/x-date-pickers';

import MuiTextField from 'components/Form/MuiTextField';
import RowContainer from '../../components/RowContainer';
import RowContent from '../../components/RowContent';

interface Props extends IFormRegister, IFormValues {
  disabled?: boolean;
  patientInfo: IPatientInfo;
}

const PatientInfo = (props: Props) => {
  const { patientInfo, disabled, register, getValues, setValue } = props;
  const {
    patient_id,
    name,
    age
  } = patientInfo;

  const [accidentTime, setAccidentTime] = useState(null);
  const [arrivedTime, setArrivedTime] = useState(null);

  return (
    <RowContainer xs={12}>
      <RowContent title="사고 유형" titleRatio={1} childrenRatio={5}>
        <Form.MuiRadioGroup
          i18nKey='EMERGENCY.ACCIDENT_TYPE'
          values={[1, 2, 3]}
          defaultValue={getValues('emergency.accident_type')}
          onChange={v => setValue('emergency.accident_type', v)}
        />
      </RowContent>
      <RowContent title="" titleRatio={1} childrenRatio={5} />
      <RowContent title="환자명" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField value={name} InputProps={{ readOnly: true }} />
      </RowContent>
      <RowContent title="주민등록번호" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField {...register("emergency.identification")} />
      </RowContent>
      <RowContent title="주소" titleRatio={1} childrenRatio={5}>
        <Form.MuiTextField {...register("emergency.address")} />
      </RowContent>
      <RowContent title="환자 발생 구분" titleRatio={1} childrenRatio={5}>
        <Form.MuiRadioGroup
          i18nKey='EMERGENCY.DIVISION'
          values={[1, 2, 3, 4, 0]}
          defaultValue={getValues('emergency.division')}
          onChange={v => setValue('emergency.division', v)}
        />
      </RowContent>
      <RowContent title="발생 장소" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField {...register("emergency.place")} />
      </RowContent>
      <RowContent title="" titleRatio={1} childrenRatio={2} />
      <RowContent title="환자 발생 시간" titleRatio={1} childrenRatio={5}>
        <Box sx={{ width: "80%", display: "flex" }}>
          <Form.MuiTextField
            required
            type="date"
            disabled={disabled}
            {...register('accident_date')}
            sx={{ marginRight: "10px" }}
          />
          <MobileTimePicker
            value={accidentTime}
            onChange={setAccidentTime}
            renderInput={params => (
              <MuiTextField
                {...params}
                required={false}
                placeholder="00:00 pm"
                InputProps={{ endAdornment: <AccessTime /> }}
              />
            )}
          />
        </Box>
      </RowContent>
      <RowContent title="환자 도착 시간" titleRatio={1} childrenRatio={5}>
        <Box sx={{ width: "80%", display: "flex" }}>
          <Form.MuiTextField
            required
            type="date"
            disabled={disabled}
            {...register('arrived_date')}
            sx={{ marginRight: "10px" }}
          />
          <MobileTimePicker
            value={arrivedTime}
            onChange={setArrivedTime}
            renderInput={params => (
              <MuiTextField
                {...params}
                required={false}
                placeholder="00:00 pm"
                InputProps={{ endAdornment: <AccessTime /> }}
              />
            )}
          />
        </Box>
      </RowContent>
    </RowContainer>
  );

};

export default PatientInfo;
