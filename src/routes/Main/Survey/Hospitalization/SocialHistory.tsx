import { Stack } from '@mui/material';

import { FormProps } from '../../type';

import RowContainer from '../components/RowContainer';
import RowContent from '../components/RowContent';
import SurveyRadio from '../components/SurveyRadio';
import SectionTitle from '../components/SectionTitle';
import SurveyInput from '../components/SurveyInput';
import SurveySelect from '../components/SurveySelect';

const SocialHistory = (props: FormProps) => {
  const { register, getValues, setValue } = props;

  if (!getValues || !setValue) return null;
  return (
    <RowContainer>
      <SectionTitle title="사회력" mb={0} />

      <RowContainer ratio={12}>
        <RowContent title="결혼여부">
          <SurveyRadio
            labelKey="HOSPITALIZATION.MARRY"
            radios={[{ value: 1 }, { value: 2 }]}
            valueKey="social_history.marry"
            {...{ getValues, setValue }}
          />
        </RowContent>
        <RowContent title="언어">
          <SurveySelect
            options={['한국어', '영어', '일본어', '중국어', '기타 언어']}
            {...register('social_history.language')}
          />
        </RowContent>
        <RowContent title="직업">
          <SurveyInput
            placeholder="직접 입력"
            {...register('social_history.job')}
          />
        </RowContent>
        <RowContent title="종교적 요구사항">
          <Stack direction="row" spacing={1}>
            <SurveyRadio
              labelKey="EXIST"
              radios={[{ value: 1 }, { value: 2 }]}
              valueKey="social_history.religion.value"
              {...{ getValues, setValue }}
            />
            <SurveyInput
              required={false}
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
