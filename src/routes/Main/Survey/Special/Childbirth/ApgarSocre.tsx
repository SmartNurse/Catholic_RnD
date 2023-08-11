import { Fragment, useState } from 'react';
import {
  Box,
  Grid,
  RadioGroup,
  Radio,
  Typography,
  useTheme,
  FormHelperText,
} from '@mui/material';
import { StyledFormControlLabel } from 'routes/Main/style';
import GridItem from '../../components/GridItem';
import SectionTitle from '../../components/SectionTitle';
import Form from 'components/Form';
import RowContainer from '../../components/RowContainer';
import RowContent from '../../components/RowContent';

import { Ti18nId } from 'hooks/useI18n';
import { IFormValues, IFormWatch, IFormRegister } from 'routes/Main/type';

interface Props extends IFormValues, IFormWatch, IFormRegister {
  disabled?: boolean;
  onRequired: (id: Ti18nId) => void;
  onSuccess: (message: string) => void;
}

const radioGroups = [
  {
    text: '피부색 (Appearance)',
    name: 'appearance',
    labels: [
      '전체적으로 창백함',
      '사지가 창백하고 몸통은 분홍색',
      '전신이 분홍색 청색증 없음',
    ],
  },
  {
    text: '맥박 (Pulse)',
    name: 'pulse',
    labels: ['없음', '100 미만', '100 이상'],
  },
  {
    text: '반사 및 과민성 (Grimace)',
    name: 'grimace',
    labels: [
      '자극에 대한 반응이 없음',
      '자극을 주면 약하게 울거나 찡그림',
      '자극을 주면 움츠리거나 울음',
    ],
  },
  {
    text: '근 긴장도 (Activity)',
    name: 'activity',
    labels: ['없음', '약간 굽힘', '펴는 힘에 대항하는 굽히는 팔과 다리'],
  },
  {
    text: '호흡 (Respiration)',
    name: 'respiration',
    labels: ['없음', '약하고 불규칙이며 헐떡임', '강한 호흡과 울음'],
  },
];

const radioId = ['face', 'legs', 'activity', 'cry', 'consolability'];

