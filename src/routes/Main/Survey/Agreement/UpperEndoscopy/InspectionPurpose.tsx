import { Box, Typography } from '@mui/material';

import SectionTitle from '../../components/SectionTitle';

interface Props {
  disabled?: boolean;
}

const contents = [
  '상부위장관내시경 검사는 식도, 위, 십이지장 일부에 발생하는 여러 종류의 질환(예: 위암, 위궤양, 십이지장궤양, 식도염 등)을 진단하는 검사입니다. 검사 중에 이상이 발견되면 정확한 진단을 위하여 즉시 조직생검, 헬',
  '리코박터균 검사, 색소 살포 등의 추가적인 검사를 할 수 있습니다.',
];

const InspectionPurpose = (props: Props) => {
  const { disabled } = props;

  return (
    <>
      <SectionTitle title="검사목적 및 장단점" />
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

export default InspectionPurpose;
