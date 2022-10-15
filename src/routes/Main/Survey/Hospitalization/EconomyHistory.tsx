import Form from 'components/Form';
import { IFormValues } from 'routes/Main/type';

import RowContainer from '../components/RowContainer';
import RowContent from '../components/RowContent';
import SectionTitle from '../components/SectionTitle';

const EconomyHistory = (props: IFormValues) => {
  const { getValues, setValue } = props;

  return (
    <RowContainer>
      <SectionTitle title="경제력" mb={-5.75} />

      <RowContainer ratio={12} sx={{ mb: 'auto' }}>
        <RowContent title="사회사업팀 상담">
          <Form.MuiRadioGroup
            i18nKey="NEED"
            values={[1, 2]}
            defaultValue={getValues('economy_history.counseling')}
            onChange={v => setValue('economy_history.counseling', v)}
          />
        </RowContent>
        <RowContent title="정서상태">
          <Form.MuiCheckboxGroup
            i18nNullKey="ETC"
            i18nKey="HOSPITALIZATION.ECONOMY.MIND"
            values={[1, 2, 3, 4, 5]}
            defaultValue={getValues('economy_history.mind_status.checked')}
            onChange={v => setValue('economy_history.mind_status.checked', v)}
          />
        </RowContent>
      </RowContainer>
    </RowContainer>
  );
};

export default EconomyHistory;
