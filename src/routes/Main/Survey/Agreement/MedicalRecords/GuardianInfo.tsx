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

const GuardianInfo = (props: Props) => {
  const { disabled, register } = props;

  const infos = [
    { title: '성명', value: 'applier_name' },
    { title: '환자와의 관계', value: 'applier_relp' },
    { title: '생년월일', value: 'applier_bday' },
    { title: '전화번호', value: 'applier_contact' },
    { title: '주소', value: 'applier_addr' },
  ];

  return (
    <Fragment>
      <SectionTitle title="신청인" />
      <RowContainer xs={11.5} sx={{ margin: '20px 0px 30px 0px' }}>
        {infos.map(({ title, value }) =>
          title === '주소' ? (
            <RowContent title={title} titleRatio={1.5} childrenRatio={10.5}>
              <Form.MuiTextField
                required={false}
                disabled={disabled}
                {...register(`${value}`)}
              />
            </RowContent>
          ) : (
            <RowContent title={title} titleRatio={1.5} childrenRatio={4.5}>
              <Form.MuiTextField
                required={false}
                disabled={disabled}
                {...register(`${value}`)}
              />
            </RowContent>
          )
        )}
      </RowContainer>
    </Fragment>
  );
};

export default GuardianInfo;
