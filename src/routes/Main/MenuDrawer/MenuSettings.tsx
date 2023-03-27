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
} from '@mui/icons-material';
import { ReactComponent as ProPlus } from "../../../assets/proPlus.svg";
import { ReactComponent as ExempleVideo } from '../../../assets/exempleVideo.svg';
import useUser from 'store/user/useUser';
import { useNavigate } from 'react-router-dom';
import useStudent from 'store/student/useStudent';
import useSurvey from 'store/survey/useSurvey';
import usePatient from 'store/patient/usePatient';
import useNotification from 'hooks/useNotification';
import { ISettingsToggleObj } from './type';
import { initialSettingsToggleObj } from './initialStates';

interface Props {
  menuDrawerWidth: number;
  setMenuDrawerWidth: (menuDrawerWidth: number) => void;
}

const MenuSettings = (props: Props) => {
  const { menuDrawerWidth, setMenuDrawerWidth } = props;

  const navigate = useNavigate();
  const { onSignOut } = useUser();
  const { onCloseReadOnly, onUpdateSurveyType } = useSurvey();
  const { student_uuid, onResetStudent } = useStudent();
  const { patientInfo, onSelectedPatient, onResetPatient } = usePatient();
  const { onRequired } = useNotification();

  const [toggle, setToggle] = useState<ISettingsToggleObj>(initialSettingsToggleObj);

  const settings = [
    {
      disabled: true,
      icon: <MedicalInformationOutlined />,
      label: '간호정보학',
      buttonClick: {
        onClick: () => {
          if (menuDrawerWidth !== 220) {
            setToggle({...toggle, medical_information: true});
            setMenuDrawerWidth(220);
            return;
          }

          setToggle({...toggle, medical_information: !toggle.medical_information});
        }
      }
    },
    {
      label: '응급 모니터링시스템',
      toggle: toggle.medical_information,
      buttonClick: {
        target: '_blank',
        href: 'http://dw.nemc.or.kr/nemcMonitoring/mainmgr/Main.do',
      }
    },
    {
      label: '보건의료빅데이터개방시스템',
      toggle: toggle.medical_information,
      buttonClick: {
        target: '_blank',
        href: 'https://opendata.hira.or.kr/home.do',
      }
    },
    {
      label: '한국보건의료정보원',
      toggle: toggle.medical_information,
      buttonClick: {
        target: '_blank',
        href: 'https://www.k-his.or.kr/',
      }
    },
    {
      isPro: true,
      icon: <DateRangeOutlined />,
      label: '간호사 근무 스케줄표',
      buttonClick: {
        target: '_blank',
        href: 'https://dutymaker.com/',
      }
    },
    {
      icon: <NotificationsOutlined />,
      label: '공지사항',
      buttonClick: {
        target: '_blank',
        href: 'https://www.smartnurse.co.kr/enrnotice',
      },
    },
    {
      isPro: true,
      icon: <VideocamOutlined />,
      label: '핵심간호술기영상 저장',
      buttonClick: {
        onClick: () => {
          if (!student_uuid) return onRequired('REQUIRED.STUDENT');
          if (!patientInfo) return onRequired('REQUIRED.PATIENT');
          onUpdateSurveyType("핵심간호술기영상 저장");
        },
      }
    },
    {
      isPro: true,
      icon: <ExempleVideo />,
      label: '핵심간호술기영상 예시',
      buttonClick: {
        onClick: () => {
          onUpdateSurveyType("핵심간호술기영상 예시");
          console.log('열려라');
        },
      }
    },
    {
      isPro: true,
      icon: <ComputerOutlined />,
      label: '화면설정',
      buttonClick: {
        onClick: () => navigate("/screensetting"),
      },
    },
    {
      icon: <AccountCircleOutlined />,
      label: '계정설정',
      buttonClick: {
        onClick: () => navigate('/mypage'),
      },
    },
    {
      icon: <LogoutOutlined />,
      label: '로그아웃',
      buttonClick: {
        onClick: () => {
          onSignOut();
          // 로그아웃 시 스토어 초기화
          onResetStudent();
          onResetPatient();
          onCloseReadOnly();
        },
      },
    },
  ];

  return (
    <Fragment>
      {settings.map(({ icon, label, buttonClick, isPro, disabled, toggle }) => {
        const ProIcon = () => {
          if (!isPro) return null;
          return <ProPlus />;
        };

        const MoreIcon = () => {
          if (!disabled) return null;
          return <ExpandMore fontSize="small" sx={{ color: '#fff' }} />;
        };
        
        return (
          <>
            {menuDrawerWidth !== 220 ?
              (icon ?
                <ListItem key={label} disablePadding>
                  <ListItemButton {...buttonClick}>
                    <ListItemIcon>{icon}</ListItemIcon>
                  </ListItemButton>
                </ListItem>
              :
                null
              )
            :
              (icon ?
                <ListItem key={label} disablePadding>
                  <ListItemButton {...buttonClick}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={label} />
                    <ProIcon />
                    <MoreIcon />
                  </ListItemButton>
                </ListItem>
              :
                (toggle ?
                  <ListItem key={label} disablePadding>
                    <ListItemButton {...buttonClick}>
                      <ListItemIcon>{icon}</ListItemIcon>
                      <ListItemText primary={label} />
                      <ProIcon />
                      <MoreIcon />
                    </ListItemButton>
                  </ListItem>
                :
                  <></>
                )
              )
            }
          </>
        );
      })}
    </Fragment>
  );
};

export default MenuSettings;
