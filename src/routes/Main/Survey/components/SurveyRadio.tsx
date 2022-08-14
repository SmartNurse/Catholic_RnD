import { forwardRef } from 'react';
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  RadioGroupProps,
  RadioProps,
} from '@mui/material';
import useI18n from '../../../../hooks/useI18n';

interface Props extends RadioGroupProps {
  radios: RadioProps[];
  labelKey: string;
  exceptionKey?: string;
}

const SurveyRadio = forwardRef(
  ({ radios, labelKey, exceptionKey, ...radioGroupProps }: Props, ref) => {
    const i18n = useI18n();
    const transferLabelKey = (value: unknown) =>
      !value ? `${exceptionKey}` : `${labelKey}.${value}`;

    return (
      <RadioGroup row {...radioGroupProps} ref={ref}>
        {radios.map(radioProps => (
          <FormControlLabel
            aria-required
            key={String(radioProps.value)}
            value={radioProps.value}
            control={<Radio size="small" {...radioProps} />}
            label={i18n(transferLabelKey(radioProps.value) as any)}
          />
        ))}
      </RadioGroup>
    );
  }
);

export default SurveyRadio;
