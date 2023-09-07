import { Fragment, useState } from 'react';
import { Stack } from '@mui/material';

import Form from 'components/Form';
import CheckboxDisease from './CheckboxDisease';
import { IFormRegister, IFormValues } from 'routes/Main/type';

import RowContainer from '../components/RowContainer';
import RowContent from './RowContentSub';
import SectionTitle from '../components/SectionTitle';

interface Props extends IFormRegister, IFormValues {
  disabled?: boolean;
}

const DiseaseHistory = (props: Props) => {
  const { disabled, register, getValues, setValue } = props;

  const [history, setHistory] = useState(
    getValues('disease_history.history.value')
  );

  return (
    <Fragment>
      <SectionTitle title="병력" />

      <RowContainer xs={12}>
        <RowContent title="과거력">
          <Stack direction="row" spacing={3}>
            <Form.MuiRadioGroup
              i18nKey="EXIST"
              values={[1, 2]}
              disabled={disabled}
              defaultValue={getValues('disease_history.history.value')}
              onChange={v => {
                setValue('disease_history.history.value', v);
                setHistory(v);
              }}
            />
            <CheckboxDisease
              i18nNullKey="ETC"
              disabled={history === '1' ? true : false}
              i18nKey="HOSPITALIZATION.DISEASE.HISTORY"
              values={[1, 2, 3, 4, 5]}
              defaultValue={getValues('disease_history.history.checked')}
              onChange={v => {
                setValue('disease_history.history.checked', v);
              }}
            />
          </Stack>
        </RowContent>
        <RowContent title="">
          <Stack direction="row" spacing={3}>
            <Form.MuiTextField
              required={false}
              disabled={disabled}
              multiline
              minRows={5}
              placeholder="직접 입력"
              {...register('disease_history.history.input')}
            />
          </Stack>
        </RowContent>
        <RowContent title="가족력">
          <Stack direction="row" spacing={3}>
            <Form.MuiRadioGroup
              i18nKey="EXIST"
              values={[1, 2]}
              disabled={disabled}
              defaultValue={getValues('disease_history.family_history.value')}
              onChange={v =>
                setValue('disease_history.family_history.value', v)
              }
            />
            <Form.MuiTextField
              required={false}
              disabled={disabled}
              placeholder="ex. 부-고혈압"
              {...register('disease_history.family_history.input')}
            />
          </Stack>
        </RowContent>
        <RowContent title="입원/수술력">
          <Stack direction="row" spacing={3}>
            <Form.MuiRadioGroup
              i18nKey="EXIST"
              values={[1, 2]}
              disabled={disabled}
              defaultValue={getValues(
                'disease_history.operation_history.value'
              )}
              onChange={v =>
                setValue('disease_history.operation_history.value', v)
              }
            />
            <Form.MuiTextField
              required={false}
              disabled={disabled}
              placeholder="ex. 2022.01-ㅇㅇ대학교병원 충수절제술"
              {...register('disease_history.operation_history.input')}
            />
          </Stack>
        </RowContent>
        <RowContent title="최근 투약">
          <Stack direction="row" spacing={3}>
            <Form.MuiRadioGroup
              i18nKey="EXIST"
              values={[1, 2]}
              disabled={disabled}
              defaultValue={getValues('disease_history.latest_medicine.value')}
              onChange={v =>
                setValue('disease_history.latest_medicine.value', v)
              }
            />
            <Form.MuiTextField
              required={false}
              disabled={disabled}
              placeholder="직접 입력"
              {...register('disease_history.latest_medicine.input')}
            />
          </Stack>
        </RowContent>
        <RowContent title="약물 알러지">
          <Stack direction="row" spacing={3}>
            <Form.MuiRadioGroup
              i18nKey="EXIST"
              values={[1, 2]}
              disabled={disabled}
              defaultValue={getValues('disease_history.medicine_allergy.value')}
              onChange={v =>
                setValue('disease_history.medicine_allergy.value', v)
              }
            />
            <Form.MuiTextField
              required={false}
              disabled={disabled}
              placeholder="직접 입력"
              {...register('disease_history.medicine_allergy.input')}
            />
          </Stack>
        </RowContent>
        <RowContent title="조영제 알러지">
          <Stack direction="row" spacing={3}>
            <Form.MuiRadioGroup
              i18nKey="EXIST"
              values={[1, 2]}
              disabled={disabled}
              defaultValue={getValues('disease_history.allergy.value')}
              onChange={v => setValue('disease_history.allergy.value', v)}
            />
            <Form.MuiTextField
              required={false}
              disabled={disabled}
              placeholder="직접 입력"
              {...register('disease_history.allergy.input')}
            />
          </Stack>
        </RowContent>
        <RowContent title="음식 알러지">
          <Stack direction="row" spacing={3}>
            <Form.MuiRadioGroup
              i18nKey="EXIST"
              values={[1, 2]}
              disabled={disabled}
              defaultValue={getValues('disease_history.food_allergy.value')}
              onChange={v => setValue('disease_history.food_allergy.value', v)}
            />
            <Form.MuiTextField
              required={false}
              disabled={disabled}
              placeholder="직접 입력"
              {...register('disease_history.food_allergy.input')}
            />
          </Stack>
        </RowContent>
      </RowContainer>
    </Fragment>
  );
};

export default DiseaseHistory;
