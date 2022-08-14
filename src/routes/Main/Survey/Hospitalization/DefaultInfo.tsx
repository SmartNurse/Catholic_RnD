import { Fragment } from 'react';
import { Stack } from '@mui/material';

import adornment from '../../../../components/adornment';
import { FormProps, HospitalizationSurveyDefaultValues } from '../../type';

import RowContainer from '../components/RowContainer';
import RowContent from '../components/RowContent';
import SurveyRadio from '../components/SurveyRadio';
import SectionTitle from '../components/SectionTitle';
import SurveyInput from '../components/SurveyInput';

const DefaultInfo = (
  props: Required<
    Omit<FormProps<HospitalizationSurveyDefaultValues>, 'watch' | 'setValue'>
  >
) => {
  const { getValues, register } = props;

  const defaultPath = getValues('default_info.hospitalization_path')
    ? JSON.parse(getValues('default_info.hospitalization_path'))
    : { value: '', input: '' };

  return (
    <Fragment>
      <SectionTitle title="기본 정보" />

      <RowContainer>
        <RowContent title="입원경로">
          <Stack direction="row" spacing={1}>
            <SurveyRadio
              exceptionKey="ETC"
              labelKey="HOSPITALIZATION.PATH"
              defaultValue={defaultPath?.value}
              radios={[{ value: 1 }, { value: 2 }, { value: 0 }]}
              {...register('default_info.hospitalization_path')}
            />
            <SurveyInput
              fullWidth={false}
              defaultValue={defaultPath?.input}
              {...register('default_info.hospitalization_path_input')}
            />
          </Stack>
        </RowContent>
        <RowContent title="입원방법">
          <SurveyRadio
            labelKey="HOSPITALIZATION.WAY"
            radios={[{ value: 1 }, { value: 2 }, { value: 3 }]}
          />
        </RowContent>
        <RowContent title="입원방법">
          <SurveyRadio
            labelKey="HOSPITALIZATION.STATUS"
            radios={[{ value: 1 }, { value: 2 }, { value: 3 }]}
          />
        </RowContent>
        <RowContent title="주호소">
          <SurveyInput />
        </RowContent>
        <RowContent title="발병일자">
          <SurveyInput fullWidth={false} type="date" />
        </RowContent>
        <RowContent title="입원동기">
          <SurveyInput
            multiline
            InputProps={{ sx: { height: 63 } }}
            inputProps={{ style: { height: '100%' } }}
          />
        </RowContent>
      </RowContainer>

      <RowContainer sx={{ mb: 'auto' }}>
        <RowContent title="신체">
          <Stack direction="row" spacing={1}>
            <SurveyInput
              fullWidth={false}
              InputProps={{ ...adornment('키', 'cm') }}
            />
            <SurveyInput
              fullWidth={false}
              InputProps={{ ...adornment('몸무게', 'kg') }}
            />
          </Stack>
        </RowContent>
        <RowContent title="활력징후">
          <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
            <SurveyInput
              fullWidth={false}
              InputProps={{ ...adornment('SBP', 'mmHg') }}
            />
            <SurveyInput
              fullWidth={false}
              InputProps={{ ...adornment('DBP', 'mmHg') }}
            />
          </Stack>
          <Stack direction="row" spacing={1}>
            <SurveyInput
              fullWidth={false}
              InputProps={{ ...adornment('PR', '회') }}
            />
            <SurveyInput
              fullWidth={false}
              InputProps={{ ...adornment('PR', '회') }}
            />
            <SurveyInput
              fullWidth={false}
              InputProps={{ ...adornment('BT', '℃') }}
            />
            <SurveyInput
              fullWidth={false}
              InputProps={{ ...adornment('SpO2', '%') }}
            />
          </Stack>
        </RowContent>
        <RowContent title="의식상태">
          <SurveyRadio
            labelKey="HOSPITALIZATION.STATUS02"
            radios={[{ value: 1 }, { value: 2 }, { value: 3 }]}
          />
        </RowContent>
      </RowContainer>
    </Fragment>
  );
};

export default DefaultInfo;
