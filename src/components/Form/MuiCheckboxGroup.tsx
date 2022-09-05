import { useEffect, useState } from 'react';
import { FormControlLabel, FormGroup, Checkbox } from '@mui/material';
import useI18n, { Ti18nId } from 'hooks/useI18n';

interface Props {
  i18nKey: string;
  i18nNullKey?: string;
  values: number[];
  defaultValue: number[];
  onChange: (values: number[]) => void;
}

const MuiCheckboxGroup = ({
  i18nKey,
  i18nNullKey,
  values,
  defaultValue,
  onChange,
}: Props) => {
  const i18n = useI18n();
  const [checked, setChecked] = useState(defaultValue);

  const onChangeChecked = (e: any) => {
    const { value, checked: m_checked } = e.target;
    if (m_checked) return setChecked(v => [...v, value]);
    return setChecked(checked.filter(v => v !== value));
  };

  const label = (value: number) => {
    return value
      ? i18n(`${i18nKey}.${value}` as Ti18nId)
      : i18n(i18nNullKey as Ti18nId);
  };

  // values 변경되면 onChange 반영
  useEffect(() => onChange(checked), [checked, onChange]);

  return (
    <FormGroup row onChange={onChangeChecked}>
      {values.map(value => {
        const defaultChecked = defaultValue.map(v => Number(v)).includes(value);

        return (
          <FormControlLabel
            key={value}
            value={value}
            label={label(value)}
            control={<Checkbox size="small" defaultChecked={defaultChecked} />}
            sx={{ flexWrap: 'nowrap', whiteSpace: 'nowrap' }}
          />
        );
      })}
    </FormGroup>
  );
};

export default MuiCheckboxGroup;
