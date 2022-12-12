import Form from 'components/Form';
import { IPatientInfo } from 'apis/admin/type';
import { IFormRegister } from 'routes/Main/type';

import RowContainer from '../../components/RowContainer';
import RowContent from '../../components/RowContent';

interface Props extends IFormRegister {
  disabled?: boolean;
  nurseName: string;
  patientInfo: IPatientInfo;
  setOpDate: (opDate: string) => void;
}

const PatientInfo = (props: Props) => {
  const { patientInfo, nurseName, disabled, register, setOpDate } = props;
  const {
    patient_id,
    name,
    age
  } = patientInfo;

  return (
    <RowContainer xs={12}>
      <RowContent title="환자등록번호" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField value={patient_id} InputProps={{ readOnly: true }} />
      </RowContent>
      <RowContent title="환자명" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField value={name} InputProps={{ readOnly: true }} />
      </RowContent>
      <RowContent title="나이" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField value={age} InputProps={{ readOnly: true }} />
      </RowContent>
    </RowContainer>
  );

};

export default PatientInfo;
