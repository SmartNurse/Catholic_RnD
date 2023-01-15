import { Stack } from '@mui/material';
import Form from 'components/Form';
import {
  IUseTableCheckbox,
  IUseTableFormProps,
  IUseTableRadioGroup,
} from './useTableFormType';

const useTableForm = (props: IUseTableFormProps) => {
  const { disabled, watch, register, getValues, setValue } = props;

  const radioGroup = ({
    key,
    options,
    i18nKey,
    i18nNullKey,
    width,
  }: IUseTableRadioGroup) => {
    let radio = {} as any;
    if (!watch) return null;

    const value = watch(key) && Number(watch(key));

    options.map((option, i) => {
      radio[i] = (
        <Form.MuiRadioGroup
          values={[option]}
          i18nKey={i18nKey}
          i18nNullKey={i18nNullKey}
          defaultValue={getValues(key)}
          disabled={disabled}
          value={value}
          onChange={(v: any) => setValue(key, v)}
          width={width}
        />
      );
      return null;
    });

    return radio;
  };

  const checkbox = ({ key, label, inputKey }: IUseTableCheckbox) => {
    const defaultValue = Boolean(getValues(key)) ? [label] : [];

    const Input = () => {
      if (!inputKey || !register) return null;
      return (
        <Form.MuiTextField
          required={false}
          placeholder="직접입력"
          disabled={disabled}
          {...register(inputKey)}
        />
      );
    };

    return (
      <Stack direction={'row'} spacing={1}>
        <Form.MuiCheckbox
          label={label}
          disabled={disabled}
          defaultValue={defaultValue}
          onChange={(_, checked) => setValue(key, checked)}
        />
        <Input />
      </Stack>
    );
  };

  const sumValues = (values: number[]) =>
    values.reduce((prev, next) => prev + next, 0);

  return { radioGroup, checkbox, sumValues };
};

export default useTableForm;
