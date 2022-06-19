import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Container,
  FormControlLabel,
  TextField,
} from '@mui/material';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import ConfirmModalButton from '../../components/ConfirmModalButton';
import InputPassword from '../../components/InputPassword';

interface Props {
  register: UseFormRegister<FieldValues>;
  errors: { [x: string]: any };
}

function SignUpPresenter({ register, errors }: Props) {
  const navigate = useNavigate();

  return (
    <Box>
      <Container maxWidth="sm" sx={{ mt: 10 }}>
        <Card>
          <CardContent sx={{ ml: 5, mr: 5 }}>
            <TextField
              fullWidth
              size="small"
              label="이메일"
              type="email"
              variant="outlined"
              sx={{ mb: '20px' }}
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
              {...register('email', {
                required: {
                  value: true,
                  message: '이메일 주소를 입력해주세요.',
                },
              })}
            />
            <InputPassword
              fullWidth
              label="비밀번호"
              sx={{ mb: '2px' }}
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
              {...register('password', {
                required: {
                  value: true,
                  message: '비밀번호를 입력해주세요.',
                },
              })}
            />
            <FormControlLabel
              control={<Checkbox defaultChecked {...register('saveEmail')} />}
              label="이메일 저장"
            />
          </CardContent>
          <CardActions sx={{ ml: 5, mr: 5, pb: 10 }}>
            <Box flex={1} textAlign="center">
              <Button
                fullWidth
                variant="contained"
                sx={{ mb: '20px' }}
                type="submit"
              >
                로그인
              </Button>
              <Button
                fullWidth
                variant="outlined"
                sx={{ mb: '20px' }}
                onClick={() => navigate('/signup')}
              >
                회원가입
              </Button>

              <ConfirmModalButton
                title="아이디/비밀번호를 잊으셨나요?"
                message={`아이디는 본인 학교 이메일입니다.\n비밀번호를 잊으셨다면 스마트널스 관리자 이메일(nurse@smartnurse.co.kr)로 문의해주세요. `}
              />
            </Box>
          </CardActions>
        </Card>
      </Container>
    </Box>
  );
}

export default SignUpPresenter;
