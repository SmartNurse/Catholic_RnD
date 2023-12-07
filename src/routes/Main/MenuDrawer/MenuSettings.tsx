import { Fragment, useState } from 'react';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  AccountCircleOutlined,
  LogoutOutlined,
  NotificationsOutlined,
  DateRangeOutlined,
  VideocamOutlined,
  ComputerOutlined,
  MedicalInformationOutlined,
  ExpandMore,
  VideoLibraryOutlined,
} from '@mui/icons-material';
import { TbMessagePlus } from 'react-icons/tb';

import { AiOutlineCalculator } from 'react-icons/ai';
import { BsCardChecklist } from 'react-icons/bs';
import { MdPeopleAlt } from 'react-icons/md';

import { ReactComponent as ProPlus } from '../../../assets/proPlus.svg';
import { ReactComponent as ExempleVideo } from '../../../assets/exempleVideo.svg';

import useUser from 'store/user/useUser';
import { useNavigate } from 'react-router-dom';
import useStudent from 'store/student/useStudent';
import useSurvey from 'store/survey/useSurvey';
import usePatient from 'store/patient/usePatient';
import useNotification from 'hooks/useNotification';
import { IToggleObj } from './type';
import { initialToggleObj } from './initialStates';
import Survey from '../Survey';

interface Props {
  menuDrawerWidth: number;
  setMenuDrawerWidth: (menuDrawerWidth: number) => void;
}

