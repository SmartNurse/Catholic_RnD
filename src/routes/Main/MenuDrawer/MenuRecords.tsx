import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
  SickOutlined,
  DvrOutlined,
  PsychologyOutlined,
  WashOutlined,
  Diversity2Outlined,
} from '@mui/icons-material';

import { ReactComponent as ProPlus } from '../../../assets/proPlus.svg';
import { ReactComponent as Severity } from '../../../assets/severityAssessment.svg';
import { ReactComponent as Agreement } from '../../../assets/agreement.svg';

import Survey from '../Survey';
import useSurvey from 'store/survey/useSurvey';
import usePatient from 'store/patient/usePatient';
import useStudent from 'store/student/useStudent';
import useNotification from 'hooks/useNotification';
import { IToggleObj } from './type';
import { initialToggleObj } from './initialStates';

interface Props {
  menuDrawerWidth: number;
  setMenuDrawerWidth: (menuDrawerWidth: number) => void;
  coachRef: any;
}

const MenuRecords = (props: Props) => {
  const { menuDrawerWidth, setMenuDrawerWidth, coachRef } = props;
  const navigate = useNavigate();

  const { student_uuid } = useStudent();
  const { patientInfo } = usePatient();
  const { onRequired } = useNotification();
  const { onUpdateSurveyType } = useSurvey();

  const [toggle, setToggle] = useState<IToggleObj>(initialToggleObj);

  const menus = [
    {
      icon: <DvrOutlined />,
      label: 'e-CARDEX',
    },
    {
      icon: <Diversity2Outlined />,
      label: '간호 인수인계',
    },
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
      icon: <WashOutlined />,
      label: '혈당 기록지',
    },
    {
      disabled: true,
      icon: <SentimentSatisfiedOutlined />,
      label: '환자평가/환자안전',
      id: 'patient_evaluation',
    },
    {
      label: '낙상위험 평가도구 I',
      toggle: toggle.patient_evaluation,
    },
    {
      isPro: true,
      label: '낙상위험 평가도구 II',
      toggle: toggle.patient_evaluation,
    },
    {
      isPro: true,
      label: '소아 낙상위험 평가',
      toggle: toggle.patient_evaluation,
    },
    {
      label: '욕창위험 평가도구 I',
      toggle: toggle.patient_evaluation,
    },
    {
      isPro: true,
      label: '욕창위험 평가도구 II',
      toggle: toggle.patient_evaluation,
    },
    {
      label: '욕구평가 기록지',
      toggle: toggle.patient_evaluation,
    },
    {
      isPro: true,
      label: 'GCS',
      toggle: toggle.patient_evaluation,
    },
    {
      isPro: true,
      label: 'Pediatric GCS',
      toggle: toggle.patient_evaluation,
    },
    {
      isPro: true,
      label: 'FOUR Score',
      toggle: toggle.patient_evaluation,
    },
    {
      isPro: true,
      label: '환자안전사고보고서',
      toggle: toggle.patient_evaluation,
    },
    {
      label: '환자안전보고학습시스템',
      toggle: toggle.patient_evaluation,
    },
    {
      label: '의약품이상사례보고시스템',
      toggle: toggle.patient_evaluation,
    },
    {
      icon: <SickOutlined />,
      disabled: true,
      label: '통증평가도구',
      id: 'pain',
    },
    {
      label: 'NRS',
      toggle: toggle.pain,
    },
    {
      isPro: true,
      label: 'FLACC Scale',
      toggle: toggle.pain,
    },
    {
      isPro: true,
      label: 'CNPS',
      toggle: toggle.pain,
    },
    {
      isPro: true,
      label: 'FFI',
      toggle: toggle.pain,
    },
    {
      isPro: true,
      label: 'KOOS',
      toggle: toggle.pain,
    },
    {
      isPro: true,
      label: 'LEFS',
      toggle: toggle.pain,
    },
    {
      isPro: true,
      label: 'NDI',
      toggle: toggle.pain,
    },
    {
      isPro: true,
      label: 'STarT Back\nScreening',
      toggle: toggle.pain,
    },
    {
      icon: <PsychologyOutlined />,
      disabled: true,
      isPro: true,
      label: '정신건강 평가도구',
      id: 'mental_health',
    },
    {
      isPro: true,
      label: '정신간호 기록지',
      toggle: toggle.mental_health,
    },
    {
      isPro: true,
      label: 'BDI',
      toggle: toggle.mental_health,
    },
    {
      isPro: true,
      label: 'BAI',
      toggle: toggle.mental_health,
    },
    {
      isPro: true,
      label: 'MMSE-K',
      toggle: toggle.mental_health,
    },
    {
      isPro: true,
      label: 'CIST',
      toggle: toggle.mental_health,
    },
    {
      isPro: true,
      disabled: true,
      icon: <MasksOutlined />,
      label: '특수파트 기록지',
      id: 'special',
    },
    {
      isPro: true,
      label: '수술 기록지',
      toggle: toggle.special,
    },
    {
      isPro: true,
      label: '마취 기록지',
      toggle: toggle.special,
    },
    {
      isPro: true,
      label: '수혈 기록지',
      toggle: toggle.special,
    },
    {
      isPro: true,
      label: '투석 기록지',
      toggle: toggle.special,
    },
    {
      isPro: true,
      label: '응급 기록지',
      toggle: toggle.special,
    },
    {
      label: 'NEDIS',
      toggle: toggle.special,
    },
    {
      isPro: true,
      label: '분만 기록지',
      toggle: toggle.special,
    },
    {
      isPro: true,
      label: '가정간호 기록지',
      toggle: toggle.special,
    },
    {
      isPro: true,
      disabled: true,
      icon: <Severity />,
      label: '중증도 평가도구',
      id: 'severity',
    },
    {
      isPro: true,
      label: 'KPCS',
      toggle: toggle.severity,
    },
    {
      isPro: true,
      label: 'KPCSC',
      toggle: toggle.severity,
    },
    {
      isPro: true,
      label: 'KPCSN',
      toggle: toggle.severity,
    },
    {
      isPro: true,
      label: 'KPCS-GW',
      toggle: toggle.severity,
    },
    {
      isPro: true,
      label: 'KPCS-ICU',
      toggle: toggle.severity,
    },
    {
      isPro: true,
      label: 'KPCS-NICU',
      toggle: toggle.severity,
    },
    {
      isPro: true,
      icon: <RestaurantMenu />,
      label: '식이/영양 기록지',
    },
    {
      isPro: true,
      disabled: true,
      icon: <VerifiedUserOutlined />,
      label: '동의서',
      id: 'agreement',
    },
    {
      isPro: true,
      label: '입원 안내 확인서',
      toggle: toggle.agreement,
    },
    {
      isPro: true,
      label: '낙상 예방교육 확인서',
      toggle: toggle.agreement,
    },
    {
      isPro: true,
      label: '수혈 동의서',
      toggle: toggle.agreement,
    },
    {
      isPro: true,
      label: '대장내시경 동의서',
      toggle: toggle.agreement,
    },
    {
      isPro: true,
      label: '상부내시경 동의서',
      toggle: toggle.agreement,
    },
    {
      isPro: true,
      label: '비급여진료비동의서',
      toggle: toggle.agreement,
    },
    {
      isPro: true,
      label: '진료기록 열람, \n사본발급 동의서',
      toggle: toggle.agreement,
    },
    {
      isPro: true,
      label: '사전연명의료의향서',
      toggle: toggle.agreement,
    },
    {
      isPro: true,
      label: '유전자검사 동의서',
      toggle: toggle.agreement,
    },
    {
      isPro: true,
      icon: <Agreement />,
      label: '동의서 2',
    },
    {
      isPro: true,
      icon: <BabyChangingStation />,
      label: '영유아 건강검진 문진',
    },
  ];

  const onClickListItem = (label: string) => {
    if (!student_uuid) return onRequired('REQUIRED.STUDENT');

    if (label === '영유아 건강검진 문진') {
      window.open(
        'http://www.imomhospital.co.kr/page/wellbaby/interview?PHPSESSID=57edd94c10d035ad8b305d29981c98ed'
      );
      return;
    } else if (label === 'NEDIS') {
      window.open('https://portal.nemc.or.kr:444/member/login_page.do');
      return;
    } else if (label === '환자안전보고학습시스템') {
      window.open('https://statistics.kops.or.kr/biWorks/dashBoardMain.do');
      return;
    } else if (label === '의약품이상사례보고시스템') {
      window.open(
        'https://www.drugsafe.or.kr/iwt/ds/ko/report/WhatIsKAERS.do;jsessionid=aOUQlS7Cufvit9aLo8fGQHfXD1KflOcDMmW19GIp0Tc3b5AdbDZ1TqaXK5W7lYAQ.webint_2_servlet_engine1'
      );
      return;
    }

    if (!patientInfo) return onRequired('REQUIRED.PATIENT');
    else if (label === '동의서 2') {
      // window.open('https://enr.smartnurse.co.kr/#/agreement2');
      window.open('http://localhost:3000/#/agreement2');

      return;
    }
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
      {menus.map(({ icon, label, disabled, isPro, toggle, id }) => {
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
              <ListItem
                key={label}
                disablePadding
                ref={label === '특수파트 기록지' ? coachRef : null}
              >
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

export default MenuRecords;
