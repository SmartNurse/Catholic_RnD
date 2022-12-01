import Form from 'components/Form';
import { IPatientInfo } from 'apis/admin/type';

import RowContainer from '../components/RowContainer';
import RowContent from '../components/RowContent';

const PatientInfo = (props: IPatientInfo) => {
  const { patient_id, name, age, disease_main, admin_hod, admin_pod } = props;

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
      <RowContent title="" titleRatio={1} childrenRatio={2}>
      </RowContent>
      <RowContent title="진단명" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField value={disease_main.disease_kor} InputProps={{ readOnly: true }} />
      </RowContent>
      <RowContent title="HOD" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField value={admin_hod} InputProps={{ readOnly: true }} />
      </RowContent>
      <RowContent title="POD" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField value={admin_pod} InputProps={{ readOnly: true }} />
      </RowContent>
      <RowContent title="" titleRatio={1} childrenRatio={2}>
      </RowContent>
    </RowContainer>
  );

};

export default PatientInfo;
