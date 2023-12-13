import { Fragment } from 'react';
import { Typography, Grid, Box, Stack } from '@mui/material';
import Form from 'components/Form';

import RowContainer from '../../components/RowContainer';
import { Ti18nId } from 'hooks/useI18n';
import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';

import SectionTitle from '../../components/SectionTitle';

interface Props extends IFormValues, IFormWatch, IFormRegister {
  disabled?: boolean;
  onRequired: (id: Ti18nId) => void;
  onSuccess: (message: string) => void;
}

const checks = [
  {
    label: '환자가족 전원의 의견이 필요한 경우',
    key: 'fall_education.checked1',
  },
];

const DNRcontents2 = (props: Props) => {
  const { disabled, register, getValues, setValue } = props;

  return (
    <Fragment>
      <Box sx={{ margin: '38px 0px 30px 10px' }}>
        <Grid container xs={11.8}>
          {checks.map((v, i) => {
            return (
              <Grid item xs={11.5}>
                <Form.MuiCheckbox
                  label={v.label}
                  disabled={disabled}
                  defaultValue={Boolean(getValues(v.key)) ? [v.label] : []}
                  onChange={(_, checked) => {
                    setValue(v.key, checked);
                  }}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Fragment>
  );
};

export default DNRcontents2;
