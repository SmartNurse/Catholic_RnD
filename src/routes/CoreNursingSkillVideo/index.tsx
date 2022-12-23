import { useState } from 'react';

import { Box, Container, Button } from "@mui/material";
import { KeyboardArrowLeft } from '@mui/icons-material';

import VideoForm from './VideoForm';
import StudentInfo from './StudentInfo';

const CoreNursingSkillVideo = () => {
  const [totalSize, setTotalSize] = useState(0);

  return (
    <Box>
      <Container maxWidth="md" sx={{ mt: 7.5, mb: 6 }}>
      <Button
          href="/#/"
          size="large"
          color="inherit"
          startIcon={<KeyboardArrowLeft />}
          sx={{ mb: 5, p: 0 }}
        >
          핵심간호술기 영상 저장
        </Button>
        <StudentInfo totalSize={totalSize} />
        <VideoForm totalSize={totalSize} setTotalSize={setTotalSize} />
      </Container>
    </Box>
  );
}

export default CoreNursingSkillVideo;