import { Fragment } from 'react';
import { Stack } from '@mui/material';

import { FormProps } from '../../type';

import RowContainer from '../components/RowContainer';
import RowContent from '../components/RowContent';
import SurveyRadio from '../components/SurveyRadio';
import SectionTitle from '../components/SectionTitle';
import SurveyInput from '../components/SurveyInput';

const OutHospitalPlan = (props: FormProps) => {
  const { register, getValues, setValue } = props;

  if (!getValues || !setValue) return null;
  return (
    <Fragment>
      <SectionTitle title="퇴원계획" />

      <RowContainer>
        <RowContent title="일상생활유지정도">
          <SurveyRadio
            labelKey="HOSPITALIZATION.LIFE"
            radios={[{ value: 1 }, { value: 2 }, { value: 3 }]}
            valueKey="out_hospital_plan.life"
            {...{ getValues, setValue }}
          />
        </RowContent>
        <RowContent title="퇴원예정지">
          <Stack direction="row" spacing={1}>
            <SurveyRadio
              exceptionKey="ETC"
              labelKey="HOSPITALIZATION.DESTINATION"
              radios={[{ value: 1 }, { value: 2 }, { value: 3 }, { value: 0 }]}
              valueKey="out_hospital_plan.destination.value"
              {...{ getValues, setValue }}
            />
            <SurveyInput
              required={false}
              placeholder="직접 입력"
              {...register('out_hospital_plan.destination.input')}
            />
          </Stack>
        </RowContent>
      </RowContainer>

      <RowContainer sx={{ mb: 'auto' }}>
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
            valueKey="out_hospital_plan.guardian.value"
            {...{ getValues, setValue }}
          />
          <SurveyInput
            required={false}
            placeholder="직접 입력"
            {...register('out_hospital_plan.guardian.input')}
          />
        </RowContent>
      </RowContainer>
    </Fragment>
  );
};

export default OutHospitalPlan;
