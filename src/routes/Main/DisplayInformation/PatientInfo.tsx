import { Fragment, useEffect, useState } from 'react';
import {
  Card,
  Divider,
  NativeSelect,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';

import { getPatientInfo } from 'apis/admin';
import useI18n from 'hooks/useI18n';
import useNotification from 'hooks/useNotification';
import useStudent from 'store/student/useStudent';
import usePatient from 'store/patient/usePatient';

import PatientInfoItem from './PatientInfoItem';

const PatientInfo = () => {
  const i18n = useI18n();
  const { onFail } = useNotification();
  const { student_name: userName } = useStudent();
  const { patient, patientInfo, onSelectedPatientInfo } = usePatient();

  // 부진단 코드 index
  const [diseaseSubIndex, setDiseaseSubIndex] = useState(0);

  useEffect(() => {
    if (!patient) return;

    // 가상환자 상세정보 요청
    getPatientInfo({ patient_id: patient.patient_id })
      .then(({ data }) => {
        onSelectedPatientInfo(data);
      })
      .catch(e => {
        onSelectedPatientInfo(null);
        onFail(`가상환자 데이터 조회에 실패했습니다.`, e);
      });
    // eslint-disable-next-line
  }, [patient]);

  if (!patientInfo) {
    return <Skeleton variant="rectangular" sx={{ flex: 1 }} />;
  }

  const {
    // title
    name,
    patient_id,
    // column1
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
      sx={{ fontSize: 14, lineHeight: '18px' }}
    >
      {disease_sub?.map(({ disease_id }, index) => (
        <option key={disease_id} value={index}>
          {disease_id}
        </option>
      ))}
    </NativeSelect>
  );

  return (
    <Fragment>
      <Typography variant="subtitle2" fontSize={13} mb={1}>
        {name} 환자 정보
      </Typography>

      <Card
        component="section"
        sx={{
          p: 2.5,
          display: 'flex',
          overflow: 'visible',
          justifyContent: 'space-around',
          gap: { xs: 1.25, xl: 5 },
        }}
      >
        <Stack spacing={1.25}>
          <PatientInfoItem title="등록번호" content={patient_id} />
          <PatientInfoItem title="성별" content={i18n(`GENDER.${gender}`)} />
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
          <PatientInfoItem
            title="주진단코드"
            content={disease_main.disease_id}
          />
          <PatientInfoItem
            title="주진단명"
            content={disease_main.disease_kor}
          />
          <PatientInfoItem
            title="부진단코드"
            content={disease_sub.length > 0 ? <DiseaseSubCode /> : null}
          />
          <PatientInfoItem
            title="부진단명"
            content={disease_sub[diseaseSubIndex]?.disease_kor}
          />
        </Stack>
      </Card>
    </Fragment>
  );
};

export default PatientInfo;
