import Form from 'components/Form';
import { IFormValues, IFormRegister } from 'routes/Main/type';

import { Grid } from '@mui/material';

import RowContainer from '../components/RowContainer';
import SectionTitle from '../components/SectionTitle';

import FourRadio from './components/FourRadio';

interface Props extends IFormValues, IFormRegister {
  disabled?: boolean;
}

const OtherType = (props: Props) => {
  const { disabled, getValues, setValue, register } = props;

  return (
    <>
      <SectionTitle title="오류 유형 - 기타" />
      <RowContainer xs={12}>
        <Grid item flex={1}>
          <FourRadio
            i18nKey="SAFETY.OTHER.TYPE"
            values={[1, 2, 3, 4, 5, 6, 0]}
            disabled={disabled}
            defaultValue={getValues('other_type')}
            onChange={v => setValue('other_type', v)}
            width="auto"
          />
          <Form.MuiTextField
            required={false}
            fullWidth={false}
            disabled={disabled}
            placeholder="직접 입력"
            sx={{ marginLeft: '10px' }}
            {...register('other_type_etc')}
          />
        </Grid>
      </RowContainer>
    </>
  );
};

export default OtherType;
