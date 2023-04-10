import { Fragment } from 'react';
import { Stack } from '@mui/material';

import Form from 'components/Form';
import { IFormRegister, IFormValues } from 'routes/Main/type';
import MuiRadioGroupSub from './MuiRadioGroupSub';

import RowContainer from '../components/RowContainer';
import RowContent from '../components/RowContent';
import SectionTitle from '../components/SectionTitle';

interface Props extends IFormRegister, IFormValues {
  disabled?: boolean;
}

const OutHospitalPlan = (props: Props) => {
  const { disabled, register, getValues, setValue } = props;

  return (
    <Fragment>
      <SectionTitle title="퇴원계획" />

      <RowContainer xs={12}>
        <RowContent title="일상생활유지정도">
          <Stack direction="row" spacing={1}>
          <MuiRadioGroupSub
            i18nKey="HOSPITALIZATION.LIFE"
            values={[1, 2, 3]}
            disabled={disabled}
            defaultValue={getValues('out_hospital_plan.life')}
            onChange={v => setValue('out_hospital_plan.life', v)}
            width="125px"
            />
          </Stack>
        </RowContent>

        <RowContent title="퇴원예정지">
          <Stack direction="row" spacing={1}>
            <MuiRadioGroupSub
              i18nNullKey="ETC"
              i18nKey="HOSPITALIZATION.DESTINATION"
              values={[1, 2, 3, 0]}
              disabled={disabled}
              defaultValue={getValues('out_hospital_plan.destination.value')}
              onChange={v => setValue('out_hospital_plan.destination.value', v)}
              width="125px"
            />
            <Form.MuiTextField
              required={false}
              disabled={disabled}
              placeholder="직접 입력"
              sx={{ maxWidth:"150px" }}
              {...register('out_hospital_plan.destination.input')}
            />
          </Stack>
        </RowContent>
        <RowContent title="주요 보호자">
          <Stack direction="row" spacing={1}>
            <MuiRadioGroupSub
              i18nNullKey="ETC"
              disabled={disabled}
              i18nKey="HOSPITALIZATION.GUARDIAN"
              values={[1, 2, 3, 4, 5, 0]}
              defaultValue={getValues('out_hospital_plan.guardian.value')}
              onChange={v => setValue('out_hospital_plan.guardian.value', v)}
              width="65px"
            />
            <Form.MuiTextField
              required={false}
              disabled={disabled}
              placeholder="직접 입력"
              sx={{ maxWidth:"150px" }}
              {...register('out_hospital_plan.guardian.input')}
            />
          </Stack>
        </RowContent>
      </RowContainer>
    </Fragment>
  );
};

export default OutHospitalPlan;
