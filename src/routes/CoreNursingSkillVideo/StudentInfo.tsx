import Form from 'components/Form';
import RowContainer from '../Main/Survey/components/RowContainer';
import RowContent from '../Main/Survey/components/RowContent';

interface Props {
  disabled?: boolean;
  student_no: string | undefined;
  student_name: string;
}

const StudentInfo = (props: Props) => {
  const { student_no, student_name  } = props;

  const infos = [
    {title: "간호사", value: student_name},
    {title: "학번", value: student_no},
    {title: "용량", value: "10GB/10GB"},
  ];

  return (
    <RowContainer xs={12}>
      {infos.map(({ title, value }) => 
        <RowContent title={title} titleRatio={1} childrenRatio={2}>
          <Form.MuiTextField value={value} InputProps={{ readOnly: true }} />
        </RowContent>
      )}
    </RowContainer>
  );

};

export default StudentInfo;
