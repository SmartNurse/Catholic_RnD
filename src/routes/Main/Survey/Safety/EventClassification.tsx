import Form from 'components/Form';
import { IFormValues } from 'routes/Main/type';

import { Grid } from '@mui/material';

import RowContainer from '../components/RowContainer';
import SectionTitle from '../components/SectionTitle';

interface Props extends IFormValues {
  disabled?: boolean;
}

const EventClassification = (props: Props) => {
  const { disabled, getValues, setValue } = props;

  return (
    <>
        <SectionTitle title="사건 등급 분류" />
        <RowContainer xs={12}>
            <Grid item flex={1}>
                <Form.MuiRadioGroup
                    i18nKey="SAFETY.EVENT.CLASSIFICATION"
                    values={[8, 7, 6, 5, 4, 3, 2, 1, 0]}
                    disabled={disabled}
                    defaultValue={getValues('event_classification')}
                    onChange={v => setValue('event_classification', v)}
                    width="auto"
                    direction="column"
                />
            </Grid>
        </RowContainer>
    </>
  );
};

export default EventClassification;
