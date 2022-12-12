import { ListItemButton, Typography } from '@mui/material';

import { getCollegePatientList } from 'apis/admin';
import usePatient from 'store/patient/usePatient';
import MuiAutocomplete from 'components/MuiAutocomplete';

interface IOption {
  patient_id: string;
  name: string;
  age: string;
}

const CollegePatientList = ({ user_id }: { user_id: number }) => {
  const { onSelectedPatient } = usePatient();

  const optionLabel = ({ patient_id, name }: IOption) =>
    `${patient_id} ${name}`;

  const Option = ({ patient_id, name, age, ...props }: IOption) => (
    <ListItemButton {...props} sx={{ gap: 0.5 }}>
      <Typography variant="subtitle2">{patient_id}</Typography>
      <Typography variant="caption" color={'#000000B2'}>
        {name}
      </Typography>
      <Typography variant="caption" color={'#000000B2'}>
        {age}세
      </Typography>
    </ListItemButton>
  );

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
