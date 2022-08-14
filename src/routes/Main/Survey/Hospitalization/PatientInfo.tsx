import { Fragment } from 'react';
import { Grid, Stack, Typography, TypographyProps } from '@mui/material';

import { IPatientInfo } from '../../../../apis/admin/type';
import { FormProps, HospitalizationSurveyDefaultValues } from '../../type';

import RowContainer from '../components/RowContainer';
import RowContent from '../components/RowContent';
import SurveyInput from '../components/SurveyInput';
import SurveyRadio from '../components/SurveyRadio';

interface Props extends FormProps<HospitalizationSurveyDefaultValues> {
  nurseName: string;
  patientInfo: IPatientInfo;
}

const PatientInfo = (props: Props) => {
  const { nurseName, patientInfo, register } = props;

  const contactTitleProps: TypographyProps = {
    variant: 'caption',
    fontWeight: 'bold',
  };

  return (
    <Fragment>
      <RowContainer>
        <RowContent title="대상" childrenRatio={4}>
          <SurveyInput disabled value="환자" />
        </RowContent>
        <RowContent title="환자명" childrenRatio={4}>
          <SurveyInput disabled value={patientInfo.name} />
        </RowContent>
        <RowContent title="나이" childrenRatio={4}>
          <SurveyInput disabled value={patientInfo.age} />
        </RowContent>
        <RowContent title="성별" childrenRatio={4}>
          <SurveyRadio
            labelKey="GENDER"
            value={patientInfo.gender}
            radios={[
              { value: 1, disabled: true },
              { value: 2, disabled: true },
            ]}
          />
        </RowContent>
        <RowContent title="진료과" childrenRatio={4}>
          <SurveyInput disabled value={patientInfo.department} />
        </RowContent>
        <RowContent title="딤딩 의사" childrenRatio={4}>
          <SurveyInput disabled value={patientInfo.main_doctor} />
        </RowContent>
        <RowContent title="기록자" childrenRatio={4}>
          <SurveyInput disabled value={nurseName} />
        </RowContent>
        <RowContent title="정보제공자" childrenRatio={4}>
          <SurveyInput {...register('offer')} />
        </RowContent>
      </RowContainer>
      <RowContainer sx={{ mt: 'auto' }}>
        <Grid item xs={6}>
          <Stack spacing={1}>
            <Typography {...contactTitleProps}>비상 연락처</Typography>
            <SurveyInput {...register('contacts.0.contact')} />
            <SurveyInput {...register('contacts.1.contact')} />
            <SurveyInput {...register('contacts.2.contact')} />
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack spacing={1}>
            <Typography {...contactTitleProps}>이름</Typography>
            <SurveyInput {...register('contacts.0.name')} />
            <SurveyInput {...register('contacts.1.name')} />
            <SurveyInput {...register('contacts.2.name')} />
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack spacing={1}>
            <Typography {...contactTitleProps}>관계</Typography>
            <SurveyInput {...register('contacts.0.relation')} />
            <SurveyInput {...register('contacts.1.relation')} />
            <SurveyInput {...register('contacts.2.relation')} />
          </Stack>
        </Grid>
      </RowContainer>
    </Fragment>
  );
};

export default PatientInfo;
