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

function Contents2(props: Props) {
  const { palette } = useTheme();

  const 니은미음 = [
    [
      {
        label: '노인환자 마취',
        link: 'naver.com',
      },
      {
        label: '녹내장 수술',
        link: 'naver.com',
      },
      {
        label: '뇌막염_뇌염',
        link: 'naver.com',
      },
      {
        label: '뇌수두증 수술',
        link: 'naver.com',
      },
      {
        label: '뇌척수액 검사',
        link: 'naver.com',
      },
    ],
    [
      {
        label: '뇌하수체 샘종 수술',
        link: 'naver.com',
      },
      {
        label: '뇌혈관 조영술',
        link: 'naver.com',
      },
      {
        label: '뇌혈관 질환의 의심이 있을 때 마취',
        link: 'naver.com',
      },
      {
        label: '담낭절제술',
        link: 'naver.com',
      },
      {
        label: '당뇨병, 당뇨병과 관련된 병이 있을 때 마취',
        link: 'naver.com',
      },
    ],
    [
      {
        label: '대동맥수술',
        link: 'naver.com',
      },
      {
        label: '대퇴골 경부 골절에 대한 내고정 수술',
        link: 'naver.com',
      },
      {
        label: '대퇴골 골절에 따를 수 있는 합병증',
        link: 'naver.com',
      },
      {
        label: '대퇴골두 무혈성 괴사 구제 수술',
        link: 'naver.com',
      },
      {
        label: '돌발성 난청',
        link: 'naver.com',
      },
    ],
    [
      {
        label: '동맥정루 수술',
        link: 'naver.com',
      },
      {
        label: '동정맥루 성형술 또는 인조혈관 삽입술',
        link: 'naver.com',
      },
      {
        label: '레이저박피 수술',
        link: 'naver.com',
      },
      {
        label: '만성 중이염 수술',
        link: 'naver.com',
      },
      {
        label: '만성경막하 혈종 수술',
        link: 'naver.com',
      },
    ],
    [
      {
        label: '만성콩팥기능상실증 (환아)',
        link: 'naver.com',
      },
      {
        label: '만성콩팥기능상실증',
        link: 'naver.com',
      },
      {
        label: '말초혈액 조혈모세포 채집술',
        link: 'naver.com',
      },
      {
        label: '면역요법',
        link: 'naver.com',
      },
      {
        label: '모반제거수술',
        link: 'naver.com',
      },
    ],
    [
      {
        label: '모즈수술',
        link: 'naver.com',
      },
      {
        label: '무지 외반증(엄지발가락 가쪽 휨증) 수술',
        link: 'naver.com',
      },
      {
        label: '미숙아 치료에 대한 설명',
        link: 'naver.com',
      },
      {
        label: '미용적안검 수술 및 안검하수 수술',
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
      <SectionTitle title="ㄴ-ㅁ" />

      <RowContainer xs={12}>
        <RowContent title="">
          {니은미음.map(item => {
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

export default Contents2;
