import { Stack } from '@mui/material';
import Form from 'components/Form';
import {
  IUseTableCheckbox,
  IUseTableFormProps,
  IUseTableRadioGroup,
} from './useTableFormType';

const useTableForm = (props: IUseTableFormProps) => {
  const { watch, register, getValues, setValue } = props;

  const radioGroup = ({
    key,
    options,
    i18nKey,
    i18nNullKey,
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
          value={value}
          onChange={(v: any) => setValue(key, v)}
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
          fullWidth={false}
          placeholder="직접입력"
          {...register(inputKey)}
        />
      );
    };

    return (
      <Stack direction={'row'} spacing={1}>
        <Form.MuiCheckbox
          label={label}
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
