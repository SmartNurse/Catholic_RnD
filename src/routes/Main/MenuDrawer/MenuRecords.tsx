import { Fragment } from 'react';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Healing,
  HomeOutlined,
  LocalPharmacyOutlined,
  DriveFileRenameOutline,
  MedicationOutlined,
  ImageOutlined,
  TaskOutlined,
  SentimentSatisfiedOutlined,
  RestaurantMenu,
  VerifiedUserOutlined,
  ExpandMore,
  MonitorHeartOutlined,
  MasksOutlined,
  BabyChangingStation,
} from '@mui/icons-material';
import { ReactComponent as ProPlus } from "../../../assets/proPlus.svg";
import Survey from '../Survey';
import useSurvey from 'store/survey/useSurvey';
import usePatient from 'store/patient/usePatient';
import useStudent from 'store/student/useStudent';
import useNotification from 'hooks/useNotification';

const MenuRecords = () => {
  const { student_uuid } = useStudent();
  const { patientInfo } = usePatient();
  const { onRequired } = useNotification();
  const { onUpdateSurveyType } = useSurvey();

  const menus = [
    {
      icon: <Healing />,
      label: '입원간호 기록지',
    },
    {
      icon: <HomeOutlined />,
      label: '퇴원간호 기록지',
    },
    {
      icon: <LocalPharmacyOutlined />,
      label: '처방 기록지',
    },
    {
      icon: <DriveFileRenameOutline />,
      label: '간호 기록지',
    },
    {
      icon: <MedicationOutlined />,
      label: '투약 기록지',
    },
    {
      icon: <ImageOutlined />,
      label: '영상검사 기록지',
    },
    {
      icon: <TaskOutlined />,
      label: '임상병리검사 기록지',
    },
    {
      icon: <MonitorHeartOutlined />,
      label: '임상관찰 기록지',
    },
    {
      disabled: true,
      icon: <SentimentSatisfiedOutlined />,
      label: '환자평가 기록지',
    },
    {
      label: '욕창위험도 평가도구',
    },
    {
      label: '욕구평가 기록지',
    },
    {
      label: '낙상위험도 평가도구',
    },
    {
      disabled: true,
      isPro: true,
      label: '통증평가도구',
    },
    {
      isMinor: true,
      label: 'NRS'
    },
    {
      isMinor: true,
      label: 'FLACC Scale'
    },
    {
      isPro: true,
      label: 'BDI',
    },
    {
      isPro: true,
      label: 'BAI',
    },
    {
      isPro: true,
      label: 'MMSE',
    },
    {
      isPro: true,
      label: 'K-CIST',
    },
    {
      isPro: true,
      disabled: true,
      icon: <MasksOutlined />,
      label: '특수파트 기록지',
    },
    {
      isPro: true,
      label: '수술 기록지',
    },
    {
      isPro: true,
      label: '수혈 기록지',
    },
    {
      isPro: true,
      label: '투석 기록지',
    },
    {
      isPro: true,
      label: '응급간호 기록지',
    },
    {
      isPro: true,
      label: '가정간호 기록지',
    },
    {
      icon: <RestaurantMenu />,
      label: '식이/영양 기록지',
    },
    {
      disabled: true,
      icon: <VerifiedUserOutlined />,
      label: '동의서',
    },
    {
      isPro: true,
      icon: <BabyChangingStation />,
      label: '영유아 건강검진 문진'
    },
  ];

  const onClickListItem = (label: string) => {
    if (!student_uuid) return onRequired('REQUIRED.STUDENT');
    if (!patientInfo) return onRequired('REQUIRED.PATIENT');
    onUpdateSurveyType(label);
  };

  return (
    <Fragment>
      {menus.map(({ icon, label, disabled, isPro, isMinor }) => {
        const onClick = () => onClickListItem(label);

        const MoreIcon = () => {
          if (!disabled) return null;
          return <ExpandMore fontSize="small" sx={{ color: '#fff' }} />;
        };

        const ProIcon = () => {
          if (!isPro) return null;
          return <ProPlus />;
        };

        return (
          <ListItem key={label} disablePadding>
            <ListItemButton className={isMinor ? "isMinor" : (isPro && !disabled ? "isPro" : "")} disabled={disabled} onClick={onClick}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={label} />
              <ProIcon />
              <MoreIcon />
            </ListItemButton>
          </ListItem>
        );
      })}

      <Survey />
    </Fragment>
  );
};

export default MenuRecords;
