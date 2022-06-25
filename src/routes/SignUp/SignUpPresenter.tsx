import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Grid,
  Radio,
  TextField,
} from '@mui/material';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import FormItem from '../../components/FormItem';
import InputPassword from '../../components/InputPassword';

interface Props {
  register: UseFormRegister<FieldValues>;
  errors: { [x: string]: any };
}

function SignUpPresenter({ register, errors }: Props) {
  return (
    <Box>
      <Container maxWidth="sm" sx={{ mt: 10 }}>
        <FormItem title="이메일">
          <Grid container spacing={1}>
            <Grid item sm={9} xs={8}>
              <TextField
                fullWidth
                size="small"
                type="email"
                variant="outlined"
                placeholder="대학교 이메일을 입력해 주세요."
                error={Boolean(errors.email)}
                helperText={errors.email?.message}
                {...register('email', {
                  required: {
                    value: true,
                    message: '이메일 주소를 입력해주세요.',
                  },
                })}
              />
            </Grid>
            <Grid item sm={3} xs={4}>
              <Button fullWidth size="large" variant="contained">
                인증하기
              </Button>
            </Grid>
          </Grid>
        </FormItem>

        <FormItem title="비밀번호">
          <InputPassword
            fullWidth
            error={Boolean(errors.password)}
            helperText={errors.password?.message}
            {...register('password', {
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
            error={Boolean(errors.passwordConfirm)}
            helperText={errors.passwordConfirm?.message}
            {...register('passwordConfirm', {
              required: {
                value: true,
                message: '비밀번호를 입력해주세요.',
              },
            })}
          />
        </FormItem>
        <FormItem title="이름">
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            {...register('name', {
              required: {
                value: true,
                message: '이름을 입력해주세요.',
              },
            })}
          />
        </FormItem>

        <Grid container>
          <Grid item xs={6}>
            <FormItem title="성별">
              <FormGroup row {...register('gender')}>
                <FormControlLabel
                  control={<Radio defaultChecked />}
                  label="여"
                />
                <FormControlLabel control={<Radio />} label="남" />
              </FormGroup>
            </FormItem>
          </Grid>
          <Grid item xs={6}>
            <FormItem title="구분">
              <FormGroup row {...register('job')}>
                <FormControlLabel
                  control={<Radio defaultChecked />}
                  label="학생"
                />
                <FormControlLabel control={<Radio />} label="교수/조교" />
              </FormGroup>
            </FormItem>
          </Grid>
        </Grid>

        <FormItem title="학교 선택">
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            {...register('university')}
          />
        </FormItem>

        <FormItem title="학번/사번">
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            {...register('universityId')}
          />
        </FormItem>

        <FormItem title="생년월일">
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <TextField
                fullWidth
                size="small"
                type="number"
                variant="outlined"
                placeholder="년"
                {...register('year')}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                size="small"
                type="number"
                variant="outlined"
                placeholder="월"
                {...register('month')}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                size="small"
                type="number"
                variant="outlined"
                placeholder="일"
                {...register('day')}
              />
            </Grid>
          </Grid>
        </FormItem>

        <FormControlLabel
          control={<Checkbox {...register('termsOfService')} />}
          label="(필수) 스마트널스 서비스 이용약관 동의"
        />
        <FormControlLabel
          control={<Checkbox {...register('personalInfo')} />}
          label="(필수) 개인정보 수집 및 이용 동의"
        />
        <Button
          fullWidth
          size="large"
          variant="contained"
          sx={{ mt: '28px' }}
          type="submit"
        >
          가입 신청하기
        </Button>
      </Container>
    </Box>
  );
}

export default SignUpPresenter;
