import { useState } from 'react';
import { CheckCircle } from '@mui/icons-material';
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
  Typography,
} from '@mui/material';
import { addYears, format } from 'date-fns';
import {
  FieldValues,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';

import Form from 'components/Form';
import { getCollegeLists } from 'apis/admin';
import MuiAutocomplete from 'components/MuiAutocomplete';

import { ISendMailProps, IVerifyMailProps } from './types';
import SignUpDialog from './SignUpDialog';

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

  return (
    <Box>
      <Container maxWidth="sm" sx={{ mt: 7.5, mb: 6 }}>
        <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 5 }}>
          회원가입
        </Typography>

        <Stack spacing={2.5}>
          <Form.Item label="이메일">
            <Box display="flex" gap={1}>
              <TextField
                required
                fullWidth
                type="email"
                helperText="반드시 본인의 대학교 이메일을 입력해주세요."
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
              helperText="영문+숫자+특수기호를 포함해서 8자리 이상 입력해 주세요."
              {...register('userPassword')}
            />
          </Form.Item>
          <Form.Item label="비밀번호 확인">
            <Form.Password
              required
              fullWidth
              isHideVisibleBtn
              {...register('userPasswordConfirm')}
            />
          </Form.Item>
          <Form.Item label="이름">
            <TextField required fullWidth {...register('userName')} />
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
              getApi={getCollegeLists}
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
          <Form.Item label="생년월일">
            <TextField
              required
              fullWidth
              type="date"
              InputLabelProps={{ shrink: true }}
              defaultValue={format(addYears(new Date(), -20), 'yyyy-MM-dd')}
              {...register('birth')}
            />
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
