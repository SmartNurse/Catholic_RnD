import {
  FormControlLabel,
  Radio,
  RadioGroup,
  RadioGroupProps,
  RadioProps,
} from '@mui/material';
import useI18n from '../../../../hooks/useI18n';
import { FormProps } from '../../type';

interface Props
  extends Omit<RadioGroupProps, 'onChange'>,
    Required<Pick<FormProps, 'getValues' | 'setValue'>> {
  radios: RadioProps[];
  valueKey: string;
  labelKey: string;
  exceptionKey?: string;
}

const SurveyRadio = ({
  radios,
  labelKey,
  exceptionKey,
  sx,
  valueKey,
  getValues,
  setValue,
  ...radioGroupProps
}: Props) => {
  const i18n = useI18n();
  const transferLabelKey = (value: unknown) =>
    !value ? `${exceptionKey}` : `${labelKey}.${value}`;

  const defaultValue = getValues(valueKey)
    ? getValues(valueKey)
    : radios[0].value;

  const onChange = (_: React.ChangeEvent<HTMLInputElement>, value: string) =>
    setValue(valueKey, value);

  return (
    <RadioGroup
      row
      defaultValue={defaultValue}
      sx={{ flexWrap: 'nowrap', whiteSpace: 'nowrap', ...sx }}
      onChange={onChange}
      {...radioGroupProps}
    >
      {radios.map(radioProps => (
        <FormControlLabel
          key={String(radioProps.value)}
          value={radioProps.value}
          control={<Radio size="small" {...radioProps} />}
          label={i18n(transferLabelKey(radioProps.value) as any)}
        />
      ))}
    </RadioGroup>
  );
};

export default SurveyRadio;
