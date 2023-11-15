import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Loading from './Loading';
import { Container, Typography } from '@mui/material';

import MuiDialog from 'components/MuiDialog';
import {
  SurveyDialogProps,
  TCoreNursingSkillVideoDefaultValues,
} from 'routes/Main/Survey/type';
import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';
import useUser from 'store/user/useUser';
import useStudent from 'store/student/useStudent';

import VideoForm from './VideoForm';
import StudentInfo from './StudentModeInfo';
import ProfModeInfo from './ProfModeInfo';

import axios from 'axios';

const CoreNursingSkillVideo = (
  props: SurveyDialogProps<TCoreNursingSkillVideoDefaultValues>
) => {
  const [refresh, setRefresh] = useState(false);
  const [totalSize, setTotalSize] = useState(0);
  const { isStudent } = useUser();
  const { student_uuid } = useStudent();
  const [loading, setLoading] = useState(false);

  const {
    title,
    isOpen,
    disabled,
    defaultValues,
    user_id,
    nurseName,
    patientInfo,
    onClose,
  } = props;

  const { onUpdateIsSave } = useSurvey();
  const { onSuccess, onFail, onResultCode, onRequired } = useNotification();

  const { handleSubmit, register, getValues, setValue, watch } = useForm({
    defaultValues,
  });

  const onSubmit = async (data: TCoreNursingSkillVideoDefaultValues) => {
    const { files } = data;

    let toSaveCount = 0;
    let lastSaveIdx = 0;
    setLoading(true);
    for (let i = 0; i < 3; i++) {
      if (!files[i]['saved'] && files[i]['file'] !== null) {
        toSaveCount++;
        lastSaveIdx = i;
      }
    }

    if (toSaveCount === 0) {
      onUpdateIsSave(true);
      setLoading(false);
      onSuccess('핵심간호술기영상 저장에 성공하였습니다.');
      return;
    }

    for (let i = 0; i < 3; i++) {
      if (!files[i]['saved'] && files[i]['file'] !== null) {
        const formData = new FormData();
        formData.append('user_id', String(user_id));
        formData.append('patient_id', String(patientInfo.patient_id));
        formData.append('file', files[i]['file']);

        await axios
          .post(
            `${process.env.REACT_APP_API_URL}/file/video_upload`,
            formData,
            {
              headers: {
                Accept: 'application/json',
                'Content-type':
                  'multipart/form-data;charset=UTF-8; boundary=6o2knFse3p53ty9dmcQvWAIx1zInP11uCfbm',
              },
            }
          )
          .then(res => {
            if (res.data.bucket_url === null) {
              onFail(
                '핵심간호술기영상 저장에 실패하였습니다.',
                'bucket_url is null'
              );
              return;
            }

            if (i === lastSaveIdx) {
              onUpdateIsSave(true);
              setLoading(false);
              onSuccess('핵심간호술기영상 저장에 성공하였습니다.');
              setRefresh(!refresh);
              return;
            }
          })
          .catch(e => onFail('핵심간호술기영상 저장에 실패하였습니다.', e));
      }
    }
  };

  const formProps = {
    disabled,
    watch,
    register,
    getValues,
    setValue,
    onSuccess,
    onRequired,
  };

  return (
    <MuiDialog.SurveyFormTwo
      title={title}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={disabled ? undefined : handleSubmit(onSubmit)}
      update_at={defaultValues?.update_at}
    >
      <Container maxWidth="md" sx={{ mt: 7.5, mb: 9, height: '350px' }}>
        {isStudent ? (
          <StudentInfo totalSize={totalSize} />
        ) : (
          <ProfModeInfo totalSize={totalSize} />
        )}
        {loading ? (
          <Loading />
        ) : (
          <VideoForm
            {...formProps}
            user_id={isStudent ? user_id : student_uuid}
            patient_id={patientInfo.patient_id}
            patient_name={patientInfo.name}
            totalSize={totalSize}
            setTotalSize={setTotalSize}
            refresh={refresh}
          />
        )}
        <div style={{ paddingBottom: '50px' }}>
          <Typography
            sx={{
              whiteSpace: 'nowrap',
              fontWeight: 400,
              borderTop: '0.5px solid lightGray',
              lineHeight: '50px',
            }}
          >
            💡 핵심간호술기영상 저장이 안돼요 !
          </Typography>
          <Typography
            sx={{
              whiteSpace: 'pre-wrap',
              width: '900px',
              fontSize: '14px',
              height: '80px',
            }}
          >
            영상 저장이 안 되는 경우는, 동영상이 500MB 이하인지 확인해 주세요!
            <br />
            500MB 이상인 경우 구글에 “동영상 크기 줄이기”를 검색해 사이트를
            이용하거나, 혹은 카카오톡으로 한번 전송해 용량을 줄이는 것을
            추천드립니다 :)
          </Typography>
          <Typography
            sx={{
              whiteSpace: 'nowrap',
              fontWeight: 400,
              lineHeight: '50px',
            }}
          >
            💡 LEVEL 2 에만 영상을 업로드 하고 싶어요 !
          </Typography>
          <Typography
            sx={{
              whiteSpace: 'pre-wrap',
              width: '900px',
              fontSize: '14px',
              height: '80px',
              borderBottom: '0.5px solid lightGray',
            }}
          >
            동영상 업로드의 경우 LEVEL 1, LEVEL 2, LEVEL 3 순차적으로 업로드 될
            수 있게끔 설정되어 있습니다.
            <br />
            다만, LEVEL 2에만 영상을 업로드 하고자 하실 경우, 아래 방법을 통해
            진행하실 수 있습니다 !
            <br />
            LEVEL 1에 임의의 파일을 업로드 → LEVEL 2에 저장하려는 파일 업로드 후
            저장 → LEVEL 1 임의의 파일 삭제 후 다시 저장
          </Typography>
        </div>

        {/* <VideoForm {...formProps} user_id={isStudent ? user_id : student_uuid} patient_id={patientInfo.patient_id} patient_name={patientInfo.name} totalSize={totalSize} setTotalSize={setTotalSize} refresh={refresh} /> */}
      </Container>
    </MuiDialog.SurveyFormTwo>
  );
};

export default CoreNursingSkillVideo;
