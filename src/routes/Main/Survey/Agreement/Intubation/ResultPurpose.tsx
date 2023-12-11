import { Box, Typography } from '@mui/material';

import SectionTitle from './SectionTitle';

interface Props {
  disabled?: boolean;
}

const contents = [
  '상기 환자에서 (심정지, 호흡부전, 상기도 폐쇄 등의 응급 상황에 따른 기도 확보 및 유지, 위 내용물의 흡인 방지, 기도 분비물의 배출, 인공 호흡기 치료: 해당사항에 표기)를 위해서 기관내 삽관술이 필요한 상태\n입니다.',
];

const ResultPurpose = (props: Props) => {
  const { disabled } = props;

  return (
    <>
      <SectionTitle title="1. 시술의 필요성" />
      <Box sx={{ width: '98%', margin: '48px auto 24px auto' }}>
        {contents.map((v, i) => (
          <Typography
            sx={{
              fontWeight: '400',
              fontSize: '12px',
              lineHeight: '24px',
              whiteSpace: 'pre',
            }}
          >
            {v}
          </Typography>
        ))}
      </Box>
    </>
  );
};

export default ResultPurpose;
