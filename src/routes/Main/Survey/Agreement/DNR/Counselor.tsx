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

const Counselor = (props: Props) => {
  const { disabled, register } = props;

  const infos = [
    { title: '기관명칭', value: 'center_name' },
    { title: '소재지', value: 'center_location' },
    { title: '상담자 성명', value: 'center_consultant' },
    { title: '전화번호', value: 'center_contact' },
  ];

  return (
    <Fragment>
      <SectionTitle title="사전연명의료의향서 등록기관 및 상담자" />
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
      <Typography sx={{ fontSize: '14px', margin: '20px 0 30px 33px' }}>
        본인은 「호스피스·완화의료 및 임종과정에 있는 환자의 연명의료결정에 관한
        법률」 제 12조 및 같은 법 시행규칙 제8조에 따라 위와 같은 내용을 직접
        작성했으며, 임종과정에 있다는 의학적 판단을 받은 경우 연명의료를
        <br />
        시행하지 않거나 중단하는 것에 동의합니다.
      </Typography>
    </Fragment>
  );
};

export default Counselor;
