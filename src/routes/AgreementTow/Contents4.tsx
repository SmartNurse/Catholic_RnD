import { useState } from 'react';
import { KeyboardArrowLeft } from '@mui/icons-material';
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

function Contents4(props: Props) {
  const { palette } = useTheme();

  const 이응 = [
    [
      {
        label: '엑시머 레이저 및 라식 굴절 교정 수술',
        link: 'naver.com',
      },
      {
        label: '요관경하 배석술',
        link: 'naver.com',
      },
      {
        label: '요도-방광경검사',
        link: 'naver.com',
      },
      {
        label: '요부 교감신경절차단',
        link: 'naver.com',
      },
      {
        label: '요실금 수술',
        link: 'naver.com',
      },
    ],
    [
      {
        label: '요추 척추관 협착증 수술',
        link: 'naver.com',
      },
      {
        label: '요추 추간판 탈출증 수술',
        link: 'naver.com',
      },
      {
        label: '요추 추간판(허리뼈 척추원반) 탈출증 수술',
        link: 'naver.com',
      },
      {
        label: '운동점 차단술',
        link: 'naver.com',
      },
      {
        label: '위암 수술',
        link: 'naver.com',
      },
    ],
    [
      {
        label: '유리 피판술',
        link: 'naver.com',
      },
      {
        label: '유리체 절제술',
        link: 'naver.com',
      },
      {
        label: '유방암 수술',
        link: 'naver.com',
      },
      {
        label: '융비술',
        link: 'naver.com',
      },
      {
        label: '음경해면체내 주사요법',
        link: 'naver.com',
      },
    ],
    [
      {
        label: '응급 정맥내 도관 삽입수술 (환아)',
        link: 'naver.com',
      },
      {
        label: '응급 정맥내 도관 삽입수술',
        link: 'naver.com',
      },
      {
        label: '이명(귀울림)',
        link: 'naver.com',
      },
      {
        label: '',
        link: 'naver.com',
      },
      {
        label: '',
        link: 'naver.com',
      },
    ],
  ];

  return (
    <Box sx={{ margin: '40px' }}>
      <SectionTitle title="ㅇ" />

      <RowContainer xs={12}>
        <RowContent title="">
          {이응.map(item => {
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
                <Button
                  disabled={item[4].label === '' ? true : false}
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
                  {item[4].label}
                </Button>
              </Stack>
            );
          })}
        </RowContent>
      </RowContainer>
    </Box>
  );
}

export default Contents4;
