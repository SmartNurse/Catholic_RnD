import { Fragment } from 'react';
import { Stack } from '@mui/material';

import { IFormRegister, IFormValues } from '../../type';
import Form from '../../../../components/Form';

import RowContainer from '../components/RowContainer';
import RowContent from '../components/RowContent';
import SectionTitle from '../components/SectionTitle';

interface Props extends IFormRegister, IFormValues {}

const OutHospitalPlan = (props: Props) => {
  const { register, getValues, setValue } = props;

  return (
    <Fragment>
      <SectionTitle title="퇴원계획" />

      <RowContainer>
        <RowContent title="일상생활유지정도">
          <Form.MuiRadioGroup
            i18nKey="HOSPITALIZATION.LIFE"
            values={[1, 2, 3]}
            defaultValue={getValues('out_hospital_plan.life')}
            onChange={v => setValue('out_hospital_plan.life', v)}
          />
        </RowContent>
        <RowContent title="퇴원예정지">
          <Stack direction="row" spacing={1}>
            <Form.MuiRadioGroup
              i18nNullKey="ETC"
              i18nKey="HOSPITALIZATION.DESTINATION"
              values={[1, 2, 3, 0]}
              defaultValue={getValues('out_hospital_plan.destination.value')}
              onChange={v => setValue('out_hospital_plan.destination.value', v)}
            />
            <Form.MuiTextField
              required={false}
              placeholder="직접 입력"
              {...register('out_hospital_plan.destination.input')}
            />
          </Stack>
        </RowContent>
      </RowContainer>

      <RowContainer sx={{ mb: 'auto' }}>
        <RowContent title="주요 보호자">
          <Form.MuiRadioGroup
            i18nNullKey="ETC"
            i18nKey="HOSPITALIZATION.GUARDIAN"
            values={[1, 2, 3, 4, 5, 0]}
            defaultValue={getValues('out_hospital_plan.guardian.value')}
            onChange={v => setValue('out_hospital_plan.guardian.value', v)}
          />
          <Form.MuiTextField
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
