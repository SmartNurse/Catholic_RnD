import { Fragment } from 'react';
import { Grid, Stack, Typography, TypographyProps } from '@mui/material';

import { IFormRegister } from '../../type';
import { IPatientInfo } from '../../../../apis/admin/type';
import Form from '../../../../components/Form';
import RowContainer from '../components/RowContainer';
import RowContent from '../components/RowContent';

interface Props extends IFormRegister {
  nurseName: string;
  patientInfo: IPatientInfo;
}

const PatientInfo = (props: Props) => {
  const { nurseName, patientInfo, register } = props;

  const contactTitleProps: TypographyProps = {
    variant: 'caption',
    fontWeight: 'bold',
  };

  const contacts = Array.from({ length: 3 }, (_, i) => i);
  return (
    <Fragment>
      <RowContainer>
        <RowContent title="대상" childrenRatio={4}>
          <Form.MuiTextField value="환자" InputProps={{ readOnly: true }} />
        </RowContent>
        <RowContent title="환자명" childrenRatio={4}>
          <Form.MuiTextField
            value={patientInfo.name}
            InputProps={{ readOnly: true }}
          />
        </RowContent>
        <RowContent title="나이" childrenRatio={4}>
          <Form.MuiTextField
            value={patientInfo.age}
            InputProps={{ readOnly: true }}
          />
        </RowContent>
        <RowContent title="성별" childrenRatio={4}>
          <Form.MuiRadioGroup
            i18nKey="GENDER"
            values={[1, 2]}
            value={patientInfo.gender}
            defaultValue={patientInfo.gender}
          />
        </RowContent>
        <RowContent title="진료과" childrenRatio={4}>
          <Form.MuiTextField
            value={patientInfo.department}
            InputProps={{ readOnly: true }}
          />
        </RowContent>
        <RowContent title="딤딩 의사" childrenRatio={4}>
          <Form.MuiTextField
            value={patientInfo.main_doctor}
            InputProps={{ readOnly: true }}
          />
        </RowContent>
        <RowContent title="기록자" childrenRatio={4}>
          <Form.MuiTextField
            value={nurseName}
            InputProps={{ readOnly: true }}
          />
        </RowContent>
        <RowContent title="정보제공자" childrenRatio={4}>
          <Form.MuiTextField {...register('offer')} />
        </RowContent>
      </RowContainer>
      <RowContainer sx={{ mt: 'auto' }}>
        <Grid item xs={6}>
          <Stack spacing={1}>
            <Typography {...contactTitleProps}>비상 연락처</Typography>
            {contacts.map(i => (
              <Form.MuiTextField
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
              <Form.MuiTextField
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
              <Form.MuiTextField
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
