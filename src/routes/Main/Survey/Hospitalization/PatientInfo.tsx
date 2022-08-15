import { Fragment } from 'react';
import { Grid, Stack, Typography, TypographyProps } from '@mui/material';

import { IPatientInfo } from '../../../../apis/admin/type';
import { FormProps, THospitalizationSurveyDefaultValues } from '../../type';

import RowContainer from '../components/RowContainer';
import RowContent from '../components/RowContent';
import SurveyInput from '../components/SurveyInput';
import SurveyRadio from '../components/SurveyRadio';

interface Props extends FormProps<THospitalizationSurveyDefaultValues> {
  nurseName: string;
  patientInfo: IPatientInfo;
}

const PatientInfo = (props: Props) => {
  const { nurseName, patientInfo, register, getValues, setValue } = props;

  const contactTitleProps: TypographyProps = {
    variant: 'caption',
    fontWeight: 'bold',
  };

  const contacts = Array.from({ length: 3 }, (_, i) => i);

  if (!getValues || !setValue) return null;
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
            valueKey="gender"
            {...{ getValues, setValue }}
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
            {contacts.map(i => (
              <SurveyInput
                key={i}
                type="tel"
                required={!i}
                {...register(`contacts.${i}.contact`)}
              />
            ))}
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack spacing={1}>
            <Typography {...contactTitleProps}>이름</Typography>
            {contacts.map(i => (
              <SurveyInput
                key={i}
                required={!i}
                {...register(`contacts.${i}.name`)}
              />
            ))}
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack spacing={1}>
            <Typography {...contactTitleProps}>관계</Typography>
            {contacts.map(i => (
              <SurveyInput
                key={i}
                required={!i}
                {...register(`contacts.${i}.relation`)}
              />
            ))}
          </Stack>
        </Grid>
      </RowContainer>
    </Fragment>
  );
};

export default PatientInfo;
