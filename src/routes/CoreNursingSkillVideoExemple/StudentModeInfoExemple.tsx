import useUser from 'store/user/useUser';
import Form from 'components/Form';
import RowContainer from '../Main/Survey/components/RowContainer';

import {
  Typography,
  Stack,
  useTheme,
  Grid,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
} from '@mui/material';
import { ReactComponent as PlayBtn } from '../../assets/playBtn.svg';

interface Props {
  disabled?: boolean;
  totalSize: number;
}

const StudentModeInfoExemple = (props: Props) => {
  const { palette } = useTheme();

  const { totalSize } = props;

  function createData(id: number, title: string, link: string) {
    return { id, title, link };
  }

  const rows = [
    createData(
      1,
      '입원 관리하기',
      'http://yswpub3.synology.me/smspdf/revision2023_song_fundamentalsofnursing_video/2023_QR_01.mp4'
    ),
    createData(
      2,
      '욕창 및 낙상예방 간호 (낙상) : 핵심간호술기',
      'http://yswpub3.synology.me/smspdf/revision2023_song_fundamentalsofnursing_video/2023_QR_02.mp4'
    ),
    createData(
      3,
      '격리가운과 보호장구 착용',
      'http://yswpub3.synology.me/smspdf/revision2023_song_fundamentalsofnursing_video/2023_QR_03.mp4'
    ),
    createData(
      4,
      '레벨D 보호복 입기와 벗기',
      'http://yswpub3.synology.me/smspdf/revision2023_song_fundamentalsofnursing_video/2023_QR_04.mp4'
    ),
    createData(
      5,
      '멸균장갑 끼기와 벗기',
      'http://yswpub3.synology.me/smspdf/revision2023_song_fundamentalsofnursing_video/2023_QR_05.mp4'
    ),
    createData(
      6,
      '멸균영역 만들고 유지하기',
      'http://yswpub3.synology.me/smspdf/revision2023_song_fundamentalsofnursing_video/2023_QR_06.mp4'
    ),
    createData(
      7,
      '보호장구 착용 및 폐기물 관리',
      'http://yswpub3.synology.me/smspdf/revision2023_song_fundamentalsofnursing_video/2023_QR_07.mp4'
    ),
    createData(
      8,
      '수술전간호',
      'http://yswpub3.synology.me/smspdf/revision2023_song_fundamentalsofnursing_video/2023_QR_08.mp4'
    ),
    createData(
      9,
      '수술후간호',
      'http://yswpub3.synology.me/smspdf/revision2023_song_fundamentalsofnursing_video/2023_QR_09.mp4'
    ),
    createData(
      10,
      '배액관 관리 : 핵심간호술기',
      'http://yswpub3.synology.me/smspdf/revision2023_song_fundamentalsofnursing_video/2023_QR_10.mp4'
    ),
    createData(
      11,
      '활력징후측정 : 핵심간호술기',
      'http://yswpub3.synology.me/smspdf/revision2023_song_fundamentalsofnursing_video/2023_QR_11.mp4'
    ),
    createData(
      12,
      '간이혈당측정',
      'http://yswpub3.synology.me/smspdf/revision2023_song_fundamentalsofnursing_video/2023_QR_12.mp4'
    ),
    createData(
      13,
      '경구투약 : 핵심간호술기',
      'http://yswpub3.synology.me/smspdf/revision2023_song_fundamentalsofnursing_video/2023_QR_13.mp4'
    ),
    createData(
      14,
      '주사약 준비하기',
      'http://yswpub3.synology.me/smspdf/revision2023_song_fundamentalsofnursing_video/2023_QR_14.mp4'
    ),
    createData(
      15,
      '피내주사 : 핵심간호술기',
      'http://yswpub3.synology.me/smspdf/revision2023_song_fundamentalsofnursing_video/2023_QR_15.mp4'
    ),
    createData(
      16,
      '피하주사 : 핵심간호술기',
      'http://yswpub3.synology.me/smspdf/revision2023_song_fundamentalsofnursing_video/2023_QR_16.mp4'
    ),
    createData(
      17,
      '피하주사 : 펜형 인슐린 주사',
      'http://yswpub3.synology.me/smspdf/revision2023_song_fundamentalsofnursing_video/2023_QR_17.mp4'
    ),
    createData(
      18,
      '근육주사 : 핵심간호술기',
      'http://yswpub3.synology.me/smspdf/revision2023_song_fundamentalsofnursing_video/2023_QR_18.mp4'
    ),
    createData(
      19,
      'Z-경로 주사',
      'http://yswpub3.synology.me/smspdf/revision2023_song_fundamentalsofnursing_video/2023_QR_19.mp4'
    ),
    createData(
      20,
      '정맥주입 수액 용기에 약물 첨가하기',
      'http://yswpub3.synology.me/smspdf/revision2023_song_fundamentalsofnursing_video/2023_QR_20.mp4'
    ),
    createData(
      21,
      '정맥 수액주입 : 핵심간호술기',
      'http://yswpub3.synology.me/smspdf/revision2023_song_fundamentalsofnursing_video/2023_QR_21.mp4'
    ),
    createData(
      22,
      '정맥 내 일회용량 주입',
      'http://yswpub3.synology.me/smspdf/revision2023_song_fundamentalsofnursing_video/2023_QR_22.mp4'
    ),
    createData(
      23,
      '간헐적 정맥 주입 장치를 이용한 약물주입',
      'http://yswpub3.synology.me/smspdf/revision2023_song_fundamentalsofnursing_video/2023_QR_23.mp4'
    ),
    createData(
      24,
      '3-way를 이용한 약물주입',
      'http://yswpub3.synology.me/smspdf/revision2023_song_fundamentalsofnursing_video/2023_QR_24.mp4'
    ),
    createData(
      25,
      '정맥주입 중 side shooting(3-way, Y연결관)과 2차 정맥주입',
      'http://yswpub3.synology.me/smspdf/revision2023_song_fundamentalsofnursing_video/2023_QR_25.mp4'
    ),
    createData(
      26,
      '정맥주입 중 side shooting(3-way, Y연결관)과 2차 정맥주입',
      'http://yswpub3.synology.me/smspdf/revision2023_song_fundamentalsofnursing_video/2023_QR_26.mp4'
    ),
    createData(
      27,
      '분무기 사용(Nebulizer Therapy)',
      'http://yswpub3.synology.me/smspdf/revision2023_song_fundamentalsofnursing_video/2023_QR_27.mp4'
    ),
    createData(
      28,
      '드레싱 적용',
      'http://yswpub3.synology.me/smspdf/revision2023_song_fundamentalsofnursing_video/2023_QR_28.mp4'
    ),
    createData(
      29,
      '말초산소포화도 측정과 심전도 모니터 : 핵심간호술기',
      'http://yswpub3.synology.me/smspdf/revision2023_song_fundamentalsofnursing_video/2023_QR_29.mp4'
    ),
    createData(
      30,
      '비강 캐뉼라(Canula)를 이용한 산소요법 : 핵심간호술기',
      'http://yswpub3.synology.me/smspdf/revision2023_song_fundamentalsofnursing_video/2023_QR_30.mp4'
    ),
    createData(
      31,
      '산소마스크(Mask)를 이용한 산소요법 : 산소투여법',
      'http://yswpub3.synology.me/smspdf/revision2023_song_fundamentalsofnursing_video/2023_QR_31.mp4'
    ),
    createData(
      32,
      '심호흡과 기침',
      'http://yswpub3.synology.me/smspdf/revision2023_song_fundamentalsofnursing_video/2023_QR_32.mp4'
    ),
    createData(
      33,
      '강화폐활량계(Incentive spirometer) 사용',
      'http://yswpub3.synology.me/smspdf/revision2023_song_fundamentalsofnursing_video/2023_QR_33.mp4'
    ),
    createData(
      34,
      '타진법(Percussion)',
      'http://yswpub3.synology.me/smspdf/revision2023_song_fundamentalsofnursing_video/2023_QR_34.mp4'
    ),
    createData(
      35,
      '진동법(Vibration)',
      'http://yswpub3.synology.me/smspdf/revision2023_song_fundamentalsofnursing_video/2023_QR_35.mp4'
    ),
    createData(
      36,
      '구강인두 흡인과 비강인두 흡인 : 핵심간호술기',
      'http://yswpub3.synology.me/smspdf/revision2023_song_fundamentalsofnursing_video/2023_QR_36.mp4'
    ),
    createData(
      37,
      '기관내 흡인(Endotracheal tube suction) 핵심간호술기',
      'http://yswpub3.synology.me/smspdf/revision2023_song_fundamentalsofnursing_video/2023_QR_37.mp4'
    ),
    createData(
      38,
      '기관절개관 흡인(tracheostomy suction)',
      'http://yswpub3.synology.me/smspdf/revision2023_song_fundamentalsofnursing_video/2023_QR_38.mp4'
    ),
    createData(
      39,
      '기관절개관 관리(tracheostomy care)',
      'http://yswpub3.synology.me/smspdf/revision2023_song_fundamentalsofnursing_video/2023_QR_39.mp4'
    ),
    createData(
      40,
      '기관절개관 커프(cuff)의 팽창',
      'http://yswpub3.synology.me/smspdf/revision2023_song_fundamentalsofnursing_video/2023_QR_40.mp4'
    ),
    createData(
      41,
      '비위관 삽입',
      'http://yswpub3.synology.me/smspdf/revision2023_song_fundamentalsofnursing_video/2023_QR_41.mp4'
    ),
    createData(
      42,
      '비위관 제거',
      'http://yswpub3.synology.me/smspdf/revision2023_song_fundamentalsofnursing_video/2023_QR_42.mp4'
    ),
    createData(
      43,
      '간헐적 위관영양 : 핵심간호술기',
      'http://yswpub3.synology.me/smspdf/revision2023_song_fundamentalsofnursing_video/2023_QR_43.mp4'
    ),
    createData(
      44,
      '간헐적 위관영양 : RTH 사용',
      'http://yswpub3.synology.me/smspdf/revision2023_song_fundamentalsofnursing_video/2023_QR_44.mp4'
    ),
    createData(
      45,
      '단순도뇨 : 핵심간호술기',
      'http://yswpub3.synology.me/smspdf/revision2023_song_fundamentalsofnursing_video/2023_QR_45.mp4'
    ),
    createData(
      46,
      '유치도뇨 : 핵심간호술기',
      'http://yswpub3.synology.me/smspdf/revision2023_song_fundamentalsofnursing_video/2023_QR_46.mp4'
    ),
    createData(
      47,
      '유치도뇨관 제거하기',
      'http://yswpub3.synology.me/smspdf/revision2023_song_fundamentalsofnursing_video/2023_QR_47.mp4'
    ),
    createData(
      48,
      '유치도뇨관에서 소변검사물의 무균적 채취',
      'http://yswpub3.synology.me/smspdf/revision2023_song_fundamentalsofnursing_video/2023_QR_48.mp4'
    ),
    createData(
      49,
      '배출관장 : 핵심간호술기',
      'http://yswpub3.synology.me/smspdf/revision2023_song_fundamentalsofnursing_video/2023_QR_49.mp4'
    ),
    createData(
      50,
      '기본 심폐소생술 및 제세동기 적용 : 핵심간호술기',
      'http://yswpub3.synology.me/smspdf/revision2023_song_fundamentalsofnursing_video/2023_QR_50.mp4'
    ),
  ];

  return (
    <TableContainer>
      <Table>
        <TableCell>
          <Typography
            color={palette.mode === 'dark' ? 'black' : palette.text.primary}
            fontSize={15}
            fontWeight="bold"
            sx={{
              width: 120,
              p: 1,
              backgroundColor:
                palette.mode === 'dark' ? 'lightgrey' : '#EDF3FA',
              textAlign: 'center',
            }}
          >
            영상 번호
          </Typography>
        </TableCell>
        <TableCell sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography
            color={palette.mode === 'dark' ? 'black' : palette.text.primary}
            fontSize={15}
            fontWeight="bold"
            sx={{
              width: 600,
              p: 1,
              backgroundColor:
                palette.mode === 'dark' ? 'lightgrey' : '#EDF3FA',
              textAlign: 'center',
            }}
          >
            영상 제목
          </Typography>
        </TableCell>
        <TableCell>
          <Typography
            color={palette.mode === 'dark' ? 'black' : palette.text.primary}
            fontSize={15}
            fontWeight="bold"
            sx={{
              width: 120,
              p: 1,
              backgroundColor:
                palette.mode === 'dark' ? 'lightgrey' : '#EDF3FA',
              textAlign: 'center',
            }}
          >
            바로보기
          </Typography>
        </TableCell>
        <TableBody>
          {rows.map(row => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell
                sx={{ paddingLeft: '4.2rem', fontWeight: 'bold', fontSize: 16 }}
              >
                {row.id}
              </TableCell>
              <TableCell sx={{ paddingLeft: '9rem', fontSize: 16 }}>
                {row.title}
              </TableCell>
              <TableCell sx={{ paddingLeft: '4.2rem' }}>
                <PlayBtn
                  onClick={() => window.open(`${row.link}`, '_blank')}
                  cursor="pointer"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StudentModeInfoExemple;
