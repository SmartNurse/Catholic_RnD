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

function Contents6(props: Props) {
  const { palette } = useTheme();

  const 치읓키읔 = [
    [
      {
        label: '척추 골절시 생길 수 있는 합병증',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8E%E1%85%A5%E1%86%A8%E1%84%8E%E1%85%AE+%E1%84%80%E1%85%A9%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%AF%E1%84%89%E1%85%B5+%E1%84%89%E1%85%A2%E1%86%BC%E1%84%80%E1%85%B5%E1%86%AF+%E1%84%89%E1%85%AE+%E1%84%8B%E1%85%B5%E1%86%BB%E1%84%82%E1%85%B3%E1%86%AB+%E1%84%92%E1%85%A1%E1%86%B8%E1%84%87%E1%85%A7%E1%86%BC%E1%84%8C%E1%85%B3%E1%86%BC.pdf',
      },
      {
        label: '척추후관절내주사',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8E%E1%85%A5%E1%86%A8%E1%84%8E%E1%85%AE%E1%84%92%E1%85%AE%E1%84%80%E1%85%AA%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%AF%E1%84%82%E1%85%A2%E1%84%8C%E1%85%AE%E1%84%89%E1%85%A1.pdf',
      },
      {
        label: '천식의 의심이 있을 때 마취',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8E%E1%85%A5%E1%86%AB%E1%84%89%E1%85%B5%E1%86%A8%E1%84%8B%E1%85%B4+%E1%84%8B%E1%85%B4%E1%84%89%E1%85%B5%E1%86%B7%E1%84%8B%E1%85%B5+%E1%84%8B%E1%85%B5%E1%86%BB%E1%84%8B%E1%85%B3%E1%86%AF+%E1%84%84%E1%85%A2+%E1%84%86%E1%85%A1%E1%84%8E%E1%85%B1.pdf',
      },
      {
        label: '충수돌기염 수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8E%E1%85%AE%E1%86%BC%E1%84%89%E1%85%AE%E1%84%83%E1%85%A9%E1%86%AF%E1%84%80%E1%85%B5%E1%84%8B%E1%85%A7%E1%86%B7+%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF+.pdf',
      },
      {
        label: '치료적 혈액성분채집술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8E%E1%85%B5%E1%84%85%E1%85%AD%E1%84%8C%E1%85%A5%E1%86%A8+%E1%84%92%E1%85%A7%E1%86%AF%E1%84%8B%E1%85%A2%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC%E1%84%87%E1%85%AE%E1%86%AB%E1%84%8E%E1%85%A2%E1%84%8C%E1%85%B5%E1%86%B8%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
    ],
    [
      {
        label: '치핵수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8E%E1%85%B5%E1%84%92%E1%85%A2%E1%86%A8%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF+.pdf',
      },
      {
        label: '컴퓨터단층촬영 (CT) 검사',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8F%E1%85%A5%E1%86%B7%E1%84%91%E1%85%B2%E1%84%90%E1%85%A5%E1%84%83%E1%85%A1%E1%86%AB%E1%84%8E%E1%85%B3%E1%86%BC%E1%84%8E%E1%85%AA%E1%86%AF%E1%84%8B%E1%85%A7%E1%86%BC+(CT)+%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A1.pdf',
      },
      {
        label: '코골이 및 수면 무호흡증 수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8F%E1%85%A9%E1%84%80%E1%85%A9%E1%86%AF%E1%84%8B%E1%85%B5+%E1%84%86%E1%85%B5%E1%86%BE+%E1%84%89%E1%85%AE%E1%84%86%E1%85%A7%E1%86%AB+%E1%84%86%E1%85%AE%E1%84%92%E1%85%A9%E1%84%92%E1%85%B3%E1%86%B8%E1%84%8C%E1%85%B3%E1%86%BC+%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '코눈물관막힘 수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8F%E1%85%A9%E1%84%82%E1%85%AE%E1%86%AB%E1%84%86%E1%85%AE%E1%86%AF%E1%84%80%E1%85%AA%E1%86%AB%E1%84%86%E1%85%A1%E1%86%A8%E1%84%92%E1%85%B5%E1%86%B7+%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '코눈물관막힘(비루관 폐쇄) 수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8F%E1%85%A9%E1%84%82%E1%85%AE%E1%86%AB%E1%84%86%E1%85%AE%E1%86%AF%E1%84%80%E1%85%AA%E1%86%AB%E1%84%86%E1%85%A1%E1%86%A8%E1%84%92%E1%85%B5%E1%86%B7(%E1%84%87%E1%85%B5%E1%84%85%E1%85%AE%E1%84%80%E1%85%AA%E1%86%AB+%E1%84%91%E1%85%A8%E1%84%89%E1%85%AB)+%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
    ],
    [
      {
        label: '콩팥생검 (환아)',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8F%E1%85%A9%E1%86%BC%E1%84%91%E1%85%A1%E1%87%80%E1%84%89%E1%85%A2%E1%86%BC%E1%84%80%E1%85%A5%E1%86%B7+(%E1%84%92%E1%85%AA%E1%86%AB%E1%84%8B%E1%85%A1).pdf',
      },
      {
        label: '콩팥생검',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8F%E1%85%A9%E1%86%BC%E1%84%91%E1%85%A1%E1%87%80%E1%84%89%E1%85%A2%E1%86%BC%E1%84%80%E1%85%A5%E1%86%B7.pdf',
      },
      {
        label: '콩팥이식술1',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8F%E1%85%A9%E1%86%BC%E1%84%91%E1%85%A1%E1%87%80%E1%84%8B%E1%85%B5%E1%84%89%E1%85%B5%E1%86%A8%E1%84%89%E1%85%AE%E1%86%AF1.pdf',
      },
      {
        label: '콩팥이식술2',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8F%E1%85%A9%E1%86%BC%E1%84%91%E1%85%A1%E1%87%80%E1%84%8B%E1%85%B5%E1%84%89%E1%85%B5%E1%86%A8%E1%84%89%E1%85%AE%E1%86%AF2.pdf',
      },
      {
        label: '콩팥적출술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8F%E1%85%A9%E1%86%BC%E1%84%91%E1%85%A1%E1%87%80%E1%84%8C%E1%85%A5%E1%86%A8%E1%84%8E%E1%85%AE%E1%86%AF%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
    ],
    [
      {
        label: '탈장수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%90%E1%85%A1%E1%86%AF%E1%84%8C%E1%85%A1%E1%86%BC%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '턱 성형술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%90%E1%85%A5%E1%86%A8+%E1%84%89%E1%85%A5%E1%86%BC%E1%84%92%E1%85%A7%E1%86%BC%E1%84%89%E1%85%AE%E1%86%AF.pdf',
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
      <SectionTitle title="ㅊ-ㅋ" />

      <RowContainer xs={12}>
        <RowContent title="">
          {치읓키읔.map(item => {
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

export default Contents6;
