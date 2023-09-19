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
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%82%E1%85%A9%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%92%E1%85%AA%E1%86%AB%E1%84%8C%E1%85%A1+%E1%84%86%E1%85%A1%E1%84%8E%E1%85%B1.pdf',
      },
      {
        label: '녹내장 수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%82%E1%85%A9%E1%86%A8%E1%84%82%E1%85%A2%E1%84%8C%E1%85%A1%E1%86%BC+%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '뇌막염_뇌염',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%82%E1%85%AC%E1%84%86%E1%85%A1%E1%86%A8%E1%84%8B%E1%85%A7%E1%86%B7%3A%E1%84%82%E1%85%AC%E1%84%8B%E1%85%A7%E1%86%B7.pdf',
      },
      {
        label: '뇌수두증 수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%82%E1%85%AC%E1%84%89%E1%85%AE%E1%84%83%E1%85%AE%E1%84%8C%E1%85%B3%E1%86%BC+%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '뇌척수액 검사',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%82%E1%85%AC%E1%84%8E%E1%85%A5%E1%86%A8%E1%84%89%E1%85%AE%E1%84%8B%E1%85%A2%E1%86%A8+%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A1.pdf',
      },
    ],
    [
      {
        label: '뇌하수체 샘종 수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%82%E1%85%AC%E1%84%92%E1%85%A1%E1%84%89%E1%85%AE%E1%84%8E%E1%85%A6+%E1%84%89%E1%85%A2%E1%86%B7%E1%84%8C%E1%85%A9%E1%86%BC+%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '뇌혈관 조영술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%82%E1%85%AC%E1%84%92%E1%85%A7%E1%86%AF%E1%84%80%E1%85%AA%E1%86%AB+%E1%84%8C%E1%85%A9%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '뇌혈관 질환의 의심이 있을 때 마취',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%82%E1%85%AC%E1%84%92%E1%85%A7%E1%86%AF%E1%84%80%E1%85%AA%E1%86%AB+%E1%84%8C%E1%85%B5%E1%86%AF%E1%84%92%E1%85%AA%E1%86%AB%E1%84%8B%E1%85%B4+%E1%84%8B%E1%85%B4%E1%84%89%E1%85%B5%E1%86%B7%E1%84%8B%E1%85%B5+%E1%84%8B%E1%85%B5%E1%86%BB%E1%84%8B%E1%85%B3%E1%86%AF+%E1%84%84%E1%85%A2+%E1%84%86%E1%85%A1%E1%84%8E%E1%85%B1.pdf',
      },
      {
        label: '담낭절제술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%83%E1%85%A1%E1%86%B7%E1%84%82%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%AF%E1%84%8C%E1%85%A6%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '당뇨병, 당뇨병과 관련된 병이 있을 때 마취',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%83%E1%85%A1%E1%86%BC%E1%84%82%E1%85%AD%E1%84%87%E1%85%A7%E1%86%BC+%E1%84%84%E1%85%A9%E1%84%82%E1%85%B3%E1%86%AB+%E1%84%83%E1%85%A1%E1%86%BC%E1%84%82%E1%85%AD%E1%84%87%E1%85%A7%E1%86%BC%E1%84%80%E1%85%AA+%E1%84%80%E1%85%AA%E1%86%AB%E1%84%85%E1%85%A7%E1%86%AB%E1%84%83%E1%85%AC%E1%86%AB+%E1%84%87%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B5+%E1%84%8B%E1%85%B5%E1%86%BB%E1%84%8B%E1%85%B3%E1%86%AF+%E1%84%84%E1%85%A2+%E1%84%86%E1%85%A1%E1%84%8E%E1%85%B1.pdf',
      },
    ],
    [
      {
        label: '대동맥수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%83%E1%85%A2%E1%84%83%E1%85%A9%E1%86%BC%E1%84%86%E1%85%A2%E1%86%A8%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '대퇴골 경부 골절에 대한 내고정 수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%83%E1%85%A2%E1%84%90%E1%85%AC%E1%84%80%E1%85%A9%E1%86%AF+%E1%84%80%E1%85%A7%E1%86%BC%E1%84%87%E1%85%AE+%E1%84%80%E1%85%A9%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%AF%E1%84%8B%E1%85%A6+%E1%84%83%E1%85%A2%E1%84%92%E1%85%A1%E1%86%AB+%E1%84%82%E1%85%A2%E1%84%80%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%BC+%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '대퇴골 골절에 따를 수 있는 합병증',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%83%E1%85%A2%E1%84%90%E1%85%AC%E1%84%80%E1%85%A9%E1%86%AF+%E1%84%80%E1%85%A9%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%AF%E1%84%8B%E1%85%A6+%E1%84%84%E1%85%A1%E1%84%85%E1%85%B3%E1%86%AF+%E1%84%89%E1%85%AE+%E1%84%8B%E1%85%B5%E1%86%BB%E1%84%82%E1%85%B3%E1%86%AB+%E1%84%92%E1%85%A1%E1%86%B8%E1%84%87%E1%85%A7%E1%86%BC%E1%84%8C%E1%85%B3%E1%86%BC.pdf',
      },
      {
        label: '대퇴골두 무혈성 괴사 구제 수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%83%E1%85%A2%E1%84%90%E1%85%AC%E1%84%80%E1%85%A9%E1%86%AF%E1%84%83%E1%85%AE+%E1%84%86%E1%85%AE%E1%84%92%E1%85%A7%E1%86%AF%E1%84%89%E1%85%A5%E1%86%BC+%E1%84%80%E1%85%AC%E1%84%89%E1%85%A1+%E1%84%80%E1%85%AE%E1%84%8C%E1%85%A6+%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '돌발성 난청',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%83%E1%85%A9%E1%86%AF%E1%84%87%E1%85%A1%E1%86%AF%E1%84%89%E1%85%A5%E1%86%BC+%E1%84%82%E1%85%A1%E1%86%AB%E1%84%8E%E1%85%A5%E1%86%BC.pdf',
      },
    ],
    [
      {
        label: '동맥정루 수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%83%E1%85%A9%E1%86%BC%E1%84%86%E1%85%A2%E1%86%A8%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%85%E1%85%AE+%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '동정맥루 성형술 또는 인조혈관 삽입술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%83%E1%85%A9%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%86%E1%85%A2%E1%86%A8%E1%84%85%E1%85%AE(%E1%84%89%E1%85%A2%E1%86%BA%E1%84%80%E1%85%B5%E1%86%AF)+%E1%84%89%E1%85%A5%E1%86%BC%E1%84%92%E1%85%A7%E1%86%BC%E1%84%89%E1%85%AE%E1%86%AF+%E1%84%84%E1%85%A9%E1%84%82%E1%85%B3%E1%86%AB+%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%8C%E1%85%A9%E1%84%92%E1%85%A7%E1%86%AF%E1%84%80%E1%85%AA%E1%86%AB+%E1%84%89%E1%85%A1%E1%86%B8%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '레이저박피 수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%85%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8C%E1%85%A5%E1%84%87%E1%85%A1%E1%86%A8%E1%84%91%E1%85%B5+%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '만성 중이염 수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%86%E1%85%A1%E1%86%AB%E1%84%89%E1%85%A5%E1%86%BC+%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%A7%E1%86%B7+%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '만성경막하 혈종 수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%86%E1%85%A1%E1%86%AB%E1%84%89%E1%85%A5%E1%86%BC%E1%84%80%E1%85%A7%E1%86%BC%E1%84%86%E1%85%A1%E1%86%A8%E1%84%92%E1%85%A1+%E1%84%92%E1%85%A7%E1%86%AF%E1%84%8C%E1%85%A9%E1%86%BC+%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
    ],
    [
      {
        label: '만성콩팥기능상실증 (환아)',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%86%E1%85%A1%E1%86%AB%E1%84%89%E1%85%A5%E1%86%BC%E1%84%8F%E1%85%A9%E1%86%BC%E1%84%91%E1%85%A1%E1%87%80%E1%84%80%E1%85%B5%E1%84%82%E1%85%B3%E1%86%BC%E1%84%89%E1%85%A1%E1%86%BC%E1%84%89%E1%85%B5%E1%86%AF%E1%84%8C%E1%85%B3%E1%86%BC+(%E1%84%92%E1%85%AA%E1%86%AB%E1%84%8B%E1%85%A1).pdf',
      },
      {
        label: '만성콩팥기능상실증',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%86%E1%85%A1%E1%86%AB%E1%84%89%E1%85%A5%E1%86%BC%E1%84%8F%E1%85%A9%E1%86%BC%E1%84%91%E1%85%A1%E1%87%80%E1%84%80%E1%85%B5%E1%84%82%E1%85%B3%E1%86%BC%E1%84%89%E1%85%A1%E1%86%BC%E1%84%89%E1%85%B5%E1%86%AF%E1%84%8C%E1%85%B3%E1%86%BC.pdf',
      },
      {
        label: '말초혈액 조혈모세포 채집술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%86%E1%85%A1%E1%86%AF%E1%84%8E%E1%85%A9%E1%84%92%E1%85%A7%E1%86%AF%E1%84%8B%E1%85%A2%E1%86%A8+%E1%84%8C%E1%85%A9%E1%84%92%E1%85%A7%E1%86%AF%E1%84%86%E1%85%A9%E1%84%89%E1%85%A6%E1%84%91%E1%85%A9+%E1%84%8E%E1%85%A2%E1%84%8C%E1%85%B5%E1%86%B8%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '면역요법',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%86%E1%85%A7%E1%86%AB%E1%84%8B%E1%85%A7%E1%86%A8%E1%84%8B%E1%85%AD%E1%84%87%E1%85%A5%E1%86%B8.pdf',
      },
      {
        label: '모반제거수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%86%E1%85%A9%E1%84%87%E1%85%A1%E1%86%AB%E1%84%8C%E1%85%A6%E1%84%80%E1%85%A5%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
    ],
    [
      {
        label: '모즈수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%86%E1%85%A9%E1%84%8C%E1%85%B3%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '무지 외반증(엄지발가락 가쪽 휨증) 수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%86%E1%85%AE%E1%84%8C%E1%85%B5+%E1%84%8B%E1%85%AC%E1%84%87%E1%85%A1%E1%86%AB%E1%84%8C%E1%85%B3%E1%86%BC(%E1%84%8B%E1%85%A5%E1%86%B7%E1%84%8C%E1%85%B5%E1%84%87%E1%85%A1%E1%86%AF%E1%84%80%E1%85%A1%E1%84%85%E1%85%A1%E1%86%A8+%E1%84%80%E1%85%A1%E1%84%8D%E1%85%A9%E1%86%A8+%E1%84%92%E1%85%B1%E1%86%B7%E1%84%8C%E1%85%B3%E1%86%BC)+%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '미숙아 치료에 대한 설명',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%86%E1%85%B5%E1%84%89%E1%85%AE%E1%86%A8%E1%84%8B%E1%85%A1+%E1%84%8E%E1%85%B5%E1%84%85%E1%85%AD%E1%84%8B%E1%85%A6+%E1%84%83%E1%85%A2%E1%84%92%E1%85%A1%E1%86%AB+%E1%84%89%E1%85%A5%E1%86%AF%E1%84%86%E1%85%A7%E1%86%BC.pdf',
      },
      {
        label: '미용적안검 수술 및 안검하수 수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%86%E1%85%B5%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%A8%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF(%E1%84%8A%E1%85%A1%E1%86%BC%E1%84%81%E1%85%A5%E1%84%91%E1%85%AE%E1%86%AF)+%E1%84%86%E1%85%B5%E1%86%BE+%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%80%E1%85%A5%E1%86%B7%E1%84%92%E1%85%A1%E1%84%89%E1%85%AE(%E1%84%82%E1%85%AE%E1%86%AB%E1%84%81%E1%85%A5%E1%84%91%E1%85%AE%E1%86%AF%E1%84%8E%E1%85%A5%E1%84%8C%E1%85%B5%E1%86%B7)%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '',
        link: '',
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

export default Contents2;
