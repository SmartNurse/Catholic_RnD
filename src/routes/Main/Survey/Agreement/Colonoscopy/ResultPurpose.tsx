import { Box, Typography } from '@mui/material';

import SectionTitle from '../../components/SectionTitle';

interface Props {
  disabled?: boolean;
}

const contents = [
  '최근 우리나라에서도 대장의 질환(용종, 암, 염증 등)이 현저하게 증가하고 있습니다. 대장내시경 검사는 항문을 통해 내시경을 삽입하여 대장(큰 창자)의 내부를 관찰하는 검사로, 대장 질환을 조기에 진단하고 적절히',
  '치료할 목적으로 시행됩니다. 이상 소견이 있는 경우 자세히 관찰하기 위하여 때로는 푸른색의 색소를 뿌리기도 하고 현미경으로 관찰하기 위해 조직생검도 합니다. 용종이 있으면 검사 중에 바로 절제할 수 있고 경우',
  '에는 따라서는 출혈을 멈추게 하는 치료도 할 수 있습니다. ',
];

const ResultPurpose = (props: Props) => {
  const { disabled } = props;

  return (
    <>
      <SectionTitle title="검사목적" />
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

export default ResultPurpose;
