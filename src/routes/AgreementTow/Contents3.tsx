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
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%87%E1%85%A1%E1%86%AF%E1%84%83%E1%85%A1%E1%86%AF%E1%84%89%E1%85%A5%E1%86%BC+%E1%84%80%E1%85%A9%E1%84%80%E1%85%AA%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%AF(%E1%84%8B%E1%85%A5%E1%86%BC%E1%84%83%E1%85%A5%E1%86%BC%E1%84%80%E1%85%AA%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%AF)+%E1%84%90%E1%85%A1%E1%86%AF%E1%84%80%E1%85%AE(%E1%84%83%E1%85%A9%E1%84%89%E1%85%AE%C2%B7%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%A8)+%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%87%E1%85%A9%E1%86%A8%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '방광암 (침윤성 상피세포암종) 수술 ',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%87%E1%85%A1%E1%86%BC%E1%84%80%E1%85%AA%E1%86%BC%E1%84%8B%E1%85%A1%E1%86%B7+(%E1%84%8E%E1%85%B5%E1%86%B7%E1%84%8B%E1%85%B2%E1%86%AB%E1%84%89%E1%85%A5%E1%86%BC+%E1%84%89%E1%85%A1%E1%86%BC%E1%84%91%E1%85%B5%E1%84%89%E1%85%A6%E1%84%91%E1%85%A9%E1%84%8B%E1%85%A1%E1%86%B7%E1%84%8C%E1%85%A9%E1%86%BC)+%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF+.pdf',
      },
      {
        label: '백내장 수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%87%E1%85%A2%E1%86%A8%E1%84%82%E1%85%A2%E1%84%8C%E1%85%A1%E1%86%BC+%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '보툴리눔 독소를 이용한 화학적 신경 차단술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%87%E1%85%A9%E1%84%90%E1%85%AE%E1%86%AF%E1%84%85%E1%85%B5%E1%84%82%E1%85%AE%E1%86%B7+%E1%84%83%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A9%E1%84%85%E1%85%B3%E1%86%AF+%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%92%E1%85%A1%E1%86%AB+%E1%84%92%E1%85%AA%E1%84%92%E1%85%A1%E1%86%A8%E1%84%8C%E1%85%A5%E1%86%A8+%E1%84%89%E1%85%B5%E1%86%AB%E1%84%80%E1%85%A7%E1%86%BC+%E1%84%8E%E1%85%A1%E1%84%83%E1%85%A1%E1%86%AB%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '복강경(골반 내시경) 수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%87%E1%85%A9%E1%86%A8%E1%84%80%E1%85%A1%E1%86%BC%E1%84%80%E1%85%A7%E1%86%BC(%E1%84%80%E1%85%A9%E1%86%AF%E1%84%87%E1%85%A1%E1%86%AB+%E1%84%82%E1%85%A2%E1%84%89%E1%85%B5%E1%84%80%E1%85%A7%E1%86%BC)+%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
    ],
    [
      {
        label: '복강경담낭절제수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%87%E1%85%A9%E1%86%A8%E1%84%80%E1%85%A1%E1%86%BC%E1%84%80%E1%85%A7%E1%86%BC%E1%84%83%E1%85%A1%E1%86%B7%E1%84%82%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%AF%E1%84%8C%E1%85%A6%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '복막투석 (환아)',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%87%E1%85%A9%E1%86%A8%E1%84%86%E1%85%A1%E1%86%A8%E1%84%90%E1%85%AE%E1%84%89%E1%85%A5%E1%86%A8+(%E1%84%92%E1%85%AA%E1%86%AB%E1%84%8B%E1%85%A1).pdf',
      },
      {
        label: '복막투석',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%87%E1%85%A9%E1%86%A8%E1%84%86%E1%85%A1%E1%86%A8%E1%84%90%E1%85%AE%E1%84%89%E1%85%A5%E1%86%A8.pdf',
      },
      {
        label: '복막투석 도관 삽입 수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%87%E1%85%A9%E1%86%A8%E1%84%86%E1%85%A1%E1%86%A8%E1%84%90%E1%85%AE%E1%84%89%E1%85%A5%E1%86%A8+%E1%84%83%E1%85%A9%E1%84%80%E1%85%AA%E1%86%AB+%E1%84%89%E1%85%A1%E1%86%B8%E1%84%8B%E1%85%B5%E1%86%B8+%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '복막투석용 도관 삽입 수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%87%E1%85%A9%E1%86%A8%E1%84%86%E1%85%A1%E1%86%A8%E1%84%90%E1%85%AE%E1%84%89%E1%85%A5%E1%86%A8%E1%84%8B%E1%85%AD%E1%86%BC+%E1%84%83%E1%85%A9%E1%84%80%E1%85%AA%E1%86%AB+%E1%84%89%E1%85%A1%E1%86%B8%E1%84%8B%E1%85%B5%E1%86%B8+%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
    ],
    [
      {
        label: '복식 전자궁적출술 및 부속기 절제술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%87%E1%85%A9%E1%86%A8%E1%84%89%E1%85%B5%E1%86%A8+%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%8C%E1%85%A1%E1%84%80%E1%85%AE%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%A8%E1%84%8E%E1%85%AE%E1%86%AF%E1%84%89%E1%85%AE%E1%86%AF+%E1%84%86%E1%85%B5%E1%86%BE+%E1%84%87%E1%85%AE%E1%84%89%E1%85%A9%E1%86%A8%E1%84%80%E1%85%B5(%E1%84%82%E1%85%A1%E1%86%AB%E1%84%89%E1%85%A9+%E1%84%86%E1%85%B5%E1%86%BE+%E1%84%8C%E1%85%A1%E1%84%80%E1%85%AE%E1%86%BC%E1%84%80%E1%85%AA%E1%86%AB)+%E1%84%8C%E1%85%A5%E1%86%AF%E1%84%8C%E1%85%A6%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '부비동 내시경수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%87%E1%85%AE%E1%84%87%E1%85%B5%E1%84%83%E1%85%A9%E1%86%BC+%E1%84%82%E1%85%A2%E1%84%89%E1%85%B5%E1%84%80%E1%85%A7%E1%86%BC%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '비디오 삼킴장애 평가검사',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%87%E1%85%B5%E1%84%83%E1%85%B5%E1%84%8B%E1%85%A9+%E1%84%89%E1%85%A1%E1%86%B7%E1%84%8F%E1%85%B5%E1%86%B7%E1%84%8C%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%A2+%E1%84%91%E1%85%A7%E1%86%BC%E1%84%80%E1%85%A1%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A1.pdf',
      },
      {
        label: '비폐색(코막힘) 수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%87%E1%85%B5%E1%84%91%E1%85%A8%E1%84%89%E1%85%A2%E1%86%A8(%E1%84%8F%E1%85%A9%E1%84%86%E1%85%A1%E1%86%A8%E1%84%92%E1%85%B5%E1%86%B7)+%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '사구체 신염, 신증후군 질환 (환아)',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%89%E1%85%A1%E1%84%80%E1%85%AE%E1%84%8E%E1%85%A6+%E1%84%89%E1%85%B5%E1%86%AB%E1%84%8B%E1%85%A7%E1%86%B7(%E1%84%80%E1%85%B3%E1%86%B8%E1%84%89%E1%85%A5%E1%86%BC%2C+%E1%84%86%E1%85%A1%E1%86%AB%E1%84%89%E1%85%A5%E1%86%BC%2C+%E1%84%80%E1%85%B3%E1%86%B8%E1%84%89%E1%85%A9%E1%86%A8+%E1%84%8C%E1%85%B5%E1%86%AB%E1%84%92%E1%85%A2%E1%86%BC%E1%84%89%E1%85%A5%E1%86%BC)%2C+%E1%84%89%E1%85%B5%E1%86%AB%E1%84%8C%E1%85%B3%E1%86%BC%E1%84%92%E1%85%AE%E1%84%80%E1%85%AE%E1%86%AB+%E1%84%8C%E1%85%B5%E1%86%AF%E1%84%92%E1%85%AA%E1%86%AB+(%E1%84%92%E1%85%AA%E1%86%AB%E1%84%8B%E1%85%A1).pdf',
      },
    ],
    [
      {
        label: '사구체 신염, 신증후군 질환',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%89%E1%85%A1%E1%84%80%E1%85%AE%E1%84%8E%E1%85%A6+%E1%84%89%E1%85%B5%E1%86%AB%E1%84%8B%E1%85%A7%E1%86%B7(%E1%84%80%E1%85%B3%E1%86%B8%E1%84%89%E1%85%A5%E1%86%BC%2C+%E1%84%86%E1%85%A1%E1%86%AB%E1%84%89%E1%85%A5%E1%86%BC%2C+%E1%84%80%E1%85%B3%E1%86%B8%E1%84%89%E1%85%A9%E1%86%A8+%E1%84%8C%E1%85%B5%E1%86%AB%E1%84%92%E1%85%A2%E1%86%BC%E1%84%89%E1%85%A5%E1%86%BC)%2C+%E1%84%89%E1%85%B5%E1%86%AB%E1%84%8C%E1%85%B3%E1%86%BC%E1%84%92%E1%85%AE%E1%84%80%E1%85%AE%E1%86%AB+%E1%84%8C%E1%85%B5%E1%86%AF%E1%84%92%E1%85%AA%E1%86%AB.pdf',
      },
      {
        label: '사시 수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%89%E1%85%A1%E1%84%89%E1%85%B5+%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '상기도 감염의 의심이 있을 때 마취',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%89%E1%85%A1%E1%86%BC%E1%84%80%E1%85%B5%E1%84%83%E1%85%A9+%E1%84%80%E1%85%A1%E1%86%B7%E1%84%8B%E1%85%A7%E1%86%B7%E1%84%8B%E1%85%B4+%E1%84%8B%E1%85%B4%E1%84%89%E1%85%B5%E1%86%B7%E1%84%8B%E1%85%B5+%E1%84%8B%E1%85%B5%E1%86%BB%E1%84%8B%E1%85%B3%E1%86%AF+%E1%84%84%E1%85%A2+%E1%84%86%E1%85%A1%E1%84%8E%E1%85%B1.pdf',
      },
      {
        label: '선천성 심장병(심실 중격 결손증)수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%89%E1%85%A5%E1%86%AB%E1%84%8E%E1%85%A5%E1%86%AB%E1%84%89%E1%85%A5%E1%86%BC+%E1%84%89%E1%85%B5%E1%86%B7%E1%84%8C%E1%85%A1%E1%86%BC%E1%84%87%E1%85%A7%E1%86%BC(%E1%84%89%E1%85%B5%E1%86%B7%E1%84%89%E1%85%B5%E1%86%AF+%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%A7%E1%86%A8+%E1%84%80%E1%85%A7%E1%86%AF%E1%84%89%E1%85%A9%E1%86%AB%E1%84%8C%E1%85%B3%E1%86%BC)%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '성대 폴립 수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%89%E1%85%A5%E1%86%BC%E1%84%83%E1%85%A2+%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%86%B8+%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
    ],
    [
      {
        label: '성상_목가슴_ 신경절 차단술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%89%E1%85%A5%E1%86%BC%E1%84%89%E1%85%A1%E1%86%BC_%E1%84%86%E1%85%A9%E1%86%A8%E1%84%80%E1%85%A1%E1%84%89%E1%85%B3%E1%86%B7_+%E1%84%89%E1%85%B5%E1%86%AB%E1%84%80%E1%85%A7%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%AF+%E1%84%8E%E1%85%A1%E1%84%83%E1%85%A1%E1%86%AB%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '세균성 고관절염_엉덩관절염_ 치료',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%89%E1%85%A6%E1%84%80%E1%85%B2%E1%86%AB%E1%84%89%E1%85%A5%E1%86%BC+%E1%84%80%E1%85%A9%E1%84%80%E1%85%AA%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%AF%E1%84%8B%E1%85%A7%E1%86%B7_%E1%84%8B%E1%85%A5%E1%86%BC%E1%84%83%E1%85%A5%E1%86%BC%E1%84%80%E1%85%AA%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%AF%E1%84%8B%E1%85%A7%E1%86%B7_+%E1%84%8E%E1%85%B5%E1%84%85%E1%85%AD.pdf',
      },
      {
        label: '소아 기관지내시경',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%89%E1%85%A9%E1%84%8B%E1%85%A1+%E1%84%80%E1%85%B5%E1%84%80%E1%85%AA%E1%86%AB%E1%84%8C%E1%85%B5%E1%84%82%E1%85%A2%E1%84%89%E1%85%B5%E1%84%80%E1%85%A7%E1%86%BC.pdf',
      },
      {
        label: '소아의 천식 발작 치료에 대한 설명',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%89%E1%85%A9%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B4+%E1%84%8E%E1%85%A5%E1%86%AB%E1%84%89%E1%85%B5%E1%86%A8+%E1%84%87%E1%85%A1%E1%86%AF%E1%84%8C%E1%85%A1%E1%86%A8+%E1%84%8E%E1%85%B5%E1%84%85%E1%85%AD%E1%84%8B%E1%85%A6+%E1%84%83%E1%85%A2%E1%84%92%E1%85%A1%E1%86%AB+%E1%84%89%E1%85%A5%E1%86%AF%E1%84%86%E1%85%A7%E1%86%BC.pdf',
      },
      {
        label: '소파수술 (긁어냄수술) 및 조직 생검',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%89%E1%85%A9%E1%84%91%E1%85%A1%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF+(%E1%84%80%E1%85%B3%E1%86%B0%E1%84%8B%E1%85%A5%E1%84%82%E1%85%A2%E1%86%B7%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF)+%E1%84%86%E1%85%B5%E1%86%BE+%E1%84%8C%E1%85%A9%E1%84%8C%E1%85%B5%E1%86%A8+%E1%84%89%E1%85%A2%E1%86%BC%E1%84%80%E1%85%A5%E1%86%B7%E1%84%8B%E1%85%A6.pdf',
      },
    ],
    [
      {
        label: '손목관(수근관) 증후군치료',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%89%E1%85%A9%E1%86%AB%E1%84%86%E1%85%A9%E1%86%A8%E1%84%80%E1%85%AA%E1%86%AB(%E1%84%89%E1%85%AE%E1%84%80%E1%85%B3%E1%86%AB%E1%84%80%E1%85%AA%E1%86%AB)+%E1%84%8C%E1%85%B3%E1%86%BC%E1%84%92%E1%85%AE%E1%84%80%E1%85%AE%E1%86%AB%E1%84%8E%E1%85%B5%E1%84%85%E1%85%AD.pdf',
      },
      {
        label: '슬관절 인공관절 성형술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%89%E1%85%B3%E1%86%AF%E1%84%80%E1%85%AA%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%AF+%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%80%E1%85%A9%E1%86%BC%E1%84%80%E1%85%AA%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%AF+%E1%84%89%E1%85%A5%E1%86%BC%E1%84%92%E1%85%A7%E1%86%BC%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '슬관절(무릎관절) 수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%89%E1%85%B3%E1%86%AF%E1%84%80%E1%85%AA%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%AF(%E1%84%86%E1%85%AE%E1%84%85%E1%85%B3%E1%87%81%E1%84%80%E1%85%AA%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%AF)+%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '슬관절(무릎관절) 인대손상 수술',
        link: '',
      },
      {
        label: '식도암수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%89%E1%85%B5%E1%86%A8%E1%84%83%E1%85%A9%E1%84%8B%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
    ],
    [
      {
        label: '심낭절개술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%89%E1%85%B5%E1%86%B7%E1%84%82%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%AF%E1%84%80%E1%85%A2%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '심장판막 질환의 의심이 있을 때 마취',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%89%E1%85%B5%E1%86%B7%E1%84%8C%E1%85%A1%E1%86%BC%E1%84%91%E1%85%A1%E1%86%AB%E1%84%86%E1%85%A1%E1%86%A8+%E1%84%8C%E1%85%B5%E1%86%AF%E1%84%92%E1%85%AA%E1%86%AB%E1%84%8B%E1%85%B4+%E1%84%8B%E1%85%B4%E1%84%89%E1%85%B5%E1%86%B7%E1%84%8B%E1%85%B5+%E1%84%8B%E1%85%B5%E1%86%BB%E1%84%8B%E1%85%B3%E1%86%AF+%E1%84%84%E1%85%A2+%E1%84%86%E1%85%A1%E1%84%8E%E1%85%B1.pdf',
      },
      {
        label: '심장판막수술(승모판 협착증)',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%89%E1%85%B5%E1%86%B7%E1%84%8C%E1%85%A1%E1%86%BC%E1%84%91%E1%85%A1%E1%86%AB%E1%84%86%E1%85%A1%E1%86%A8%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF(%E1%84%89%E1%85%B3%E1%86%BC%E1%84%86%E1%85%A9%E1%84%91%E1%85%A1%E1%86%AB+%E1%84%92%E1%85%A7%E1%86%B8%E1%84%8E%E1%85%A1%E1%86%A8%E1%84%8C%E1%85%B3%E1%86%BC).pdf',
      },
      {
        label: '심폐운동검사',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%89%E1%85%B5%E1%86%B7%E1%84%91%E1%85%A8%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%83%E1%85%A9%E1%86%BC%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A1.pdf',
      },
      {
        label: '쌍꺼풀 수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%8A%E1%85%A1%E1%86%BC%E1%84%81%E1%85%A5%E1%84%91%E1%85%AE%E1%86%AF+%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
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
