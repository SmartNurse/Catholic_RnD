import { AxiosResponse } from 'axios';
import { ListItemButton, Typography } from '@mui/material';

import { IGetSearch } from 'apis/type';
import usePatient from 'store/patient/usePatient';
import MuiAutocomplete from 'components/MuiAutocomplete';

interface Props {
  getApi: (request: IGetSearch) => Promise<AxiosResponse<any>>;
}

interface IOption {
  patient_id: string;
  name: string;
  age: string;
}

const PatientsList = ({ getApi }: Props) => {
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
      listKey="admin_patients"
      placeholder="환자 검색"
      noOptionsText="검색한 환자가 없습니다 다른 환자 이름을 입력해주세요"
      getOptionLabel={optionLabel}
      renderOption={(props, option) => <Option {...props} {...option} />}
      onChange={onSelectedPatient}
      getApi={getApi}
    />
  );
};

export default PatientsList;
