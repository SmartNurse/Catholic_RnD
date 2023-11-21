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
    label: '비 터널형 중심정맥 (Subclavian Catheter)',
    key: 'fall_education.checked1',
  },
  {
    label: '터널형 중심정맥관 히크만카테터 (Hickman Catheter)',
    key: 'fall_education.checked2',
  },
  {
    label:
      '말초 삽입 중심정맥관 (PICC : Peripherally Inserted Central Catheter)',
    key: 'fall_education.checked3',
  },
  {
    label: '매립형 중심정맥관 케모포트 (Chemo-Port)',
    key: 'fall_education.checked4',
  },
];

const CVCone = (props: Props) => {
  const { disabled, register, getValues, setValue } = props;

  return (
    <Fragment>
      <SectionTitle title="1. 중심정맥관 정의 및 종류" />

      <Box sx={{ margin: '38px 0px 30px 20px' }}>
        <Grid container xs={11.8}>
          <Typography sx={{ fontSize: '14px', fontWeight: 400 }}>
            중심정맥은 손이나 발 등에 위치한 작은 말초 정맥과 달리, 몸통에서
            연결되어 심장으로 들어가는 쇄골하 정맥, 경정맥, 대퇴정맥 등 큰
            정맥을 말합니다.
            <br />
            중심정맥관은 이러한 굵은 중심 정맥에 삽입되는 관의 일종으로 한 번
            정맥관이 삽입된 후 그 기능이 잘 유지되면, 매번 치료 시 정맥 주사를
            위한 별도의 혈관 확보가 필요없이 지속적으로 사용할 수 있습니다.
          </Typography>
          {checks.map((v, i) => {
            return (
              <Grid item xs={11.5} sx={{ margin: '0px 0 0 15px' }}>
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

export default CVCone;
