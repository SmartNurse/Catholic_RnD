import { Box, Button, Stack, useTheme } from '@mui/material';
import { FieldValues, UseFormRegister } from 'react-hook-form';

import RowContainer from './components/RowContainer';
import RowContent from './components/RowContent';
import SectionTitle from './components/SectionTitle';

interface Props {
  studentGrade: number;
  studentGender: number;
  register: UseFormRegister<FieldValues>;
  isConfirmPassword: boolean;
  onConfirmPassword: () => void;
}

function Contents2(props: Props) {
  const { palette } = useTheme();

  const 니은미음 = [
    [
      {
        label: '18~29개월용 구강검진',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EC%98%81%EC%9C%A0%EC%95%84%EA%B2%80%EC%A7%84%EB%AC%B8%EC%A7%84%ED%91%9C/%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B2%E1%84%8B%E1%85%A1%E1%84%80%E1%85%AE%E1%84%80%E1%85%A1%E1%86%BC%E1%84%80%E1%85%A5%E1%86%B7%E1%84%8C%E1%85%B5%E1%86%AB%E1%84%86%E1%85%AE%E1%86%AB%E1%84%8C%E1%85%B5%E1%86%AB%E1%84%91%E1%85%AD/18~29%E1%84%80%E1%85%A2%E1%84%8B%E1%85%AF%E1%86%AF%E1%84%8B%E1%85%AD%E1%86%BC+%E1%84%80%E1%85%AE%E1%84%80%E1%85%A1%E1%86%BC%E1%84%80%E1%85%A5%E1%86%B7%E1%84%8C%E1%85%B5%E1%86%AB.hwp',
      },
      {
        label: '42~53개월용 구강검진',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EC%98%81%EC%9C%A0%EC%95%84%EA%B2%80%EC%A7%84%EB%AC%B8%EC%A7%84%ED%91%9C/%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B2%E1%84%8B%E1%85%A1%E1%84%80%E1%85%AE%E1%84%80%E1%85%A1%E1%86%BC%E1%84%80%E1%85%A5%E1%86%B7%E1%84%8C%E1%85%B5%E1%86%AB%E1%84%86%E1%85%AE%E1%86%AB%E1%84%8C%E1%85%B5%E1%86%AB%E1%84%91%E1%85%AD/42~53%E1%84%80%E1%85%A2%E1%84%8B%E1%85%AF%E1%86%AF%E1%84%8B%E1%85%AD%E1%86%BC+%E1%84%80%E1%85%AE%E1%84%80%E1%85%A1%E1%86%BC%E1%84%80%E1%85%A5%E1%86%B7%E1%84%8C%E1%85%B5%E1%86%AB.hwp',
      },
      {
        label: '54~65개월용 구강검진',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EC%98%81%EC%9C%A0%EC%95%84%EA%B2%80%EC%A7%84%EB%AC%B8%EC%A7%84%ED%91%9C/%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B2%E1%84%8B%E1%85%A1%E1%84%80%E1%85%AE%E1%84%80%E1%85%A1%E1%86%BC%E1%84%80%E1%85%A5%E1%86%B7%E1%84%8C%E1%85%B5%E1%86%AB%E1%84%86%E1%85%AE%E1%86%AB%E1%84%8C%E1%85%B5%E1%86%AB%E1%84%91%E1%85%AD/54~65%E1%84%80%E1%85%A2%E1%84%8B%E1%85%AF%E1%86%AF%E1%84%8B%E1%85%AD%E1%86%BC+%E1%84%80%E1%85%AE%E1%84%80%E1%85%A1%E1%86%BC%E1%84%80%E1%85%A5%E1%86%B7%E1%84%8C%E1%85%B5%E1%86%AB.hwp',
      },
      {
        label: '',
        link: '',
      },
    ],
  ];

  return (
    <Box sx={{ margin: '40px' }}>
      <SectionTitle title="영유아 구강검진 문진표 다운로드" />

      <RowContainer xs={12}>
        <RowContent title="">
          {니은미음.map(item => {
            return (
              <Stack spacing={3} sx={{ mt: 2 }} direction="row">
                <Button
                  onClick={() => window.open(item[0].link)}
                  disabled={item[0].label === '' ? true : false}
                  color="inherit"
                  size="large"
                  fullWidth
                  sx={{
                    fontSize: '14px',
                    whiteSpace: 'nowrap',
                    ':hover': {
                      backgroundColor: `${palette.primary.main}`,
                      color: 'white',
                      boxShadow: ' 2px 2px 2px 2px lightGray;',
                    },
                    boxShadow: ' 2px 2px 2px 2px lightGray;',
                  }}
                >
                  {item[0].label}
                </Button>
                <Button
                  onClick={() => window.open(item[1].link)}
                  disabled={item[1].label === '' ? true : false}
                  color="inherit"
                  size="large"
                  fullWidth
                  sx={{
                    fontSize: '14px',
                    whiteSpace: 'nowrap',
                    ':hover': {
                      backgroundColor: `${palette.primary.main}`,
                      color: 'white',
                      boxShadow: ' 2px 2px 2px 2px lightGray;',
                    },
                    boxShadow: ' 2px 2px 2px 2px lightGray;',
                  }}
                >
                  {item[1].label}
                </Button>
                <Button
                  onClick={() => window.open(item[2].link)}
                  disabled={item[2].label === '' ? true : false}
                  color="inherit"
                  size="large"
                  fullWidth
                  sx={{
                    fontSize: '14px',
                    whiteSpace: 'nowrap',
                    ':hover': {
                      backgroundColor: `${palette.primary.main}`,
                      color: 'white',
                      boxShadow: ' 2px 2px 2px 2px lightGray;',
                    },
                    boxShadow: ' 2px 2px 2px 2px lightGray;',
                  }}
                >
                  {item[2].label}
                </Button>
                <Button
                  onClick={() => window.open(item[3].link)}
                  disabled={item[3].label === '' ? true : false}
                  color="inherit"
                  size="large"
                  fullWidth
                  sx={{
                    fontSize: '14px',
                    whiteSpace: 'nowrap',
                    ':hover': {
                      backgroundColor: `${palette.primary.main}`,
                      color: 'white',
                      boxShadow: ' 2px 2px 2px 2px lightGray;',
                    },
                    boxShadow: ' 2px 2px 2px 2px lightGray;',
                  }}
                >
                  {item[3].label}
                </Button>
              </Stack>
            );
          })}
        </RowContent>
      </RowContainer>
    </Box>
  );
}

export default Contents2;
