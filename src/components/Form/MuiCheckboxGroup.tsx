import { useEffect, useState } from 'react';
import { FormControlLabel, FormGroup, Checkbox, Stack } from '@mui/material';
import useI18n, { Ti18nId } from 'hooks/useI18n';

interface Props {
  i18nKey?: string;
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
  const label = (value: number) => {
    if (!value && i18nNullKey) return i18n(i18nNullKey as Ti18nId);
    if (value && i18nKey) return i18n(`${i18nKey}.${value}` as Ti18nId);
    return '';
  };

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
      <Stack direction={'row'} spacing={1}>
        {values.map(value => {
          const defaultChecked = defaultValue
            .map(v => Number(v))
            .includes(value);

          return (
            <FormControlLabel
              key={value}
              value={value}
              label={label(value)}
              control={
                <Checkbox size="small" defaultChecked={defaultChecked} />
              }
              sx={{ flexWrap: 'nowrap', whiteSpace: 'nowrap' }}
            />
          );
        })}
      </Stack>
    </FormGroup>
  );
};

export default MuiCheckboxGroup;
