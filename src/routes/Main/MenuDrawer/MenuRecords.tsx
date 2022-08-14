import { Fragment, useState } from 'react';
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
} from '@mui/icons-material';
import Survey from '../Survey';

const MenuRecords = () => {
  const [type, setType] = useState('');

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
      label: '인지기능검사',
    },
    {
      icon: <RestaurantMenu />,
      label: '식이/영양 기록지',
    },
    {
      icon: <VerifiedUserOutlined />,
      label: '동의서',
    },
  ];

  return (
    <Fragment>
      {menus.map(({ icon, label, disabled }) => {
        const onClick = () => setType(label);

        const MoreIcon = () => {
          if (!disabled) return null;
          return <ExpandMore fontSize="small" sx={{ color: '#fff' }} />;
        };

        return (
          <ListItem key={label} disablePadding>
            <ListItemButton disabled={disabled} onClick={onClick}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={label} />
              <MoreIcon />
            </ListItemButton>
          </ListItem>
        );
      })}

      <Survey type={type} onReset={() => setType('')} />
    </Fragment>
  );
};

export default MenuRecords;
