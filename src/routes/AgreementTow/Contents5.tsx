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

function Contents5(props: Props) {
  const { palette } = useTheme();

  const 지읒 = [
    [
      {
        label: '자가 모발 이식수술1',
        link: 'naver.com',
      },
      {
        label: '자가 모발 이식수술2',
        link: 'naver.com',
      },
      {
        label: '자가 헌혈 동의서',
        link: 'naver.com',
      },
      {
        label: '자기공명영상(MRI) 검사',
        link: 'naver.com',
      },
      {
        label: '자발성 거미막하 출혈수술',
        link: 'naver.com',
      },
    ],
    [
      {
        label: '장 폐쇄증 수술',
        link: 'naver.com',
      },
      {
        label: '재접합술',
        link: 'naver.com',
      },
      {
        label: '재활도수요법',
        link: 'naver.com',
      },
      {
        label: '전기경련요법',
        link: 'naver.com',
      },
      {
        label: '전립샘비대 수술',
        link: 'naver.com',
      },
    ],
    [
      {
        label: '전안부레이저치료',
        link: 'naver.com',
      },
      {
        label: '전이성 뼈종양의 치료',
        link: 'naver.com',
      },
      {
        label: '점막하 절제술',
        link: 'naver.com',
      },
      {
        label: '정관절제술',
        link: 'naver.com',
      },
      {
        label: '정맥요로조영술(IVP)',
        link: 'naver.com',
      },
    ],
    [
      {
        label: '제왕절개 분만 수술',
        link: 'naver.com',
      },
      {
        label: '조혈모세포(골수)이식 시술',
        link: 'naver.com',
      },
      {
        label: '족관절(발목관절) 수술',
        link: 'naver.com',
      },
      {
        label: '중증 근무력증',
        link: 'naver.com',
      },
      {
        label: '직장경유 전립샘 침생검',
        link: 'naver.com',
      },
    ],
    [
      {
        label: '직장암 수술',
        link: 'naver.com',
      },
      {
        label: '진전 섬망 ',
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
      {
        label: '',
        link: 'naver.com',
      },
    ],
  ];

  return (
    <Box sx={{ margin: '40px' }}>
      <SectionTitle title="ㅈ" />

      <RowContainer xs={12}>
        <RowContent title="">
          {지읒.map(item => {
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

export default Contents5;
