import { TabContext, TabList } from '@mui/lab';
import { Box, Tab, TextField, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';
import { StyledTabPanel } from './style';

export const inputInformationWidth = { xs: 340, xl: 530 };

const InputInformation = () => {
  const [tab, setTab] = useState('NANDA');

  return (
    <Box component="aside" width={inputInformationWidth}>
      <Toolbar sx={{ backgroundColor: '#F2F2F2' }}>광고 영역</Toolbar>

      <Box sx={{ p: 2.5 }}>
        <TextField
          multiline
          fullWidth
          size="small"
          placeholder="진단명, 주의사항, 처방 등 인수인계를 입력해주세요."
          InputProps={{ sx: { fontSize: 14, height: 160 } }}
          inputProps={{ style: { height: '100%' } }}
        />

        <Box
          display={'flex'}
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
          <StyledTabPanel value={'NANDA'}>NANDA</StyledTabPanel>
          <StyledTabPanel value={'SOAPIE'}>SOAPIE</StyledTabPanel>
          <StyledTabPanel value={'FocusDAR'}>FocusDAR</StyledTabPanel>
          <StyledTabPanel value={'서술기록'}>서술기록</StyledTabPanel>
          <StyledTabPanel value={'특기사항'}>특기사항</StyledTabPanel>
        </TabContext>
      </Box>
    </Box>
  );
};

export default InputInformation;
