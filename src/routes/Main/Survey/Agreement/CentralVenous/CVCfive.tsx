import { Fragment } from 'react';
import { Box, Grid, Typography } from '@mui/material';

import { Ti18nId } from 'hooks/useI18n';
import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';

import SectionTitle from '../../components/SectionTitle';

interface Props extends IFormValues, IFormWatch, IFormRegister {
  disabled?: boolean;
  onRequired: (id: Ti18nId) => void;
  onSuccess: (message: string) => void;
}

const CVCfive = (props: Props) => {
  const { disabled, register } = props;

  const info = [
    '삽입 부위에서 출혈이 계속되는 경우',
    '삽입 부위가 붉게 변하거나 고름, 분비물이 나오는 경우',
    '삽입 부위에 열감이 있거나 통증이 있는 경우',
    '삽입한 쪽의 얼굴, 어깨, 팔이 붓는 경우',
    '관의 길이가 길어진 경우나 빠져 나온 경우',
    '봉합 부위가 벌어진 경우',
    '관이 손상받은 경우(찢어지거나 구멍이 난 경우)',
    '38도 이상의 열이 나는 경우',
  ];

  return (
    <Fragment>
      <SectionTitle title="5. 의료진에게 알려야 하는 상황" />
      <Box sx={{ margin: '38px 0px 30px 20px' }}>
        <Grid container xs={11.8}>
          {info.map(a => {
            return (
              <Grid item xs={11.5}>
                <Typography sx={{ fontSize: '14px', lineHeight: '30px' }}>
                  • {a}
                </Typography>
              </Grid>
            );
          })}
          <Typography
            sx={{
              fontSize: '14px',
              lineHeight: '30px',
              fontWeight: 500,
              marginTop: '40px',
            }}
          >
            위 설명을 듣고 충분히 이해하였으며, 중심정맥관 삽관에 동의합니다.
          </Typography>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default CVCfive;
