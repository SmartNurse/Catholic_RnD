import { Fragment } from 'react';
import { Stack, Typography } from '@mui/material';

import { FormProps } from '../../type';
import adornment from '../../../../components/adornment';
import { TGender } from '../../../../apis/account/type';

import RowContainer from '../components/RowContainer';
import RowContent from '../components/RowContent';
import SurveyRadio from '../components/SurveyRadio';
import SectionTitle from '../components/SectionTitle';
import SurveyInput from '../components/SurveyInput';
import SurveyCheckbox from '../components/SurveyCheckbox';

interface Props extends FormProps {
  gender: TGender;
}

const Habit = (props: Props) => {
  const { gender, register, getValues, setValue } = props;

  const isRequiredObstetric = gender === 1;

  if (!getValues || !setValue) return null;
  return (
    <Fragment>
      <SectionTitle title="습관" />

      <RowContainer>
        <RowContent title="대변">
          <Stack direction="row" spacing={1}>
            <SurveyInput
              textAlign="right"
              InputProps={{ ...adornment('횟수', '회/day') }}
              {...register('habit.feces.value')}
            />
            <SurveyInput
              required={false}
              placeholder="기타"
              {...register('habit.feces.input')}
            />
          </Stack>
        </RowContent>
        <RowContent title="대변 양상">
          <SurveyCheckbox
            checkboxes={[
              { name: '정상' },
              { name: '설사' },
              { name: '혈변' },
              { name: '통증' },
              { name: '인공루' },
            ]}
            defaultChecked={getValues('habit.feces_info.checked')}
            onChange={values => setValue!('habit.feces_info.checked', values)}
          />
        </RowContent>
        <RowContent title="소변">
          <Stack direction="row" spacing={1}>
            <SurveyInput
              textAlign="right"
              InputProps={{ ...adornment('횟수', '회/day') }}
              {...register('habit.urine.value')}
            />
            <SurveyInput
              required={false}
              placeholder="기타"
              {...register('habit.urine.input')}
            />
          </Stack>
        </RowContent>
        <RowContent title="소변 양상">
          <SurveyCheckbox
            checkboxes={[
              { name: '정상' },
              { name: '작열감' },
              { name: '빈뇨' },
              { name: '실금' },
              { name: '인공루' },
            ]}
            defaultChecked={getValues('habit.urine_info.checked')}
            onChange={values => setValue!('habit.urine_info.checked', values)}
          />
        </RowContent>
        <RowContent title="음주">
          <Stack direction="row" spacing={2}>
            <SurveyRadio
              labelKey="EXIST.SHORT"
              radios={[{ value: 1 }, { value: 2 }]}
              valueKey="habit.drink.value"
              {...{ getValues, setValue }}
            />
            <SurveyInput
              required={false}
              placeholder="기간"
              {...register('habit.drink.input')}
            />
            <SurveyCheckbox
              checkboxes={[{ name: '금주' }]}
              defaultChecked={getValues('habit.drink.checked')}
              onChange={values => setValue!('habit.drink.checked', values)}
            />
            <SurveyInput
              required={false}
              placeholder="기간"
              {...register('habit.drink.input2')}
            />
          </Stack>
        </RowContent>
        <RowContent title="흡연">
          <Stack direction="row" spacing={2}>
            <SurveyRadio
              labelKey="EXIST.SHORT"
              radios={[{ value: 1 }, { value: 2 }]}
              valueKey="habit.smoke.value"
              {...{ getValues, setValue }}
            />
            <SurveyInput
              required={false}
              placeholder="기간"
              {...register('habit.smoke.input')}
            />
            <SurveyCheckbox
              checkboxes={[{ name: '금연' }]}
              defaultChecked={getValues('habit.smoke.checked')}
              onChange={values => setValue!('habit.smoke.checked', values)}
            />
            <SurveyInput
              required={false}
              placeholder="기간"
              {...register('habit.smoke.input2')}
            />
          </Stack>
        </RowContent>
      </RowContainer>

      <RowContainer sx={{ mb: 'auto' }}>
        <RowContent title="수면장애">
          <SurveyRadio
            labelKey="EXIST"
            radios={[{ value: 1 }, { value: 2 }]}
            valueKey="habit.sleep"
            {...{ getValues, setValue }}
          />
        </RowContent>
        <RowContent title="영양장애">
          <Stack direction="row" spacing={1}>
            <Typography variant="caption" fontWeight="bold" lineHeight="38px">
              최근 한 달간 체중변화
            </Typography>
            <SurveyRadio
              labelKey="EXIST"
              radios={[{ value: 1 }, { value: 2 }]}
              valueKey="habit.nutrition.weight"
              {...{ getValues, setValue }}
            />
          </Stack>
          <Stack direction="row" spacing={1}>
            <Typography variant="caption" fontWeight="bold" lineHeight="38px">
              최근 한 달간 식욕변화
            </Typography>
            <SurveyRadio
              labelKey="EXIST"
              radios={[{ value: 1 }, { value: 2 }]}
              valueKey="habit.nutrition.appetite"
              {...{ getValues, setValue }}
            />
          </Stack>
        </RowContent>
        <RowContent title="산과력">
          <Stack direction="row" spacing={1}>
            <SurveyInput
              fullWidth={false}
              required={isRequiredObstetric}
              InputProps={{ ...adornment('G') }}
              {...register('habit.obstetric.G')}
            />
            <SurveyInput
              fullWidth={false}
              required={isRequiredObstetric}
              InputProps={{ ...adornment('T') }}
              {...register('habit.obstetric.T')}
            />
            <SurveyInput
              fullWidth={false}
              required={isRequiredObstetric}
              InputProps={{ ...adornment('P') }}
              {...register('habit.obstetric.P')}
            />
            <SurveyInput
              fullWidth={false}
              required={isRequiredObstetric}
              InputProps={{ ...adornment('A') }}
              {...register('habit.obstetric.A')}
            />
          </Stack>
        </RowContent>
      </RowContainer>
    </Fragment>
  );
};

export default Habit;
