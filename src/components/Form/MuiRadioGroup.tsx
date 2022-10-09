import {
  FormControlLabel,
  Radio,
  RadioGroup,
  RadioGroupProps,
} from '@mui/material';
import useI18n, { Ti18nId } from 'hooks/useI18n';

interface Props extends RadioGroupProps {
  i18nKey: string;
  i18nNullKey?: string;
  value?: number;
  values: number[];
  defaultValue: number;
  onChange?: (value: any) => void;
}

const MuiRadioGroup = ({
  i18nKey,
  i18nNullKey,
  values,
  defaultValue,
  onChange,
  ...props
}: Props) => {
  const i18n = useI18n();
  const label = (value: number) => {
    return value
      ? i18n(`${i18nKey}.${value}` as Ti18nId)
      : i18n(i18nNullKey as Ti18nId);
  };

  return (
    <RadioGroup
      row
      defaultValue={defaultValue}
      sx={{ flexWrap: 'nowrap', whiteSpace: 'nowrap' }}
      onChange={(_, value) => onChange && onChange(value)}
      {...props}
    >
      {values.map(value => (
        <FormControlLabel
          key={value}
          value={value}
          control={<Radio size="small" />}
          label={label(value)}
        />
      ))}
    </RadioGroup>
  );
};

export default MuiRadioGroup;
