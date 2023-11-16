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

const CVCone = (props: Props) => {
  const { disabled, register } = props;

  const info = [
    '대상자가 임상적으로 불안정하고 다수의 수액주입이 요구될 때',
    '말초정맥으로 주입 시 합병증이 예상되는 약물을 장기간 또는 지속적 주입 시(예: 정맥영양, 발포제, 고농도 전해질, 승압제 등)',
    '침습적인 혈역학적 모니터링 시',
    '장기간의 간헐적 주입 시',
    '초음파 유도를 해도 말초정맥관 삽입이 어렵거나 실패한 과거력이 있는 경우',
  ];

  return (
    <Fragment>
      <SectionTitle title="2. 중심정맥관 삽입 적응증" />
      <Box sx={{ margin: '38px 0px 30px 20px' }}>
        <Grid container xs={11.8}>
          <Typography sx={{ fontSize: '14px', fontWeight: 400 }}>
            중심정맥관 적응증은 다음과 같습니다.
          </Typography>

          {info.map(a => {
            return (
              <Grid item xs={11.5}>
                <Typography sx={{ fontSize: '14px', lineHeight: '30px' }}>
                  • {a}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Fragment>
  );
};

export default CVCone;
