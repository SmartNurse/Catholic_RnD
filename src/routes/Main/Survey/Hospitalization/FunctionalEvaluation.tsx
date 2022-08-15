import { FormProps } from '../../type';

import RowContainer from '../components/RowContainer';
import RowContent from '../components/RowContent';
import SurveyRadio from '../components/SurveyRadio';
import SectionTitle from '../components/SectionTitle';

const FunctionalEvaluation = (props: FormProps) => {
  const { getValues, setValue } = props;

  if (!getValues || !setValue) return null;
  return (
    <RowContainer>
      <SectionTitle title="기능평가" mb={0} />

      <RowContainer ratio={12}>
        <RowContent title="스스로 앉기" titleRatio={4} childrenRatio={8}>
          <SurveyRadio
            labelKey="HOSPITALIZATION.FUNCTIONAL.EVALUATION"
            radios={[{ value: 1 }, { value: 2 }, { value: 3 }]}
            valueKey="functional_evaluation.sit"
            {...{ getValues, setValue }}
          />
        </RowContent>
        <RowContent
          title="앉은 상태에서 혼자 일어서기"
          titleRatio={4}
          childrenRatio={8}
        >
          <SurveyRadio
            labelKey="HOSPITALIZATION.FUNCTIONAL.EVALUATION"
            radios={[{ value: 1 }, { value: 2 }, { value: 3 }]}
            valueKey="functional_evaluation.stand_up"
            {...{ getValues, setValue }}
          />
        </RowContent>
        <RowContent
          title="침대에서 휠체어로 이동하기"
          titleRatio={4}
          childrenRatio={8}
        >
          <SurveyRadio
            labelKey="HOSPITALIZATION.FUNCTIONAL.EVALUATION"
            radios={[{ value: 1 }, { value: 2 }, { value: 3 }]}
            valueKey="functional_evaluation.wheel_chair"
            {...{ getValues, setValue }}
          />
        </RowContent>
        <RowContent title="독립보행" titleRatio={4} childrenRatio={8}>
          <SurveyRadio
            labelKey="HOSPITALIZATION.FUNCTIONAL.EVALUATION"
            radios={[{ value: 1 }, { value: 2 }, { value: 3 }]}
            valueKey="functional_evaluation.walk"
            {...{ getValues, setValue }}
          />
        </RowContent>
      </RowContainer>
    </RowContainer>
  );
};

export default FunctionalEvaluation;
