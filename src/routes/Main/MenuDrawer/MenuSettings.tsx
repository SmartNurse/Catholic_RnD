import { Fragment } from 'react';
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
} from '@mui/icons-material';
import { ReactComponent as ProPlus } from "../../../assets/proPlus.svg";

import useUser from 'store/user/useUser';
import { useNavigate } from 'react-router-dom';
import useStudent from 'store/student/useStudent';
import useSurvey from 'store/survey/useSurvey';
import usePatient from 'store/patient/usePatient';
import useNotification from 'hooks/useNotification';

const MenuSettings = () => {
  const navigate = useNavigate();
  const { onSignOut } = useUser();
  const { onCloseReadOnly, onUpdateSurveyType } = useSurvey();
  const { student_uuid, onResetStudent } = useStudent();
  const { patientInfo, onSelectedPatient, onResetPatient } = usePatient();
  const { onRequired } = useNotification();

  const settings = [
    {
      isPro: true,
      icon: <DateRangeOutlined />,
      label: '간호사 근무 스케줄표',
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
      icon: <ComputerOutlined />,
      label: '화면설정',
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
      {settings.map(({ icon, label, buttonClick, isPro}) => {
        const ProIcon = () => {
          if (!isPro) return null;
          return <ProPlus />;
        };
        
        return (
          <ListItem key={label} disablePadding>
            <ListItemButton {...buttonClick}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={label} />
              <ProIcon />
            </ListItemButton>
          </ListItem>
        );
      })}
    </Fragment>
  );
};

export default MenuSettings;
