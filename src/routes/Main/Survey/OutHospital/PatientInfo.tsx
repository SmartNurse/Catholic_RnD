import Form from 'components/Form';
import { IFormRegister } from 'routes/Main/type';
import { IPatientInfo } from 'apis/admin/type';

import RowContainer from '../components/RowContainer';
import RowContent from '../components/RowContent';

interface Props extends IFormRegister {
  patientInfo: IPatientInfo;
}

const PatientInfo = (props: Props) => {
  const { patientInfo, register } = props;

  return (
    <RowContainer xs={12}>
      <RowContent title="환자명" titleRatio={1} childrenRatio={3}>
        <Form.MuiTextField
          fullWidth={false}
          value={patientInfo.name}
          InputProps={{ readOnly: true }}
        />
      </RowContent>
      <RowContent title="환자등록번호" titleRatio={1} childrenRatio={3}>
        <Form.MuiTextField
          fullWidth={false}
          value={patientInfo.patient_id}
          InputProps={{ readOnly: true }}
        />
      </RowContent>
      <RowContent title="퇴원일" titleRatio={1} childrenRatio={3}>
        <Form.MuiTextField
          type="date"
          fullWidth={false}
          {...register('date')}
        />
      </RowContent>
    </RowContainer>
  );
};

export default PatientInfo;
