import { Box, Typography } from '@mui/material';

import SectionTitle from './SectionTitle';

interface Props {
  disabled?: boolean;
}

const contents = [
  '수혈이 반드시 필요한 상황임에도 수혈을 하지 않는 경우 산소부족으로 인한 뇌와 심장근육을 비롯한 여러 장기의 손상이 발생하여 사망할 수도 있습니다.',
  'A. 혈액량 부족',
  'B. 빈혈교정',
  'C. 혈소판 부족',
  'D. 응고인자 보충',
  'E. 기타',
];

const ResultPurpose = (props: Props) => {
  const { disabled } = props;

  return (
    <>
      <SectionTitle title="1. 환자분은 다음의 사유로 수혈이 필요합니다." />
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
