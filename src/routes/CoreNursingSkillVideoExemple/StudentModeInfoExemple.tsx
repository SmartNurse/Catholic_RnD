import useUser from 'store/user/useUser';

import Form from 'components/Form';
import RowContainer from '../Main/Survey/components/RowContainer';
import RowContent from '../Main/Survey/components/RowContent';

import { Typography, Stack, useTheme } from "@mui/material";

interface Props {
  disabled?: boolean;
  totalSize: number;
}

const StudentModeInfoExemple = (props: Props) => {
  const { palette } = useTheme();

  const { totalSize } = props;
  const { student_name, student_no } = useUser();

  return (
    <RowContainer xs={12}>
      <RowContent title="간호사" titleRatio={1} childrenRatio={2.5}>
        <Form.MuiTextField value={student_name} InputProps={{ readOnly: true }} />
      </RowContent>
      <RowContent title="학번" titleRatio={1} childrenRatio={2.5}>
        <Form.MuiTextField value={student_no} InputProps={{ readOnly: true }} />
      </RowContent>
      <RowContent title="용량" titleRatio={1} childrenRatio={4}>
        <Stack direction="row" spacing={2}>
          <Typography sx={{ color: `${palette.primary.main}` }} fontSize="14px" lineHeight="37.125px" display="inline">{totalSize + "GB"}</Typography>
          <Typography fontSize="14px" lineHeight="37.125px" display="inline"> / 10GB</Typography>
          <Typography sx={{ color: `${palette.primary.main}` }} fontSize="14px" lineHeight="37.125px" display="inline">
            파일 당 최대 500MB
          </Typography>
        </Stack>
      </RowContent>
    </RowContainer>
  );
};

export default StudentModeInfoExemple;
