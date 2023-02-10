import Form from 'components/Form';
import { IFormValues } from 'routes/Main/type';

import { Grid } from '@mui/material';

import RowContainer from '../components/RowContainer';
import SectionTitle from '../components/SectionTitle';

interface Props extends IFormValues {
  disabled?: boolean;
}

const AccidentResult = (props: Props) => {
  const { disabled, getValues, setValue } = props;

  return (
    <>
        <SectionTitle title="사고 결과" />
        <RowContainer xs={12}>
            <Grid item flex={1}>
                <Form.MuiRadioGroup
                    i18nKey="SAFETY.ACCIDENT.RESULT"
                    values={[1, 2, 3]}
                    disabled={disabled}
                    defaultValue={getValues('accident_result')}
                    onChange={v => setValue('accident_result', v)}
                    width="auto"
                />
            </Grid>
        </RowContainer>
    </>
  );
};

export default AccidentResult;
