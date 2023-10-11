import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Container } from '@mui/material';

import MuiDialog from 'components/MuiDialog';
import {
  SurveyDialogProps,
  TCoreNursingSkillVideoDefaultValues as TCoreNursingSkillVideoDeExemplefaultValues,
} from 'routes/Main/Survey/type';
import useSurvey from 'store/survey/useSurvey';
import useNotification from 'hooks/useNotification';
import useUser from 'store/user/useUser';
import useStudent from 'store/student/useStudent';

import StudentModeInfoExemple from './StudentModeInfoExemple';

const CoreNursingSkillVideoExemple = (
  props: SurveyDialogProps<TCoreNursingSkillVideoDeExemplefaultValues>
) => {
  const [refresh, setRefresh] = useState(false);
  const [totalSize, setTotalSize] = useState(0);
  const { isStudent } = useUser();
  const { student_uuid } = useStudent();

  const { title, isOpen, onClose } = props;

  return (
    <MuiDialog.SurveyFormTwo title={title} isOpen={isOpen} onClose={onClose}>
      <Container sx={{ mt: 7.5, mb: 6 }}>
        <StudentModeInfoExemple totalSize={totalSize} />
      </Container>
    </MuiDialog.SurveyFormTwo>
  );
};

export default CoreNursingSkillVideoExemple;
