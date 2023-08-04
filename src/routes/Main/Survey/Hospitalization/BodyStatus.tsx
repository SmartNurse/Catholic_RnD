import { Fragment, useState } from 'react';
import { Stack } from '@mui/material';

import Form from 'components/Form';
import CheckboxGroup from './CheckboxGroup';
import { IFormRegister, IFormValues } from 'routes/Main/type';

import RowContainer from '../components/RowContainer';
import RowContent from './RowContentSub';
import SectionTitle from '../components/SectionTitle';

interface Props extends IFormRegister, IFormValues {
  disabled?: boolean;
}

const BodyStatus = (props: Props) => {
  const { disabled, register, getValues, setValue } = props;

  const [cycle, setCycle] = useState(getValues('body_status.cycle.value'));
  const [breath, setBreath] = useState(getValues('body_status.breath.value'));
  const [camouflage, setCamouflage] = useState(
    getValues('body_status.camouflage.value')
  );
  const [nerve, setNerve] = useState(getValues('body_status.nerve.value'));
  const [skin, setSkin] = useState(getValues('body_status.skin.value'));

  return (
    <Fragment>
      <SectionTitle title="신체사정" />

      <RowContainer xs={12}>
        <RowContent title="순환기계">
          <Stack direction="row" spacing={3}>
            <Form.MuiRadioGroup
              i18nKey="EXIST"
              values={[1, 2]}
              disabled={disabled}
              defaultValue={getValues('body_status.cycle.value')}
              onChange={v => {
                setValue('body_status.cycle.value', v);
                setCycle(v);
              }}
            />
            <CheckboxGroup
              i18nNullKey="ETC"
              disabled={cycle === '1' ? true : false}
              i18nKey="HOSPITALIZATION.BODY.CYCLE"
              values={[1, 2, 3, 4, 0]}
              defaultValue={getValues('body_status.cycle.checked')}
              onChange={v => setValue('body_status.cycle.checked', v)}
            />
            <Form.MuiTextField
              required={false}
              disabled={cycle === '1' ? true : false}
              placeholder="직접 입력"
              sx={{ width: '120px' }}
              {...register('body_status.cycle.input')}
            />
          </Stack>
        </RowContent>
        <RowContent title="호흡기계">
          <Stack direction="row" spacing={3}>
            <Form.MuiRadioGroup
              i18nKey="EXIST"
              values={[1, 2]}
              disabled={disabled}
              defaultValue={getValues('body_status.breath.value')}
              onChange={v => {
                setValue('body_status.breath.value', v);
                setBreath(v);
              }}
            />
            <CheckboxGroup
              i18nNullKey="ETC"
              i18nKey="HOSPITALIZATION.BODY.BREATH"
              values={[1, 2, 3, 4, 0]}
              disabled={breath === '1' ? true : false}
              defaultValue={getValues('body_status.breath.checked')}
              onChange={v => setValue('body_status.breath.checked', v)}
            />
            <Form.MuiTextField
              required={false}
              disabled={breath === '1' ? true : false}
              placeholder="직접 입력"
              sx={{ width: '120px' }}
              {...register('body_status.breath.input')}
            />
          </Stack>
        </RowContent>
        <RowContent title="위장관계">
          <Stack direction="row" spacing={3}>
            <Form.MuiRadioGroup
              i18nKey="EXIST"
              values={[1, 2]}
              disabled={disabled}
              defaultValue={getValues('body_status.camouflage.value')}
              onChange={v => {
                setValue('body_status.camouflage.value', v);
                setCamouflage(v);
              }}
            />
            <CheckboxGroup
              i18nNullKey="ETC"
              disabled={camouflage === '1' ? true : false}
              i18nKey="HOSPITALIZATION.BODY.CAMOUFLAGE"
              values={[1, 2, 3, 4, 0]}
              defaultValue={getValues('body_status.camouflage.checked')}
              onChange={v => setValue('body_status.camouflage.checked', v)}
            />
            <Form.MuiTextField
              required={false}
              disabled={camouflage === '1' ? true : false}
              sx={{ width: '120px' }}
              placeholder="직접 입력"
              {...register('body_status.camouflage.input')}
            />
          </Stack>
        </RowContent>
        <RowContent title="신경계">
          <Stack direction="row" spacing={3}>
            <Form.MuiRadioGroup
              i18nKey="EXIST"
              values={[1, 2]}
              disabled={disabled}
              defaultValue={getValues('body_status.nerve.value')}
              onChange={v => {
                setValue('body_status.nerve.value', v);
                setNerve(v);
              }}
            />
            <CheckboxGroup
              i18nNullKey="ETC"
              i18nKey="HOSPITALIZATION.BODY.NERVE"
              values={[1, 2, 3, 4, 0]}
              disabled={nerve === '1' ? true : false}
              defaultValue={getValues('body_status.nerve.checked')}
              onChange={v => setValue('body_status.nerve.checked', v)}
            />
            <Form.MuiTextField
              required={false}
              disabled={nerve === '1' ? true : false}
              placeholder="직접 입력"
              sx={{ width: '120px' }}
              {...register('body_status.nerve.input')}
            />
          </Stack>
        </RowContent>
        <RowContent title="피부상태">
          <Stack direction="row" spacing={3}>
            <Form.MuiRadioGroup
              i18nKey="EXIST"
              values={[1, 2]}
              disabled={disabled}
              defaultValue={getValues('body_status.skin.value')}
              onChange={v => {
                setValue('body_status.skin.value', v);
                setSkin(v);
              }}
            />
            <CheckboxGroup
              i18nNullKey="ETC"
              i18nKey="HOSPITALIZATION.BODY.SKIN"
              values={[1, 2, 3, 4, 0]}
              disabled={skin === '1' ? true : false}
              defaultValue={getValues('body_status.skin.checked')}
              onChange={v => setValue('body_status.skin.checked', v)}
            />
            <Form.MuiTextField
              required={false}
              disabled={skin === '1' ? true : false}
              placeholder="직접 입력"
              sx={{ width: '120px' }}
              {...register('body_status.skin.input')}
            />
          </Stack>
        </RowContent>
      </RowContainer>
    </Fragment>
  );
};

export default BodyStatus;
