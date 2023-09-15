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

function Contents7(props: Props) {
  const { palette } = useTheme();

  const 피읖히흫 = [
    [
      {
        label: '패혈증치료',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%91%E1%85%A2%E1%84%92%E1%85%A7%E1%86%AF%E1%84%8C%E1%85%B3%E1%86%BC%E1%84%8E%E1%85%B5%E1%84%85%E1%85%AD.pdf',
      },
      {
        label: '편도 및 아데노이드 수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%91%E1%85%A7%E1%86%AB%E1%84%83%E1%85%A9+%E1%84%86%E1%85%B5%E1%86%BE+%E1%84%8B%E1%85%A1%E1%84%83%E1%85%A6%E1%84%82%E1%85%A9%E1%84%8B%E1%85%B5%E1%84%83%E1%85%B3+%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '편도 절제술 및 아데노이드 제거술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%91%E1%85%A7%E1%86%AB%E1%84%83%E1%85%A9+%E1%84%8C%E1%85%A5%E1%86%AF%E1%84%8C%E1%85%A6%E1%84%89%E1%85%AE%E1%86%AF+%E1%84%86%E1%85%B5%E1%86%BE+%E1%84%8B%E1%85%A1%E1%84%83%E1%85%A6%E1%84%82%E1%85%A9%E1%84%8B%E1%85%B5%E1%84%83%E1%85%B3+%E1%84%8C%E1%85%A6%E1%84%80%E1%85%A5%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '편도적출술 및 아데노이드절제술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%91%E1%85%A7%E1%86%AB%E1%84%83%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%A8%E1%84%8E%E1%85%AE%E1%86%AF%E1%84%89%E1%85%AE%E1%86%AF+%E1%84%86%E1%85%B5%E1%86%BE+%E1%84%8B%E1%85%A1%E1%84%83%E1%85%A6%E1%84%82%E1%85%A9%E1%84%8B%E1%85%B5%E1%84%83%E1%85%B3%E1%84%8C%E1%85%A5%E1%86%AF%E1%84%8C%E1%85%A6%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '폐쇄식 흉관 삽관 수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%91%E1%85%A8%E1%84%89%E1%85%AB%E1%84%89%E1%85%B5%E1%86%A8+%E1%84%92%E1%85%B2%E1%86%BC%E1%84%80%E1%85%AA%E1%86%AB+%E1%84%89%E1%85%A1%E1%86%B8%E1%84%80%E1%85%AA%E1%86%AB+%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
    ],
    [
      {
        label: '피부이식술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%91%E1%85%B5%E1%84%87%E1%85%AE%E1%84%8B%E1%85%B5%E1%84%89%E1%85%B5%E1%86%A8%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '피부종양 적출',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%91%E1%85%B5%E1%84%87%E1%85%AE%E1%84%8C%E1%85%A9%E1%86%BC%E1%84%8B%E1%85%A3%E1%86%BC+%E1%84%8C%E1%85%A5%E1%86%A8%E1%84%8E%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '항암제 치료 (환아)',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%92%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%A1%E1%86%B7%E1%84%8C%E1%85%A6+%E1%84%8E%E1%85%B5%E1%84%85%E1%85%AD+(%E1%84%92%E1%85%AA%E1%86%AB%E1%84%8B%E1%85%A1).pdf',
      },
      {
        label: '항암제 치료',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%92%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%A1%E1%86%B7%E1%84%8C%E1%85%A6+%E1%84%8E%E1%85%B5%E1%84%85%E1%85%AD.pdf',
      },
      {
        label: '허혈성 심장병의 의심이 있을 때 마취',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%92%E1%85%A5%E1%84%92%E1%85%A7%E1%86%AF%E1%84%89%E1%85%A5%E1%86%BC+%E1%84%89%E1%85%B5%E1%86%B7%E1%84%8C%E1%85%A1%E1%86%BC%E1%84%87%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B4+%E1%84%8B%E1%85%B4%E1%84%89%E1%85%B5%E1%86%B7%E1%84%8B%E1%85%B5+%E1%84%8B%E1%85%B5%E1%86%BB%E1%84%8B%E1%85%B3%E1%86%AF+%E1%84%84%E1%85%A2+%E1%84%86%E1%85%A1%E1%84%8E%E1%85%B1.pdf',
      },
    ],
    [
      {
        label: '혀암 수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%92%E1%85%A7%E1%84%8B%E1%85%A1%E1%86%B7+%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '현기증',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%92%E1%85%A7%E1%86%AB%E1%84%80%E1%85%B5%E1%84%8C%E1%85%B3%E1%86%BC.pdf',
      },
      {
        label: '혈액 성분채집술(혈소판, 백혈구)',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%92%E1%85%A7%E1%86%AF%E1%84%8B%E1%85%A2%E1%86%A8+%E1%84%89%E1%85%A5%E1%86%BC%E1%84%87%E1%85%AE%E1%86%AB%E1%84%8E%E1%85%A2%E1%84%8C%E1%85%B5%E1%86%B8%E1%84%89%E1%85%AE%E1%86%AF(%E1%84%92%E1%85%A7%E1%86%AF%E1%84%89%E1%85%A9%E1%84%91%E1%85%A1%E1%86%AB%2C+%E1%84%87%E1%85%A2%E1%86%A8%E1%84%92%E1%85%A7%E1%86%AF%E1%84%80%E1%85%AE).pdf',
      },
      {
        label: '혈액투석 (환아)',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%92%E1%85%A7%E1%86%AF%E1%84%8B%E1%85%A2%E1%86%A8%E1%84%90%E1%85%AE%E1%84%89%E1%85%A5%E1%86%A8+(%E1%84%92%E1%85%AA%E1%86%AB%E1%84%8B%E1%85%A1).pdf',
      },
      {
        label: '혈액투석',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%92%E1%85%A7%E1%86%AF%E1%84%8B%E1%85%A2%E1%86%A8%E1%84%90%E1%85%AE%E1%84%89%E1%85%A5%E1%86%A8.pdf',
      },
    ],
    [
      {
        label: '혈전용해제 치료',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%92%E1%85%A7%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%92%E1%85%A2%E1%84%8C%E1%85%A6+%E1%84%8E%E1%85%B5%E1%84%85%E1%85%AD.pdf',
      },
      {
        label: '형광안저촬영 검사',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%92%E1%85%A7%E1%86%BC%E1%84%80%E1%85%AA%E1%86%BC%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%8C%E1%85%A5%E1%84%8E%E1%85%AA%E1%86%AF%E1%84%8B%E1%85%A7%E1%86%BC+%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A1.pdf',
      },
      {
        label: '후두미세수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%92%E1%85%AE%E1%84%83%E1%85%AE%E1%84%86%E1%85%B5%E1%84%89%E1%85%A6%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '후두암 수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%92%E1%85%AE%E1%84%83%E1%85%AE%E1%84%8B%E1%85%A1%E1%86%B7+%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '흉관 삽입',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%92%E1%85%B2%E1%86%BC%E1%84%80%E1%85%AA%E1%86%AB+%E1%84%89%E1%85%A1%E1%86%B8%E1%84%8B%E1%85%B5%E1%86%B8.pdf',
      },
    ],
    [
      {
        label: '흉막 유착술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%92%E1%85%B2%E1%86%BC%E1%84%86%E1%85%A1%E1%86%A8+%E1%84%8B%E1%85%B2%E1%84%8E%E1%85%A1%E1%86%A8%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '흉막 천자 및 생검',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%92%E1%85%B2%E1%86%BC%E1%84%86%E1%85%A1%E1%86%A8+%E1%84%8E%E1%85%A5%E1%86%AB%E1%84%8C%E1%85%A1+%E1%84%86%E1%85%B5%E1%86%BE+%E1%84%89%E1%85%A2%E1%86%BC%E1%84%80%E1%85%A5%E1%86%B7.pdf',
      },
      {
        label: '코중격 교정술 및 비갑개(코선반) 교정술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8F%E1%85%A9%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%A7%E1%86%A8+%E1%84%80%E1%85%AD%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%AE%E1%86%AF+%E1%84%86%E1%85%B5%E1%86%BE+%E1%84%87%E1%85%B5%E1%84%80%E1%85%A1%E1%86%B8%E1%84%80%E1%85%A2(%E1%84%8F%E1%85%A9%E1%84%89%E1%85%A5%E1%86%AB%E1%84%87%E1%85%A1%E1%86%AB)+%E1%84%80%E1%85%AD%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%89%E1%85%AE%E1%86%AF.pdf',
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
      <SectionTitle title="ㅍ-ㅎ" />

      <RowContainer xs={12}>
        <RowContent title="">
          {피읖히흫.map(item => {
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

export default Contents7;