const ApgarScore = (props: Props) => {
  const { disabled, getValues, setValue, register, watch } = props;

  const [errors, setErrors] = useState({
    one_min: false,
    five_min: false,
  });

  const { palette } = useTheme();

  const [sumValue, setSumValue] = useState(0);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>, v: string) => {
    setValue(e.target.name, e.target.value);
    setSumValue(
      radioId.reduce((acc, cur) => {
        const value = Number(watch(cur));
        return value ? acc + value : acc;
      }, 0)
    );
  };

  return (
    <>
      <SectionTitle title="APGAR 점수" />
      <Box sx={{ width: '90%', margin: '50px auto' }}>
        <Grid container spacing={1}>
          <GridItem bgColor="#0000001F" text="APGAR" />
          <GridItem bgColor="#0000001F" text="0" />
          <GridItem bgColor="#0000001F" text="1" />
          <GridItem bgColor="#0000001F" text="2" />

          <GridItem bgColor="#0000001F" text="피부색 (Appearance)" />
          <RadioGroup
            name={'face'}
            row
            sx={{
              width: '75%',
              display: 'flex',
              justifyContent: 'space-around',
            }}
            onChange={onChange}
          >
            <StyledFormControlLabel
              disabled={disabled}
              value={0}
              label={'전체적으로 창백함'}
              control={<Radio />}
            />
            <StyledFormControlLabel
              disabled={disabled}
              value={1}
              label={'사지가 창백하고 몸통은 분홍색'}
              control={<Radio />}
            />
            <StyledFormControlLabel
              disabled={disabled}
              value={2}
              label={'전신이 분홍색 청색증 없음'}
              control={<Radio />}
            />
          </RadioGroup>

          <GridItem bgColor="#0000001F" text="맥박 (Pulse)" />
          <RadioGroup
            name={'legs'}
            row
            sx={{
              width: '75%',
              display: 'flex',
              justifyContent: 'space-around',
            }}
            onChange={onChange}
          >
            <StyledFormControlLabel
              disabled={disabled}
              value={0}
              label={'없음'}
              control={<Radio />}
            />
            <StyledFormControlLabel
              disabled={disabled}
              value={1}
              label={'100 미만'}
              control={<Radio />}
            />
            <StyledFormControlLabel
              disabled={disabled}
              value={2}
              label={'100 이상'}
              control={<Radio />}
            />
          </RadioGroup>

          <GridItem bgColor="#0000001F" text="반사 및 과민성 (Grimace)" />
          <RadioGroup
            name={'activity'}
            row
            sx={{
              width: '75%',
              display: 'flex',
              justifyContent: 'space-around',
            }}
            onChange={onChange}
          >
            <StyledFormControlLabel
              disabled={disabled}
              value={0}
              label={'자극에 대한 반응이 없음'}
              control={<Radio />}
            />
            <StyledFormControlLabel
              disabled={disabled}
              value={1}
              label={'자극을 주면 약하게 울거나 찡그림'}
              control={<Radio />}
            />
            <StyledFormControlLabel
              disabled={disabled}
              value={2}
              label={'자극을 주면 움츠리거나 울음'}
              control={<Radio />}
            />
          </RadioGroup>

          <GridItem bgColor="#0000001F" text="근 긴장도 (Activity)" />
          <RadioGroup
            name={'cry'}
            row
            sx={{
              width: '75%',
              display: 'flex',
              justifyContent: 'space-around',
            }}
            onChange={onChange}
          >
            <StyledFormControlLabel
              disabled={disabled}
              value={0}
              label={'없음'}
              control={<Radio />}
            />
            <StyledFormControlLabel
              disabled={disabled}
              value={1}
              label={'약간 굽힘'}
              control={<Radio />}
            />
            <StyledFormControlLabel
              disabled={disabled}
              value={2}
              label={'펴는 힘에 대항하는 굽히는 팔과 다리'}
              control={<Radio />}
            />
          </RadioGroup>

          <GridItem bgColor="#0000001F" text="호흡 (Respiration)" />
          <RadioGroup
            name={'consolability'}
            row
            sx={{
              width: '75%',
              display: 'flex',
              justifyContent: 'space-around',
            }}
            onChange={onChange}
          >
            <StyledFormControlLabel
              disabled={disabled}
              value={0}
              label={'없음'}
              control={<Radio />}
            />
            <StyledFormControlLabel
              disabled={disabled}
              value={1}
              label={'약하고 불규칙이며 헐떡임'}
              control={<Radio />}
            />
            <StyledFormControlLabel
              disabled={disabled}
              value={2}
              label={'강한 호흡과 울음'}
              control={<Radio />}
            />
          </RadioGroup>
        </Grid>
        <Grid item xs={12}>
          <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'flex-end'}
            sx={{ marginTop: '20px' }}
          >
            <Typography
              gutterBottom
              minWidth={115}
              fontWeight={700}
              variant="subtitle1"
            >
              합계: {sumValue}점
            </Typography>
          </Box>
        </Grid>
      </Box>
      <Box
        sx={{
          width: '90%',
          margin: '0px auto',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Box
          sx={{
            width: '40%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography fontSize="14px">1분</Typography>
          <Box>
            <Form.MuiTextField
              placeholder="0~10점까지 입력가능"
              required={false}
              disabled={disabled}
              error={errors.one_min}
              {...register('newborn_condition.apgar_score1m', {
                onChange: e => {
                  if (e.target.value < 0 || e.target.value > 10)
                    setErrors({ ...errors, one_min: true });
                  else setErrors({ ...errors, one_min: false });
                },
              })}
            />
            {errors.one_min ? (
              <FormHelperText error={true}>
                Apgar 점수는 1 이상 10 이하입니다
              </FormHelperText>
            ) : null}
          </Box>
          <Typography fontSize="14px">5분</Typography>
          <Box>
            <Form.MuiTextField
              placeholder="0~10점까지 입력가능"
              required={false}
              disabled={disabled}
              error={errors.five_min}
              {...register('newborn_condition.apgar_score5m', {
                onChange: e => {
                  if (e.target.value < 0 || e.target.value > 10)
                    setErrors({ ...errors, five_min: true });
                  else setErrors({ ...errors, five_min: false });
                },
              })}
            />
            {errors.five_min ? (
              <FormHelperText error={true}>
                Apgar 점수는 1 이상 10 이하입니다
              </FormHelperText>
            ) : null}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ApgarScore;
