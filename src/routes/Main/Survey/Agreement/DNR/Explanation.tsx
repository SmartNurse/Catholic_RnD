import Form from 'components/Form';

import { Fragment, useState } from 'react';
import { Delete } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';

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

const Explanation = (props: Props) => {
  const { disabled, register, getValues, setValue } = props;

  return (
    <Fragment>
      <SectionTitle title="사전연명의료의향서 등록기관의 설명사항 확인방법" />
      <Typography sx={{ margin: '40px 0 0 32px', fontSize: '14px' }}>
        위의 사항을 설명받고 이해했음을 확인하여, 임종과정에 있다는 의학적
        판단을 받은 경우 연명의료를 시행하지 않거나 중단하는 것에 동의합니다.
      </Typography>
      <RowContainer xs={12} sx={{ margin: '20px 0px 30px 32px' }}>
        <Stack direction="row" spacing={1}>
          <Form.MuiRadioGroup
            i18nKey="DNR.EXPLANATION"
            i18nNullKey="ETC"
            values={[1, 2, 3]}
            whiteSpace="pre"
            disabled={disabled}
            direction="column"
            defaultValue={getValues('explanation_check')}
            onChange={v => setValue('explanation_check', v)}
            width={'9vw'}
          />

          <Form.MuiTextField
            type="date"
            required={false}
            disabled={disabled}
            sx={{ width: '45vw' }}
            {...register('explanation_check_sig_date')}
          />

          <RowContent title={'성명'} titleRatio={1.5} childrenRatio={8}>
            <Form.MuiTextField
              required={false}
              disabled={disabled}
              {...register('explanation_check_sig_name')}
            />
          </RowContent>

          <RowContent title={'서명'} titleRatio={1.5} childrenRatio={8}>
            <Form.MuiTextField
              required={false}
              disabled={disabled}
              {...register('explanation_check_sig_sig')}
            />
          </RowContent>
        </Stack>
      </RowContainer>
    </Fragment>
  );
};

export default Explanation;
