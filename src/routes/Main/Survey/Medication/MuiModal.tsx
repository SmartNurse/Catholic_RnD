import * as React from 'react';
import { Fragment, useRef, useEffect, useState, useCallback } from 'react';

import usePatient from 'store/patient/usePatient';
import { getPatientBarcode, getPatientInfo } from 'apis/admin';
import useNotification from 'hooks/useNotification';
import { IMedication } from 'apis/survey/type';
import { IFormValues, IFormWatch } from 'routes/Main/type';
import MedicationItem from './MedicationItem';

import {
  Checkbox,
  Grid,
  Box,
  Typography,
  Skeleton,
  IconButton,
  DialogTitle,
  DialogContent,
  useTheme,
  Button,
  Modal,
} from '@mui/material';

import { Close } from '@mui/icons-material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'lightgray',
  border: 'none',
  borderRadius: '5px',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

interface Props extends IFormValues, IFormWatch {
  disabled?: boolean;
}

export default function NestedModal(props: Props) {
  const { disabled, watch, getValues, setValue } = props;

  const medicationList: IMedication[] = getValues('medication_surveys');

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { onFail } = useNotification();
  const { patient, onSelectedPatientInfo, patientInfo } = usePatient();
  const { zIndex, breakpoints } = useTheme();

  // 환자 정보 요청
  useEffect(() => {
    if (!patient) return;

    // 가상환자 상세정보 요청
    getPatientInfo({ patient_id: patient.patient_id })
      .then(({ data }) => {
        onSelectedPatientInfo(data);
      })
      .catch(e => {
        onSelectedPatientInfo(null);
        onFail(`가상환자 데이터 조회에 실패했습니다.`, e);
      });
    // eslint-disable-next-line
  }, [patient]);

  // 바코드 요청
  const [imgBarcode, setImgBarcode] = useState('');

  useEffect(() => {
    if (!patient) return;

    // 가상환자 바코드 요청
    getPatientBarcode({ patient_id: patient.patient_id })
      .then(({ data }) => {
        setImgBarcode(data);
      })
      .catch(e => {
        onSelectedPatientInfo(null);
        onFail(`가상환자 데이터 조회에 실패했습니다.`, e);
      });
    // eslint-disable-next-line
  }, [patient]);

  // 바코드 환자 정보 불러온 것
  if (!patientInfo) {
    return <Skeleton variant="rectangular" sx={{ flex: 1 }} />;
  }

  const { patient_id, name, age, gender, blood, ward, room } = patientInfo;

  return (
    <div>
      <Button
        sx={{ marginTop: '20px' }}
        onClick={handleOpen}
        variant="contained"
        size="small"
      >
        약물 라벨 인쇄
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 'auto', maxWidth: '1200px' }}>
          <DialogTitle
            display="flex"
            alignItems="center"
            position="sticky"
            sx={{
              top: 0,
              zIndex: zIndex.modal,
              background: '#fff',
              borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
            }}
          >
            <IconButton size="small" sx={{ mr: 1.5 }}>
              <Close color="primary" onClick={handleClose} />
            </IconButton>
            약물 라벨 인쇄
          </DialogTitle>
          <DialogContent
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '20px',
              width: '950px',
            }}
          >
            {medicationList.map((item, i) => {
              return (
                <MedicationItem
                  item={item}
                  patientInfo={patientInfo}
                  barcorde={imgBarcode}
                />
              );
            })}
          </DialogContent>
        </Box>
      </Modal>
    </div>
  );
}
