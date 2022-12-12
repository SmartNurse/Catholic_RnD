import Form from 'components/Form';
import { IPatientInfo } from 'apis/admin/type';

import RowContainer from '../components/RowContainer';
import RowContent from '../components/RowContent';

const PatientInfo = (props: IPatientInfo) => {
  const { name, patient_id, age, gender, room, ward } = props;

  return (
    <RowContainer xs={12}>
      <RowContent title="환자명" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField value={name} InputProps={{ readOnly: true }} />
      </RowContent>
      <RowContent title="환자등록번호" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField value={patient_id} InputProps={{ readOnly: true }} />
      </RowContent>
      <RowContent title="나이" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField value={age} InputProps={{ readOnly: true }} />
      </RowContent>
      <RowContent title="성별" titleRatio={1} childrenRatio={2}>
        <Form.MuiRadioGroup
          i18nKey="GENDER"
          values={[1, 2]}
          value={gender}
          defaultValue={gender}
        />
      </RowContent>
      <RowContent title="병동" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField value={ward} InputProps={{ readOnly: true }} />
      </RowContent>
      <RowContent title="병실" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField value={room} InputProps={{ readOnly: true }} />
      </RowContent>
    </RowContainer>
  );
};

export default PatientInfo;
