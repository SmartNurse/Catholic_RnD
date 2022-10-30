import { Fragment } from 'react';
import { Stack } from '@mui/material';

import Form from 'components/Form';
import { IFormRegister, IFormValues } from 'routes/Main/type';

import RowContainer from '../components/RowContainer';
import RowContent from '../components/RowContent';
import SectionTitle from '../components/SectionTitle';

interface Props extends IFormRegister, IFormValues {
  disabled?: boolean;
}

const BodyStatus = (props: Props) => {
  const { disabled, register, getValues, setValue } = props;

  return (
    <Fragment>
      <SectionTitle title="신체사정" />

      <RowContainer>
        <RowContent title="순환기계">
          <Form.MuiRadioGroup
            i18nKey="EXIST"
            values={[1, 2]}
            disabled={disabled}
            defaultValue={getValues('body_status.cycle.value')}
            onChange={v => setValue('body_status.cycle.value', v)}
          />
          <Form.MuiCheckboxGroup
            i18nNullKey="ETC"
            disabled={disabled}
            i18nKey="HOSPITALIZATION.BODY.CYCLE"
            values={[1, 2, 3, 4, 0]}
            defaultValue={getValues('body_status.cycle.checked')}
            onChange={v => setValue('body_status.cycle.checked', v)}
          />
          <Form.MuiTextField
            required={false}
            disabled={disabled}
            placeholder="직접 입력"
            {...register('body_status.cycle.input')}
          />
        </RowContent>
        <RowContent title="호흡기계">
          <Form.MuiRadioGroup
            i18nKey="EXIST"
            values={[1, 2]}
            disabled={disabled}
            defaultValue={getValues('body_status.breath.value')}
            onChange={v => setValue('body_status.breath.value', v)}
          />
          <Form.MuiCheckboxGroup
            i18nNullKey="ETC"
            i18nKey="HOSPITALIZATION.BODY.BREATH"
            values={[1, 2, 3, 4, 0]}
            disabled={disabled}
            defaultValue={getValues('body_status.breath.checked')}
            onChange={v => setValue('body_status.breath.checked', v)}
          />
          <Form.MuiTextField
            required={false}
            disabled={disabled}
            placeholder="직접 입력"
            {...register('body_status.breath.input')}
          />
        </RowContent>
        <RowContent title="위장관계">
          <Form.MuiRadioGroup
            i18nKey="EXIST"
            values={[1, 2]}
            disabled={disabled}
            defaultValue={getValues('body_status.camouflage.value')}
            onChange={v => setValue('body_status.camouflage.value', v)}
          />
          <Form.MuiCheckboxGroup
            i18nNullKey="ETC"
            disabled={disabled}
            i18nKey="HOSPITALIZATION.BODY.CAMOUFLAGE"
            values={[1, 2, 3, 4, 0]}
            defaultValue={getValues('body_status.camouflage.checked')}
            onChange={v => setValue('body_status.camouflage.checked', v)}
          />
          <Form.MuiTextField
            required={false}
            disabled={disabled}
            placeholder="직접 입력"
            {...register('body_status.camouflage.input')}
          />
        </RowContent>
        <RowContent title="신경계">
          <Form.MuiRadioGroup
            i18nKey="EXIST"
            values={[1, 2]}
            disabled={disabled}
            defaultValue={getValues('body_status.nerve.value')}
            onChange={v => setValue('body_status.nerve.value', v)}
          />
          <Form.MuiCheckboxGroup
            i18nNullKey="ETC"
            i18nKey="HOSPITALIZATION.BODY.CAMOUFLAGE"
            values={[1, 2, 3, 4, 0]}
            disabled={disabled}
            defaultValue={getValues('body_status.nerve.checked')}
            onChange={v => setValue('body_status.nerve.checked', v)}
          />
          <Form.MuiTextField
            required={false}
            disabled={disabled}
            placeholder="직접 입력"
            {...register('body_status.nerve.input')}
          />
        </RowContent>
      </RowContainer>

      <RowContainer sx={{ mb: 'auto' }}>
        <RowContent title="피부상태">
          <Form.MuiRadioGroup
            i18nKey="EXIST"
            values={[1, 2]}
            disabled={disabled}
            defaultValue={getValues('body_status.skin.value')}
            onChange={v => setValue('body_status.skin.value', v)}
          />
          <Form.MuiCheckboxGroup
            i18nNullKey="ETC"
            i18nKey="HOSPITALIZATION.BODY.CAMOUFLAGE"
            values={[1, 2, 3, 0]}
            disabled={disabled}
            defaultValue={getValues('body_status.skin.checked')}
            onChange={v => setValue('body_status.skin.checked', v)}
          />
          <Form.MuiTextField
            required={false}
            disabled={disabled}
            placeholder="직접 입력"
            {...register('body_status.skin.input')}
          />
        </RowContent>
        <RowContent title="입원/수술력">
          <Stack direction="row" spacing={1}>
            <Form.MuiRadioGroup
              i18nKey="EXIST"
              values={[1, 2]}
              disabled={disabled}
              defaultValue={getValues('body_status.operation_history.value')}
              onChange={v => setValue('body_status.operation_history.value', v)}
            />
            <Form.MuiTextField
              required={false}
              disabled={disabled}
              placeholder="보조기구 유/무"
              {...register('body_status.operation_history.input')}
            />
          </Stack>
        </RowContent>
        <RowContent title="최근 투약">
          <Stack direction="row" spacing={1}>
            <Form.MuiRadioGroup
              i18nKey="EXIST"
              values={[1, 2]}
              disabled={disabled}
              defaultValue={getValues('body_status.medicine_history.value')}
              onChange={v => setValue('body_status.medicine_history.value', v)}
            />
            <Form.MuiTextField
              required={false}
              disabled={disabled}
              placeholder="보조기구 유/무"
              {...register('body_status.medicine_history.input')}
            />
          </Stack>
        </RowContent>
        <RowContent title="낙상">
          <Form.MuiCheckbox
            label="시행"
            disabled={disabled}
            defaultValue={getValues('body_status.fall.checked')}
            {...register('body_status.fall.checked')}
          />
        </RowContent>
        <RowContent title="욕창">
          <Form.MuiCheckbox
            label="시행"
            disabled={disabled}
            defaultValue={getValues('body_status.yukchang.checked')}
            {...register('body_status.yukchang.checked')}
          />
        </RowContent>
        <RowContent title="통증">
          <Form.MuiCheckbox
            label="시행"
            disabled={disabled}
            defaultValue={getValues('body_status.fain.checked')}
            {...register('body_status.fain.checked')}
          />
        </RowContent>
      </RowContainer>
    </Fragment>
  );
};

export default BodyStatus;
