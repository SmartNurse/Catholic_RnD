import Form from 'components/Form';
import { IFormRegister, IFormValues } from 'routes/Main/type';
import { Stack } from '@mui/material';

import RowContent from '../components/RowContent';
import RowContainer from '../components/RowContainer';
import SectionTitle from '../components/SectionTitle';

interface Props extends IFormRegister, IFormValues {
  disabled?: boolean;
}

const Education = (props: Props) => {
  const { disabled, register, getValues, setValue } = props;

  return (
    <RowContainer>
      <SectionTitle title="교육" />

      <RowContainer ratio={12} sx={{ mt: 'auto' }}>
        <RowContent title="교육방식">
          <Form.MuiRadioGroup
            i18nKey="HOSPITALIZATION.EDUCATION.WAY"
            values={[1, 2, 3, 4]}
            disabled={disabled}
            defaultValue={getValues('education.education_way')}
            onChange={v => setValue('education.education_way', v)}
          />
        </RowContent>
        <RowContent title="교육내용">
          <Stack direction="row" spacing={1}>
            <Form.MuiCheckboxGroup
              i18nNullKey="ETC"
              i18nKey="HOSPITALIZATION.EDUCATION.CONTENTS"
              values={[1, 2, 3, 0]}
              disabled={disabled}
              defaultValue={getValues('education.education_contents.checked')}
              onChange={v =>
                setValue('education.education_contents.checked', v)
              }
            />
            <Form.MuiTextField
              required={false}
              disabled={disabled}
              placeholder="직접 입력"
              sx={{ maxWidth: '150px' }}
              {...register('education.education_contents.input')}
            />
          </Stack>
        </RowContent>
      </RowContainer>
    </RowContainer>
  );
};

export default Education;
