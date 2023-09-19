import { Box, Button, Stack, Typography, useTheme } from '@mui/material';
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

function Contents1(props: Props) {
  const { palette } = useTheme();

  const 기억 = [
    [
      {
        label: '각막 이식 수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%80%E1%85%A1%E1%86%A8%E1%84%86%E1%85%A1%E1%86%A8+%E1%84%8B%E1%85%B5%E1%84%89%E1%85%B5%E1%86%A8+%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '간암 수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%80%E1%85%A1%E1%86%AB%E1%84%8B%E1%85%A1%E1%86%B7+%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '간질 중첩증',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%80%E1%85%A1%E1%86%AB%E1%84%8C%E1%85%B5%E1%86%AF+%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%8E%E1%85%A5%E1%86%B8%E1%84%8C%E1%85%B3%E1%86%BC.pdf',
      },
      {
        label: '감입조갑판제거수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%80%E1%85%A1%E1%86%B7%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%8C%E1%85%A9%E1%84%80%E1%85%A1%E1%86%B8%E1%84%91%E1%85%A1%E1%86%AB%E1%84%8C%E1%85%A6%E1%84%80%E1%85%A5%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '갑상샘결절 무수알코올치료',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%80%E1%85%A1%E1%86%B8%E1%84%89%E1%85%A1%E1%86%BC%E1%84%89%E1%85%A2%E1%86%B7%E1%84%80%E1%85%A7%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%AF+%E1%84%86%E1%85%AE%E1%84%89%E1%85%AE%E1%84%8B%E1%85%A1%E1%86%AF%E1%84%8F%E1%85%A9%E1%84%8B%E1%85%A9%E1%86%AF%E1%84%8E%E1%85%B5%E1%84%85%E1%85%AD.pdf',
      },
    ],
    [
      {
        label: '갑상선(샘) 수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%80%E1%85%A1%E1%86%B8%E1%84%89%E1%85%A1%E1%86%BC%E1%84%89%E1%85%A5%E1%86%AB(%E1%84%89%E1%85%A2%E1%86%B7)+%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '갑상선암 수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%80%E1%85%A1%E1%86%B8%E1%84%89%E1%85%A1%E1%86%BC%E1%84%89%E1%85%A5%E1%86%AB%E1%84%8B%E1%85%A1%E1%86%B7+%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF+.pdf',
      },
      {
        label: '개흉폐생검',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%80%E1%85%A2%E1%84%92%E1%85%B2%E1%86%BC%E1%84%91%E1%85%A8%E1%84%89%E1%85%A2%E1%86%BC%E1%84%80%E1%85%A5%E1%86%B7.pdf',
      },
      {
        label: '거골(목발뼈) 골절 수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%80%E1%85%A5%E1%84%80%E1%85%A9%E1%86%AF(%E1%84%86%E1%85%A9%E1%86%A8%E1%84%87%E1%85%A1%E1%86%AF%E1%84%88%E1%85%A7)+%E1%84%80%E1%85%A9%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%AF+%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '경동맥 화학색전요법 시술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%80%E1%85%A7%E1%86%BC%E1%84%83%E1%85%A9%E1%86%BC%E1%84%86%E1%85%A2%E1%86%A8+%E1%84%92%E1%85%AA%E1%84%92%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A2%E1%86%A8%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%8B%E1%85%AD%E1%84%87%E1%85%A5%E1%86%B8+%E1%84%89%E1%85%B5%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
    ],
    [
      {
        label: '경막외 차단술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%80%E1%85%A7%E1%86%BC%E1%84%86%E1%85%A1%E1%86%A8%E1%84%8B%E1%85%AC+%E1%84%8E%E1%85%A1%E1%84%83%E1%85%A1%E1%86%AB%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '경추 추간판 탈출증수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%80%E1%85%A7%E1%86%BC%E1%84%8E%E1%85%AE+%E1%84%8E%E1%85%AE%E1%84%80%E1%85%A1%E1%86%AB%E1%84%91%E1%85%A1%E1%86%AB+%E1%84%90%E1%85%A1%E1%86%AF%E1%84%8E%E1%85%AE%E1%86%AF%E1%84%8C%E1%85%B3%E1%86%BC%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '경피세침흡인생검',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%80%E1%85%A7%E1%86%BC%E1%84%91%E1%85%B5%E1%84%89%E1%85%A6%E1%84%8E%E1%85%B5%E1%86%B7%E1%84%92%E1%85%B3%E1%86%B8%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A2%E1%86%BC%E1%84%80%E1%85%A5%E1%86%B7.pdf',
      },
      {
        label: '경피적 콩팥창냄술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%80%E1%85%A7%E1%86%BC%E1%84%91%E1%85%B5%E1%84%8C%E1%85%A5%E1%86%A8+%E1%84%8F%E1%85%A9%E1%86%BC%E1%84%91%E1%85%A1%E1%87%80%E1%84%8E%E1%85%A1%E1%86%BC%E1%84%82%E1%85%A2%E1%86%B7%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '고실성형술 및 고막성형술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%80%E1%85%A9%E1%84%89%E1%85%B5%E1%86%AF%E1%84%89%E1%85%A5%E1%86%BC%E1%84%92%E1%85%A7%E1%86%BC%E1%84%89%E1%85%AE%E1%86%AF+%E1%84%86%E1%85%B5%E1%86%BE+%E1%84%80%E1%85%A9%E1%84%86%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC%E1%84%92%E1%85%A7%E1%86%BC%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
    ],
    [
      {
        label: '고용량 스테로이드 정맥주사요법',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%80%E1%85%A9%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%85%E1%85%A3%E1%86%BC+%E1%84%89%E1%85%B3%E1%84%90%E1%85%A6%E1%84%85%E1%85%A9%E1%84%8B%E1%85%B5%E1%84%83%E1%85%B3+%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%86%E1%85%A2%E1%86%A8%E1%84%8C%E1%85%AE%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%84%87%E1%85%A5%E1%86%B8.pdf',
      },
      {
        label: '고주파 열치료',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%80%E1%85%A9%E1%84%8C%E1%85%AE%E1%84%91%E1%85%A1+%E1%84%8B%E1%85%A7%E1%86%AF%E1%84%8E%E1%85%B5%E1%84%85%E1%85%AD.pdf',
      },
      {
        label: '고혈압성 뇌 내출혈 수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%80%E1%85%A9%E1%84%92%E1%85%A7%E1%86%AF%E1%84%8B%E1%85%A1%E1%86%B8%E1%84%89%E1%85%A5%E1%86%BC+%E1%84%82%E1%85%AC+%E1%84%82%E1%85%A2%E1%84%8E%E1%85%AE%E1%86%AF%E1%84%92%E1%85%A7%E1%86%AF+%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '고혈압의 의심이 있을 때 마취',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%80%E1%85%A9%E1%84%92%E1%85%A7%E1%86%AF%E1%84%8B%E1%85%A1%E1%86%B8%E1%84%8B%E1%85%B4+%E1%84%8B%E1%85%B4%E1%84%89%E1%85%B5%E1%86%B7%E1%84%8B%E1%85%B5+%E1%84%8B%E1%85%B5%E1%86%BB%E1%84%8B%E1%85%B3%E1%86%AF+%E1%84%84%E1%85%A2+%E1%84%86%E1%85%A1%E1%84%8E%E1%85%B1.pdf',
      },
      {
        label: '골수공여 시술 승낙서',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%80%E1%85%A9%E1%86%AF%E1%84%89%E1%85%AE%E1%84%80%E1%85%A9%E1%86%BC%E1%84%8B%E1%85%A7+%E1%84%89%E1%85%B5%E1%84%89%E1%85%AE%E1%86%AF+%E1%84%89%E1%85%B3%E1%86%BC%E1%84%82%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A5.pdf',
      },
    ],
    [
      {
        label: '골수이식 승낙서',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%80%E1%85%A9%E1%86%AF%E1%84%89%E1%85%AE%E1%84%8B%E1%85%B5%E1%84%89%E1%85%B5%E1%86%A8+%E1%84%89%E1%85%B3%E1%86%BC%E1%84%82%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A5.pdf',
      },
      {
        label: '관절 촬영 및 주사 치료',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%80%E1%85%AA%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%AF+%E1%84%8E%E1%85%AA%E1%86%AF%E1%84%8B%E1%85%A7%E1%86%BC+%E1%84%86%E1%85%B5%E1%86%BE+%E1%84%8C%E1%85%AE%E1%84%89%E1%85%A1+%E1%84%8E%E1%85%B5%E1%84%85%E1%85%AD.pdf',
      },
      {
        label: '관절강 세척술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%80%E1%85%AA%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%AF%E1%84%80%E1%85%A1%E1%86%BC+%E1%84%89%E1%85%A6%E1%84%8E%E1%85%A5%E1%86%A8%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '관절경 검사',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%80%E1%85%AA%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%AF%E1%84%80%E1%85%A7%E1%86%BC+%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A1+.pdf',
      },
      {
        label: '교감신경 절단술(절제술) 수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%80%E1%85%AD%E1%84%80%E1%85%A1%E1%86%B7%E1%84%89%E1%85%B5%E1%86%AB%E1%84%80%E1%85%A7%E1%86%BC+%E1%84%8C%E1%85%A5%E1%86%AF%E1%84%83%E1%85%A1%E1%86%AB%E1%84%89%E1%85%AE%E1%86%AF(%E1%84%8C%E1%85%A5%E1%86%AF%E1%84%8C%E1%85%A6%E1%84%89%E1%85%AE%E1%86%AF)+%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
    ],
    [
      {
        label: '구강저암(입바닥암) 수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%80%E1%85%AE%E1%84%80%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%84%8B%E1%85%A1%E1%86%B7(%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%87%E1%85%A1%E1%84%83%E1%85%A1%E1%86%A8%E1%84%8B%E1%85%A1%E1%86%B7)+%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '구개열(입천장 갈림증) 수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%80%E1%85%AE%E1%84%80%E1%85%A2%E1%84%8B%E1%85%A7%E1%86%AF(%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%8E%E1%85%A5%E1%86%AB%E1%84%8C%E1%85%A1%E1%86%BC+%E1%84%80%E1%85%A1%E1%86%AF%E1%84%85%E1%85%B5%E1%86%B7%E1%84%8C%E1%85%B3%E1%86%BC)+%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '근육 침생검',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%80%E1%85%B3%E1%86%AB%E1%84%8B%E1%85%B2%E1%86%A8+%E1%84%8E%E1%85%B5%E1%86%B7%E1%84%89%E1%85%A2%E1%86%BC%E1%84%80%E1%85%A5%E1%86%B7.pdf',
      },
      {
        label: '근전도 검사',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%80%E1%85%B3%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%83%E1%85%A9+%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A1.pdf',
      },
      {
        label: '근치적 전립샘 적출술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%80%E1%85%B3%E1%86%AB%E1%84%8E%E1%85%B5%E1%84%8C%E1%85%A5%E1%86%A8+%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%85%E1%85%B5%E1%86%B8%E1%84%89%E1%85%A2%E1%86%B7+%E1%84%8C%E1%85%A5%E1%86%A8%E1%84%8E%E1%85%AE%E1%86%AF%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
    ],
    [
      {
        label: '급 만성 콩팥 기능상실의 의심이 있을 때 마취',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%80%E1%85%B3%E1%86%B8+%E1%84%86%E1%85%A1%E1%86%AB%E1%84%89%E1%85%A5%E1%86%BC+%E1%84%8F%E1%85%A9%E1%86%BC%E1%84%91%E1%85%A1%E1%87%80+%E1%84%80%E1%85%B5%E1%84%82%E1%85%B3%E1%86%BC%E1%84%89%E1%85%A1%E1%86%BC%E1%84%89%E1%85%B5%E1%86%AF%E1%84%8B%E1%85%B4+%E1%84%8B%E1%85%B4%E1%84%89%E1%85%B5%E1%86%B7%E1%84%8B%E1%85%B5+%E1%84%8B%E1%85%B5%E1%86%BB%E1%84%8B%E1%85%B3%E1%86%AF+%E1%84%84%E1%85%A2+%E1%84%86%E1%85%A1%E1%84%8E%E1%85%B1.pdf',
      },
      {
        label: '급성 경막하 혈종수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%80%E1%85%B3%E1%86%B8%E1%84%89%E1%85%A5%E1%86%BC+%E1%84%80%E1%85%A7%E1%86%BC%E1%84%86%E1%85%A1%E1%86%A8%E1%84%92%E1%85%A1+%E1%84%92%E1%85%A7%E1%86%AF%E1%84%8C%E1%85%A9%E1%86%BC%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '급성 뇌경색증',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%80%E1%85%B3%E1%86%B8%E1%84%89%E1%85%A5%E1%86%BC+%E1%84%82%E1%85%AC%E1%84%80%E1%85%A7%E1%86%BC%E1%84%89%E1%85%A2%E1%86%A8%E1%84%8C%E1%85%B3%E1%86%BC.pdf',
      },
      {
        label: '급성 콩팥기능상실증 (환아)',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%80%E1%85%B3%E1%86%B8%E1%84%89%E1%85%A5%E1%86%BC+%E1%84%8F%E1%85%A9%E1%86%BC%E1%84%91%E1%85%A1%E1%87%80%E1%84%80%E1%85%B5%E1%84%82%E1%85%B3%E1%86%BC%E1%84%89%E1%85%A1%E1%86%BC%E1%84%89%E1%85%B5%E1%86%AF%E1%84%8C%E1%85%B3%E1%86%BC+(%E1%84%92%E1%85%AA%E1%86%AB%E1%84%8B%E1%85%A1).pdf',
      },
      {
        label: '급성 콩팥기능상실증',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%80%E1%85%B3%E1%86%B8%E1%84%89%E1%85%A5%E1%86%BC+%E1%84%8F%E1%85%A9%E1%86%BC%E1%84%91%E1%85%A1%E1%87%80%E1%84%80%E1%85%B5%E1%84%82%E1%85%B3%E1%86%BC%E1%84%89%E1%85%A1%E1%86%BC%E1%84%89%E1%85%B5%E1%86%AF%E1%84%8C%E1%85%B3%E1%86%BC.pdf',
      },
    ],
    [
      {
        label: '급성호흡곤란증후군',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%80%E1%85%B3%E1%86%B8%E1%84%89%E1%85%A5%E1%86%BC%E1%84%92%E1%85%A9%E1%84%92%E1%85%B3%E1%86%B8%E1%84%80%E1%85%A9%E1%86%AB%E1%84%85%E1%85%A1%E1%86%AB%E1%84%8C%E1%85%B3%E1%86%BC%E1%84%92%E1%85%AE%E1%84%80%E1%85%AE%E1%86%AB.pdf',
      },
      {
        label: '기관내 삽관술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%80%E1%85%B5%E1%84%80%E1%85%AA%E1%86%AB%E1%84%82%E1%85%A2+%E1%84%89%E1%85%A1%E1%86%B8%E1%84%80%E1%85%AA%E1%86%AB%E1%84%89%E1%85%AE%E1%86%AF+.pdf',
      },
      {
        label: '기관절개술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%80%E1%85%B5%E1%84%80%E1%85%AA%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%AF%E1%84%80%E1%85%A2%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '기관지 동맥 색전술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%80%E1%85%B5%E1%84%80%E1%85%AA%E1%86%AB%E1%84%8C%E1%85%B5+%E1%84%83%E1%85%A9%E1%86%BC%E1%84%86%E1%85%A2%E1%86%A8+%E1%84%89%E1%85%A2%E1%86%A8%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '기관지내시경술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%80%E1%85%B5%E1%84%80%E1%85%AA%E1%86%AB%E1%84%8C%E1%85%B5%E1%84%82%E1%85%A2%E1%84%89%E1%85%B5%E1%84%80%E1%85%A7%E1%86%BC%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
    ],
    [
      {
        label: '기도확보가 어려운 경우 마취',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%80%E1%85%B5%E1%84%83%E1%85%A9%E1%84%92%E1%85%AA%E1%86%A8%E1%84%87%E1%85%A9%E1%84%80%E1%85%A1+%E1%84%8B%E1%85%A5%E1%84%85%E1%85%A7%E1%84%8B%E1%85%AE%E1%86%AB+%E1%84%80%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%AE+%E1%84%86%E1%85%A1%E1%84%8E%E1%85%B1.pdf',
      },
      {
        label: '기포 절제술의 수술',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%80%E1%85%B5%E1%84%91%E1%85%A9+%E1%84%8C%E1%85%A5%E1%86%AF%E1%84%8C%E1%85%A6%E1%84%89%E1%85%AE%E1%86%AF%E1%84%8B%E1%85%B4+%E1%84%89%E1%85%AE%E1%84%89%E1%85%AE%E1%86%AF.pdf',
      },
      {
        label: '길랭-바레 증후군',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EC%9D%98%EC%84%9C/%E1%84%80%E1%85%B5%E1%86%AF%E1%84%85%E1%85%A2%E1%86%BC-%E1%84%87%E1%85%A1%E1%84%85%E1%85%A6+%E1%84%8C%E1%85%B3%E1%86%BC%E1%84%92%E1%85%AE%E1%84%80%E1%85%AE%E1%86%AB.pdf',
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
      <Typography
        sx={{ fontSize: '25px', fontWeight: 600, marginBottom: '40px' }}
      >
        동의서 2
      </Typography>

      <SectionTitle title="ㄱ" />

      <RowContainer xs={12}>
        <RowContent title="">
          {기억.map(item => {
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

export default Contents1;
