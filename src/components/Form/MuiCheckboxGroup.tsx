import { useEffect, useState } from 'react';
import { FormControlLabel, FormGroup, Checkbox } from '@mui/material';
import useI18n, { Ti18nId } from '../../hooks/useI18n';

interface Props {
  i18nKey: string;
  defaultValue: string[];
  values: string[];
  onChange: (values: string[]) => void;
}

const MuiCheckboxGroup = ({
  i18nKey,
  values,
  defaultValue,
  onChange,
}: Props) => {
  const i18n = useI18n();
  const [checked, setChecked] = useState(defaultValue);

  // values 변경되면 onChange 반영
  useEffect(() => onChange(checked), [checked, onChange]);

  const onChangeChecked = (e: any) => {
    const { value, checked: m_checked } = e.target;
    if (m_checked) return setChecked(v => [...v, value]);
    return setChecked(checked.filter(v => v !== value));
  };

  return (
    <FormGroup row onChange={onChangeChecked}>
      {values.map(value => (
        <FormControlLabel
          key={value}
          value={value}
          label={i18n(`${i18nKey}.${value}` as Ti18nId)}
          control={<Checkbox size="small" />}
          defaultChecked={checked?.includes(value)}
          sx={{ flexWrap: 'nowrap', whiteSpace: 'nowrap' }}
        />
      ))}
    </FormGroup>
  );
};

export default MuiCheckboxGroup;
