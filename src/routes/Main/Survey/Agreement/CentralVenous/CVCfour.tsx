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

const CVCfour = (props: Props) => {
  const { disabled, register } = props;

  const info = [
    '도관의 삽입과 관련하여 쇄골하정맥 또는 내경정맥을 통한 삽입 시 쇄골하 동맥의 전차, 상완 신경총의 손상, 기흉, 혈흉, 공기색전증, 상대정맥의 천자에 따른 종격동 내 출혈, 심막압전, 심방천공, 부정맥, 심장장',
    '비 등이 올 수 있고 대퇴 정맥을 통한 삽입시에는 대퇴동맥의 천자, 사타구니 혹은 후복막 출혈이 있을 수 있습니다.',
    '삽입 후 세균성 감염, 도관 내 혈괴, 도관 삽입 부위 혈관의 혈전증 또는 협착이 있을 수 있습니다.',
    '정맥 천자 및 피부 절개 부위에 지혈을 위한 모래주머니를 2시간 동안 올려놓아야 합니다. 이 기간동안은 자세 변경도 최소한으로 제한합니다.',
    '도관을 삽입한 부위의 멍이나 붓기는 수일 내에 가라앉습니다.',
    '도관의 삽입이나 사용 중 기흉, 혈흉, 수흉, 공기 색전증 등이 발생할 수 있습니다.',
    '도관의 사용 중 위치가 이동했거나 도관이 막힌 경우는 확인이 필요하며, 도관에 의한 감염이 발생한 경우는 도관을 제거해야 합니다.',
    '삽입 부위의 감염 예방을 위해 드레싱이 필요하며 도관의 막힘 예방을 위해 멸균 생리식염수를 주기적으로 주입합니다.',
  ];

  return (
    <Fragment>
      <SectionTitle title="4. 시술 후 주의 사항" />
      <Box sx={{ margin: '38px 0px 30px 20px' }}>
        <Grid container xs={11.8}>
          {info.map((a, i) => {
            if (i === 1) {
              return (
                <Grid item xs={11.5}>
                  <Typography
                    sx={{
                      fontSize: '14px',
                      lineHeight: '30px',
                      marginLeft: '16px',
                    }}
                  >
                    {a}
                  </Typography>
                </Grid>
              );
            }
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

export default CVCfour;
