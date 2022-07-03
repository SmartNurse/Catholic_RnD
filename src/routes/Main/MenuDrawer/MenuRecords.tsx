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
  BloodtypeOutlined,
  SentimentSatisfiedOutlined,
  RestaurantMenu,
  VerifiedUserOutlined,
  ExpandMore,
} from '@mui/icons-material';
import { RECORD_TYPE } from '../type';

const MenuRecords = () => {
  const records = [
    {
      icon: <Healing />,
      label: RECORD_TYPE.ADMISSION,
    },
    {
      icon: <HomeOutlined />,
      label: RECORD_TYPE.DISCHARGE,
    },
    {
      icon: <LocalPharmacyOutlined />,
      label: RECORD_TYPE.PRESCRIPTION,
    },
    {
      icon: <DriveFileRenameOutline />,
      label: RECORD_TYPE.NURSE,
    },
    {
      icon: <MedicationOutlined />,
      label: RECORD_TYPE.DOSAGE,
    },
    {
      icon: <ImageOutlined />,
      label: RECORD_TYPE.IMAGING,
    },
    {
      icon: <TaskOutlined />,
      label: RECORD_TYPE.CLINICAL_PATHOLOGY,
    },
    {
      icon: <BloodtypeOutlined />,
      label: RECORD_TYPE.CLINICAL_OBSERVATION,
    },
    {
      disabled: true,
      icon: <SentimentSatisfiedOutlined />,
      label: RECORD_TYPE.PATIENT_EVALUATION,
    },
    {
      label: RECORD_TYPE.RISK_OF_BEDSORES,
    },
    {
      label: RECORD_TYPE.NEEDS_ASSESSMENT,
    },
    {
      label: RECORD_TYPE.FALL_RISK_ASSESSMENT,
    },
    {
      label: RECORD_TYPE.COGNITIVE_FUNCTION,
    },
    {
      icon: <RestaurantMenu />,
      label: RECORD_TYPE.DIET_NUTRITION,
    },
    {
      icon: <VerifiedUserOutlined />,
      label: RECORD_TYPE.AGREEMENT,
    },
  ];

  return (
    <Fragment>
      {records.map(({ icon, label, disabled }) => {
        const MoreIcon = () => {
          if (!disabled) return null;
          return <ExpandMore fontSize="small" sx={{ color: '#fff' }} />;
        };

        return (
          <ListItem key={label} disablePadding>
            <ListItemButton disabled={disabled}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={label} />
              <MoreIcon />
            </ListItemButton>
          </ListItem>
        );
      })}
    </Fragment>
  );
};

export default MenuRecords;
