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
    gender,
    age,
    height,
    blood,
    weight,
    department,
    ward,
    room,
    admin_hod,
    disease_main,
    disease_sub,
    main_doctor
  } = patientInfo;

  return (
    <RowContainer xs={12}>
      <RowContent title="환자등록번호" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField value={patient_id} InputProps={{ readOnly: true }} />
      </RowContent>
      <RowContent title="진료과" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField value={department} InputProps={{ readOnly: true }} />
      </RowContent>
      <RowContent title="HOD" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField value={admin_hod} InputProps={{ readOnly: true }} />
      </RowContent>
      <RowContent title="담당간호사" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField value={nurseName} InputProps={{ readOnly: true }} />
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
      <RowContent title="수술일자" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField
            type="date"
            required={false}
            disabled={disabled}
            {...register("operation_date", {
                onChange: (e) => setOpDate(e.target.value)
            })}
          />
      </RowContent>
      <RowContent title="담당 의사" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField value={main_doctor} InputProps={{ readOnly: true }} />
      </RowContent>
      <RowContent title="나이" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField value={age} InputProps={{ readOnly: true }} />
      </RowContent>
      <RowContent title="병실" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField value={room} InputProps={{ readOnly: true }} />
      </RowContent>
      <RowContent title="주진단명" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField value={disease_main.disease_kor} InputProps={{ readOnly: true }} />
      </RowContent>
      <RowContent title="" titleRatio={1} childrenRatio={2}>
      </RowContent>
      <RowContent title="키" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField value={height} InputProps={{ readOnly: true }} />
      </RowContent>
      <RowContent title="" titleRatio={1} childrenRatio={2}>
      </RowContent>
      <RowContent title="부진단명" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField value={disease_sub[0]?.disease_kor} InputProps={{ readOnly: true }} />
      </RowContent>
      <RowContent title="" titleRatio={1} childrenRatio={2}>
      </RowContent>
      <RowContent title="혈액형" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField value={blood} InputProps={{ readOnly: true }} />
      </RowContent>
      <RowContent title="" titleRatio={1} childrenRatio={2}>
      </RowContent>
      <RowContent title="" titleRatio={1} childrenRatio={2}>
      </RowContent>
      <RowContent title="" titleRatio={1} childrenRatio={2}>
      </RowContent>
      <RowContent title="체중" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField value={weight} InputProps={{ readOnly: true }} />
      </RowContent>

    </RowContainer>
  );

};

export default PatientInfo;
