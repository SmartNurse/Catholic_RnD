import { useState } from 'react';
import { CheckCircle, KeyboardArrowLeft } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Grid,
  Stack,
  TextField,
  MenuItem,
} from '@mui/material';
import {
  FieldValues,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';

import Form from 'components/Form';
import { getCollegeList } from 'apis/admin';
import MuiAutocomplete from 'components/MuiAutocomplete';

import { ISendMailProps, IVerifyMailProps } from './types';
import SignUpDialog from './SignUpDialog';
import { styled } from '@mui/styles';

interface Props {
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  getValues: UseFormGetValues<FieldValues>;
  sendMailProps: ISendMailProps;
  verifyMailProps: IVerifyMailProps;
}

function SignUpForm(props: Props) {
  const [isTerms, setIsTerms] = useState(false);
  const [isPersonal, setIsPersonal] = useState(false);
  const sxBtnStyles = { width: 100, pl: 0, pr: 0, fontSize: 16 };
  const { register, setValue, getValues, sendMailProps, verifyMailProps } =
    props;

  const VerificationIcon = () => (
    <CheckCircle
      fontSize="small"
      color="primary"
      sx={{
        display: verifyMailProps.isVerification ? 'block' : 'none',
      }}
    />
  );

  // 출생년도 옵션
  const rendering = () => {
    const result = [];
    for (let i = 1950; i < 2011; i++) {
      result.push(
        <StMenuItem key={i} value={i}>
          {i}
        </StMenuItem>
      );
    }
    return result;
  };

  // select option style
  const StMenuItem = styled(MenuItem)({
    height: 55,
  });

  // 비밀번호 에러 찾기
  const [passwordValue, setPasswordValue] = useState('');

  const passwordRegex = () => {
    let check =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&^~\-\+\\()_=|])[A-Za-z\d@$!%*#?&^~\-\+\\()_=|]{8,}$/i;
    // console.log(passwordValue.includes('.*[@$!%*#?&^~-+\\()_=|]'));
    return check.test(passwordValue);
  };

  const [passwordCheck, setPasswordCheck] = useState('');

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
          회원가입
        </Button>
        <Stack spacing={2.5}>
          <Form.Item label="이메일">
            <Box display="flex" gap={1}>
              <TextField
                required
                fullWidth
                type="email"
                helperText="본인의 대학교 이메일을 입력해주세요(없을시 개인 이메일을 입력해주세요)"
                {...register('userEmail')}
              />
              <LoadingButton
                sx={{ ...sxBtnStyles, maxHeight: 56 }}
                loading={sendMailProps.isLoading}
                variant={sendMailProps.isSendMail ? 'outlined' : 'contained'}
                onClick={sendMailProps.onClick}
              >
                {sendMailProps.isSendMail ? '재전송' : '인증하기'}
              </LoadingButton>
            </Box>
          </Form.Item>
          <Form.Item label="인증번호" isHidden={!sendMailProps.isSendMail}>
            <Box display="flex" gap={1}>
              <TextField
                required
                fullWidth
                placeholder="이메일로 전송된 인증번호를 입력해주세요."
                InputProps={{
                  readOnly: verifyMailProps.isVerification,
                  endAdornment: <VerificationIcon />,
                }}
                {...register('userCode')}
              />
              <LoadingButton
                variant="contained"
                loading={verifyMailProps.isLoading}
                onClick={verifyMailProps.onClick}
                sx={{
                  ...sxBtnStyles,
                  display: !verifyMailProps.isVerification ? 'block' : 'none',
                }}
              >
                확인
              </LoadingButton>
            </Box>
          </Form.Item>
          <Form.Item label="비밀번호">
            <Form.Password
              required
              fullWidth
              placeholder="영문 + 숫자 + 특수기호를 포함해서 8자리 이상 입력해 주세요."
              helperText={
                passwordRegex()
                  ? '안전합니다!'
                  : '특수문자는 @ $ ! % * # ^ () _ = | ] 만 가능합니다.'
              }
              color={passwordRegex() ? 'success' : 'warning'}
              {...register('userPassword', {
                onChange: e => setPasswordValue(e.target.value),
              })}
            />
          </Form.Item>
          <Form.Item label="비밀번호 확인">
            <Form.Password
              required
              fullWidth
              isHideVisibleBtn
              helperText={
                passwordValue === passwordCheck
                  ? '일치합니다!'
                  : '일치하지않습니다!'
              }
              color={passwordValue === passwordCheck ? 'success' : 'warning'}
              {...register('userPasswordConfirm', {
                onChange: e => setPasswordCheck(e.target.value),
              })}
            />
          </Form.Item>
          <Form.Item label="이름">
            <TextField
              required
              fullWidth
              {...register('userName')}
              autoComplete="off"
            />
          </Form.Item>
          <Grid container>
            <Grid item xs={6}>
              <Form.Item label="성별">
                <Form.MuiRadioGroup
                  i18nKey="GENDER"
                  values={[1, 2]}
                  defaultValue={getValues('gender')}
                  onChange={value => setValue('gender', value)}
                />
              </Form.Item>
            </Grid>
            <Grid item xs={6}>
              <Form.Item label="구분">
                <Form.MuiRadioGroup
                  i18nKey="GRADE"
                  values={[1, 2]}
                  defaultValue={getValues('grade')}
                  onChange={value => setValue('grade', value)}
                />
              </Form.Item>
            </Grid>
          </Grid>

          <Form.Item label="학교 선택">
            <MuiAutocomplete
              listKey="college_lists"
              valueKey="college_id"
              noOptionsText="다른 학교를 입력해주세요"
              helperText="본인 학교 명칭을 직접 입력해주세요. 대학 재학 또는 재직 중이 아닐 시 ‘기타대학’ 이라고 입력해주세요"
              placeholder="학교 검색"
              onChange={value => setValue('college', value.college_id)}
              getApi={getCollegeList}
              getOptionLabel={option => option.college_name}
            />
          </Form.Item>
          <Form.Item label="학번/사번">
            <TextField
              required
              fullWidth
              type="number"
              variant="outlined"
              {...register('studentNo')}
            />
          </Form.Item>
          <Form.Item label="출생년도">
            <TextField
              required
              fullWidth
              select
              InputLabelProps={{ shrink: true }}
              defaultValue="2010"
              {...register('birth')}
              SelectProps={{ MenuProps: { sx: { maxHeight: 400 } } }} // add this line
            >
              {rendering()}
            </TextField>
          </Form.Item>
        </Stack>

        <FormGroup sx={{ mt: 2.5 }}>
          <FormControlLabel
            label="(필수) 스마트널스 서비스 이용약관 동의"
            control={
              <Checkbox
                required
                size="small"
                onChange={(_, checked) => setIsTerms(checked)}
              />
            }
          />
          <FormControlLabel
            label="(필수) 개인정보 수집 및 이용 동의"
            control={
              <Checkbox
                required
                size="small"
                onChange={(_, checked) => setIsPersonal(checked)}
              />
            }
          />
        </FormGroup>

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

export default SignUpForm;
