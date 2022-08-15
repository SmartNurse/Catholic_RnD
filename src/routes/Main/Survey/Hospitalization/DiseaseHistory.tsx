import { Fragment } from 'react';
import { Stack } from '@mui/material';

import { FormProps } from '../../type';

import RowContainer from '../components/RowContainer';
import RowContent from '../components/RowContent';
import SurveyRadio from '../components/SurveyRadio';
import SectionTitle from '../components/SectionTitle';
import SurveyInput from '../components/SurveyInput';
import SurveyCheckbox from '../components/SurveyCheckbox';

const DiseaseHistory = (props: FormProps) => {
  const { register, getValues, setValue } = props;

  if (!getValues || !setValue) return null;
  return (
    <Fragment>
      <SectionTitle title="병력" />

      <RowContainer>
        <RowContent title="과거력">
          <Stack direction="row" spacing={1}>
            <SurveyRadio
              labelKey="EXIST"
              radios={[{ value: 1 }, { value: 2 }]}
              valueKey="disease_history.history.value"
              {...{ getValues, setValue }}
            />
            <SurveyInput
              type="date"
              required={false}
              fullWidth={false}
              placeholder="날짜 선택"
              {...register('disease_history.history.date')}
            />
          </Stack>
          <SurveyCheckbox
            checkboxes={[
              { name: '고혈압' },
              { name: '당뇨' },
              { name: '결핵' },
              { name: '간염' },
              { name: '암' },
              { name: '기타' },
            ]}
            defaultChecked={getValues('disease_history.history.checked')}
            onChange={values =>
              setValue!('disease_history.history.checked', values)
            }
          />
          <SurveyInput
            required={false}
            placeholder="직접 입력"
            {...register('disease_history.history.input')}
          />
        </RowContent>
        <RowContent title="입원/수술력">
          <Stack direction="row" spacing={1}>
            <SurveyRadio
              labelKey="EXIST"
              radios={[{ value: 1 }, { value: 2 }]}
              valueKey="disease_history.operation_history.value"
              {...{ getValues, setValue }}
            />
            <SurveyInput
              required={false}
              placeholder="ex. 2.22 01-ㅇㅇ대학교병원-층수절제술"
              {...register('disease_history.operation_history.input')}
            />
          </Stack>
        </RowContent>
        <RowContent title="최근 투약">
          <Stack direction="row" spacing={1}>
            <SurveyRadio
              labelKey="EXIST"
              radios={[{ value: 1 }, { value: 2 }]}
              valueKey="disease_history.latest_medicine.value"
              {...{ getValues, setValue }}
            />
            <SurveyInput
              required={false}
              placeholder="직접 입력"
              {...register('disease_history.latest_medicine.input')}
            />
          </Stack>
        </RowContent>
      </RowContainer>

      <RowContainer>
        <RowContent title="가족력">
          <Stack direction="row" spacing={1}>
            <SurveyRadio
              labelKey="EXIST"
              radios={[{ value: 1 }, { value: 2 }]}
              valueKey="disease_history.family_history.value"
              {...{ getValues, setValue }}
            />
            <SurveyInput
              required={false}
              placeholder="ex. 부-고혈압"
              {...register('disease_history.family_history.input')}
            />
          </Stack>
        </RowContent>
        <RowContent title="약물 알러지">
          <Stack direction="row" spacing={1}>
            <SurveyRadio
              labelKey="EXIST"
              radios={[{ value: 1 }, { value: 2 }]}
              valueKey="disease_history.medicine_allergy.value"
              {...{ getValues, setValue }}
            />
            <SurveyInput
              required={false}
              placeholder="직접 입력"
              {...register('disease_history.medicine_allergy.input')}
            />
          </Stack>
        </RowContent>
        <RowContent title="조영제 알러지">
          <Stack direction="row" spacing={1}>
            <SurveyRadio
              labelKey="EXIST"
              radios={[{ value: 1 }, { value: 2 }]}
              valueKey="disease_history.allergy.value"
              {...{ getValues, setValue }}
            />
            <SurveyInput
              required={false}
              placeholder="직접 입력"
              {...register('disease_history.allergy.input')}
            />
          </Stack>
        </RowContent>
        <RowContent title="음식 알러지">
          <Stack direction="row" spacing={1}>
            <SurveyRadio
              labelKey="EXIST"
              radios={[{ value: 1 }, { value: 2 }]}
              valueKey="disease_history.food_allergy.value"
              {...{ getValues, setValue }}
            />
            <SurveyInput
              required={false}
              placeholder="직접 입력"
              {...register('disease_history.food_allergy.input')}
            />
          </Stack>
        </RowContent>
      </RowContainer>
    </Fragment>
  );
};

export default DiseaseHistory;
