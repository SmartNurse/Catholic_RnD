import { useEffect, useState } from 'react';
import { Card, Divider, NativeSelect, Skeleton, Stack } from '@mui/material';

import { getPatientInfo } from '../../../apis/admin';
import usePatient from '../../../store/slices/usePatient';
import useUser from '../../../store/slices/useUser';

import PatientInfoItem from './PatientInfoItem';
import useI18n from '../../../hooks/useI18n';

const PatientInfo = () => {
  const { name: userName } = useUser();
  const { patient, patientInfo, onSelectedPatientInfo } = usePatient();
  const i18n = useI18n();

  // 부진단 코드 index
  const [diseaseSubIndex, setDiseaseSubIndex] = useState(0);

  useEffect(() => {
    if (!patient) return;
    // 가상환자 상세정보 요청
    getPatientInfo({ patient_id: patient.patient_id }).then(({ data }) =>
      onSelectedPatientInfo(data)
    );
  }, [patient, onSelectedPatientInfo]);

  if (!patientInfo) {
    return <Skeleton variant="rectangular" width="100%" height={160} />;
  }

  const {
    // column1
    patient_id,
    gender,
    height,
    blood,
    weight,
    // column2
    department,
    ward,
    room,
    main_doctor,
    // column3
    admin_hod,
    admin_pod,
    // column4
    disease_main,
    disease_sub,
  } = patientInfo;

  // 부진단 코드 선택 UI
  const DiseaseSubCode = () => (
    <NativeSelect
      value={diseaseSubIndex}
      onChange={e => setDiseaseSubIndex(Number(e.target.value))}
      inputProps={{ style: { paddingTop: 0, paddingBottom: 0 } }}
      sx={{ fontSize: 14, lineHeight: '18px', p: 0 }}
    >
      {disease_sub.map(({ disease_id }, index) => (
        <option key={disease_id} value={index}>
          {disease_id}
        </option>
      ))}
    </NativeSelect>
  );

  return (
    <Card
      component="section"
      sx={{
        p: 2.5,
        display: 'flex',
        justifyContent: 'space-around',
        gap: { xs: 1.25, xl: 5 },
      }}
    >
      <Stack spacing={1.25}>
        <PatientInfoItem title="등록번호" content={patient_id} />
        <PatientInfoItem
          title="성별"
          content={i18n(`STUDENT.GENDER.${gender}`)}
        />
        <PatientInfoItem title="키" content={height.toLowerCase()} />
        <PatientInfoItem title="혈액형" content={blood} />
        <PatientInfoItem title="체중" content={weight.toLowerCase()} />
      </Stack>
      <Divider orientation="horizontal" />
      <Stack spacing={1.25}>
        <PatientInfoItem title="진료과" content={department} />
        <PatientInfoItem title="병동" content={ward} />
        <PatientInfoItem title="병실" content={room} />
        <PatientInfoItem title="담당간호사" content={userName} />
        <PatientInfoItem title="담당의사" content={main_doctor} />
      </Stack>
      <Divider orientation="horizontal" />
      <Stack spacing={1.25}>
        <PatientInfoItem title="HOD" content={admin_hod} />
        <PatientInfoItem title="POD" content={admin_pod} />
      </Stack>
      <Divider orientation="horizontal" />
      <Stack spacing={1.25}>
        <PatientInfoItem title="주진단코드" content={disease_main.disease_id} />
        <PatientInfoItem title="주진단명" content={disease_main.disease_kor} />
        <PatientInfoItem title="부진단코드" content={<DiseaseSubCode />} />
        <PatientInfoItem
          title="부진단명"
          content={disease_sub[diseaseSubIndex].disease_kor}
        />
      </Stack>
    </Card>
  );
};

export default PatientInfo;
