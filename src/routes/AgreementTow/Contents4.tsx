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
        label: '악성 뼈종양의 치료',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8B%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC+%E1%84%88%E1%85%A7%E1%84%8C%E1%85%A9%E1%86%BC%E1%84%8B%E1%85%A3%E1%86%BC%E1%84%8B%E1%85%B4+%E1%84%8E%E1%85%B5%E1%84%85%E1%85%AD.pdf',
      },
      {
        label: '안면골(얼굴뼈) 골절',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%86%E1%85%A7%E1%86%AB%E1%84%80%E1%85%A9%E1%86%AF(%E1%84%8B%E1%85%A5%E1%86%AF%E1%84%80%E1%85%AE%E1%86%AF%E1%84%88%E1%85%A7)+%E1%84%80%E1%85%A9%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%AF.pdf',
      },
      {
        label: '액취증(겨드랑이 땀 악취증) 수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8B%E1%85%A2%E1%86%A8%E1%84%8E%E1%85%B1%E1%84%8C%E1%85%B3%E1%86%BC(%E1%84%80%E1%85%A7%E1%84%83%E1%85%B3%E1%84%85%E1%85%A1%E1%86%BC+%E1%84%84%E1%85%A1%E1%86%B7+%E1%84%8B%E1%85%A1%E1%86%A8%E1%84%8E%E1%85%B1%E1%84%8C%E1%85%B3%E1%86%BC)+%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '엑시머 레이저 및 라식 굴절 교정 수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8B%E1%85%A6%E1%86%A8%E1%84%89%E1%85%B5%E1%84%86%E1%85%A5+%E1%84%85%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8C%E1%85%A5+%E1%84%86%E1%85%B5%E1%86%BE+%E1%84%85%E1%85%A1%E1%84%89%E1%85%B5%E1%86%A8+%E1%84%80%E1%85%AE%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%AF+%E1%84%80%E1%85%AD%E1%84%8C%E1%85%A5%E1%86%BC+%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '요관경하 배석술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8B%E1%85%AD%E1%84%80%E1%85%AA%E1%86%AB%E1%84%80%E1%85%A7%E1%86%BC%E1%84%92%E1%85%A1+%E1%84%87%E1%85%A2%E1%84%89%E1%85%A5%E1%86%A8%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
    ],
    [
      {
        label: '요도-방광경검사',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8B%E1%85%AD%E1%84%83%E1%85%A9-%E1%84%87%E1%85%A1%E1%86%BC%E1%84%80%E1%85%AA%E1%86%BC%E1%84%80%E1%85%A7%E1%86%BC%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A1.pdf',
      },
      {
        label: '요부 교감신경절차단',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8B%E1%85%AD%E1%84%87%E1%85%AE+%E1%84%80%E1%85%AD%E1%84%80%E1%85%A1%E1%86%B7%E1%84%89%E1%85%B5%E1%86%AB%E1%84%80%E1%85%A7%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%AF%E1%84%8E%E1%85%A1%E1%84%83%E1%85%A1%E1%86%AB.pdf',
      },
      {
        label: '요실금 수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8B%E1%85%AD%E1%84%89%E1%85%B5%E1%86%AF%E1%84%80%E1%85%B3%E1%86%B7+%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '요추 척추관 협착증 수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8B%E1%85%AD%E1%84%8E%E1%85%AE+%E1%84%8E%E1%85%A5%E1%86%A8%E1%84%8E%E1%85%AE%E1%84%80%E1%85%AA%E1%86%AB+%E1%84%92%E1%85%A7%E1%86%B8%E1%84%8E%E1%85%A1%E1%86%A8%E1%84%8C%E1%85%B3%E1%86%BC+%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '요추 추간판 탈출증 수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8B%E1%85%AD%E1%84%8E%E1%85%AE+%E1%84%8E%E1%85%AE%E1%84%80%E1%85%A1%E1%86%AB%E1%84%91%E1%85%A1%E1%86%AB+%E1%84%90%E1%85%A1%E1%86%AF%E1%84%8E%E1%85%AE%E1%86%AF%E1%84%8C%E1%85%B3%E1%86%BC+%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
    ],
    [
      {
        label: '요추 추간판(허리뼈 척추원반) 탈출증 수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8B%E1%85%AD%E1%84%8E%E1%85%AE+%E1%84%8E%E1%85%AE%E1%84%80%E1%85%A1%E1%86%AB%E1%84%91%E1%85%A1%E1%86%AB(%E1%84%92%E1%85%A5%E1%84%85%E1%85%B5%E1%84%88%E1%85%A7+%E1%84%8E%E1%85%A5%E1%86%A8%E1%84%8E%E1%85%AE%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%87%E1%85%A1%E1%86%AB)+%E1%84%90%E1%85%A1%E1%86%AF%E1%84%8E%E1%85%AE%E1%86%AF%E1%84%8C%E1%85%B3%E1%86%BC+%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '운동점 차단술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%83%E1%85%A9%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%B7+%E1%84%8E%E1%85%A1%E1%84%83%E1%85%A1%E1%86%AB%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '위암 수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8B%E1%85%B1%E1%84%8B%E1%85%A1%E1%86%B7+%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '유리 피판술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8B%E1%85%B2%E1%84%85%E1%85%B5+%E1%84%91%E1%85%B5%E1%84%91%E1%85%A1%E1%86%AB%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '유리체 절제술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8B%E1%85%B2%E1%84%85%E1%85%B5%E1%84%8E%E1%85%A6+%E1%84%8C%E1%85%A5%E1%86%AF%E1%84%8C%E1%85%A6%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
    ],
    [
      {
        label: '유방암 수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8B%E1%85%B2%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%A1%E1%86%B7+%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF+.pdf',
      },
      {
        label: '융비술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8B%E1%85%B2%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%A1%E1%86%B7+%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF+.pdf',
      },
      {
        label: '음경해면체내 주사요법',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8B%E1%85%B3%E1%86%B7%E1%84%80%E1%85%A7%E1%86%BC%E1%84%92%E1%85%A2%E1%84%86%E1%85%A7%E1%86%AB%E1%84%8E%E1%85%A6%E1%84%82%E1%85%A2+%E1%84%8C%E1%85%AE%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%84%87%E1%85%A5%E1%86%B8.pdf',
      },
      {
        label: '응급 정맥내 도관 삽입수술 (환아)',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8B%E1%85%B3%E1%86%BC%E1%84%80%E1%85%B3%E1%86%B8+%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%86%E1%85%A2%E1%86%A8%E1%84%82%E1%85%A2+%E1%84%83%E1%85%A9%E1%84%80%E1%85%AA%E1%86%AB(%E1%84%82%E1%85%A2%E1%84%80%E1%85%A7%E1%86%BC+%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%86%E1%85%A2%E1%86%A8%2C+%E1%84%89%E1%85%AB%E1%84%80%E1%85%A9%E1%86%AF%E1%84%92%E1%85%A1%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%86%E1%85%A2%E1%86%A8%2C%E1%84%83%E1%85%A2%E1%84%90%E1%85%AC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%86%E1%85%A2%E1%86%A8)+%E1%84%89%E1%85%A1%E1%86%B8%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF+(%E1%84%92%E1%85%AA%E1%86%AB%E1%84%8B%E1%85%A1).pdf',
      },
      {
        label: '응급 정맥내 도관 삽입수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8B%E1%85%B3%E1%86%BC%E1%84%80%E1%85%B3%E1%86%B8+%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%86%E1%85%A2%E1%86%A8%E1%84%82%E1%85%A2+%E1%84%83%E1%85%A9%E1%84%80%E1%85%AA%E1%86%AB(%E1%84%82%E1%85%A2%E1%84%80%E1%85%A7%E1%86%BC+%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%86%E1%85%A2%E1%86%A8%2C+%E1%84%89%E1%85%AB%E1%84%80%E1%85%A9%E1%86%AF%E1%84%92%E1%85%A1%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%86%E1%85%A2%E1%86%A8%2C%E1%84%83%E1%85%A2%E1%84%90%E1%85%AC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%86%E1%85%A2%E1%86%A8)+%E1%84%89%E1%85%A1%E1%86%B8%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
    ],
    [
      {
        label: '이명(귀울림)',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8B%E1%85%B5%E1%84%86%E1%85%A7%E1%86%BC(%E1%84%80%E1%85%B1%E1%84%8B%E1%85%AE%E1%86%AF%E1%84%85%E1%85%B5%E1%86%B7).pdf',
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
      {
        label: '',
        link: '',
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
