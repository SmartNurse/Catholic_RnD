import Form from 'components/Form';

import { Fragment, useState } from 'react';
import { Delete } from '@mui/icons-material';
import { Stack } from '@mui/material';

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

const DeathRecord = (props: Props) => {
  const { disabled, register, getValues, setValue } = props;

  const infos = [
    { title: '성명', value: 'name' },
    { title: '주민등록번호', value: 'patient_id' },
    { title: '주소', value: 'address' },
    { title: '전화번호', value: 'number' },
  ];

  return (
    <Fragment>
      <SectionTitle title="환자 사망전 알림허용 여부" />
      <RowContainer xs={11.5} sx={{ margin: '40px 0px 30px 40px' }}>
        <Stack direction="row" spacing={1}>
          <Form.MuiRadioGroup
            i18nKey="DNR.DEATHRECORD"
            i18nNullKey="ETC"
            values={[1, 2, 0]}
            disabled={disabled}
            defaultValue={getValues('default_info.destination.value')}
            onChange={v => setValue('default_info.destination.value', v)}
            width={'350px'}
          />
          <Form.MuiTextField
            required={false}
            disabled={disabled}
            placeholder="직접 입력"
            sx={{ width: '200px' }}
            {...register('default_info.destination.input')}
          />
        </Stack>
      </RowContainer>
    </Fragment>
  );
};

export default DeathRecord;
