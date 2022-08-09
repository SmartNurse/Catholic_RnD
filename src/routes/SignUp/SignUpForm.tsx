import { CheckCircle } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { addYears, format } from 'date-fns';
import { FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import FormItem from '../../components/FormItem';
import InputPassword from '../../components/InputPassword';
import CollegeList from './CollegeList';
import { ISendMailProps, IVerifyMailProps } from './types';

interface Props {
  errors: { [x: string]: any };
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  sendMailProps: ISendMailProps;
  verifyMailProps: IVerifyMailProps;
}

function SignUpForm(props: Props) {
  const xsBtnStyles = { width: 100, pl: 0, pr: 0, fontSize: 16 };
  const { errors, register, setValue, sendMailProps, verifyMailProps } = props;

  return (
    <Box>
      <Container maxWidth="sm" sx={{ mt: 7.5, mb: 6 }}>
        <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 5 }}>
          회원가입
        </Typography>
        <Stack spacing={2.5}>
          <FormItem title="이메일">
            <Box display="flex" gap={1}>
              <TextField
                fullWidth
                type="email"
                variant="outlined"
                helperText="반드시 본인의 대학교 이메일을 입력해주세요."
                {...register('userEmail', {
                  required: {
                    value: true,
                    message: '이메일 주소를 입력해주세요.',
                  },
                })}
              />
              <LoadingButton
                sx={{ ...xsBtnStyles, maxHeight: 56 }}
                loading={sendMailProps.isLoading}
                variant={sendMailProps.isSendMail ? 'outlined' : 'contained'}
                onClick={sendMailProps.onClick}
              >
                {sendMailProps.isSendMail ? '재전송' : '인증하기'}
              </LoadingButton>
            </Box>
          </FormItem>

          <FormItem title="인증번호" isHidden={!sendMailProps.isSendMail}>
            <Box display="flex" gap={1}>
              <TextField
                fullWidth
                type="text"
                variant="outlined"
                placeholder="이메일로 전송된 인증번호를 입력해주세요."
                InputProps={{
                  readOnly: verifyMailProps.isVerification,
                  endAdornment: (
                    <CheckCircle
                      fontSize="small"
                      color="primary"
                      sx={{
                        display: verifyMailProps.isVerification
                          ? 'block'
                          : 'none',
                      }}
                    />
                  ),
                }}
                {...register('userCode')}
              />
              <LoadingButton
                variant="contained"
                loading={verifyMailProps.isLoading}
                onClick={verifyMailProps.onClick}
                sx={{
                  ...xsBtnStyles,
                  display: !verifyMailProps.isVerification ? 'block' : 'none',
                }}
              >
                확인
              </LoadingButton>
            </Box>
          </FormItem>

          <FormItem title="비밀번호">
            <InputPassword
              fullWidth
              error={Boolean(errors.userPassword)}
              helperText={
                errors.userPassword?.message ??
                '영문+숫자+특수기호를 포함해서 8자리 이상 입력해 주세요.'
              }
              {...register('userPassword', {
                required: {
                  value: true,
                  message: '비밀번호를 입력해주세요.',
                },
              })}
            />
          </FormItem>

          <FormItem title="비밀번호 확인">
            <InputPassword
              fullWidth
              isHideVisibleBtn
              error={Boolean(errors.userPasswordConfirm)}
              helperText={errors.userPasswordConfirm?.message}
              {...register('userPasswordConfirm', {
                required: {
                  value: true,
                  message: '비밀번호를 입력해주세요.',
                },
              })}
            />
          </FormItem>
          <FormItem title="이름">
            <TextField
              required
              fullWidth
              variant="outlined"
              {...register('userName')}
            />
          </FormItem>

          <Grid container>
            <Grid item xs={6}>
              <FormItem title="성별">
                <RadioGroup
                  row
                  name="gender"
                  onChange={e => setValue('gender', e.target.value)}
                >
                  <FormControlLabel value={1} control={<Radio />} label="여" />
                  <FormControlLabel value={2} control={<Radio />} label="남" />
                </RadioGroup>
              </FormItem>
            </Grid>
            <Grid item xs={6}>
              <FormItem title="구분">
                <RadioGroup
                  row
                  name="grade"
                  onChange={e => setValue('grade', e.target.value)}
                >
                  <FormControlLabel
                    value={1}
                    control={<Radio />}
                    label="학생"
                  />
                  <FormControlLabel
                    value={2}
                    control={<Radio />}
                    label="교수/조교"
                  />
                </RadioGroup>
              </FormItem>
            </Grid>
          </Grid>

          <FormItem title="학교 선택">
            <CollegeList setValue={setValue} />
          </FormItem>

          <FormItem title="학번/사번">
            <TextField
              required
              fullWidth
              type="number"
              variant="outlined"
              {...register('studentNo')}
            />
          </FormItem>

          <FormItem title="생년월일">
            <TextField
              required
              fullWidth
              type="date"
              InputLabelProps={{ shrink: true }}
              defaultValue={format(addYears(new Date(), -20), 'yyyy-MM-dd')}
              {...register('birth')}
            />
          </FormItem>
        </Stack>

        <FormControlLabel
          label="(필수) 스마트널스 서비스 이용약관 동의"
          control={<Checkbox required {...register('termsOfService')} />}
          sx={{ mt: 2.5 }}
        />
        <FormControlLabel
          label="(필수) 개인정보 수집 및 이용 동의"
          control={<Checkbox required {...register('personalInfo')} />}
        />
        <Button
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          sx={{ mt: 3.25 }}
        >
          가입 신청하기
        </Button>
      </Container>
    </Box>
  );
}

export default SignUpForm;
