import useUser from 'store/user/useUser';

import Form from 'components/Form';
import RowContainer from '../Main/Survey/components/RowContainer';
import RowContent from '../Main/Survey/components/RowContent';

import { Typography, Box } from "@mui/material";

import theme from 'styles/theme';

interface Props {
  disabled?: boolean;
  totalSize: number;
}

const StudentModeInfo = (props: Props) => {
  const { totalSize } = props;
  const { student_name, student_no } = useUser();
  
  const infos = [
    {title: "간호사", value: student_name},
    {title: "학번", value: student_no},
    {title: "용량", value: String(totalSize) + "GB" },
  ];

  return (
    <RowContainer xs={12}>
      {infos.map(({ title, value }) => 
        <RowContent title={title} titleRatio={1} childrenRatio={3}>
          {title === "용량" 
          ?
          <Box sx={{ width: "100%", textAlign: "right" }}>
            <Typography sx={{ color: `${theme.palette.primary.main}` }} fontSize="14px" lineHeight="37.125px" display="inline">{value}</Typography>
            <Typography fontSize="14px" display="inline"> / 10GB</Typography>
          </Box>
          :
          <Form.MuiTextField value={value} InputProps={{ readOnly: true }} />
          }
        </RowContent>
      )}
    </RowContainer>
  );

};

export default StudentModeInfo;
