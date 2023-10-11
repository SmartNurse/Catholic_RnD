import { useEffect, useState, useCallback, useRef } from 'react';

import { Close } from '@mui/icons-material';

import html2canvas from 'html2canvas';
import saveAs from 'file-saver';

import {
  Card,
  Divider,
  NativeSelect,
  Skeleton,
  Stack,
  Typography,
  Button,
  DialogTitle,
  DialogContent,
  useTheme,
  IconButton,
} from '@mui/material';

import { getPatientInfo, getPatientBarcode } from 'apis/admin';
import useI18n from 'hooks/useI18n';
import useNotification from 'hooks/useNotification';
import useStudent from 'store/student/useStudent';
import usePatient from 'store/patient/usePatient';

import PatientInfoItem from './PatientInfoItem';

import Modal from './Modal';

const PatientInfo = () => {
  const i18n = useI18n();
  const { onFail } = useNotification();
  const { student_name: userName } = useStudent();
  const { patient, patientInfo, onSelectedPatientInfo } = usePatient();

  // 바코드 모달창 만들기
  const { zIndex, breakpoints } = useTheme();

  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  const divRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!divRef.current) return;

    try {
      const div = divRef.current;
      const canvas = await html2canvas(div, { scale: 2 });
      canvas.toBlob(blob => {
        if (blob !== null) {
          saveAs(blob, `${userName}-${patientInfo?.name}.png`);
        }
      });
    } catch (error) {
      console.error('Error converting div to image:', error);
    }
  };
  // console.log(patient);

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

  // 바코드 변수에 담기
  const [imgBarcode, setImgBarcode] = useState('');

  useEffect(() => {
    if (!patient) return;

    // 가상환자 상세정보 요청
    getPatientBarcode({ patient_id: patient.patient_id })
      .then(({ data }) => {
        // console.log('바코드?', data);
        setImgBarcode(data);
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
    // column1
    patient_id,
    name,
    age,
    gender,
    blood,
    // column2
    height,
    weight,
    admin_hod,
    admin_pod,
    // column3
    department,
    ward,
    room,
    main_doctor,
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
    <div style={{ zIndex: 1000 }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="subtitle2" fontSize={13} mb={1}>
          {name} 환자 정보
        </Typography>
        <Button
          variant="contained"
          size="small"
          sx={{ marginBottom: '5px', marginTop: '-10px' }}
          onClick={onClickToggleModal}
        >
          환자 라벨 인쇄
        </Button>
        {isOpenModal && (
          <Modal onClickToggleModal={onClickToggleModal}>
            <DialogTitle
              display="flex"
              alignItems="center"
              position="sticky"
              sx={{
                top: 0,
                zIndex: zIndex.modal,
                background: '#fff',
                borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
              }}
            >
              <IconButton size="small" sx={{ mr: 1.5 }}>
                <Close color="primary" onClick={onClickToggleModal} />
              </IconButton>
              환자 라벨 인쇄
            </DialogTitle>
            <DialogContent>
              <div
                onClick={handleDownload}
                ref={divRef}
                style={{
                  width: '280px',
                  height: '90px',
                  backgroundColor: 'white',
                  cursor: 'pointer',

                  marginTop: '50px',
                  padding: '3px 10px 3px 10px',
                  alignItems: 'center',
                  justifyContent: 'center',

                  display: 'flex',
                }}
              >
                <div
                  style={{
                    width: '170px',
                  }}
                >
                  <div>
                    <Typography sx={{ fontSize: '10px' }}>
                      {patient_id}
                    </Typography>
                  </div>

                  <div>
                    <Typography sx={{ fontSize: '10px' }}>
                      {ward}/{room}
                    </Typography>
                  </div>
                  <Typography sx={{ fontSize: '10px', fontWeight: 600 }}>
                    {name}
                  </Typography>
                  <div style={{ display: 'flex', gap: '20px' }}>
                    <Typography sx={{ fontSize: '10px' }}>
                      {age}/{gender === 2 ? '남자' : '여자'}
                    </Typography>
                    <Typography sx={{ fontSize: '10px' }}>{blood}</Typography>
                  </div>
                </div>

                <div style={{}}>
                  <img
                    src={imgBarcode}
                    alt="바코드"
                    style={{ height: '30px', marginLeft: '10px' }}
                  />
                </div>
              </div>
            </DialogContent>
          </Modal>
        )}
      </div>

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
          <PatientInfoItem title="이름" content={name} />
          <PatientInfoItem title="나이" content={age} />
          <PatientInfoItem title="성별" content={i18n(`GENDER.${gender}`)} />
          <PatientInfoItem title="혈액형" content={blood} />
        </Stack>
        <Divider orientation="horizontal" />
        <Stack spacing={1.25}>
          <PatientInfoItem title="키" content={height.toLowerCase()} />
          <PatientInfoItem title="체중" content={weight.toLowerCase()} />
          <PatientInfoItem title="HOD" content={admin_hod} />
          <PatientInfoItem title="POD" content={admin_pod} />
        </Stack>
        <Divider orientation="horizontal" />
        <Stack spacing={1.25}>
          <PatientInfoItem title="진료과" content={department} />
          <PatientInfoItem title="병동" content={ward} />
          <PatientInfoItem title="병실" content={room} />
          <PatientInfoItem title="담당간호사" content={userName} />
          <PatientInfoItem title="담당교수" content={main_doctor} />
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
    </div>
  );
};

export default PatientInfo;
