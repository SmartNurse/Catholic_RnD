import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import useI18n, { Ti18nId } from '../../hooks/useI18n';

interface Props {
  i18nKey: string;
  values: string[] | number[];
  defaultValue: string | number;
  onChange: (value: any) => void;
}

const MuiRadioGroup = ({ i18nKey, values, defaultValue, onChange }: Props) => {
  const i18n = useI18n();

  return (
    <RadioGroup
      row
      defaultValue={defaultValue}
      onChange={(_, value) => onChange(value)}
    >
      {values.map(value => (
        <FormControlLabel
          key={value}
          value={value}
          control={<Radio size="small" />}
          label={i18n(`${i18nKey}.${value}` as Ti18nId)}
        />
      ))}
    </RadioGroup>
  );
};

export default MuiRadioGroup;
