import Form from 'components/Form';
import { IFormRegister, IFormValues } from 'routes/Main/type';
import { Grid, Box, Stack } from '@mui/material';

import SectionTitle from '../../components/SectionTitle';
import MuiCheckbox from './CheckboxSub';

interface Props extends IFormRegister, IFormValues {
  disabled?: boolean;
}

const checks = [
  {
    label: '보호자 1인 상주',
    key: 'emergency_care_result.status.checked1',
  },
  {
    label: '도난 방지',
    key: 'emergency_care_result.status.checked2',
  },
  {
    label: '낙상 방지',
    key: 'emergency_care_result.status.checked3',
  },
  {
    label: '기타',
    key: 'emergency_care_result.status.checked4',
  },
];

const CheckDisease = (props: Props) => {
  const { disabled, register, getValues, setValue } = props;

  return (
    <>
      <SectionTitle title="내원시 교육" />
      <Box
        sx={{ width: '99%', margin: '48px auto 24px 40px', display: 'flex' }}
      >
        <Grid container xs={11}>
          {checks.map((v, i) => {
            if (v.label === '기타') {
              return (
                <Stack direction="row" spacing={1}>
                  <MuiCheckbox
                    label={v.label}
                    disabled={disabled}
                    defaultValue={Boolean(getValues(v.key)) ? [v.label] : []}
                    onChange={(_, checked) => {
                      setValue(v.key, checked);
                    }}
                  />
                  <Form.MuiTextField
                    required={false}
                    disabled={disabled}
                    placeholder="직접 입력"
                    {...register('emergency_care_result.status.placeholder')}
                  />
                </Stack>
              );
            } else {
              return (
                <Grid sx={{width:"14vw"}}>
                  <MuiCheckbox
                    label={v.label}
                    disabled={disabled}
                    defaultValue={Boolean(getValues(v.key)) ? [v.label] : []}
                    onChange={(_, checked) => {
                      setValue(v.key, checked);
                    }}
                  />
                </Grid>
              );
            }
          })}
        </Grid>
      </Box>
    </>
  );
};

export default CheckDisease;
