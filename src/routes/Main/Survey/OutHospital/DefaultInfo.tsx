import { Fragment } from 'react';
import { Stack } from '@mui/material';

import { FormProps } from '../../type';

import RowContainer from '../components/RowContainer';
import RowContent from '../components/RowContent';
import SurveyRadio from '../components/SurveyRadio';
import SectionTitle from '../components/SectionTitle';
import SurveyInput from '../components/SurveyInput';

const DefaultInfo = (props: FormProps) => {
  const { register, getValues, setValue } = props;

  if (!getValues || !setValue) return null;
  return (
    <Fragment>
      <SectionTitle title="기본 정보" />

      <RowContainer>
        <RowContent title="퇴원예정지">
          <Stack direction="row" spacing={1}>
            <SurveyRadio
              exceptionKey="ETC"
              labelKey="OUT.HOSPITAL.DESTINATION"
              radios={[{ value: 1 }, { value: 2 }, { value: 3 }, { value: 0 }]}
              valueKey="default_info.destination.value"
              {...{ getValues, setValue }}
            />
            <SurveyInput
              required={false}
              fullWidth={false}
              placeholder="직접 입력"
              {...register('default_info.destination.input')}
            />
          </Stack>
        </RowContent>
        <RowContent title="퇴원방법">
          <Stack direction="row" spacing={1}>
            <SurveyRadio
              exceptionKey="ETC"
              labelKey="OUT.HOSPITAL.WAY"
              radios={[{ value: 1 }, { value: 2 }, { value: 3 }, { value: 0 }]}
              valueKey="default_info.out_hospital_way.value"
              {...{ getValues, setValue }}
            />
            <SurveyInput
              required={false}
              placeholder="직접 입력"
              {...register('default_info.out_hospital_way.input')}
            />
          </Stack>
        </RowContent>
        <RowContent title="주요 보호자">
          <SurveyRadio
            exceptionKey="ETC"
            labelKey="HOSPITALIZATION.GUARDIAN"
            radios={[
              { value: 1 },
              { value: 2 },
              { value: 3 },
              { value: 4 },
              { value: 5 },
              { value: 0 },
            ]}
            valueKey="default_info.guardians.value"
            {...{ getValues, setValue }}
          />
          <SurveyInput
            required={false}
            placeholder="직접 입력"
            {...register('default_info.guardians.input')}
          />
        </RowContent>
      </RowContainer>

      <RowContainer sx={{ mb: 'auto' }}>
        <RowContent title="퇴원 후 식이">
          <Stack direction="row" spacing={1}>
            <SurveyRadio
              exceptionKey="ETC"
              labelKey="OUT.HOSPITAL.FOOD"
              radios={[{ value: 1 }, { value: 0 }]}
              valueKey="default_info.food.value"
              {...{ getValues, setValue }}
            />
            <SurveyInput
              required={false}
              fullWidth={false}
              placeholder="직접 입력"
              {...register('default_info.food.input')}
            />
          </Stack>
        </RowContent>
        <RowContent title="퇴원 후 목욕">
          <Stack direction="row" spacing={1}>
            <SurveyRadio
              exceptionKey="ETC"
              labelKey="OUT.HOSPITAL.SHOWER"
              radios={[{ value: 1 }, { value: 2 }, { value: 0 }]}
              valueKey="default_info.shower.value"
              {...{ getValues, setValue }}
            />
            <SurveyInput
              required={false}
              fullWidth={false}
              placeholder="직접 입력"
              {...register('default_info.shower.input')}
            />
          </Stack>
        </RowContent>
        <RowContent title="퇴원 후 활동">
          <SurveyRadio
            labelKey="OUT.HOSPITAL.ACTIVITY"
            radios={[{ value: 1 }, { value: 2 }]}
            valueKey="default_info.activity"
            {...{ getValues, setValue }}
          />
        </RowContent>
      </RowContainer>
    </Fragment>
  );
};

export default DefaultInfo;
