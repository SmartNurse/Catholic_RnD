import { Box, Card, Typography } from '@mui/material';

const Prescription = () => {
  return (
    <Box flex={1} display="flex" flexDirection={'column'}>
      <Typography variant="subtitle2" fontSize={13} mb={1}>
        처방 내역
      </Typography>
      <Card component="section" sx={{ p: '20px 15px', flex: 1 }}>
        <Typography variant="caption" component="p" color="#00000080" mb={1}>
          처방일시 2022-10-12 13:30 PM
        </Typography>
        <Typography variant="body2" lineHeight={'22px'}>
          테스트용 문장입니다. 테스트용 문장입니다. 테스트용 문장입니다.테스트용
          문장입니다. 테스트용 문장입니다. 테스트용 문장입니다.테스트용
          문장입니다. 테스트용 문장입니다. 테스트용 문장입니다.테스트용
          문장입니다. 테스트용 문장입니다. 테스트용 문장입니다.테스트용
          문장입니다. 테스트용 문장입니다. 테스트용 문장입니다.테스트용
          문장입니다. 테스트용 문장입니다. 테스트용 문장입니다.테스트용
          문장입니다. 테스트용 문장입니다. 테스트용 문장입니다.테스트용
          문장입니다. 테스트용 문장입니다. 테스트용 문장입니다.테스트용
          문장입니다. 테스트용 문장입니다.
        </Typography>
      </Card>
    </Box>
  );
};

export default Prescription;
