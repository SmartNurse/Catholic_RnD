import { Fragment } from 'react';
import { Stack, Typography } from '@mui/material';

import Form from '../../../../components/Form';
import { IFormRegister, IFormValues } from '../../type';
import { TGender } from '../../../../apis/account/type';

import RowContainer from '../components/RowContainer';
import RowContent from '../components/RowContent';
import SectionTitle from '../components/SectionTitle';

interface Props extends IFormRegister, IFormValues {
  gender: TGender;
}

const Habit = (props: Props) => {
  const { gender, register, getValues, setValue } = props;

  // gender 여성인 경우 필수
  const isRequiredObstetric = gender === 1;

  return (
    <Fragment>
      <SectionTitle title="습관" />

      <RowContainer>
        <RowContent title="대변">
          <Stack direction="row" spacing={1}>
            <Form.MuiTextField
              type="number"
              textAlign="right"
              InputProps={{ ...Form.adornment('횟수', '회/day') }}
              {...register('habit.feces.value')}
            />
            <Form.MuiTextField
              required={false}
              placeholder="기타"
              {...register('habit.feces.input')}
            />
          </Stack>
        </RowContent>
        <RowContent title="대변 양상">
          <Form.MuiCheckboxGroup
            i18nKey="HOSPITALIZATION.HABIT.FECES"
            values={[1, 2, 3, 4, 5]}
            defaultValue={getValues('habit.feces_info.checked')}
            onChange={v => setValue('habit.feces_info.checked', v)}
          />
        </RowContent>
        <RowContent title="소변">
          <Stack direction="row" spacing={1}>
            <Form.MuiTextField
              type="number"
              textAlign="right"
              InputProps={{ ...Form.adornment('횟수', '회/day') }}
              {...register('habit.urine.value')}
            />
            <Form.MuiTextField
              required={false}
              placeholder="기타"
              {...register('habit.urine.input')}
            />
          </Stack>
        </RowContent>
        <RowContent title="소변 양상">
          <Form.MuiCheckboxGroup
            i18nKey="HOSPITALIZATION.HABIT.URINE"
            values={[1, 2, 3, 4, 5]}
            defaultValue={getValues('habit.urine_info.checked')}
            onChange={v => setValue('habit.urine_info.checked', v)}
          />
        </RowContent>
        <RowContent title="음주">
          <Stack direction="row" spacing={2}>
            <Form.MuiRadioGroup
              i18nKey="EXIST.SHORT"
              values={[1, 2]}
              defaultValue={getValues('habit.drink.value')}
              onChange={v => setValue('habit.drink.value', v)}
            />
            <Form.MuiTextField
              required={false}
              placeholder="기간"
              {...register('habit.drink.input')}
            />
            <Form.MuiCheckbox
              label="금주"
              defaultValue={getValues('habit.drink.checked')}
              {...register('habit.drink.checked')}
            />
            <Form.MuiTextField
              required={false}
              placeholder="기간"
              {...register('habit.drink.input2')}
            />
          </Stack>
        </RowContent>
        <RowContent title="흡연">
          <Stack direction="row" spacing={2}>
            <Form.MuiRadioGroup
              i18nKey="EXIST.SHORT"
              values={[1, 2]}
              defaultValue={getValues('habit.smoke.value')}
              onChange={v => setValue('habit.smoke.value', v)}
            />
            <Form.MuiTextField
              required={false}
              placeholder="기간"
              {...register('habit.smoke.input')}
            />
            <Form.MuiCheckbox
              label="금연"
              defaultValue={getValues('habit.smoke.checked')}
              {...register('habit.smoke.checked')}
            />
            <Form.MuiTextField
              required={false}
              placeholder="기간"
              {...register('habit.smoke.input2')}
            />
          </Stack>
        </RowContent>
      </RowContainer>

      <RowContainer sx={{ mb: 'auto' }}>
        <RowContent title="수면장애">
          <Form.MuiRadioGroup
            i18nKey="EXIST"
            values={[1, 2]}
            defaultValue={getValues('habit.sleep')}
            onChange={v => setValue('habit.sleep', v)}
          />
        </RowContent>
        <RowContent title="영양장애">
          <Stack direction="row" spacing={1}>
            <Typography variant="caption" fontWeight="bold" lineHeight="38px">
              최근 한 달간 체중변화
            </Typography>
            <Form.MuiRadioGroup
              i18nKey="EXIST"
              values={[1, 2]}
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
              defaultValue={getValues('habit.nutrition.appetite')}
              onChange={v => setValue('habit.nutrition.appetite', v)}
            />
          </Stack>
        </RowContent>
        <RowContent title="산과력">
          <Stack direction="row" spacing={1}>
            <Form.MuiTextField
              fullWidth={false}
              required={isRequiredObstetric}
              InputProps={{ ...Form.adornment('G') }}
              {...register('habit.obstetric.G')}
            />
            <Form.MuiTextField
              fullWidth={false}
              required={isRequiredObstetric}
              InputProps={{ ...Form.adornment('T') }}
              {...register('habit.obstetric.T')}
            />
            <Form.MuiTextField
              fullWidth={false}
              required={isRequiredObstetric}
              InputProps={{ ...Form.adornment('P') }}
              {...register('habit.obstetric.P')}
            />
            <Form.MuiTextField
              fullWidth={false}
              required={isRequiredObstetric}
              InputProps={{ ...Form.adornment('A') }}
              {...register('habit.obstetric.A')}
            />
            <Form.MuiTextField
              fullWidth={false}
              required={isRequiredObstetric}
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
