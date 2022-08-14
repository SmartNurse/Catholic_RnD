import { Fragment } from 'react';
import { Stack, Typography } from '@mui/material';
import RowContainer from '../components/RowContainer';
import RowContent from '../components/RowContent';
import SurveyRadio from '../components/SurveyRadio';
import SectionTitle from '../components/SectionTitle';
import SurveyInput from '../components/SurveyInput';

const BodyStatus = () => {
  return (
    <Fragment>
      <SectionTitle title="신체사정" />

      <RowContainer>
        <RowContent title="순환기계">
          <SurveyRadio labelKey="EXIST" radios={[{ value: 1 }, { value: 2 }]} />
        </RowContent>
        <RowContent title="호흡기계">
          <SurveyRadio labelKey="EXIST" radios={[{ value: 1 }, { value: 2 }]} />
        </RowContent>
        <RowContent title="위장관계">
          <SurveyRadio labelKey="EXIST" radios={[{ value: 1 }, { value: 2 }]} />
        </RowContent>
        <RowContent title="신경계">
          <SurveyRadio labelKey="EXIST" radios={[{ value: 1 }, { value: 2 }]} />
        </RowContent>
      </RowContainer>

      <RowContainer>
        <RowContent title="피부상태">
          <SurveyRadio labelKey="EXIST" radios={[{ value: 1 }, { value: 2 }]} />
        </RowContent>
        <RowContent title="입원/수술력">
          <SurveyRadio labelKey="EXIST" radios={[{ value: 1 }, { value: 2 }]} />
        </RowContent>
        <RowContent title="최근 투약">
          <SurveyRadio labelKey="EXIST" radios={[{ value: 1 }, { value: 2 }]} />
        </RowContent>
        <RowContent title="낙상"></RowContent>
        <RowContent title="욕창"></RowContent>
        <RowContent title="통증"></RowContent>
      </RowContainer>
    </Fragment>
  );
};

export default BodyStatus;
