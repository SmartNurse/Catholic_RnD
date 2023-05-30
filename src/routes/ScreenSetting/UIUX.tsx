import { Button, Stack, Typography } from '@mui/material';
import useNotification from 'hooks/useNotification';
import { setLocalStorage } from 'utils/storage';
import useUser from 'store/user/useUser';
import useStudent from 'store/student/useStudent';
import useSurvey from 'store/survey/useSurvey';
import usePatient from 'store/patient/usePatient';
import { ReactComponent as Bestcare } from 'assets/emr1.svg';
import Nu from 'assets/emr2.svg';

const UIUX = () => {
  const { onSuccess } = useNotification();

  const buttons = [
    {
      param: '가톨릭의료원 계열, 경희의료 중앙대의료원, 양지병원 등',
      text: 'nU(Neuro Ubiquitous System)',
      color: '#13AD74',
    },
    { param: '연세의료원', text: 'u-Severance 3.0', color: '#AD4751' },
    { param: '삼성서울병원', text: '삼성SDS 다윈', color: '#6A3A87' },
    { param: '한림대의료원', text: 'RefoMAX', color: '#333333' },
  ];

  return (
    <>
      <Typography fontWeight="700" fontSize="14px" lineHeight="30px">
        EMR 변경
      </Typography>
      <Stack spacing={5}>
        <Stack
          key={
            '서울대병원, 길병원, 충북대병원, 제주대병원, 이화의료원, 근로복지공단, 국립대병원계, 동산병원'
          }
          spacing={1}
        >
          <Button
            size="large"
            variant="contained"
            sx={{
              width: '660px',
              ':hover': {
                color: `#2264A8`,
                backgroundColor: 'white',
                border: `1px solid #2264A8`,
              },
              height: '100px',
              boxShadow: '0px 8px 8px 0px #0000001F',
              color: 'black',
              backgroundColor: `#EDF3FA`,
              whiteSpace: 'pre',
              fontSize: '19px',
            }}
            disabled={true}
            onClick={() => {
              setTimeout(() => {
                window.location.href = `http://amisasan.s3-website.kr.object.ncloudstorage.com/#/`;
              }, 1000);

              setLocalStorage(
                'theme_color',
                '서울대병원, 길병원, 충북대병원, 제주대병원, 이화의료원, 근로복지공단, 국립대병원계, 동산병원'
              );
              onSuccess(`화면 EMR이 서울아산병원으로 변경되었습니다`);
            }}
          >
            BESTCARE
          </Button>
          <Typography
            sx={{
              color: 'gray',
              fontSize: '14px',
              textAlign: 'center',
              width: '660px',
            }}
          >
            서울대병원, 길병원, 충북대병원, 제주대병원, 이화의료원,
            근로복지공단, 국립대병원계, 동산병원
            <br />
            테스트중입니다.
          </Typography>
        </Stack>

        <Stack
          key={'가톨릭의료원 계열, 경희의료 중앙대의료원, 양지병원 등'}
          spacing={1}
        >
          <Button
            variant="contained"
            sx={{
              width: '660px',
              ':hover': {
                color: `#2264A8`,
                backgroundColor: 'white',
                border: `1px solid #2264A8`,
              },
              height: '100px',
              boxShadow: '0px 8px 8px 0px #0000001F',
              color: 'black',
              backgroundColor: `#EDF3FA`,
              whiteSpace: 'pre',
              fontSize: '19px',
            }}
            disabled={true}
            onClick={() => {
              setTimeout(() => {
                window.location.href = `http://amisasan.s3-website.kr.object.ncloudstorage.com/#/`;
              }, 1000);

              setLocalStorage(
                'theme_color',
                '가톨릭의료원 계열, 경희의료 중앙대의료원, 양지병원 등'
              );
              onSuccess(`화면 EMR이 서울아산병원으로 변경되었습니다`);
            }}
          >
            nU(Neuro Ubiquitous System)
          </Button>
          <Typography
            sx={{
              color: 'gray',
              fontSize: '14px',
              textAlign: 'center',
              width: '660px',
            }}
          >
            가톨릭의료원 계열, 경희의료 중앙대의료원, 양지병원 등
            <br />
            테스트중입니다.
          </Typography>
        </Stack>

        <Stack key={'연세의료원'} spacing={1}>
          <Button
            size="large"
            variant="contained"
            sx={{
              width: '660px',
              ':hover': {
                color: `#2264A8`,
                backgroundColor: 'white',
                border: `1px solid #2264A8`,
              },
              height: '100px',
              boxShadow: '0px 8px 8px 0px #0000001F',
              color: 'black',
              backgroundColor: `#EDF3FA`,
              whiteSpace: 'pre',
              fontSize: '19px',
            }}
            disabled={true}
            onClick={() => {
              setTimeout(() => {
                window.location.href = `http://amisasan.s3-website.kr.object.ncloudstorage.com/#/`;
              }, 1000);

              setLocalStorage('theme_color', '연세의료원');
              onSuccess(`화면 EMR이 서울아산병원으로 변경되었습니다`);
            }}
          >
            u-Severance 3.0
          </Button>
          <Typography
            sx={{
              color: 'gray',
              fontSize: '14px',
              textAlign: 'center',
              width: '660px',
            }}
          >
            연세의료원
            <br />
            테스트중입니다.
          </Typography>
        </Stack>

        <Stack key={'삼성서울병원'} spacing={1}>
          <Button
            size="large"
            variant="contained"
            sx={{
              width: '660px',
              ':hover': {
                color: `#2264A8`,
                backgroundColor: 'white',
                border: `1px solid #2264A8`,
              },
              height: '100px',
              boxShadow: '0px 8px 8px 0px #0000001F',
              color: 'black',
              backgroundColor: `#EDF3FA`,
              whiteSpace: 'pre',
              fontSize: '19px',
            }}
            disabled={true}
            onClick={() => {
              setTimeout(() => {
                window.location.href = `http://amisasan.s3-website.kr.object.ncloudstorage.com/#/`;
              }, 1000);

              setLocalStorage('theme_color', '삼성서울병원');
              onSuccess(`화면 EMR이 서울아산병원으로 변경되었습니다`);
            }}
          >
            삼성SDS 다윈
          </Button>
          <Typography
            sx={{
              color: 'gray',
              fontSize: '14px',
              textAlign: 'center',
              width: '660px',
            }}
          >
            삼성서울병원
            <br />
            테스트중입니다.
          </Typography>
        </Stack>

        <Stack key={'서울아산병원'} spacing={1}>
          <Button
            size="large"
            variant="contained"
            sx={{
              width: '660px',
              ':hover': {
                color: `#2264A8`,
                backgroundColor: 'white',
                border: `1px solid #2264A8`,
              },
              height: '100px',
              boxShadow: '0px 8px 8px 0px #0000001F',
              color: 'black',
              backgroundColor: `#EDF3FA`,
              whiteSpace: 'pre',
              fontSize: '19px',
            }}
            onClick={() => {
              setTimeout(() => {
                window.open(
                  'http://amisasan.s3-website.kr.object.ncloudstorage.com/#/'
                );
              }, 1000);

              setLocalStorage('theme_color', '서울아산병원');
              onSuccess(`화면 EMR이 서울아산병원으로 변경되었습니다`);
            }}
          >
            AMIS 3.0
          </Button>
          <Typography
            sx={{
              color: 'gray',
              fontSize: '14px',
              textAlign: 'center',
              width: '660px',
            }}
          >
            서울아산병원
          </Typography>
        </Stack>

        <Stack key={'한림대의료원'} spacing={1}>
          <Button
            size="large"
            variant="contained"
            sx={{
              width: '660px',
              ':hover': {
                color: `#2264A8`,
                backgroundColor: 'white',
                border: `1px solid #2264A8`,
              },
              height: '100px',
              boxShadow: '0px 8px 8px 0px #0000001F',
              color: 'black',
              backgroundColor: `#EDF3FA`,
              whiteSpace: 'pre',
              fontSize: '19px',
            }}
            disabled={true}
            onClick={() => {
              setTimeout(() => {
                window.location.href = `http://amisasan.s3-website.kr.object.ncloudstorage.com/#/`;
              }, 1000);

              setLocalStorage('theme_color', '한림대의료원');
              onSuccess(`화면 EMR이 서울아산병원으로 변경되었습니다`);
            }}
          >
            RefoMAX
          </Button>
          <Typography
            sx={{
              color: 'gray',
              fontSize: '14px',
              textAlign: 'center',
              width: '660px',
            }}
          >
            한림대의료원
            <br />
            테스트중입니다.
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default UIUX;
