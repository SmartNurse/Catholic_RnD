import Form from 'components/Form';
import { Fragment, useState, useEffect } from 'react';
import { IPatientInfo } from 'apis/admin/type';
import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';
import { Button, IconButton, Stack } from '@mui/material';
import {  Delete } from '@mui/icons-material';


import { Ti18nId } from 'hooks/useI18n';
import { IInpomation } from 'apis/survey/type';
import useInfoEtc from "store/patientEtc/useinfoEtc";


import RowContainer from '../components/RowContainer';
import RowContent from '../components/RowContent';
import MuiTable from './MuiTable';
import MuiTextField from 'components/Form/MuiTextField';


interface Props extends IFormRegister, IFormValues, IFormWatch {
  disabled?: boolean;
  nurseName: string;
  patientInfo: IPatientInfo;
  onRequired: (id: Ti18nId) => void;
  onSuccess: (message: string) => void;
}

const PatientInfo = (props: Props) => {
  const { disabled, nurseName, patientInfo,register, watch, onRequired, onSuccess, setValue } = props;
  const etcInpoList: IInpomation[] = watch('infoEtc');
  const { infoEtc, onUpdateInfo } = useInfoEtc();


  const [contact, setContact] = useState('');
  const [name, setName] = useState('');
  const [relation, setRelation] = useState('');
  

  const columns = [
    { fieldId: 'name', label: '보호자 이름' },
    { fieldId: 'relation', label: '관계' },
    { fieldId: 'contact', label: '비상 연락처' },
    { fieldId: 'action', label: '', sx: { width: 100 } },
  ];
  
  const onAddRow = () => {
    const request = {  contact, name, relation };
    if (Object.values(request).filter(v => !v).length > 0) {
      return onRequired('CLINICAL.OBSERVATION.ADD.ROW');
    } 
    
    onSuccess('추가되었습니다.');
    console.log('데이터',infoEtc.data)
    setValue('etcInpoList', etcInpoList ? [...etcInpoList, request] : [request]);
    onUpdateInfo({
      isUpdated: !infoEtc.isUpdated,
      data: [...infoEtc.data, {
        contact: Number(contact),
        name: String(name),
        relation: String(relation),}]
    });
    setContact('');
    setName('');
    setRelation('');
  };


  const inputRow = {
    id: 'infoEtc',
    name: (
      <div style={{ display:'inline-flex', marginTop:"10px", marginLeft:"16px"}}>
        <RowContent title="보호자 이름">
            <MuiTextField
              required={false}
              fullWidth={false}
              disabled={disabled}
              placeholder="직접 입력"
              value={name}
              onChange={({ target: { value } }) => setName(value)}
              sx={{marginLeft:"68px", width:"219px"}}
            
            />
        </RowContent>
        </div>
    ),
    relation: (
      <div style={{ display:'inline-flex', marginTop:"10px"}}>
        <RowContent title='관계' >
          <Stack direction="row" spacing={1}>
            <Form.MuiTextField
              value={relation}
              required={false}
              placeholder="직접 입력"
              onChange={({ target: { value }}) => setRelation(value)}
              sx={{marginLeft:"72px", width:"250px"}}
              />
            </Stack>
        </RowContent>
      </div>
    ),
    contact: (
      <div style={{ display:'inline-flex', marginTop:"10px"}}>
        <RowContent title='비상연락처'>
        <Form.MuiTextField
          value={contact}
          required={false}
          onChange={({ target: { value }}) => setContact(value)}
          placeholder="직접 입력"
          sx={{ width:"480px"}}
          />
        </RowContent>
      </div>
    ),
    action: (
      <Button variant="contained" size="small" onClick={onAddRow} sx={{marginLeft:"70px"}}>
        추가
      </Button>
    ),
  };

  const onDeleteRow = (index: number) => {
    setValue(
      'infoEtc',
      infoEtc.data.filter((_, i) => i !== index)
    );
    onUpdateInfo({isUpdated: !infoEtc.isUpdated, data: infoEtc.data.filter((_, i) => i !== index)});
  };

  const displayRows =
    infoEtc.data.map((item, i) => ({
        ...item,
        id: i,
        action: (
        <IconButton
            size="small"
            onClick={() => onDeleteRow(i)}
            sx={{ display: disabled ? 'none' : 'block' }}
        >
          <Delete />
        </IconButton>
      ),        
    }))
  
    ;

  

    const tableRow = disabled ? displayRows : [inputRow, ...displayRows ];

  return (
      <RowContainer xs={12}>
        <RowContent title="환자명" titleRatio={1} childrenRatio={2}>
          <Form.MuiTextField
            value={patientInfo.name}
            InputProps={{ readOnly: true }}
          />
        </RowContent>
        <RowContent title="등록번호" titleRatio={1} childrenRatio={2}>
          <Form.MuiTextField
            value={patientInfo.patient_id}
            InputProps={{ readOnly: true }}
          />
        </RowContent>
        <RowContent title="나이" titleRatio={1} childrenRatio={2}>
          <Form.MuiTextField
            value={patientInfo.age}
            InputProps={{ readOnly: true }}
          />
        </RowContent>
        <RowContent title="성별" titleRatio={1} childrenRatio={2}>
          <Form.MuiRadioGroup
            i18nKey="GENDER"
            values={[1, 2]}
            value={patientInfo.gender}
            defaultValue={patientInfo.gender}
          />
        </RowContent>
        <RowContent title="진료과" titleRatio={1} childrenRatio={2}>
          <Form.MuiTextField
            value={patientInfo.department}
            InputProps={{ readOnly: true }}
          />
        </RowContent>
        <RowContent title="담당 의사" titleRatio={1} childrenRatio={2}>
          <Form.MuiTextField
            value={patientInfo.main_doctor}
            InputProps={{ readOnly: true }}
          />
        </RowContent>
        <RowContent title="기록자" titleRatio={1} childrenRatio={2}>
          <Form.MuiTextField
            value={nurseName}
            InputProps={{ readOnly: true }}
          />
        </RowContent>
        <RowContent title="정보제공자" titleRatio={1} childrenRatio={2}>
          <Form.MuiTextField
            required={false}
            fullWidth={false}
            disabled={disabled}
            placeholder="직접 입력"
            {...register('default_info.hospitalization_path.input')}
          />
        </RowContent>
        <MuiTable columns={columns} rows={tableRow} />
      </RowContainer>
  );
};

export default PatientInfo;
