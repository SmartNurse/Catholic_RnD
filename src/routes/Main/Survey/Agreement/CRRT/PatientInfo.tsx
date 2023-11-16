import { Fragment } from 'react';
import { Typography, Grid, Box, Stack } from '@mui/material';
import Form from 'components/Form';

import RowContainer from '../../components/RowContainer';
import { Ti18nId } from 'hooks/useI18n';
import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';

import SectionTitle from '../../components/SectionTitle';

interface Props extends IFormValues, IFormWatch, IFormRegister {
  disabled?: boolean;
  onRequired: (id: Ti18nId) => void;
  onSuccess: (message: string) => void;
}

const checks = [
  {
    label: '고혈압',
    key: 'facilities_in.checked1',
  },
  {
    label: '당뇨',
    key: 'facilities_in.checked2',
  },
  {
    label: '간염',
    key: 'facilities_in.checked3',
  },
  {
    label: '결핵',
    key: 'facilities_in.checked4',
  },
  {
    label: '심장질환',
    key: 'facilities_in.checked5',
  },
  {
    label: '신장질환',
    key: 'facilities_in.checked6',
  },
  {
    label: '호흡기 질환',
    key: 'facilities_in.checked7',
  },
  {
    label: '알러지',
    key: 'facilities_in.checked8',
  },
  {
    label: '출혈 소인',
    key: 'facilities_in.checked8',
  },
  {
    label: '기타',
    key: 'facilities_in.checked8',
  },
];

const PatientInfo = (props: Props) => {
  const { disabled, register, getValues, setValue } = props;

  return (
    <Fragment>
      <SectionTitle title="1. 환자의 현재 상태" />

      <Box sx={{ width: '98%', margin: '48px auto 24px auto' }}>
        <Typography
          sx={{ lineHeight: '20px', fontSize: '14px', marginBottom: '10px' }}
        >
          1) 진단명
        </Typography>
        <Form.MuiTextField disabled={disabled} placeholder="직접 입력" />
        <Typography
          sx={{
            lineHeight: '20px',
            margin: '0px 0 0 0px',
            fontSize: '14px',
            marginTop: '10px',
          }}
        >
          2) 과거병력
        </Typography>
        <Grid container xs={12}>
          {checks.map((v, i) => {
            if (v.label === '기타') {
              return (
                <Grid item xs={2.4}>
                  <Stack direction="row">
                    <Form.MuiCheckbox
                      label={v.label}
                      disabled={disabled}
                      defaultValue={Boolean(getValues(v.key)) ? [v.label] : []}
                      onChange={(_, checked) => {
                        setValue(v.key, checked);
                      }}
                    />
                    <Form.MuiTextField
                      sx={{ width: '120px', marginLeft: '20px' }}
                      disabled={disabled}
                      placeholder="직접 입력"
                    />
                  </Stack>
                </Grid>
              );
            }
            return (
              <Grid item xs={2.4}>
                <Form.MuiCheckbox
                  label={v.label}
                  disabled={disabled}
                  defaultValue={Boolean(getValues(v.key)) ? [v.label] : []}
                  onChange={(_, checked) => {
                    setValue(v.key, checked);
                  }}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Fragment>
  );
};

export default PatientInfo;
