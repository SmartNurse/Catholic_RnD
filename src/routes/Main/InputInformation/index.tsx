import { useState } from 'react';
import { TabContext, TabList } from '@mui/lab';
import {
  Box,
  Button,
  ButtonGroup,
  Tab,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';

import { StyledContentContainer } from '../style';

import { StyledTabPanel } from './style';
import NandaContainer from './NandaContainer';
import SoapieContainer from './SoapieContainer';
import FocusDarContainer from './FocusDarContainer';
import NarrativeRecordContainer from './NarrativeRecordContainer';
import RemarksContainer from './RemarksContainer';
import usePatient from '../../../store/slices/usePatient';
import PatientNote from './PatientMemo';

export const inputInformationWidth = { xs: 340, xl: 530 };

const InputInformation = () => {
  const { patient } = usePatient();

  const [tab, setTab] = useState('NANDA');

  return (
    <Box component="aside" width={inputInformationWidth}>
      <Toolbar sx={{ backgroundColor: '#F2F2F2' }}>광고 영역</Toolbar>

      <StyledContentContainer>
        <PatientNote patient={patient} />

        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ mt: 2.5, mb: 1.5 }}
        >
          <Typography variant="subtitle2" fontSize={13}>
            간호 기록 작성
          </Typography>
          {/* TODO Time Picker */}
        </Box>
        <TabContext value={tab}>
          <TabList variant="fullWidth" onChange={(_, value) => setTab(value)}>
            <Tab label="NANDA" value={'NANDA'} />
            <Tab label="SOAPIE" value={'SOAPIE'} />
            <Tab label="Focus DAR" value={'FocusDAR'} />
            <Tab label="서술기록" value={'서술기록'} />
            <Tab label="특기사항" value={'특기사항'} />
          </TabList>
          <StyledTabPanel value={'NANDA'}>
            <NandaContainer />
          </StyledTabPanel>
          <StyledTabPanel value={'SOAPIE'}>
            <SoapieContainer />
          </StyledTabPanel>
          <StyledTabPanel value={'FocusDAR'}>
            <FocusDarContainer />
          </StyledTabPanel>
          <StyledTabPanel value={'서술기록'}>
            <NarrativeRecordContainer />
          </StyledTabPanel>
          <StyledTabPanel value={'특기사항'}>
            <RemarksContainer />
          </StyledTabPanel>

          <ButtonGroup
            size="small"
            color="info"
            sx={{ justifyContent: 'flex-end' }}
          >
            <Button variant="text" color="inherit">
              취소
            </Button>
            <Button variant="text">저장</Button>
          </ButtonGroup>
        </TabContext>
      </StyledContentContainer>
    </Box>
  );
};

export default InputInformation;
