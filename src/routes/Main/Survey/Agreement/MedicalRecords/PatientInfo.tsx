import Form from 'components/Form';

import { Fragment, useState } from 'react';
import { Delete } from '@mui/icons-material';
import {
  Checkbox,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';

import RowContainer from '../../components/RowContainer';
import RowContent from '../../components/RowContent';

import { Ti18nId } from 'hooks/useI18n';
import { IMentalNursingRecord } from 'apis/survey/type';
import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';

import MuiTextField from 'components/Form/MuiTextField';
import SectionTitle from '../../components/SectionTitle';

interface Props extends IFormValues, IFormWatch, IFormRegister {
  disabled?: boolean;
  onRequired: (id: Ti18nId) => void;
  onSuccess: (message: string) => void;
}

const PatientInfo = (props: Props) => {
  const { disabled, register } = props;

  const infos = [
    { title: '성명', value: 'name' },
    { title: '주민등록번호', value: 'patient_id' },
    { title: '주소', value: 'address' },
    { title: '전화번호', value: 'number' },
  ];

  return (
    <Fragment>
      <SectionTitle title="환자 본인" />
      <RowContainer xs={11.5} sx={{ margin: '20px 0px 30px 0px' }}>
        {infos.map(({ title, value }) => (
          <RowContent title={title} titleRatio={1.5} childrenRatio={4.5}>
            <Form.MuiTextField
              required={false}
              disabled={disabled}
              {...register(`${value}`)}
            />
          </RowContent>
        ))}
      </RowContainer>
    </Fragment>
  );
};

export default PatientInfo;
