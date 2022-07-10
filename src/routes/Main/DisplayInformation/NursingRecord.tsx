import {
  Box,
  Card,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from '@mui/material';

const NursingRecord = () => {
  return (
    <Box flex={1} display="flex" flexDirection={'column'}>
      <Typography variant="subtitle2" fontSize={13} mb={1}>
        간호 기록 내역
      </Typography>
      <Card component="section" sx={{ p: '20px 15px', flex: 1 }}>
        <Typography variant="caption" component="p">
          <Typography variant="caption" mr={1}>
            NANDA
          </Typography>
          <Typography variant="caption" color="#00000080">
            김아무 간호사 2022-10-12 13:30 PM
          </Typography>
        </Typography>
        <List>
          <Typography variant="body2" component="li" lineHeight={'22px'}>
            • 진단명 Dignosis: 여가활동 부족 Decreased diversional activity
            engagement
          </Typography>
          <Typography variant="body2" component="li" lineHeight={'22px'}>
            • 자료 수집 주관적/객관적: 테스트용 문장입니다. 테스트용 문장입니다.
            테스트용 문장입니다.
          </Typography>
        </List>
      </Card>
    </Box>
  );
};

export default NursingRecord;
