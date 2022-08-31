import { forwardRef } from 'react';
import { NativeSelect, NativeSelectProps } from '@mui/material';

interface Props extends NativeSelectProps {
  options: string[];
}

const SurveySelect = forwardRef(({ options, ...props }: Props, ref) => (
  <NativeSelect
    required
    fullWidth
    size="small"
    inputRef={ref}
    sx={{ fontSize: 14, pt: 1 }}
    {...props}
  >
    <option value={''} disabled>
      선택
    </option>
    {options.map(option => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </NativeSelect>
));

export default SurveySelect;
