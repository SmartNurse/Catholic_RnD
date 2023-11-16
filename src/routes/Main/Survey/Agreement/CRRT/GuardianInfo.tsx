import Form from 'components/Form';

import { Fragment, useState } from 'react';
import { Delete } from '@mui/icons-material';
import {
  Checkbox,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';

import RowContainer from '../../components/RowContainer';
import RowContent from '../../components/RowContent';

import { Ti18nId } from 'hooks/useI18n';
import { IMentalNursingRecord } from 'apis/survey/type';
import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';

import MuiTextField from 'components/Form/MuiTextField';
import SectionTitle from '../../components/SectionTitle';
import { Stack } from '@mui/system';

interface Props extends IFormValues, IFormWatch, IFormRegister {
  disabled?: boolean;
  onRequired: (id: Ti18nId) => void;
  onSuccess: (message: string) => void;
}

const GuardianInfo = (props: Props) => {
  const { disabled, register } = props;

  const infos = [
    { title: '1) 시술명: 지속적신대체요법', value: 'applier_name' },
    {
      title: '2) 시술의:',
      value: 'applier_relp',
    },
  ];

  return (
    <Fragment>
      <SectionTitle title="2. 시술명 / 시술의" />
      <RowContainer xs={11.5} sx={{ margin: '20px 0px 30px 0px' }}>
        {infos.map(({ title, value }) => {
          if (title === '1) 시술명: 지속적신대체요법') {
            return (
              <Grid xs={12}>
                <Typography
                  sx={{
                    lineHeight: '20px',
                    margin: '20px 0 0 15px',
                    fontSize: '14px',
                  }}
                >
                  {title}
                </Typography>
              </Grid>
            );
          }
          return (
            <Grid xs={12}>
              <Stack direction="row">
                <Typography
                  sx={{
                    lineHeight: '20px',
                    margin: '20px 0 0 15px',
                    fontSize: '14px',
                  }}
                >
                  {title}
                </Typography>
                <Form.MuiTextField
                  sx={{
                    margin: '10px 0 0 15px',
                    width: '200px',
                  }}
                  required={false}
                  disabled={disabled}
                  {...register(`${value}`)}
                />
              </Stack>
            </Grid>
          );
        })}
      </RowContainer>
    </Fragment>
  );
};

export default GuardianInfo;
