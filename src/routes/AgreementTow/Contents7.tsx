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
        link: 'naver.com',
      },
      {
        label: '편도 및 아데노이드 수술',
        link: 'naver.com',
      },
      {
        label: '편도 절제술 및 아데노이드 제거술',
        link: 'naver.com',
      },
      {
        label: '편도적출술 및 아데노이드절제술',
        link: 'naver.com',
      },
      {
        label: '폐쇄식 흉관 삽관 수술',
        link: 'naver.com',
      },
    ],
    [
      {
        label: '피부이식술',
        link: 'naver.com',
      },
      {
        label: '피부종양 적출',
        link: 'naver.com',
      },
      {
        label: '항암제 치료 (환아)',
        link: 'naver.com',
      },
      {
        label: '항암제 치료',
        link: 'naver.com',
      },
      {
        label: '허혈성 심장병의 의심이 있을 때 마취',
        link: 'naver.com',
      },
    ],
    [
      {
        label: '혀암 수술',
        link: 'naver.com',
      },
      {
        label: '현기증',
        link: 'naver.com',
      },
      {
        label: '혈액 성분채집술(혈소판, 백혈구)',
        link: 'naver.com',
      },
      {
        label: '혈액투석 (환아)',
        link: 'naver.com',
      },
      {
        label: '혈액투석',
        link: 'naver.com',
      },
    ],
    [
      {
        label: '혈전용해제 치료',
        link: 'naver.com',
      },
      {
        label: '형광안저촬영 검사',
        link: 'naver.com',
      },
      {
        label: '후두미세수술',
        link: 'naver.com',
      },
      {
        label: '후두암 수술',
        link: 'naver.com',
      },
      {
        label: '흉관 삽입',
        link: 'naver.com',
      },
    ],
    [
      {
        label: '흉막 유착술',
        link: 'naver.com',
      },
      {
        label: '흉막 천자 및 생검',
        link: 'naver.com',
      },
      {
        label: '코중격 교정술 및 비갑개(코선반) 교정술',
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
