import { Fragment } from 'react';
import { Stack, Typography } from '@mui/material';
import RowContainer from '../components/RowContainer';
import RowContent from '../components/RowContent';
import SurveyRadio from '../components/SurveyRadio';
import SectionTitle from '../components/SectionTitle';
import SurveyInput from '../components/SurveyInput';

const DiseaseHistory = () => {
  return (
    <Fragment>
      <SectionTitle title="병력" />

      <RowContainer>
        <RowContent title="과거력">
          <SurveyRadio labelKey="EXIST" radios={[{ value: 1 }, { value: 2 }]} />
        </RowContent>
        <RowContent title="입원/수술력">
          <SurveyRadio labelKey="EXIST" radios={[{ value: 1 }, { value: 2 }]} />
        </RowContent>
        <RowContent title="최근 투약">
          <SurveyRadio labelKey="EXIST" radios={[{ value: 1 }, { value: 2 }]} />
        </RowContent>
      </RowContainer>

      <RowContainer>
        <RowContent title="가족력">
          <SurveyRadio labelKey="EXIST" radios={[{ value: 1 }, { value: 2 }]} />
        </RowContent>
        <RowContent title="약물 알러지">
          <SurveyRadio labelKey="EXIST" radios={[{ value: 1 }, { value: 2 }]} />
        </RowContent>
        <RowContent title="조영제 알러지">
          <SurveyRadio labelKey="EXIST" radios={[{ value: 1 }, { value: 2 }]} />
        </RowContent>
        <RowContent title="음식 알러지">
          <SurveyRadio labelKey="EXIST" radios={[{ value: 1 }, { value: 2 }]} />
        </RowContent>
      </RowContainer>
    </Fragment>
  );
};

export default DiseaseHistory;
