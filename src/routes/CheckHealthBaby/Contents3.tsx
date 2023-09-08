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

function Contents3(props: Props) {
  const { palette } = useTheme();

  const 비읍시옷 = [
    [
      {
        label: '4~5개월용 선별검사지',
        link: 'naver.com',
      },
      {
        label: '6~7개월용 선별검사지',
        link: 'naver.com',
      },
      {
        label: '8~9개월용 선별검사지',
        link: 'naver.com',
      },
      {
        label: '10~11개월용 선별검사지',
        link: 'naver.com',
      },
    ],
    [
      {
        label: '12~13개월용 선별검사지',
        link: 'naver.com',
      },
      {
        label: '14~15개월용 선별검사지',
        link: 'naver.com',
      },
      {
        label: '16~17개월용 선별검사지',
        link: 'naver.com',
      },
      {
        label: '18~19개월용 선별검사지',
        link: 'naver.com',
      },
    ],
    [
      {
        label: '12~13개월용 선별검사지',
        link: 'naver.com',
      },
      {
        label: '14~15개월용 선별검사지',
        link: 'naver.com',
      },
      {
        label: '16~17개월용 선별검사지',
        link: 'naver.com',
      },
      {
        label: '18~19개월용 선별검사지',
        link: 'naver.com',
      },
    ],
    [
      {
        label: '20~21개월용 선별검사지',
        link: 'naver.com',
      },
      {
        label: '22~23개월용 선별검사지',
        link: 'naver.com',
      },
      {
        label: '24~26개월용 선별검사지',
        link: 'naver.com',
      },
      {
        label: '27~29개월용 선별검사지',
        link: 'naver.com',
      },
    ],
    [
      {
        label: '48~53개월용 선별검사지',
        link: 'naver.com',
      },
      {
        label: '54~59개월용 선별검사지',
        link: 'naver.com',
      },
      {
        label: '60~65개월용 선별검사지',
        link: 'naver.com',
      },
      {
        label: '66~71개월용 선별검사지',
        link: 'naver.com',
      },
    ],
  ];

  return (
    <Box sx={{ margin: '40px' }}>
      <SectionTitle title="ㅂ-ㅅ" />

      <RowContainer xs={12}>
        <RowContent title="">
          {비읍시옷.map(item => {
            return (
              <Stack spacing={3} sx={{ mt: 2 }} direction="row">
                <Button
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

export default Contents3;
