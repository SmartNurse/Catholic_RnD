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
        label: '4~5개월용 선별검사지',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EC%98%81%EC%9C%A0%EC%95%84%EA%B2%80%EC%A7%84%EB%AC%B8%EC%A7%84%ED%91%9C/%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B2%E1%84%8B%E1%85%A1%E1%84%87%E1%85%A1%E1%86%AF%E1%84%83%E1%85%A1%E1%86%AF%E1%84%89%E1%85%A5%E1%86%AB%E1%84%87%E1%85%A7%E1%86%AF%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5/4~5%E1%84%80%E1%85%A2%E1%84%8B%E1%85%AF%E1%86%AF%E1%84%8B%E1%85%AD%E1%86%BC+%E1%84%89%E1%85%A5%E1%86%AB%E1%84%87%E1%85%A7%E1%86%AF%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5.hwp',
      },
      {
        label: '6~7개월용 선별검사지',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EC%98%81%EC%9C%A0%EC%95%84%EA%B2%80%EC%A7%84%EB%AC%B8%EC%A7%84%ED%91%9C/%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B2%E1%84%8B%E1%85%A1%E1%84%87%E1%85%A1%E1%86%AF%E1%84%83%E1%85%A1%E1%86%AF%E1%84%89%E1%85%A5%E1%86%AB%E1%84%87%E1%85%A7%E1%86%AF%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5/6~7%E1%84%80%E1%85%A2%E1%84%8B%E1%85%AF%E1%86%AF%E1%84%8B%E1%85%AD%E1%86%BC+%E1%84%89%E1%85%A5%E1%86%AB%E1%84%87%E1%85%A7%E1%86%AF%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5.hwp',
      },
      {
        label: '8~9개월용 선별검사지',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EC%98%81%EC%9C%A0%EC%95%84%EA%B2%80%EC%A7%84%EB%AC%B8%EC%A7%84%ED%91%9C/%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B2%E1%84%8B%E1%85%A1%E1%84%87%E1%85%A1%E1%86%AF%E1%84%83%E1%85%A1%E1%86%AF%E1%84%89%E1%85%A5%E1%86%AB%E1%84%87%E1%85%A7%E1%86%AF%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5/8~9%E1%84%80%E1%85%A2%E1%84%8B%E1%85%AF%E1%86%AF%E1%84%8B%E1%85%AD%E1%86%BC+%E1%84%89%E1%85%A5%E1%86%AB%E1%84%87%E1%85%A7%E1%86%AF%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5.pdf',
      },
      {
        label: '10~11개월용 선별검사지',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EC%98%81%EC%9C%A0%EC%95%84%EA%B2%80%EC%A7%84%EB%AC%B8%EC%A7%84%ED%91%9C/%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B2%E1%84%8B%E1%85%A1%E1%84%87%E1%85%A1%E1%86%AF%E1%84%83%E1%85%A1%E1%86%AF%E1%84%89%E1%85%A5%E1%86%AB%E1%84%87%E1%85%A7%E1%86%AF%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5/10~11%E1%84%80%E1%85%A2%E1%84%8B%E1%85%AF%E1%86%AF%E1%84%8B%E1%85%AD%E1%86%BC+%E1%84%89%E1%85%A5%E1%86%AB%E1%84%87%E1%85%A7%E1%86%AF%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5.pdf',
      },
    ],
    [
      {
        label: '12~13개월용 선별검사지',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EC%98%81%EC%9C%A0%EC%95%84%EA%B2%80%EC%A7%84%EB%AC%B8%EC%A7%84%ED%91%9C/%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B2%E1%84%8B%E1%85%A1%E1%84%87%E1%85%A1%E1%86%AF%E1%84%83%E1%85%A1%E1%86%AF%E1%84%89%E1%85%A5%E1%86%AB%E1%84%87%E1%85%A7%E1%86%AF%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5/12~13%E1%84%80%E1%85%A2%E1%84%8B%E1%85%AF%E1%86%AF%E1%84%8B%E1%85%AD%E1%86%BC+%E1%84%89%E1%85%A5%E1%86%AB%E1%84%87%E1%85%A7%E1%86%AF%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5.pdf',
      },
      {
        label: '14~15개월용 선별검사지',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EC%98%81%EC%9C%A0%EC%95%84%EA%B2%80%EC%A7%84%EB%AC%B8%EC%A7%84%ED%91%9C/%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B2%E1%84%8B%E1%85%A1%E1%84%87%E1%85%A1%E1%86%AF%E1%84%83%E1%85%A1%E1%86%AF%E1%84%89%E1%85%A5%E1%86%AB%E1%84%87%E1%85%A7%E1%86%AF%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5/14~15%E1%84%80%E1%85%A2%E1%84%8B%E1%85%AF%E1%86%AF%E1%84%8B%E1%85%AD%E1%86%BC+%E1%84%89%E1%85%A5%E1%86%AB%E1%84%87%E1%85%A7%E1%86%AF%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5.pdf',
      },
      {
        label: '16~17개월용 선별검사지',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EC%98%81%EC%9C%A0%EC%95%84%EA%B2%80%EC%A7%84%EB%AC%B8%EC%A7%84%ED%91%9C/%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B2%E1%84%8B%E1%85%A1%E1%84%87%E1%85%A1%E1%86%AF%E1%84%83%E1%85%A1%E1%86%AF%E1%84%89%E1%85%A5%E1%86%AB%E1%84%87%E1%85%A7%E1%86%AF%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5/16~17%E1%84%80%E1%85%A2%E1%84%8B%E1%85%AF%E1%86%AF%E1%84%8B%E1%85%AD%E1%86%BC+%E1%84%89%E1%85%A5%E1%86%AB%E1%84%87%E1%85%A7%E1%86%AF%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5.pdf',
      },
      {
        label: '18~19개월용 선별검사지',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EC%98%81%EC%9C%A0%EC%95%84%EA%B2%80%EC%A7%84%EB%AC%B8%EC%A7%84%ED%91%9C/%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B2%E1%84%8B%E1%85%A1%E1%84%87%E1%85%A1%E1%86%AF%E1%84%83%E1%85%A1%E1%86%AF%E1%84%89%E1%85%A5%E1%86%AB%E1%84%87%E1%85%A7%E1%86%AF%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5/18~19%E1%84%80%E1%85%A2%E1%84%8B%E1%85%AF%E1%86%AF%E1%84%8B%E1%85%AD%E1%86%BC+%E1%84%89%E1%85%A5%E1%86%AB%E1%84%87%E1%85%A7%E1%86%AF%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5.pdf',
      },
    ],
    [
      {
        label: '20~21개월용 선별검사지',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EC%98%81%EC%9C%A0%EC%95%84%EA%B2%80%EC%A7%84%EB%AC%B8%EC%A7%84%ED%91%9C/%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B2%E1%84%8B%E1%85%A1%E1%84%87%E1%85%A1%E1%86%AF%E1%84%83%E1%85%A1%E1%86%AF%E1%84%89%E1%85%A5%E1%86%AB%E1%84%87%E1%85%A7%E1%86%AF%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5/20~21%E1%84%80%E1%85%A2%E1%84%8B%E1%85%AF%E1%86%AF%E1%84%8B%E1%85%AD%E1%86%BC+%E1%84%89%E1%85%A5%E1%86%AB%E1%84%87%E1%85%A7%E1%86%AF%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5.pdf',
      },
      {
        label: '22~23개월용 선별검사지',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EC%98%81%EC%9C%A0%EC%95%84%EA%B2%80%EC%A7%84%EB%AC%B8%EC%A7%84%ED%91%9C/%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B2%E1%84%8B%E1%85%A1%E1%84%87%E1%85%A1%E1%86%AF%E1%84%83%E1%85%A1%E1%86%AF%E1%84%89%E1%85%A5%E1%86%AB%E1%84%87%E1%85%A7%E1%86%AF%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5/22~23%E1%84%80%E1%85%A2%E1%84%8B%E1%85%AF%E1%86%AF%E1%84%8B%E1%85%AD%E1%86%BC+%E1%84%89%E1%85%A5%E1%86%AB%E1%84%87%E1%85%A7%E1%86%AF%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5.pdf',
      },
      {
        label: '24~26개월용 선별검사지',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EC%98%81%EC%9C%A0%EC%95%84%EA%B2%80%EC%A7%84%EB%AC%B8%EC%A7%84%ED%91%9C/%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B2%E1%84%8B%E1%85%A1%E1%84%87%E1%85%A1%E1%86%AF%E1%84%83%E1%85%A1%E1%86%AF%E1%84%89%E1%85%A5%E1%86%AB%E1%84%87%E1%85%A7%E1%86%AF%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5/24~26%E1%84%80%E1%85%A2%E1%84%8B%E1%85%AF%E1%86%AF%E1%84%8B%E1%85%AD%E1%86%BC+%E1%84%89%E1%85%A5%E1%86%AB%E1%84%87%E1%85%A7%E1%86%AF%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5.pdf',
      },
      {
        label: '27~29개월용 선별검사지',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EC%98%81%EC%9C%A0%EC%95%84%EA%B2%80%EC%A7%84%EB%AC%B8%EC%A7%84%ED%91%9C/%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B2%E1%84%8B%E1%85%A1%E1%84%87%E1%85%A1%E1%86%AF%E1%84%83%E1%85%A1%E1%86%AF%E1%84%89%E1%85%A5%E1%86%AB%E1%84%87%E1%85%A7%E1%86%AF%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5/27~29%E1%84%80%E1%85%A2%E1%84%8B%E1%85%AF%E1%86%AF%E1%84%8B%E1%85%AD%E1%86%BC+%E1%84%89%E1%85%A5%E1%86%AB%E1%84%87%E1%85%A7%E1%86%AF%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5.pdf',
      },
    ],
    [
      {
        label: '30~32개월용 선별검사지',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EC%98%81%EC%9C%A0%EC%95%84%EA%B2%80%EC%A7%84%EB%AC%B8%EC%A7%84%ED%91%9C/%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B2%E1%84%8B%E1%85%A1%E1%84%87%E1%85%A1%E1%86%AF%E1%84%83%E1%85%A1%E1%86%AF%E1%84%89%E1%85%A5%E1%86%AB%E1%84%87%E1%85%A7%E1%86%AF%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5/30~32%E1%84%80%E1%85%A2%E1%84%8B%E1%85%AF%E1%86%AF%E1%84%8B%E1%85%AD%E1%86%BC+%E1%84%89%E1%85%A5%E1%86%AB%E1%84%87%E1%85%A7%E1%86%AF%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5.pdf',
      },
      {
        label: '33~35개월용 선별검사지',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EC%98%81%EC%9C%A0%EC%95%84%EA%B2%80%EC%A7%84%EB%AC%B8%EC%A7%84%ED%91%9C/%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B2%E1%84%8B%E1%85%A1%E1%84%87%E1%85%A1%E1%86%AF%E1%84%83%E1%85%A1%E1%86%AF%E1%84%89%E1%85%A5%E1%86%AB%E1%84%87%E1%85%A7%E1%86%AF%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5/33~35%E1%84%80%E1%85%A2%E1%84%8B%E1%85%AF%E1%86%AF%E1%84%8B%E1%85%AD%E1%86%BC+%E1%84%89%E1%85%A5%E1%86%AB%E1%84%87%E1%85%A7%E1%86%AF%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5.pdf',
      },
      {
        label: '36~41개월용 선별검사지',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EC%98%81%EC%9C%A0%EC%95%84%EA%B2%80%EC%A7%84%EB%AC%B8%EC%A7%84%ED%91%9C/%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B2%E1%84%8B%E1%85%A1%E1%84%87%E1%85%A1%E1%86%AF%E1%84%83%E1%85%A1%E1%86%AF%E1%84%89%E1%85%A5%E1%86%AB%E1%84%87%E1%85%A7%E1%86%AF%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5/36~41%E1%84%80%E1%85%A2%E1%84%8B%E1%85%AF%E1%86%AF%E1%84%8B%E1%85%AD%E1%86%BC+%E1%84%89%E1%85%A5%E1%86%AB%E1%84%87%E1%85%A7%E1%86%AF%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5.pdf',
      },
      {
        label: '42~47개월용 선별검사지',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EC%98%81%EC%9C%A0%EC%95%84%EA%B2%80%EC%A7%84%EB%AC%B8%EC%A7%84%ED%91%9C/%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B2%E1%84%8B%E1%85%A1%E1%84%87%E1%85%A1%E1%86%AF%E1%84%83%E1%85%A1%E1%86%AF%E1%84%89%E1%85%A5%E1%86%AB%E1%84%87%E1%85%A7%E1%86%AF%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5/42~47%E1%84%80%E1%85%A2%E1%84%8B%E1%85%AF%E1%86%AF%E1%84%8B%E1%85%AD%E1%86%BC+%E1%84%89%E1%85%A5%E1%86%AB%E1%84%87%E1%85%A7%E1%86%AF%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5.pdf',
      },
    ],
    [
      {
        label: '48~53개월용 선별검사지',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EC%98%81%EC%9C%A0%EC%95%84%EA%B2%80%EC%A7%84%EB%AC%B8%EC%A7%84%ED%91%9C/%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B2%E1%84%8B%E1%85%A1%E1%84%87%E1%85%A1%E1%86%AF%E1%84%83%E1%85%A1%E1%86%AF%E1%84%89%E1%85%A5%E1%86%AB%E1%84%87%E1%85%A7%E1%86%AF%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5/48~53%E1%84%80%E1%85%A2%E1%84%8B%E1%85%AF%E1%86%AF%E1%84%8B%E1%85%AD%E1%86%BC+%E1%84%89%E1%85%A5%E1%86%AB%E1%84%87%E1%85%A7%E1%86%AF%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5.pdf',
      },
      {
        label: '54~59개월용 선별검사지',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EC%98%81%EC%9C%A0%EC%95%84%EA%B2%80%EC%A7%84%EB%AC%B8%EC%A7%84%ED%91%9C/%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B2%E1%84%8B%E1%85%A1%E1%84%87%E1%85%A1%E1%86%AF%E1%84%83%E1%85%A1%E1%86%AF%E1%84%89%E1%85%A5%E1%86%AB%E1%84%87%E1%85%A7%E1%86%AF%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5/54~59%E1%84%80%E1%85%A2%E1%84%8B%E1%85%AF%E1%86%AF%E1%84%8B%E1%85%AD%E1%86%BC+%E1%84%89%E1%85%A5%E1%86%AB%E1%84%87%E1%85%A7%E1%86%AF%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5.pdf',
      },
      {
        label: '60~65개월용 선별검사지',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EC%98%81%EC%9C%A0%EC%95%84%EA%B2%80%EC%A7%84%EB%AC%B8%EC%A7%84%ED%91%9C/%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B2%E1%84%8B%E1%85%A1%E1%84%87%E1%85%A1%E1%86%AF%E1%84%83%E1%85%A1%E1%86%AF%E1%84%89%E1%85%A5%E1%86%AB%E1%84%87%E1%85%A7%E1%86%AF%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5/60~65%E1%84%80%E1%85%A2%E1%84%8B%E1%85%AF%E1%86%AF%E1%84%8B%E1%85%AD%E1%86%BC+%E1%84%89%E1%85%A5%E1%86%AB%E1%84%87%E1%85%A7%E1%86%AF%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5.pdf',
      },
      {
        label: '66~71개월용 선별검사지',
        link: 'https://smartnurse-standard-video-bucket.s3.ap-northeast-2.amazonaws.com/%EC%98%81%EC%9C%A0%EC%95%84%EA%B2%80%EC%A7%84%EB%AC%B8%EC%A7%84%ED%91%9C/%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B2%E1%84%8B%E1%85%A1%E1%84%87%E1%85%A1%E1%86%AF%E1%84%83%E1%85%A1%E1%86%AF%E1%84%89%E1%85%A5%E1%86%AB%E1%84%87%E1%85%A7%E1%86%AF%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5/66~71%E1%84%80%E1%85%A2%E1%84%8B%E1%85%AF%E1%86%AF%E1%84%8B%E1%85%AD%E1%86%BC+%E1%84%89%E1%85%A5%E1%86%AB%E1%84%87%E1%85%A7%E1%86%AF%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5.pdf',
      },
    ],
  ];

  return (
    <Box sx={{ margin: '40px' }}>
      <SectionTitle title="영유아발달 선별 검사지 다운로드" />

      <RowContainer xs={12}>
        <RowContent title="">
          {비읍시옷.map(item => {
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
              </Stack>
            );
          })}
        </RowContent>
      </RowContainer>
    </Box>
  );
}

export default Contents3;
