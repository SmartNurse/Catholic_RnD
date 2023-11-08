import { Box, Toolbar, Skeleton, useTheme } from '@mui/material';

import { StyledContentContainer } from '../../Main/style';
import SearchToolbar from './SearchToolbar';

import Advertisement from './Advertisement';
import usePatient from 'store/patient/usePatient';
import VideoContents from './VideoContents/VideoContents';

import useSelectorTyped from 'store/useSelectorTyped';

interface Props {
  menuDrawerWidth: number;
  menuState: string;
}

const DisplayInformation = (props: Props) => {
  const { palette } = useTheme();
  const { menuDrawerWidth, menuState } = props;
  console.log('menuState', menuState);

  // shallowEqual 해도 리렌더링 발생해서 이곳만 별도로 선택해서 사용
  const patientInfo = useSelectorTyped(state => state.patient.patient);
  // console.log(
  //   'patientInfo : ',
  //   useSelectorTyped(state => state)
  // );
  const containerWidth = {
    xs:
      menuDrawerWidth !== 220
        ? `calc(100%)`
        : `calc(100% - ${menuDrawerWidth}px)`,
    xl:
      menuDrawerWidth !== 220
        ? `calc(100% - ${menuDrawerWidth}px )`
        : `calc(100% - ${menuDrawerWidth}px )`,
  };

  const Content = () => {
    const contentBoxProps = {
      display: 'flex',
      mt: 2.5,
      columnGap: 2.5,
      overflow: 'hidden',
      height: 'calc(100% - 180px)',
    };

    if (!patientInfo) {
      return (
        <Box {...contentBoxProps}>
          <Box flex={1} display="flex" flexDirection="column" overflow="auto">
            <Skeleton variant="rectangular" sx={{ flex: 1 }} />
          </Box>
          <Box flex={1} display="flex" flexDirection="column" overflow="auto">
            <Skeleton variant="rectangular" sx={{ flex: 1 }} />
          </Box>
        </Box>
      );
    }

    if (menuState === '핵심간호술기영상 관리') {
      return (
        <Box>
          <VideoContents patientInfo={patientInfo} />
        </Box>
      );
    } else {
      return (
        <Box>
          {/* <ContentsVideo patientInfo={patientInfo} /> */}
          ㅋㅋㅋㅋ도ㅒㅆ다!
        </Box>
      );
    }
  };

  return (
    <Box
      display="flex"
      component="main"
      flexDirection="column"
      width={containerWidth}
    >
      <Toolbar sx={{ boxShadow: '-4px 4px 10px rgba(0, 0, 0, 0.04)' }}>
        <SearchToolbar />
        <Advertisement />
      </Toolbar>

      <StyledContentContainer
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: `${palette.primary.light}`,
        }}
      >
        <Content />
      </StyledContentContainer>
    </Box>
  );
};

export default DisplayInformation;
