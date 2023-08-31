import Form from 'components/Form';
import { Fragment, useState, useEffect } from 'react';
import { IPatientInfo } from 'apis/admin/type';
import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';
import { Button, IconButton, Stack, FormHelperText, Grid } from '@mui/material';
import { Delete } from '@mui/icons-material';
import regex from 'utils/regex';

import { Ti18nId } from 'hooks/useI18n';
import { IInpomation } from 'apis/survey/type';
import useInfoEtc from 'store/patientEtc/useinfoEtc';

import RowContainer from '../components/RowContainer';
import RowContent from '../components/RowContent';
import MuiTable from 'components/MuiTable';
import MuiTextField from 'components/Form/MuiTextField';
import useUser from 'store/user/useUser';

interface Props extends IFormRegister, IFormValues, IFormWatch {
  disabled?: boolean;
  nurseName: string;
  patientInfo: IPatientInfo;
  onRequired: (id: Ti18nId) => void;
  onSuccess: (message: string) => void;
}

const PatientInfo = (props: Props) => {
  const {
    disabled,
    nurseName,
    patientInfo,
    register,
    watch,
    onRequired,
    onSuccess,
    setValue,
  } = props;

  const { isStudent } = useUser();

  const { infoEtc, onUpdateInfo } = useInfoEtc();

  const etcInpoList: IInpomation[] = watch('info_etc');

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
    const request = { contact, name, relation };
    if (Object.values(request).filter(v => !v).length > 0) {
      return onRequired('CLINICAL.OBSERVATION.ADD.ROW');
    } else if (!regex.contact.test(contact)) {
      return onRequired('REQUIRED.CONTACK.FORMAT');
    }

    onSuccess('추가되었습니다.');
    setValue(
      'info_etc',
      etcInpoList ? [...etcInpoList, { ...request }] : [request]
    );
    console.log('데이터', etcInpoList);
    onUpdateInfo({
      isUpdated: !infoEtc.isUpdated,
      data: [
        ...infoEtc.data,
        {
          contact: String(contact),
          name: String(name),
          relation: String(relation),
        },
      ],
    });
    setContact('');
    setName('');
    setRelation('');
  };

  const inputRow = {
    id: 'infoEtc',
    name: (
      <MuiTextField
        required={false}
        disabled={disabled}
        placeholder="직접 입력"
        value={name}
        onChange={({ target: { value } }) => setName(value)}
        sx={{ width: '200px' }}
      />
    ),
    relation: (
      <Form.MuiTextField
        value={relation}
        required={false}
        placeholder="직접 입력"
        onChange={({ target: { value } }) => setRelation(value)}
        sx={{ width: '200px' }}
      />
    ),
    contact: (
      <Form.MuiTextField
        value={contact}
        required={false}
        placeholder="숫자만 입력해주세요."
        onChange={({ target: { value } }) => {
          setContact(value);
        }}
      />
    ),
    action: (
      <Button
        variant="contained"
        size="small"
        onClick={onAddRow}
        disabled={isStudent ? false : true}
      >
        추가
      </Button>
    ),
  };

  const onDeleteRow = (index: number) => {
    setValue(
      'info_etc',
      etcInpoList.filter((_, i) => i !== index)
    );
    onUpdateInfo({
      isUpdated: !infoEtc.isUpdated,
      data: infoEtc.data.filter((_, i) => i !== index),
    });
  };
  console.log('데이터2222', etcInpoList, typeof etcInpoList);

  const displayRows = etcInpoList
    ? etcInpoList.map((item, i) => ({
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
    : [];

  const tableRow = disabled ? displayRows : [inputRow, ...displayRows];

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
        <Form.MuiTextField value={nurseName} InputProps={{ readOnly: true }} />
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
      <Grid item xs={12}>
        <MuiTable columns={columns} rows={tableRow} />
      </Grid>
    </RowContainer>
  );
};

export default PatientInfo;
