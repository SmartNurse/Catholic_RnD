import { Fragment } from 'react';
import { Stack, Typography } from '@mui/material';

import adornment from '../../../../components/adornment';

import RowContainer from '../components/RowContainer';
import RowContent from '../components/RowContent';
import SurveyRadio from '../components/SurveyRadio';
import SectionTitle from '../components/SectionTitle';
import SurveyInput from '../components/SurveyInput';

const Habit = () => {
  return (
    <Fragment>
      <SectionTitle title="습관" />

      <RowContainer>
        <RowContent title="대변">
          <Stack direction="row" spacing={1}>
            <SurveyInput
              fullWidth={false}
              InputProps={{ ...adornment('횟수', '회/day') }}
            />
            <SurveyInput fullWidth={false} />
          </Stack>
        </RowContent>
        <RowContent title="대변 양상"></RowContent>
        <RowContent title="소변">
          <Stack direction="row" spacing={1}>
            <SurveyInput
              fullWidth={false}
              InputProps={{ ...adornment('횟수', '회/day') }}
            />
            <SurveyInput fullWidth={false} />
          </Stack>
        </RowContent>
        <RowContent title="소변 양상"></RowContent>
        <RowContent title="음주">
          <SurveyRadio
            labelKey="EXIST.SHORT"
            radios={[{ value: 1 }, { value: 2 }]}
          />
        </RowContent>
        <RowContent title="흡연">
          <SurveyRadio
            labelKey="EXIST.SHORT"
            radios={[{ value: 1 }, { value: 2 }]}
          />
        </RowContent>
      </RowContainer>

      <RowContainer sx={{ mb: 'auto' }}>
        <RowContent title="수면장애">
          <SurveyRadio labelKey="EXIST" radios={[{ value: 1 }, { value: 2 }]} />
        </RowContent>
        <RowContent title="영양장애">
          <Stack direction="row" spacing={1}>
            <Typography variant="caption" fontWeight="bold" lineHeight="38px">
              최근 한 달간 체중변화
            </Typography>
            <SurveyRadio
              labelKey="EXIST"
              radios={[{ value: 1 }, { value: 2 }]}
            />
          </Stack>
          <Stack direction="row" spacing={1}>
            <Typography variant="caption" fontWeight="bold" lineHeight="38px">
              최근 한 달간 식욕변화
            </Typography>
            <SurveyRadio
              labelKey="EXIST"
              radios={[{ value: 1 }, { value: 2 }]}
            />
          </Stack>
        </RowContent>
        <RowContent title="산과력">
          <Stack direction="row" spacing={1}>
            <SurveyInput fullWidth={false} InputProps={{ ...adornment('G') }} />
            <SurveyInput fullWidth={false} InputProps={{ ...adornment('T') }} />
            <SurveyInput fullWidth={false} InputProps={{ ...adornment('P') }} />
            <SurveyInput fullWidth={false} InputProps={{ ...adornment('A') }} />
          </Stack>
        </RowContent>
      </RowContainer>
    </Fragment>
  );
};

export default Habit;
