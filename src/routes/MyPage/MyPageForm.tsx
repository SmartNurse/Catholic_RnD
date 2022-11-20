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
  studentGrade: number;
  studentGender: number;
  register: UseFormRegister<FieldValues>;
  isConfirmPassword: boolean;
  onConfirmPassword: () => void;
}

function MyPageForm(props: Props) {
  const [isTerms, setIsTerms] = useState(false);
  const [isPersonal, setIsPersonal] = useState(false);
  const {
    studentGrade,
    studentGender,
    register,
    isConfirmPassword,
    onConfirmPassword,
  } = props;

  const VerificationIcon = () => (
    <CheckCircle
      fontSize="small"
      color="primary"
      sx={{ display: isConfirmPassword ? 'block' : 'none' }}
    />
  );

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
          계정 설정
        </Button>

        <Stack spacing={2.5}>
          <Form.Item label="이메일">
            <Box display="flex" gap={1}>
              <TextField
                fullWidth
                {...register('student_id')}
                InputProps={{ readOnly: true }}
              />
            </Box>
          </Form.Item>
          <Form.Item label="비밀번호">
            <Box display="flex" gap={1}>
              <Form.Password
                required
                fullWidth
                helperText="영문+숫자+특수기호를 포함해서 8자리 이상 입력해 주세요."
                InputProps={{
                  readOnly: isConfirmPassword,
                  endAdornment: <VerificationIcon />,
                }}
                {...register('password')}
              />
              <Button
                variant={'contained'}
                onClick={onConfirmPassword}
                sx={{
                  width: 150,
                  fontSize: 16,
                  maxHeight: 56,
                  whiteSpace: 'nowrap',
                  display: isConfirmPassword ? 'none' : 'block',
                }}
              >
                비밀번호 변경
              </Button>
            </Box>
          </Form.Item>
          <Form.Item label="새 비밀번호" isHidden={!isConfirmPassword}>
            <Form.Password required fullWidth {...register('newPassword')} />
          </Form.Item>
          <Form.Item label="비밀번호 확인" isHidden={!isConfirmPassword}>
            <Form.Password
              required
              fullWidth
              isHideVisibleBtn
              {...register('newPasswordConfirm')}
            />
          </Form.Item>

          <Form.Item isHidden={!isConfirmPassword}>
            <Button fullWidth size="large" type="submit" variant="contained">
              저장하기
            </Button>
          </Form.Item>

          <Form.Item label="이름">
            <TextField
              fullWidth
              {...register('student_name')}
              InputProps={{ readOnly: true }}
            />
          </Form.Item>
          <Grid container>
            <Grid item xs={6}>
              <Form.Item label="성별">
                <Form.MuiRadioGroup
                  i18nKey="GENDER"
                  values={[1, 2]}
                  value={studentGender}
                  defaultValue={studentGender}
                />
              </Form.Item>
            </Grid>
            <Grid item xs={6}>
              <Form.Item label="구분">
                <Form.MuiRadioGroup
                  i18nKey="GRADE"
                  values={[1, 2]}
                  value={studentGrade}
                  defaultValue={studentGrade}
                />
              </Form.Item>
            </Grid>
          </Grid>

          <Form.Item label="학교 선택">
            <TextField
              fullWidth
              {...register('college_name')}
              InputProps={{
                readOnly: true,
                endAdornment: <KeyboardArrowDown />,
              }}
            />
          </Form.Item>
          <Form.Item label="학번/사번">
            <TextField
              fullWidth
              InputProps={{ readOnly: true }}
              {...register('student_no')}
            />
          </Form.Item>
          <Form.Item label="생년월일">
            <TextField
              fullWidth
              {...register('student_birth')}
              InputProps={{ readOnly: true }}
              InputLabelProps={{ shrink: true }}
            />
          </Form.Item>
        </Stack>

        <FormGroup sx={{ mt: 2.5 }}>
          <Typography
            gutterBottom
            variant="body2"
            onClick={() => setIsTerms(true)}
            sx={{ cursor: 'pointer', textDecoration: 'underline' }}
          >
            스마트널스 서비스 이용약관
          </Typography>
          <Typography
            variant="body2"
            onClick={() => setIsPersonal(true)}
            sx={{ cursor: 'pointer', textDecoration: 'underline' }}
          >
            개인정보 수집 및 이용약관
          </Typography>
        </FormGroup>
      </Container>

      <SignUpDialog.TermsOfService
        isOpen={isTerms}
        onClose={() => setIsTerms(false)}
      />

      <SignUpDialog.PersonalInfo
        isOpen={isPersonal}
        onClose={() => setIsPersonal(false)}
      />
    </Box>
  );
}

export default MyPageForm;
