import Form from 'components/Form';
import { IFormRegister, IFormValues } from 'routes/Main/type';

import RowContent from '../components/RowContent';
import RowContainer from '../components/RowContainer';
import SectionTitle from '../components/SectionTitle';

interface Props extends IFormRegister, IFormValues {}

const Education = (props: Props) => {
  const { register, getValues, setValue } = props;

  return (
    <RowContainer>
      <SectionTitle title="교육" />

      <RowContainer ratio={12} sx={{ mt: 'auto' }}>
        <RowContent title="교육방식">
          <Form.MuiRadioGroup
            i18nKey="HOSPITALIZATION.EDUCATION.WAY"
            values={[1, 2, 3, 4]}
            defaultValue={getValues('education.education_way')}
            onChange={v => setValue('education.education_way', v)}
          />
        </RowContent>
        <RowContent title="교육내용">
          <Form.MuiCheckboxGroup
            i18nNullKey="ETC"
            i18nKey="HOSPITALIZATION.EDUCATION.CONTENTS"
            values={[1, 2, 3, 0]}
            defaultValue={getValues('education.education_contents.checked')}
            onChange={v => setValue('education.education_contents.checked', v)}
          />
          <Form.MuiTextField
            required={false}
            placeholder="직접 입력"
            {...register('education.education_contents.input')}
          />
        </RowContent>
      </RowContainer>
    </RowContainer>
  );
};

export default Education;
