import { FormProps } from '../../type';

import RowContainer from '../components/RowContainer';
import RowContent from '../components/RowContent';
import SurveyRadio from '../components/SurveyRadio';
import SectionTitle from '../components/SectionTitle';
import SurveyCheckbox from '../components/SurveyCheckbox';
import SurveyInput from '../components/SurveyInput';

const Education = (props: FormProps) => {
  const { register, getValues, setValue } = props;

  if (!getValues || !setValue) return null;
  return (
    <RowContainer>
      <SectionTitle title="교육" />

      <RowContainer ratio={12} sx={{ mt: 'auto' }}>
        <RowContent title="교육방식">
          <SurveyRadio
            labelKey="HOSPITALIZATION.ECONOMY.WAY"
            radios={[{ value: 1 }, { value: 2 }]}
            valueKey="education.education_way"
            {...{ getValues, setValue }}
          />
        </RowContent>
        <RowContent title="교육내용">
          <SurveyCheckbox
            checkboxes={[
              { name: '질환 및 치료' },
              { name: '약물' },
              { name: '영양' },
              { name: '기타' },
            ]}
            defaultChecked={getValues('education.education_contents.checked')}
            onChange={values =>
              setValue!('education.education_contents.checked', values)
            }
          />
          <SurveyInput
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
