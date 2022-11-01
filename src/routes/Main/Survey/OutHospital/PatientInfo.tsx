import Form from 'components/Form';
import { IFormRegister } from 'routes/Main/type';
import { IPatientInfo } from 'apis/admin/type';

import RowContainer from '../components/RowContainer';
import RowContent from '../components/RowContent';

interface Props extends IPatientInfo, IFormRegister {
  disabled?: boolean;
}

const PatientInfo = (props: Props) => {
  const { name, patient_id, disabled, register } = props;

  return (
    <RowContainer xs={12}>
      <RowContent title="환자명" titleRatio={1} childrenRatio={3}>
        <Form.MuiTextField
          value={name}
          fullWidth={false}
          disabled={disabled}
          InputProps={{ readOnly: true }}
        />
      </RowContent>
      <RowContent title="환자등록번호" titleRatio={1} childrenRatio={3}>
        <Form.MuiTextField
          fullWidth={false}
          value={patient_id}
          disabled={disabled}
          InputProps={{ readOnly: true }}
        />
      </RowContent>
      <RowContent title="퇴원일" titleRatio={1} childrenRatio={3}>
        <Form.MuiTextField
          type="date"
          fullWidth={false}
          disabled={disabled}
          {...register('date')}
        />
      </RowContent>
    </RowContainer>
  );
};

export default PatientInfo;
