import { Fragment } from 'react';
import { Stack, Typography, TextField, Grid } from '@mui/material';

import Form from 'components/Form';
import CheckboxGroup from './CheckboxGroup';
import { TGender } from 'apis/account/type';
import { IFormRegister, IFormValues } from 'routes/Main/type';

import RowContainer from '../components/RowContainer';
import RowContent from './RowContentSub';
import SectionTitle from '../components/SectionTitle';

interface Props extends IFormRegister, IFormValues {
  gender: TGender;
  disabled?: boolean;
}

const Habit = (props: Props) => {
  const { gender, disabled, register, getValues, setValue } = props;

  // // gender 여성인 경우 필수
  // const isRequiredObstetric = gender === 1;

  return (
    <Fragment>
      <SectionTitle title="습관" />
      <RowContainer xs={12}>
        <RowContent title="대변">
          <Stack direction="row" spacing={1}>
            <Form.MuiTextField
              required={false}
              type="number"
              textAlign="right"
              disabled={disabled}
              sx={{ maxWidth: '150px', marginRight: '65px' }}
              InputProps={{ ...Form.adornment('횟수', '회/day') }}
              {...register('habit.feces.value')}
            />
            <CheckboxGroup
              i18nNullKey="ETC"
              i18nKey="HOSPITALIZATION.HABIT.FECES"
              values={[1, 2, 3, 4, 5, 0]}
              disabled={disabled}
              defaultValue={getValues('habit.feces_info.checked')}
              onChange={v => setValue('habit.feces_info.checked', v)}
            />
            <Form.MuiTextField
              required={false}
              disabled={disabled}
              placeholder="직접 입력"
              sx={{ maxWidth: '140px' }}
              {...register('habit.feces.input')}
            />
          </Stack>
        </RowContent>
        <RowContent title="소변">
          <Stack direction="row" spacing={1}>
            <Form.MuiTextField
              required={false}
              type="number"
              textAlign="right"
              disabled={disabled}
              sx={{ maxWidth: '150px', marginRight: '65px' }}
              InputProps={{ ...Form.adornment('횟수', '회/day') }}
              {...register('habit.urine.value')}
            />
            <CheckboxGroup
              i18nNullKey="ETC"
              i18nKey="HOSPITALIZATION.HABIT.URINE"
              values={[1, 2, 3, 4, 5, 0]}
              disabled={disabled}
              defaultValue={getValues('habit.urine_info.checked')}
              onChange={v => setValue('habit.urine_info.checked', v)}
            />
            <Form.MuiTextField
              required={false}
              disabled={disabled}
              placeholder="직접 입력"
              sx={{ maxWidth: '140px' }}
              {...register('habit.urine.input')}
            />
          </Stack>
        </RowContent>

        <RowContent title="음주">
          <Stack direction="row" spacing={1}>
            <Form.MuiRadioGroup
              i18nKey="EXIST.SHORT"
              values={[1, 2]}
              disabled={disabled}
              defaultValue={getValues('habit.drink.value')}
              onChange={v => setValue('habit.drink.value', v)}
            />
            <Form.MuiTextField
              required={false}
              disabled={disabled}
              sx={{
                paddingLeft: '30px',
                minWidth: '340px',
                width: '395px',
              }}
              placeholder="기간"
              {...register('habit.drink.input')}
            />
            <Form.MuiCheckbox
              label="금주"
              disabled={disabled}
              defaultValue={getValues('habit.drink.checked')}
              {...register('habit.drink.checked')}
            />
            <Form.MuiTextField
              required={false}
              disabled={disabled}
              placeholder="기간"
              sx={{
                paddingLeft: '30px',
                width: '395px',
              }}
              {...register('habit.drink.input2')}
            />
          </Stack>
        </RowContent>
        <RowContent title="흡연">
          <Stack direction="row" spacing={1}>
            <Form.MuiRadioGroup
              i18nKey="EXIST.SHORT"
              values={[1, 2]}
              disabled={disabled}
              defaultValue={getValues('habit.smoke.value')}
              onChange={v => setValue('habit.smoke.value', v)}
            />
            <Form.MuiTextField
              required={false}
              disabled={disabled}
              placeholder="기간"
              sx={{
                paddingLeft: '30px',
                minWidth: '340px',
                width: '395px',
              }}
              {...register('habit.smoke.input')}
            />
            <Form.MuiCheckbox
              label="금연"
              disabled={disabled}
              defaultValue={getValues('habit.smoke.checked')}
              {...register('habit.smoke.checked')}
            />
            <Form.MuiTextField
              required={false}
              placeholder="기간"
              sx={{
                paddingLeft: '30px',
                width: '395px',
              }}
              disabled={disabled}
              {...register('habit.smoke.input2')}
            />
          </Stack>
        </RowContent>

        <RowContent title="수면장애">
          <Stack direction="row" spacing={1}>
            <Form.MuiRadioGroup
              i18nKey="EXIST"
              values={[1, 2]}
              disabled={disabled}
              defaultValue={getValues('habit.sleep')}
              onChange={v => setValue('habit.sleep', v)}
            />
          </Stack>
        </RowContent>

        <RowContent title="영양장애">
          <Stack direction="row" spacing={1}>
            <Typography variant="caption" fontWeight="bold" lineHeight="38px">
              최근 한 달간 체중변화
            </Typography>
            <Form.MuiRadioGroup
              i18nKey="EXIST"
              values={[1, 2]}
              disabled={disabled}
              defaultValue={getValues('habit.nutrition.weight')}
              onChange={v => setValue('habit.nutrition.weight', v)}
            />
          </Stack>
          <Stack direction="row" spacing={1}>
            <Typography variant="caption" fontWeight="bold" lineHeight="38px">
              최근 한 달간 식욕변화
            </Typography>
            <Form.MuiRadioGroup
              i18nKey="EXIST"
              values={[1, 2]}
              disabled={disabled}
              defaultValue={getValues('habit.nutrition.appetite')}
              onChange={v => setValue('habit.nutrition.appetite', v)}
            />
          </Stack>
        </RowContent>
        <RowContent title="산과력">
          <Stack direction="row" spacing={1} gap={'26px'}>
            <Form.MuiTextField
              fullWidth={false}
              disabled={disabled}
              required={false}
              InputProps={{ ...Form.adornment('G') }}
              {...register('habit.obstetric.G')}
            />
            <Form.MuiTextField
              fullWidth={false}
              disabled={disabled}
              required={false}
              InputProps={{ ...Form.adornment('T') }}
              {...register('habit.obstetric.T')}
            />
            <Form.MuiTextField
              fullWidth={false}
              disabled={disabled}
              required={false}
              InputProps={{ ...Form.adornment('P') }}
              {...register('habit.obstetric.P')}
            />
            <Form.MuiTextField
              fullWidth={false}
              disabled={disabled}
              required={false}
              InputProps={{ ...Form.adornment('A') }}
              {...register('habit.obstetric.A')}
            />
            <Form.MuiTextField
              fullWidth={false}
              disabled={disabled}
              required={false}
              InputProps={{ ...Form.adornment('L') }}
              {...register('habit.obstetric.L')}
            />
          </Stack>
        </RowContent>
      </RowContainer>
    </Fragment>
  );
};

export default Habit;
