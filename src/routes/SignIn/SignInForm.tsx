import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  Container,
  FormControlLabel,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { FieldValues, UseFormRegister } from 'react-hook-form';

import awsAhnlabCloudLogo from 'assets/aws-ahnlab-cloud-logo.svg';
import smartnurseLogoStandard from 'assets/smartnurse-logo-standard.svg';
import Form from 'components/Form';
import MuiDialog from 'components/MuiDialog';


interface Props {
  errors: { [x: string]: any };
  register: UseFormRegister<FieldValues>;
  onSignUp: () => void;
}

function SignInForm({ errors, register, onSignUp }: Props) {
  const { palette } = useTheme();

  return (
    <Box>
      <Container maxWidth="sm" sx={{ mt: 10 }}>
        <Card
          elevation={palette.mode === "dark" ? 0 : 1}
          sx={{ borderTop: `solid 8px ${palette.primary.main}` }}
        >
          <CardMedia
            height={120}
            component="img"
            image={smartnurseLogoStandard}
            sx={{ objectFit: 'contain', mt: 5, mb: 5 }}
          />
          <CardContent sx={{ width: "100%", textAlign: "center", padding: "0 0 40px 0" }}>
            <Typography>
              현실감 있는 환자데이터 제공으로
            </Typography>
            <Typography sx={{ color: `${palette.mode === "dark" ? "grey" : palette.primary.main}`}}>
              실제 병원 현장을 경험하게 됩니다!
            </Typography>
          </CardContent>
          <CardContent sx={{ ml: 5, mr: 5 }}>
            <TextField
              fullWidth
              label="이메일"
              type="email"
              variant="outlined"
              sx={{ mb: 2.5 }}
              error={Boolean(errors.userEmail)}
              helperText={errors.userEmail?.message}
              {...register('userEmail', {
                required: '이메일 주소를 입력해주세요.',
              })}
            />
            <Form.Password
              fullWidth
              label="비밀번호"
              sx={{ mb: 0.25 }}
              error={Boolean(errors.userPassword)}
              helperText={errors.userPassword?.message}
              {...register('userPassword', {
                required: '비밀번호를 입력해주세요.',
              })}
            />
            <FormControlLabel
              control={<Checkbox defaultChecked {...register('saveEmail')} />}
              label="이메일 저장"
            />
          </CardContent>
          <CardActions sx={{ ml: 5, mr: 5, pb: 5 }}>
            <Box flex={1} textAlign="center">
              <Button
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                sx={{ mb: 2.5 }}
              >
                로그인
              </Button>
              <Button
                fullWidth
                size="large"
                variant="outlined"
                onClick={onSignUp}
                sx={{ mb: 2.5, color: `${palette.mode === "dark" ? "lightgrey" : ""}`, borderColor: `${palette.mode === "dark" ? "lightgrey" : ""}` }}
              >
                회원가입
              </Button>

              <MuiDialog.ConfirmButton
                title="아이디/비밀번호를 잊으셨나요?"
                message={`아이디는 본인 이메일입니다.\n스마트널스 네이버톡톡 또는 카카오톡채널\n또는
                이메일 (nurse@smartnurse.co.kr)로\n학교, 학번, 가입 시 이메일(아이디)를
                기재하고 문의 주세요.`}
                color={palette.mode === "dark" ? "lightgrey" : ""}
              />

              <Button
                fullWidth
                size="large"
                variant="outlined"
                sx={{ mt: 2.5, mb: 2.5, color: `${palette.mode === "dark" ? "lightgrey" : ""}`, borderColor: `${palette.mode === "dark" ? "lightgrey" : ""}` }}
                onClick={() => window.open("https://www.smartnurse.co.kr/")}
              >
                스마트널스 홈페이지 바로가기
              </Button>

              <Typography sx={{ fontSize: "0.8125rem" }}>문의: nurse@smartnurse.co.kr</Typography>

            </Box>
          </CardActions>

          <Typography fontSize={10} align="center" sx={{ mb: 2 }}>
            copyright © 2023 DKMediInfo.
            <br />
            All rights reserved.
          </Typography>

          <CardMedia
            height={23}
            component="img"
            image={awsAhnlabCloudLogo}
            sx={{ objectFit: 'contain', mb: 4 }}
          />
        </Card>
      </Container>
    </Box>
  );
}

export default SignInForm;
