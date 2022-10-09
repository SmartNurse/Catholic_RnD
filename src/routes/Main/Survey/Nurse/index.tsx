import { useRef } from 'react';
import { Box } from '@mui/material';

import MuiDialog from 'components/MuiDialog';
import { SurveyDialogProps } from 'routes/Main/type';
import RecordList from './RecordList';

const Nurse = (props: SurveyDialogProps<null>) => {
  const { title, isOpen, nurseName, user_id, patientInfo, onClose } = props;

  const moreRef = useRef(null);

  return (
    <MuiDialog.SurveyForm title={title} isOpen={isOpen} onClose={onClose}>
      <Box component="section" sx={{ py: 5, px: 1 }}>
        <RecordList
          user_id={user_id}
          nurseName={nurseName}
          patient_id={patientInfo.patient_id!}
          moreRef={moreRef}
        />
        <div ref={moreRef} />
      </Box>
    </MuiDialog.SurveyForm>
  );
};

export default Nurse;
