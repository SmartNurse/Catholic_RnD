import { useEffect, useRef, useState } from 'react';
import { Box, Fade } from '@mui/material';

import MuiDialog from 'components/MuiDialog';
import { SurveyDialogProps } from 'routes/Main/type';
import RecordList from './RecordList';

const Nurse = (props: SurveyDialogProps<null>) => {
  const { title, isOpen, nurseName, user_id, patientInfo, onClose } = props;

  const moreRef = useRef(null);
  const [isFade, setIsFade] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsFade(true), 300);
  }, [moreRef]);

  return (
    <MuiDialog.SaveForm title={title} isOpen={isOpen} onClose={onClose}>
      <Box component="section" sx={{ py: 5, px: 1 }}>
        <Fade in={isFade}>
          <section>
            <RecordList
              user_id={user_id}
              nurseName={nurseName}
              patient_id={patientInfo.patient_id!}
              moreRef={moreRef}
            />
            <div ref={moreRef} />
          </section>
        </Fade>
      </Box>
    </MuiDialog.SaveForm>
  );
};

export default Nurse;
