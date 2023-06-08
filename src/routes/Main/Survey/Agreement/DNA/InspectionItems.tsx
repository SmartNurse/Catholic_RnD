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

import { formatStringToDate } from 'utils/formatting';

interface Props extends IFormValues, IFormWatch, IFormRegister {
  disabled?: boolean;
  onRequired: (id: Ti18nId) => void;
  onSuccess: (message: string) => void;
}

const InspectionItems = (props: Props) => {
  const { disabled, register } = props;

  const infos = [
    { title: '검사목적', value: 'pt_purpose' },
    { title: '검사명', value: 'pt_test' },
  ];

  return (
    <Fragment>
      <SectionTitle title="환자 본인" />
      <RowContainer xs={12} sx={{ margin: '20px 0px 30px 0px' }}>
        {infos.map(({ title, value }) => (
          <RowContent title={title} titleRatio={1.5} childrenRatio={10}>
            <Form.MuiTextField
              required={false}
              disabled={disabled}
              {...register(`${value}`)}
            />
          </RowContent>
        ))}
      </RowContainer>
      <Typography sx={{ margin: '20px 0 50px 30px', fontSize: '14px' }}>
        본인은 「생명윤리 및 안전에 관한 법률」 제51조 및 같은 시행규칙 제51조에
        따라 해당 유전자 검사에 대하여 충분한 설명을 들어 이해하였으므로 위와
        같이 본인에 대한 유전자 검사에 자발적인 의사로 동의합니다.
      </Typography>
    </Fragment>
  );
};

export default InspectionItems;
