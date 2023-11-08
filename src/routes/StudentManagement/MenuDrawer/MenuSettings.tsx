import { Fragment, useState } from 'react';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { LogoutOutlined } from '@mui/icons-material';

import useUser from 'store/user/useUser';
import { useNavigate } from 'react-router-dom';
import useStudent from 'store/student/useStudent';
import useSurvey from 'store/survey/useSurvey';
import usePatient from 'store/patient/usePatient';
import { IToggleObj } from './type';
import { initialToggleObj } from './initialStates';

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

  const [toggle, setToggle] = useState<IToggleObj>(initialToggleObj);

  // 학생 메뉴와 교수 메뉴 변경
  const settings = [
    {
      icon: <LogoutOutlined />,
      label: '나가기',
    },
  ];

  const onClickListItem = (label: string) => {
    if (label === '나가기') {
      onResetStudent();
      onResetPatient();
      onCloseReadOnly();
      window.close();
    }
  };

  return (
    <Fragment>
      {settings.map(({ icon, label }) => {
        const onClick = () => {
          onClickListItem(label);
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
                </ListItemButton>
              </ListItem>
            ) : toggle ? (
              <ListItem key={label} disablePadding>
                <ListItemButton className={''}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText
                    primary={label}
                    sx={{ whiteSpace: 'pre-wrap' }}
                  />
                </ListItemButton>
              </ListItem>
            ) : (
              <></>
            )}
          </>
        );
      })}
    </Fragment>
  );
};

export default MenuSettings;
