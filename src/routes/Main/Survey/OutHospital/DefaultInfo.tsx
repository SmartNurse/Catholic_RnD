import { Fragment } from 'react';
import { Stack } from '@mui/material';

import Form from 'components/Form';
import { IFormRegister, IFormValues } from 'routes/Main/type';

import RowContainer from '../components/RowContainer';
import RowContent from '../components/RowContent';
import SectionTitle from '../components/SectionTitle';

interface Props extends IFormRegister, IFormValues {}

const DefaultInfo = (props: Props) => {
  const { register, getValues, setValue } = props;

  return (
    <Fragment>
      <SectionTitle title="기본 정보" />

      <RowContainer>
        <RowContent title="퇴원예정지">
          <Stack direction="row" spacing={1}>
            <Form.MuiRadioGroup
              i18nKey="OUT.HOSPITAL.DESTINATION"
              i18nNullKey="ETC"
              values={[1, 2, 3, 0]}
              defaultValue={getValues('default_info.destination.value')}
              onChange={v => setValue('default_info.destination.value', v)}
            />
            <Form.MuiTextField
              required={false}
              fullWidth={false}
              placeholder="직접 입력"
              {...register('default_info.destination.input')}
            />
          </Stack>
        </RowContent>
        <RowContent title="퇴원방법">
          <Stack direction="row" spacing={1}>
            <Form.MuiRadioGroup
              i18nKey="OUT.HOSPITAL.WAY"
              i18nNullKey="ETC"
              values={[1, 2, 3, 0]}
              defaultValue={getValues('default_info.out_hospital_way.value')}
              onChange={v => setValue('default_info.out_hospital_way.value', v)}
            />
            <Form.MuiTextField
              required={false}
              placeholder="직접 입력"
              {...register('default_info.out_hospital_way.input')}
            />
          </Stack>
        </RowContent>
        <RowContent title="주요 보호자">
          <Form.MuiRadioGroup
            i18nKey="HOSPITALIZATION.GUARDIAN"
            i18nNullKey="ETC"
            values={[1, 2, 3, 4, 5, 0]}
            defaultValue={getValues('default_info.guardians.value')}
            onChange={v => setValue('default_info.guardians.value', v)}
          />
          <Form.MuiTextField
            required={false}
            placeholder="직접 입력"
            {...register('default_info.guardians.input')}
          />
        </RowContent>
      </RowContainer>

      <RowContainer sx={{ mb: 'auto' }}>
        <RowContent title="퇴원 후 식이">
          <Stack direction="row" spacing={1}>
            <Form.MuiRadioGroup
              i18nKey="OUT.HOSPITAL.FOOD"
              i18nNullKey="ETC"
              values={[1, 0]}
              defaultValue={getValues('default_info.food.value')}
              onChange={v => setValue('default_info.food.value', v)}
            />
            <Form.MuiTextField
              required={false}
              fullWidth={false}
              placeholder="직접 입력"
              {...register('default_info.food.input')}
            />
          </Stack>
        </RowContent>
        <RowContent title="퇴원 후 목욕">
          <Stack direction="row" spacing={1}>
            <Form.MuiRadioGroup
              i18nKey="OUT.HOSPITAL.SHOWER"
              i18nNullKey="ETC"
              values={[1, 2, 0]}
              defaultValue={getValues('default_info.shower.value')}
              onChange={v => setValue('default_info.shower.value', v)}
            />
            <Form.MuiTextField
              required={false}
              fullWidth={false}
              placeholder="직접 입력"
              {...register('default_info.shower.input')}
            />
          </Stack>
        </RowContent>
        <RowContent title="퇴원 후 활동">
          <Form.MuiRadioGroup
            i18nKey="OUT.HOSPITAL.ACTIVITY"
            values={[1, 2]}
            defaultValue={getValues('default_info.activity')}
            onChange={v => setValue('default_info.activity', v)}
          />
        </RowContent>
      </RowContainer>
    </Fragment>
  );
};

export default DefaultInfo;
