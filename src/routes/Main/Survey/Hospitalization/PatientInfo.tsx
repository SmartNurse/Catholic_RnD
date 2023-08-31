import Form from 'components/Form';
import { Fragment, useState, useEffect } from 'react';
import { IPatientInfo } from 'apis/admin/type';
import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';
import {
  Button,
  IconButton,
  Stack,
  FormHelperText,
  Grid,
  Table,
  TableHead,
  TableBody,
  TableCell,
  Typography,
} from '@mui/material';

import { Ti18nId } from 'hooks/useI18n';
import { IInpomation } from 'apis/survey/type';
import useInfoEtc from 'store/patientEtc/useinfoEtc';

import RowContainer from '../components/RowContainer';
import RowContent from '../components/RowContent';
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
      <Table sx={{ marginLeft: '16px' }}>
        <TableBody>
          <TableCell></TableCell>
        </TableBody>
        <Typography
          sx={{
            fontSize: 12,
            fontWeight: 'bold',
            marginLeft: '16px',
            marginTop: '16px',
          }}
        >
          보호자
        </Typography>
      </Table>
      <RowContent title="보호자 1 성함" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField
          required={false}
          fullWidth={false}
          disabled={disabled}
          placeholder="직접 입력"
          {...register('default_info.hospitalization_path.input')}
        />
      </RowContent>
      <RowContent title="관계" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField
          required={false}
          fullWidth={false}
          disabled={disabled}
          placeholder="직접 입력"
          {...register('default_info.hospitalization_path.input')}
        />
      </RowContent>
      <RowContent title="전화번호" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField
          required={false}
          fullWidth={false}
          disabled={disabled}
          placeholder="직접 입력"
          {...register('default_info.hospitalization_path.input')}
        />
      </RowContent>
      <RowContent title="기타" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField
          required={false}
          fullWidth={false}
          disabled={disabled}
          placeholder="ex. 치료 방향, 물품 연락"
          {...register('default_info.hospitalization_path.input')}
        />
      </RowContent>

      <RowContent title="보호자 2 성함" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField
          required={false}
          fullWidth={false}
          disabled={disabled}
          placeholder="직접 입력"
          {...register('default_info.hospitalization_path.input')}
        />
      </RowContent>
      <RowContent title="관계" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField
          required={false}
          fullWidth={false}
          disabled={disabled}
          placeholder="직접 입력"
          {...register('default_info.hospitalization_path.input')}
        />
      </RowContent>
      <RowContent title="전화번호" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField
          required={false}
          fullWidth={false}
          disabled={disabled}
          placeholder="직접 입력"
          {...register('default_info.hospitalization_path.input')}
        />
      </RowContent>
      <RowContent title="기타" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField
          required={false}
          fullWidth={false}
          disabled={disabled}
          placeholder="ex. 치료 방향, 물품 연락"
          {...register('default_info.hospitalization_path.input')}
        />
      </RowContent>

      <RowContent title="보호자 3 성함" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField
          required={false}
          fullWidth={false}
          disabled={disabled}
          placeholder="직접 입력"
          {...register('default_info.hospitalization_path.input')}
        />
      </RowContent>
      <RowContent title="관계" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField
          required={false}
          fullWidth={false}
          disabled={disabled}
          placeholder="직접 입력"
          {...register('default_info.hospitalization_path.input')}
        />
      </RowContent>
      <RowContent title="전화번호" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField
          required={false}
          fullWidth={false}
          disabled={disabled}
          placeholder="직접 입력"
          {...register('default_info.hospitalization_path.input')}
        />
      </RowContent>
      <RowContent title="기타" titleRatio={1} childrenRatio={2}>
        <Form.MuiTextField
          required={false}
          fullWidth={false}
          disabled={disabled}
          placeholder="ex. 치료 방향, 물품 연락"
          {...register('default_info.hospitalization_path.input')}
        />
      </RowContent>
    </RowContainer>
  );
};

export default PatientInfo;
