import Form from 'components/Form';
import { IFormValues } from 'routes/Main/type';

import RowContainer from '../components/RowContainer';
import RowContent from '../components/RowContent';
import SectionTitle from '../components/SectionTitle';

interface Props extends IFormValues {
  disabled?: boolean;
}

const FunctionalEvaluation = (props: Props) => {
  const { disabled, getValues, setValue } = props;

  return (
    <RowContainer>
      <SectionTitle title="기능평가" mb={0} />

      <RowContainer ratio={12}>
        <RowContent title="스스로 앉기" titleRatio={4} childrenRatio={8}>
          <Form.MuiRadioGroup
            i18nKey="HOSPITALIZATION.FUNCTIONAL.EVALUATION"
            values={[1, 2, 3]}
            disabled={disabled}
            defaultValue={getValues('functional_evaluation.sit')}
            onChange={v => setValue('functional_evaluation.sit', v)}
            width="125px"
          />
        </RowContent>
        <RowContent
          title="앉은 상태에서 혼자 일어서기"
          titleRatio={4}
          childrenRatio={8}
        >
          <Form.MuiRadioGroup
            i18nKey="HOSPITALIZATION.FUNCTIONAL.EVALUATION"
            values={[1, 2, 3]}
            disabled={disabled}
            defaultValue={getValues('functional_evaluation.stand_up')}
            onChange={v => setValue('functional_evaluation.stand_up', v)}
            width="125px"
          />
        </RowContent>
        <RowContent
          title="침대에서 휠체어로 이동하기"
          titleRatio={4}
          childrenRatio={8}
        >
          <Form.MuiRadioGroup
            i18nKey="HOSPITALIZATION.FUNCTIONAL.EVALUATION"
            values={[1, 2, 3]}
            disabled={disabled}
            defaultValue={getValues('functional_evaluation.wheel_chair')}
            onChange={v => setValue('functional_evaluation.wheel_chair', v)}
            width="125px"
          />
        </RowContent>
        <RowContent title="독립보행" titleRatio={4} childrenRatio={8}>
          <Form.MuiRadioGroup
            i18nKey="HOSPITALIZATION.FUNCTIONAL.EVALUATION"
            values={[1, 2, 3]}
            disabled={disabled}
            defaultValue={getValues('functional_evaluation.walk')}
            onChange={v => setValue('functional_evaluation.walk', v)}
            width="125px"
          />
        </RowContent>
      </RowContainer>
    </RowContainer>
  );
};

export default FunctionalEvaluation;
