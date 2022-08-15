import { useEffect, useState } from 'react';
import {
  FormControlLabel,
  FormGroup,
  Checkbox,
  CheckboxProps,
} from '@mui/material';

interface Props {
  defaultChecked: string[];
  checkboxes: CheckboxProps[];
  onChange: (values: string[]) => void;
}

const SurveyCheckbox = ({ defaultChecked, checkboxes, onChange }: Props) => {
  const [values, setValues] = useState(defaultChecked);

  const onChangeChecked = (e: any) => {
    const { value, checked } = e.target;
    if (checked) return setValues(v => [...v, value]);
    return setValues(values.filter(v => v !== value));
  };

  useEffect(() => onChange(values), [values, onChange]);

  return (
    <FormGroup row onChange={onChangeChecked}>
      {checkboxes.map(checkboxProps => {
        const { name } = checkboxProps;

        return (
          <FormControlLabel
            key={name}
            value={name}
            label={name}
            defaultChecked={defaultChecked?.includes(name!)}
            control={<Checkbox size="small" {...checkboxProps} />}
            sx={{ flexWrap: 'nowrap', whiteSpace: 'nowrap' }}
          />
        );
      })}
    </FormGroup>
  );
};

export default SurveyCheckbox;
