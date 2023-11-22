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
    label: '오심, 구토, 식욕 감소 등과 같은 요독 증상이 있는 경우',
    key: 'fall_education.checked1',
  },
  {
    label: '정신상태의 악화 및 뇌병증이 있는 경우',
    key: 'fall_education.checked2',
  },
  {
    label: '심낭염',
    key: 'fall_education.checked3',
  },
  {
    label: '출혈성 경향',
    key: 'fall_education.checked4',
  },
  {
    label: '폐부종과 같은 체액과다가 약물투여로 조절이 안되는 경우',
    key: 'fall_education.checked5',
  },
  {
    label: '핍뇨 혹은 무뇨 환자에서 대사성 산증이 심해지는 경우',
    key: 'fall_education.checked6',
  },
];

const info = [
  { contents: '항응고제로 인한 출혈 경향' },
  { contents: '저혈압' },
  { contents: '저체온' },
  { contents: '전해질 및 산-염기 불균형' },
];

const RecordInfo = (props: Props) => {
  const { disabled, register, getValues, setValue } = props;

  return (
    <>
      <SectionTitle title="3. 시술 설명 사항" />
      <Box sx={{ margin: '48px 0px 30px 20px' }}>
        <Grid container xs={11.8}>
          <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
            1) 시술의 목적 및 효과
          </Typography>
          {checks.map((v, i) => {
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
          <Typography
            sx={{ fontSize: '14px', fontWeight: 500, marginTop: '10px' }}
          >
            2) 발생 가능한 부작용
          </Typography>
          {info.map(a => {
            return (
              <Grid item xs={11.5}>
                <Typography sx={{ fontSize: '14px', lineHeight: '30px' }}>
                  • {a.contents}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
        <Typography
          sx={{ margin: '30px 0 20px 0', fontSize: '14px', fontWeight: 500 }}
        >
          본인/보호자는 지속적신대체요법에 대하여 위의 충분한 설명을 듣고
          이해했으며 환자의 안전과 치료를 위해 동의합니다.
        </Typography>
      </Box>
    </>
  );
};

export default RecordInfo;
