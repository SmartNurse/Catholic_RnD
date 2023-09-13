import { useEffect, useState } from 'react';

import { ListItemButton, Typography, useTheme } from '@mui/material';

import { getPatients } from 'apis/admin';
import usePatient from 'store/patient/usePatient';
import MuiAutocomplete from 'components/MuiAutocomplete';

import { getNursingRecords } from 'apis/main';
import useUser from 'store/user/useUser';

import { ReactComponent as Cookie } from 'assets/alarm-icon.svg';
import { ReactComponent as Empty } from 'assets/alarm-icon-empty.svg';

interface IOption {
  patient_id: string;
  name: string;
  age: string;
}

interface Props {
  user_id: number;
}

const PatientsList = ({ user_id }: Props) => {
  const { palette } = useTheme();
  const { onSelectedPatient } = usePatient();
  const { student_uuid: isStudent } = useUser();

  const optionLabel = ({ patient_id, name }: IOption) =>
    `${patient_id} ${name}`;

  const Option = ({ patient_id, name, age, ...props }: IOption) => {
    const [nursingRecord, setNursingRecord] = useState([]);

    useEffect(() => {
      // Ecardex
      getNursingRecords({
        page: 1,
        user_id,
        patient_id: Number(`${patient_id}`),
      }).then(({ data }) => {
        setNursingRecord(data.nursing_records);
      });
    });

    if (nursingRecord.length === 0) {
      return (
        <ListItemButton {...props} sx={{ gap: 0.5 }}>
          <Empty />
          <Typography variant="subtitle2">{patient_id}</Typography>
          <Typography
            variant="caption"
            color={palette.mode === 'dark' ? 'lightgrey' : '#000000B2'}
          >
            {name}
          </Typography>
          <Typography
            variant="caption"
            color={palette.mode === 'dark' ? 'lightgrey' : '#000000B2'}
          >
            {age}세
          </Typography>
        </ListItemButton>
      );
    } else {
      return (
        <ListItemButton {...props} sx={{ gap: 0.5 }}>
          <Cookie />
          <Typography variant="subtitle2">{patient_id}</Typography>
          <Typography
            variant="caption"
            color={palette.mode === 'dark' ? 'lightgrey' : '#000000B2'}
          >
            {name}
          </Typography>
          <Typography
            variant="caption"
            color={palette.mode === 'dark' ? 'lightgrey' : '#000000B2'}
          >
            {age}세
          </Typography>
        </ListItemButton>
      );
    }
  };

  return (
    <MuiAutocomplete
      variant="standard"
      valueKey="patient_id"
      listKey="admin_patients"
      placeholder="환자 검색"
      noOptionsText="검색한 환자가 없습니다 다른 환자 이름을 입력해주세요"
      getOptionLabel={optionLabel}
      renderOption={(props, option) => {
        if (!user_id) {
          return null;
        } else return <Option {...props} {...option} />;
      }}
      onChange={onSelectedPatient}
      getApi={params => getPatients({ ...params, user_id })}
    />
  );
};

export default PatientsList;
