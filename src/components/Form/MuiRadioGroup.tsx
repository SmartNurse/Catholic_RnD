import {
  FormControlLabel,
  Radio,
  RadioGroup,
  RadioGroupProps,
  Stack,
} from '@mui/material';
import useI18n, { Ti18nId } from 'hooks/useI18n';

interface Props extends RadioGroupProps {
  i18nKey?: string;
  i18nNullKey?: string;
  value?: number;
  values: number[];
  defaultValue: number;
  disabled?: boolean;
  onChange?: (value: any) => void;
}

const MuiRadioGroup = ({
  i18nKey,
  i18nNullKey,
  values,
  defaultValue,
  disabled,
  onChange,
  ...props
}: Props) => {
  const i18n = useI18n();
  const label = (value: number) => {
    if (!value && i18nNullKey) return i18n(i18nNullKey as Ti18nId);
    if (i18nKey) return i18n(`${i18nKey}.${value}` as Ti18nId);
    return '';
  };

  return (
    <RadioGroup
      row
      defaultValue={defaultValue}
      sx={{ flexWrap: 'nowrap', whiteSpace: 'nowrap', display: 'inline-flex' }}
      onChange={(_, value) => onChange && onChange(value)}
      {...props}
    >
      <Stack direction={'row'} spacing={1}>
        {values.map(value => (
          <FormControlLabel
            key={value}
            value={value}
            disabled={disabled}
            control={<Radio size="small" />}
            label={label(value)}
          />
        ))}
      </Stack>
    </RadioGroup>
  );
};

export default MuiRadioGroup;
