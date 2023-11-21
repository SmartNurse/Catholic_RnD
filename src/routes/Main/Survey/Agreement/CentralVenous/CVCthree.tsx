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

const CVCthree = (props: Props) => {
  const { disabled, register } = props;

  const info = [
    '시술 과정 중의 통증을 완화하기 위해 삽입 부위에 국소 마취를 합니다.',
    '혈관을 주사기로 천자한 후 주사 바늘 내로 안내선을 삽입하여 도관이 들어갈 수 있는 통로를 확보합니다.',
    '안내선을 통하여 도관을 혈관에 삽입하고 피부에 고정합니다.',
    '예상 소요 시간은 약 20~40분 정도로 예상되나, 시술 진행 상황에 따라 변경될 수 있습니다.',
  ];

  return (
    <Fragment>
      <SectionTitle title="3. 중심정맥관 삽입 방법" />
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
        </Grid>
      </Box>
    </Fragment>
  );
};

export default CVCthree;
