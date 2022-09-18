import Form from 'components/Form';
import { IPatientInfo } from 'apis/admin/type';

import RowContainer from '../components/RowContainer';
import RowContent from '../components/RowContent';

interface Props {
  patientInfo: IPatientInfo;
}

const PatientInfo = (props: Props) => {
  const { patientInfo } = props;

  return (
    <RowContainer xs={12}>
      <RowContent title="환자명" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField
          value={patientInfo.name}
          InputProps={{ readOnly: true }}
        />
      </RowContent>
      <RowContent title="환자등록번호" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField
          value={patientInfo.patient_id}
          InputProps={{ readOnly: true }}
        />
      </RowContent>
      <RowContent title="성별" titleRatio={1} childrenRatio={2}>
        <Form.MuiRadioGroup
          i18nKey="GENDER"
          values={[1, 2]}
          value={patientInfo.gender}
          defaultValue={patientInfo.gender}
        />
      </RowContent>
      <RowContent title="나이" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField
          value={patientInfo.age}
          InputProps={{ readOnly: true }}
        />
      </RowContent>
      <RowContent title="병동" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField
          value={patientInfo.department}
          InputProps={{ readOnly: true }}
        />
      </RowContent>
      <RowContent title="병실" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField
          value={patientInfo.ward}
          InputProps={{ readOnly: true }}
        />
      </RowContent>
    </RowContainer>
  );
};

export default PatientInfo;
