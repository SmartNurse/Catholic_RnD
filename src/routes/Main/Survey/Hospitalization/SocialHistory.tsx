import { Stack } from '@mui/material';

import Form from 'components/Form';
import { IFormRegister, IFormValues } from 'routes/Main/type';

import RowContainer from '../components/RowContainer';
import RowContent from '../components/RowContent';
import SectionTitle from '../components/SectionTitle';

interface Props extends IFormRegister, IFormValues {
  disabled?: boolean;
}

const SocialHistory = (props: Props) => {
  const { disabled, register, getValues, setValue } = props;

  return (
    <RowContainer>
      <SectionTitle title="사회력" mb={0} />

      <RowContainer ratio={12}>
        <RowContent title="결혼여부" titleRatio={2.65} childrenRatio={8.2}>
          <Form.MuiRadioGroup
            i18nKey="HOSPITALIZATION.MARRY"
            values={[1, 2]}
            disabled={disabled}
            defaultValue={getValues('social_history.marry')}
            onChange={v => setValue('social_history.marry', v)}
          />
        </RowContent>
        <RowContent title="언어" titleRatio={2.65} childrenRatio={8.2}>
          <Form.MuiSelect
            disabled={disabled}
            options={['한국어', '영어', '일본어', '중국어', '기타 언어']}
            {...register('social_history.language')}
          />
        </RowContent>
        <RowContent title="직업" titleRatio={2.65} childrenRatio={8.2}>
          <Form.MuiTextField
            required={false}
            disabled={disabled}
            placeholder="직접 입력"
            {...register('social_history.job')}
          />
        </RowContent>
        <RowContent
          title="종교적 요구사항"
          titleRatio={2.65}
          childrenRatio={8.2}
        >
          <Stack direction="row" spacing={1}>
            <Form.MuiRadioGroup
              i18nKey="EXIST"
              values={[1, 2]}
              disabled={disabled}
              defaultValue={getValues('social_history.religion.value')}
              onChange={v => setValue('social_history.religion.value', v)}
            />
            <Form.MuiTextField
              required={false}
              disabled={disabled}
              placeholder="직접 입력"
              {...register('social_history.religion.input')}
            />
          </Stack>
        </RowContent>
      </RowContainer>
    </RowContainer>
  );
};

export default SocialHistory;
