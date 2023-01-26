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
        patientInfo: { patient_id, name, age, gender, ward, room, admin_hod, department, disease_main, main_doctor, height, weight, blood },
        register,
    } = props;

    const infos = [
        {title: "환자명", value: name},
        {title: "환자등록번호", value: patient_id},
        {title: "나이", value: age},
        {title: "성별", value: gender},
        {title: "병동", value: ward},
        {title: "병실", value: room},
        {title: "진료과", value: department},
        {title: "HOD", value: admin_hod},
        {title: "키", value: height},
        {title: "체중", value: weight},
        {title: "혈액형", value: blood},
        {title: "진단명", value: disease_main.disease_kor},
    ];

    const staffs = [
        { title: "집도의", variable: "surgery_information.operating_surgeon" },
        { title: "보조의", variable: "surgery_information.assistant" },
        { title: "소독간호사", variable: "surgery_information.scrubbing_nurse" },
        { title: "순환간호사", variable: "surgery_information.circulating_nurse" },
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
            <RowContent title={title} titleRatio={1} childrenRatio={2}>
                <Form.MuiTextField value={value} InputProps={{ readOnly: true }} />
            </RowContent>
            )}
            
            {staffs.map(({title, variable}, _) => 
            <RowContent key={variable} title={title} titleRatio={1} childrenRatio={2}>
                <MuiTextField
                    {...register(variable)}
                    required={false}
                />
            </RowContent>
        )}
        </RowContainer>
    );
};

export default PatientStaffInfo;