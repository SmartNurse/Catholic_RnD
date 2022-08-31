import { getPatients } from '../../../apis/admin';
import usePatient from '../../../store/slices/usePatient';
import MuiAutocomplete from '../../../components/MuiAutocomplete';

const PatientsList = () => {
  const { onSelectedPatient } = usePatient();

  return (
    <MuiAutocomplete
      listKey="admin_patients"
      valueKey="patient_id"
      placeholder="환자 검색"
      variant="standard"
      noOptionsText="검색한 환자가 없습니다 다른 환자 이름을 입력해주세요"
      onChange={onSelectedPatient}
      getApi={getPatients}
      getOptionLabel={option =>
        `${option.patient_id} ${option.name} ${option.age}세`
      }
    />
  );
};

export default PatientsList;
