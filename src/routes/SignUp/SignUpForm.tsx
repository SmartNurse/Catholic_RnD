import { useState } from 'react';
import { CheckCircle, ContactlessOutlined, KeyboardArrowLeft } from '@mui/icons-material';
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
  MenuItem
} from '@mui/material';
import { addYears, format } from 'date-fns';
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
  const currencies = [
    {
      value: '1950',
      label: '1950',
    },
    {
      value: '1951',
      label: '1951',
    },
    {
      value: '1952',
      label: '1952',
    },
    {
      value: '1953',
      label: '1953',
    },
    {
      value: '1954',
      label: '1954',
    },
    {
      value: '1955',
      label: '1955',
    },
    {
      value: '1956',
      label: '1956',
    },
    {
      value: '1957',
      label: '1957',
    },
    {
      value: '1958',
      label: '1958',
    },
    {
      value: '1959',
      label: '1959',
    },
    {
      value: '1960',
      label: '1960',
    },
    {
      value: '1961',
      label: '1961',
    },
    {
      value: '1962',
      label: '1962',
    },
    {
      value: '1963',
      label: '1963',
    },
    {
      value: '1964',
      label: '1964',
    },
    {
      value: '1965',
      label: '1965',
    },
    {
      value: '1966',
      label: '1966',
    },
    {
      value: '1967',
      label: '1967',
    },
    {
      value: '1968',
      label: '1968',
    },
    {
      value: '1969',
      label: '1969',
    },
    {
      value: '1970',
      label: '1970',
    },
    {
      value: '1971',
      label: '1971',
    },
    {
      value: '1972',
      label: '1972',
    },
    {
      value: '1973',
      label: '1973',
    },
    {
      value: '1974',
      label: '1974',
    },
    {
      value: '1975',
      label: '1975',
    },
    {
      value: '1976',
      label: '1976',
    },
    {
      value: '1971',
      label: '1977',
    },
    {
      value: '1978',
      label: '1978',
    },
    {
      value: '1979',
      label: '1979',
    },
    {
      value: '1980',
      label: '1980',
    },
    {
      value: '1981',
      label: '1981',
    },
    {
      value: '1982',
      label: '1982',
    },
    {
      value: '1983',
      label: '1983',
    },
    {
      value: '1984',
      label: '1984',
    },
    {
      value: '1985',
      label: '1985',
    },
    {
      value: '1986',
      label: '1986',
    },
    {
      value: '1987',
      label: '1987',
    },
    {
      value: '1988',
      label: '1988',
    },
    {
      value: '1989',
      label: '1989',
    },
    {
      value: '1990',
      label: '1990',
    },
    {
      value: '1991',
      label: '1991',
    },
    {
      value: '1992',
      label: '1992',
    },
    {
      value: '1993',
      label: '1993',
    },
    {
      value: '1994',
      label: '1994',
    },
    {
      value: '1995',
      label: '1995',
    },
    {
      value: '1996',
      label: '1996',
    },
    {
      value: '1997',
      label: '1997',
    },
    {
      value: '1998',
      label: '1998',
    },
    {
      value: '1999',
      label: '1999',
    },
    {
      value: '2000',
      label: '2000',
    },
    {
      value: '2001',
      label: '2001',
    },
    {
      value: '2002',
      label: '2002',
    },
    {
      value: '2003',
      label: '2003',
    },
    {
      value: '2004',
      label: '2004',
    },
    {
      value: '2005',
      label: '2005',
    },
    {
      value: '2006',
      label: '2006',
    },
    {
      value: '2007',
      label: '2007',
    },
    {
      value: '2008',
      label: '2008',
    },
    {
      value: '2009',
      label: '2009',
    },
    {
      value: '2010',
      label: '2010',
    },
    {
      value: '2011',
      label: '2011',
    },
    {
      value: '2012',
      label: '2012',
    },
    {
      value: '2013',
      label: '2013',
    },
    {
      value: '2014',
      label: '2014',
    },
    {
      value: '2015',
      label: '2015',
    },
    {
      value: '2016',
      label: '2016',
    },
    {
      value: '2017',
      label: '2017',
    },
    {
      value: '2018',
      label: '2018',
    },
    {
      value: '2019',
      label: '2019',
    },
    {
      value: '2020',
      label: '2020',
    },
  ];
  
  // select option style
  const StMenuItem = styled(MenuItem)({
    height: 55
  });

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
          <Form.Item label="출생년도" >
            <TextField
              sx={{maxHeight:"20rem"}}
              required
              fullWidth
              select
              InputLabelProps={{ shrink: true }}
              defaultValue="2010"
              {...register('birth')}
            >
              {currencies.map((option) => (
                <StMenuItem key={option.value} value={option.value}>
                  {option.label}
                </StMenuItem>
              ))}
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
