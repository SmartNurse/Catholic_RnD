import Form from 'components/Form';
import MuiTextField from 'components/Form/MuiTextField';
import RowContainer from '../../components/RowContainer';
import RowContent from '../../components/RowContent';

import { IPatientInfo } from 'apis/admin/type';
import { IFormRegister } from 'routes/Main/type';

interface Props extends IFormRegister {
  disabled?: boolean;
  nurseName: string;
  patientInfo: IPatientInfo;
}

const PatientStaffInfo = (props: Props) => {
  const {
    patientInfo: {
      patient_id,
      name,
      age,
      gender,
      ward,
      room,
      admin_hod,
      admin_pod,
      department,
      disease_main,
      main_doctor,
    },
    nurseName,
    register,
  } = props;

  const infos = [
    { title: '환자명', value: name },
    { title: '환자등록번호', value: patient_id },
    { title: '나이', value: age },
    { title: '성별', value: gender },
    { title: '병동', value: ward },
    { title: '병실', value: room },
    { title: 'HOD', value: admin_hod },
    { title: 'POD', value: admin_pod },
    { title: '진료과', value: department },
    { title: '진단명', value: disease_main.disease_kor },
    { title: '담당 교수', value: main_doctor },
    { title: '담당 간호사', value: nurseName },
  ];

  const staffs = [
    { title: '발생장소', variable: 'surgery_information.operating_surgeon' },
    { title: '소생술 장소', variable: 'surgery_information.assistant' },
    { title: '소생술 리더', variable: 'surgery_information.scrubbing_nurse' },
    { title: '기록자', variable: 'surgery_information.circulating_nurse' },
  ];

  return (
    <RowContainer xs={12}>
      {infos.map(({ title, value }) =>
        title === '성별' ? (
          <RowContent title={title} titleRatio={1} childrenRatio={2}>
            <Form.MuiRadioGroup
              i18nKey="GENDER"
              values={[1, 2]}
              value={Number(value)}
              defaultValue={Number(value)}
            />
          </RowContent>
        ) : (
          <RowContent title={title} titleRatio={1} childrenRatio={2}>
            <Form.MuiTextField value={value} InputProps={{ readOnly: true }} />
          </RowContent>
        )
      )}

      {staffs.map(({ title, variable }, _) => (
        <RowContent
          key={variable}
          title={title}
          titleRatio={1}
          childrenRatio={2}
        >
          <MuiTextField {...register(variable)} required={false} />
        </RowContent>
      ))}
    </RowContainer>
  );
};

export default PatientStaffInfo;
