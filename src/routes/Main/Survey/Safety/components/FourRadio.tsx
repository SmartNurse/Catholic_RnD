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
  width?: string;
  direction?: string;
  whiteSpace?: string;
  onChange?: (value: any) => void;
}

const MuiRadioGroup = ({
  i18nKey,
  i18nNullKey,
  values,
  defaultValue,
  disabled,
  width,
  whiteSpace,
  direction,
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
      sx={{ flexWrap: 'nowrap', whiteSpace: 'pre', display: 'inline-flex' }}
      onChange={(_, value) => onChange && onChange(value)}
      {...props}
    >
      <Stack
        direction={direction === 'column' ? 'column' : 'row'}
        spacing={direction === 'column' ? 0 : 1}
      >
        {values.map(value => {
          if (value === 0) {
            return (
              <FormControlLabel
                key={value}
                value={value}
                disabled={disabled}
                control={<Radio size="small" />}
                label={label(value)}
                sx={{ width: '70px' }}
              />
            );
          } else if (value === 2) {
            return (
              <FormControlLabel
                key={value}
                value={value}
                disabled={disabled}
                control={<Radio size="small" />}
                label={label(value)}
                sx={{ width: '130px' }}
              />
            );
          } else if (value === 3) {
            return (
              <FormControlLabel
                key={value}
                value={value}
                disabled={disabled}
                control={<Radio size="small" />}
                label={label(value)}
                sx={{ width: '130px' }}
              />
            );
          } else if (value === 4) {
            return (
              <FormControlLabel
                key={value}
                value={value}
                disabled={disabled}
                control={<Radio size="small" />}
                label={label(value)}
                sx={{ width: '133px' }}
              />
            );
          } else if (value === 5) {
            return (
              <FormControlLabel
                key={value}
                value={value}
                disabled={disabled}
                control={<Radio size="small" />}
                label={label(value)}
                sx={{ width: '170px' }}
              />
            );
          } else if (value === 6) {
            return (
              <FormControlLabel
                key={value}
                value={value}
                disabled={disabled}
                control={<Radio size="small" />}
                label={label(value)}
                sx={{ width: '130px' }}
              />
            );
          } else {
            return (
              <FormControlLabel
                key={value}
                value={value}
                disabled={disabled}
                control={<Radio size="small" />}
                label={label(value)}
                sx={{ width: '110px' }}
              />
            );
          }
        })}
      </Stack>
    </RadioGroup>
  );
};

export default MuiRadioGroup;
