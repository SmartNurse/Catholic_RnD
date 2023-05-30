import { Grid, Box } from '@mui/material';

import Form from 'components/Form';
import { IFormRegister, IFormValues } from 'routes/Main/type';

import SectionTitle from '../../components/SectionTitle';
import RowContent from '../../components/RowContent';
import RowContainer from '../../components/RowContainer';

interface Props extends IFormRegister, IFormValues {
  disabled?: boolean;
}

const Hospice = (props: Props) => {
  const { disabled, register, getValues, setValue } = props;

  return (
    <>
      <SectionTitle title="호스피스 이용" />
      <Box sx={{ width: '98%', margin: '30px auto 24px 33px' }}>
        <RowContainer ratio={12} sx={{ mb: 'auto' }}>
          <RowContent
            title="호스피스 이용 의향"
            titleRatio={10}
            childrenRatio={2}
          >
            <Form.MuiRadioGroup
              i18nKey="EXIST"
              values={[2, 1]}
              disabled={disabled}
              defaultValue={getValues('economy_history.counseling')}
              onChange={v => setValue('economy_history.counseling', v)}
            />
          </RowContent>
        </RowContainer>
      </Box>
    </>
  );
};

export default Hospice;
