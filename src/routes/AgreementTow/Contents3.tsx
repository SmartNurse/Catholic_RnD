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

function Contents3(props: Props) {
  const { palette } = useTheme();

  const 비읍시옷 = [
    [
      {
        label: '발달성 고관절 탈구(도수·수술적) 정복술',
        link: 'naver.com',
      },
      {
        label: '방광암 (침윤성 상피세포암종) 수술 ',
        link: 'naver.com',
      },
      {
        label: '백내장 수술',
        link: 'naver.com',
      },
      {
        label: '보툴리눔 독소를 이용한 화학적 신경 차단술',
        link: 'naver.com',
      },
      {
        label: '복강경(골반 내시경) 수술',
        link: 'naver.com',
      },
    ],
    [
      {
        label: '복강경담낭절제수술',
        link: 'naver.com',
      },
      {
        label: '복막투석 (환아)',
        link: 'naver.com',
      },
      {
        label: '복막투석',
        link: 'naver.com',
      },
      {
        label: '복막투석 도관 삽입 수술',
        link: 'naver.com',
      },
      {
        label: '복막투석용 도관 삽입 수술',
        link: 'naver.com',
      },
    ],
    [
      {
        label: '복식 전자궁적출술 및 부속기 절제술',
        link: 'naver.com',
      },
      {
        label: '부비동 내시경수술',
        link: 'naver.com',
      },
      {
        label: '비디오 삼킴장애 평가검사',
        link: 'naver.com',
      },
      {
        label: '비폐색(코막힘) 수술',
        link: 'naver.com',
      },
      {
        label: '사구체 신염, 신증후군 질환 (환아)',
        link: 'naver.com',
      },
    ],
    [
      {
        label: '사구체 신염, 신증후군 질환',
        link: 'naver.com',
      },
      {
        label: '사시 수술',
        link: 'naver.com',
      },
      {
        label: '상기도 감염의 의심이 있을 때 마취',
        link: 'naver.com',
      },
      {
        label: '선천성 심장병(심실 중격 결손증)수술',
        link: 'naver.com',
      },
      {
        label: '성대 폴립 수술',
        link: 'naver.com',
      },
    ],
    [
      {
        label: '성상_목가슴_ 신경절 차단술',
        link: 'naver.com',
      },
      {
        label: '세균성 고관절염_엉덩관절염_ 치료',
        link: 'naver.com',
      },
      {
        label: '소아 기관지내시경',
        link: 'naver.com',
      },
      {
        label: '소아의 천식 발작 치료에 대한 설명',
        link: 'naver.com',
      },
      {
        label: '소파수술 (긁어냄수술) 및 조직 생검',
        link: 'naver.com',
      },
    ],
    [
      {
        label: '손목관(수근관) 증후군치료',
        link: 'naver.com',
      },
      {
        label: '슬관절 인공관절 성형술',
        link: 'naver.com',
      },
      {
        label: '슬관절(무릎관절) 수술',
        link: 'naver.com',
      },
      {
        label: '슬관절(무릎관절) 인대손상 수술',
        link: 'naver.com',
      },
      {
        label: '식도암수술',
        link: 'naver.com',
      },
    ],
    [
      {
        label: '심낭절개술',
        link: 'naver.com',
      },
      {
        label: '심장판막 질환의 의심이 있을 때 마취',
        link: 'naver.com',
      },
      {
        label: '심장판막수술(승모판 협착증)',
        link: 'naver.com',
      },
      {
        label: '심폐운동검사',
        link: 'naver.com',
      },
      {
        label: '쌍꺼풀 수술',
        link: 'naver.com',
      },
    ],
  ];

  return (
    <Box sx={{ margin: '40px' }}>
      <SectionTitle title="ㅂ-ㅅ" />

      <RowContainer xs={12}>
        <RowContent title="">
          {비읍시옷.map(item => {
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

export default Contents3;
