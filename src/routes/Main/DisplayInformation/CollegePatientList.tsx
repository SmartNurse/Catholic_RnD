import React, { useEffect, useState } from 'react';

import { ListItemButton, Typography } from '@mui/material';
import { getCollegePatientList } from 'apis/admin';

import { getNursingRecords } from 'apis/main';
import { ReactComponent as Cookie } from 'assets/alarm-icon.svg';
import { ReactComponent as Empty } from 'assets/alarm-icon-empty.svg';

import usePatient from 'store/patient/usePatient';
import useStudent from 'store/student/useStudent';

import MuiAutocomplete from 'components/MuiAutocomplete';

interface IOption {
  patient_id: string;
  name: string;
  age: string;
}

const CollegePatientList = ({ user_id }: { user_id: number }) => {
  const { onSelectedPatient } = usePatient();
  const { student_uuid } = useStudent();

  const optionLabel = ({ patient_id, name }: IOption) =>
    `${patient_id} ${name}`;

  const Option = ({ patient_id, name, age, ...props }: IOption) => {
    const [nursingRecord, setNursingRecord] = useState([]);

    useEffect(() => {
      // Ecardex
      getNursingRecords({
        page: 1,
        user_id: Number(`${student_uuid}`),
        patient_id: Number(`${patient_id}`),
      }).then(({ data }) => {
        // console.log('데이터', data);
        setNursingRecord(data.nursing_records);
      });
    });

    if (nursingRecord.length === 0) {
      return (
        <ListItemButton {...props} sx={{ gap: 0.5 }}>
          <Empty />
          <Typography variant="subtitle2">{patient_id}</Typography>
          <Typography variant="caption" color={'#000000B2'}>
            {name}
          </Typography>
          <Typography variant="caption" color={'#000000B2'}>
            {age}세
          </Typography>
        </ListItemButton>
      );
    } else {
      return (
        <ListItemButton {...props} sx={{ gap: 0.5 }}>
          <Cookie />
          <Typography variant="subtitle2">{patient_id}</Typography>
          <Typography variant="caption" color={'#000000B2'}>
            {name}
          </Typography>
          <Typography variant="caption" color={'#000000B2'}>
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
      listKey="patients"
      placeholder="환자 검색"
      noOptionsText="검색한 환자가 없습니다 다른 환자 이름을 입력해주세요"
      getOptionLabel={optionLabel}
      renderOption={(props, option) => <Option {...props} {...option} />}
      onChange={onSelectedPatient}
      getApi={request => getCollegePatientList({ user_id, ...request })}
    />
  );
};

export default CollegePatientList;
