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

function Contents1(props: Props) {
  const { palette } = useTheme();

  const 기억 = [
    [
      {
        label: '각막 이식 수술',
        link: 'naver.com',
      },
      {
        label: '간암 수술',
        link: 'naver.com',
      },
      {
        label: '간질 중첩증',
        link: 'naver.com',
      },
      {
        label: '감입조갑판제거수술',
        link: 'naver.com',
      },
      {
        label: '갑상샘결절 무수알코올치료',
        link: 'naver.com',
      },
    ],
    [
      {
        label: '갑상선(샘) 수술',
        link: 'naver.com',
      },
      {
        label: '갑상선암 수술',
        link: 'naver.com',
      },
      {
        label: '개흉폐생검',
        link: 'naver.com',
      },
      {
        label: '거골(목발뼈) 골절 수술',
        link: 'naver.com',
      },
      {
        label: '경동맥 화학색전요법 시술',
        link: 'naver.com',
      },
    ],
    [
      {
        label: '경막외 차단술',
        link: 'naver.com',
      },
      {
        label: '경추 추간판 탈출증수술',
        link: 'naver.com',
      },
      {
        label: '경피세침흡인생검',
        link: 'naver.com',
      },
      {
        label: '경피적 콩팥창냄술',
        link: 'naver.com',
      },
      {
        label: '고실성형술 및 고막성형술',
        link: 'naver.com',
      },
    ],
    [
      {
        label: '고용량 스테로이드 정맥주사요법',
        link: 'naver.com',
      },
      {
        label: '고주파 열치료',
        link: 'naver.com',
      },
      {
        label: '고혈압성 뇌 내출혈 수술',
        link: 'naver.com',
      },
      {
        label: '고혈압의 의심이 있을 때 마취',
        link: 'naver.com',
      },
      {
        label: '골수공여 시술 승낙서',
        link: 'naver.com',
      },
    ],
    [
      {
        label: '골수이식 승낙서',
        link: 'naver.com',
      },
      {
        label: '관절 촬영 및 주사 치료',
        link: 'naver.com',
      },
      {
        label: '관절강 세척술',
        link: 'naver.com',
      },
      {
        label: '관절경 검사',
        link: 'naver.com',
      },
      {
        label: '교감신경 절단술(절제술) 수술',
        link: 'naver.com',
      },
    ],
    [
      {
        label: '구강저암(입바닥암) 수술',
        link: 'naver.com',
      },
      {
        label: '구개열(입천장 갈림증) 수술',
        link: 'naver.com',
      },
      {
        label: '근육 침생검',
        link: 'naver.com',
      },
      {
        label: '근전도 검사',
        link: 'naver.com',
      },
      {
        label: '근치적 전립샘 적출술',
        link: 'naver.com',
      },
    ],
    [
      {
        label: '급 만성 콩팥 기능상실의 의심이 있을 때 마취',
        link: 'naver.com',
      },
      {
        label: '급성 경막하 혈종수술',
        link: 'naver.com',
      },
      {
        label: '급성 뇌경색증',
        link: 'naver.com',
      },
      {
        label: '급성 콩팥기능상실증 (환아)',
        link: 'naver.com',
      },
      {
        label: '급성 콩팥기능상실증',
        link: 'naver.com',
      },
    ],
    [
      {
        label: '급성호흡곤란증후군',
        link: 'naver.com',
      },
      {
        label: '기관내 삽관술',
        link: 'naver.com',
      },
      {
        label: '기관절개술',
        link: 'naver.com',
      },
      {
        label: '기관지 동맥 색전술',
        link: 'naver.com',
      },
      {
        label: '기관지내시경술',
        link: 'naver.com',
      },
    ],
    [
      {
        label: '기도확보가 어려운 경우 마취',
        link: 'naver.com',
      },
      {
        label: '기포 절제술의 수술',
        link: 'naver.com',
      },
      {
        label: '길랭-바레 증후군',
        link: 'naver.com',
      },
      {
        label: '',
        link: '',
      },
      {
        label: '',
        link: '',
      },
    ],
  ];

  return (
    <Box sx={{ margin: '40px' }}>
      <Button
        href="/#/"
        // size="large"
        color="inherit"
        startIcon={
          <KeyboardArrowLeft style={{ width: '50px', height: '40px' }} />
        }
        sx={{
          mb: 5,
          p: 0,
          fontSize: '30px',
        }}
      >
        동의서 2
      </Button>

      <SectionTitle title="ㄱ" />

      <RowContainer xs={12}>
        <RowContent title="">
          {기억.map(item => {
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

export default Contents1;
