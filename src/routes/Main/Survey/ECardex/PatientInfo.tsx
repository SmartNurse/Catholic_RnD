import Form from 'components/Form';
import { IPatientInfo } from 'apis/admin/type';
import { IFormRegister } from 'routes/Main/type';

import RowContainer from '../components/RowContainer';
import RowContent from '../components/RowContent';

interface Props {
  disabled?: boolean;
  nurseName: string;
  patientInfo: IPatientInfo;
}

const PatientInfo = (props: Props) => {
  const { patientInfo, nurseName } = props;
  const {
    patient_id,
    disease_main,
    department,
    main_doctor,
    name, 
    admin_hod,
    ward,
    age,  
    admin_pod,
    room,
    gender
  } = patientInfo;

  return (
    <RowContainer xs={12}>
      <RowContent title="환자등록번호" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField value={patient_id} InputProps={{ readOnly: true }} />
      </RowContent>
      <RowContent title="진단명" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField value={disease_main.disease_kor} InputProps={{ readOnly: true }} />
      </RowContent>
      <RowContent title="진료과" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField value={department} InputProps={{ readOnly: true }} />
      </RowContent>
      <RowContent title="담당 의사" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField value={main_doctor} InputProps={{ readOnly: true }} />
      </RowContent>
      <RowContent title="성명" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField value={name} InputProps={{ readOnly: true }} />
      </RowContent>
      <RowContent title="HOD" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField value={admin_hod} InputProps={{ readOnly: true }} />
      </RowContent>
      <RowContent title="병동" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField value={ward} InputProps={{ readOnly: true }} />
      </RowContent>
      <RowContent title="담당간호사" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField value={nurseName} InputProps={{ readOnly: true }} />
      </RowContent>
      <RowContent title="나이" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField value={age} InputProps={{ readOnly: true }} />
      </RowContent>
      <RowContent title="POD" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField value={admin_pod} InputProps={{ readOnly: true }} />
      </RowContent>
      <RowContent title="병실" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField value={room} InputProps={{ readOnly: true }} />
      </RowContent>
      <RowContent title="" titleRatio={1} childrenRatio={2}>
      </RowContent>
      <RowContent title="성별" titleRatio={1} childrenRatio={2}>
        <Form.MuiRadioGroup
          i18nKey="GENDER"
          values={[1, 2]}
          value={gender}
          defaultValue={gender}
        />
      </RowContent>
    </RowContainer>
  );

};

export default PatientInfo;
