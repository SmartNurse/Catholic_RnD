import { Box, Typography } from '@mui/material';

import SectionTitle from '../../components/SectionTitle';

interface Props {
  disabled?: boolean;
}

const contents = [
  '검사 전 가스제거제를 복용하고 구역질과 목의 불편감을 줄이기 위해 국소마취제로 인후부를 마취합니다. 내시경을 입, 식도, 위, 십이지장으로 서서히 삽입하면서 조직의 이상유무를 확인하며 필요에 따라 검사 및 치',
  '료 목적으로 조직생검을 시행합니다. 내시경검사 도중 공기를 넣어 관찰하기 때문에 복부 불편감, 구역, 구토, 기침 등이 나타날 수 있으므로 천천히 심호흡을 하면서 입안에 고인 침을 삼키지 말고 자연스럽게 입 밖으로',
  ' 흘리면 됩니다. 검사 시간은 대개 3~5분 정도 소요되나, 조직생검 등의 추가적인 검사를 시행하는 경우에는 시간이 더 소요될 수 있습니다.',
];

const MethodandProcess = (props: Props) => {
  const { disabled } = props;

  return (
    <>
      <SectionTitle title="검사 과정 및 방법" />
      <Box sx={{ width: '98%', margin: '48px auto 24px auto' }}>
        {contents.map((v, i) => (
          <Typography
            sx={{ fontWeight: '400', fontSize: '15px', lineHeight: '24px' }}
          >
            {v}
          </Typography>
        ))}
      </Box>
    </>
  );
};

export default MethodandProcess;
