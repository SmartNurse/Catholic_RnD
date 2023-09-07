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
        link: 'naver.com',
      },
      {
        label: '척추후관절내주사',
        link: 'naver.com',
      },
      {
        label: '천식의 의심이 있을 때 마취',
        link: 'naver.com',
      },
      {
        label: '충수돌기염 수술',
        link: 'naver.com',
      },
      {
        label: '치료적 혈액성분채집술',
        link: 'naver.com',
      },
    ],
    [
      {
        label: '치핵수술',
        link: 'naver.com',
      },
      {
        label: '컴퓨터단층촬영 (CT) 검사',
        link: 'naver.com',
      },
      {
        label: '코골이 및 수면 무호흡증 수술',
        link: 'naver.com',
      },
      {
        label: '코눈물관막힘 수술',
        link: 'naver.com',
      },
      {
        label: '코눈물관막힘(비루관 폐쇄) 수술',
        link: 'naver.com',
      },
    ],
    [
      {
        label: '콩팥생검 (환아)',
        link: 'naver.com',
      },
      {
        label: '콩팥생검',
        link: 'naver.com',
      },
      {
        label: '콩팥이식술1',
        link: 'naver.com',
      },
      {
        label: '콩팥이식술2',
        link: 'naver.com',
      },
      {
        label: '콩팥적출술',
        link: 'naver.com',
      },
    ],
    [
      {
        label: '탈장수술',
        link: 'naver.com',
      },
      {
        label: '턱 성형술',
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
