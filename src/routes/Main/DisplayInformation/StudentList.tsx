import { ListItemButton, Typography } from '@mui/material';

import { getStudentList } from 'apis/admin';
import MuiAutocomplete from 'components/MuiAutocomplete';
import useStudent from 'store/student/useStudent';

interface IOption {
  user_id: number;
  student_name: string;
  student_no: string;
}

const StudentList = ({ user_id }: Pick<IOption, 'user_id'>) => {
  const { onSelectedStudent } = useStudent();

  const optionLabel = ({ student_name, student_no }: IOption) =>
    `${student_name} ${student_no}`;

  const Option = ({ student_name, student_no, ...props }: IOption) => (
    <ListItemButton {...props} sx={{ gap: 0.5 }}>
      <Typography variant="subtitle2">{student_name}</Typography>
      <Typography variant="caption" color={'#000000B2'}>
        {student_no}
      </Typography>
    </ListItemButton>
  );

  return (
    <MuiAutocomplete
      variant="standard"
      valueKey="user_id"
      listKey="student_default_infos"
      placeholder="학생 검색"
      noOptionsText="검색한 학생이 없습니다 다른 학생 이름을 입력해주세요"
      getOptionLabel={optionLabel}
      renderOption={(props, option) => <Option {...props} {...option} />}
      onChange={onSelectedStudent}
      getApi={request => getStudentList({ user_id, ...request })}
    />
  );
};

export default StudentList;
