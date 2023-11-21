import Form from 'components/Form';

import { Fragment, useState } from 'react';
import { Delete } from '@mui/icons-material';
import {
  Box,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';

import RowContainer from '../../components/RowContainer';
import RowContent from '../../components/RowContent';

import { Ti18nId } from 'hooks/useI18n';
import { IMentalNursingRecord } from 'apis/survey/type';
import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';

import MuiTextField from 'components/Form/MuiTextField';
import SectionTitle from '../../components/SectionTitle';
import { Stack } from '@mui/system';

interface Props extends IFormValues, IFormWatch, IFormRegister {
  disabled?: boolean;
  onRequired: (id: Ti18nId) => void;
  onSuccess: (message: string) => void;
}

const checks = [
  {
    label: '환자의 신체·정신적 장애로 인하여 약정 내용에 대하여 이해하지 못함',
    key: 'fall_education.checked1',
  },
  {
    label: '설명하는 것이 환자의 심신에 중대한 나쁜 영향을 미칠 것이 명백함',
    key: 'fall_education.checked2',
  },
  {
    label: '환자 본인이 승낙에 관한 권한을 특정인에게 위임함',
    key: 'fall_education.checked3',
  },
  {
    label: '기타',
    key: 'fall_education.checked4',
  },
];

const RecordInfo = (props: Props) => {
  const { disabled, register, getValues, setValue } = props;

  return (
    <>
      <SectionTitle title="3. 보호사가 서명하게 된 이유(보호자가 서명한 경우에만)" />
      <Box sx={{ margin: '48px 0px 30px 20px' }}>
        <Grid container xs={11.8}>
          {checks.map((v, i) => {
            if (v.label === '기타') {
              return (
                <Grid item xs={12}>
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
                      sx={{ marginLeft: '20px' }}
                      disabled={disabled}
                    />
                  </Stack>
                </Grid>
              );
            }
            return (
              <Grid item xs={11.5}>
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
        <Typography
          sx={{ margin: '30px 0 20px 0', fontSize: '14px', fontWeight: 500 }}
        >
          본인/보호자는 신체 억제대 사용에 대하여 위의 충분한 설명을 들었으며
          이에 동의합니다.
        </Typography>
      </Box>
    </>
  );
};

export default RecordInfo;
