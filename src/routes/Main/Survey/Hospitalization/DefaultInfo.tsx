import { Fragment } from 'react';
import { Stack } from '@mui/material';

import { FormProps } from '../../type';
import adornment from '../../../../components/adornment';

import RowContainer from '../components/RowContainer';
import RowContent from '../components/RowContent';
import SurveyRadio from '../components/SurveyRadio';
import SectionTitle from '../components/SectionTitle';
import SurveyInput from '../components/SurveyInput';

const DefaultInfo = (props: FormProps) => {
  const { register, getValues, setValue } = props;

  if (!getValues || !setValue) return null;
  return (
    <Fragment>
      <SectionTitle title="기본 정보" />

      <RowContainer>
        <RowContent title="입원경로">
          <Stack direction="row" spacing={1}>
            <SurveyRadio
              exceptionKey="ETC"
              labelKey="HOSPITALIZATION.PATH"
              radios={[{ value: 1 }, { value: 2 }, { value: 0 }]}
              valueKey="default_info.hospitalization_path.value"
              {...{ getValues, setValue }}
            />
            <SurveyInput
              required={false}
              fullWidth={false}
              placeholder="직접 입력"
              {...register('default_info.hospitalization_path.input')}
            />
          </Stack>
        </RowContent>
        <RowContent title="입원방법">
          <SurveyRadio
            labelKey="HOSPITALIZATION.WAY"
            radios={[{ value: 1 }, { value: 2 }, { value: 3 }]}
            valueKey="default_info.hospitalization_way"
            {...{ getValues, setValue }}
          />
        </RowContent>
        <RowContent title="의식상태">
          <SurveyRadio
            labelKey="HOSPITALIZATION.STATUS"
            radios={[{ value: 1 }, { value: 2 }, { value: 3 }]}
            valueKey="default_info.status"
            {...{ getValues, setValue }}
          />
        </RowContent>
        <RowContent title="주호소">
          <SurveyInput {...register('default_info.joo_ho_so')} />
        </RowContent>
        <RowContent title="발병일자">
          <SurveyInput
            fullWidth={false}
            type="date"
            {...register('default_info.date')}
          />
        </RowContent>
        <RowContent title="입원동기">
          <SurveyInput
            multiline
            InputProps={{ sx: { height: 63 } }}
            inputProps={{ style: { height: '100%' } }}
            {...register('default_info.hospitalization_reason')}
          />
        </RowContent>
      </RowContainer>

      <RowContainer sx={{ mb: 'auto' }}>
        <RowContent title="신체">
          <Stack direction="row" spacing={1}>
            <SurveyInput
              type="number"
              textAlign="right"
              InputProps={{ ...adornment('키', 'cm') }}
              {...register('default_info.height')}
            />
            <SurveyInput
              type="number"
              textAlign="right"
              InputProps={{ ...adornment('몸무게', 'kg') }}
              {...register('default_info.weight')}
            />
          </Stack>
        </RowContent>
        <RowContent title="활력징후">
          <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
            <SurveyInput
              textAlign="right"
              InputProps={{ ...adornment('SBP', 'mmHg') }}
              {...register('default_info.SBP')}
            />
            <SurveyInput
              textAlign="right"
              InputProps={{ ...adornment('DBP', 'mmHg') }}
              {...register('default_info.DBP')}
            />
          </Stack>
          <Stack direction="row" spacing={1}>
            <SurveyInput
              textAlign="right"
              InputProps={{ ...adornment('PR', '회') }}
              {...register('default_info.PR')}
            />
            <SurveyInput
              textAlign="right"
              InputProps={{ ...adornment('RR', '회') }}
              {...register('default_info.RR')}
            />
            <SurveyInput
              textAlign="right"
              InputProps={{ ...adornment('BT', '℃') }}
              {...register('default_info.BT')}
            />
            <SurveyInput
              textAlign="right"
              InputProps={{ ...adornment('SpO2', '%') }}
              {...register('default_info.Sp02')}
            />
          </Stack>
        </RowContent>
        <RowContent title="의식상태">
          <SurveyRadio
            labelKey="HOSPITALIZATION.STATUS02"
            radios={[{ value: 1 }, { value: 2 }, { value: 3 }]}
            valueKey="default_info.status02"
            {...{ getValues, setValue }}
          />
        </RowContent>
      </RowContainer>
    </Fragment>
  );
};

export default DefaultInfo;
