import Form from 'components/Form';
import { IPatientInfo } from 'apis/admin/type';
import { IFormRegister } from 'routes/Main/type';
import RowContainer from '../components/RowContainer';
import RowContent from '../components/RowContent';

interface Props extends IFormRegister {
  disabled?: boolean;
  nurseName: string;
  patientInfo: IPatientInfo;
}

const PatientInfo = (props: Props) => {
  const {
    patientInfo: { patient_id, name, age, gender, ward, room, admin_hod, admin_pod, department, disease_main, main_doctor },
    nurseName,
    register
  } = props;

  const infos = [
    {title: "환자등록번호", value: patient_id},
    {title: "환자명", value: name},
    {title: "나이", value: age},
    {title: "성별", value: gender},
    {title: "병동", value: ward},
    {title: "병실", value: room},
    {title: "입원일", value: "in_date"},
    {title: "퇴원일", value: "out_date"},
    {title: "진료과", value: department},
    {title: "진단명", value: disease_main.disease_kor},
    {title: "담당 의사", value: main_doctor},
    {title: "담당 간호사", value: nurseName},
  ];

  return (
    <RowContainer xs={12}>
      {infos.map(({ title, value }) => 
        title === "성별"
        ?
        <RowContent title={title} titleRatio={1} childrenRatio={2}>
          <Form.MuiRadioGroup
            i18nKey="GENDER"
            values={[1, 2]}
            value={Number(value)}
            defaultValue={Number(value)}
          />
        </RowContent>
        :
        (title === "입원일" || title === "퇴원일"
        ?
        <RowContent title={title} titleRatio={1} childrenRatio={2}>
          <Form.MuiTextField
            type="date"
            {...register(`${value}`)}
          />
        </RowContent>
        :
        <RowContent title={title} titleRatio={1} childrenRatio={2}>
          <Form.MuiTextField value={value} InputProps={{ readOnly: true }} />
        </RowContent>
        )
      )}
    </RowContainer>
  );

};

export default PatientInfo;