const MenuSettings = (props: Props) => {
  const { menuDrawerWidth, setMenuDrawerWidth } = props;

  const navigate = useNavigate();
  const { onSignOut, isStudent } = useUser();
  const { onCloseReadOnly, onUpdateSurveyType } = useSurvey();
  const { onResetStudent } = useStudent();
  const { patientInfo, onResetPatient } = usePatient();
  const { onRequired } = useNotification();

  const [toggle, setToggle] = useState<IToggleObj>(initialToggleObj);

  // 학생 메뉴와 교수 메뉴 변경
  const settings = isStudent
    ? [
        {
          isPro: true,
          icon: <TbMessagePlus />,
          label: '간호과정 서술기록',
        },
        {
          disabled: true,
          icon: <MedicalInformationOutlined />,
          label: '간호정보학',
          id: 'medical_information',
        },
        {
          label: '응급 모니터링시스템',
          toggle: toggle.medical_information,
        },
        {
          label: '보건의료빅데이터개방시스템',
          toggle: toggle.medical_information,
        },
        {
          label: '한국보건의료정보원',
          toggle: toggle.medical_information,
        },
        {
          label: 'ICNP brower',
          toggle: toggle.medical_information,
        },
        {
          label: 'Chat GPT',
          toggle: toggle.medical_information,
        },
        {
          label: 'Google BARD',
          toggle: toggle.medical_information,
        },
        {
          label: 'CLOVA X',
          toggle: toggle.medical_information,
        },
        {
          isPro: true,
          icon: <AiOutlineCalculator />,
          label: '약물계산기',
        },
        {
          disabled: true,
          isPro: true,
          icon: <BsCardChecklist />,
          label: '간호기록체크리스트',
          id: 'nurse_record',
        },
        {
          isPro: true,
          label: '병동',
          toggle: toggle.nurse_record,
        },
        {
          isPro: true,
          label: '응급실',
          toggle: toggle.nurse_record,
        },
        {
          isPro: true,
          label: '수술실',
          toggle: toggle.nurse_record,
        },
        {
          isPro: true,
          icon: <DateRangeOutlined />,
          label: '간호사 근무 스케줄표',
        },
        {
          icon: <NotificationsOutlined />,
          label: '공지사항',
        },
        {
          isPro: true,
          icon: <VideocamOutlined />,
          label: '핵심간호술기영상 저장',
        },
        {
          isPro: true,
          icon: <VideoLibraryOutlined />,
          label: '핵심간호술기영상 예시',
        },
        {
          isPro: true,
          icon: <ComputerOutlined />,
          label: '화면설정',
        },
        {
          icon: <AccountCircleOutlined />,
          label: '계정설정 및 수정',
        },
        {
          icon: <LogoutOutlined />,
          label: '로그아웃',
        },
      ]
    : [
        {
          isPro: true,
          icon: <TbMessagePlus />,
          label: '간호과정 서술기록',
        },
        {
          disabled: true,
          icon: <MedicalInformationOutlined />,
          label: '간호정보학',
          id: 'medical_information',
        },
        {
          label: '응급 모니터링시스템',
          toggle: toggle.medical_information,
        },
        {
          label: '보건의료빅데이터개방시스템',
          toggle: toggle.medical_information,
        },
        {
          label: '한국보건의료정보원',
          toggle: toggle.medical_information,
        },
        {
          label: 'ICNP brower',
          toggle: toggle.medical_information,
        },
        {
          label: 'Chat GPT',
          toggle: toggle.medical_information,
        },
        {
          label: 'Google BARD',
          toggle: toggle.medical_information,
        },
        {
          label: 'CLOVA X',
          toggle: toggle.medical_information,
        },
        {
          isPro: true,
          icon: <AiOutlineCalculator />,
          label: '약물계산기',
        },
        {
          disabled: true,
          isPro: true,
          icon: <BsCardChecklist />,
          label: '간호기록체크리스트',
          id: 'nurse_record',
        },
        {
          isPro: true,
          label: '병동',
          toggle: toggle.nurse_record,
        },
        {
          isPro: true,
          label: '응급실',
          toggle: toggle.nurse_record,
        },
        {
          isPro: true,
          label: '수술실',
          toggle: toggle.nurse_record,
        },
        {
          isPro: true,
          icon: <DateRangeOutlined />,
          label: '간호사 근무 스케줄표',
        },
        {
          icon: <NotificationsOutlined />,
          label: '공지사항',
        },
        {
          isPro: true,
          icon: <MdPeopleAlt />,
          label: '학생 기록 관리',
        },
        {
          isPro: true,
          icon: <VideocamOutlined />,
          label: '핵심간호술기영상 저장',
        },
        {
          isPro: true,
          icon: <VideoLibraryOutlined />,
          label: '핵심간호술기영상 예시',
        },
        {
          isPro: true,
          icon: <ComputerOutlined />,
          label: '화면설정',
        },
        {
          icon: <AccountCircleOutlined />,
          label: '계정설정 및 수정',
        },
        {
          icon: <LogoutOutlined />,
          label: '로그아웃',
        },
      ];

  const onClickListItem = (label: string) => {
    if (label === '로그아웃') {
      onSignOut();
      // 로그아웃 시 스토어 초기화
      onResetStudent();
      onResetPatient();
      onCloseReadOnly();
    } else if (label === '계정설정 및 수정') {
      navigate('/mypage');
      return;
    } else if (label === '화면설정') {
      navigate('/screensetting');
      return;
    } else if (label === '공지사항') {
      window.open('https://www.smartnurse.co.kr/enrnotice');
      return;
    } else if (label === '응급 모니터링시스템') {
      window.open('http://dw.nemc.or.kr/nemcMonitoring/mainmgr/Main.do');
      return;
    } else if (label === '보건의료빅데이터개방시스템') {
      window.open('https://opendata.hira.or.kr/home.do');
      return;
    } else if (label === '한국보건의료정보원') {
      window.open('https://www.k-his.or.kr/');
      return;
    } else if (label === 'ICNP brower') {
      window.open('https://www.icn.ch/icnp-browser');
      return;
    } else if (label === 'Chat GPT') {
      window.open('https://chat.openai.com/chat');
      return;
    } else if (label === 'Google BARD') {
      window.open('https://bard.google.com/');
      return;
    } else if (label === 'CLOVA X') {
      window.open('https://clova-x.naver.com');
    } else if (label === '간호사 근무 스케줄표') {
      window.open('https://dutymaker.com/');
      return;
    } else if (label === '학생 기록 관리') {
      window.open('/#/coreSkillVideo');
      return;
    } else if (!patientInfo) return onRequired('REQUIRED.PATIENT');
    onUpdateSurveyType(label);
  };

  const onClickDisabledItem = (sublabel: string | undefined) => {
    let newToggle = { ...toggle };

    if (menuDrawerWidth !== 220) {
      if (sublabel) newToggle[sublabel] = true;
      setToggle(newToggle);
      setMenuDrawerWidth(220);
      return;
    }

    if (sublabel) newToggle[sublabel] = !newToggle[sublabel];
    setToggle(newToggle);
  };

  return (
    <Fragment>
      {settings.map(({ icon, label, isPro, disabled, toggle, id }) => {
        const onClick = () => {
          if (disabled) onClickDisabledItem(id);
          else onClickListItem(label);
        };

        const MoreIcon = () => {
          if (!disabled) return null;
          return <ExpandMore fontSize="small" sx={{ color: '#fff' }} />;
        };

        const ProIcon = () => {
          if (!isPro) return null;
          return <ProPlus />;
        };

        return (
          <>
            {menuDrawerWidth !== 220 ? (
              icon ? (
                <ListItem key={label} disablePadding>
                  <ListItemButton onClick={onClick}>
                    <ListItemIcon>{icon}</ListItemIcon>
                  </ListItemButton>
                </ListItem>
              ) : null
            ) : icon ? (
              <ListItem key={label} disablePadding>
                <ListItemButton onClick={onClick}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={label} />
                  <ProIcon />
                  <MoreIcon />
                </ListItemButton>
              </ListItem>
            ) : toggle ? (
              <ListItem key={label} disablePadding>
                <ListItemButton
                  className={isPro ? 'isPro' : ''}
                  onClick={onClick}
                >
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText
                    primary={label}
                    sx={{ whiteSpace: 'pre-wrap' }}
                  />
                  <ProIcon />
                  <MoreIcon />
                </ListItemButton>
              </ListItem>
            ) : (
              <></>
            )}
          </>
        );
      })}
      <Survey />
    </Fragment>
  );
};

export default MenuSettings;
