import { useState } from 'react';
import {
  CheckCircle,
  KeyboardArrowDown,
  KeyboardArrowLeft,
} from '@mui/icons-material';
import {
  Box,
  Button,
  Container,
  FormGroup,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { FieldValues, UseFormRegister } from 'react-hook-form';

import Form from 'components/Form';
import SignUpDialog from 'routes/SignUp/SignUpDialog';

interface Props {
  register: UseFormRegister<FieldValues>;
}

const VideoForm = (props: Props) => {
  const [isTerms, setIsTerms] = useState(false);
  const [isPersonal, setIsPersonal] = useState(false);
  const {
    register,
  } = props;

  return (
    <Box>
      <Container maxWidth="sm" sx={{ mt: 7.5, mb: 6 }}>
        <Button
          href="/#/"
          size="large"
          color="inherit"
          startIcon={<KeyboardArrowLeft />}
          sx={{ mb: 5, p: 0 }}
        >
          핵심간호술기 영상 저장
        </Button>
      </Container>
    </Box>
  );
}

export default VideoForm;
