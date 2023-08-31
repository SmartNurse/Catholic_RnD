import { useEffect, useState } from 'react';
import { FormControlLabel, FormGroup, Checkbox, Stack } from '@mui/material';
import useI18n, { Ti18nId } from 'hooks/useI18n';

interface Props {
  i18nKey?: string;
  i18nNullKey?: string;
  values: number[];
  defaultValue: number[];
  disabled?: boolean;
  onChange: (values: number[]) => void;
}

const CheckboxGroup = ({
  i18nKey,
  i18nNullKey,
  values,
  defaultValue,
  disabled,
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
          if (value === 0) {
            return (
              <FormControlLabel
                key={value}
                value={value}
                label={label(value)}
                disabled={disabled}
                control={
                  <Checkbox size="small" defaultChecked={defaultChecked} />
                }
                sx={{ flexWrap: 'nowrap', whiteSpace: 'nowrap' }}
              />
            );
          } else if (value === 1) {
            return (
              <FormControlLabel
                key={value}
                value={value}
                label={label(value)}
                disabled={disabled}
                control={
                  <Checkbox size="small" defaultChecked={defaultChecked} />
                }
                sx={{
                  flexWrap: 'nowrap',
                  whiteSpace: 'nowrap',
                  marginLeft: '-10px',
                  width: '120px',
                }}
              />
            );
          } else {
            return (
              <FormControlLabel
                key={value}
                value={value}
                label={label(value)}
                disabled={disabled}
                control={
                  <Checkbox size="small" defaultChecked={defaultChecked} />
                }
                sx={{
                  flexWrap: 'nowrap',
                  whiteSpace: 'nowrap',
                  width: '120px',
                }}
              />
            );
          }
        })}
      </Stack>
    </FormGroup>
  );
};

export default CheckboxGroup;
