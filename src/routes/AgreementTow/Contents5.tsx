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
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8C%E1%85%A1%E1%84%80%E1%85%A1+%E1%84%86%E1%85%A9%E1%84%87%E1%85%A1%E1%86%AF+%E1%84%8B%E1%85%B5%E1%84%89%E1%85%B5%E1%86%A8%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF1.pdf',
      },
      {
        label: '자가 모발 이식수술2',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8C%E1%85%A1%E1%84%80%E1%85%A1+%E1%84%86%E1%85%A9%E1%84%87%E1%85%A1%E1%86%AF+%E1%84%8B%E1%85%B5%E1%84%89%E1%85%B5%E1%86%A8%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF2.pdf',
      },
      {
        label: '자가 헌혈 동의서',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8C%E1%85%A1%E1%84%80%E1%85%A1+%E1%84%92%E1%85%A5%E1%86%AB%E1%84%92%E1%85%A7%E1%86%AF+%E1%84%83%E1%85%A9%E1%86%BC%E1%84%8B%E1%85%B4%E1%84%89%E1%85%A5.pdf',
      },
      {
        label: '자기공명영상(MRI) 검사',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8C%E1%85%A1%E1%84%80%E1%85%B5%E1%84%80%E1%85%A9%E1%86%BC%E1%84%86%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%89%E1%85%A1%E1%86%BC(MRI)+%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A1.pdf',
      },
      {
        label: '자발성 거미막하 출혈수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8C%E1%85%A1%E1%84%87%E1%85%A1%E1%86%AF%E1%84%89%E1%85%A5%E1%86%BC+%E1%84%80%E1%85%A5%E1%84%86%E1%85%B5%E1%84%86%E1%85%A1%E1%86%A8%E1%84%92%E1%85%A1+%E1%84%8E%E1%85%AE%E1%86%AF%E1%84%92%E1%85%A7%E1%86%AF%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
    ],
    [
      {
        label: '장 폐쇄증 수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8C%E1%85%A1%E1%86%BC+%E1%84%91%E1%85%A8%E1%84%89%E1%85%AB%E1%84%8C%E1%85%B3%E1%86%BC+%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '재접합술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8C%E1%85%A2%E1%84%8C%E1%85%A5%E1%86%B8%E1%84%92%E1%85%A1%E1%86%B8%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '재활도수요법',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8C%E1%85%A2%E1%84%92%E1%85%AA%E1%86%AF%E1%84%83%E1%85%A9%E1%84%89%E1%85%AE%E1%84%8B%E1%85%AD%E1%84%87%E1%85%A5%E1%86%B8.pdf',
      },
      {
        label: '전기경련요법',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%80%E1%85%B5%E1%84%80%E1%85%A7%E1%86%BC%E1%84%85%E1%85%A7%E1%86%AB%E1%84%8B%E1%85%AD%E1%84%87%E1%85%A5%E1%86%B8.pdf',
      },
      {
        label: '전립샘비대 수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%85%E1%85%B5%E1%86%B8%E1%84%89%E1%85%A2%E1%86%B7%E1%84%87%E1%85%B5%E1%84%83%E1%85%A2+%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
    ],
    [
      {
        label: '전안부레이저치료',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%87%E1%85%AE%E1%84%85%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8C%E1%85%A5%E1%84%8E%E1%85%B5%E1%84%85%E1%85%AD.pdf',
      },
      {
        label: '전이성 뼈종양의 치료',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%8B%E1%85%B5%E1%84%89%E1%85%A5%E1%86%BC+%E1%84%88%E1%85%A7%E1%84%8C%E1%85%A9%E1%86%BC%E1%84%8B%E1%85%A3%E1%86%BC%E1%84%8B%E1%85%B4+%E1%84%8E%E1%85%B5%E1%84%85%E1%85%AD.pdf',
      },
      {
        label: '점막하 절제술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8C%E1%85%A5%E1%86%B7%E1%84%86%E1%85%A1%E1%86%A8%E1%84%92%E1%85%A1+%E1%84%8C%E1%85%A5%E1%86%AF%E1%84%8C%E1%85%A6%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '정관절제술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%80%E1%85%AA%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%AF%E1%84%8C%E1%85%A6%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '정맥요로조영술(IVP)',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%86%E1%85%A2%E1%86%A8%E1%84%8B%E1%85%AD%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A9%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%89%E1%85%AE%E1%86%AF(IVP).pdf',
      },
    ],
    [
      {
        label: '제왕절개 분만 수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8C%E1%85%A6%E1%84%8B%E1%85%AA%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%AF%E1%84%80%E1%85%A2+%E1%84%87%E1%85%AE%E1%86%AB%E1%84%86%E1%85%A1%E1%86%AB+%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '조혈모세포(골수)이식 시술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8C%E1%85%A9%E1%84%92%E1%85%A7%E1%86%AF%E1%84%86%E1%85%A9%E1%84%89%E1%85%A6%E1%84%91%E1%85%A9(%E1%84%80%E1%85%A9%E1%86%AF%E1%84%89%E1%85%AE)%E1%84%8B%E1%85%B5%E1%84%89%E1%85%B5%E1%86%A8+%E1%84%89%E1%85%B5%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '족관절(발목관절) 수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8C%E1%85%A9%E1%86%A8%E1%84%80%E1%85%AA%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%AF(%E1%84%87%E1%85%A1%E1%86%AF%E1%84%86%E1%85%A9%E1%86%A8%E1%84%80%E1%85%AA%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%AF)+%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '중증 근무력증',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%8C%E1%85%B3%E1%86%BC+%E1%84%80%E1%85%B3%E1%86%AB%E1%84%86%E1%85%AE%E1%84%85%E1%85%A7%E1%86%A8%E1%84%8C%E1%85%B3%E1%86%BC.pdf',
      },
      {
        label: '직장경유 전립샘 침생검',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8C%E1%85%B5%E1%86%A8%E1%84%8C%E1%85%A1%E1%86%BC%E1%84%80%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B2+%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%85%E1%85%B5%E1%86%B8%E1%84%89%E1%85%A2%E1%86%B7+%E1%84%8E%E1%85%B5%E1%86%B7%E1%84%89%E1%85%A2%E1%86%BC%E1%84%80%E1%85%A5%E1%86%B7.pdf',
      },
    ],
    [
      {
        label: '직장암 수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8C%E1%85%B5%E1%86%A8%E1%84%8C%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%A1%E1%86%B7+%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF+.pdf',
      },
      {
        label: '진전 섬망 ',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8C%E1%85%B5%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%AB+%E1%84%89%E1%85%A5%E1%86%B7%E1%84%86%E1%85%A1%E1%86%BC.pdf',
      },
      {
        label: '',
        link: '',
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
      <SectionTitle title="ㅈ" />

      <RowContainer xs={12}>
        <RowContent title="">
          {지읒.map(item => {
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
                <Button
                  onClick={() => window.open(item[4].link)}
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
