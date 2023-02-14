import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import useUser from 'store/user/useUser';
import { getCookie } from 'utils/cookie';

import DisplayInformation from './DisplayInformation';
import InputInformation from './InputInformation';
import MenuDrawer from './MenuDrawer';
import Introduction from './Introduction';

import { CoachMark, ICoachProps } from "react-coach-mark";
import { Box, Typography, Stack, useTheme } from '@mui/material';

import { greenTheme, blueTheme, redTheme, purpleTheme, blackTheme } from 'styles/theme';

import { ReactComponent as Number01 } from "assets/icon-number-01.svg";
import { ReactComponent as Number02 } from "assets/icon-number-02.svg";
import { ReactComponent as Number03 } from "assets/icon-number-03.svg";
import { ReactComponent as Number04 } from "assets/icon-number-04.svg";
import { ReactComponent as Number05 } from "assets/icon-number-05.svg";

function Main() {
  const { palette } = useTheme();

  const navigate = useNavigate();
  const {
    student_name,
    student_uuid,
    student_grade,
    college_ci,
    college_name,
  } = useUser();

  useEffect(() => {
    if (student_uuid) return;
    navigate('/signin', { replace: true });
  }, [student_uuid, navigate]);

  const title = student_grade === 1 ? '간호사' : '(교수/조교)';
  const [menuDrawerWidth, setMenuDrawerWidth] = useState(220);

  /* Introduction 관련 */
  const [open, setOpen] = useState(false);
  /********************/
  
  /* 코치마크 관련 */
  const [show, setShow] = useState(false);

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  const [activatedNumber, setActivateNumber] = useState<number>(0);
  const NextButton = <button onClick={() => setActivateNumber(activatedNumber + 1)}>Next</button>;

  const coachList: Array<ICoachProps> = [
    {
        activate: activatedNumber === 0,
        component: 
          <Stack direction="row" spacing={1} alignItems="center">
            <Number01 fill={palette.primary.main} />
            <Typography sx={{ display: "flex"}}>
              <Typography sx={{ color: `${palette.primary.main}`}}>"환자 검색"</Typography>을 클릭해 가상환자를 선택해주세요!
            </Typography>
            {NextButton}
          </Stack>,
        reference: ref1,
        tooltip: { position: 'bottom' }
    },
    {
      activate: activatedNumber === 1,
      component:
        <Stack direction="row" spacing={1} alignItems="center">
          <Number02 fill={palette.primary.main} />
          <Typography sx={{ display: "flex"}}>
            환자 처방 내역과 다양한 기록지가 준비되어 있어요!
          </Typography>
          {NextButton}
        </Stack>,
      reference: ref2,
      tooltip: { position: 'right' }
    },
    {
      activate: activatedNumber === 2,
      component: 
        <Stack direction="row" spacing={1} alignItems="center">
          <Number03 fill={palette.primary.main} />
          <Typography sx={{ display: "flex"}}>
            <Typography sx={{ color: `${palette.primary.main}`}}>"V" 버튼</Typography>을 클릭하면 더 많은 메뉴가 보여요 확인해주세요!
          </Typography>
          {NextButton}
        </Stack>,
      reference: ref3,
      tooltip: { position: 'right' }
    },
    {
      activate: activatedNumber === 3,
      component: 
        <Stack direction="row" spacing={0.5} alignItems="center">
          <Number04 fill={palette.primary.main} />
          <Typography>
            인수인계를 위한 간단한
          </Typography>
          <Typography sx={{ color: `${palette.primary.main}`}}>메모는</Typography>
          <Typography>
            이곳에!
          </Typography>
          {NextButton}
        </Stack>,
      reference: ref4,
      tooltip: { position: 'left' }
    },
    {
      activate: activatedNumber === 4,
      component: 
        <Stack direction="row" spacing={1} alignItems="center">
          <Number05 fill={palette.primary.main} />
          <Typography sx={{ display: "flex"}}>
            간호기록을 작성해볼까요?
            <br/>
            우측 상단에 시간 선택을 한 후 기록을 입력하면 됩니다!
          </Typography>
          {NextButton}
        </Stack>,
      reference: ref5,
      tooltip: { position: 'left' }
    },
 ]

  const coach : ICoachProps = coachList[activatedNumber];
  /**************/

  /* 다시 보지 않기 체크박스 관련 */
  useEffect(() => {
    if (getCookie("no_intro") !== "true") setOpen(true);
  }, []);
  /*************************/

  return (
    <>
      <Introduction
        open={open}
        setOpen={setOpen}
        setShow={setShow}
      />
      <Box display="flex" minWidth={1440}>
        <MenuDrawer
          name={`${student_name} ${title}`}
          college_name={college_name}
          college_ci={college_ci}
          menuDrawerWidth={menuDrawerWidth}
          setMenuDrawerWidth={setMenuDrawerWidth}
          coachRefA={ref2}
          coachRefB={ref3}
        />
        <DisplayInformation
          menuDrawerWidth={menuDrawerWidth}
          coachRef={ref1}
        />
        <InputInformation
          coachRefA={ref4}
          coachRefB={ref5}
        />
      </Box>
      {show && <CoachMark {...coach} />}
    </>
  );
}

export default Main;
