import { Fragment } from 'react';

import Form from 'components/Form';
import { IPatientInfo } from 'apis/admin/type';
import { IFormRegister } from 'routes/Main/Survey/type';

import RowContainer from '../components/RowContainer';
import RowContent from '../components/RowContent';
import RowTable from '../components/RowTable';

interface Props extends IFormRegister {
  nurseName: string;
  patientInfo: IPatientInfo;
}

const PatientInfo = (props: Props) => {
  const { nurseName, patientInfo, register } = props;

  const columns = [
    { id: 'contact', label: '비상 연락처', xs: 6 },
    { id: 'name', label: '이름', xs: 3 },
    { id: 'relation', label: '관계', xs: 3 },
  ];
  const rows = Array.from({ length: 3 }, (_, i) => {
    const prefix = `contacts.${i}`;
    return {
      id: i,
      contact: (
        <Form.MuiTextField
          type="tel"
          required={!i}
          {...register(`${prefix}.contact`)}
        />
      ),
      name: <Form.MuiTextField required={!i} {...register(`${prefix}.name`)} />,
      relation: (
        <Form.MuiTextField required={!i} {...register(`${prefix}.relation`)} />
      ),
    };
  });

  return (
    <Fragment>
      <RowContainer>
        <RowContent title="대상" childrenRatio={4}>
          <Form.MuiTextField value="환자" InputProps={{ readOnly: true }} />
        </RowContent>
        <RowContent title="환자명" childrenRatio={4}>
          <Form.MuiTextField
            value={patientInfo.name}
            InputProps={{ readOnly: true }}
          />
        </RowContent>
        <RowContent title="나이" childrenRatio={4}>
          <Form.MuiTextField
            value={patientInfo.age}
            InputProps={{ readOnly: true }}
          />
        </RowContent>
        <RowContent title="성별" childrenRatio={4}>
          <Form.MuiRadioGroup
            i18nKey="GENDER"
            values={[1, 2]}
            value={patientInfo.gender}
            defaultValue={patientInfo.gender}
          />
        </RowContent>
        <RowContent title="진료과" childrenRatio={4}>
          <Form.MuiTextField
            value={patientInfo.department}
            InputProps={{ readOnly: true }}
          />
        </RowContent>
        <RowContent title="딤딩 의사" childrenRatio={4}>
          <Form.MuiTextField
            value={patientInfo.main_doctor}
            InputProps={{ readOnly: true }}
          />
        </RowContent>
        <RowContent title="기록자" childrenRatio={4}>
          <Form.MuiTextField
            value={nurseName}
            InputProps={{ readOnly: true }}
          />
        </RowContent>
        <RowContent title="정보제공자" childrenRatio={4}>
          <Form.MuiTextField {...register('offer')} />
        </RowContent>
      </RowContainer>
      <RowContainer sx={{ mt: 'auto' }}>
        <RowTable rows={rows} columns={columns} />
      </RowContainer>
    </Fragment>
  );
};

export default PatientInfo;
