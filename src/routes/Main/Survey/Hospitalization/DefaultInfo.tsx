import { Fragment, useRef } from 'react';
import { Stack } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

import { Controller, useForm } from 'react-hook-form';

import Form from 'components/Form';
import { IFormRegister, IFormValues } from 'routes/Main/type';

import RowContainer from '../components/RowContainer';
import RowContent from './RowContentDefaultInfo';
import SectionTitle from '../components/SectionTitle';

interface Props extends IFormRegister, IFormValues {
  disabled?: boolean;
}

const DefaultInfo = (props: Props) => {
  const { disabled, register, getValues, setValue, control } = props;

  return (
    <Fragment>
      <SectionTitle title="기본 정보" />

      <RowContainer>
        <RowContent title="입원경로">
          <Stack direction="row" spacing={1}>
            <Form.MuiRadioGroup
              disabled={disabled}
              i18nNullKey="ETC"
              i18nKey="HOSPITALIZATION.PATH"
              values={[1, 2, 0]}
              defaultValue={getValues(
                'default_info.hospitalization_path.value'
              )}
              onChange={v =>
                setValue('default_info.hospitalization_path.value', v)
              }
            />
            <Form.MuiTextField
              required={false}
              fullWidth={false}
              disabled={disabled}
              placeholder="직접 입력"
              {...register('default_info.hospitalization_path.input')}
            />
          </Stack>
        </RowContent>
        <RowContent title="입원방법">
          <Form.MuiRadioGroup
            disabled={disabled}
            i18nKey="HOSPITALIZATION.WAY"
            values={[1, 2, 3]}
            defaultValue={getValues('default_info.hospitalization_way')}
            onChange={v => setValue('default_info.hospitalization_way', v)}
          />
        </RowContent>
        <RowContent title="의식상태">
          <Form.MuiRadioGroup
            disabled={disabled}
            i18nKey="HOSPITALIZATION.STATUS"
            values={[1, 2, 3]}
            defaultValue={getValues('default_info.status')}
            onChange={v => setValue('default_info.status', v)}
          />
        </RowContent>
        <RowContent title="대화수준">
          <Form.MuiRadioGroup
            disabled={disabled}
            i18nKey="HOSPITALIZATION.STATUS02"
            values={[1, 2, 3]}
            defaultValue={getValues('default_info.status02')}
            onChange={v => setValue('default_info.status02', v)}
          />
        </RowContent>
        <RowContent title="발병일자">
          <Controller
            name={'default_info.date'}
            control={control}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { invalid, isTouched, isDirty, error },
            }) => {
              console.log('filedState is ', invalid, isTouched, isDirty, error);
              return (
                <DatePicker
                  label="날짜를 선택해주세요"
                  renderInput={props => (
                    <Form.MuiTextField
                      type="date"
                      disabled={disabled}
                      fullWidth={false}
                      required={false}
                      InputLabelProps={{ shrink: true }}
                      {...props}
                    />
                  )}
                  onChange={date => onChange(date)}
                  value={value}
                />
              );
            }}
          />
          {/* <Form.MuiTextField
            type="date"
            disabled={disabled}
            fullWidth={false}
            required={false}
            label='Please enter a date'
            InputLabelProps={{ shrink: true }}
            {...register('default_info.date')}
          /> */}
        </RowContent>
      </RowContainer>

      <RowContainer sx={{ mb: 'auto' }}>
        <RowContent title="신체">
          <Stack direction="row" spacing={1}>
            <Form.MuiTextField
              type="number"
              textAlign="right"
              disabled={disabled}
              InputProps={{ ...Form.adornment('키', 'cm') }}
              {...register('default_info.height')}
            />
            <Form.MuiTextField
              type="number"
              textAlign="right"
              disabled={disabled}
              InputProps={{ ...Form.adornment('몸무게', 'kg') }}
              {...register('default_info.weight')}
            />
          </Stack>
        </RowContent>
        <RowContent title="활력징후">
          <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
            <Form.MuiTextField
              textAlign="right"
              disabled={disabled}
              InputProps={{ ...Form.adornment('SBP', 'mmHg') }}
              {...register('default_info.SBP')}
            />
            <Form.MuiTextField
              textAlign="right"
              disabled={disabled}
              InputProps={{ ...Form.adornment('DBP', 'mmHg') }}
              {...register('default_info.DBP')}
            />
          </Stack>
          <Stack direction="row" spacing={1}>
            <Form.MuiTextField
              textAlign="right"
              disabled={disabled}
              InputProps={{ ...Form.adornment('PR', '회') }}
              {...register('default_info.PR')}
            />
            <Form.MuiTextField
              textAlign="right"
              disabled={disabled}
              InputProps={{ ...Form.adornment('RR', '회') }}
              {...register('default_info.RR')}
            />
            <Form.MuiTextField
              textAlign="right"
              disabled={disabled}
              InputProps={{ ...Form.adornment('BT', '℃') }}
              {...register('default_info.BT')}
            />
            <Form.MuiTextField
              textAlign="right"
              disabled={disabled}
              InputProps={{ ...Form.adornment('SpO2', '%') }}
              {...register('default_info.Sp02')}
            />
          </Stack>
        </RowContent>
        <RowContent title="주호소">
          <Form.MuiTextField
            disabled={disabled}
            {...register('default_info.joo_ho_so')}
          />
        </RowContent>
        <RowContent title="입원동기">
          <Form.MuiTextField
            multiline
            disabled={disabled}
            InputProps={{ sx: { height: 63 } }}
            inputProps={{ style: { height: '100%' } }}
            {...register('default_info.hospitalization_reason')}
          />
        </RowContent>
      </RowContainer>
    </Fragment>
  );
};

export default DefaultInfo;
