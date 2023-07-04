import { Stack } from '@mui/material';
import MuiRadioGroup from './MuiRadioGroup';
import {
  IUseTableCheckbox,
  IUseTableFormProps,
  IUseTableRadioGroup,
} from '../../../hooks/useTableFormType';

const useTableForm = (props: IUseTableFormProps) => {
  const { disabled, watch, register, getValues, setValue } = props;

  const radioGroup = ({
    key,
    options,
    i18nKey,
    i18nNullKey,
    width,
    whiteSpace,
    sx,
  }: // sx,
  IUseTableRadioGroup) => {
    let radio = {} as any;
    if (!watch) return null;

    const value = watch(key) === undefined ? null : Number(watch(key));

    options.map((option, i) => {
      radio[i] = (
        <MuiRadioGroup
          values={[option]}
          i18nKey={i18nKey}
          i18nNullKey={i18nNullKey}
          defaultValue={getValues(key)}
          disabled={disabled}
          value={value}
          onChange={(v: any) => setValue(key, v)}
          width={width}
          whiteSpace={whiteSpace}
          sx={{ ...sx }}
        />
      );
      return null;
    });

    return radio;
  };

  const sumValues = (values: number[]) =>
    values.reduce((prev, next) => prev + next, 0);

  return { radioGroup, sumValues };
};

export default useTableForm;
