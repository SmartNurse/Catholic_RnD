import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Box, Container, Button } from "@mui/material";
import { KeyboardArrowLeft } from '@mui/icons-material';

import MuiDialog from 'components/MuiDialog';
import {
  SurveyDialogProps,
  TCoreNursingSkillVideoDefaultValues
} from 'routes/Main/Survey/type';
import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';

import VideoForm from './VideoForm';
import StudentInfo from './StudentInfo';

const CoreNursingSkillVideo = (props: SurveyDialogProps<TCoreNursingSkillVideoDefaultValues>) => {
  const [totalSize, setTotalSize] = useState(0);

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

  const onSubmit = (data: TCoreNursingSkillVideoDefaultValues) => {
  };

  const formProps = { disabled, watch, register, getValues, setValue, onSuccess, onRequired };

  return (
    <MuiDialog.SurveyForm
      title={title}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={disabled ? undefined : handleSubmit(onSubmit)}
      update_at={defaultValues?.update_at}
    >
      <Container maxWidth="md" sx={{ mt: 7.5, mb: 6 }}>
        <StudentInfo totalSize={totalSize} />
        <VideoForm totalSize={totalSize} setTotalSize={setTotalSize} />
      </Container>
    </MuiDialog.SurveyForm>
  );
}

export default CoreNursingSkillVideo;