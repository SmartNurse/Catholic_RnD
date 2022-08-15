import { FormProps } from '../../type';

import RowContainer from '../components/RowContainer';
import RowContent from '../components/RowContent';
import SurveyRadio from '../components/SurveyRadio';
import SectionTitle from '../components/SectionTitle';
import SurveyCheckbox from '../components/SurveyCheckbox';

const EconomyHistory = (props: FormProps) => {
  const { getValues, setValue } = props;

  if (!getValues || !setValue) return null;
  return (
    <RowContainer>
      <SectionTitle title="경제력" mb={-5.75} />

      <RowContainer ratio={12} sx={{ mb: 'auto' }}>
        <RowContent title="사회사업팀 상담">
          <SurveyRadio
            labelKey="NEED"
            radios={[{ value: 1 }, { value: 2 }]}
            valueKey="economy_history.counseling"
            {...{ getValues, setValue }}
          />
        </RowContent>
        <RowContent title="정서상태">
          <SurveyCheckbox
            checkboxes={[
              { name: '안정' },
              { name: '불안' },
              { name: '슬픔' },
              { name: '분노' },
              { name: '우울' },
            ]}
            defaultChecked={getValues('economy_history.mind_status.checked')}
            onChange={values =>
              setValue!('economy_history.mind_status.checked', values)
            }
          />
        </RowContent>
      </RowContainer>
    </RowContainer>
  );
};

export default EconomyHistory;
